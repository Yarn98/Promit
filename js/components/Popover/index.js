class Popover {
    constructor(stateManager) {
        this.state = stateManager;
        this.activeKey = null;
        this.element = document.getElementById('popover');
        this.init();
    }
    init() {
        document.addEventListener('click', (e) => {
            if (!this.activeKey) return;
            const pop = this.element;
            if (pop.contains(e.target)) return;

             
            const rect = pop.getBoundingClientRect();
            const buffer = 96;
            const inSafeZone = (
                e.clientX >= rect.left - buffer &&
                e.clientX <= rect.right + buffer &&
                e.clientY >= rect.top - buffer &&
                e.clientY <= rect.bottom + buffer
            );

            if (inSafeZone) return;

            if (!e.target.closest('.chip') && !e.target.closest('.popover') && !e.target.closest('.cap')) {
                this.close();
            }
        });
    }
    t(key) { return this.state.t(key); }
    open(item, chipEl, retainState = null) {
        if (!item || !chipEl) return;
        this.activeKey = item.id;
        this.activeItemType = item.type;
        this.element.className = 'popover active';
        this.renderContent(item);
        this.position(chipEl);
        requestAnimationFrame(() => {
            const list = this.element.querySelector('.pop-list');
             
            const targetEl = this.element.querySelector('.pop-item.val-match') || this.element.querySelector('.pop-item.selected');

            if (list && targetEl) {
                 
                 
                const relativeTop = targetEl.offsetTop - list.offsetTop;
                list.scrollTop = relativeTop - (list.clientHeight / 2) + (targetEl.clientHeight / 2);
            }
        });
        if (retainState) {
            this.element.scrollTop = retainState.scrollTop || 0;
            if (retainState.focusValue) {
                requestAnimationFrame(() => {
                    const selector = Utils.escapeSelector(retainState.focusValue);
                    const el = this.element.querySelector(`.pop-item[data-val="${selector}"]`);
                    if (el) el.scrollIntoView({ block: 'center' });
                });
            }
        }
    }
    close() {
        this.element.classList.remove('active');
        this.activeKey = null;
        this.activeItemType = null;
    }
    renderContent(item) {
        const type = item.type;
        const opts = this.state.getSortedOptions(type);
        const itemLabel = this.state.getTypeLabel(type);

         
        let html = `<div class="pop-header">
                        <span class="pop-section-label">${Utils.escapeHtml(itemLabel)}</span>
                        <button type="button" class="pop-close-btn" aria-label="Close">×</button>
                    </div>`;

         
        html += `<div class="pop-list">`;
        const isRand = item.isRandom ? 'selected' : '';
        html += `<div class="pop-item random-opt ${isRand}" data-random="true">${Utils.escapeHtml(this.t('popoverRandom'))}</div>`;
        opts.forEach(opt => {
            const isMatch = (String(item.value) === String(opt));
            const selected = (isMatch && !item.isRandom) ? 'selected' : '';
            const matchClass = isMatch ? 'val-match' : '';
            const safeVal = Utils.escapeAttribute(opt);
            const label = Utils.escapeHtml(opt);
            const editLabel = Utils.escapeAttribute(this.t('favEditTitle'));
            html += `<div class="pop-item ${selected} ${matchClass}" data-val="${safeVal}">
                        <span class="pop-option-label">${label}</span>
                        <button type="button" class="pop-edit-btn" data-edit-val="${safeVal}" aria-label="${editLabel}" title="${editLabel}">
                            ${this.getEditIcon()}
                        </button>
                     </div>`;
        });
        html += `</div>`;

         
         
         
         
         
         
         

        const placeholder = Utils.escapeAttribute(this.t('popoverAddPlaceholder'));
        html += `<div class="pop-add-row"><input class="pop-add-input" type="text" placeholder="${placeholder}"></div>`;
        this.element.innerHTML = html;
        this.bindEvents(item);
    }
    bindEvents(item) {
        const closeBtn = this.element.querySelector('.pop-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.close();
            });
        }

        const randomEl = this.element.querySelector('.pop-item[data-random]');
        if (randomEl) {
            randomEl.addEventListener('click', () => {
                this.setRandom(item.id);
            });
        }
        this.element.querySelectorAll('.pop-item[data-val]').forEach(el => {
            const val = el.getAttribute('data-val');
            el.addEventListener('click', (e) => {
                if (e.target.closest('.pop-edit-btn') || e.target.closest('input')) return;
                this.setValue(item.id, val);
            });
            const editBtn = el.querySelector('.pop-edit-btn');
            if (editBtn) {
                editBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.enableInlineEdit(el, item.type, val);
                });
            }
        });
        const addInput = this.element.querySelector('.pop-add-input');
        if (addInput) {
            addInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.addOption(item.type, item.id, addInput.value);
                }
            });
            addInput.addEventListener('input', () => {
                this.highlightMatches(addInput.value);
            });
            requestAnimationFrame(() => {
                this.highlightMatches(addInput.value);
                addInput.focus();
            });
        }
    }
    highlightMatches(query) {
        const q = (query || '').trim().toLowerCase();
        const items = this.element.querySelectorAll('.pop-item[data-val]');
        items.forEach(el => {
            el.classList.remove('is-search-match', 'is-hidden');
            if (q) {
                const val = (el.getAttribute('data-val') || '').toLowerCase();
                if (val.includes(q)) {
                    el.classList.add('is-search-match');
                    el.style.display = '';
                } else {
                    el.style.display = 'none';
                }
            } else {
                el.style.display = '';
            }
        });
    }
    position(chipEl) {
        const rect = chipEl.getBoundingClientRect();
        const box = document.getElementById('editorContainer').getBoundingClientRect();
        let top = (rect.bottom - box.top + 8);
        this.element.style.top = top + 'px';
        let left = rect.left - box.left;
        if (left + 260 > box.width) {
            left = box.width - 270;
        }
        if (left < 0) left = 10;
        this.element.style.left = left + 'px';
    }
    setRandom(id) {
        const item = this.state.findItemById(id);
        if (item) {
            const val = this.state.drawFromDeck(item.type);
            if (val !== null) {
                item.value = val;
                item.isRandom = true;
                this.state.pushHistory();
                this.state.notify('stateChanged');
            }
        }
        this.close();
    }
    setValue(id, val) {
        const item = this.state.findItemById(id);
        if (item) {
            item.value = val;
            item.isRandom = false;
            this.state.pushHistory();
            this.state.notify('stateChanged');
        }
        this.close();
    }
    addOption(type, id, val) {
        if (!val.trim()) return;
        const capsule = this.state.getCapsuleDefinition(type);
        if (capsule) {
            if (!Array.isArray(capsule.options)) capsule.options = [];
            if (!capsule.options.includes(val)) {
                capsule.options.push(val);
                capsule.options = this.state.sortOptionsList ? this.state.sortOptionsList(capsule.options) : capsule.options.sort();
                this.state.resetDeck(type);
                this.state.saveData();
            }
        }
        this.setValue(id, val);
    }
    enableInlineEdit(el, type, oldVal) {
        const safeVal = Utils.escapeAttribute(oldVal);
        el.innerHTML = `<input type="text" class="inline-edit-input" value="${safeVal}" style="width:100%; border:none; background:transparent; font:inherit; color:inherit; outline:none;">`;
        const input = el.querySelector('input');
        input.focus();
        const save = () => {
            const newVal = input.value.trim();
            if (newVal !== oldVal) {
                const capsule = this.state.getCapsuleDefinition(type);
                if (capsule && capsule.options) {
                    const idx = capsule.options.indexOf(oldVal);
                    if (idx > -1) {
                        if (!newVal) capsule.options.splice(idx, 1);
                        else capsule.options[idx] = newVal;
                        capsule.options.sort((a, b) => a.localeCompare(b));
                        this.state.items.forEach(i => {
                            if (i.type === type && i.value === oldVal) i.value = newVal;
                        });
                        this.state.resetDeck(type);
                        this.state.saveData();
                        this.state.notify('stateChanged');
                    }
                }
            }
            const item = this.state.items.find(i => i.id === this.activeKey);
            if (item) this.open(item, document.querySelector(`.chip[data-id="${item.id}"]`));
        };
        input.addEventListener('blur', save);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') { e.preventDefault(); input.blur(); }
            if (e.key === 'Escape') { e.stopPropagation(); this.renderContent({ type, value: oldVal, id: this.activeKey }); }
        });
        input.onclick = (e) => e.stopPropagation();
    }
    getEditIcon() {
        return `<svg viewBox="0 0 24 24" fill="none" width="12" height="12" stroke="currentColor" stroke-width="2"><path d="M14.586 4.414a2 2 0 012.828 0l1.172 1.172a2 2 0 010 2.828L10 17l-3.9.26.26-3.9 8.226-8.226z"/><path d="M4 20h16"/></svg>`;
    }
}