class GapPreviewManager {
    constructor({ getItemElement, activeClass = 'gap-preview-active', shiftLeftClass = 'shift-left', shiftRightClass = 'shift-right', onGapActivate, onGapDeactivate } = {}) {
        this.getItemElement = getItemElement;
        this.activeClass = activeClass;
        this.shiftLeftClass = shiftLeftClass;
        this.shiftRightClass = shiftRightClass;
        this.onGapActivate = onGapActivate;
        this.onGapDeactivate = onGapDeactivate;
        this.currentIndex = null;
        this.activeGap = null;
        this.gapElements = {};
        this.reset();
    }
    reset() {
        this.clear();
        this.gapElements = {};
    }
    registerGap(index, el) {
        if (!el) return;
        if (!this.gapElements) this.gapElements = {};
        this.gapElements[index] = el;
    }
    set(index) {
        if (index === this.currentIndex) return;
        this.clear();
        this.currentIndex = index;
        const prev = this.getItemElement ? this.getItemElement(index - 1) : null;
        if (prev) prev.classList.add(this.shiftLeftClass);
        const next = this.getItemElement ? this.getItemElement(index) : null;
        if (next) next.classList.add(this.shiftRightClass);
        const gap = this.gapElements ? this.gapElements[index] : null;
        if (gap) {
            gap.classList.add(this.activeClass);
            if (typeof this.onGapActivate === 'function') {
                this.onGapActivate(gap, index);
            }
        }
        this.activeGap = gap || null;
    }
    clear(targetIndex = null) {
        if (this.currentIndex === null) return;
        if (targetIndex !== null && targetIndex !== this.currentIndex) return;
        const prev = this.getItemElement ? this.getItemElement(this.currentIndex - 1) : null;
        if (prev) prev.classList.remove(this.shiftLeftClass);
        const next = this.getItemElement ? this.getItemElement(this.currentIndex) : null;
        if (next) next.classList.remove(this.shiftRightClass);
        if (this.activeGap) {
            this.activeGap.classList.remove(this.activeClass);
            if (typeof this.onGapDeactivate === 'function') {
                this.onGapDeactivate(this.activeGap, this.currentIndex);
            }
        }
        this.activeGap = null;
        this.currentIndex = null;
    }
}