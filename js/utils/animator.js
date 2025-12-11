class ReorderAnimator {
    static resolveContainer(container) {
        if (!container) return null;
        if (typeof container === 'string') return document.querySelector(container);
        return container;
    }
    static shouldLockLinkWidth(el, prevRect, rect) {
        const isLinked = el.classList.contains('linked-left') || el.classList.contains('linked-right');
        return isLinked && (prevRect.width - rect.width) > 0.5;
    }
    static capture(container, selector, getKey) {
        const root = this.resolveContainer(container);
        if (!root) return null;
        const map = {};
        root.querySelectorAll(selector).forEach(el => {
            const key = getKey ? getKey(el) : el?.dataset?.id;
            if (!key) return;
            map[key] = el.getBoundingClientRect();
        });
        return map;
    }
    static animate({ container, selector, prevPositions, getKey, transition = 'transform 0.25s ease', shouldLockWidth, onNewElement }) {
        if (!prevPositions) return;
        const root = this.resolveContainer(container);
        if (!root) return;
        const moving = [];
        root.querySelectorAll(selector).forEach(el => {
            const key = getKey ? getKey(el) : el?.dataset?.id;
            if (!key) return;
            const prevRect = prevPositions[key];
            if (!prevRect) {
                if (typeof onNewElement === 'function') {
                    onNewElement(el);
                }
                return;
            }
            const rect = el.getBoundingClientRect();
            const dx = prevRect.left - rect.left;
            const dy = prevRect.top - rect.top;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const MAX_ANIM_DISTANCE = 400;  
            if (distance > MAX_ANIM_DISTANCE) {
                el.style.opacity = '0';
                requestAnimationFrame(() => {
                    el.style.transition = 'opacity 0.2s ease';
                    el.style.opacity = '1';
                    setTimeout(() => { el.style.transition = ''; el.style.opacity = ''; }, 200);
                });
                return;
            }
            const lockWidth = typeof shouldLockWidth === 'function'
                ? shouldLockWidth(el, prevRect, rect)
                : false;
            if (lockWidth) {
                el.style.width = `${prevRect.width}px`;
            }
            const moved = Math.abs(dx) > 1 || Math.abs(dy) > 1;
            if (moved || lockWidth) {
                el.style.transition = 'none';
                el.style.transform = `translate(${dx}px, ${dy}px)`;
                moving.push({ el, lockWidth, widthTarget: rect.width, moved });
            } else if (lockWidth) {
                requestAnimationFrame(() => {
                    el.style.width = `${rect.width}px`;
                    requestAnimationFrame(() => {
                        el.style.width = '';
                    });
                });
            }
        });
        if (!moving.length) return;
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                moving.forEach(({ el, lockWidth, widthTarget, moved }) => {
                    const transformTransition = transition;
                    const widthTransition = transformTransition.replace('transform', 'width');
                    const transitions = [];
                    if (moved) transitions.push(transformTransition);
                    if (lockWidth) transitions.push(widthTransition);
                    el.style.transition = transitions.join(', ');
                    el.style.transform = '';
                    if (lockWidth) {
                        requestAnimationFrame(() => {
                            el.style.width = `${widthTarget}px`;
                        });
                    }
                    const done = { transform: !moved, width: !lockWidth };
                    const cleanup = (e) => {
                        if (e.propertyName === 'transform') {
                            done.transform = true;
                        }
                        if (lockWidth && e.propertyName === 'width') {
                            done.width = true;
                            el.style.width = '';
                        }
                        if (done.transform && done.width) {
                            el.style.transition = '';
                            el.removeEventListener('transitionend', cleanup);
                        }
                    };
                    el.addEventListener('transitionend', cleanup);
                });
            });
        });
    }
}
window.ReorderAnimator = ReorderAnimator;