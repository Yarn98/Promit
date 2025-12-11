const Utils = {
    el(tag, className, text) {
        const d = document.createElement(tag);
        if (className) d.className = className;
        if (text) d.innerText = text;
        return d;
    },
    escapeHtml(value) {
        if (value === null || value === undefined) return '';
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    },
    clamp(value, min, max) {
        return Math.min(max, Math.max(min, value));
    },
    escapeAttribute(value) {
        if (value === null || value === undefined) return '';
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;');
    },
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
    },
    isPlainObject(value) {
        return Object.prototype.toString.call(value) === '[object Object]';
    },
    cloneData(value, fallback) {
        try {
            return JSON.parse(JSON.stringify(value));
        } catch (err) {
            return fallback;
        }
    },
    addLongPress(el, action, duration) {
        let t;
        let isLong = false;
        const start = (e) => {
            if (e.type === 'mousedown' && e.button !== 0) return;
            isLong = false;
            t = setTimeout(() => {
                isLong = true;
                if (navigator.vibrate) navigator.vibrate(50);
                action();
            }, duration);
        };
        const end = (e) => {
            clearTimeout(t);
        };
        const onClick = (e) => {
            if (isLong) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
            isLong = false;
        };
        el.addEventListener('mousedown', start);
        el.addEventListener('touchstart', start, { passive: true });
        el.addEventListener('mouseup', end);
        el.addEventListener('touchend', end);
        el.addEventListener('mouseleave', end);
        el.addEventListener('dragstart', end);
        el.addEventListener('click', onClick, true);
    }
};
window.CommonUtils = Utils;