class DragGhost {
    static setGroupImage(e, elements, clickedElement, options = {}) {
        if (!elements || elements.length <= 1) return;
        const { showCount = true } = options || {};
        if (!showCount) return;  
        const container = document.createElement('div');
        Object.assign(container.style, {
            position: 'absolute',
            top: '-9999px',
            left: '-9999px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '32px',
            padding: '0 16px',
            background: 'rgba(50, 50, 50, 0.9)',
            borderRadius: '16px',
            color: '#fff',
            fontSize: '13px',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            zIndex: '99999',
            pointerEvents: 'none',
            whiteSpace: 'nowrap'
        });
        if (elements.length > 1) {
            container.textContent = `+${elements.length}`;
        } else {
            return;  
        }
        document.body.appendChild(container);
        try {
            e.dataTransfer.setDragImage(container, -15, -15);
        } catch (err) {
            console.warn('setDragImage failed', err);
        }
        setTimeout(() => {
            if (container.parentNode) container.parentNode.removeChild(container);
        }, 0);
    }
    static activeGhost = null;
    static dragOffset = { x: 10, y: 10 };  
    static startCustom(e, element, isCopy) {
        try {
            this.clearCustom();
            const ghost = document.createElement('div');
            let text = "";
            try {
                const clone = element.cloneNode(true);
                const badge = clone.querySelector('.chip-copy-badge');
                if (badge) badge.remove();
                text = (clone.innerText || clone.textContent || '').trim();
            } catch (innerErr) {
                text = (element.innerText || element.textContent || '').trim();
            }
            text = text.replace(/^[🎲🔒\+\uFFFD\s]+/, '').trim();
            if (text.length > 20) text = text.substring(0, 20) + '...';
            ghost.textContent = text;
            Object.assign(ghost.style, {
                position: 'fixed',
                zIndex: '999999',
                pointerEvents: 'none',
                height: '32px',
                padding: '0 14px',
                background: 'var(--surface)',
                color: 'var(--text-main)',
                border: '1px solid var(--highlight)',
                borderRadius: '16px',
                fontSize: '13px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                whiteSpace: 'nowrap',
                backdropFilter: 'blur(8px)',
                transition: 'border-color 0.1s, transform 0.1s'
            });
            document.body.appendChild(ghost);
            this.activeGhost = ghost;
            this.dragOffset = { x: 12, y: 12 };
            this.updatePosition(e.clientX, e.clientY);
            this.updateMode(isCopy);
            try {
                const canvas = document.createElement('canvas');
                canvas.width = 1; canvas.height = 1;
                e.dataTransfer.setDragImage(canvas, 0, 0);
            } catch (err) { }
        } catch (criticalErr) {
            console.warn("DragGhost startCustom failed:", criticalErr);
        }
    }
    static updatePosition(x, y) {
        if (!this.activeGhost) return;
        if (x === 0 && y === 0) return;
        this.activeGhost.style.left = (x + this.dragOffset.x) + 'px';
        this.activeGhost.style.top = (y + this.dragOffset.y) + 'px';
    }
    static updateMode(isCopy) {
        if (!this.activeGhost) return;
        let badge = this.activeGhost.querySelector('.ghost-badge');
        if (isCopy) {
            if (!badge) {
                badge = document.createElement('span');
                badge.className = 'ghost-badge';
                Object.assign(badge.style, {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#007AFF',  
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: '800',
                    flexShrink: '0'
                });
                badge.textContent = '+';
                this.activeGhost.insertBefore(badge, this.activeGhost.firstChild);
                this.activeGhost.style.borderColor = '#007AFF';
                this.activeGhost.style.transform = 'scale(1.05)';
            }
        } else {
            if (badge) {
                badge.remove();
                this.activeGhost.style.borderColor = 'var(--highlight)';
                this.activeGhost.style.transform = 'scale(1)';
            }
        }
    }
    static clearCustom() {
        if (this.activeGhost) {
            this.activeGhost.remove();
            this.activeGhost = null;
        }
    }
}
window.DragGhost = DragGhost;