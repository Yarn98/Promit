window.LOCALES = window.LOCALES || {};
window.LOCALES.ko = {
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
<li><strong>Ctrl + 드래그</strong>로 연결된 칩 중 하나만 따로 떼어내어 이동하거나 삭제할 수 있습니다.</li>
</ul>
<h3>2. 생성과 복사</h3>
<ul class="help-list">
<li>🎲 버튼은 랜덤 상태(🎲)인 칩만 굴려서 프롬프트를 만듭니다.</li>
<li><strong>Auto Copy</strong>를 켜두면 매번 자동으로 클립보드에 복사됩니다.</li>
</ul>
<h3>3. 즐겨찾기 & 기록 복구</h3>
<ul class="help-list">
<li>⭐ 즐겨찾기는 칩을 드래그해 원하는 위치에 끼워넣을 수 있는 프리셋이며, 탭하면 전체를 불러옵니다.</li>
<li>생성 기록이나 즐겨찾기를 <strong>드래그하여 에디터에 놓으면</strong> 복원되고, 🗑 <strong>휴지통에 넣으면 삭제</strong>됩니다.</li>
<li><span class="inline-key">Ctrl+Z / Ctrl+Shift+Z</span>로 칩 삭제, 이동, 즐겨찾기 관리 등 대부분의 작업을 되돌릴 수 있습니다.</li>
</ul>
<h3>4. 직관적인 편집</h3>
<ul class="help-list">
<li><strong>캡슐, 칩, 즐겨찾기</strong>를 길게 누르면(0.6초) 그 자리에서 바로 이름을 수정할 수 있습니다.</li>
<li>번거로운 팝업 없이 텍스트만 자연스럽게 수정하고 Enter를 누르세요.</li>
</ul>
<h3>5. 파일 저장·불러오기</h3>
<ul class="help-list">
<li><strong>파일 저장</strong>을 누르면 히스토리를 제외한 모든 데이터를 JSON으로 내보낼 수 있습니다.</li>
<li><strong>파일 열기</strong>는 이 앱에서 저장한 JSON을 다시 불러옵니다.</li>
</ul>`,
        chipEmptyState: '👆 상단의 캡슐을 클릭하거나 드래그하여 추가하세요',
        chipEmptyStateNoCapsules: '📂 JSON 파일을 불러오거나 여기에 끌어 놓으세요',
        favoritesEmpty: '즐겨찾기 없음',
        historyEmpty: '생성기록 없음',
        popoverRandom: '🎲 랜덤',
        popoverAddPlaceholder: '검색 또는 추가...',
        toastEmptyState: '⚠️ 저장할 칩이 없습니다',
        toastFavoritesAdded: '⭐ 즐겨찾기에 추가되었습니다',
        toastFavoriteExists: '⚠️ 이미 즐겨찾기에 있습니다',
        toastFavoriteApplied: '✅ 즐겨찾기가 적용되었습니다',
        toastFavoriteDeleted: '🗑️ 즐겨찾기가 삭제되었습니다',
        toastFavoriteRestored: '↩️ 즐겨찾기를 복원했습니다',
        toastRollRestored: '⏪ 생성기록을 복원했습니다',
        toastRollDeleted: '🗑️ 생성기록이 삭제되었습니다',
        toastCopy: '✅ 복사되었습니다',
        toastCopyShort: '✅ 복사 완료',
        toastAutoCopyOn: '⚡ 자동 복사 ON',
        toastAutoCopyOff: '✋ 자동 복사 OFF',
        toastReset: '🔄 모든 데이터가 초기화되었습니다',
        toastRollHistoryCleared: '🧹 생성기록을 모두 삭제했습니다',
        toastPromptCopied: '⚡ 프롬프트를 복사했습니다',
        toastFavoriteRenamed: '✏️ 즐겨찾기 이름을 변경했습니다',
        toastCapRenamed: '✏️ 캡슐 이름이 변경되었습니다',
        toastCapDeleted: '🗑️ 캡슐이 삭제되었습니다',
        toastCapsuleExists: '⚠️ 이미 존재하는 캡슐입니다',
        toastCapsuleAdded: '✅ 새 캡슐이 추가되었습니다',
        toastDataLoaded: '✅ 데이터를 성공적으로 불러왔습니다',
        toastImportSuccess: '⭐ 즐겨찾기를 불러왔습니다',
        errorIncompatibleData: '❌ 호환되지 않는 데이터 버전입니다',
        alertEmptyPrompt: '⚠️ 내용이 비어있습니다',
        confirmReset: '⚠️ 모든 데이터를 초기화할까요?',
        confirmClearHistory: '⚠️ 생성기록을 모두 삭제할까요?',
        newTagPrompt: '새로운 태그 이름:',
        dockDeleteBadge: '삭제 모드',
        settingsSave: '파일 저장',
        settingsOpen: '파일 열기',
        settingsReset: '앱 초기화',
        btnFavAria: '즐겨찾기 추가',
        btnGenerateAria: '굴리기 & 생성',
        btnCopyAria: '프롬프트 복사',
        btnPrevAria: '이전 기록',
        btnNextAria: '다음 기록',
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
        historyTab: '⏱ 생성기록',
        favoritesTab: '⭐ 즐겨찾기',
        favoriteNamePrefix: 'Fav',
        favEditTitle: '이름 변경',
        favEditHint: '(공백이면 삭제)',
        cancelLabel: '취소',
        newCapsuleTitle: '새 캡슐 생성',
        searchName: '이름',
        searchContent: '내용',
        paletteMono: '모노',
        palettePastel: '파스텔',
        themeLabel: '테마',
        paletteLabel: '스타일',
        confirmRestoreTitle: '생성기록 복원',
        confirmRestoreBody: '프롬프트를 사용할까요?',
        confirmApplyFavoriteTitle: '즐겨찾기 적용',
        confirmApplyFavoriteBody: '프롬프트를 사용할까요?',
        confirmLabel: '확인',
        cancelLabel: '취소',
        dontShowAgain: "다시 보지 않기",
        searchPlaceholder: '검색...',
        confirmUnload: "저장하지 않은 변경사항이 유실됩니다.",
        btnSaveAndContinue: "저장 후 계속",
        btnDiscard: "저장 안 함",
        confirmClearAllTitle: "전체 삭제",
        confirmClearAllBody: "에디터의 모든 칩을 삭제할까요?",
        confirmOpenFileTitle: "⚠️JSON 저장되지 않음",
        confirmOpenFileBody: "저장되지 않은 변경사항이 있습니다. 무시하고 불러올까요?"
    }
};