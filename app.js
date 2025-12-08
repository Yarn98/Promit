const Palette = [
            "#FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", "#C7CEEA",
            "#F8C8DC", "#D5AAFF", "#97C1A9", "#E5E4E2", "#FF9AA2",
            "#B5B9FF", "#85E3FF", "#FFD3B6", "#A0E7E5", "#FBE7C6",
            "#D9D9D9", "#FFA384", "#74BDCB", "#EFE1CE", "#F9F871"
        ];
        const LOCALE_ORDER = ['en', 'ko', 'ja', 'zh'];
        const LOCALES = {
            en: {
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
<li>Drag any chip onto the 🗑 delete zone to remove it.</li>
<li>Long-press a capsule for ~2 seconds to rename or delete it.</li>
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
                    popoverAddPlaceholder: '+ Add & Select...',
                    toastFavoritesAdded: '⭐ Added to favorites!',
                    toastFavoriteExists: '⚠️ Already in favorites.',
                    toastFavoriteApplied: '✅ Favorite applied!',
                    toastFavoriteDeleted: '🗑️ Favorite removed.',
                    toastFavoriteRestored: '↩️ Favorite restored.',
                    toastRollRestored: '⏪ Roll restored',
                    toastCopy: '✅ Copied to clipboard!',
                    toastCopyShort: '✅ Copied!',
                    toastAutoCopyOn: '⚡ Auto copy ON',
                    toastAutoCopyOff: '✋ Auto copy OFF',
                    toastReset: '🔄 All data reset',
                    toastRollHistoryCleared: '🧹 Roll history cleared',
                    toastPromptCopied: '⚡ Prompt copied!',
                    toastFavoriteRenamed: '✏️ Favorite renamed.',
                    toastCapRenamed: '✏️ Capsule name updated.',
                    toastCapDeleted: '🗑️ Capsule deleted.',
                    toastImportSuccess: '📥 Favorites imported!',
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
                    cancelLabel: 'Cancel'
                }
            },
            ko: {
                nativeName: '한국어',
                strings: {
                    helpTitle: '💡 사용 방법',
                    helpContent: `<h3>1. 프롬프트 구성하기</h3>
<ul class="help-list">
<li><span class="inline-capsule-label">캡슐</span>을 클릭하거나 드래그&드롭하여 자유롭게 칩을 추가하세요.</li>
<li><span class="inline-chip-label">칩</span>은 원하는 위치에 끼워 넣거나 순서를 마음대로 바꿀 수 있습니다.</li>
<li>칩을 클릭하면 와일드카드 목록을 추가·수정할 수 있고, 🗑 휴지통으로 드래그하면 삭제됩니다.</li>
<li>칩 앞의 🎲 아이콘을 눌러 🔒 로 전환하면 해당 칩을 고정합니다.</li>
<li>칩 사이를 클릭하면 연결/해제가 되어 띄어쓰기와 콤마 출력 방식을 바꿀 수 있습니다.</li>
</ul>
<h3>2. 생성과 복사</h3>
<ul class="help-list">
<li>🎲 버튼은 랜덤 상태(🎲)인 칩만 굴려서 프롬프트를 만듭니다.</li>
<li><strong>Auto Copy</strong>를 켜두면 매번 자동으로 클립보드에 복사됩니다.</li>
</ul>
<h3>3. 즐겨찾기 & 기록 복구</h3>
<ul class="help-list">
<li>⭐ 즐겨찾기는 칩을 드래그해 원하는 위치에 끼워넣을 수 있는 프리셋이며, 탭하면 전체를 불러옵니다.</li>
<li>⏱ 히스토리에서는 이전 다이스 값을 확인할 수 있으며 <span class="inline-key">Ctrl+Z / Ctrl+Shift+Z</span> 또는 🎲 양 옆의 화살표로 이동할 수 있습니다.</li>
</ul>
<h3>4. 삭제 또는 수정</h3>
<ul class="help-list">
<li>칩은 🗑 휴지통 영역으로 드래그하면 즉시 삭제됩니다.</li>
<li>캡슐을 약 2초간 길게 눌러 이름을 바꾸거나 삭제할 수 있습니다.</li>
</ul>
<h3>5. 파일 저장·불러오기</h3>
<ul class="help-list">
<li><strong>파일 저장</strong>을 누르면 히스토리를 제외한 모든 데이터를 JSON으로 내보낼 수 있습니다.</li>
<li><strong>파일 열기</strong>는 이 앱에서 저장한 JSON을 다시 불러옵니다.</li>
</ul>`,
                    chipEmptyState: '👆 상단의 캡슐을 클릭하거나 드래그하여 추가하세요.',
                    favoritesEmpty: '즐겨찾기가 없습니다.',
                    historyEmpty: '히스토리 내역이 없습니다.',
                    popoverRandom: '🎲 랜덤',
                    popoverAddPlaceholder: '+ 직접 추가 후 선택...',
                    toastFavoritesAdded: '⭐ 즐겨찾기에 추가되었습니다!',
                    toastFavoriteExists: '⚠️ 이미 즐겨찾기에 있습니다.',
                    toastFavoriteApplied: '✅ 즐겨찾기가 적용되었습니다!',
                    toastFavoriteDeleted: '🗑️ 즐겨찾기가 삭제되었습니다.',
                    toastFavoriteRestored: '↩️ 즐겨찾기를 복원했습니다.',
                    toastRollRestored: '⏪ 히스토리를 복원했습니다.',
                    toastCopy: '✅ 복사되었습니다!',
                    toastCopyShort: '✅ 복사 완료!',
                    toastAutoCopyOn: '⚡ 자동 복사 ON',
                    toastAutoCopyOff: '✋ 자동 복사 OFF',
                    toastReset: '🔄 모든 데이터가 초기화되었습니다.',
                    toastRollHistoryCleared: '🧹 히스토리를 모두 삭제했습니다.',
                    toastPromptCopied: '⚡ 프롬프트를 복사했습니다!',
                    toastFavoriteRenamed: '✏️ 즐겨찾기 이름을 변경했습니다.',
                    toastCapRenamed: '✏️ 캡슐 이름이 변경되었습니다.',
                    toastCapDeleted: '🗑️ 캡슐이 삭제되었습니다.',
                    toastImportSuccess: '📥 즐겨찾기 데이터를 불러왔습니다.',
                    alertEmptyPrompt: '내용이 비어있습니다.',
                    confirmReset: '모든 데이터를 초기화하시겠습니까?',
                    confirmClearHistory: '히스토리를 모두 삭제할까요?',
                    newTagPrompt: '새로운 태그 이름:',
                    dockDeleteBadge: '삭제 모드',
                    settingsSave: '파일 저장',
                    settingsOpen: '파일 열기',
                    settingsReset: '앱 초기화',
                    btnFavAria: '즐겨찾기 추가',
                    btnGenerateAria: '굴리기 & 생성',
                    btnCopyAria: '프롬프트 복사',
                    btnPrevAria: '이전 히스토리',
                    btnNextAria: '다음 히스토리',
                    btnAutoCopyAria: '자동 복사 토글',
                    chipTrashHint: '칩을 이곳으로 드래그하면 삭제됩니다',
                    settingsAria: '설정 열기',
                    languageAria: '언어 변경',
                    helpAria: '도움말',
                    emptyPromptPreview: '(빈 프롬프트)',
                    chipLinkOn: '연결됨',
                    chipLinkOff: '연결',
                    chipUnlink: '연결 해제',
                    capEditTitle: '이름 변경',
                    capEditHint: '(공백이면 삭제)',
                    confirmLabel: '확인',
                    deleteLabel: '삭제',
                    cancelLabel: '취소',
                    importError: '오류: ',
                    historyTab: '⏱ 히스토리',
                    favoritesTab: '⭐ 즐겨찾기',
                    favoriteNamePrefix: 'Fav',
                    favEditTitle: '이름 변경',
                    favEditHint: '(공백이면 삭제)',
                    cancelLabel: '취소'
                }
            },
            ja: {
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
<li>お気に入りチップを長押しするとリネームや削除ができます。</li>
</ul>
<h3>4. 削除 / 編集</h3>
<ul class="help-list">
<li>チップは🗑削除ゾーンにドラッグするとすぐに削除できます。</li>
<li>カプセルは約2秒長押しで名前変更や削除ができます。</li>
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
                    popoverAddPlaceholder: '+ 追加して選択...',
                    toastFavoritesAdded: '⭐ お気に入りに追加しました!',
                    toastFavoriteExists: '⚠️ すでに登録されています。',
                    toastFavoriteApplied: '✅ お気に入りを適用しました!',
                    toastFavoriteDeleted: '🗑️ お気に入りを削除しました。',
                    toastFavoriteRestored: '↩️ お気に入りを元に戻しました。',
                    toastRollRestored: '⏪ 履歴を復元しました。',
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
                    toastImportSuccess: '📥 お気に入りを読み込みました。',
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
                    cancelLabel: 'キャンセル'
                }
            },
            zh: {
                nativeName: '中文',
                strings: {
                    helpTitle: '💡 使用说明',
                    helpContent: `<h3>1. 构建提示词</h3>
<ul class="help-list">
<li><span class="inline-capsule-label">胶囊</span>可点击或拖放来随意添加筹码。</li>
<li><span class="inline-chip-label">筹码</span>能插入到任意位置并重新排序，拖到🗑删除区域即可快速删除。</li>
<li>点击筹码可编辑选项，长按条目可重命名，留空即可删除。</li>
<li>点击筹码前的 🎲 将其切换为 🔒，即可固定该筹码。</li>
<li>点击筹码之间可连接/断开，用来切换空格或逗号输出。</li>
</ul>
<h3>2. 生成与复制</h3>
<ul class="help-list">
<li>🎲 只会掷出标记为随机的筹码并生成提示词。</li>
<li><strong>Auto Copy</strong> 打开后，每次都会自动复制到剪贴板。</li>
</ul>
<h3>3. 收藏与历史</h3>
<ul class="help-list">
<li>⭐ 收藏 是可拖放的预设：拖到编辑区插入局部，点击可直接套用整套。</li>
<li>⏱ 历史 可以查看之前的掷骰结果，可用 <span class="inline-key">Ctrl+Z / Ctrl+Shift+Z</span> 或 🎲 两侧的箭头浏览。</li>
<li>长按收藏筹码即可重命名或删除。</li>
</ul>
<h3>4. 删除或编辑</h3>
<ul class="help-list">
<li>将筹码拖到🗑删除区即可立刻移除。</li>
<li>长按胶囊约2秒可重命名或删除。</li>
</ul>
<h3>5. 保存与读取</h3>
<ul class="help-list">
<li><strong>保存文件</strong>会将除历史记录以外的全部数据导出为 JSON，便于备份。</li>
<li><strong>打开文件</strong>用于加载从本应用保存的 JSON。</li>
</ul>`,
                    chipEmptyState: '👆 点击或拖动上方胶囊来添加筹码。',
                    favoritesEmpty: '暂无收藏。',
                    historyEmpty: '暂无历史记录。',
                    popoverRandom: '🎲 随机',
                    popoverAddPlaceholder: '+ 输入并选择...',
                    toastFavoritesAdded: '⭐ 已加入收藏！',
                    toastFavoriteExists: '⚠️ 已经在收藏列表中。',
                    toastFavoriteApplied: '✅ 已应用收藏！',
                    toastFavoriteDeleted: '🗑️ 已删除收藏。',
                    toastFavoriteRestored: '↩️ 收藏已恢复。',
                    toastRollRestored: '⏪ 已恢复历史。',
                    toastCopy: '✅ 已复制到剪贴板！',
                    toastCopyShort: '✅ 已复制！',
                    toastAutoCopyOn: '⚡ 自动复制已开启',
                    toastAutoCopyOff: '✋ 自动复制已关闭',
                    toastReset: '🔄 数据已重置。',
                    toastRollHistoryCleared: '🧹 历史记录已清除。',
                    toastPromptCopied: '⚡ 已复制提示词!',
                    toastFavoriteRenamed: '✏️ 已修改收藏名称。',
                    toastCapRenamed: '✏️ 已更新胶囊名称。',
                    toastCapDeleted: '🗑️ 已删除胶囊。',
                    toastImportSuccess: '📥 收藏已导入。',
                    alertEmptyPrompt: '内容为空。',
                    confirmReset: '确定重置所有数据？',
                    confirmClearHistory: '清除所有历史记录？',
                    newTagPrompt: '新的标签名称：',
                    dockDeleteBadge: '删除模式',
                    settingsSave: '保存文件',
                    settingsOpen: '打开文件',
                    settingsReset: '重置应用',
                    btnFavAria: '加入收藏',
                    btnGenerateAria: '生成',
                    btnCopyAria: '复制提示词',
                    btnPrevAria: '上一条历史',
                    btnNextAria: '下一条历史',
                    btnAutoCopyAria: '切换自动复制',
                    chipTrashHint: '拖到此处删除筹码',
                    settingsAria: '打开设置',
                    languageAria: '切换语言',
                    helpAria: '帮助',
                    emptyPromptPreview: '(空提示词)',
                    chipLinkOn: '已连接',
                    chipLinkOff: '连接',
                    chipUnlink: '取消连接',
                    capEditTitle: '重命名',
                    capEditHint: '(留空则删除)',
                    confirmLabel: '确定',
                    deleteLabel: '删除',
                    cancelLabel: '取消',
                    importError: '错误: ',
                    historyTab: '⏱ 历史',
                    favoritesTab: '⭐ 收藏',
                    favoriteNamePrefix: 'Fav',
                    favEditTitle: '收藏名称',
                    favEditHint: '(留空则删除)',
                    cancelLabel: '取消'
                }
            }
        };
        const FALLBACK_CAPSULES = [
        { key: "subject", label: "Subject", index: 0, options: [] },
        { key: "number", label: "Number", index: 1, options: [] },
        { key: "year", label: "Year", index: 2, options: [] },
        { key: "operator", label: "Operator", index: 3, options: [] },
        { key: "profession", label: "Profession", index: 4, options: [] },
        { key: "hair", label: "Hair", index: 5, options: [] },
        { key: "eyes", label: "Eyes", index: 6, options: [] },
        { key: "expression", label: "Expression", index: 7, options: [] },
        { key: "body", label: "Body", index: 8, options: [] },
        { key: "angle", label: "Angle", index: 9, options: [] },
        { key: "shot", label: "Shot", index: 10, options: [] },
        { key: "outfit", label: "Outfit", index: 11, options: [] },
        { key: "acc", label: "Accessory", index: 12, options: [] },
        { key: "action", label: "Action", index: 13, options: [] },
        { key: "bg", label: "Background", index: 14, options: [] },
        { key: "lighting", label: "Lighting", index: 15, options: [] },
        { key: "quality", label: "Quality", index: 16, options: [] },
        { key: "color", label: "Color", index: 17, options: [] },
        { key: "material", label: "Material", index: 18, options: [] },
        { key: "vibe", label: "Vibe", index: 19, options: [] },
        { key: "pattern", label: "Pattern", index: 20, options: [] }
    ];
        const ICON_COPY = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" style="width: 20px; height: 20px;"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <path fill="currentColor" fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v9a2 2 0 002 2h2v2a2 2 0 002 2h9a2 2 0 002-2V8a2 2 0 00-2-2h-2V4a2 2 0 00-2-2H4zm9 4V4H4v9h2V8a2 2 0 012-2h5zM8 8h9v9H8V8z"></path> </g></svg>`;

        class ReorderAnimator {
            static resolveContainer(container) {
                if (!container) return null;
                if (typeof container === 'string') return document.querySelector(container);
                return container;
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

        class GapPreviewManager {
            constructor({ getItemElement, activeClass = 'gap-preview-active', shiftLeftClass = 'shift-left', shiftRightClass = 'shift-right', onGapActivate, onGapDeactivate } = {}) {
                this.getItemElement = getItemElement;
                this.activeClass = activeClass;
                this.shiftLeftClass = shiftLeftClass;
                this.shiftRightClass = shiftRightClass;
                this.onGapActivate = onGapActivate;
                this.onGapDeactivate = onGapDeactivate;
                this.currentIndex = null;
                this.activeGap = null;
                this.gapElements = {};
                this.reset();
            }
            reset() {
                this.clear();
                this.gapElements = {};
            }
            registerGap(index, el) {
                if (!el) return;
                if (!this.gapElements) this.gapElements = {};
                this.gapElements[index] = el;
            }
            set(index) {
                if (index === this.currentIndex) return;
                this.clear();
                this.currentIndex = index;
                const prev = this.getItemElement ? this.getItemElement(index - 1) : null;
                if (prev) prev.classList.add(this.shiftLeftClass);
                const next = this.getItemElement ? this.getItemElement(index) : null;
                if (next) next.classList.add(this.shiftRightClass);
                const gap = this.gapElements ? this.gapElements[index] : null;
                if (gap) {
                    gap.classList.add(this.activeClass);
                    if (typeof this.onGapActivate === 'function') {
                        this.onGapActivate(gap, index);
                    }
                }
                this.activeGap = gap || null;
            }
            clear(targetIndex = null) {
                if (this.currentIndex === null) return;
                if (targetIndex !== null && targetIndex !== this.currentIndex) return;
                const prev = this.getItemElement ? this.getItemElement(this.currentIndex - 1) : null;
                if (prev) prev.classList.remove(this.shiftLeftClass);
                const next = this.getItemElement ? this.getItemElement(this.currentIndex) : null;
                if (next) next.classList.remove(this.shiftRightClass);
                if (this.activeGap) {
                    this.activeGap.classList.remove(this.activeClass);
                    if (typeof this.onGapDeactivate === 'function') {
                        this.onGapDeactivate(this.activeGap, this.currentIndex);
                    }
                }
                this.activeGap = null;
                this.currentIndex = null;
            }
        }

        class PromptManager {
            constructor() {
                this.STORAGE_KEY = null;
                this.LEGACY_STORAGE_KEYS = [];
                this.LOCALE_KEY = 'promit_locale';
                this.LEGACY_LOCALE_KEYS = ['promania_locale'];
                this.THEME_KEY = 'promit-theme';
                this.LEGACY_THEME_KEYS = ['promania-theme'];
                this.APP_VERSION = 'Promit 1.0';
                this.DATA_SCHEMA_VERSION = 1;
                this.MAX_HISTORY = 50;
                this.items = [];
                this.optionsData = {};
                this.customTypes = [];
                this.isDockDeleteMode = false;
                this.history = [];
                this.historyIndex = -1;
                this.favorites = [];
                this.dragSrcEl = null;
                this.dragType = null;
                this.activeDockTab = 'favorites';
                this.capLabels = {};
                this.randomDecks = {};
                this.rollHistory = [];
                this.favoriteUndoStack = [];
                this.capsuleOrder = [];
                this.capsuleDragIndex = null;
                this.capEditDialogEl = null;
                this.activeCapEditKey = null;
                this.activeCapEditEl = null;
                this.capEditOutsideHandler = null;
                this.capEditRepositionHandler = null;
                this.removedCapsules = [];
                this.activeFavoriteId = null;
                this.activeFavoriteName = '';
                this.skipFavoriteLabelClear = false;
                this.latestFavoriteId = null;
                this.favoriteDragId = null;
                this.activeFavoriteLabelCooldown = false;
                this.favEditDialogEl = null;
                this.activeFavEdit = null;
                this.favEditOutsideHandler = null;
                this.favEditRepositionHandler = null;
                this.LEGACY_TYPE_MAP = { job: 'profession' };
                this.loadedFromLegacyStorage = false;
                this.baseCapsules = [];
                this.baseCapsuleMap = {};
                this.baseCapsuleOrder = [];
                this.baseOptionsData = {};
                this.baseDefaultState = null;
                this.locale = this.loadLocale();
                this.isLanguageMenuOpen = false;
                this.capsulesDirty = true;
                this.dockDirty = true;
                this.MAX_ROLL_HISTORY = 30;
                this.FAVORITE_UNDO_LIMIT = 10;
                this.isSettingsMenuOpen = false;
                this.AUTO_COPY_STORAGE_KEY = 'promit_v1_auto_copy';
                this.LEGACY_AUTO_COPY_KEYS = ['promania_v2_auto_copy'];
                this.isAutoCopyEnabled = this.getStoredValue(this.AUTO_COPY_STORAGE_KEY, this.LEGACY_AUTO_COPY_KEYS) === '1';
                this.initTheme();
                this.chipGapPreview = new GapPreviewManager({
                    getItemElement: (idx) => this.getChipElementByIndex(idx),
                    onGapActivate: (gap, index) => {
                        if (index === 0) {
                            gap.classList.add('gap-preview-edge-left');
                        } else if (index === this.items.length) {
                            gap.classList.add('gap-preview-edge-right');
                        }
                    },
                    onGapDeactivate: (gap) => {
                        gap.classList.remove('gap-preview-edge-left', 'gap-preview-edge-right');
                    }
                });
                this.capsuleGapPreview = new GapPreviewManager({
                    getItemElement: (idx) => this.getCapsuleElementByIndex(idx),
                    onGapDeactivate: (gap) => {
                        gap.classList.remove('drag-over-gap');
                    }
                });
                this.favoriteGapPreview = new GapPreviewManager({
                    getItemElement: (idx) => this.getFavoriteChipElementByIndex(idx),
                    onGapActivate: (gap) => gap.classList.add('drag-over-gap'),
                    onGapDeactivate: (gap) => gap.classList.remove('drag-over-gap')
                });
                this.bootstrapPromise = this.bootstrap();
            }
            async bootstrap() {
                await this.loadBaseData();
                this.initDefaultData();
                if (!this.loadData()) {
                    this.syncCapsuleOrder();
                    this.pushHistory();
                }
                document.addEventListener('click', e => {
                    if (!e.target.closest('.chip') && !e.target.closest('.popover')) {
                        this.closePopover();
                    }
                    if (!e.target.closest('.settings-dropdown')) {
                        this.closeSettingsMenu();
                    }
                    if (!e.target.closest('.language-dropdown')) {
                        this.closeLanguageMenu();
                    }
                });
                this.initActiveFavoriteLabelHandler();
                this.bindStaticEventHandlers();
                document.addEventListener('keydown', e => {
                    const isInputTarget = e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable);
                    if ((e.ctrlKey || e.metaKey) && !isInputTarget) {
                        const key = e.key.toLowerCase();
                        if (key === 'z' && !e.shiftKey) {
                            e.preventDefault();
                            if (!this.undoFavoriteDeletion()) {
                                this.navHistory(-1);
                            }
                        } else if ((key === 'z' && e.shiftKey) || (key === 'y' && !e.shiftKey)) {
                            e.preventDefault();
                            this.navHistory(1);
                        }
                    }
                });
                this.render();
                this.updateAutoCopyUI();
                this.updateSettingsMenu();
                this.updateLanguageMenu();
                this.updateHelpContent();
                this.updateAriaLabels();
                this.updateDockTabLabels();
                this.updateThemeIcon(document.documentElement.getAttribute('data-theme') || 'dark');
            }
            async loadBaseData() {
                if (this.baseDefaultState) return;
                try {
                    const res = await fetch('base_prompts.json', { cache: 'no-store' });
                    if (!res.ok) throw new Error(`HTTP ${res.status}`);
                    const data = await res.json();
                    this.applyBaseData(data);
                } catch (err) {
                    console.error('Failed to load base data, using fallback', err);
                    this.applyBaseData(this.getFallbackBaseData());
                }
            }
            applyBaseData(data) {
                const rawCapsules = Array.isArray(data?.capsules) && data.capsules.length
                    ? data.capsules
                    : FALLBACK_CAPSULES;
                const seen = new Set();
                this.baseCapsules = [];
                rawCapsules.forEach((cap, idx) => {
                    const key = (cap?.key || '').trim();
                    if (!key || seen.has(key)) return;
                    const label = cap?.label || cap?.name || key;
                    const baseOptions = Array.isArray(cap?.options) ? cap.options.slice() : [];
                    this.baseCapsules.push({ key, label, index: idx, options: baseOptions });
                    seen.add(key);
                });
                if (!this.baseCapsules.length) {
                    this.baseCapsules = FALLBACK_CAPSULES.map((cap, idx) => ({ ...cap, index: idx, options: [] }));
                }
                this.baseCapsuleMap = {};
                this.baseCapsules.forEach((cap, idx) => {
                    this.baseCapsuleMap[cap.key] = { ...cap, index: idx };
                });
                const baseOrder = Array.isArray(data?.capsuleOrder) && data.capsuleOrder.length
                    ? data.capsuleOrder
                    : this.baseCapsules.map(cap => cap.key);
                this.baseCapsuleOrder = [];
                baseOrder.forEach(key => {
                    if (this.baseCapsuleMap[key] && !this.baseCapsuleOrder.includes(key)) {
                        this.baseCapsuleOrder.push(key);
                    }
                });
                const optionsFromCapsules = {};
                this.baseCapsules.forEach(cap => {
                    if (Array.isArray(cap.options) && cap.options.length) {
                        optionsFromCapsules[cap.key] = cap.options.slice();
                    }
                });
                const mergedOptions = this.cloneData(data?.optionsData || {}, {});
                Object.keys(optionsFromCapsules).forEach(key => {
                    if (!Array.isArray(mergedOptions[key]) || !mergedOptions[key].length) {
                        mergedOptions[key] = optionsFromCapsules[key];
                    }
                });
                this.baseOptionsData = mergedOptions;
                this.baseDefaultState = {
                    items: this.cloneData(data?.items || [], []),
                    optionsData: this.baseOptionsData,
                    customTypes: this.cloneData(data?.customTypes || [], []),
                    favorites: this.cloneData(data?.favorites || [], []),
                    capLabels: this.cloneData(data?.capLabels || {}, {}),
                    rollHistory: this.cloneData(data?.rollHistory || [], []),
                    capsuleOrder: [...this.baseCapsuleOrder],
                    removedCapsules: this.cloneData(data?.removedCapsules || [], [])
                };
            }
            getFallbackBaseData() {
                return {
                    capsules: FALLBACK_CAPSULES,
                    items: [],
                    optionsData: {},
                    customTypes: [],
                    favorites: [],
                    capLabels: {},
                    rollHistory: [],
                    capsuleOrder: FALLBACK_CAPSULES.map(cap => cap.key),
                    removedCapsules: []
                };
            }
            loadLocale() {
                const saved = this.getStoredValue(this.LOCALE_KEY, this.LEGACY_LOCALE_KEYS);
                if (saved && LOCALE_ORDER.includes(saved)) {
                    return saved;
                }
                return 'en';
            }
            getStoredValue(primaryKey, legacyKeys = []) {
                try {
                    const value = localStorage.getItem(primaryKey);
                    if (value !== null && value !== undefined) {
                        return value;
                    }
                } catch (err) { }
                if (!Array.isArray(legacyKeys)) return null;
                for (const key of legacyKeys) {
                    try {
                        const legacyValue = localStorage.getItem(key);
                        if (legacyValue !== null && legacyValue !== undefined) {
                            localStorage.setItem(primaryKey, legacyValue);
                            this.clearLegacyKeys(legacyKeys);
                            return legacyValue;
                        }
                    } catch (err) { }
                }
                return null;
            }
            clearLegacyKeys(keys = []) {
                if (!Array.isArray(keys)) return;
                keys.forEach(key => {
                    try { localStorage.removeItem(key); } catch (err) { }
                });
            }
            t(key) {
                return (LOCALES[this.locale]?.strings?.[key]) || LOCALES.en.strings[key] || key;
            }
            initOptionsData() {
                const baseOptions = this.baseOptionsData || {};
                this.getBaseCapsuleKeys().forEach(key => {
                    if (!Array.isArray(this.optionsData[key])) {
                        const seed = Array.isArray(baseOptions[key]) ? baseOptions[key] : [];
                        this.optionsData[key] = [...seed];
                    }
                    this.optionsData[key] = this.sortOptionsList(this.optionsData[key]);
                });
            }
            sortAllOptions() {
                Object.keys(this.optionsData).forEach(key => {
                    this.optionsData[key] = this.sortOptionsList(this.optionsData[key]);
                });
            }
            sortOptionsList(list = []) {
                if (!Array.isArray(list)) return [];
                const copy = [...list];
                copy.sort((a, b) => this.optionComparator(a, b));
                return copy;
            }
            optionComparator(a, b) {
                const normalize = val => (val ?? '').toString().trim();
                const aStr = normalize(a);
                const bStr = normalize(b);
                if (aStr === bStr) return 0;
                const aEmpty = aStr.length === 0;
                const bEmpty = bStr.length === 0;
                if (aEmpty || bEmpty) return aEmpty && bEmpty ? 0 : (aEmpty ? 1 : -1);
                const startsWithDigit = str => /^[0-9]/.test(str);
                const aDigit = startsWithDigit(aStr);
                const bDigit = startsWithDigit(bStr);
                if (aDigit && bDigit) {
                    return aStr.localeCompare(bStr, undefined, { numeric: true, sensitivity: 'base' });
                }
                if (aDigit !== bDigit) {
                    return aDigit ? -1 : 1;
                }
                return aStr.localeCompare(bStr, undefined, { sensitivity: 'base' });
            }
            getSortedOptions(type) {
                if (!this.optionsData[type]) {
                    this.optionsData[type] = [];
                }
                const sorted = this.sortOptionsList(this.optionsData[type]);
                this.optionsData[type] = sorted;
                return sorted;
            }
            loadData() {
                return false;
            }
            flattenItems(list) {
                let flat = [];
                list.forEach(item => {
                    if (item.type === 'group') {
                        const children = this.flattenItems(item.children);
                        flat = flat.concat(children);
                    } else {
                        if (item.linkNext === undefined) item.linkNext = false;
                        flat.push(item);
                    }
                });
                return flat;
            }
            buildStateSnapshot({ includeHistory = true } = {}) {
                const snapshot = {
                    schemaVersion: this.DATA_SCHEMA_VERSION,
                    version: this.APP_VERSION,
                    items: this.items,
                    optionsData: this.optionsData,
                    customTypes: this.customTypes,
                    favorites: this.favorites,
                    capLabels: this.capLabels,
                    capsuleOrder: this.capsuleOrder,
                    removedCapsules: this.removedCapsules
                };
                if (includeHistory) {
                    snapshot.rollHistory = this.rollHistory;
                }
                return snapshot;
            }
            saveData() {
                return;
            }
            initDefaultData() {
                const defaults = this.baseDefaultState || this.getFallbackBaseData();
                this.items = this.cloneData(defaults.items || [], []);
                this.history = [];
                this.historyIndex = -1;
                this.favorites = this.cloneData(defaults.favorites || [], []);
                this.customTypes = this.cloneData(defaults.customTypes || [], []);
                this.capLabels = this.cloneData(defaults.capLabels || {}, {});
                this.randomDecks = {};
                this.rollHistory = this.cloneData(defaults.rollHistory || [], []);
                this.isDockDeleteMode = false;
                this.activeDockTab = 'favorites';
                this.capsulesDirty = true;
                this.dockDirty = true;
                this.optionsData = this.cloneData(defaults.optionsData || {}, {});
                this.initOptionsData();
                const defaultOrder = Array.isArray(defaults.capsuleOrder) && defaults.capsuleOrder.length
                    ? [...defaults.capsuleOrder]
                    : this.getDefaultCapsuleOrder();
                this.capsuleOrder = defaultOrder;
                this.removedCapsules = this.cloneData(defaults.removedCapsules || [], []);
                this.activeFavoriteId = null;
                this.activeFavoriteName = '';
                this.skipFavoriteLabelClear = false;
                this.latestFavoriteId = null;
                this.favoriteDragId = null;
                this.favoriteUndoStack = [];
            }
            getDefaultCapsuleOrder() {
                if (this.baseCapsuleOrder && this.baseCapsuleOrder.length) {
                    return [...this.baseCapsuleOrder];
                }
                return FALLBACK_CAPSULES.map(cap => cap.key);
            }
            getBaseCapsuleKeys() {
                if (this.baseCapsules && this.baseCapsules.length) {
                    return this.baseCapsules.map(cap => cap.key);
                }
                return FALLBACK_CAPSULES.map(cap => cap.key);
            }
            getAllCapsuleKeys() {
                const baseKeys = this.getBaseCapsuleKeys()
                    .filter(key => !this.removedCapsules.includes(key));
                const customKeys = this.customTypes.map(def => def.key);
                return baseKeys.concat(customKeys);
            }
            syncCapsuleOrder() {
                const allKeys = this.getAllCapsuleKeys();
                let order = Array.isArray(this.capsuleOrder) ? [...this.capsuleOrder] : [];
                order = order.filter((key, idx) => allKeys.includes(key) && order.indexOf(key) === idx);
                allKeys.forEach(key => {
                    if (!order.includes(key)) {
                        order.push(key);
                    }
                });
                this.capsuleOrder = order;
            }
            getCapsuleDefinition(key) {
                if (this.baseCapsuleMap[key]) {
                    return this.baseCapsuleMap[key];
                }
                return this.customTypes.find(def => def.key === key) || null;
            }
            getCapsuleColor(key, fallbackIndex = 0) {
                const baseInfo = this.baseCapsuleMap[key];
                if (baseInfo) {
                    return this.getSoftColor(baseInfo.index || 0);
                }
                const custom = this.customTypes.find(def => def.key === key);
                if (custom) {
                    if (!custom.capColor) {
                        custom.capColor = this.generatePastelColor();
                        this.saveData();
                    }
                    return custom.capColor;
                }
                return this.getSoftColor(fallbackIndex);
            }
            initActiveFavoriteLabelHandler() {
                const label = document.getElementById('activeFavoriteLabel');
                if (!label) return;
                const triggerEdit = () => {
                    if (!this.activeFavoriteId || label.classList.contains('is-editing') || this.activeFavoriteLabelCooldown) return;
                    this.beginActiveFavoriteInlineEdit();
                };
                label.addEventListener('click', () => {
                    triggerEdit();
                });
                label.addEventListener('keydown', (e) => {
                    if (label.classList.contains('is-editing') || this.activeFavoriteLabelCooldown) return;
                    if ((e.key === 'Enter' || e.key === ' ') && this.activeFavoriteId) {
                        e.preventDefault();
                        triggerEdit();
                    }
                });
                const editBtn = document.getElementById('activeFavEditBtn');
                if (editBtn) {
                    editBtn.addEventListener('click', (event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        triggerEdit();
                    });
                }
            }
            bindStaticEventHandlers() {
                const helpBtn = document.querySelector('.help-btn');
                if (helpBtn) helpBtn.addEventListener('click', () => this.toggleHelp());
                const helpOverlay = document.getElementById('helpModal');
                if (helpOverlay) {
                    helpOverlay.addEventListener('click', () => this.toggleHelp());
                    const modal = helpOverlay.querySelector('.help-modal');
                    if (modal) modal.addEventListener('click', (e) => e.stopPropagation());
                    const closeBtn = helpOverlay.querySelector('.help-close');
                    if (closeBtn) closeBtn.addEventListener('click', (e) => { e.stopPropagation(); this.toggleHelp(); });
                }
                const langBtn = document.getElementById('languageBtn');
                if (langBtn) langBtn.addEventListener('click', (event) => this.toggleLanguageMenu(event));
                const settingsBtn = document.getElementById('settingsBtn');
                if (settingsBtn) settingsBtn.addEventListener('click', (event) => this.toggleSettingsMenu(event));
                const themeToggle = document.querySelector('.settings-row.theme-toggle');
                if (themeToggle) themeToggle.addEventListener('click', () => this.handleThemeToggle());
                document.querySelectorAll('#settingsMenu button[data-setting]').forEach(btn => {
                    btn.addEventListener('click', () => this.handleSettingsAction(btn.getAttribute('data-setting')));
                });
                const favBtn = document.querySelector('.btn-fav');
                if (favBtn) favBtn.addEventListener('click', () => this.action('fav'));
                const prevBtn = document.getElementById('btnPrev');
                if (prevBtn) prevBtn.addEventListener('click', () => this.navHistory(-1));
                const nextBtn = document.getElementById('btnNext');
                if (nextBtn) nextBtn.addEventListener('click', () => this.navHistory(1));
                const genBtn = document.querySelector('.btn-gen');
                if (genBtn) genBtn.addEventListener('click', () => this.action('generate'));
                const autoBtn = document.querySelector('.btn-auto-copy');
                if (autoBtn) autoBtn.addEventListener('click', () => this.toggleAutoCopy());
                const copyBtn = document.querySelector('.btn-copy');
                if (copyBtn) copyBtn.addEventListener('click', () => this.copyToClipboard());
                document.querySelectorAll('.dock-tab').forEach(tab => {
                    tab.addEventListener('click', () => this.switchDockTab(tab.dataset.tab));
                });
                const clearHistoryBtn = document.getElementById('dockClearHistory');
                if (clearHistoryBtn) clearHistoryBtn.addEventListener('click', () => this.clearRollHistory());
            }
            beginActiveFavoriteInlineEdit() {
                const label = document.getElementById('activeFavoriteLabel');
                if (!label || !this.activeFavoriteId) return;
                const currentName = this.activeFavoriteName || '';
                label.classList.add('is-editing');
                const safeValue = this.escapeAttribute(currentName);
                label.innerHTML = `<input type="text" class="active-fav-input" value="${safeValue}">`;
                const input = label.querySelector('input');
                if (!input) return;
                let finished = false;
                const cleanup = (shouldApply) => {
                    if (finished) return;
                    finished = true;
                    input.removeEventListener('blur', handleBlur);
                    input.removeEventListener('keydown', handleKey);
                    label.classList.remove('is-editing');
                    label.innerHTML = '';
                    label.blur();
                    this.activeFavoriteLabelCooldown = true;
                    setTimeout(() => { this.activeFavoriteLabelCooldown = false; }, 0);
                    if (shouldApply) {
                        this.commitActiveFavoriteInlineEdit(input.value);
                    } else {
                        this.updateActiveFavoriteLabel();
                    }
                };
                const handleBlur = () => cleanup(true);
                const handleKey = (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        cleanup(true);
                    } else if (e.key === 'Escape') {
                        e.preventDefault();
                        cleanup(false);
                    }
                };
                input.addEventListener('blur', handleBlur);
                input.addEventListener('keydown', handleKey);
                requestAnimationFrame(() => {
                    input.focus();
                    input.select();
                });
            }
            commitActiveFavoriteInlineEdit(value) {
                if (!this.activeFavoriteId) {
                    this.updateActiveFavoriteLabel();
                    return;
                }
                const idx = this.favorites.findIndex(f => f.id === this.activeFavoriteId);
                if (idx === -1) {
                    this.updateActiveFavoriteLabel();
                    return;
                }
                const trimmed = (value || '').trim();
                if (!trimmed) {
                    this.deleteFavorite(idx);
                    return;
                }
                const current = this.favorites[idx].name || '';
                if (trimmed !== current) {
                    this.renameFavorite(idx, trimmed);
                } else {
                    this.activeFavoriteName = trimmed;
                    this.updateActiveFavoriteLabel();
                }
            }
            updateActiveFavoriteLabel() {
                const label = document.getElementById('activeFavoriteLabel');
                if (!label || label.classList.contains('is-editing')) return;
                if (this.activeFavoriteName) {
                    label.innerText = this.activeFavoriteName;
                    label.classList.add('is-visible');
                } else {
                    label.innerText = '';
                    label.classList.remove('is-visible');
                }
            }
            clearActiveFavoriteLabel() {
                this.activeFavoriteId = null;
                this.activeFavoriteName = '';
                this.updateActiveFavoriteLabel();
                this.skipFavoriteLabelClear = false;
            }
            ensureFavoriteNames() {
                if (!Array.isArray(this.favorites)) {
                    this.favorites = [];
                    return;
                }
                const used = new Set();
                let changed = false;
                this.favorites.forEach(fav => {
                    if (fav?.name) used.add(fav.name);
                });
                this.favorites.forEach(fav => {
                    if (!fav.name) {
                        fav.name = this.generateFavoriteName(used);
                        used.add(fav.name);
                        changed = true;
                    }
                    if (this.ensureFavoriteColor(fav)) {
                        changed = true;
                    }
                });
                if (changed) this.saveData();
            }
            generateFavoriteName(usedSet = null) {
                const used = usedSet || new Set(this.favorites.map(f => f.name));
                let idx = this.favorites.length + 1;
                let name;
                const prefix = this.t('favoriteNamePrefix') || 'Fav';
                do {
                    name = `${prefix} ${idx++}`;
                } while (used.has(name));
                return name;
            }
            ensureFavoriteColor(fav) {
                if (!fav) return false;
                let updated = false;
                if (!fav.color) {
                    const baseColor = this.generatePastelColor();
                    fav.color = baseColor;
                    fav.darkColor = this.createDarkVariant(baseColor);
                    updated = true;
                } else if (!fav.darkColor) {
                    fav.darkColor = this.createDarkVariant(fav.color);
                    updated = true;
                }
                return updated;
            }
            createItem(type, value = "", isCustom = false) {
                const baseColor = this.generatePastelColor();
                return {
                    id: (isCustom ? type : type + '_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5)),
                    type: type,
                    label: this.getTypeLabel(type),
                    value: value,
                    isRandom: false,
                    isCustom: isCustom,
                    linkNext: false,
                    color: baseColor,
                    darkColor: this.createDarkVariant(baseColor)
                };
            }
            addItem(type, value = "") {
                const item = this.createItem(type, value);
                this.items.push(item);
                this.pushHistory();
                this.render();
            }
            deleteItem(id) {
                const idx = this.items.findIndex(i => i.id === id);
                if (idx > -1) {
                    this.items.splice(idx, 1);
                    this.pushHistory();
                    this.render();
                }
            }
            pushHistory() {
                if (this.historyIndex < this.history.length - 1) {
                    this.history = this.history.slice(0, this.historyIndex + 1);
                }
                const snapshot = JSON.parse(JSON.stringify(this.items));
                this.history.push(snapshot);
                if (this.history.length > this.MAX_HISTORY) {
                    this.history.shift();
                }
                this.historyIndex = Math.max(0, this.history.length - 1);
                this.saveData();
                if (this.skipFavoriteLabelClear) {
                    this.skipFavoriteLabelClear = false;
                } else {
                    this.clearActiveFavoriteLabel();
                }
            }
            navHistory(dir) {
                const newIndex = this.historyIndex + dir;
                if (newIndex >= 0 && newIndex < this.history.length) {
                    this.historyIndex = newIndex;
                    this.items = JSON.parse(JSON.stringify(this.history[this.historyIndex]));
                    this.saveData();
                    this.render();
                }
            }
            updateNavArrows() {
                const prev = document.getElementById('btnPrev');
                const next = document.getElementById('btnNext');
                const hasPrev = this.historyIndex > 0;
                const hasNext = this.historyIndex < this.history.length - 1;
                prev.classList.toggle('disabled', !hasPrev);
                next.classList.toggle('disabled', !hasNext);
            }
            render() {
                if (this.capsulesDirty) {
                    this.renderCapsules();
                }
                this.renderChips();
                this.updateActiveFavoriteLabel();
                this.updateNavArrows();
                if (this.dockDirty) {
                    this.renderDockList();
                }
                this.updateFavButtonState();
                this.setupChipTrashZone();
                this.updateAriaLabels();
            }
            renderCapsules() {
                const container = document.getElementById('capsuleContainer');
                if (!container) {
                    this.capsulesDirty = false;
                    return;
                }
                this.closeCapEditDialog();
                this.syncCapsuleOrder();
                const prevPositions = this.captureCapsulePositions();
                this.capsulesDirty = false;
                this.clearCapsuleGapPreview();
                if (this.capsuleGapPreview) this.capsuleGapPreview.reset();
                container.innerHTML = '';

                const orderedKeys = (this.capsuleOrder && this.capsuleOrder.length)
                    ? [...this.capsuleOrder]
                    : this.getAllCapsuleKeys();

                const appendGap = (index, position) => {
                    const gap = this.createCapsuleGap(index, position);
                    container.appendChild(gap);
                };

                appendGap(0, 'head');

                orderedKeys.forEach((key, idx) => {
                    const def = this.getCapsuleDefinition(key);
                    if (!def) return;
                    const cap = this.el('div', 'cap', this.getTypeLabel(def.key));
                    cap.dataset.capKey = key;
                    cap.dataset.capIndex = idx;
                    const baseColor = this.getCapsuleColor(def.key, idx);
                    cap.style.backgroundColor = this.isDarkTheme() ? this.createDarkVariant(baseColor) : baseColor;
                    cap.onclick = () => {
                        if (cap.classList.contains('cap-editing')) return;
                        if (cap.isLongPress) {
                            cap.isLongPress = false;
                            return;
                        }
                        this.closePopover();
                        this.addItem(def.key);
                    };
                    cap.draggable = true;
                    cap.ondragstart = (e) => {
                        this.closePopover();
                        this.dragType = 'capsule';
                        this.dragCapsuleData = { source: 'capsule', type: def.key };
                        this.capsuleDragIndex = idx;
                        e.dataTransfer.setData('text/plain', JSON.stringify(this.dragCapsuleData));
                        e.dataTransfer.effectAllowed = 'copyMove';
                        document.body.classList.add('is-dragging');
                        cap.classList.add('dragging');
                    };
                    cap.ondragend = () => {
                        document.body.classList.remove('is-dragging');
                        cap.classList.remove('dragging');
                        this.dragCapsuleData = null;
                        this.dragType = null;
                        this.capsuleDragIndex = null;
                        this.clearCapsuleGapPreview();
                        this.clearGapPreview();
                        document.querySelectorAll('.drag-over-gap').forEach(el => el.classList.remove('drag-over-gap'));
                    };
                    this.addLongPress(cap, () => this.openCapEditDialog(def.key, cap), 600);
                    container.appendChild(cap);
                    const isLast = idx === orderedKeys.length - 1;
                    appendGap(idx + 1, isLast ? 'tail' : undefined);
                });

                const addBtn = this.el('div', 'cap cap-add', '+');
                addBtn.onclick = () => this.addCustomType();
                container.appendChild(addBtn);

                this.animateCapsuleReflow(prevPositions);
            }
            createCapsuleGap(index, position) {
                const gap = this.el('div', 'cap-drop-zone');
                if (position) gap.classList.add(position);
                gap.dataset.index = index;
                gap.ondragover = (e) => {
                    if (this.dragType !== 'capsule') return;
                    e.preventDefault();
                    e.stopPropagation();
                    gap.classList.add('drag-over-gap');
                    this.setCapsuleGapPreview(index);
                };
                gap.ondragleave = () => {
                    gap.classList.remove('drag-over-gap');
                    this.clearCapsuleGapPreview(index);
                };
                gap.ondrop = (e) => {
                    if (this.dragType !== 'capsule') return;
                    e.preventDefault();
                    e.stopPropagation();
                    gap.classList.remove('drag-over-gap');
                    this.clearCapsuleGapPreview();
                    this.handleCapsuleReorder(index);
                };
                if (this.capsuleGapPreview) this.capsuleGapPreview.registerGap(index, gap);
                return gap;
            }
            getCapsuleElementByIndex(idx) {
                if (idx < 0) return null;
                return document.querySelector(`#capsuleContainer .cap[data-cap-index="${idx}"]`);
            }
            setCapsuleGapPreview(index) {
                if (this.capsuleGapPreview) this.capsuleGapPreview.set(index);
            }
            clearCapsuleGapPreview(targetIndex = null) {
                if (this.capsuleGapPreview) this.capsuleGapPreview.clear(targetIndex);
            }
            handleCapsuleReorder(insertIndex) {
                if (this.capsuleDragIndex === null) return;
                const order = Array.isArray(this.capsuleOrder) ? [...this.capsuleOrder] : [];
                if (!order.length) return;
                const [moved] = order.splice(this.capsuleDragIndex, 1);
                if (!moved) return;
                let targetIndex = insertIndex;
                if (this.capsuleDragIndex < insertIndex) {
                    targetIndex = Math.max(0, insertIndex - 1);
                }
                targetIndex = Math.min(Math.max(targetIndex, 0), order.length);
                order.splice(targetIndex, 0, moved);
                this.capsuleOrder = order;
                this.capsuleDragIndex = null;
                this.capsulesDirty = true;
                this.saveData();
                this.render();
            }
            captureCapsulePositions() {
                return ReorderAnimator.capture('#capsuleContainer', '.cap', cap => cap.dataset.capKey);
            }
            animateCapsuleReflow(prevPositions) {
                ReorderAnimator.animate({
                    container: '#capsuleContainer',
                    selector: '.cap',
                    prevPositions,
                    getKey: cap => cap.dataset.capKey,
                    transition: 'transform 0.28s cubic-bezier(0.22, 0.61, 0.36, 1)'
                });
            }

            addCustomType() {
                const name = prompt(this.t('newTagPrompt'));
                if (name) {
                    const key = "custom_" + Date.now();
                    const capColor = this.generatePastelColor();
                    this.customTypes.push({ key, label: name, capColor });
                    this.optionsData[key] = [];
                    this.resetDeck(key);
                    this.capsuleOrder.push(key);
                    this.syncCapsuleOrder();
                    this.capsulesDirty = true;
                    this.addItem(key);
                }
            }

            renderChips() {
                const container = document.getElementById('chipContainer');
                this.clearGapPreview();
                const prevPositions = this.captureChipPositions();
                container.innerHTML = '';
                if (this.chipGapPreview) this.chipGapPreview.reset();
                this.teardownEmptyChipDrop(container);

                if (this.items.length === 0) {
                    container.innerHTML = `<div class="empty-state">${this.t('chipEmptyState')}</div>`;
                    this.setupEmptyChipDrop(container);
                    return;
                }

                container.classList.remove('is-empty-drop', 'drag-over');

                const head = this.el('div', 'chip-drop-zone head');
                this.setupBridgeDrop(head, 0);
                container.appendChild(head);

                this.items.forEach((item, idx) => {
                    const chip = this.createChipElement(item, idx);

                    if (item.linkNext && idx < this.items.length - 1) {
                        chip.classList.add('linked-left');
                    }
                    if (idx > 0 && this.items[idx - 1].linkNext) {
                        chip.classList.add('linked-right');
                    }
                    container.appendChild(chip);

                    if (idx < this.items.length - 1) {
                        const bridge = this.el('div', 'chip-bridge');
                        if (item.linkNext) {
                            bridge.classList.add('active');
                            bridge.title = this.t('chipLinkOn');
                        } else {
                            bridge.title = this.t('chipLinkOff');
                        }
                        const toggleLink = (e) => {
                            e.stopPropagation();
                            this.closePopover();
                            item.linkNext = !item.linkNext;
                            this.pushHistory();
                            this.render();
                        };

                        bridge.onclick = toggleLink;

                        if (item.linkNext) {
                            const toggleHotspot = this.el('div', 'chip-link-toggle');
                            toggleHotspot.title = this.t('chipUnlink');
                            toggleHotspot.onclick = toggleLink;
                            bridge.appendChild(toggleHotspot);
                        }

                        this.setupBridgeDrop(bridge, idx + 1);

                        container.appendChild(bridge);
                    }
                });
                const tail = this.el('div', 'chip-drop-zone tail');
                this.setupBridgeDrop(tail, this.items.length);
                container.appendChild(tail);

                this.animateChipReflow(prevPositions);
            }

            setupEmptyChipDrop(container) {
                if (!container) return;
                container.classList.add('is-empty-drop');
                const handleOver = (e) => {
                    const data = this.getDragPayload(e);
                    if (!data || (data.source !== 'capsule' && data.source !== 'favorite' && data.source !== 'chip')) return;
                    e.preventDefault();
                    container.classList.add('drag-over');
                };
                const handleLeave = (e) => {
                    if (e) e.stopPropagation();
                    container.classList.remove('drag-over');
                };
                const handleDrop = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    container.classList.remove('drag-over');
                    this.clearGapPreview();
                    this.handleDrop(e, 0);
                };
                container.ondragover = handleOver;
                container.ondragleave = handleLeave;
                container.ondrop = handleDrop;
            }

            teardownEmptyChipDrop(container) {
                if (!container) return;
                container.classList.remove('is-empty-drop', 'drag-over');
                container.ondragover = null;
                container.ondragleave = null;
                container.ondrop = null;
            }

            setupBridgeDrop(el, insertIndex) {
                el.ondragover = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    el.classList.add('drag-over-gap');
                    const copySource = this.dragType === 'capsule' || this.dragType === 'favorite';
                    if (e.dataTransfer) {
                        e.dataTransfer.dropEffect = copySource ? 'copy' : 'move';
                    }
                    if (this.dragType) {
                        this.setGapPreview(insertIndex);
                    }
                };

                el.ondragleave = () => {
                    el.classList.remove('drag-over-gap');
                    this.clearGapPreview(insertIndex);
                };

                el.ondrop = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    el.classList.remove('drag-over-gap');
                    this.clearGapPreview();
                    this.handleDrop(e, insertIndex);
                };

                if (this.chipGapPreview) this.chipGapPreview.registerGap(insertIndex, el);
            }

            getChipElementByIndex(idx) {
                if (idx < 0) return null;
                return document.querySelector(`#chipContainer .chip[data-index="${idx}"]`);
            }

            getFavoriteChipElementByIndex(idx) {
                if (idx < 0) return null;
                return document.querySelector(`#dockList .fav-name-chip[data-fav-index="${idx}"]`);
            }

            setGapPreview(insertIndex) {
                if (this.chipGapPreview) this.chipGapPreview.set(insertIndex);
            }

            clearGapPreview(targetIndex = null) {
                if (this.chipGapPreview) this.chipGapPreview.clear(targetIndex);
            }

            captureChipPositions() {
                return ReorderAnimator.capture('#chipContainer', '.chip', chip => chip.dataset.id);
            }

            animateChipReflow(prevPositions) {
                ReorderAnimator.animate({
                    container: '#chipContainer',
                    selector: '.chip',
                    prevPositions,
                    getKey: chip => chip.dataset.id,
                    transition: 'transform 0.28s cubic-bezier(0.22, 0.61, 0.36, 1)',
                    shouldLockWidth: (chip, prevRect, rect) => {
                        const isLinked = chip.classList.contains('linked-left') || chip.classList.contains('linked-right');
                        return isLinked && (prevRect.width - rect.width) > 0.5;
                    },
                    onNewElement: (chip) => {
                        chip.classList.add('pop-in');
                        chip.addEventListener('animationend', () => chip.classList.remove('pop-in'), { once: true });
                    }
                });
            }

            captureDockPositions(listEl = null) {
                const container = listEl || '#dockList';
                return ReorderAnimator.capture(container, '.fav-item, .fav-name-chip, .history-item', item => item.dataset.dockId);
            }

            animateDockReflow(prevPositions) {
                ReorderAnimator.animate({
                    container: '#dockList',
                    selector: '.fav-item, .fav-name-chip, .history-item',
                    prevPositions,
                    getKey: item => item.dataset.dockId,
                    transition: 'transform 0.25s cubic-bezier(0.22, 0.61, 0.36, 1)'
                });
            }

            createChipElement(item, idx) {
                const chip = this.el('div', 'chip');
                chip.dataset.id = item.id;
                chip.dataset.index = idx;
                chip.draggable = true;

                this.ensureItemColorPair(item);
                const hasValue = !!item.value;
                chip.classList.toggle('is-empty', !hasValue);

                if (hasValue) {
                    chip.style.backgroundColor = this.getItemColor(item);
                } else {
                    chip.style.backgroundColor = "transparent";
                    chip.style.border = "1px dashed var(--border)";
                    chip.style.color = "var(--text-sub)";
                }
                if (hasValue) {
                    const iconChar = item.isRandom ? "🎲" : "🔒";
                    const iconSpan = this.el('span', 'chip-icon', iconChar);
                    iconSpan.onclick = (e) => {
                        e.stopPropagation();
                        item.isRandom = !item.isRandom;
                        this.pushHistory();
                        this.render();
                    };
                    chip.appendChild(iconSpan);
                }
                chip.appendChild(document.createTextNode(item.value || `+ ${item.label}`));
                chip.onclick = () => this.handleChipClick(item, chip);
                this.setupDragEvents(chip, item, idx);
                return chip;
            }

            handleChipClick(item, chipEl) {
                if (!item || !chipEl) return;
                if (chipEl.isLongPress) {
                    chipEl.isLongPress = false;
                    return;
                }
                if (chipEl.isDragging) {
                    chipEl.isDragging = false;
                    return;
                }
                const pop = document.getElementById('popover');
                const isSameActive = pop && pop.classList.contains('active') && this.activePopoverKey === item.id;
                if (isSameActive) {
                    this.closePopover();
                    return;
                }
                this.openPopover(item, chipEl);
            }

            setupDragEvents(el, item, idx) {
                el.ondragstart = (e) => {
                    e.stopPropagation();
                    this.closePopover();
                    this.dragSrcEl = { item, idx };
                    this.dragType = 'chip';
                    el.classList.add('dragging');
                    el.isDragging = true;
                    e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('text/plain', JSON.stringify({ source: 'chip', id: item.id }));
                    document.body.classList.add('is-dragging');
                };

                el.ondragend = () => {
                    el.classList.remove('dragging');
                    el.isDragging = false;
                    this.dragSrcEl = null;
                    this.dragType = null;
                    this.clearGapPreview();
                    document.body.classList.remove('is-dragging');
                    document.querySelectorAll('.drag-over-gap').forEach(e => {
                        e.classList.remove('drag-over-gap');
                    });
                };
            }

            prepareGapForInsertion(targetIdx) {
                if (targetIdx > 0 && this.items[targetIdx - 1]?.linkNext) {
                    this.items[targetIdx - 1].linkNext = false;
                }
            }

            handleDrop(e, targetIdx) {
                const data = this.getDragPayload(e);
                if (!data) {
                    return;
                }

                if (data.source === 'capsule') {
                    const newItem = this.createItem(data.type);
                    if (targetIdx > 0 && this.items[targetIdx - 1]?.linkNext) {
                        newItem.linkNext = true;
                    }

                    this.items.splice(targetIdx, 0, newItem);
                    this.pushHistory();
                    this.render();
                    return;
                }

                if (data.source === 'favorite') {
                    const favId = Number(data.id);
                    if (!favId) return;
                    const fav = this.favorites.find(f => f.id === favId);
                    if (!fav) return;
                    const cloneItems = Array.isArray(fav.items) ? fav.items.map(item => {
                        const cloned = JSON.parse(JSON.stringify(item));
                        cloned.id = `${cloned.type}_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
                        this.ensureItemColorPair(cloned);
                        return cloned;
                    }) : [];
                    if (!cloneItems.length) return;
                    this.prepareGapForInsertion(targetIdx);
                    this.items.splice(targetIdx, 0, ...cloneItems);
                    this.pushHistory();
                    this.render();
                    this.showToast(this.t('toastFavoriteApplied'));
                    return;
                }

                if (this.dragSrcEl) {
                    const srcIdx = this.dragSrcEl.idx;
                    if (srcIdx === targetIdx || srcIdx === targetIdx - 1) return;
                    const getChainRange = (idx) => {
                        let start = idx;
                        let end = idx;
                        while (start > 0 && this.items[start - 1]?.linkNext) {
                            start--;
                        }
                        while (end < this.items.length - 1 && this.items[end]?.linkNext) {
                            end++;
                        }
                        return { start, end };
                    };

                    const srcChain = getChainRange(srcIdx);
                    const isInSameChain = targetIdx >= srcChain.start && targetIdx <= srcChain.end + 1;

                    const originalLinkNext = this.dragSrcEl.item.linkNext;
                    const prevItemLinkedToSrc = srcIdx > 0 && this.items[srcIdx - 1]?.linkNext;
                    const [movedItem] = this.items.splice(srcIdx, 1);
                    if (srcIdx > 0 && prevItemLinkedToSrc && srcIdx - 1 < this.items.length) {
                        this.items[srcIdx - 1].linkNext = originalLinkNext;
                    }
                    let finalIdx = targetIdx;
                    if (srcIdx < targetIdx) {
                        finalIdx--;
                    }
                    if (isInSameChain) {
                        const actualPrevItem = finalIdx > 0 ? this.items[finalIdx - 1] : null;
                        const actualNextItem = finalIdx < this.items.length ? this.items[finalIdx] : null;
                        if (actualPrevItem?.linkNext || (actualNextItem && prevItemLinkedToSrc)) {
                            movedItem.linkNext = true;
                        } else {
                            movedItem.linkNext = actualPrevItem?.linkNext === true;
                        }
                        if (finalIdx === this.items.length) {
                            movedItem.linkNext = false;
                        }
                    } else {
                        const actualPrevItem = finalIdx > 0 ? this.items[finalIdx - 1] : null;
                        movedItem.linkNext = actualPrevItem?.linkNext === true;
                    }

                    this.items.splice(finalIdx, 0, movedItem);
                    this.pushHistory();
                    this.render();
                }
            }

            getDragPayload(event) {
                let data = null;
                if (event && event.dataTransfer) {
                    try {
                        const raw = event.dataTransfer.getData('text/plain');
                        if (raw) data = JSON.parse(raw);
                    } catch (err) { }
                }
                if (!data && this.dragCapsuleData) {
                    data = this.dragCapsuleData;
                }
                if (!data && this.dragSrcEl) {
                    data = { source: 'chip', id: this.dragSrcEl.item.id };
                }
                return data;
            }

            setupChipTrashZone() {
                const trash = document.getElementById('chipTrashArea');
                if (!trash) return;
                const hint = this.t('chipTrashHint');
                trash.setAttribute('aria-label', hint);
                trash.setAttribute('title', hint);
                trash.ondragover = (e) => {
                    e.stopPropagation();
                    const data = this.getDragPayload(e);
                    if (!data || data.source !== 'chip') return;
                    e.preventDefault();
                    trash.classList.add('drag-over');
                    if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
                };
                trash.ondragleave = (e) => {
                    if (e) e.stopPropagation();
                    trash.classList.remove('drag-over');
                };
                trash.ondrop = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const data = this.getDragPayload(e);
                    trash.classList.remove('drag-over');
                    if (!data || data.source !== 'chip') return;
                    this.clearGapPreview();
                    this.deleteItem(data.id);
                };
            }

            buildPromptFromItems(list) {
                if (!Array.isArray(list)) return "";
                let prompt = "";
                list.forEach((item, i) => {
                    if (!item.value) return;
                    prompt += item.value;
                    if (i < list.length - 1) {
                        if (item.linkNext) {
                            const nextItem = list[i + 1];
                            prompt += this.shouldSkipLinkSpace(nextItem) ? "" : " ";
                        } else {
                            prompt += ", ";
                        }
                    }
                });
                return prompt;
            }
            shouldSkipLinkSpace(nextItem) {
                if (!nextItem || !nextItem.value) return false;
                const trimmed = nextItem.value.trim();
                if (!trimmed) return false;
                const pairs = { '(': ')', '[': ']', '{': '}' };
                const first = trimmed[0];
                const last = trimmed[trimmed.length - 1];
                return pairs[first] && last === pairs[first];
            }
            generatePrompt() {
                return this.buildPromptFromItems(this.items);
            }
            generateValues(isLucky = false) {
                let changed = false;
                this.items.forEach(item => {
                    if (item.value !== "" && !item.isRandom) return;
                    if (!(isLucky || item.isRandom)) return;
                    const nextValue = this.drawFromDeck(item.type);
                    if (nextValue === null) return;
                    item.value = nextValue;
                    item.isRandom = true;
                    changed = true;
                });
                if (changed) { this.pushHistory(); this.render(); }
            }
            findItemById(id) {
                return this.items.find(i => i.id === id);
            }
            el(tag, className, text) { const d = document.createElement(tag); if (className) d.className = className; if (text) d.innerText = text; return d; }
            generatePastelColor() {
                const hue = Math.floor(Math.random() * 360);
                const saturation = 35 + Math.floor(Math.random() * 25);
                const lightness = 70 + Math.floor(Math.random() * 15);
                return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
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
            drawFromDeck(type) {
                if (!type) return null;
                const opts = this.optionsData?.[type];
                if (!Array.isArray(opts) || opts.length === 0) return null;
                if (!this.isPlainObject(this.randomDecks)) this.randomDecks = {};
                const signature = this.getOptionsSignature(opts);
                let deck = this.randomDecks[type];
                const needsReset = !deck || deck.signature !== signature || !Array.isArray(deck.remaining) || deck.remaining.length === 0;
                if (needsReset) {
                    deck = {
                        remaining: this.shuffleList(opts),
                        signature
                    };
                }
                const value = deck.remaining.shift();
                if (deck.remaining.length === 0) {
                    deck.remaining = this.shuffleList(opts);
                    deck.signature = signature;
                }
                this.randomDecks[type] = deck;
                return value !== undefined ? value : opts[Math.floor(Math.random() * opts.length)];
            }
            resetDeck(type) {
                if (!this.isPlainObject(this.randomDecks)) this.randomDecks = {};
                if (!type) return;
                delete this.randomDecks[type];
            }
            cleanupRandomDecks() {
                if (!this.isPlainObject(this.randomDecks)) {
                    this.randomDecks = {};
                    return;
                }
                Object.keys(this.randomDecks).forEach(type => {
                    const opts = this.optionsData?.[type];
                    const deck = this.randomDecks[type];
                    if (!Array.isArray(opts) || opts.length === 0 || !deck || !Array.isArray(deck.remaining)) {
                        delete this.randomDecks[type];
                        return;
                    }
                    deck.remaining = deck.remaining.filter(val => opts.includes(val));
                    if (!deck.remaining.length) {
                        delete this.randomDecks[type];
                        return;
                    }
                    deck.signature = this.getOptionsSignature(opts);
                });
            }

            getSoftColor(index) {
                const hex = Palette[index % Palette.length];
                const hsl = this.hexToHsl(hex);
                if (!hsl) return hex;
                return this.hslToString({ h: hsl.h, s: this.clamp(hsl.s, 30, 70), l: 72 });
            }

            isDarkTheme() {
                return (document.documentElement.getAttribute('data-theme') || 'dark') === 'dark';
            }

            ensureItemColorPair(item) {
                if (!item) return;
                if (!item.color) item.color = this.generatePastelColor();
                item.darkColor = this.createDarkVariant(item.color);
            }

            getItemColor(item) {
                this.ensureItemColorPair(item);
                return this.isDarkTheme() ? (item.darkColor || item.color) : item.color;
            }

            createDarkVariant(color) {
                const hsl = this.parseColorToHsl(color);
                if (!hsl) return color;
                return this.hslToString({
                    h: hsl.h,
                    s: this.clamp(hsl.s - 25, 5, 70),
                    l: this.clamp(hsl.l - 40, 10, 40)
                });
            }

            parseColorToHsl(color) {
                if (!color) return null;
                const trimmed = color.trim();
                if (trimmed.startsWith('hsl')) {
                    return this.parseHslString(trimmed);
                }
                if (trimmed.startsWith('#')) {
                    return this.hexToHsl(trimmed);
                }
                return null;
            }

            parseHslString(str) {
                const match = str.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%/i);
                if (!match) return null;
                return {
                    h: parseFloat(match[1]),
                    s: parseFloat(match[2]),
                    l: parseFloat(match[3])
                };
            }
            escapeSelector(value) {
                if (typeof value !== 'string') return '';
                if (window.CSS && typeof CSS.escape === 'function') {
                    return CSS.escape(value);
                }
                const string = String(value);
                const length = string.length;
                if (!length) return '';
                let result = '';
                let index = -1;
                const firstCodeUnit = string.charCodeAt(0);
                while (++index < length) {
                    const codeUnit = string.charCodeAt(index);
                    if (codeUnit === 0x0000) {
                        result += '\uFFFD';
                        continue;
                    }
                    if ((codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit === 0x007F || (index === 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) || (index === 1 && codeUnit >= 0x0030 && codeUnit <= 0x0039 && firstCodeUnit === 0x002D)) {
                        result += '\\' + codeUnit.toString(16) + ' ';
                        continue;
                    }
                    if (codeUnit >= 0x0080 || codeUnit === 0x002D || codeUnit === 0x005F || (codeUnit >= 0x0030 && codeUnit <= 0x0039) || (codeUnit >= 0x0041 && codeUnit <= 0x005A) || (codeUnit >= 0x0061 && codeUnit <= 0x007A)) {
                        result += string.charAt(index);
                        continue;
                    }
                    result += '\\' + string.charAt(index);
                }
                return result;
            }
            escapeAttribute(value) {
                if (value === null || value === undefined) return '';
                return String(value)
                    .replace(/&/g, '&amp;')
                    .replace(/"/g, '&quot;')
                    .replace(/</g, '&lt;');
            }
            escapeHtml(value) {
                if (value === null || value === undefined) return '';
                return String(value)
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#39;');
            }
            sanitizeColorValue(value) {
                if (typeof value !== 'string') return '';
                const trimmed = value.trim();
                return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(trimmed) ? trimmed : '';
            }
            isPlainObject(value) {
                return Object.prototype.toString.call(value) === '[object Object]';
            }
            cloneData(value, fallback) {
                try {
                    return JSON.parse(JSON.stringify(value));
                } catch (err) {
                    return fallback;
                }
            }
            validateSchemaVersion(payload) {
                const version = Number(payload?.schemaVersion);
                return Number.isInteger(version) && version === this.DATA_SCHEMA_VERSION;
            }
            sanitizeFullStatePayload(payload) {
                if (!this.isPlainObject(payload)) return null;
                if (!this.validateSchemaVersion(payload)) return null;
                if (!Array.isArray(payload.items) || !this.isPlainObject(payload.optionsData)) return null;
                const optionsClone = this.cloneData(payload.optionsData || {}, {});
                this.seedOptionsFromDecks(optionsClone, payload.randomDecks || {});
                const safe = {
                    schemaVersion: this.DATA_SCHEMA_VERSION,
                    version: typeof payload.version === 'string' ? payload.version : this.APP_VERSION,
                    items: this.cloneData(payload.items, []),
                    optionsData: optionsClone,
                    customTypes: this.cloneData(payload.customTypes || [], []),
                    favorites: this.cloneData(payload.favorites || [], []),
                    capLabels: this.cloneData(payload.capLabels || {}, {}),
                    rollHistory: this.cloneData(payload.rollHistory || [], []),
                    capsuleOrder: this.cloneData(payload.capsuleOrder || [], []),
                    removedCapsules: this.cloneData(payload.removedCapsules || [], [])
                };
                this.ensureMissingCapsules(safe);
                return safe;
            }
            sanitizePartialImport(payload) {
                if (!this.isPlainObject(payload)) return null;
                if (!this.validateSchemaVersion(payload)) return null;
                const optionsClone = this.cloneData(payload.optionsData || {}, {});
                this.seedOptionsFromDecks(optionsClone, payload.randomDecks || {});
                return {
                    favorites: this.cloneData(payload.favorites || [], []),
                    customTypes: this.cloneData(payload.customTypes || [], []),
                    capLabels: this.cloneData(payload.capLabels || {}, {}),
                    optionsData: optionsClone
                };
            }
            seedOptionsFromDecks(optionsData, decks) {
                if (!this.isPlainObject(optionsData) || !this.isPlainObject(decks)) return;
                Object.keys(decks).forEach(type => {
                    const deck = decks[type];
                    if (!deck) return;
                    if (!Array.isArray(optionsData[type]) || !optionsData[type].length) {
                        const signatureValues = this.parseDeckSignature(deck.signature) || [];
                        const remainingValues = Array.isArray(deck.remaining) ? deck.remaining : [];
                        const combined = [...signatureValues, ...remainingValues];
                        if (combined.length) {
                            const unique = [];
                            combined.forEach(val => {
                                if (!unique.includes(val)) unique.push(val);
                            });
                            optionsData[type] = this.sortOptionsList(unique);
                        }
                    }
                });
            }
            parseDeckSignature(signature) {
                if (typeof signature !== 'string' || !signature.trim()) return null;
                try {
                    const parsed = JSON.parse(signature);
                    return Array.isArray(parsed) ? parsed : null;
                } catch (err) {
                    return null;
                }
            }
            applyStatePayload(state) {
                if (!state || typeof state !== 'object') return;
                this.items = this.flattenItems(state.items || []);
                this.optionsData = this.cloneData(state.optionsData || {}, {});
                this.customTypes = this.cloneData(state.customTypes || [], []);
                this.favorites = this.cloneData(state.favorites || [], []);
                this.capLabels = this.cloneData(state.capLabels || {}, {});
                this.rollHistory = this.cloneData(state.rollHistory || [], []);
                this.capsuleOrder = Array.isArray(state.capsuleOrder) && state.capsuleOrder.length
                    ? [...state.capsuleOrder]
                    : this.getDefaultCapsuleOrder();
                this.removedCapsules = this.cloneData(state.removedCapsules || [], []);
                this.randomDecks = {};
                this.history = [];
                this.historyIndex = -1;
                this.ensureFavoriteNames();
                this.repairMissingCapsules({ persist: false });
                this.sortAllOptions();
                this.syncCapsuleOrder();
                this.activeFavoriteId = null;
                this.activeFavoriteName = '';
                this.skipFavoriteLabelClear = false;
                this.capsulesDirty = true;
                this.dockDirty = true;
                this.pushHistory();
            }
            deriveLabelFromKey(key, state = null) {
                if (!key) return 'Custom Capsule';
                const labels = state && state.capLabels;
                const mapped = typeof labels?.[key] === 'string' ? labels[key].trim() : '';
                if (mapped) return mapped;
                const cleaned = String(key)
                    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
                    .replace(/[_-]+/g, ' ')
                    .trim();
                if (!cleaned) return 'Custom Capsule';
                return cleaned
                    .split(/\s+/)
                    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
                    .join(' ');
            }
            ensureMissingCapsules(state) {
                if (!state || typeof state !== 'object') return false;
                if (!Array.isArray(state.customTypes)) state.customTypes = [];
                if (!Array.isArray(state.capsuleOrder)) state.capsuleOrder = [];
                if (!this.isPlainObject(state.optionsData)) state.optionsData = {};
                if (!Array.isArray(state.items)) state.items = [];
                if (!Array.isArray(state.favorites)) state.favorites = [];
                if (!Array.isArray(state.rollHistory)) state.rollHistory = [];
                if (!this.isPlainObject(state.capLabels)) state.capLabels = {};
                const baseKeys = new Set(this.getBaseCapsuleKeys());
                const knownKeys = new Set(baseKeys);
                state.customTypes.forEach(def => {
                    if (!def || typeof def.key !== 'string') return;
                    const trimmed = def.key.trim();
                    if (!trimmed) return;
                    def.key = trimmed;
                    knownKeys.add(trimmed);
                });
                const orderSet = new Set(state.capsuleOrder);
                Object.keys(state.optionsData || {}).forEach(key => {
                    const trimmed = (key || '').trim();
                    if (!trimmed || knownKeys.has(trimmed)) return;
                    const label = this.deriveLabelFromKey(trimmed, state);
                    const capColor = this.generatePastelColor();
                    state.customTypes.push({ key: trimmed, label, capColor });
                    knownKeys.add(trimmed);
                    if (!orderSet.has(trimmed)) {
                        state.capsuleOrder.push(trimmed);
                        orderSet.add(trimmed);
                    }
                });
                const pruneItems = (list, type) => {
                    if (!Array.isArray(list)) return { changed: false, list: [] };
                    const filtered = list.filter(item => item && item.type !== type);
                    return { changed: filtered.length !== list.length, list: filtered };
                };
                const dropType = (type) => {
                    let changed = false;
                    const resItems = pruneItems(state.items, type);
                    if (resItems.changed) {
                        state.items = resItems.list;
                        changed = true;
                    }
                    const nextFavs = [];
                    state.favorites.forEach(fav => {
                        const res = pruneItems(fav?.items || [], type);
                        if (res.changed) {
                            fav.items = res.list;
                            changed = true;
                        }
                        if (!fav.items || fav.items.length === 0) {
                            changed = true;
                            return;
                        }
                        nextFavs.push(fav);
                    });
                    if (nextFavs.length !== state.favorites.length) {
                        changed = true;
                    }
                    state.favorites = nextFavs;
                    const nextHistory = [];
                    state.rollHistory.forEach(entry => {
                        const res = pruneItems(entry?.items || [], type);
                        if (res.changed) {
                            entry.items = res.list;
                            changed = true;
                        }
                        if (!entry.items || entry.items.length === 0) {
                            changed = true;
                            return;
                        }
                        nextHistory.push(entry);
                    });
                    if (nextHistory.length !== state.rollHistory.length) {
                        changed = true;
                    }
                    state.rollHistory = nextHistory;
                    if (state.capLabels[type]) {
                        delete state.capLabels[type];
                        changed = true;
                    }
                    if (state.optionsData[type]) {
                        delete state.optionsData[type];
                        changed = true;
                    }
                    const beforeOrder = state.capsuleOrder.length;
                    state.capsuleOrder = state.capsuleOrder.filter(k => k !== type);
                    if (state.capsuleOrder.length !== beforeOrder) {
                        changed = true;
                    }
                    state.customTypes = state.customTypes.filter(def => def.key !== type);
                    return changed;
                };
                let mutated = false;
                const referenced = new Set();
                const collect = (key) => {
                    if (typeof key !== 'string') return;
                    const trimmed = key.trim();
                    if (!trimmed) return;
                    referenced.add(trimmed);
                };
                state.items.forEach(item => collect(item?.type));
                state.favorites.forEach(fav => (fav?.items || []).forEach(item => collect(item?.type)));
                state.rollHistory.forEach(entry => (entry?.items || []).forEach(item => collect(item?.type)));
                Object.keys(state.capLabels).forEach(collect);
                state.capsuleOrder.forEach(collect);
                referenced.forEach(type => {
                    if (knownKeys.has(type)) return;
                    if (dropType(type)) mutated = true;
                });
                const finalOrderSet = new Set(state.capsuleOrder);
                knownKeys.forEach(key => {
                    if (!finalOrderSet.has(key)) {
                        state.capsuleOrder.push(key);
                        finalOrderSet.add(key);
                        mutated = true;
                    }
                });
                return mutated;
            }
            repairMissingCapsules({ persist = true } = {}) {
                if (!Array.isArray(this.customTypes)) this.customTypes = [];
                if (!Array.isArray(this.capsuleOrder)) this.capsuleOrder = [];
                if (!this.isPlainObject(this.optionsData)) this.optionsData = {};
                if (!Array.isArray(this.items)) this.items = [];
                if (!Array.isArray(this.favorites)) this.favorites = [];
                if (!Array.isArray(this.rollHistory)) this.rollHistory = [];
                if (!this.isPlainObject(this.capLabels)) this.capLabels = {};
                const stateRef = {
                    customTypes: this.customTypes,
                    optionsData: this.optionsData,
                    items: this.items,
                    favorites: this.favorites,
                    capLabels: this.capLabels,
                    rollHistory: this.rollHistory,
                    capsuleOrder: this.capsuleOrder
                };
                const updated = this.ensureMissingCapsules(stateRef);
                if (updated) {
                    this.capsulesDirty = true;
                    this.syncCapsuleOrder();
                    if (persist) {
                        this.saveData();
                    }
                }
                return updated;
            }
            migrateLegacyTypesInCurrentState() {
                const map = this.LEGACY_TYPE_MAP;
                if (!map || !Object.keys(map).length) return false;
                let changed = false;
                const remap = (type) => {
                    if (type && Object.prototype.hasOwnProperty.call(map, type)) {
                        changed = true;
                        return map[type];
                    }
                    return type;
                };
                const remapItems = (list) => {
                    if (!Array.isArray(list)) return;
                    list.forEach(item => {
                        if (item && typeof item === 'object' && item.type) {
                            const nextType = remap(item.type);
                            item.type = nextType;
                            if (nextType) {
                                item.label = this.getTypeLabel(nextType) || item.label;
                            }
                        }
                    });
                };
                remapItems(this.items);
                (this.rollHistory || []).forEach(entry => remapItems(entry?.items));
                (this.favorites || []).forEach(fav => remapItems(fav?.items));
                if (this.optionsData && typeof this.optionsData === 'object') {
                    const snapshot = { ...this.optionsData };
                    Object.keys(snapshot).forEach(key => {
                        const next = remap(key);
                        if (next !== key) {
                            const sourceList = Array.isArray(snapshot[key]) ? [...snapshot[key]] : [];
                            const targetList = Array.isArray(this.optionsData[next]) ? [...this.optionsData[next]] : [];
                            sourceList.forEach(val => {
                            if (!targetList.includes(val)) targetList.push(val);
                        });
                        this.optionsData[next] = this.sortOptionsList(targetList);
                        delete this.optionsData[key];
                    }
                });
                }
                if (this.randomDecks && typeof this.randomDecks === 'object') {
                    const snapshot = { ...this.randomDecks };
                    Object.keys(snapshot).forEach(key => {
                        const next = remap(key);
                        if (next !== key) {
                            if (this.randomDecks[next]) {
                                const targetDeck = this.randomDecks[next];
                                const sourceDeck = snapshot[key];
                                if (Array.isArray(sourceDeck?.remaining)) {
                                    if (!Array.isArray(targetDeck.remaining)) targetDeck.remaining = [];
                                    sourceDeck.remaining.forEach(val => {
                                        if (!targetDeck.remaining.includes(val)) targetDeck.remaining.push(val);
                                    });
                                }
                            } else {
                                this.randomDecks[next] = snapshot[key];
                            }
                            delete this.randomDecks[key];
                        }
                    });
                }
                if (this.capLabels && typeof this.capLabels === 'object') {
                    const snapshot = { ...this.capLabels };
                    Object.keys(snapshot).forEach(key => {
                        const next = remap(key);
                        if (next !== key) {
                            if (!this.capLabels[next]) this.capLabels[next] = snapshot[key];
                            delete this.capLabels[key];
                        }
                    });
                }
                if (Array.isArray(this.capsuleOrder)) {
                    const nextOrder = [];
                    this.capsuleOrder.forEach(key => {
                        const nextKey = remap(key);
                        if (!nextOrder.includes(nextKey)) {
                            nextOrder.push(nextKey);
                        }
                    });
                    this.capsuleOrder = nextOrder;
                }
                if (Array.isArray(this.removedCapsules)) {
                    const nextRemoved = [];
                    this.removedCapsules.forEach(key => {
                        const nextKey = remap(key);
                        if (!nextRemoved.includes(nextKey)) {
                            nextRemoved.push(nextKey);
                        }
                    });
                    this.removedCapsules = nextRemoved;
                }
                return changed;
            }

            hexToHsl(hex) {
                let clean = hex.replace('#', '');
                if (clean.length === 3) {
                    clean = clean.split('').map(ch => ch + ch).join('');
                }
                if (clean.length !== 6) return null;
                const r = parseInt(clean.slice(0, 2), 16);
                const g = parseInt(clean.slice(2, 4), 16);
                const b = parseInt(clean.slice(4, 6), 16);
                return this.rgbToHslValues(r, g, b);
            }

            rgbToHslValues(r, g, b) {
                r /= 255; g /= 255; b /= 255;
                const max = Math.max(r, g, b), min = Math.min(r, g, b);
                let h = 0, s = 0;
                const l = (max + min) / 2;
                if (max !== min) {
                    const d = max - min;
                    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                    switch (max) {
                        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                        case g: h = (b - r) / d + 2; break;
                        case b: h = (r - g) / d + 4; break;
                    }
                    h /= 6;
                }
                return {
                    h: Math.round(h * 360),
                    s: Math.round(s * 100),
                    l: Math.round(l * 100)
                };
            }

            hslToString({ h, s, l }) {
                return `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
            }

            clamp(value, min, max) {
                return Math.min(max, Math.max(min, value));
            }

            getTypeLabel(type) {
                if (this.capLabels[type]) return this.capLabels[type];
                const base = this.baseCapsuleMap[type];
                if (base) return base.label;
                const custom = this.customTypes.find(c => c.key === type);
                if (custom) return custom.label;
                return type;
            }

            addLongPress(el, action, duration) {
                let t;
                const start = () => {
                    el.isLongPress = false;
                    t = setTimeout(() => {
                        el.isLongPress = true;
                        if (navigator.vibrate) navigator.vibrate(50);
                        action();
                    }, duration);
                };
                const end = () => {
                    clearTimeout(t);
                    if (el.isLongPress) {
                        setTimeout(() => { el.isLongPress = false; }, 50);
                    }
                };
                el.onmousedown = start; el.ontouchstart = start; el.onmouseup = end; el.ontouchend = end; el.onmouseleave = end;
                el.addEventListener('dragstart', end);
            }
            showToast(msg) {
                const toast = document.getElementById('toast');
                toast.innerText = msg;
                toast.classList.add('show');
                setTimeout(() => toast.classList.remove('show'), 2000);
            }
            initTheme() {
                const saved = this.getStoredValue(this.THEME_KEY, this.LEGACY_THEME_KEYS) || 'dark';
                document.documentElement.setAttribute('data-theme', saved);
                this.updateThemeIcon(saved);
            }
            toggleTheme() {
                const current = document.documentElement.getAttribute('data-theme');
                const next = current === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', next);
                localStorage.setItem(this.THEME_KEY, next);
                this.clearLegacyKeys(this.LEGACY_THEME_KEYS);
                this.updateThemeIcon(next);
                this.capsulesDirty = true;
                this.dockDirty = true;
                this.render();
            }
            updateThemeIcon(theme) {
                const icon = document.getElementById('themeToggleIcon');
                if (icon) {
                    icon.innerText = theme === 'dark' ? '🌙' : '☀️';
                }
            }
            toggleHelp() {
                const modal = document.getElementById('helpModal');
                if (modal.classList.contains('active')) { modal.classList.remove('active'); setTimeout(() => modal.style.display = 'none', 300); }
                else { modal.style.display = 'flex'; void modal.offsetWidth; modal.classList.add('active'); }
            }
            toggleSettingsMenu(event) {
                event?.stopPropagation();
                this.isSettingsMenuOpen = !this.isSettingsMenuOpen;
                this.updateSettingsMenu();
            }
            closeSettingsMenu() {
                if (!this.isSettingsMenuOpen) return;
                this.isSettingsMenuOpen = false;
                this.updateSettingsMenu();
            }
            updateSettingsMenu() {
                const menu = document.getElementById('settingsMenu');
                const btn = document.getElementById('settingsBtn');
                if (!menu || !btn) return;
                menu.classList.toggle('open', this.isSettingsMenuOpen);
                btn.setAttribute('aria-expanded', this.isSettingsMenuOpen ? 'true' : 'false');
                btn.setAttribute('aria-label', this.t('settingsAria'));
                menu.querySelectorAll('button[data-setting]').forEach(el => {
                    const key = el.getAttribute('data-setting');
                    const label = this.t(key === 'export' ? 'settingsSave' : key === 'import' ? 'settingsOpen' : 'settingsReset');
                    const span = el.querySelector('.settings-label');
                    if (span) span.innerText = label;
                });
            }
            handleSettingsAction(action) {
                this.closeSettingsMenu();
                switch (action) {
                    case 'theme':
                        this.toggleTheme();
                        break;
                    case 'export':
                        this.action('export');
                        break;
                    case 'import':
                        this.action('import');
                        break;
                    case 'reset':
                        this.action('reset');
                        break;
                }
            }
            handleThemeToggle() {
                this.toggleTheme();
            }
            toggleLanguageMenu(event) {
                event?.stopPropagation();
                this.closeSettingsMenu();
                this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
                this.updateLanguageMenu();
            }
            closeLanguageMenu() {
                if (!this.isLanguageMenuOpen) return;
                this.isLanguageMenuOpen = false;
                this.updateLanguageMenu();
            }
            getLocaleMeta(code) {
                return LOCALES[code] || LOCALES.en;
            }
            updateLanguageMenu() {
                const menu = document.getElementById('languageMenu');
                const btn = document.getElementById('languageBtn');
                if (!menu || !btn) return;
                menu.classList.toggle('open', !!this.isLanguageMenuOpen);
                btn.setAttribute('aria-expanded', this.isLanguageMenuOpen ? 'true' : 'false');
                btn.innerText = '🌐';
                btn.setAttribute('aria-label', this.t('languageAria'));
                menu.innerHTML = '';
                LOCALE_ORDER.forEach(code => {
                    const localeMeta = this.getLocaleMeta(code);
                    const btn = document.createElement('button');
                    btn.type = 'button';
                    if (code === this.locale) btn.classList.add('active');
                    btn.textContent = localeMeta.nativeName;
                    btn.addEventListener('click', () => this.selectLanguage(code));
                    menu.appendChild(btn);
                });
            }
            selectLanguage(code) {
                if (!LOCALE_ORDER.includes(code)) {
                    this.closeLanguageMenu();
                    return;
                }
                if (code === this.locale) {
                    this.closeLanguageMenu();
                    return;
                }
                this.locale = code;
                localStorage.setItem(this.LOCALE_KEY, code);
                this.capsulesDirty = true;
                this.dockDirty = true;
                this.closeLanguageMenu();
                this.render();
                this.updateSettingsMenu();
                this.updateLanguageMenu();
                this.updateHelpContent();
                this.updateAriaLabels();
                this.updateDockTabLabels();
            }
            updateHelpContent() {
                const title = document.getElementById('helpTitle');
                const content = document.getElementById('helpContent');
                if (title) title.innerText = this.t('helpTitle');
                if (content) content.innerHTML = this.t('helpContent');
            }
            updateAriaLabels() {
                const helpBtn = document.querySelector('.help-btn');
                if (helpBtn) helpBtn.setAttribute('aria-label', this.t('helpAria'));
                const settingsBtn = document.getElementById('settingsBtn');
                if (settingsBtn) settingsBtn.setAttribute('aria-label', this.t('settingsAria'));
                const langBtn = document.getElementById('languageBtn');
                if (langBtn) langBtn.setAttribute('aria-label', this.t('languageAria'));
                const favBtn = document.querySelector('.btn-fav');
                if (favBtn) favBtn.setAttribute('aria-label', this.t('btnFavAria'));
                const favEditBtn = document.getElementById('activeFavEditBtn');
                if (favEditBtn) {
                    const editLabel = this.t('favEditTitle');
                    favEditBtn.setAttribute('aria-label', editLabel);
                    favEditBtn.setAttribute('title', editLabel);
                }
                const genBtn = document.querySelector('.btn-gen');
                if (genBtn) genBtn.setAttribute('aria-label', this.t('btnGenerateAria'));
                const copyBtn = document.querySelector('.btn-copy');
                if (copyBtn) copyBtn.setAttribute('aria-label', this.t('btnCopyAria'));
                const autoBtn = document.querySelector('.btn-auto-copy');
                if (autoBtn) autoBtn.setAttribute('aria-label', this.t('btnAutoCopyAria'));
                const prev = document.getElementById('btnPrev');
                if (prev) prev.setAttribute('aria-label', this.t('btnPrevAria'));
                const next = document.getElementById('btnNext');
                if (next) next.setAttribute('aria-label', this.t('btnNextAria'));
            }
            updateDockTabLabels() {
                document.querySelectorAll('[data-tab-label="favorites"]').forEach(el => {
                    el.textContent = this.t('favoritesTab');
                });
                document.querySelectorAll('[data-tab-label="history"]').forEach(el => {
                    el.textContent = this.t('historyTab');
                });
                const badge = document.getElementById('dockDeleteBadge');
                if (badge) badge.textContent = this.t('dockDeleteBadge');
                const clearBtn = document.getElementById('dockClearHistory');
                if (clearBtn) clearBtn.setAttribute('title', this.t('confirmClearHistory'));
            }
            openPopover(item, chipEl, retainState = null) {
                this.activePopoverKey = item.id;
                const pop = document.getElementById('popover');
                pop.className = 'popover active';
                const opts = this.getSortedOptions(item.type);
                const itemLabel = this.getTypeLabel(item.type) || item.type;
                let html = `<div class="pop-list">`;
                html += `<div class="pop-section-label">${this.escapeHtml(itemLabel)}</div>`;
                const isRand = item.isRandom ? 'selected' : '';
                html += `<div class="pop-item random-opt ${isRand}" data-random="true">${this.escapeHtml(this.t('popoverRandom'))}</div>`;
                opts.forEach(opt => {
                    const selected = (item.value === opt && !item.isRandom) ? 'selected' : '';
                    const safeVal = this.escapeAttribute(opt);
                    const label = this.escapeHtml(opt);
                    const editLabel = this.escapeAttribute(this.t('favEditTitle'));
                    html += `<div class="pop-item ${selected}" data-val="${safeVal}"><span class="pop-option-label">${label}</span><button type="button" class="pop-edit-btn" data-edit-val="${safeVal}" aria-label="${editLabel}">${this.getEditIcon()}</button></div>`;
                });
                html += `</div>`;
                const placeholder = this.escapeAttribute(this.t('popoverAddPlaceholder'));
                html += `<div class="pop-add-row"><input class="pop-add-input" type="text" placeholder="${placeholder}"></div>`;
                pop.innerHTML = html;
                const rect = chipEl.getBoundingClientRect();
                const box = document.getElementById('editorContainer').getBoundingClientRect();
                let top = (rect.bottom - box.top + 8);
                pop.style.top = top + 'px';
                let left = rect.left - box.left;
                if (left + 220 > box.width) left = box.width - 230; if (left < 0) left = 10;
                pop.style.left = left + 'px';
                const targetScroll = retainState?.scrollTop ?? 0;
                pop.scrollTop = targetScroll;
                const focusVal = retainState?.focusValue;
                requestAnimationFrame(() => {
                    pop.scrollTop = targetScroll;
                    if (focusVal) {
                        const selector = this.escapeSelector(focusVal);
                        const focusEl = pop.querySelector(`.pop-item[data-val="${selector}"]`);
                        if (focusEl) focusEl.scrollIntoView({ block: 'center' });
                    }
                });
                const randomEl = pop.querySelector('.pop-item.random-opt');
                if (randomEl) {
                    randomEl.addEventListener('click', () => this.setRandom(item.id));
                }
                pop.querySelectorAll('.pop-item[data-val]').forEach(el => {
                    const val = el.getAttribute('data-val');
                    el.addEventListener('click', () => {
                        if (el.isLongPress) {
                            el.isLongPress = false;
                            return;
                        }
                        this.setValue(item.id, val);
                    });
                });
                pop.querySelectorAll('.pop-edit-btn').forEach(btn => {
                    btn.addEventListener('click', (event) => {
                        event.stopPropagation();
                        const editVal = btn.getAttribute('data-edit-val');
                        const container = btn.closest('.pop-item');
                        if (container && editVal !== null) {
                            this.enableInlineEdit(container, item.type, editVal);
                        }
                    });
                });
                const addInput = pop.querySelector('.pop-add-input');
                if (addInput) {
                    addInput.addEventListener('keydown', (event) => {
                        if (event.key === 'Enter') {
                            event.preventDefault();
                            this.addOption(item.type, item.id, addInput.value);
                        }
                    });
                    addInput.addEventListener('input', () => {
                        this.highlightPopoverMatch(addInput.value);
                    });
                    requestAnimationFrame(() => {
                        this.highlightPopoverMatch(addInput.value);
                    });
                }
            }
            closePopover() { document.getElementById('popover').classList.remove('active'); this.activePopoverKey = null; }
            setValue(id, val) { const item = this.findItemById(id); if (item) { item.value = val; item.isRandom = false; this.pushHistory(); this.render(); this.closePopover(); } }
            setRandom(id) {
                const item = this.findItemById(id);
                if (item) {
                    const nextValue = this.drawFromDeck(item.type);
                    if (nextValue !== null) {
                        item.value = nextValue;
                        item.isRandom = true;
                        this.pushHistory();
                        this.render();
                    }
                }
                this.closePopover();
            }
            addOption(type, id, val) {
                if (!val.trim()) return;
                if (!this.optionsData[type]) this.optionsData[type] = [];
                if (!this.optionsData[type].includes(val)) {
                    this.optionsData[type].push(val);
                    this.optionsData[type] = this.sortOptionsList(this.optionsData[type]);
                    this.resetDeck(type);
                }
                this.setValue(id, val);
            }
            highlightPopoverMatch(value) {
                const pop = document.getElementById('popover');
                if (!pop) return;
                const items = Array.from(pop.querySelectorAll('.pop-item[data-val]'));
                items.forEach(el => el.classList.remove('is-search-match'));
                const query = (value || '').trim().toLowerCase();
                if (!query) return;
                const match = items.find(el => {
                    const val = el.getAttribute('data-val') || '';
                    return val.toLowerCase().startsWith(query);
                });
                if (match) {
                    match.classList.add('is-search-match');
                    match.scrollIntoView({ block: 'nearest' });
                }
            }
            getEditIcon() {
                return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.586 4.414a2 2 0 012.828 0l1.172 1.172a2 2 0 010 2.828L10 17l-3.9.26.26-3.9 8.226-8.226z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 20h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
            }
            enableInlineEdit(el, type, oldVal) {
                el.onclick = null;
                const safeVal = this.escapeAttribute(oldVal);
                el.innerHTML = `<input type="text" class="inline-edit-input" value="${safeVal}">`;
                const input = el.querySelector('input'); input.focus();
                const save = () => {
                    const popover = document.getElementById('popover');
                    const prevScroll = popover ? popover.scrollTop : 0;
                    const currentChipId = this.activePopoverKey;
                    const newVal = input.value.trim();
                    if (newVal !== oldVal) {
                        const idx = this.optionsData[type].indexOf(oldVal);
                        if (idx > -1) {
                            if (!newVal) this.optionsData[type].splice(idx, 1);
                            else this.optionsData[type][idx] = newVal;
                            this.resetDeck(type);
                            this.items.forEach(i => { if (i.type === type && i.value === oldVal) i.value = newVal; });
                            this.pushHistory();
                        }
                    }
                    this.render();
                    if (currentChipId) {
                        const chip = document.querySelector(`.chip[data-id="${currentChipId}"]`);
                        const item = this.findItemById(currentChipId);
                        if (chip && item) {
                            const focusValue = newVal || oldVal;
                            this.openPopover(item, chip, { scrollTop: prevScroll, focusValue });
                        }
                    }
                };
                input.addEventListener('blur', save);
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        input.blur();
                    }
                    if (e.key === 'Escape') {
                        e.preventDefault();
                        input.value = oldVal;
                        input.blur();
                    }
                });
                input.addEventListener('click', (e) => e.stopPropagation());
                input.addEventListener('mousedown', (e) => e.stopPropagation());
                input.addEventListener('mouseup', (e) => e.stopPropagation());
            }
            openCapEditDialog(key, capEl) {
                if (!capEl) return;
                this.closePopover();
                this.closeCapEditDialog();
                this.activeCapEditKey = key;
                this.activeCapEditEl = capEl;
                capEl.classList.add('cap-editing');
                capEl.isLongPress = false;

                if (!this.capEditDialogEl) {
                    this.capEditDialogEl = document.createElement('div');
                    this.capEditDialogEl.className = 'cap-edit-dialog';
                }
                const dialog = this.capEditDialogEl;
                const currentLabel = this.getTypeLabel(key) || key;
                const safeLabel = this.escapeAttribute(currentLabel);
                dialog.innerHTML = `
                    <div class="cap-edit-title">${this.t('capEditTitle')}<span>${this.t('capEditHint')}</span></div>
                    <input type="text" class="cap-edit-input" value="${safeLabel}">
                    <div class="cap-edit-actions">
                        <button type="button" class="btn-confirm">${this.t('confirmLabel')}</button>
                        <button type="button" class="btn-cancel">${this.t('cancelLabel')}</button>
                    </div>
                `;
                document.body.appendChild(dialog);
                const input = dialog.querySelector('.cap-edit-input');
                const confirmBtn = dialog.querySelector('.btn-confirm');
                const cancelBtn = dialog.querySelector('.btn-cancel');
                confirmBtn.textContent = this.t('confirmLabel');
                cancelBtn.textContent = this.t('cancelLabel');
                const submit = () => this.handleCapEditSubmit(key, input.value);
                confirmBtn.onclick = submit;
                cancelBtn.onclick = () => this.closeCapEditDialog();
                input.onkeydown = (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        submit();
                    } else if (e.key === 'Escape') {
                        e.preventDefault();
                        this.closeCapEditDialog();
                    }
                };
                const updateConfirmState = () => {
                    const trimmed = input.value.trim();
                    const isDelete = trimmed.length === 0;
                    confirmBtn.textContent = isDelete ? this.t('deleteLabel') : this.t('confirmLabel');
                    confirmBtn.classList.toggle('is-danger', isDelete);
                };
                input.addEventListener('input', updateConfirmState);
                setTimeout(() => {
                    input.focus();
                    updateConfirmState();
                }, 0);
                this.positionCapEditDialog(capEl);

                this.capEditOutsideHandler = (event) => {
                    if (!dialog.contains(event.target) && !(this.activeCapEditEl && this.activeCapEditEl.contains(event.target))) {
                        this.closeCapEditDialog();
                    }
                };
                document.addEventListener('mousedown', this.capEditOutsideHandler);
                this.capEditRepositionHandler = () => this.positionCapEditDialog(this.activeCapEditEl);
                window.addEventListener('resize', this.capEditRepositionHandler);
                window.addEventListener('scroll', this.capEditRepositionHandler, true);
            }
            positionCapEditDialog(capEl) {
                if (!this.capEditDialogEl || !capEl) return;
                const rect = capEl.getBoundingClientRect();
                const dialog = this.capEditDialogEl;
                const body = document.documentElement;
                const scrollY = window.scrollY || body.scrollTop;
                const scrollX = window.scrollX || body.scrollLeft;
                dialog.style.top = `${rect.bottom + scrollY + 8}px`;
                let left = rect.left + scrollX;
                const dialogWidth = dialog.offsetWidth || 220;
                const maxLeft = scrollX + body.clientWidth - dialogWidth - 12;
                left = Math.min(Math.max(left, scrollX + 12), maxLeft);
                dialog.style.left = `${left}px`;
            }
            closeCapEditDialog() {
                if (this.capEditOutsideHandler) {
                    document.removeEventListener('mousedown', this.capEditOutsideHandler);
                    this.capEditOutsideHandler = null;
                }
                if (this.capEditRepositionHandler) {
                    window.removeEventListener('resize', this.capEditRepositionHandler);
                    window.removeEventListener('scroll', this.capEditRepositionHandler, true);
                    this.capEditRepositionHandler = null;
                }
                if (this.capEditDialogEl && this.capEditDialogEl.parentNode) {
                    this.capEditDialogEl.parentNode.removeChild(this.capEditDialogEl);
                }
                if (this.activeCapEditEl) {
                    this.activeCapEditEl.classList.remove('cap-editing');
                }
                this.activeCapEditEl = null;
                this.activeCapEditKey = null;
            }
            handleCapEditSubmit(key, value) {
                const next = (value || '').trim();
                if (!next) {
                    if (this.deleteCapsuleKey(key)) {
                        this.closeCapEditDialog();
                    }
                    return;
                }
                const current = this.getTypeLabel(key) || '';
                if (current === next) {
                    this.closeCapEditDialog();
                    return;
                }
                this.renameCapsuleLabel(key, next);
                this.closeCapEditDialog();
            }
            renameCapsuleLabel(key, next) {
                const baseDef = this.baseCapsuleMap[key];
                if (baseDef) {
                    if (next === baseDef.label) {
                        delete this.capLabels[key];
                    } else {
                        this.capLabels[key] = next;
                    }
                }
                const custom = this.customTypes.find(c => c.key === key);
                if (custom) {
                    custom.label = next;
                }
                this.saveData();
                this.capsulesDirty = true;
                this.render();
                this.showToast(this.t('toastCapRenamed'));
            }
            deleteCapsuleKey(key) {
                if (this.baseCapsuleMap[key] && !this.removedCapsules.includes(key)) {
                    this.removedCapsules.push(key);
                } else {
                    const idx = this.customTypes.findIndex(def => def.key === key);
                    if (idx > -1) {
                        this.customTypes.splice(idx, 1);
                    }
                    delete this.optionsData[key];
                }
                this.resetDeck(key);
                delete this.capLabels[key];
                this.capsuleOrder = this.capsuleOrder.filter(k => k !== key);
                const referencesChanged = this.purgeTypeReferences(key);
                if (referencesChanged) {
                    this.pushHistory();
                }
                this.capsulesDirty = true;
                this.saveData();
                this.render();
                this.showToast(this.t('toastCapDeleted'));
                return true;
            }
            purgeTypeReferences(type) {
                let changed = false;
                const prevItems = this.items.length;
                this.items = this.items.filter(item => item.type !== type);
                if (this.items.length !== prevItems) {
                    changed = true;
                }
                let favoritesChanged = false;
                const nextFavs = [];
                this.favorites.forEach(fav => {
                    if (!Array.isArray(fav.items)) {
                        nextFavs.push(fav);
                        return;
                    }
                    const filtered = fav.items.filter(item => item.type !== type);
                    if (filtered.length !== fav.items.length) {
                        fav.items = filtered;
                        favoritesChanged = true;
                        changed = true;
                    }
                    if (fav.items.length === 0) {
                        favoritesChanged = true;
                        changed = true;
                        return;
                    }
                    nextFavs.push(fav);
                });
                if (favoritesChanged) {
                    this.favorites = nextFavs;
                    this.ensureFavoriteNames();
                    if (this.activeFavoriteId && !this.favorites.some(f => f.id === this.activeFavoriteId)) {
                        this.clearActiveFavoriteLabel();
                    }
                    this.latestFavoriteId = null;
                    this.dockDirty = true;
                }
                const prevHistoryLen = this.rollHistory.length;
                let rollHistoryMutated = false;
                this.rollHistory = this.rollHistory.filter(entry => {
                    if (!Array.isArray(entry.items)) return true;
                    const filtered = entry.items.filter(item => item.type !== type);
                    if (filtered.length !== entry.items.length) {
                        entry.items = filtered;
                        rollHistoryMutated = true;
                    }
                    return entry.items.length > 0;
                });
                if (rollHistoryMutated || this.rollHistory.length !== prevHistoryLen) {
                    changed = true;
                    this.dockDirty = true;
                }
                if (Array.isArray(this.history) && this.history.length) {
                    this.history = this.history
                        .map(snapshot => Array.isArray(snapshot) ? snapshot.filter(item => item.type !== type) : [])
                        .filter(snapshot => snapshot.length > 0);
                    this.historyIndex = Math.min(this.historyIndex, this.history.length - 1);
                }
                return changed;
            }
            openFavoriteEditDialog(favId, anchorEl) {
                const idx = this.favorites.findIndex(f => f.id === favId);
                if (idx === -1) return;
                const fav = this.favorites[idx];
                this.closeFavoriteEditDialog();
                if (!this.favEditDialogEl) {
                    this.favEditDialogEl = document.createElement('div');
                    this.favEditDialogEl.className = 'cap-edit-dialog';
                }
                const dialog = this.favEditDialogEl;
                const safeName = this.escapeAttribute(fav.name || '');
                dialog.innerHTML = `
                    <div class="cap-edit-title">${this.t('favEditTitle')}<span>${this.t('favEditHint')}</span></div>
                    <input type="text" class="cap-edit-input" value="${safeName}">
                    <div class="cap-edit-actions">
                        <button type="button" class="btn-confirm">${this.t('confirmLabel')}</button>
                        <button type="button" class="btn-cancel">${this.t('cancelLabel')}</button>
                    </div>
                `;
                document.body.appendChild(dialog);
                const input = dialog.querySelector('.cap-edit-input');
                const confirmBtn = dialog.querySelector('.btn-confirm');
                const cancelBtn = dialog.querySelector('.btn-cancel');
                const submit = () => this.handleFavoriteEditSubmit(input.value);
                confirmBtn.onclick = submit;
                cancelBtn.onclick = () => this.closeFavoriteEditDialog();
                input.onkeydown = (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        submit();
                    } else if (e.key === 'Escape') {
                        e.preventDefault();
                        this.closeFavoriteEditDialog();
                    }
                };
                const updateState = () => {
                    const trimmed = input.value.trim();
                    const isDelete = trimmed.length === 0;
                    confirmBtn.textContent = isDelete ? this.t('deleteLabel') : this.t('confirmLabel');
                    confirmBtn.classList.toggle('is-danger', isDelete);
                };
                input.addEventListener('input', updateState);
                setTimeout(() => {
                    input.focus();
                    input.select();
                    updateState();
                }, 0);
                this.activeFavEdit = { favId, anchor: anchorEl };
                this.positionFavoriteEditDialog(anchorEl);
                this.favEditOutsideHandler = (event) => {
                    if (!dialog.contains(event.target) && !(anchorEl && anchorEl.contains(event.target))) {
                        this.closeFavoriteEditDialog();
                    }
                };
                document.addEventListener('mousedown', this.favEditOutsideHandler);
                this.favEditRepositionHandler = () => this.positionFavoriteEditDialog(anchorEl);
                window.addEventListener('resize', this.favEditRepositionHandler);
                window.addEventListener('scroll', this.favEditRepositionHandler, true);
            }
            positionFavoriteEditDialog(anchorEl) {
                if (!this.favEditDialogEl || !anchorEl) return;
                const rect = anchorEl.getBoundingClientRect();
                const dialog = this.favEditDialogEl;
                const scrollY = window.scrollY || document.documentElement.scrollTop;
                const scrollX = window.scrollX || document.documentElement.scrollLeft;
                dialog.style.top = `${rect.bottom + scrollY + 8}px`;
                let left = rect.left + scrollX;
                const dialogWidth = dialog.offsetWidth || 220;
                const maxLeft = scrollX + document.documentElement.clientWidth - dialogWidth - 12;
                if (left < scrollX + 12) left = scrollX + 12;
                if (left > maxLeft) left = maxLeft;
                dialog.style.left = `${left}px`;
            }
            closeFavoriteEditDialog() {
                if (this.favEditOutsideHandler) {
                    document.removeEventListener('mousedown', this.favEditOutsideHandler);
                    this.favEditOutsideHandler = null;
                }
                if (this.favEditRepositionHandler) {
                    window.removeEventListener('resize', this.favEditRepositionHandler);
                    window.removeEventListener('scroll', this.favEditRepositionHandler, true);
                    this.favEditRepositionHandler = null;
                }
                if (this.favEditDialogEl && this.favEditDialogEl.parentNode) {
                    this.favEditDialogEl.parentNode.removeChild(this.favEditDialogEl);
                }
                this.activeFavEdit = null;
            }
            handleFavoriteEditSubmit(value) {
                if (!this.activeFavEdit) return;
                const idx = this.favorites.findIndex(f => f.id === this.activeFavEdit.favId);
                if (idx === -1) return;
                const trimmed = (value || '').trim();
                if (!trimmed) {
                    this.deleteFavorite(idx);
                    this.closeFavoriteEditDialog();
                    return;
                }
                this.renameFavorite(idx, trimmed);
                this.closeFavoriteEditDialog();
            }
            renameFavorite(idx, name) {
                if (idx < 0 || idx >= this.favorites.length) return;
                this.favorites[idx].name = name;
                this.saveData();
                this.renderDockList();
                if (this.favorites[idx].id === this.activeFavoriteId) {
                    this.activeFavoriteName = name;
                    this.updateActiveFavoriteLabel();
                }
                this.showToast(this.t('toastFavoriteRenamed'));
            }
            createFavoriteChip(fav, index) {
                const chip = this.el('div', 'fav-name-chip', `${fav.name || ''}`.trim());
                chip.draggable = true;
                chip.dataset.favId = fav.id;
                chip.dataset.dockId = `fav_${fav.id}`;
                if (Number.isFinite(index)) {
                    chip.dataset.favIndex = index;
                }
                const bg = this.isDarkTheme() ? (fav.darkColor || fav.color) : fav.color;
                if (bg) {
                    chip.style.backgroundColor = bg;
                }
                if (this.latestFavoriteId === fav.id) {
                    chip.classList.add('pop-in');
                    chip.addEventListener('animationend', () => chip.classList.remove('pop-in'), { once: true });
                }
                chip.onclick = () => {
                    if (chip.isLongPress) {
                        chip.isLongPress = false;
                        return;
                    }
                    if (chip.isDragging) {
                        chip.isDragging = false;
                        return;
                    }
                    this.applyFavorite(fav.id);
                };
                chip.addEventListener('dragstart', (e) => {
                    chip.classList.add('dragging');
                    chip.isDragging = true;
                    this.favoriteDragId = fav.id;
                    this.dragType = 'favorite';
                    if (e.dataTransfer) {
                        try {
                            e.dataTransfer.setData('text/plain', JSON.stringify({ source: 'favorite', id: fav.id }));
                        } catch (err) { }
                        e.dataTransfer.effectAllowed = 'copyMove';
                    }
                    document.body.classList.add('is-dragging');
                });
                chip.addEventListener('dragend', () => {
                    chip.classList.remove('dragging');
                    chip.isDragging = false;
                    this.favoriteDragId = null;
                    this.dragType = null;
                    document.body.classList.remove('is-dragging');
                    this.clearGapPreview();
                    if (this.favoriteGapPreview) this.favoriteGapPreview.clear();
                });
                this.addLongPress(chip, () => {
                    this.openFavoriteEditDialog(fav.id, chip);
                    if (navigator.vibrate) navigator.vibrate(50);
                }, 600);
                return chip;
            }
            createFavoriteGap(index, position) {
                const gap = this.el('div', 'fav-drop-zone');
                if (position) gap.classList.add(position);
                gap.dataset.favIndex = index;
                gap.ondragover = (e) => {
                    if (!this.favoriteDragId) return;
                    e.preventDefault();
                    gap.classList.add('drag-over-gap');
                    if (this.favoriteGapPreview) this.favoriteGapPreview.set(index);
                };
                gap.ondragleave = () => {
                    gap.classList.remove('drag-over-gap');
                    if (this.favoriteGapPreview) this.favoriteGapPreview.clear(index);
                };
                gap.ondrop = (e) => {
                    if (!this.favoriteDragId) return;
                    e.preventDefault();
                    gap.classList.remove('drag-over-gap');
                    if (this.favoriteGapPreview) this.favoriteGapPreview.clear();
                    this.handleFavoriteDrop(index);
                };
                if (this.favoriteGapPreview) this.favoriteGapPreview.registerGap(index, gap);
                return gap;
            }
            handleFavoriteDrop(insertIndex) {
                const sourceIdx = this.favorites.findIndex(f => f.id === this.favoriteDragId);
                if (sourceIdx === -1) return;
                const [moved] = this.favorites.splice(sourceIdx, 1);
                let targetIdx = insertIndex;
                if (sourceIdx < insertIndex) {
                    targetIdx = Math.max(0, insertIndex - 1);
                }
                targetIdx = Math.min(Math.max(targetIdx, 0), this.favorites.length);
                this.favorites.splice(targetIdx, 0, moved);
                this.favoriteDragId = null;
                this.saveData();
                this.renderDockList();
            }
            action(type) {
                const actions = {
                    generate: () => this.rollDice(),
                    fav: () => this.addToFavorites(),
                    reset: () => this.resetApp(),
                    export: () => this.exportJSON(),
                    import: () => this.importJSON()
                };
                if (actions[type]) actions[type]();
            }
            rollDice() {
                const btn = document.querySelector('.btn-gen');
                if (btn) {
                    btn.classList.remove('animating');
                    void btn.offsetWidth;
                    btn.classList.add('animating');
                    const icon = btn.querySelector('.dice-icon');
                    if (icon) {
                        icon.addEventListener('animationend', () => {
                            btn.classList.remove('animating');
                        }, { once: true });
                    }
                }
                this.generateValues(true);
                this.recordRollHistory();
                if (this.isAutoCopyEnabled) {
                    this.copyToClipboard({ toastMessage: this.t('toastPromptCopied') });
                }
            }
            recordRollHistory() {
                const prompt = this.generatePrompt();
                if (!prompt) return;
                const entry = {
                    id: Date.now(),
                    items: JSON.parse(JSON.stringify(this.items)),
                    text: prompt
                };
                this.rollHistory.unshift(entry);
                if (this.rollHistory.length > this.MAX_ROLL_HISTORY) {
                    this.rollHistory.pop();
                }
                this.saveData();
                this.renderDockList();
            }
            toggleAutoCopy(forceState) {
                const nextState = typeof forceState === 'boolean' ? forceState : !this.isAutoCopyEnabled;
                this.isAutoCopyEnabled = nextState;
                localStorage.setItem(this.AUTO_COPY_STORAGE_KEY, nextState ? '1' : '0');
                this.clearLegacyKeys(this.LEGACY_AUTO_COPY_KEYS);
                this.updateAutoCopyUI();
                this.showToast(nextState ? this.t('toastAutoCopyOn') : this.t('toastAutoCopyOff'));
            }
            updateAutoCopyUI() {
                const btn = document.querySelector('.btn-auto-copy');
                if (!btn) return;
                btn.classList.toggle('is-active', !!this.isAutoCopyEnabled);
                btn.setAttribute('aria-pressed', this.isAutoCopyEnabled ? 'true' : 'false');
            }
            copyToClipboard(opts = {}) {
                const { toastMessage = this.t('toastCopy') } = opts;
                const text = this.generatePrompt();
                if (!text) return;
                navigator.clipboard.writeText(text).then(() => {
                    if (toastMessage) {
                        this.showToast(toastMessage);
                    }
                });
            }
            copyFavorite(text) {
                if (!text) return;
                navigator.clipboard.writeText(text).then(() => this.showToast(this.t('toastCopyShort')));
            }
            clearAllStorage() {
                try {
                    localStorage.removeItem(this.THEME_KEY);
                    this.clearLegacyKeys(this.LEGACY_THEME_KEYS);
                    localStorage.removeItem(this.AUTO_COPY_STORAGE_KEY);
                    this.clearLegacyKeys(this.LEGACY_AUTO_COPY_KEYS);
                    localStorage.removeItem(this.LOCALE_KEY);
                    this.clearLegacyKeys(this.LEGACY_LOCALE_KEYS);
                } catch (err) {
                    console.warn('Failed to clear storage', err);
                }
                this.clearActiveFavoriteLabel();
            }
            resetApp() {
                if (!confirm(this.t('confirmReset'))) return;
                this.clearAllStorage();
                this.isAutoCopyEnabled = false;
                this.locale = 'en';
                document.documentElement.setAttribute('data-theme', 'dark');
                this.updateThemeIcon('dark');
                this.clearActiveFavoriteLabel();
                this.initDefaultData();
                this.pushHistory();
                this.updateAutoCopyUI();
                this.render();
                this.updateSettingsMenu();
                this.updateLanguageMenu();
                this.updateHelpContent();
                this.showToast(this.t('toastReset'));
            }
            exportJSON() {
                const data = this.buildStateSnapshot({ includeHistory: false });
                const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
                const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = "prompts.json"; a.click();
            }
            importJSON() {
                const input = document.createElement('input'); input.type = 'file'; input.accept = '.json';
                input.onchange = e => {
                    const reader = new FileReader();
                    reader.onload = ev => {
                        try {
                            const data = JSON.parse(ev.target.result);
                            this.applyImportedData(data);
                        } catch (err) { alert(this.t('importError') + err.message); }
                    };
                    reader.readAsText(e.target.files[0]);
                };
                input.click();
            }
            applyImportedData(payload) {
                if (!payload || typeof payload !== 'object') {
                    alert(this.t('importError') + 'Invalid file');
                    return;
                }
                if (!this.validateSchemaVersion(payload)) {
                    alert(this.t('importError') + 'Incompatible version');
                    return;
                }
                const hasFullState = Array.isArray(payload.items) || payload.optionsData;
                if (hasFullState) {
                    const sanitized = this.sanitizeFullStatePayload(payload);
                    if (!sanitized) {
                        alert(this.t('importError') + 'Invalid state');
                        return;
                    }
                    if (!confirm(this.t('confirmReset'))) return;
                    this.applyStatePayload(sanitized);
                    this.render();
                    this.updateSettingsMenu();
                    this.updateLanguageMenu();
                    this.updateHelpContent();
                    this.showToast(this.t('toastImportSuccess'));
                    return;
                }
                const partial = this.sanitizePartialImport(payload);
                if (!partial) {
                    alert(this.t('importError') + 'Invalid favorites data');
                    return;
                }
                if (partial.optionsData) {
                    Object.keys(partial.optionsData).forEach(key => {
                        this.optionsData[key] = this.sortOptionsList(partial.optionsData[key]);
                    });
                }
                this.customTypes = partial.customTypes;
                this.capLabels = partial.capLabels;
                this.favorites = partial.favorites;
                this.ensureFavoriteNames();
                this.repairMissingCapsules({ persist: false });
                this.syncCapsuleOrder();
                this.capsulesDirty = true;
                this.dockDirty = true;
                this.render();
                this.showToast(this.t('toastImportSuccess'));
            }
            updateFavButtonState() {
                const btn = document.querySelector('.btn-fav');
                if (!btn) return;
                const prompt = this.generatePrompt();
                const matchingFav = this.favorites.find(f => f.text === prompt && prompt !== "");
                const isMatch = !!matchingFav;
                btn.classList.toggle('is-active', isMatch);
                if (isMatch) {
                    this.activeFavoriteId = matchingFav.id;
                    this.activeFavoriteName = matchingFav.name || '';
                    this.skipFavoriteLabelClear = false;
                    this.updateActiveFavoriteLabel();
                } else if (this.activeFavoriteId || this.activeFavoriteName) {
                    this.clearActiveFavoriteLabel();
                }
            }
            addToFavorites() {
                const text = this.generatePrompt();
                if (!text) { alert(this.t('alertEmptyPrompt')); return; }
                const existingIdx = this.favorites.findIndex(f => f.text === text);
                if (existingIdx !== -1) {
                    this.deleteFavorite(existingIdx);
                    return;
                }
                const favItem = {
                    id: Date.now(),
                    name: this.generateFavoriteName(),
                    text: text,
                    items: JSON.parse(JSON.stringify(this.items))
                };
                this.ensureFavoriteColor(favItem);
                this.favorites.unshift(favItem);
                this.latestFavoriteId = favItem.id;
                this.saveData();
                this.switchDockTab('favorites');
                this.showToast(this.t('toastFavoritesAdded'));
                this.updateFavButtonState();
            }
            buildChipPreviewHTML(items = []) {
                if (!Array.isArray(items) || items.length === 0) {
                    return `<span class="history-summary">${this.t('emptyPromptPreview')}</span>`;
                }
                let chipsHtml = '';
                items.forEach((i, iIdx) => {
                    if (!i.value) return;
                    this.ensureItemColorPair(i);
                    const color = this.isDarkTheme() ? (i.darkColor || i.color) : i.color;
                    const safeColor = this.sanitizeColorValue(color);
                    let classNames = 'fav-chip';
                    if (i.linkNext && iIdx < items.length - 1) classNames += ' linked-left';
                    if (iIdx > 0 && items[iIdx - 1].linkNext) classNames += ' linked-right';
                    const styleAttr = safeColor ? ` style="background-color:${safeColor}"` : '';
                    chipsHtml += `<span class="${classNames}"${styleAttr}>${this.escapeHtml(i.value)}</span>`;
                });
                return chipsHtml || `<span class="history-summary">${this.t('emptyPromptPreview')}</span>`;
            }
            applyFavorite(favId) {
                this.closeFavoriteEditDialog();
                const fav = this.favorites.find(f => f.id === favId);
                if (!fav) return;

                this.items = JSON.parse(JSON.stringify(fav.items));
                this.activeFavoriteId = fav.id;
                this.activeFavoriteName = fav.name || '';
                this.skipFavoriteLabelClear = true;
                this.items.forEach(item => this.ensureItemColorPair(item));

                this.pushHistory();
                this.render();
                this.showToast(this.t('toastFavoriteApplied'));
                this.updateFavButtonState();
                this.updateActiveFavoriteLabel();
            }
            pushFavoriteUndo(entry) {
                if (!entry || !entry.favorite) return;
                if (!this.favoriteUndoStack) this.favoriteUndoStack = [];
                this.favoriteUndoStack.push(entry);
                if (this.favoriteUndoStack.length > (this.FAVORITE_UNDO_LIMIT || 10)) {
                    this.favoriteUndoStack.shift();
                }
            }
            undoFavoriteDeletion() {
                if (!this.favoriteUndoStack || this.favoriteUndoStack.length === 0) return false;
                const entry = this.favoriteUndoStack.pop();
                if (!entry || !entry.favorite) return false;
                const targetIndex = Math.min(Math.max(entry.index ?? this.favorites.length, 0), this.favorites.length);
                this.favorites.splice(targetIndex, 0, entry.favorite);
                this.saveData();
                this.renderDockList();
                this.updateFavButtonState();
                this.showToast(this.t('toastFavoriteRestored'));
                return true;
            }
            deleteFavorite(idx, options = {}) {
                if (idx < 0 || idx >= this.favorites.length) return;
                const { skipToast = false, recordUndo = true } = options;
                const removed = this.favorites[idx];
                if (!removed) return;
                const wasActive = removed.id === this.activeFavoriteId;
                const removedClone = JSON.parse(JSON.stringify(removed));
                this.favorites.splice(idx, 1);
                if (recordUndo) {
                    this.pushFavoriteUndo({ favorite: removedClone, index: idx });
                }
                this.saveData();
                if (this.favorites.length === 0) this.isDockDeleteMode = false;
                if (wasActive) {
                    this.clearActiveFavoriteLabel();
                }
                this.closeFavoriteEditDialog();
                this.renderDockList();
                this.updateFavButtonState();
                if (!skipToast) {
                    this.showToast(this.t('toastFavoriteDeleted'));
                }
                return removed;
            }
            deleteRollHistoryEntry(idx) {
                if (idx < 0 || idx >= this.rollHistory.length) return;
                this.rollHistory.splice(idx, 1);
                if (this.rollHistory.length === 0) this.isDockDeleteMode = false;
                this.saveData();
                this.renderDockList();
            }
            clearRollHistory() {
                if (!this.rollHistory.length) return;
                if (!confirm(this.t('confirmClearHistory'))) return;
                this.rollHistory = [];
                this.isDockDeleteMode = false;
                this.saveData();
                this.renderDockList();
                this.showToast(this.t('toastRollHistoryCleared'));
            }
            animateDockRemoval(itemEl, callback) {
                if (!itemEl) { callback?.(); return; }
                itemEl.classList.add('deleting');
                itemEl.addEventListener('animationend', () => {
                    callback?.();
                }, { once: true });
            }
            switchDockTab(tab) {
                this.activeDockTab = tab;
                if (tab === 'favorites') {
                    this.isDockDeleteMode = false;
                }
                this.renderDockList();
            }
            renderDockList() {
                this.closeFavoriteEditDialog();
                if (this.activeDockTab !== 'favorites' && this.activeDockTab !== 'history') {
                    this.activeDockTab = 'favorites';
                }
                const section = document.getElementById('dockSection');
                const list = document.getElementById('dockList');
                if (!section || !list) return;
                if (this.favoriteGapPreview) this.favoriteGapPreview.clear();
                this.dockDirty = false;
                const prevPositions = list.childElementCount ? this.captureDockPositions(list) : null;

                const favCount = document.getElementById('favCount');
                if (favCount) favCount.innerText = `(${this.favorites.length})`;
                const historyCount = document.getElementById('historyCount');
                if (historyCount) historyCount.innerText = `(${this.rollHistory.length})`;

                const hasFavorites = this.favorites.length > 0;
                const hasHistory = this.rollHistory.length > 0;
                section.classList.add('active');
                const tabs = section.querySelectorAll('.dock-tab');
                tabs.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === this.activeDockTab));
                const clearBtn = document.getElementById('dockClearHistory');
                if (clearBtn) {
                    if (this.activeDockTab === 'history') {
                        clearBtn.style.display = 'inline-flex';
                        clearBtn.disabled = !hasHistory;
                    } else {
                        clearBtn.style.display = 'none';
                    }
                }

                list.innerHTML = '';
                if (this.activeDockTab === 'history') {
                    this.renderRollHistoryList(list, hasHistory);
                } else {
                    this.renderFavoriteList(list, hasFavorites);
                }
                if (prevPositions) {
                    this.animateDockReflow(prevPositions);
                }
                this.updateDockTabLabels();
            }
            renderFavoriteList(list, hasFavorites) {
                if (!hasFavorites) {
                    list.innerHTML = `<div class="dock-empty">${this.t('favoritesEmpty')}</div>`;
                    this.latestFavoriteId = null;
                    if (this.favoriteGapPreview) this.favoriteGapPreview.reset();
                    return;
                }
                const board = document.createElement('div');
                board.className = 'fav-chip-board';

                if (this.favoriteGapPreview) this.favoriteGapPreview.reset();

                const appendGap = (index) => {
                    const isHead = index === 0;
                    const isTail = index === this.favorites.length;
                    const position = isHead ? 'head' : (isTail ? 'tail' : undefined);
                    board.appendChild(this.createFavoriteGap(index, position));
                };

                appendGap(0);
                this.favorites.forEach((fav, idx) => {
                    board.appendChild(this.createFavoriteChip(fav, idx));
                    appendGap(idx + 1);
                });

                list.appendChild(board);
                this.latestFavoriteId = null;
            }
            renderRollHistoryList(list, hasHistory) {
                if (!hasHistory) {
                    list.innerHTML = `<div class="dock-empty">${this.t('historyEmpty')}</div>`;
                    this.isDockDeleteMode = false;
                    return;
                }

                this.rollHistory.forEach((entry, idx) => {
                    const item = document.createElement('div');
                    item.className = 'history-item';
                    item.dataset.dockId = `roll_${entry.id}`;

                    const content = document.createElement('div');
                    content.className = 'fav-content';
                    const summaryText = (entry.text || '').trim();
                    if (summaryText) {
                        const summaryEl = document.createElement('span');
                        summaryEl.className = 'history-text';
                        summaryEl.textContent = summaryText;
                        content.appendChild(summaryEl);
                    } else {
                        content.innerHTML = this.buildChipPreviewHTML(entry.items || []);
                    }
                    item.appendChild(content);

                    const actions = document.createElement('div');
                    actions.className = 'fav-actions';
                    const copyBtn = document.createElement('div');
                    copyBtn.className = 'fav-btn';
                    copyBtn.innerHTML = ICON_COPY;
                    copyBtn.onclick = (event) => {
                        event.stopPropagation();
                        this.copyFavorite(entry.text || '');
                    };
                    actions.appendChild(copyBtn);
                    item.appendChild(actions);

                    item.onclick = () => {
                        this.items = JSON.parse(JSON.stringify(entry.items || []));
                        this.pushHistory();
                        this.render();
                        this.showToast(this.t('toastRollRestored'));
                    };

                    list.appendChild(item);
                });
            }
        }
        const app = new PromptManager();
