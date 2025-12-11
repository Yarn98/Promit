class ToastManager {
    constructor(stateManager) {
        this.state = stateManager;
        this.element = document.getElementById('toast-container');
        this.init();
    }
    init() {
        if (!this.element) return;
        this.state.subscribe((event, data) => {
            if (event === 'showToast' && typeof data === 'string') {
                this.show(data);
            }
        });
    }
    show(message) {
        if (!this.element) return;
        const toastItem = document.createElement('div');
        toastItem.className = 'toast-popup';  
        toastItem.textContent = message;
        this.element.appendChild(toastItem);
        void toastItem.offsetWidth;
        requestAnimationFrame(() => {
            toastItem.classList.add('show');
        });
        setTimeout(() => {
            this.hide(toastItem);
        }, 800);
    }
    hide(toastItem) {
        toastItem.classList.remove('show');
        toastItem.classList.add('hiding');
        toastItem.addEventListener('transitionend', () => {
            if (toastItem.parentElement) {
                toastItem.remove();
            }
        }, { once: true });
        setTimeout(() => {
            if (toastItem.parentElement) toastItem.remove();
        }, 200);
    }
}