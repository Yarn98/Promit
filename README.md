# Promit

Promit is a dice-driven prompt builder. Arrange keywords into capsules and chips so you can rapidly create and reuse countless combinations.

## Core Workflow

1. **Add chips from capsules**
   - Click or drag a capsule from the top toolbar to drop a chip onto the canvas.
   - Clicking a chip opens its option popover where you can add, remove, or pick values.
   - Long‑press a popover entry to inline edit or delete that option immediately.

2. **Edit & arrange chips**
   - Toggle each chip between 🎲 random and 🔒 locked by tapping the icon on its left.
   - Click the dotted bridge between chips to link/unlink them (switching between comma and space output).
   - Chips support drag & drop for reordering or inserting between other chips.
   - Drag a chip onto the trash zone to delete it.

3. **Roll & history**
   - The central 🎲 Generate button rolls only the chips marked as 🎲 and builds a fresh prompt.
   - Each roll is stored in history; click a history entry to restore that exact setup.
   - Shortcuts: `Ctrl+Z` steps backward, `Ctrl+Shift+Z` or `Ctrl+Y` steps forward through prompt history.

4. **Favorite presets**
   - Save the current layout as a favorite to create a preset chip.
   - Drag a favorite chip to insert parts of it, or click to load the full configuration.
   - Rename favorites by long‑pressing the favorite chip or clicking the inline `activeFavoriteLabel` at the top.

## Interaction Cheatsheet

| Action                  | How to use                                               |
| ----------------------- | -------------------------------------------------------- |
| Toggle random/locked    | Click the chip’s 🎲 / 🔒 icon                             |
| Toggle link             | Click the dotted line between chips                      |
| Inline edit popover     | Long‑press an option inside the popover                  |
| Rename/delete capsule   | Long‑press a capsule for ~2 seconds                      |
| Rename favorite         | Long‑press favorite chip or click the active label       |
| Restore from history    | Click a history entry                                   |
| Clear all history       | Trash button on the History tab                         |
| Keyboard shortcuts      | `Ctrl+Z`, `Ctrl+Shift+Z` / `Ctrl+Y`                      |

## Backup & Import

- JSON backups include `schemaVersion: 1` and `version: "Promit 1.0"`.
- Exporting `prompts.json` saves everything except roll history.
- Imports require the same schema version and pass through structure validation.
  - Full-state JSON replaces the entire app state (after confirmation).
  - Favorites-only JSON updates favorites, custom types, and capsule labels only.
- Need more keywords? Ask ChatGPT/Bard to produce a list that matches this JSON schema, then merge the result into `prompts.json` to quickly grow your library.

## Local Usage

```bash
# It’s a static file, but if you prefer a server:
python -m http.server 8080
# Then open http://localhost:8080/promit.html
# Load the bundled keywords via Settings → Open File → base_prompts.json
```

## Deployment

Since it’s pure HTML/JS/CSS, any static host works (GitHub Pages, Netlify, Cloudflare Pages, …).

1. Rename `promit.html` to `index.html`, or drop it at the root served path.
2. Keep the data-URI favicon in the `<head>` to show the dice icon automatically.
3. On GitHub Pages: Settings → Pages → Deploy from branch so the app lives at `https://{username}.github.io/{repo}/`.

## MIT License

```
MIT License

Copyright (c) 2024 Promit

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
