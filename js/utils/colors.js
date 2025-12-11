const ColorUtils = {
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
    },
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
    },
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
    },
    parseHslString(str) {
        const match = str.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%/i);
        if (!match) return null;
        return {
            h: parseFloat(match[1]),
            s: parseFloat(match[2]),
            l: parseFloat(match[3])
        };
    },
    hslToString({ h, s, l }) {
        return `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    },
    clamp(value, min, max) {
        return Math.min(max, Math.max(min, value));
    },
    generatePastelColor() {
        const hue = Math.floor(Math.random() * 360);
        const saturation = 70 + Math.floor(Math.random() * 20);  
        const lightness = 85 + Math.floor(Math.random() * 10);   
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    },
    getSoftColor(index, palette) {
        if (!palette || !palette.length) return this.generatePastelColor();
        const hex = palette[index % palette.length];
        const hsl = this.hexToHsl(hex);
        if (!hsl) return hex;
        return this.hslToString({
            h: hsl.h,
            s: this.clamp(hsl.s, 0, 70),  
            l: 72
        });
    },
    isDarkTheme() {
        return (document.documentElement.getAttribute('data-theme') || 'dark') === 'dark';
    },
    createDarkVariant(color) {
        const hsl = this.parseColorToHsl(color);
        if (!hsl) return color;
        return this.hslToString({
            h: hsl.h,
            s: this.clamp(hsl.s - 15, 20, 60),  
            l: this.clamp(hsl.l - 60, 18, 28)   
        });
    },
    ensureItemColorPair(item) {
        if (!item) return;
        if (!item.color) {
            item.color = this.generatePastelColor();
        }
        item.darkColor = this.createDarkVariant(item.color);
    },
    getItemColor(item) {
        this.ensureItemColorPair(item);
        const isDark = this.isDarkTheme();
        const result = isDark ? (item.darkColor || item.color) : item.color;
        return result;
    },
    getThemeColor(itemOrColor) {
        const isDark = this.isDarkTheme();
        if (typeof itemOrColor === 'object' && itemOrColor !== null) {
            if (!itemOrColor.color) {
                itemOrColor.color = this.generatePastelColor();
            }
            if (isDark && itemOrColor.darkColor) {
                return itemOrColor.darkColor;
            }
            let hsl = this.parseColorToHsl(itemOrColor.color);
            if (!hsl) {
                return itemOrColor.color;  
            }
            if (isDark) {
                return this.hslToString({
                    h: hsl.h,
                    s: this.clamp(hsl.s - 15, 20, 60),
                    l: this.clamp(hsl.l - 60, 18, 28)  
                });
            } else {
                return this.hslToString({
                    h: hsl.h,
                    s: this.clamp(hsl.s, 0, 80),
                    l: this.clamp(hsl.l, 70, 95)
                });
            }
        }
        const baseColor = typeof itemOrColor === 'string' ? itemOrColor : null;
        if (!baseColor) {
            return this.generatePastelColor();
        }
        let hsl = this.parseColorToHsl(baseColor);
        if (!hsl) {
            hsl = { h: 0, s: 0, l: 75 };
        }
        if (isDark) {
            return this.hslToString({
                h: hsl.h,
                s: this.clamp(hsl.s, 0, 50),
                l: this.clamp(hsl.l - 45, 25, 40)
            });
        } else {
            return this.hslToString({
                h: hsl.h,
                s: this.clamp(hsl.s, 0, 60),
                l: this.clamp(hsl.l, 70, 95)
            });
        }
    },
    sanitizeColorValue(value) {
        if (typeof value !== 'string') return '';
        const trimmed = value.trim();
        return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(trimmed) ? trimmed : '';
    }
};