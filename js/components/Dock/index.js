class Dock {
    constructor(stateManager, elementId) {
        this.state = stateManager;
        this.container = document.getElementById(elementId);
        this.dragId = null;
        this.init();
    }
    init() {
        this.state.subscribe((event) => {
            if (event === 'stateChanged' || event === 'favoritesChanged' || event === 'historyChanged' || event === 'dockChanged' || event === 'themeChanged') {
                this.render();
            }
        });
        const tabs = document.querySelectorAll('.dock-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.state.activeDockTab = tab.dataset.tab;
                this.render();
            });
        });
        const clearBtn = document.getElementById('dockClearHistory');
        if (clearBtn) {
            clearBtn.onclick = () => {
                if (confirm(this.state.t('confirmClearHistory') || "Clear History?")) {
                    this.state.rollHistory = [];
                    this.state.saveData();
                    this.render();
                }
            };
        }
        this.setupTrash();
    }
    setupTrash() {
        const trash = document.getElementById('dockDeleteBadge');
        if (!trash) return;
        trash.ondragover = (e) => {
            if (this.state.dragType !== 'favorite' && this.state.dragType !== 'history') return;
            e.preventDefault();
            e.stopPropagation();
            trash.style.transform = "translateX(-50%) scale(1.1)";
        };
        trash.ondragleave = () => {
            trash.style.transform = "translateX(-50%) scale(1)";
        };
        trash.ondrop = (e) => {
            e.preventDefault();
            e.stopPropagation();
            trash.style.transform = "translateX(-50%) scale(1)";
            const data = this.getDragPayload(e);
            if (data && data.id !== undefined) {
                if (data.source === 'favorite') {
                    this.state.deleteFavorite(data.id);
                } else if (data.source === 'history') {
                    this.state.deleteRollHistoryItem(data.id);
                }
            }
        };
    }
    getDragPayload(e) {
        try { return JSON.parse(e.dataTransfer.getData('text/plain')); } catch (err) { return null; }
    }
    render() {
        if (!this.container) return;
        const prevPos = window.ReorderAnimator ? window.ReorderAnimator.capture(this.container, '.fav-name-chip', el => el.dataset.favId) : null;
        this.container.innerHTML = '';
        const mode = this.state.activeDockTab || 'favorites';
        const favCount = document.getElementById('favCount');
        if (favCount) favCount.textContent = `(${this.state.favorites.length})`;
        const histCount = document.getElementById('historyCount');
        if (histCount) histCount.textContent = `(${this.state.rollHistory.length})`;
        if (mode === 'favorites') {
            this.renderFavorites();
            if (window.ReorderAnimator && prevPos) {
                window.ReorderAnimator.animate({
                    container: this.container,
                    selector: '.fav-name-chip',
                    prevPositions: prevPos,
                    getKey: el => el.dataset.favId,
                    transition: 'transform 0.28s cubic-bezier(0.22, 0.61, 0.36, 1)',
                    onNewElement: (chip) => {
                        chip.classList.add('pop-in');
                        chip.addEventListener('animationend', () => chip.classList.remove('pop-in'), { once: true });
                    }
                });
            }
        }
        else this.renderHistory();
    }
    renderFavorites() {
        if (this.state.favoriteGapPreview) this.state.favoriteGapPreview.reset();
        const list = this.state.favorites;
        if (!list.length) {
            this.container.innerHTML = `<div class="dock-empty">${this.state.t('favoritesEmpty') || 'No favorites yet'}</div>`;
            this.setupChipDropZone(this.container.querySelector('.dock-empty'));
            return;
        }
        const board = document.createElement('div');
        board.className = 'fav-chip-board';
        this.setupChipDropZone(board);
        const appendGap = (index) => {
            const isHead = index === 0;
            const isTail = index === list.length;
            const position = isHead ? 'head' : (isTail ? 'tail' : undefined);
            board.appendChild(this.createFavoriteGap(index, position));
        };
        appendGap(0);
        list.forEach((fav, index) => {
            board.appendChild(this.createFavoriteChip(fav, index));
            appendGap(index + 1);
        });
        this.container.appendChild(board);
    }
    setupChipDropZone(el) {
        if (!el) return;
        el.ondragover = (e) => {
            if (this.state.dragType === 'chip') {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'copy';
                el.style.backgroundColor = 'var(--surface-hover)';
                el.style.borderRadius = '12px';
            }
        };
        el.ondragleave = () => {
            el.style.backgroundColor = '';
        };
        el.ondrop = (e) => {
            if (this.state.dragType === 'chip') {
                e.preventDefault();
                el.style.backgroundColor = '';
                const data = this.getDragPayload(e);
                if (data && data.id) {
                    this.handleChipDrop(data.id);
                }
            }
        };
    }
    handleChipDrop(chipId) {
        const index = this.state.items.findIndex(i => i.id === chipId);
        if (index === -1) return;
        const range = this.state.getLinkedChainRange(this.state.items, index);
        const itemsToSave = this.state.items.slice(range.start, range.end + 1);
        this.state.addFavoriteFromItems(itemsToSave);
    }
    createFavoriteGap(index, position) {
        const gap = document.createElement('div');
        gap.className = 'fav-drop-zone';
        if (position) gap.classList.add(position);
        gap.dataset.favIndex = index;
        gap.ondragover = (e) => {
            if (this.state.dragType !== 'favorite') return;
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            gap.classList.add('drag-over-gap');
            if (this.state.favoriteGapPreview) this.state.favoriteGapPreview.set(index);
        };
        gap.ondragleave = () => {
            gap.classList.remove('drag-over-gap');
            if (this.state.favoriteGapPreview) this.state.favoriteGapPreview.clear(index);
        };
        gap.ondrop = (e) => {
            if (this.state.dragType !== 'favorite') return;
            e.preventDefault();
            gap.classList.remove('drag-over-gap');
            if (this.state.favoriteGapPreview) this.state.favoriteGapPreview.clear();
            const data = this.getDragPayload(e);
            if (data && data.id) {
                this.state.moveFavorite(data.id, index);
            }
        };
        if (this.state.favoriteGapPreview) this.state.favoriteGapPreview.registerGap(index, gap);
        return gap;
    }
    renderHistory() {
        const list = this.state.rollHistory;
        if (!list.length) {
            this.container.innerHTML = `<div class="dock-empty">${this.state.t('historyEmpty') || 'No history yet'}</div>`;
            return;
        }
        const reversed = [...list].reverse();
        reversed.forEach((entry, i) => {
            const el = document.createElement('div');
            el.className = 'history-item';
            el.draggable = true;
            const fullText = this.state.buildPromptFromItems(entry.items);
            const originalIndex = list.length - 1 - i;
            const textSpan = document.createElement('span');
            textSpan.className = 'history-text';
            textSpan.textContent = fullText || "(Empty)";
            el.appendChild(textSpan);
            const copyBtn = document.createElement('button');
            copyBtn.className = 'history-copy-btn';
            copyBtn.type = 'button';
            copyBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
            copyBtn.title = "Copy Text";
            copyBtn.onclick = (e) => {
                e.stopPropagation();
                if (!fullText) return;
                navigator.clipboard.writeText(fullText).then(() => {
                    this.state.notify('showToast', this.state.t('toastPromptCopied') || "Copied!");
                    if (window.Animator) window.Animator.play(copyBtn, 'bounce');
                });
            };
            el.appendChild(copyBtn);
            el.ondragstart = (e) => {
                this.state.dragType = 'history';
                e.dataTransfer.setData('text/plain', JSON.stringify({ source: 'history', id: originalIndex }));
                e.dataTransfer.effectAllowed = 'copyMove';
                el.classList.add('dragging');
                document.body.classList.add('delete-mode');
                const ghost = document.createElement('div');
                ghost.className = 'history-drag-ghost';
                ghost.innerText = (fullText.length > 20 ? fullText.substring(0, 20) + '...' : fullText) || "History";
                document.body.appendChild(ghost);
                e.dataTransfer.setDragImage(ghost, 0, 0);
                setTimeout(() => {
                    if (ghost.parentNode) ghost.parentNode.removeChild(ghost);
                }, 0);
            };
            el.ondragend = () => {
                this.state.dragType = null;
                el.classList.remove('dragging');
                document.body.classList.remove('delete-mode');
            };
            el.onclick = () => {
                if (el.classList.contains('dragging')) return;
                const skipConfirm = localStorage.getItem('promit_skip_history_restore') === 'true';
                const restoreAction = () => {
                    this.state.items = JSON.parse(JSON.stringify(entry.items));
                    this.state.pushHistory();
                    this.state.notify('stateChanged');
                    this.state.notify('showToast', this.state.t('toastRollRestored') || "History Restored");
                };
                if (skipConfirm) {
                    restoreAction();
                    return;
                }
                if (window.Modal) {
                    window.Modal.show({
                        title: this.state.t('confirmRestoreTitle') || "Restore History",
                        content: this.state.t('confirmRestoreBody') || "Overwrite current work?",
                        checkbox: {
                            label: this.state.t('dontShowAgain') || "Don't show again"
                        },
                        buttons: [
                            {
                                label: this.state.t('confirmLabel') || "Confirm",
                                className: 'btn-confirm',
                                onClick: (isChecked) => {
                                    if (isChecked) {
                                        localStorage.setItem('promit_skip_history_restore', 'true');
                                    }
                                    restoreAction();
                                    window.Modal.close();
                                }
                            },
                            {
                                label: this.state.t('cancelLabel') || "Cancel",
                                className: 'btn-cancel',
                                onClick: () => {
                                    window.Modal.close();
                                }
                            }
                        ],
                        showCloseIcon: false
                    });
                } else {
                    if (confirm(this.state.t('confirmRestoreBody') || "Restore this state?")) {
                        restoreAction();
                    }
                }
            };
            this.container.appendChild(el);
        });
    }
    createFavoriteChip(fav, index) {
        const chip = document.createElement('div');
        chip.className = 'cap fav-name-chip';
        chip.textContent = (fav.name || '').trim();
        chip.draggable = true;
        chip.dataset.favId = fav.id;
        chip.dataset.favId = fav.id;
        chip.ondragstart = (e) => {
            this.state.dragType = 'favorite';
            e.dataTransfer.setData('text/plain', JSON.stringify({ source: 'favorite', id: fav.id }));
            e.dataTransfer.effectAllowed = 'copyMove';
            document.body.classList.add('delete-mode');
            chip.classList.add('dragging');
        };
        if (window.CommonUtils && window.CommonUtils.addLongPress) {
            window.CommonUtils.addLongPress(chip, () => this.activateInlineEdit(fav, chip), 600);
        }
        chip.ondragend = () => {
            this.state.dragType = null;
            document.body.classList.remove('delete-mode');
            chip.classList.remove('dragging');
        };
        chip.onclick = () => {
            if (chip.classList.contains('dragging')) return;
            const skipConfirm = localStorage.getItem('promit_skip_fav_apply') === 'true';
            const applyAction = () => {
                this.state.applyFavorite(fav.id);
            };
            if (skipConfirm) {
                applyAction();
                return;
            }
            if (window.Modal) {
                window.Modal.show({
                    title: this.state.t('confirmApplyFavoriteTitle') || "Apply Favorite",
                    content: this.state.t('confirmApplyFavoriteBody') || "Overwrite current work?",
                    checkbox: {
                        label: this.state.t('dontShowAgain') || "Don't show again"
                    },
                    buttons: [
                        {
                            label: this.state.t('confirmLabel') || "Confirm",
                            className: 'btn-confirm',
                            onClick: (isChecked) => {
                                if (isChecked) {
                                    localStorage.setItem('promit_skip_fav_apply', 'true');
                                }
                                applyAction();
                                window.Modal.close();
                            }
                        },
                        {
                            label: this.state.t('cancelLabel') || "Cancel",
                            className: 'btn-cancel',
                            onClick: () => {
                                window.Modal.close();
                            }
                        }
                    ],
                    showCloseIcon: false
                });
            } else if (confirm(this.state.t('confirmApplyFavoriteBody') || "Apply this favorite?")) {
                applyAction();
            }
        };
        return chip;
    }
    applyFavorite(id) {
        this.state.applyFavorite(id);
    }
    activateInlineEdit(fav, el) {
        if (el.querySelector('.inline-input')) return;

        el.classList.add('inline-editing');
        el.setAttribute('draggable', 'false');  

         
        el.innerHTML = '';

        const span = document.createElement('span');
        span.className = 'inline-input';
        span.contentEditable = 'plaintext-only';
        span.textContent = fav.name || '';
        span.spellcheck = false;

        el.appendChild(span);

         
        setTimeout(() => {
            span.focus();
            document.execCommand('selectAll', false, null);
        }, 0);

        const finish = (save) => {
            el.classList.remove('inline-editing');
            el.setAttribute('draggable', 'true');

            if (save) {
                const newName = span.textContent.trim();
                 
                if (newName && newName !== fav.name) {
                    this.state.renameFavorite(fav.id, newName);
                    return;  
                }
            }
             
            this.render();
        };

        span.onblur = () => finish(true);
        span.onkeydown = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                span.blur();
            }
            if (e.key === 'Escape') {
                e.preventDefault();
                finish(false);
            }
            e.stopPropagation();
        };
        span.onclick = (e) => e.stopPropagation();
        span.onmousedown = (e) => e.stopPropagation();
    }
}