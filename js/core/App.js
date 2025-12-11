class App {
    constructor() {
        this.uiAdapter = {
            alert: (title, message) => console.alert(title, message),
            confirm: (options) => confirm(options.content),
            prompt: (title, defaultValue, callback) => callback(prompt(title, defaultValue)),
            toast: (msg) => console.log('Toast:', msg)
        };
        this.state = new StateManager(null, this.uiAdapter);
        window.app = this;
    }
    async init() {
        console.log("App V2 Initializing...");
        this.modal = new ModalManager();
        window.Modal = this.modal;
        this.toast = new ToastManager(this.state);
        this.uiAdapter.alert = (title, message) => this.modal.alert(title, message);
        this.uiAdapter.confirm = (options) => this.modal.show(options);
        this.uiAdapter.prompt = (title, defaultValue, callback) => this.modal.prompt(title, defaultValue, callback);
        this.uiAdapter.toast = (msg) => this.state.notify('showToast', msg);
        try {
            await this.state.bootstrap();
        } catch (err) {
            console.error("App Initialization (Data Load) Failed: ", err);
        }
        this.state.initGapManagers();
        this.capsuleBar = new CapsuleBar(this.state);
        this.chipEditor = new ChipEditor(this.state);
        this.dock = new Dock(this.state, 'dockList');
        this.settings = new Settings(this.state);
        this.favoriteControl = new FavoriteControl(this.state);
        if (window.SearchController) {
            this.searchController = new window.SearchController(this.state);
        }
        this.popover = new Popover(this.state);
        this.setupGlobalEvents();
        this.setupButtons();
        this.state.notify('stateChanged');
        this.updateAppDataState();
        console.log("App V2 Ready");
    }
    setupButtons() {
        const genBtn = document.querySelector('.btn-gen');
        if (genBtn) {
            genBtn.onclick = () => {
                genBtn.classList.remove('animating');
                void genBtn.offsetWidth;
                genBtn.classList.add('animating');
                const icon = genBtn.querySelector('.dice-icon');
                if (icon) {
                    const onEnd = () => {
                        genBtn.classList.remove('animating');
                    };
                    icon.addEventListener('animationend', onEnd, { once: true });
                }
                this.state.generateValues(true);
                if (navigator.vibrate) navigator.vibrate(50);
            };
        }
        const copyBtn = document.querySelector('.btn-copy');
        if (copyBtn) {
            copyBtn.onclick = () => this.handleCopy();
        }
        const autoBtn = document.querySelector('.btn-auto-copy');
        if (autoBtn) {
            this.state.isAutoCopy = false;
            this.updateAutoCopyState(autoBtn);
            autoBtn.onclick = () => {
                this.state.isAutoCopy = !this.state.isAutoCopy;
                this.updateAutoCopyState(autoBtn);
            };
        }
        const prev = document.getElementById('btnPrev');
        const next = document.getElementById('btnNext');
        if (prev) prev.onclick = () => this.state.navRollHistory(-1);
        if (next) next.onclick = () => this.state.navRollHistory(1);
        const btnToggleIcons = document.getElementById('btnToggleIcons');
        if (btnToggleIcons) {
            const isHidden = localStorage.getItem('hideChipIcons') === 'true';
            if (isHidden) {
                const container = document.getElementById('chipContainer');
                if (container) container.classList.add('hide-icons');
                this.updateToggleIcon(btnToggleIcons, true);
            }
            btnToggleIcons.onclick = () => this.toggleChipIcons();
        }
    }
    toggleChipIcons() {
        const container = document.getElementById('chipContainer');
        if (!container) return;
        const isHidden = container.classList.toggle('hide-icons');
        localStorage.setItem('hideChipIcons', isHidden);
        const btn = document.getElementById('btnToggleIcons');
        this.updateToggleIcon(btn, isHidden);
    }
    updateToggleIcon(btn, isHidden) {
        if (!btn) return;
        if (isHidden) {
            btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M1 1l22 22"></path><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path></svg>`;
            btn.title = "Editor Mode";
        } else {
            btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
            btn.title = "Text Preview";
        }
    }
    updateAutoCopyState(btn) {
        if (!btn) return;
        btn.classList.toggle('is-active', this.state.isAutoCopy);
        const icon = btn.querySelector('.icon-state');
        if (icon) icon.innerText = this.state.isAutoCopy ? 'ON' : 'OFF';
    }
    handleCopy() {
        const promptText = this.state.generatePrompt();
        if (!promptText) {
            this.state.notify('showToast', this.state.t('alertEmptyPrompt') || "Empty prompt");
            return;
        }
        navigator.clipboard.writeText(promptText).then(() => {
            this.state.notify('showToast', this.state.t('toastPromptCopied') || "Copied!");
            const btn = document.querySelector('.btn-copy');
            if (btn && window.Animator) window.Animator.play(btn, 'bounce');
        }).catch(() => {
            this.state.notify('showToast', "Clipboard Error");
        });
    }
    setupGlobalEvents() {
        window.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key === 'Z')) {
                e.preventDefault();
                this.state.navHistory(e.shiftKey ? 1 : -1);
                return;
            }
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                this.handleCopy();
                return;
            }
            if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                this.state.generateValues(true);
            }
            if (e.key === 'Alt') {
                document.body.classList.add('alt-pressed');
                const dragging = document.querySelector('.chip.dragging');
                if (dragging) dragging.classList.add('is-copy-mode');
                if (window.DragGhost) window.DragGhost.updateMode(true);
            }
        });
        window.addEventListener('keyup', (e) => {
            if (e.key === 'Alt') {
                document.body.classList.remove('alt-pressed');
                const dragging = document.querySelector('.chip.dragging');
                if (dragging) dragging.classList.remove('is-copy-mode');
                if (window.DragGhost) window.DragGhost.updateMode(false);
            }
        });
        this.state.subscribe((event) => {
            if (event === 'stateChanged' || event === 'historyChanged' || event === 'favoritesChanged' || event === 'localeChanged' || event === 'capsulesChanged') {
                this.updateUIState();
                this.updateAppDataState();
                if (event === 'localeChanged') {
                    this.updateTranslations();
                }
                if (this.state.isAutoCopy && !this.state.suppressAutoCopy) {
                    if (this.autoCopyTimeout) clearTimeout(this.autoCopyTimeout);
                    this.autoCopyTimeout = setTimeout(() => {
                        const text = this.state.generatePrompt();
                        if (text && document.hasFocus()) {
                            navigator.clipboard.writeText(text).then(() => {
                                this.state.notify('showToast', this.state.t('toastCopy'));
                            }).catch(err => {
                                if (err.name !== 'NotAllowedError') {
                                    console.warn('Auto-copy failed:', err);
                                }
                            });
                        }
                    }, 80);
                }
            }
        });
        this.updateTranslations();
    }
    updateTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key) {
                el.innerText = this.state.t(key);
            }
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            if (key) {
                el.setAttribute('aria-label', this.state.t(key));
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (key) {
                el.setAttribute('placeholder', this.state.t(key));
            }
        });
    }
    updateUIState() {
        const prev = document.getElementById('btnPrev');
        const next = document.getElementById('btnNext');

        const hasRolls = this.state.rollHistory && this.state.rollHistory.length > 0;
        const rollIdx = this.state.rollHistoryIndex;

        if (prev) {
             
            const isDisabled = !hasRolls || (rollIdx === 0);
            prev.disabled = isDisabled;
            prev.style.opacity = isDisabled ? '0' : '1';
        }
        if (next) {
             
             
            const isDisabled = !hasRolls || (rollIdx === -1) || (rollIdx >= this.state.rollHistory.length - 1);
            next.disabled = isDisabled;
            next.style.opacity = isDisabled ? '0' : '1';
        }

        const count = document.querySelector('.token-count');
        if (count) {
            const text = this.state.generatePrompt();
            if (typeof text === 'string') {
                const tokens = text ? text.split(/,\s*/).length : 0;
                count.innerText = `${tokens}`;
            }
        }

        const toggleBtn = document.getElementById('btnToggleIcons');
        const favBtn = document.getElementById('btnAddFav');
        const isEmpty = this.state.items.length === 0;

        if (toggleBtn) {
            toggleBtn.style.visibility = isEmpty ? 'hidden' : 'visible';
        }
        if (favBtn) {
            favBtn.style.visibility = isEmpty ? 'hidden' : 'visible';
        }
    }

    updateAppDataState() {
        const hasData = this.state.capsules && this.state.capsules.length > 0;
        if (hasData) {
            document.body.classList.add('app-has-data');
        } else {
            document.body.classList.remove('app-has-data');
        }
    }
}
const app = new App();
app.init();
window.app = app;