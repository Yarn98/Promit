class Settings {
    constructor(stateManager) {
        this.state = stateManager;
        this.menu = document.getElementById('settingsMenu');
        this.btn = document.getElementById('settingsBtn');
        this.langMenu = document.getElementById('languageMenu');
        this.langBtn = document.getElementById('languageBtn');
        this.themeSwitch = document.getElementById('themeSwitch');
        this.themeIcon = document.getElementById('themeSlotIcon');
        this.palettePrev = document.getElementById('palettePrevBtn');
        this.paletteNext = document.getElementById('paletteNextBtn');
        this.paletteDisplay = document.getElementById('paletteDisplay');
        this.helpBtn = document.querySelector('.help-btn');
        this.helpModal = document.getElementById('helpModal');
        this.helpClose = document.querySelector('.help-close');
        this.state.subscribe((event) => {
            if (event === 'stateChanged' || event === 'localeChanged') {
                this.updateHelpContent();
                this.updateLanguageMenu();
                this.updateStaticTranslations();
            }
        });
        this.init();
    }
    init() {
        if (this.btn) {
            this.btn.addEventListener('click', (e) => this.toggleMenu(e));
        }
        if (this.langBtn) {
            this.langBtn.addEventListener('click', (e) => this.toggleLangMenu(e));
        }
        if (this.helpBtn) {
            this.helpBtn.addEventListener('click', () => this.openHelp());
        }
        if (this.helpClose) {
            this.helpClose.addEventListener('click', () => this.closeHelp());
        }
        if (this.themeSwitch) {
            this.themeSwitch.addEventListener('click', () => this.toggleTheme());
        }
        if (this.themeIcon) {
            this.themeIcon.addEventListener('click', () => this.toggleTheme());
        }
        if (this.palettePrev) {
            this.palettePrev.addEventListener('click', (e) => {
                e.stopPropagation();
                this.cyclePalette('prev');
            });
        }
        if (this.paletteNext) {
            this.paletteNext.addEventListener('click', (e) => {
                e.stopPropagation();
                this.cyclePalette('next');
            });
        }
        if (this.paletteDisplay) {
            this.paletteDisplay.addEventListener('click', (e) => {
                e.stopPropagation();
                this.cyclePalette('next');
            });
        }
        const importBtn = document.querySelector('[data-setting="import"]');
        if (importBtn) {
            importBtn.addEventListener('click', () => this.importJSON());
        }
        const exportBtn = document.querySelector('[data-setting="export"]');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportJSON());
        }
        const resetBtn = document.querySelector('[data-setting="reset"]');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetApp());
        }
        document.addEventListener('click', (e) => {
            if (this.menu && this.menu.classList.contains('open') && !this.btn.contains(e.target) && !this.menu.contains(e.target)) {
                this.menu.classList.remove('open');
                if (this.btn) this.btn.setAttribute('aria-expanded', 'false');
            }
            if (this.langMenu && this.langMenu.classList.contains('open') && !this.langBtn.contains(e.target) && !this.langMenu.contains(e.target)) {
                this.langMenu.classList.remove('open');
                if (this.langBtn) this.langBtn.setAttribute('aria-expanded', 'false');
            }
            if (this.helpModal && this.helpModal.classList.contains('active') && e.target === this.helpModal) {
                this.closeHelp();
            }
        });
        this.loadSystemSettings();
        this.updateLanguageMenu();
        this.updateHelpContent();
        this.updateStaticTranslations();
    }
    loadSystemSettings() {
        const storedTheme = localStorage.getItem('promit-theme') || 'light';
        document.documentElement.setAttribute('data-theme', storedTheme);
        const storedPalette = localStorage.getItem('promit-palette') || 'mono';
        this.setPalette(storedPalette, false);
    }
    toggleMenu(e) {
        e?.stopPropagation();
        const isOpen = this.menu.classList.toggle('open');
        this.btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        if (this.langMenu) this.langMenu.classList.remove('open');
    }
    toggleLangMenu(e) {
        e?.stopPropagation();
        const isOpen = this.langMenu.classList.toggle('open');
        this.langBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        if (this.menu) this.menu.classList.remove('open');
    }
    toggleTheme() {
        const doc = document.documentElement;
        const current = doc.getAttribute('data-theme') || 'light';
        const next = current === 'light' ? 'dark' : 'light';
        doc.setAttribute('data-theme', next);
        localStorage.setItem('promit-theme', next);
        this.state.notify('themeChanged', next);
    }
    cyclePalette(dir) {
        const modes = ['mono', 'colorful'];
        const current = document.documentElement.getAttribute('data-palette') || 'mono';
        let idx = modes.indexOf(current);
        if (idx === -1) idx = 0;
        if (dir === 'next') idx = (idx + 1) % modes.length;
        else idx = (idx - 1 + modes.length) % modes.length;
        this.setPalette(modes[idx]);
    }
    setPalette(mode, save = true) {
        document.documentElement.setAttribute('data-palette', mode);
        if (this.paletteDisplay) {
            const key = mode === 'mono' ? 'paletteMono' : 'palettePastel';
            this.paletteDisplay.setAttribute('data-i18n', key);
            this.paletteDisplay.textContent = this.state.t(key) || (mode === 'mono' ? 'Mono' : 'Pastel');
        }
        if (save) {
            localStorage.setItem('promit-palette', mode);
        }
        this.state.notify('themeChanged', mode);
    }
    openHelp() {
        if (window.Modal && this.state.t) {
            window.Modal.show({
                title: this.state.t('helpTitle') || "Help",
                content: this.state.t('helpContent') || "Help Content",
                buttons: [],
                width: '600px',
                showCloseIcon: true
            });
        }
    }
    closeHelp() {
        if (window.Modal) window.Modal.close();
    }
    updateHelpContent() {
    }
    updateStaticTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.dataset.i18n;
            const text = this.state.t(key);
            if (text) el.textContent = text;
        });
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            const text = this.state.t(key);
            if (text) el.placeholder = text;
        });
        const arias = document.querySelectorAll('[data-i18n-aria]');
        arias.forEach(el => {
            const key = el.dataset.i18nAria;
            const text = this.state.t(key);
            if (text) el.setAttribute('aria-label', text);
        });
    }
    updateLanguageMenu() {
        if (!this.langMenu) return;
        this.langMenu.innerHTML = '';
        const LOCALE_ORDER = ['en', 'ko', 'ja', 'zh'];
        const nameMap = { 'en': 'English', 'ko': '한국어', 'ja': '日本語', 'zh': '中文' };
        LOCALE_ORDER.forEach(code => {
            const btn = document.createElement('button');
            btn.type = 'button';
            if (code === (this.state.locale || 'en')) btn.classList.add('active');
            btn.textContent = nameMap[code] || code;
            btn.onclick = () => {
                this.state.setLocale(code);
                this.updateLanguageMenu();
                this.langMenu.classList.remove('open');
            };
            this.langMenu.appendChild(btn);
        });
    }
    importJSON() {
        const proceedImport = () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json';
            input.onchange = e => {
                const reader = new FileReader();
                reader.onload = ev => {
                    try {
                        const data = JSON.parse(ev.target.result);
                        this.state.applyImportedData(data, false, true);  
                        if (this.menu) this.menu.classList.remove('open');
                        if (this.btn) this.btn.setAttribute('aria-expanded', 'false');
                    } catch (err) {
                        alert('Error: ' + err.message);
                    }
                };
                if (e.target.files.length) reader.readAsText(e.target.files[0]);
            };
            input.click();
        };

        if (this.state.isDirty) {
            if (window.Modal) {
                window.Modal.show({
                    title: this.state.t('confirmOpenFileTitle') || "Unsaved Changes",
                    content: this.state.t('confirmOpenFileBody') || "Unsaved changes will be lost. Open new file?",
                    buttons: [
                        {
                            label: this.state.t('confirmLabel') || "Confirm",
                            className: 'btn-confirm is-danger',
                            onClick: () => {
                                window.Modal.close();
                                proceedImport();
                            }
                        },
                        {
                            label: this.state.t('cancelLabel') || "Cancel",
                            className: 'btn-cancel',
                            onClick: () => window.Modal.close()
                        }
                    ],
                    showCloseIcon: true
                });
            } else if (confirm(this.state.t('confirmOpenFileBody'))) {
                proceedImport();
            }
        } else {
            proceedImport();
        }
    }
    exportJSON() {
        const data = {
            schemaVersion: 2,
            capsules: this.state.capsules,
            items: this.state.items,
            favorites: this.state.favorites,
            rollHistory: this.state.rollHistory
        };
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `promit_backup_${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
        this.state.markSaved();
    }
    resetApp() {
        if (window.Modal) {
            window.Modal.show({
                title: this.state.t('settingsReset') || "Reset App",
                content: this.state.t('confirmReset') || "Reset all data?",
                buttons: [
                    {
                        label: this.state.t('settingsReset'),
                        className: 'btn-confirm is-danger',
                        onClick: () => {
                            this.state.reset();
                            if (window.Modal && window.Modal.close) window.Modal.close();
                        }
                    },
                    {
                        label: this.state.t('cancelLabel') || "Cancel",
                        className: 'btn-cancel',
                        onClick: () => { }
                    }
                ],
                showCloseIcon: false
            });
        } else if (confirm(this.state.t('confirmReset') || "Reset all data?")) {
            this.state.reset();
        }
    }
    performReset() {
    }
}