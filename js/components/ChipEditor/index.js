class ChipEditor {
    constructor(stateManager) {
        this.state = stateManager;
        this.container = document.getElementById('chipContainer');
        this.gapManager = window.GapPreviewManager ? new window.GapPreviewManager(this.container) : null;
        this.init();
    }
    init() {
        this.scrollingState = { id: null, width: null, timer: null };
        this.state.subscribe((event) => {
            if (event === 'stateChanged' || event === 'historyChanged' || event === 'themeChanged') {
                this.render();
            }
        });
        this.setupTrash();
        this.render();
    }
    render() {
        if (!this.container) return;
        const prevPositions = this.capturePositions();
        this.container.innerHTML = '';
        if (this.gapManager) this.gapManager.clear();
        const items = this.state.items;
        if (items.length === 0) {
            this.container.classList.add('is-empty-state');
            const hasCapsules = this.state.capsules && this.state.capsules.length > 0;
            const msg = hasCapsules
                ? (this.state.t('chipEmptyState') || 'Drag capsules here...')
                : (this.state.t('chipEmptyStateNoCapsules') || 'Drag JSON file here...');
            this.container.innerHTML = `<div class="empty-state">${msg}</div>`;
            if (!hasCapsules) {
                const emptyDiv = this.container.querySelector('.empty-state');
                if (emptyDiv) {
                    emptyDiv.style.cursor = 'pointer';
                    emptyDiv.onclick = () => this.triggerFileOpen();
                }
            }
            this.container.ondragover = (e) => {
                e.preventDefault();
                this.container.classList.add('drag-over');
            };
            this.container.ondragleave = () => this.container.classList.remove('drag-over');
            this.container.ondrop = (e) => {
                e.preventDefault();
                this.container.classList.remove('drag-over');
                if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                    this.handleFileDrop(e.dataTransfer.files[0]);
                    return;
                }
                this.handleDrop(e, 0);
            };
            return;
        } else {
            this.container.classList.remove('is-empty-state');
            this.container.classList.remove('is-empty-drop');
            this.container.ondragover = null;
            this.container.ondrop = null;
        }
        items.forEach((item, index) => {
            const gap = this.createGap(index, index === 0 ? 'head' : 'bridge');
            this.container.appendChild(gap);
            const chip = this.createChipElement(item, index);
            this.container.appendChild(chip);
        });
        const tailGap = this.createGap(items.length, 'tail');
        this.container.appendChild(tailGap);
        this.animateReflow(prevPositions);
    }
    capturePositions() {
        if (window.ReorderAnimator) {
            return window.ReorderAnimator.capture(this.container, '.chip', chip => chip.dataset.id);
        }
        return null;
    }
    animateReflow(prevPositions) {
        if (window.ReorderAnimator && prevPositions) {
            window.ReorderAnimator.animate({
                container: this.container,
                selector: '.chip',
                prevPositions: prevPositions,
                getKey: chip => chip.dataset.id,
                transition: 'transform 0.28s cubic-bezier(0.22, 0.61, 0.36, 1)',
                shouldLockWidth: window.ReorderAnimator.shouldLockLinkWidth,
                onNewElement: (chip) => {
                    chip.classList.add('pop-in');
                    chip.addEventListener('animationend', () => chip.classList.remove('pop-in'), { once: true });
                }
            });
        }
    }
    createGap(index, type) {
        let className = 'chip-bridge';
        if (type === 'head') className = 'chip-drop-zone head';
        if (type === 'tail') className = 'chip-drop-zone tail';
        if (type === 'tail') className = 'chip-tail-drop';
        const el = document.createElement('div');
        el.className = className;
        el.dataset.index = index;
        if (type === 'bridge') {
            const prevItemIndex = index - 1;
            const prevItem = this.state.items[prevItemIndex];
            if (prevItem) {
                if (prevItem.linkNext) {
                    el.classList.add('active');
                    el.title = "Unlink";
                    const toggle = document.createElement('div');
                    toggle.className = 'chip-link-toggle';
                    el.appendChild(toggle);
                } else {
                    el.title = "Link";
                }
                el.onclick = (e) => {
                    e.stopPropagation();
                    prevItem.linkNext = !prevItem.linkNext;
                    this.state.pushHistory();
                    this.state.notify('stateChanged');
                };
            }
        }
        if (this.gapManager) this.gapManager.registerGap(index, el);
        el.ondragover = (e) => {
            const dragType = this.state.dragType;
            if (!dragType) return;
            e.preventDefault();
            e.dataTransfer.dropEffect = e.altKey ? 'copy' : 'move';
            if (this.gapManager) this.gapManager.set(index);
            el.classList.add('drag-over-gap');
        };
        el.ondragleave = () => {
            el.classList.remove('drag-over-gap');
        };
        el.ondrop = (e) => {
            e.preventDefault();
            e.stopPropagation();
            el.classList.remove('drag-over-gap');
            if (this.gapManager) this.gapManager.clear();
            this.handleDrop(e, index);
        };
        return el;
    }
    createChipElement(item, index) {
        const el = document.createElement('div');
        el.className = 'chip';
        el.dataset.id = item.id;
        el.dataset.index = index;
        el.dataset.colorIdx = index % 5;
        const isLast = index === this.state.items.length - 1;
        if (!item.linkNext && !isLast) {
            el.dataset.hasComma = "true";
        } else {
            delete el.dataset.hasComma;
        }
        if (this.scrollingState && this.scrollingState.id === item.id && this.scrollingState.width) {
            el.style.width = this.scrollingState.width + 'px';
            el.classList.add('scrolling-locked');
        }
        if (item.linkNext) el.classList.add('linked-left');
        const prevItem = index > 0 ? this.state.items[index - 1] : null;
        if (prevItem && prevItem.linkNext) el.classList.add('linked-right');
        if (!item.isRandom) el.classList.add('is-locked');
        if (item.value === "") el.classList.add('is-empty');
        if (item.value) {
            el.style.backgroundColor = "";
        } else {
            el.style.backgroundColor = "transparent";
            el.style.border = "1px dashed var(--border)";
            el.style.color = "var(--text-sub)";
        }
        if (item.value) {
            const iconChar = item.isRandom ? "🎲" : "🔒";
            const iconSpan = document.createElement('span');
            iconSpan.className = 'chip-icon';
            iconSpan.textContent = iconChar;
            iconSpan.onclick = (e) => {
                e.stopPropagation();
                item.isRandom = !item.isRandom;
                this.state.pushHistory();
                this.state.notify('stateChanged');
            };
            el.appendChild(iconSpan);
            el.appendChild(document.createTextNode(item.value));
        } else {
            const label = this.state.getTypeLabel(item.type);
            el.textContent = `+ ${label}`;
            el.style.backgroundColor = "transparent";
            el.style.border = "1px dashed var(--border)";
            el.style.color = "var(--text-sub)";
        }
        const copyBadge = document.createElement('div');
        copyBadge.className = 'chip-copy-badge';
        copyBadge.textContent = '+';
        el.appendChild(copyBadge);
        el.appendChild(copyBadge);

        if (window.CommonUtils && window.CommonUtils.addLongPress) {
            window.CommonUtils.addLongPress(el, () => this.activateInlineEdit(item, el), 600);
        }

        el.onclick = (e) => {
            if (el.classList.contains('dragging') || el.classList.contains('inline-editing')) return;
            if (window.app && window.app.popover) {
                if (window.app.popover.activeKey === item.id) window.app.popover.close();
                else window.app.popover.open(item, el);
            }
        };
        el.setAttribute('draggable', 'true');
        el.ondragstart = (e) => {
            if (window.app && window.app.popover) window.app.popover.close();
            this.state.dragType = 'chip';
            const isSingle = e.ctrlKey;
            e.dataTransfer.setData('text/plain', JSON.stringify({ source: 'chip', id: item.id, isSingle: isSingle }));
            e.dataTransfer.effectAllowed = 'copyMove';
            let isGroupDrag = false;

            if (!isSingle && !e.altKey && window.DragGhost && this.state.getLinkedChainRange) {
                const range = this.state.getLinkedChainRange(this.state.items, index);
                if (range.end > range.start) {
                    isGroupDrag = true;
                    const allChips = Array.from(this.container.querySelectorAll('.chip'));
                    const chainEls = [];
                    for (let i = range.start; i <= range.end; i++) {
                        if (allChips[i]) chainEls.push(allChips[i]);
                    }
                    window.DragGhost.setGroupImage(e, chainEls, el);
                }
            }
            if (!isGroupDrag && window.DragGhost) {
                window.DragGhost.startCustom(e, el, e.altKey);
            }
            el.classList.add('dragging');
            document.body.classList.add('is-dragging');
        };
        el.addEventListener('wheel', (e) => {
            if (e.altKey) {
                e.preventDefault();
                if (this.scrollingState.id !== item.id) {
                    const rect = el.getBoundingClientRect();
                    this.scrollingState = {
                        id: item.id,
                        width: rect.width,
                        timer: null
                    };
                }
                if (this.scrollingState.timer) clearTimeout(this.scrollingState.timer);
                this.scrollingState.timer = setTimeout(() => {
                    this.scrollingState = { id: null, width: null, timer: null };
                    this.render();
                }, 500);
                const direction = e.deltaY > 0 ? 1 : -1;
                this.state.cycleChipOption(item.id, direction);
            }
        }, { passive: false });
        el.addEventListener('drag', (e) => {
            if (window.DragGhost) {
                window.DragGhost.updatePosition(e.clientX, e.clientY);
                window.DragGhost.updateMode(e.altKey);
            }
        });
        el.ondragend = () => {
            el.classList.remove('dragging');
            document.body.classList.remove('is-dragging');
            this.state.dragType = null;
            if (this.gapManager) this.gapManager.clear();
            if (window.DragGhost) window.DragGhost.clearCustom();
        };
        return el;
    }
    setupTrash() {
        const trash = document.getElementById('chipTrashArea');
        if (!trash) return;
        trash.ondragover = (e) => {
            if (this.state.dragType !== 'chip' && this.state.dragType !== 'favorite' && this.state.dragType !== 'history' && this.state.dragType !== 'capsule') return;
            e.preventDefault();
            trash.classList.add('drag-over');
            e.dataTransfer.dropEffect = 'move';
        };
        trash.ondragleave = () => {
            trash.classList.remove('drag-over');
        };
        trash.ondrop = (e) => {
            e.preventDefault();
            trash.classList.remove('drag-over');
            const data = this.getDragPayload(e);
            const icon = trash.querySelector('.trash-icon');
            if (window.Animator && icon) window.Animator.play(icon, 'pulse');
            if (data && (data.id !== undefined || data.type !== undefined)) {
                if (data.source === 'chip') {
                    this.state.deleteItem(data.id, data.isSingle);
                } else if (data.source === 'favorite') {
                    this.state.deleteFavorite(data.id);
                    this.state.notify('showToast', 'toastFavoriteDeleted');
                } else if (data.source === 'history') {
                    this.state.deleteRollHistoryItem(data.id);
                } else if (data.source === 'capsule') {
                    this.state.removeCapsule(data.type);
                }
            }
        };


        trash.onclick = () => {
            if (this.state.items.length === 0) {
                this.state.notify('showToast', this.state.t('toastEmptyState') || "No active chips to add.");
                return;
            }

            const skipConfirm = localStorage.getItem('promit_skip_clear_all') === 'true';

            const clearAction = () => {
                this.state.clearAllItems();
            };

            if (skipConfirm) {
                clearAction();
                return;
            }

            if (window.Modal) {
                window.Modal.show({
                    title: this.state.t('confirmClearAllTitle') || "Clear All Chips",
                    content: this.state.t('confirmClearAllBody') || "Remove all chips from the editor?",
                    checkbox: {
                        label: this.state.t('dontShowAgain') || "Don't show again"
                    },
                    buttons: [
                        {
                            label: this.state.t('deleteLabel') || "Delete",
                            className: 'btn-confirm is-danger',
                            onClick: (isChecked) => {
                                if (isChecked) {
                                    localStorage.setItem('promit_skip_clear_all', 'true');
                                }
                                clearAction();
                                window.Modal.close();
                            }
                        },
                        {
                            label: this.state.t('cancelLabel') || "Cancel",
                            className: 'btn-cancel',
                            onClick: () => window.Modal.close()
                        }
                    ],
                    showCloseIcon: false
                });
            } else if (confirm(this.state.t('confirmClearAllBody'))) {
                clearAction();
            }
        };
    }
    handleDrop(e, targetIdx) {
        const data = this.getDragPayload(e);
        if (!data) return;
        if (data.source === 'capsule') {
            this.state.addItem(data.type, targetIdx);
        } else if (data.source === 'chip') {
            if (e.altKey) this.state.copyItem(data.id, targetIdx);
            else this.state.moveItem(data.id, targetIdx, data.isSingle);
        } else if (data.source === 'favorite') {
            this.state.applyFavorite(Number(data.id), targetIdx);
        } else if (data.source === 'history') {
            this.state.applyHistory(Number(data.id), targetIdx);
        }
    }
    getDragPayload(e) {
        try {
            const raw = e.dataTransfer.getData('text/plain');
            if (!raw) return null;
            return JSON.parse(raw);
        } catch (err) {
            return null;
        }
    }
    handleFileDrop(file) {
        if (!file || !file.name.toLowerCase().endsWith('.json')) {
            this.state.notify('showToast', "Only JSON files are supported");
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                this.state.applyImportedData(data);
            } catch (err) {
                console.error(err);
                this.state.notify('showToast', this.state.t('importError') + " Invalid JSON");
            }
        };
        reader.readAsText(file);
    }
    triggerFileOpen() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.style.display = 'none';
        document.body.appendChild(input);
        input.onchange = (e) => {
            if (e.target.files && e.target.files.length > 0) {
                this.handleFileDrop(e.target.files[0]);
            }
            document.body.removeChild(input);
        };
        input.click();
    }
    activateInlineEdit(item, el) {
        if (el.querySelector('.inline-input')) return;

         
        if (window.app && window.app.popover) window.app.popover.close();

        el.classList.add('inline-editing');
        el.setAttribute('draggable', 'false');

         
        el.innerHTML = '';

        const span = document.createElement('span');
        span.className = 'inline-input';
        span.contentEditable = 'plaintext-only';
         
        span.textContent = item.value || '';
        span.spellcheck = false;

        el.appendChild(span);

         
        setTimeout(() => {
            span.focus();
            if (span.textContent.length > 0) {
                document.execCommand('selectAll', false, null);
            }
        }, 0);

        const finish = (save) => {
            el.classList.remove('inline-editing');
            el.setAttribute('draggable', 'true');

            if (save) {
                const newValue = span.textContent.trim();
                 
                if (newValue !== item.value) {
                    item.value = newValue;
                    item.isRandom = false;  
                    this.state.pushHistory();
                    this.state.notify('stateChanged');
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