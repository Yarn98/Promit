class FavoriteControl {
    constructor(stateManager) {
        this.state = stateManager;
        this.labelEl = document.getElementById('activeFavoriteLabel');
        this.editBtn = document.getElementById('activeFavEditBtn');
        this.favBtn = document.querySelector('.btn-fav');
        this.containerWrapper = document.querySelector('.active-fav-wrapper');
        this.activeFavoriteName = '';
        this.isLabelCooldown = false;
        this.init();
    }
    init() {
        this.bindEvents();
        this.state.subscribe((event) => {
            if (event === 'stateChanged' || event === 'historyChanged' || event === 'favoritesChanged') {
                this.render();
            }
        });
        this.render();
    }
    bindEvents() {
        if (this.labelEl) {
            this.labelEl.addEventListener('click', () => this.triggerEdit());
            this.labelEl.addEventListener('keydown', (e) => {
                if (this.labelEl.classList.contains('is-editing') || this.isLabelCooldown) return;
                if ((e.key === 'Enter' || e.key === ' ') && this.state.activeFavoriteId) {
                    e.preventDefault();
                    this.triggerEdit();
                }
            });
        }
        if (this.editBtn) {
            this.editBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.triggerEdit();
            });
        }
        if (this.favBtn) {
            this.favBtn.onclick = () => {
                if (window.Animator) {
                    const icon = this.favBtn.querySelector('svg');
                    if (icon) window.Animator.play(icon, 'pulse');
                }
                this.state.addFavoriteFromCurrent();
            };
        }
    }
    render() {
        const favId = this.state.activeFavoriteId;
        const fav = favId ? this.state.favorites.find(f => f.id === favId) : null;
        if (this.containerWrapper && this.labelEl) {
            if (fav) {
                this.containerWrapper.style.display = 'flex';
                if (!this.labelEl.classList.contains('is-editing')) {
                    this.labelEl.textContent = fav.name;
                    this.activeFavoriteName = fav.name;
                    this.labelEl.classList.add('is-visible');
                }
            } else {
                this.containerWrapper.style.display = 'none';
                this.labelEl.innerText = '';
                this.labelEl.classList.remove('is-visible');
                this.activeFavoriteName = '';
            }
        }
        if (this.favBtn) {
            const isActive = !!favId;
            this.favBtn.classList.toggle('is-active', isActive);
            this.favBtn.setAttribute('aria-label', isActive ? 'Remove from Favorites' : 'Add to Favorites');
        }
    }
    triggerEdit() {
        if (!this.state.activeFavoriteId || this.labelEl.classList.contains('is-editing') || this.isLabelCooldown) return;
        this.beginInlineEdit();
    }
    beginInlineEdit() {
        if (!this.labelEl || !this.state.activeFavoriteId) return;
        const currentName = this.activeFavoriteName || '';
        this.labelEl.classList.add('is-editing');
        const safeValue = currentName.replace(/"/g, '&quot;');
        // Wrap in sizer for auto-width
        this.labelEl.innerHTML = `
            <div class="input-sizer" data-value="${safeValue}">
                <input type="text" class="active-fav-input" value="${safeValue}">
            </div>`;
        const input = this.labelEl.querySelector('input');
        const sizer = this.labelEl.querySelector('.input-sizer');
        if (!input) return;
        let finished = false;
        const handleInput = () => {
            if (sizer) sizer.dataset.value = input.value;
        };
        input.addEventListener('input', handleInput);
        const cleanup = (shouldApply) => {
            if (finished) return;
            finished = true;
            // Clean listeners
            input.removeEventListener('blur', handleBlur);
            input.removeEventListener('keydown', handleKey);
            input.removeEventListener('input', handleInput);
            this.labelEl.classList.remove('is-editing');
            this.labelEl.innerHTML = ''; // Will be refilled by render or logic
            // Prevent accidental immediate re-click
            this.isLabelCooldown = true;
            setTimeout(() => { this.isLabelCooldown = false; }, 100);
            if (shouldApply) {
                this.commitEdit(input.value);
            } else {
                this.render(); // Revert
            }
        };
        const handleBlur = () => cleanup(true);
        const handleKey = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                cleanup(true);
            } else if (e.key === 'Escape') {
                e.preventDefault();
                cleanup(false);
            }
        };
        input.addEventListener('blur', handleBlur);
        input.addEventListener('keydown', handleKey);
        // Focus
        requestAnimationFrame(() => {
            input.focus();
            input.select();
        });
    }
    commitEdit(value) {
        if (!this.state.activeFavoriteId) {
            this.render();
            return;
        }
        const trimmed = (value || '').trim();
        if (!trimmed) {
            // Empty name -> Confirm delete? Or just revert? 
            // Original logic deleted it. Let's keep it safe or consistent.
            // Original App.js: this.deleteFavorite(idx) if empty.
            // Let's ask confirm to be safe, or just delete as per old logic.
            // Old logic: "this.deleteFavorite(idx)" immediately.
            if (confirm("Empty name will remove this favorite. Continue?")) {
                this.state.deleteFavorite(this.state.activeFavoriteId);
            } else {
                this.render();
            }
            return;
        }
        const fav = this.state.favorites.find(f => f.id === this.state.activeFavoriteId);
        if (fav) {
            if (trimmed !== fav.name) {
                this.state.renameFavorite(fav.id, trimmed);
            } else {
                this.render();
            }
        }
    }
}