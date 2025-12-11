window.LOCALES = window.LOCALES || {};
window.LOCALES.ja = {
    nativeName: '日本語',
    strings: {
        helpTitle: '💡 使い方',
        helpContent: `<h3>1. プロンプトを組み立てる</h3>
<ul class="help-list">
<li><span class="inline-capsule-label">カプセル</span>をクリックまたはドラッグ＆ドロップして自由にチップを追加します。</li>
<li><span class="inline-chip-label">チップ</span>は好きな位置に挿入でき、順番も簡単に入れ替えられます。</li>
<li>チップをタップしてワイルドカードを編集し、🗑削除ゾーンにドラッグすると即削除できます。</li>
<li>チップ横の🎲をタップして🔒にすると固定できます。</li>
<li>チップの間をクリックすると連結/解除ができ、空白とカンマの出力を切り替えます。</li>
<li><strong>Ctrl + ドラッグ</strong>で連結されたチップの一つだけを個別に移動または削除できます。</li>
</ul>
<h3>2. 生成とコピー</h3>
<ul class="help-list">
<li>🎲 はランダム状態のチップだけをロールしてプロンプトを作成します。</li>
<li><strong>Auto Copy</strong>をオンにすると毎回自動でクリップボードへコピーされます。</li>
</ul>
<h3>3. お気に入り & 履歴</h3>
<ul class="help-list">
<li>⭐ お気に入りはドラッグで任意の位置に差し込めるプリセット、タップで全体を読み込めます。</li>
<li>⏱ 履歴では直近のダイス結果を確認でき、<span class="inline-key">Ctrl+Z / Ctrl+Shift+Z</span> や 🎲 の左右の矢印で遡れます。</li>
</ul>
<h3>4. 削除 / 編集</h3>
<ul class="help-list">
<li>チップや<strong>カプセル</strong>は🗑削除ゾーンにドラッグするとすぐに削除できます。</li>
<li>カプセルは約2秒長押しで名前変更ができます。</li>
</ul>
<h3>5. 保存と読み込み</h3>
<ul class="help-list">
<li><strong>ファイル保存</strong>は履歴を除くすべてのデータをJSONで書き出します。</li>
<li><strong>ファイルを開く</strong>と、このアプリで保存したJSONを復元できます。</li>
</ul>`,
        chipEmptyState: '👆 上のカプセルをタップまたはドラッグして追加します。',
        favoritesEmpty: 'お気に入りはまだありません。',
        historyEmpty: '履歴がありません。',
        popoverRandom: '🎲 ランダム',
        popoverAddPlaceholder: '検索または追加...',
        toastFavoritesAdded: '⭐ お気に入りに追加しました!',
        toastFavoriteExists: '⚠️ すでに登録されています。',
        toastFavoriteApplied: '✅ お気に入りを適用しました!',
        toastFavoriteDeleted: '🗑️ お気に入りを削除しました。',
        toastFavoriteRestored: '↩️ お気に入りを元に戻しました。',
        toastRollRestored: '⏪ 履歴を復元しました。',
        toastRollDeleted: '🗑️ 履歴が削除されました。',
        toastCopy: '✅ コピーしました!',
        toastCopyShort: '✅ コピー完了!',
        toastAutoCopyOn: '⚡ 自動コピー ON',
        toastAutoCopyOff: '✋ 自動コピー OFF',
        toastReset: '🔄 すべて初期化しました。',
        toastRollHistoryCleared: '🧹 履歴を削除しました。',
        toastPromptCopied: '⚡ プロンプトをコピーしました!',
        toastFavoriteRenamed: '✏️ お気に入り名を変更しました。',
        toastCapRenamed: '✏️ カプセル名を変更しました。',
        toastCapDeleted: '🗑️ カプセルを削除しました。',
        toastCapsuleExists: '⚠️ そのカプセルは既に存在します。',
        toastCapsuleAdded: '✅ 新しいカプセルを追加しました。',
        toastDataLoaded: '✅ データを正常に読み込みました。',
        toastImportSuccess: '📥 お気に入りを読み込みました。',
        errorIncompatibleData: '❌ 互換性のないデータバージョンです。',
        alertEmptyPrompt: '内容が空です。',
        confirmReset: 'データを初期化しますか？',
        confirmClearHistory: '履歴をすべて削除しますか？',
        newTagPrompt: '新しいタグ名:',
        dockDeleteBadge: '削除モード',
        settingsSave: 'ファイル保存',
        settingsOpen: 'ファイルを開く',
        settingsReset: 'アプリ初期化',
        btnFavAria: 'お気に入りに追加',
        btnGenerateAria: 'ロールして生成',
        btnCopyAria: 'プロンプトをコピー',
        btnPrevAria: '前の履歴',
        btnNextAria: '次の履歴',
        btnAutoCopyAria: '自動コピー切替',
        chipTrashHint: 'ここにドラッグしてチップを削除',
        settingsAria: '設定を開く',
        languageAria: '言語を変更',
        helpAria: 'ヘルプ',
        emptyPromptPreview: '(空のプロンプト)',
        chipLinkOn: '連結中',
        chipLinkOff: '連結',
        chipUnlink: '連結解除',
        capEditTitle: '名前を変更',
        capEditHint: '(空欄で削除)',
        confirmLabel: '決定',
        deleteLabel: '削除',
        cancelLabel: 'キャンセル',
        importError: 'エラー: ',
        historyTab: '⏱ 履歴',
        favoritesTab: '⭐ お気に入り',
        favoriteNamePrefix: 'Fav',
        favEditTitle: 'お気に入り名',
        favEditHint: '(空欄で削除)',
        cancelLabel: 'キャンセル',
        newCapsuleTitle: '新しいカプセルを作成',
        searchName: '名前',
        searchContent: '内容',
        paletteMono: 'モノ',
        palettePastel: 'パステル',
        themeLabel: 'テーマ',
        paletteLabel: 'スタイル',
        confirmRestoreTitle: '履歴を復元',
        confirmRestoreBody: '現在の作業を上書きして、この履歴の状態に戻しますか？',
        confirmApplyFavoriteTitle: 'お気に入りを適用',
        confirmApplyFavoriteBody: '現在の作業を上書きして、このお気に入りを適用しますか？',
        dontShowAgain: "今後表示しない",
        searchPlaceholder: '検索...',
        confirmUnload: "保存されていない変更は失われます。",
        btnSaveAndContinue: "保存して続行",
        btnDiscard: "保存しない",
        confirmClearAllTitle: "すべて削除",
        confirmClearAllBody: "エディタのすべてのチップを削除しますか？",
        confirmOpenFileTitle: "保存されていない変更",
        confirmOpenFileBody: "保存されていない変更（キーワード、構造など）は失われます。新しいファイルを開きますか？"
    }
};