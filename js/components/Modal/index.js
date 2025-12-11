class ModalManager {
    constructor() {
        this.overlay = null;
        this.container = null;
        this.init();
    }
    init() {
        if (!document.getElementById('genericModalOverlay')) {
            const overlay = document.createElement('div');
            overlay.id = 'genericModalOverlay';
            overlay.className = 'modal-overlay';
            overlay.style.display = 'none';  
            const container = document.createElement('div');
            container.className = 'modal-container';
            overlay.appendChild(container);
            document.body.appendChild(overlay);
            this.overlay = overlay;
            this.container = container;
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    this.close();
                }
            });
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.overlay.style.display === 'flex') {
                    this.close();
                }
            });
        } else {
            this.overlay = document.getElementById('genericModalOverlay');
            this.container = this.overlay.querySelector('.modal-container');
        }
    }
    show(options = {}) {
        const { title, content, buttons, onClose, width, showCloseIcon, checkbox } = options;
        this.onCloseCallback = onClose;
        this.container.innerHTML = '';
        if (width) {
            this.container.style.maxWidth = width;
            this.container.style.width = '90%';
        } else {
            this.container.style.maxWidth = '400px';  
        }
        if (showCloseIcon) {
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '&times;';
            closeBtn.className = 'modal-close-icon';
            closeBtn.onclick = () => this.close();
            this.container.appendChild(closeBtn);
        }
        if (title) {
            const titleEl = document.createElement('div');
            titleEl.className = 'modal-title';
            titleEl.innerText = title;
            this.container.appendChild(titleEl);
        }
        const contentEl = document.createElement('div');
        contentEl.className = 'modal-content';
        if (content instanceof HTMLElement) {
            contentEl.appendChild(content);
        } else {
            contentEl.innerHTML = content || '';
        }
        this.container.appendChild(contentEl);
        if (buttons && buttons.length > 0) {
            const footerEl = document.createElement('div');
            footerEl.className = 'modal-footer';  
            let checkboxInput = null;
            if (checkbox) {
                const checkWrapper = document.createElement('label');
                checkWrapper.className = 'modal-checkbox-wrapper';
                checkboxInput = document.createElement('input');
                checkboxInput.type = 'checkbox';
                checkboxInput.className = 'modal-checkbox';
                const checkLabel = document.createElement('span');
                checkLabel.innerText = checkbox.label || "Don't show again";
                checkWrapper.appendChild(checkboxInput);
                checkWrapper.appendChild(checkLabel);
                footerEl.appendChild(checkWrapper);
            } else {
            }
            const actionsEl = document.createElement('div');
            actionsEl.className = 'modal-actions';  
            buttons.forEach(btn => {
                const btnEl = document.createElement('button');
                btnEl.className = `modal-btn ${btn.className || ''}`;
                btnEl.innerText = btn.label;
                btnEl.onclick = () => {
                    const isChecked = checkboxInput ? checkboxInput.checked : false;
                    if (btn.onClick) btn.onClick(isChecked);
                    if (btn.autoClose !== false) this.close();
                };
                actionsEl.appendChild(btnEl);
            });
            footerEl.appendChild(actionsEl);
            this.container.appendChild(footerEl);
        }
        this.overlay.style.display = 'flex';
        requestAnimationFrame(() => {
            this.overlay.classList.add('active');
            this.container.classList.add('active');
        });
        const input = this.container.querySelector('input');
        if (input) input.focus();
    }
    close() {
        if (!this.overlay) return;
        this.overlay.classList.remove('active');
        this.container.classList.remove('active');
        setTimeout(() => {
            this.overlay.style.display = 'none';
            if (this.onCloseCallback) this.onCloseCallback();
        }, 200);  
    }
    getLabel(key, defaultText) {
        if (window.app && window.app.state && typeof window.app.state.t === 'function') {
            const val = window.app.state.t(key);
            return val === key ? defaultText : val;
        }
        return defaultText;
    }
    prompt(title, defaultValue = "", callback) {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = defaultValue;
        input.className = 'modal-input';
        const confirm = () => {
            const val = input.value.trim();
            callback(val);
        };
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                confirm();
                this.close();
            }
        });
        this.show({
            title: title,
            content: input,
            buttons: [
                { label: this.getLabel('confirmLabel', 'Confirm'), className: 'btn-confirm', onClick: confirm },
                { label: this.getLabel('cancelLabel', 'Cancel'), className: 'btn-cancel' }  
            ],
            onClose: () => {
            }
        });
    }
    alert(title, message) {
        this.show({
            title: title,
            content: message,
            buttons: [
                { label: this.getLabel('confirmLabel', 'OK'), className: 'btn-confirm' }
            ]
        });
    }
}
window.ModalManager = ModalManager;