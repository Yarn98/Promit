class SearchController {
    constructor(stateManager) {
        this.state = stateManager;
        this.searchInput = document.getElementById('searchInput');
        this.searchModeSelect = document.getElementById('searchModeSelect');
        this.clearBtn = document.getElementById('searchClearBtn');
        this.mode = 'name';  
        this.init();
    }
    init() {
        if (!this.searchInput) return;
        if (this.searchModeSelect) {
            this.searchModeSelect.addEventListener('change', (e) => {
                this.mode = e.target.value;
                if (this.searchInput.value.trim()) {
                    this.handleSearch(this.searchInput.value);
                }
            });
        }
        this.searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            this.handleSearch(query);
            this.toggleClearBtn(query.length > 0);
        });
        if (this.clearBtn) {
            this.clearBtn.addEventListener('click', () => {
                this.searchInput.value = '';
                this.handleSearch('');
                this.toggleClearBtn(false);
                this.searchInput.focus();
            });
        }
        this.state.subscribe((event) => {
            if (['dockChanged', 'capsulesChanged', 'stateChanged', 'historyChanged', 'themeChanged'].includes(event)) {
                if (this.searchInput.value.trim()) {
                    this.handleSearch(this.searchInput.value);
                }
            }
        });
    }
    toggleClearBtn(visible) {
        if (this.clearBtn) {
            this.clearBtn.style.display = visible ? 'flex' : 'none';
        }
    }
    handleSearch(query) {
        const term = query.trim().toLowerCase();
        const allElements = document.querySelectorAll('.cap, .chip, .fav-name-chip');
        if (!term) {
            allElements.forEach(el => {
                el.classList.remove('search-highlight');
                el.style.transform = '';
            });
            return;
        }
        allElements.forEach(el => {
            let matches = false;
            if (this.mode === 'name') {
                const text = (el.textContent || '').toLowerCase();
                matches = text.includes(term);
            } else {
                matches = this.checkKeywordMatch(el, term);
            }
            if (matches) {
                el.classList.add('search-highlight');
            } else {
                el.classList.remove('search-highlight');
                el.style.transform = '';
            }
        });
    }
    checkKeywordMatch(el, term) {
        if (el.classList.contains('chip')) {
            const text = (el.textContent || '').toLowerCase();
            return text.includes(term);
        }
        if (el.classList.contains('cap') && !el.classList.contains('fav-name-chip')) {
            const label = el.textContent.trim();
            const capDef = this.state.capsules.find(c =>
                (c.label || c.key).toLowerCase() === label.toLowerCase() ||
                c.type === label  
            );
            if (capDef && Array.isArray(capDef.options)) {
                return capDef.options.some(opt => opt.toLowerCase().includes(term));
            }
        }
        if (el.classList.contains('fav-name-chip')) {
            const favId = el.dataset.favId;
            if (favId) {
                const fav = this.state.favorites.find(f => String(f.id) === String(favId));
                if (fav && Array.isArray(fav.items)) {
                    return fav.items.some(item => (item.value || '').toLowerCase().includes(term));
                }
            }
        }
        return false;
    }
}
window.SearchController = SearchController;
console.log('SearchController Module Loaded');