class StateManager {
    constructor(constants, uiAdapter) {
        this.STORAGE_KEY = null;
        this.LEGACY_STORAGE_KEYS = [];
        this.LOCALE_KEY = 'promit_locale';
        this.THEME_KEY = 'promit-theme';
        this.APP_VERSION = 'Promit 2.0';
        this.activeFavoriteId = null;
        this.DATA_SCHEMA_VERSION = 2;
        this.MAX_HISTORY = 50;
        this.MAX_ROLL_HISTORY = 30;
        this.capsules = [];
        this.items = [];
        this.favorites = [];
        this.rollHistory = [];
        this.history = [];
        this.historyIndex = -1;
        this.rollHistoryIndex = -1;
        this.activeDockTab = 'favorites';
        this.randomDecks = {};
        this.listeners = [];
        this.constants = constants;
        this.ui = uiAdapter || {
            alert: (t, m) => alert(m),
            confirm: (opt) => confirm(opt.content),
            prompt: (t, d, cb) => cb(prompt(t, d)),
            toast: (m) => console.log(m)
        };
        this.locale = this.loadLocale();
        this.isDirty = false;
        this.chipGapPreview = null;
        this.capsuleGapPreview = null;
        this.favoriteGapPreview = null;
    }
    loadLocale() {
        return localStorage.getItem(this.LOCALE_KEY) || 'en';
    }
    initGapManagers() {
        if (typeof GapPreviewManager !== 'undefined') {
            this.chipGapPreview = new GapPreviewManager({
                getItemElement: (idx) => {
                    const container = document.getElementById('chipContainer');
                    const chips = container ? container.querySelectorAll('.chip') : [];
                    return chips[idx] || null;
                },
                activeClass: 'active',
                shiftLeftClass: 'shift-left',
                shiftRightClass: 'shift-right'
            });
            this.capsuleGapPreview = new GapPreviewManager({
                getItemElement: (idx) => {
                    const container = document.getElementById('capsuleContainer');
                    const caps = container ? container.querySelectorAll('.cap') : [];
                    return caps[idx] || null;
                },
                activeClass: 'active',
                shiftLeftClass: 'shift-left',
                shiftRightClass: 'shift-right'
            });
            this.favoriteGapPreview = new GapPreviewManager({
                getItemElement: (idx) => {
                    const container = document.getElementById('dockList');
                    const favs = container ? container.querySelectorAll('.fav-name-chip') : [];
                    return favs[idx] || null;
                },
                activeClass: 'active',
                shiftLeftClass: 'shift-left',
                shiftRightClass: 'shift-right'
            });
        }
    }
    subscribe(listener) {
        this.listeners.push(listener);
    }
    notify(event, data) {
        if (event === 'stateChanged' || event === 'historyChanged') {
            this.checkActiveFavorite();
            this.isDirty = true;
        }
        this.listeners.forEach(l => l(event, data));
    }
    async bootstrap() {
        const savedSnapshot = localStorage.getItem('promit_autosave_2');
        if (savedSnapshot) {
            try {
                const data = JSON.parse(savedSnapshot);
                if (data.schemaVersion === 2) {
                    this.applyImportedData(data, true);
                    console.log("Restored session from localStorage.");
                    return;
                }
            } catch (e) {
                console.warn("Failed to parse auto-save:", e);
                localStorage.removeItem('promit_autosave_2');
            }
        }
        await this.loadDefaultData();
        if (!this.capsules.length) {
            console.warn("No capsules loaded (Started Empty).");
        }
        this.pushHistory();
    }
    async loadDefaultData() {
        console.log('Loading default data from example_pack.json...');
        try {
            const response = await fetch('example_pack.json');
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            const data = await response.json();
            if (data.schemaVersion === 2) {
                this.capsules = Array.isArray(data.capsules) ? data.capsules : [];
                this.items = Array.isArray(data.items) ? data.items : [];
                this.favorites = Array.isArray(data.favorites) ? data.favorites : [];
                this.rollHistory = Array.isArray(data.rollHistory) ? data.rollHistory : [];
                console.log('Default data loaded successfully.');
            } else {
                console.warn('Incompatible schema version in default data.');
            }
        } catch (e) {
            console.warn('Failed to load default data:', e);
        }
    }
    applyImportedData(data, silent = false, skipDirtyCheck = false) {
        if (!data) return;



        if (!silent && !skipDirtyCheck && this.isDirty) {
            if (window.Modal) {
                window.Modal.show({
                    title: this.t('confirmOpenFileTitle') || "Unsaved Changes",
                    content: this.t('confirmOpenFileBody') || "Any unsaved changes will be lost. Open new file?",
                    buttons: [
                        {
                            label: this.t('confirmLabel') || "Confirm",
                            className: 'btn-confirm is-danger',
                            onClick: () => {
                                this._performImport(data, silent);
                                window.Modal.close();
                            }
                        },
                        {
                            label: this.t('cancelLabel') || "Cancel",
                            className: 'btn-cancel',
                            onClick: () => {
                                window.Modal.close();
                            }
                        }
                    ],
                    showCloseIcon: true
                });
                return;
            } else if (!confirm(this.t('confirmOpenFileBody') || "Unsaved changes will be lost. Open file?")) {
                return;
            }
        }

        this._performImport(data, silent);
    }

    _performImport(data, silent) {
        if (data.schemaVersion === 2) {
            this.suppressAutoCopy = true;
            this.capsules = Array.isArray(data.capsules) ? data.capsules : [];
            this.items = Array.isArray(data.items) ? data.items : [];
            this.favorites = Array.isArray(data.favorites) ? data.favorites : [];
            this.rollHistory = Array.isArray(data.rollHistory) ? data.rollHistory : [];
            this.pushHistory();
            this.notify('capsulesChanged');
            this.notify('stateChanged');
            this.notify('historyChanged');
            this.notify('historyChanged');
            this.notify('favoritesChanged');
            this.rollHistoryIndex = this.rollHistory.length > 0 ? this.rollHistory.length - 1 : -1;
            this.checkActiveFavorite();
            setTimeout(() => { this.suppressAutoCopy = false; }, 100);
            if (!silent) {
                this.notify('showToast', this.t('toastDataLoaded') || "Data Loaded Successfully");
            }
            this.saveData();
            this.isDirty = false;
        } else {
            const errorMsg = this.t('errorIncompatibleData') || "Incompatible data version";
            if (window.Modal) {
                window.Modal.alert(this.t('importError') || "Error", errorMsg);
            } else {
                alert(errorMsg);
            }
        }
    }
    pushHistory() {
        if (this.historyIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.historyIndex + 1);
        }

        const snapshot = {
            items: JSON.parse(JSON.stringify(this.items)),
            capsules: JSON.parse(JSON.stringify(this.capsules)),
            favorites: JSON.parse(JSON.stringify(this.favorites)),
            rollHistoryIndex: this.rollHistoryIndex
        };
        this.history.push(snapshot);
        if (this.history.length > this.MAX_HISTORY) {
            this.history.shift();
        }
        this.historyIndex = Math.max(0, this.history.length - 1);
        this.notify('historyChanged', this.historyIndex);
        this.saveData();
    }
    navHistory(dir) {
        const newIndex = this.historyIndex + dir;
        if (newIndex >= 0 && newIndex < this.history.length) {
            this.historyIndex = newIndex;
            const snapshot = this.history[this.historyIndex];


            if (Array.isArray(snapshot)) {
                this.items = JSON.parse(JSON.stringify(snapshot));
            } else {
                this.items = JSON.parse(JSON.stringify(snapshot.items || []));
                if (snapshot.capsules) this.capsules = JSON.parse(JSON.stringify(snapshot.capsules));
                if (snapshot.favorites) this.favorites = JSON.parse(JSON.stringify(snapshot.favorites));
                if (snapshot.rollHistoryIndex !== undefined) this.rollHistoryIndex = snapshot.rollHistoryIndex;
            }

            this.saveData();
            this.notify('stateChanged', this.items);
            this.notify('capsulesChanged');
            this.notify('favoritesChanged');
        }
    }

    navRollHistory(dir) {
        if (this.rollHistory.length === 0) return;

        let newIndex = this.rollHistoryIndex;



        if (newIndex === -1 && dir === -1) {
            newIndex = this.rollHistory.length - 1;
        } else {
            newIndex += dir;
        }

        if (newIndex >= 0 && newIndex < this.rollHistory.length) {
            this.rollHistoryIndex = newIndex;
            const entry = this.rollHistory[this.rollHistoryIndex];
            if (entry && entry.items) {
                this.items = JSON.parse(JSON.stringify(entry.items));
                this.notify('stateChanged');
                this.pushHistory();  
            }
        }
    }
    createItemObject(type, value = "") {
        let baseColor;
        const def = this.getCapsuleDefinition(type);
        if (def && def.color) {
            baseColor = def.color;
        } else {
            baseColor = window.ColorUtils ? window.ColorUtils.generatePastelColor() : '#E0E0E0';
        }
        return {
            id: type + '_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
            type: type,
            value: value,
            isRandom: false,
            linkNext: false,
            color: baseColor
        };
    }
    addItem(type, targetIndex = null, value = "") {
        const item = this.createItemObject(type, value);
        if (targetIndex !== null && targetIndex >= 0 && targetIndex <= this.items.length) {
            this.items.splice(targetIndex, 0, item);
        } else {
            this.items.push(item);
        }
        this.pushHistory();
        this.notify('stateChanged');
    }
    deleteItem(id, isSingle = false) {
        const idx = this.items.findIndex(i => i.id === id);
        if (idx > -1) {
            let start = idx;
            let count = 1;

            if (!isSingle) {

                const range = this.getLinkedChainRange(this.items, idx);
                start = range.start;
                count = range.end - range.start + 1;
            } else {








            }


            this.items.splice(start, count);



            if (this.items.length > 0) {
                if (start > 0 && start <= this.items.length) {


                }
                this.items[this.items.length - 1].linkNext = false;
            }

            this.pushHistory();
            this.notify('stateChanged');
        }
    }
    findItemById(id) {
        return this.items.find(i => i.id === id);
    }
    moveItem(id, targetIndex, isSingle = false) {
        const srcIdx = this.items.findIndex(i => i.id === id);
        if (srcIdx === -1) return;

        let shouldMoveChain = false;
        let range = { start: srcIdx, end: srcIdx };
        let count = 1;

        if (!isSingle) {
            range = this.getLinkedChainRange(this.items, srcIdx);
            count = range.end - range.start + 1;
            if (count > 1) shouldMoveChain = true;
        }

        if (shouldMoveChain) {
            if (this._moveChainLogic(this.items, range.start, count, targetIndex)) {
                this.pushHistory();
                this.notify('stateChanged');
            }
        } else {


            if (this._reorderWithLinkLogic(this.items, srcIdx, targetIndex)) {
                this.pushHistory();
                this.notify('stateChanged');
            }
        }
    }
    getLinkedChainRange(list, index) {
        if (index < 0 || index >= list.length) return { start: index, end: index };
        let start = index;
        let end = index;
        while (start > 0 && list[start - 1].linkNext) {
            start--;
        }
        while (end < list.length - 1 && list[end].linkNext) {
            end++;
        }
        return { start, end };
    }
    _moveChainLogic(list, srcStart, count, targetIndex) {
        if (srcStart < 0) return false;
        if (targetIndex > srcStart && targetIndex <= srcStart + count) return false;
        if (targetIndex === srcStart) return false;
        const items = list;
        const chainLast = items[srcStart + count - 1];
        const prevItemLinkedToChain = srcStart > 0 && items[srcStart - 1]?.linkNext;
        const chainLinkedToNext = chainLast.linkNext;
        const movedBlock = items.splice(srcStart, count);
        if (srcStart > 0 && prevItemLinkedToChain) {
            if (srcStart - 1 < items.length) {
                items[srcStart - 1].linkNext = chainLinkedToNext;
            } else {
                items[srcStart - 1].linkNext = false;
            }
        }
        let finalIdx = targetIndex;
        if (srcStart < targetIndex) finalIdx -= count;
        finalIdx = Math.max(0, Math.min(finalIdx, items.length));
        items.splice(finalIdx, 0, ...movedBlock);
        const newPrev = finalIdx > 0 ? items[finalIdx - 1] : null;
        if (newPrev && newPrev.linkNext) {
            movedBlock[movedBlock.length - 1].linkNext = true;
        } else {
            movedBlock[movedBlock.length - 1].linkNext = false;
        }
        if (finalIdx + count === items.length) {
            movedBlock[movedBlock.length - 1].linkNext = false;
        }
        return true;
    }
    _reorderWithLinkLogic(list, srcIdx, targetIndex) {
        if (srcIdx === -1) return false;
        if (srcIdx === targetIndex || srcIdx === targetIndex - 1) return false;
        const items = list;
        const srcItem = items[srcIdx];
        const originalLinkNext = srcItem.linkNext;
        const prevItemLinkedToSrc = srcIdx > 0 && items[srcIdx - 1]?.linkNext;
        const [movedItem] = items.splice(srcIdx, 1);
        if (srcIdx > 0 && prevItemLinkedToSrc) {
            if (srcIdx - 1 < items.length) {
                items[srcIdx - 1].linkNext = originalLinkNext;
            } else {
                items[srcIdx - 1].linkNext = false;
            }
        }
        let finalIdx = targetIndex;
        if (srcIdx < targetIndex) finalIdx--;
        finalIdx = Math.max(0, Math.min(finalIdx, items.length));
        items.splice(finalIdx, 0, movedItem);
        const newPrev = finalIdx > 0 ? items[finalIdx - 1] : null;
        if (newPrev && newPrev.linkNext) {
            movedItem.linkNext = true;
        } else {
            movedItem.linkNext = false;
        }
        if (finalIdx === items.length - 1) {
            movedItem.linkNext = false;
        }
        return true;
    }
    copyItem(id, targetIndex) {
        const srcItem = this.findItemById(id);
        if (!srcItem) return;
        const newItem = JSON.parse(JSON.stringify(srcItem));
        newItem.id = newItem.type + '_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
        newItem.linkNext = false;
        if (targetIndex !== null && targetIndex >= 0) {
            this.items.splice(targetIndex, 0, newItem);
        } else {
            this.items.push(newItem);
        }
        this.pushHistory();
        this.notify('stateChanged');
    }
    applyFavorite(favId, targetIndex = null) {
        const fav = this.favorites.find(f => f.id === favId);
        if (!fav || !Array.isArray(fav.items)) return;
        if (targetIndex === null) {
            this.activeFavoriteId = favId;
            this.items = [];
        }
        const clones = fav.items.map(item => {
            const clone = JSON.parse(JSON.stringify(item));
            clone.id = clone.type + '_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
            return clone;
        });
        if (clones.length === 0) return;
        if (targetIndex !== null && targetIndex >= 0) {
            this.items.splice(targetIndex, 0, ...clones);
        } else {
            this.items.push(...clones);
        }
        this.pushHistory();
        this.notify('stateChanged');
    }

    clearAllItems() {
        if (this.items.length === 0) return;
        this.items = [];
        this.pushHistory();
        this.notify('stateChanged');
    }

    applyHistory(historyIndex, targetIndex = null) {
        if (historyIndex < 0 || historyIndex >= this.rollHistory.length) return;
        const entry = this.rollHistory[historyIndex];
        if (!entry || !Array.isArray(entry.items)) return;
        if (targetIndex === null) {
            this.items = [];
        }
        const clones = entry.items.map(item => {
            const clone = JSON.parse(JSON.stringify(item));
            clone.id = clone.type + '_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
            return clone;
        });
        if (clones.length === 0) return;
        if (targetIndex !== null && targetIndex >= 0) {
            this.items.splice(targetIndex, 0, ...clones);
        } else {
            this.items.push(...clones);
        }
        this.pushHistory();
        this.notify('stateChanged');
    }
    deleteFavorite(id) {
        const idx = this.favorites.findIndex(f => f.id === id);
        if (idx > -1) {
            this.favorites.splice(idx, 1);
            if (this.activeFavoriteId === id) {
                this.activeFavoriteId = null;
            }
            this.saveData();
            this.notify('favoritesChanged');
            this.pushHistory();
        }
    }
    moveFavorite(id, targetIndex) {
        const srcIdx = this.favorites.findIndex(f => f.id === id);
        if (srcIdx === -1) return;
        const [fav] = this.favorites.splice(srcIdx, 1);
        let finalIdx = targetIndex;
        if (srcIdx < targetIndex) finalIdx--;
        finalIdx = Math.max(0, Math.min(finalIdx, this.favorites.length));
        this.favorites.splice(finalIdx, 0, fav);
        this.saveData();
        this.notify('favoritesChanged');
        this.pushHistory();
    }
    renameFavorite(id, newName) {
        const fav = this.favorites.find(f => f.id === Number(id));
        if (fav) {
            fav.name = newName;
            this.saveData();
            this.notify('favoritesChanged');
            this.pushHistory();
        }
    }
    addFavoriteFromCurrent() {
        if (!this.items.length) {
            this.notify('showToast', this.t('toastEmptyState') || "No items to save");
            return;
        }
        if (this.activeFavoriteId) {
            this.deleteFavorite(this.activeFavoriteId);
            this.ui.toast(this.t('toastFavoriteDeleted') || "Favorite removed");
            return;
        }
        const currentText = this.buildPromptFromItems(this.items);
        const existing = this.favorites.find(f => this.buildPromptFromItems(f.items) === currentText);
        if (existing) {
            this.notify('showToast', this.t('toastFavoriteExists') || "Already stored");
            this.activeFavoriteId = existing.id;
            this.notify('favoritesChanged');
            this.notify('stateChanged');
            return;
        }
        const count = this.favorites.length + 1;
        const newFav = {
            id: Date.now(),
            name: `Fav ${count}`,
            items: JSON.parse(JSON.stringify(this.items)),
            color: window.ColorUtils ? window.ColorUtils.generatePastelColor() : '#E0E0E0'
        };
        if (window.ColorUtils && window.ColorUtils.createDarkVariant) {
            newFav.darkColor = window.ColorUtils.createDarkVariant(newFav.color);
        }
        this.favorites.push(newFav);
        this.activeFavoriteId = newFav.id;
        this.saveData();
        this.notify('favoritesChanged');
        this.notify('stateChanged');
        this.pushHistory();
        this.ui.toast(this.t('toastFavoritesAdded') || "Added to Favorites!");
    }
    addFavoriteFromItems(itemsToFav) {
        if (!itemsToFav || !itemsToFav.length) return;
        const currentText = this.buildPromptFromItems(itemsToFav);
        const existing = this.favorites.find(f => this.buildPromptFromItems(f.items) === currentText);
        if (existing) {
            this.notify('showToast', this.t('toastFavoriteExists') || "Already stored");
            return;
        }
        const count = this.favorites.length + 1;
        const newFav = {
            id: Date.now(),
            name: `Fav ${count}`,
            items: JSON.parse(JSON.stringify(itemsToFav)),
            color: window.ColorUtils ? window.ColorUtils.generatePastelColor() : '#E0E0E0'
        };
        if (window.ColorUtils && window.ColorUtils.createDarkVariant) {
            newFav.darkColor = window.ColorUtils.createDarkVariant(newFav.color);
        }
        this.favorites.push(newFav);
        this.saveData();
        this.notify('favoritesChanged');
        this.pushHistory();
        this.ui.toast(this.t('toastFavoritesAdded') || "Added to Favorites!");
    }
    checkActiveFavorite() {
        if (this.favorites.length === 0) {
            this.activeFavoriteId = null;
            return;
        }
        const currentText = this.buildPromptFromItems(this.items);
        if (!currentText) {
            this.activeFavoriteId = null;
            return;
        }
        const match = this.favorites.find(f => {
            return this.buildPromptFromItems(f.items) === currentText;
        });
        if (match) {
            this.activeFavoriteId = match.id;
        } else {
            this.activeFavoriteId = null;
        }
    }
    saveData() {
        try {
            const snapshot = {
                schemaVersion: this.DATA_SCHEMA_VERSION,
                capsules: this.capsules,
                items: this.items,
                favorites: this.favorites,
                rollHistory: this.rollHistory,
                savedAt: Date.now()
            };
            localStorage.setItem('promit_autosave_2', JSON.stringify(snapshot));
        } catch (e) {
            console.warn("Auto-save failed (Storage limit?):", e);
        }
    }
    getCapsuleDefinition(key) {
        return this.capsules.find(c => c.key === key) || null;
    }
    toggleCapsuleLink(index) {
        if (!this.capsules[index]) return;
        const capsule = this.capsules[index];
        capsule.linkNext = !capsule.linkNext;
        this.saveData();
        this.notify('capsulesChanged');
    }
    getSortedOptions(type) {
        const capsule = this.getCapsuleDefinition(type);
        if (!capsule) return [];
        if (!Array.isArray(capsule.options)) capsule.options = [];
        return capsule.options.sort((a, b) => a.localeCompare(b));
    }
    getTypeLabel(type) {
        const cap = this.getCapsuleDefinition(type);
        return cap ? (cap.label || cap.key) : type;
    }
    setLocale(code) {
        this.locale = code;
        localStorage.setItem(this.LOCALE_KEY, code);
        this.notify('localeChanged');
        this.notify('stateChanged');
    }
    t(key) {
        if (window.LOCALES && window.LOCALES[this.locale] && window.LOCALES[this.locale].strings) {
            return window.LOCALES[this.locale].strings[key] || key;
        }
        return key;
    }
    shuffleList(list = []) {
        const arr = Array.isArray(list) ? [...list] : [];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    getOptionsSignature(options = []) {
        if (!Array.isArray(options)) return '[]';
        return JSON.stringify(options);
    }
    cycleChipOption(chipId, direction) {
        const itemIndex = this.items.findIndex(i => i.id === chipId);
        if (itemIndex === -1) return;
        const item = this.items[itemIndex];
        const capsule = this.getCapsuleDefinition(item.type);
        if (!capsule || !capsule.options || capsule.options.length === 0) return;
        const options = this.getSortedOptions(item.type);
        if (options.length === 0) return;
        let currentIndex = options.indexOf(item.value);
        let nextIndex;
        if (currentIndex === -1) {
            nextIndex = direction > 0 ? 0 : options.length - 1;
        } else {
            nextIndex = currentIndex + direction;
            if (nextIndex >= options.length) nextIndex = 0;
            if (nextIndex < 0) nextIndex = options.length - 1;
        }
        const newValue = options[nextIndex];
        if (newValue !== item.value) {
            item.value = newValue;
            item.isRandom = false;
            this.pushHistory();
            this.notify('stateChanged');
        }
    }
    drawFromDeck(type) {
        if (!type) return null;
        const capsule = this.getCapsuleDefinition(type);
        const opts = capsule?.options;
        if (!Array.isArray(opts) || opts.length === 0) return null;
        if (!this.randomDecks[type]) {
            this.randomDecks[type] = {
                deck: this.shuffleList(opts),
                signature: this.getOptionsSignature(opts)
            };
        }
        const currentSig = this.getOptionsSignature(opts);
        if (this.randomDecks[type].signature !== currentSig) {
            this.randomDecks[type] = {
                deck: this.shuffleList(opts),
                signature: currentSig
            };
        }
        if (this.randomDecks[type].deck.length === 0) {
            this.randomDecks[type].deck = this.shuffleList(opts);
        }
        return this.randomDecks[type].deck.pop();
    }
    resetDeck(type) {
        if (this.randomDecks[type]) {
            delete this.randomDecks[type];
        }
    }
    generateValues(isLucky = false) {
        let changed = false;
        this.items.forEach(item => {
            if (item.value !== "" && !item.isRandom) return;
            if (!(isLucky || item.isRandom)) return;
            const nextValue = this.drawFromDeck(item.type);
            if (nextValue !== null) {
                item.value = nextValue;
                item.isRandom = true;
                changed = true;
            }
        });
        if (changed) {
            this.pushHistory();
            this.rollHistory.push({
                timestamp: Date.now(),
                items: JSON.parse(JSON.stringify(this.items))
            });
            if (this.rollHistory.length > this.MAX_ROLL_HISTORY) {
                this.rollHistory.shift();
            }
            this.rollHistoryIndex = this.rollHistory.length - 1;
            this.notify('stateChanged');
            this.notify('dockChanged');
        }
    }
    buildPromptFromItems(list) {
        if (!list || !list.length) return "";
        let prompt = "";
        list.forEach((item, index) => {
            if (!item.value) return;
            prompt += item.value;
            if (index < list.length - 1) {
                if (item.linkNext) {
                    prompt += " ";
                } else if (!this.shouldSkipLinkSpace(list[index + 1])) {
                    prompt += ", ";
                }
            }
        });
        return prompt.trim();
    }
    shouldSkipLinkSpace(nextItem) {
        return false;
    }
    generatePrompt() {
        return this.buildPromptFromItems(this.items);
    }
    moveCapsule(key, targetIndex, isSingle = false) {
        const srcIdx = this.capsules.findIndex(c => c.key === key);
        if (srcIdx === -1) return;

        let shouldMoveChain = false;
        let range = { start: srcIdx, end: srcIdx };
        let count = 1;

        if (!isSingle) {
            range = this.getLinkedChainRange(this.capsules, srcIdx);
            count = range.end - range.start + 1;
            if (count > 1) shouldMoveChain = true;
        }

        if (shouldMoveChain) {
            if (this._moveChainLogic(this.capsules, range.start, count, targetIndex)) {
                this.saveData();
                this.notify('capsulesChanged');
            }
        } else {

            if (this._reorderWithLinkLogic(this.capsules, srcIdx, targetIndex)) {
                this.saveData();
                this.notify('capsulesChanged');
                this.pushHistory();
            }
        }
    }
    removeCapsule(key) {
        const idx = this.capsules.findIndex(c => c.key === key);
        if (idx > -1) {
            this.capsules.splice(idx, 1);
            this.saveData();
            this.notify('capsulesChanged');
            this.pushHistory();
            this.ui.toast(this.t('toastCapDeleted') || "Capsule Deleted");
        }
    }
    deleteRollHistoryItem(index) {
        if (index >= 0 && index < this.rollHistory.length) {
            this.rollHistory.splice(index, 1);
            this.saveData();
            this.notify('historyChanged');
            this.ui.toast(this.t('toastRollDeleted') || "History Item Deleted");
        }
    }
    addCustomType() {
        this.ui.prompt(this.t('newCapsuleTitle') || "Create New Capsule", "", (name) => {
            if (name && name.trim()) {
                const key = name.trim();
                if (this.capsules.find(c => c.key === key)) {
                    this.ui.toast(this.t('toastCapsuleExists') || "Capsule already exists!");
                    return;
                }
                const newCap = {
                    key: key,
                    label: key,
                    color: window.ColorUtils ? window.ColorUtils.generatePastelColor() : '#e0e0e0',
                    options: [],
                    linkNext: false
                };
                this.capsules.push(newCap);
                this.saveData();
                this.notify('capsulesChanged');
                this.pushHistory();
                const msg = (this.t('toastCapsuleAdded') || "Added capsule") + ": " + key;
                this.ui.toast(msg);
            }
        });
    }
    async reset() {
        this.items = [];
        this.favorites = [];
        this.rollHistory = [];
        this.capsules = [];
        this.history = [];
        this.historyIndex = -1;
        this.activeFavoriteId = null;

        localStorage.removeItem('promit_skip_history_restore');
        localStorage.removeItem('promit_skip_fav_apply');
        localStorage.removeItem('promit_skip_clear_all');

        await this.loadDefaultData();
        this.suppressAutoCopy = true;
        this.pushHistory();
        this.notify('capsulesChanged');
        this.notify('stateChanged');
        this.notify('favoritesChanged');
        this.notify('historyChanged');
        this.notify('localeChanged');
        setTimeout(() => { this.suppressAutoCopy = false; }, 100);
        this.isDirty = false;
        this.ui.toast(this.t('toastReset') || "App Reset Complete");
    }
    markSaved() {
        this.isDirty = false;
    }
}