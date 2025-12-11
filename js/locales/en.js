window.LOCALES = window.LOCALES || {};
window.LOCALES.en = {
    nativeName: 'English',
    strings: {
        helpTitle: '💡 How to Use',
        helpContent: `<h3>1. Build Your Prompt</h3>
<ul class="help-list">
<li><span class="inline-capsule-label">CAPSULE</span> Click or drag & drop from the top bar to add chips anywhere.</li>
<li><span class="inline-chip-label">CHIP</span> Drag to reorder or insert between others; drop onto the 🗑 zone to delete.</li>
<li>Tap a chip to edit options, long-press any entry to rename or clear it.</li>
<li>Tap the chip's 🎲 icon to lock it as a 🔒 so it won't roll.</li>
<li>Click between chips to link or unlink them (switching between space and comma output).</li>
<li><strong>Ctrl + Drag</strong> a chip to move or delete it <strong>individually</strong> (ignoring links).</li>
</ul>
<h3>2. Generate & Copy</h3>
<ul class="help-list">
<li>🎲 rolls only the chips marked as random and builds the prompt.</li>
<li><strong>Auto Copy</strong> instantly copies every roll to your clipboard.</li>
</ul>
<h3>3. Favorites & History</h3>
<ul class="help-list">
<li>⭐ Favorites work like drop-in presets: drag a favorite chip onto the board to insert its combo, or tap to load it entirely.</li>
<li>⏱ History lets you revisit recent rolls. Use <span class="inline-key">Ctrl+Z / Ctrl+Shift+Z</span> or the arrows beside 🎲.</li>
<li>Long-press a favorite chip to rename or delete it.</li>
</ul>
<h3>4. Edit or Delete</h3>
<ul class="help-list">
<li>Drag any chip or <strong>Capsule</strong> onto the 🗑 delete zone to remove it.</li>
<li>Long-press a capsule for ~2 seconds to rename it.</li>
</ul>
<h3>5. Save & Load</h3>
<ul class="help-list">
<li><strong>Save File</strong> exports all of your prompt data (everything except roll history) as a JSON backup.</li>
<li><strong>Open File</strong> restores a JSON that was saved from this app.</li>
</ul>`,
        chipEmptyState: '👆 Tap or drag capsules above to add chips.',
        favoritesEmpty: 'No favorites yet.',
        historyEmpty: 'No roll history yet.',
        popoverRandom: '🎲 Random',
        popoverAddPlaceholder: 'Search or Add...',
        toastEmptyState: 'No active chips to add.',
        toastFavoritesAdded: '⭐ Added to Favorites!',
        toastFavoriteExists: '⚠️ Already stored.',
        toastFavoriteApplied: '✅ Favorites applied!',
        toastFavoriteDeleted: '🗑️ Favorite removed.',
        toastFavoriteRestored: '↩️ Favorite restored.',
        toastRollRestored: '⏪ History restored.',
        toastRollDeleted: '🗑️ History item deleted.',
        toastCopy: '✅ Copied to clipboard!',
        toastCopyShort: '✅ Copied!',
        toastAutoCopyOn: '⚡ Auto Copy ON',
        toastAutoCopyOff: '✋ Auto Copy OFF',
        toastReset: '🔄 All data has been reset.',
        toastRollHistoryCleared: '🧹 Roll history cleared.',
        toastPromptCopied: '⚡ Prompt copied!',
        toastFavoriteRenamed: '✏️ Favorite renamed.',
        toastCapRenamed: '✏️ Capsule name updated.',
        toastCapDeleted: '🗑️ Capsule deleted.',
        toastCapsuleExists: '⚠️ Capsule already exists.',
        toastCapsuleAdded: '✅ New capsule added.',
        toastDataLoaded: '✅ Data loaded successfully.',
        toastImportSuccess: '📥 Favorites imported!',
        errorIncompatibleData: '❌ Incompatible data version.',
        alertEmptyPrompt: 'Prompt is empty.',
        confirmReset: 'Reset all data?',
        confirmClearHistory: 'Clear all roll history?',
        newTagPrompt: 'New tag name:',
        dockDeleteBadge: 'Delete Mode',
        settingsSave: 'Save File',
        settingsOpen: 'Open File',
        settingsReset: 'Reset app',
        btnFavAria: 'Add to favorites',
        btnGenerateAria: 'Roll & Generate',
        btnCopyAria: 'Copy prompt',
        btnPrevAria: 'Previous history',
        btnNextAria: 'Next history',
        btnAutoCopyAria: 'Toggle auto copy',
        chipTrashHint: 'Drop chips here to delete',
        settingsAria: 'Open settings',
        languageAria: 'Change language',
        helpAria: 'Help',
        emptyPromptPreview: '(Empty prompt)',
        chipLinkOn: 'Linked',
        chipLinkOff: 'Link',
        chipUnlink: 'Unlink',
        capEditTitle: 'Rename',
        capEditHint: '(Blank to delete)',
        confirmLabel: 'Confirm',
        deleteLabel: 'Delete',
        cancelLabel: 'Cancel',
        importError: 'Error: ',
        historyTab: '⏱ History',
        favoritesTab: '⭐ Favorites',
        favoriteNamePrefix: 'Fav',
        favEditTitle: 'Rename',
        favEditHint: '(Blank to delete)',
        cancelLabel: 'Cancel',
        newCapsuleTitle: 'Create New Capsule',
        searchName: 'Name',
        searchContent: 'Content',
        paletteMono: 'Mono',
        palettePastel: 'Pastel',
        themeLabel: 'Theme',
        paletteLabel: 'Style',
        confirmRestoreTitle: 'Restore History',
        confirmRestoreBody: 'This will overwrite your current work. Restore this state?',
        confirmApplyFavoriteTitle: 'Apply Favorite',
        confirmApplyFavoriteBody: 'This will overwrite your current work. Apply this favorite?',
        confirmLabel: 'Confirm',
        cancelLabel: 'Cancel',
        dontShowAgain: "Don't show again",
        searchPlaceholder: 'Search...',
        confirmUnload: "Unsaved changes will be lost.",
        btnSaveAndContinue: "Save & Continue",
        btnDiscard: "Discard",
        confirmClearAllTitle: "Clear All Chips",
        confirmClearAllBody: "Remove all chips from the editor?",
        confirmOpenFileTitle: "Unsaved Changes",
        confirmOpenFileBody: "Any unsaved changes (Keywords, Structure) will be lost. Open new file?"
    }
};