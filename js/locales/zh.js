window.LOCALES = window.LOCALES || {};
window.LOCALES.zh = {
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
<li><strong>Ctrl + 拖动</strong> 可将连接的筹码单独分离移动或删除。</li>
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
<li>将筹码或<strong>胶囊</strong>拖到🗑删除区即可立刻移除。</li>
<li>长按胶囊约2秒可重命名。</li>
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
        popoverAddPlaceholder: '搜索或添加...',
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
        toastCapsuleExists: '⚠️ 胶囊已存在。',
        toastCapsuleAdded: '✅ 已添加新胶囊。',
        toastDataLoaded: '✅ 数据加载成功。',
        toastImportSuccess: '📥 收藏已导入。',
        errorIncompatibleData: '❌ 数据版本不兼容。',
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
        cancelLabel: '取消',
        newCapsuleTitle: '创建新胶囊',
        searchName: '名称',
        searchContent: '内容',
        paletteMono: '单色',
        palettePastel: '彩色',
        themeLabel: '主题',
        paletteLabel: '风格',
        confirmRestoreTitle: '恢复历史记录',
        confirmRestoreBody: '这将覆盖当前工作，确定要恢复此历史记录吗？',
        confirmApplyFavoriteTitle: '应用收藏',
        confirmApplyFavoriteBody: '这将覆盖当前工作，确定要应用此收藏吗？',
        dontShowAgain: "不再显示",
        searchPlaceholder: '搜索...',
        confirmUnload: "未保存的更改将会丢失。",
        btnSaveAndContinue: "保存并继续",
        btnDiscard: "不保存",
        confirmClearAllTitle: "清除所有",
        confirmClearAllBody: "要删除编辑器中的所有筹码吗？",
        confirmOpenFileTitle: "未保存的更改",
        confirmOpenFileBody: "未保存的更改（关键词、结构等）将会丢失。是否打开新文件？"
    }
};