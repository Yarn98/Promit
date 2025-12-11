class CapsuleBar {
    constructor(stateManager) {
        this.state = stateManager;
        this.container = document.getElementById('capsuleContainer');
        this.init();
    }
    init() {
        this.state.subscribe((event) => {
            if (event === 'capsulesChanged' || event === 'historyChanged' || event === 'stateChanged' || event === 'themeChanged') {
                this.render();
            }
        });
        this.render();
    }
    render() {
        if (!this.container) return;
        const prevPositions = this.capturePositions();
        this.container.innerHTML = '';
        if (this.state.capsuleGapPreview) this.state.capsuleGapPreview.reset();
        const list = this.state.capsules;
        const appendGap = (index, position) => {
            this.container.appendChild(this.createCapsuleGap(index, position));
        };
        appendGap(0, 'head');
        list.forEach((cap, index) => {
            const el = document.createElement('div');
            el.className = 'cap';
            el.dataset.key = cap.key;
            el.dataset.capIndex = index;
            if (cap.linkNext) el.classList.add('linked-right');
            if (index > 0 && list[index - 1].linkNext) el.classList.add('linked-left');
            el.textContent = this.state.getTypeLabel(cap.key);
            el.onclick = () => {
                if (el.classList.contains('cap-editing')) return;
                this.state.addItem(cap.key);
            };
            el.draggable = true;
            el.ondragstart = (e) => {
                this.state.dragType = 'capsule';
                const isSingle = e.ctrlKey;
                e.dataTransfer.setData('text/plain', JSON.stringify({ source: 'capsule', type: cap.key, isSingle: isSingle }));
                e.dataTransfer.effectAllowed = 'copyMove';

                if (!isSingle && !e.altKey && window.DragGhost && this.state.getLinkedChainRange) {
                    const range = this.state.getLinkedChainRange(this.state.capsules, index);
                    if (range.end > range.start) {
                        const allCaps = Array.from(this.container.querySelectorAll('.cap:not(.cap-add)'));
                        const chainEls = [];
                        for (let i = range.start; i <= range.end; i++) {
                            if (allCaps[i]) chainEls.push(allCaps[i]);
                        }
                        window.DragGhost.setGroupImage(e, chainEls, el, { showCount: false });
                    }
                }
                el.classList.add('dragging');
                document.body.classList.add('is-dragging');
            };
            el.ondragend = () => {
                el.classList.remove('dragging');
                document.body.classList.remove('is-dragging');
                this.state.dragType = null;
                if (this.state.capsuleGapPreview) this.state.capsuleGapPreview.clear();
                document.querySelectorAll('.drag-over-gap').forEach(el => el.classList.remove('drag-over-gap'));
            };
            if (window.CommonUtils && window.CommonUtils.addLongPress) {
                window.CommonUtils.addLongPress(el, () => this.activateInlineEdit(cap.key, el), 600);
            }
            this.container.appendChild(el);
            const isLast = index === list.length - 1;
            if (cap.linkNext && !isLast) {
                const bridge = document.createElement('div');
                bridge.className = 'cap-bridge active';
                bridge.onclick = (e) => {
                    e.stopPropagation();
                    this.state.toggleCapsuleLink(index);
                };
                this.setupDropZone(bridge, index + 1);
                this.container.appendChild(bridge);
            } else {
                const gap = this.createCapsuleGap(index + 1, isLast ? 'tail' : undefined);
                if (!isLast) {
                    gap.onclick = (e) => {
                        e.stopPropagation();
                        this.state.toggleCapsuleLink(index);
                    };
                    gap.style.cursor = 'pointer';
                }
                this.container.appendChild(gap);
            }
        });
        const addBtn = document.createElement('div');
        addBtn.className = 'cap cap-add';
        addBtn.textContent = '+';
        addBtn.onclick = () => this.state.addCustomType();
        this.container.appendChild(addBtn);
        this.animateReflow(prevPositions);
    }
    createCapsuleGap(index, position) {
        const gap = document.createElement('div');
        gap.className = 'cap-drop-zone';
        if (position) gap.classList.add(position);
        gap.dataset.capIndex = index;
        this.setupDropZone(gap, index);
        return gap;
    }
    setupDropZone(el, index) {
        el.ondragover = (e) => {
            if (this.state.dragType !== 'capsule') return;
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            el.classList.add('drag-over-gap');
            if (this.state.capsuleGapPreview) this.state.capsuleGapPreview.set(index);
        };
        el.ondragleave = () => {
            el.classList.remove('drag-over-gap');
            if (this.state.capsuleGapPreview) this.state.capsuleGapPreview.clear(index);
        };
        el.ondrop = (e) => {
            if (this.state.dragType !== 'capsule') return;
            e.preventDefault();
            el.classList.remove('drag-over-gap');
            if (this.state.capsuleGapPreview) this.state.capsuleGapPreview.clear();
            this.handleDrop(e, index);
        };
    }
    capturePositions() {
        if (window.ReorderAnimator) {
            return window.ReorderAnimator.capture(this.container, '.cap', el => el.dataset.key || 'add-btn');
        }
        return null;
    }
    animateReflow(prevPositions) {
        if (window.ReorderAnimator && prevPositions) {
            window.ReorderAnimator.animate({
                container: this.container,
                selector: '.cap',
                prevPositions: prevPositions,
                getKey: el => el.dataset.key || 'add-btn',
                transition: 'transform 0.28s cubic-bezier(0.22, 0.61, 0.36, 1)',
                shouldLockWidth: window.ReorderAnimator.shouldLockLinkWidth,
                onNewElement: (cap) => {
                    cap.classList.add('pop-in');
                    cap.addEventListener('animationend', () => cap.classList.remove('pop-in'), { once: true });
                }
            });
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
    handleDrop(e, targetIdx) {
        const data = this.getDragPayload(e);
        if (!data) return;
        if (data.source === 'capsule') {
            this.state.moveCapsule(data.type, targetIdx, data.isSingle);
        }
        if (data.source === 'chip') {
        }
    }
    activateInlineEdit(key, el) {
        if (el.querySelector('.inline-input')) return;

        const cap = this.state.capsules.find(c => c.key === key);
        if (!cap) return;

         
        el.setAttribute('draggable', 'false');
        el.classList.add('inline-editing');

        const currentLabel = cap.label || cap.key;
        el.innerHTML = '';  

        const span = document.createElement('span');
        span.className = 'inline-input';
        span.contentEditable = 'plaintext-only';  
        span.textContent = currentLabel;
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
                const newLabel = span.textContent.trim();
                 
                 
                 
                if (newLabel && newLabel !== currentLabel) {
                    cap.label = newLabel;
                    this.state.saveData();
                    this.state.notify('capsulesChanged');  
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