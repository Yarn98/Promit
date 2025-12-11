# Promit – Advanced Prompt Builder

**Promit** is a modular, dice-driven prompt engineering tool designed for rapid iteration. By combining **Capsules** (categories) into **Chips** (keywords), you can build complex prompts that can be randomized, locked, and re-rolled instantly.

---

## 🎮 Controls & Interactions

### **Chips (The Keywords)**
*   **Click**: Opens the **Option Popover** to manually select a value.
*   **Long-Press (0.6s)**: **Inline Edit** mode. Modify the text directly in place without popups.
*   **Drag & Drop**: Reorder chips.
*   **Alt + Drag**: **Duplicate (Copy)** the chip to a new position.
*   **Alt + Scroll**: Rapidly **cycle through options** without opening the menu. (Width locks temporarily for stability).
*   **Drag to Trash**: Drop any chip (or **Linked Group**) into the trash icon (bottom-left) to delete it.

### **Bridges (Linking)**
*   **Click Gap**: Toggles between **Link** (No space) and **Unlink** (Comma + Space).
    *   **Unlinked (Default)**: Outputs `, ` between items.
    *   **Linked (Active)**: Outputs ` ` (space) and visually connects chips. Use this for phrases like `masterpiece` + `ultra quality`.

### **Capsules (Top Bar)**
*   **Click**: Adds a new chip to the end of the list.
*   **Drag**: Insert a new chip at a specific position.
*   **Long-Press (0.6s)**: **Inline Edit**. Rename the capsule directly in the list.

### **Favorites (Dock)**
*   **Click Star (Header)**: Save the current setup/prompt as a new Favorite.
*   **Click Favorite Item**: Load the entire preset (Replaces current board).
*   **Long-Press (0.6s)**: **Rename** the favorite chip directly.
*   **Drag Favorite to Editor**: Insert the *contents* of the favorite into the current board (Merges).
*   **Drag to Trash**: Drop a favorite onto the trash bin to **permanently delete** it.

### **History & Generation**
*   **Dice Button**: Rerolls all **Random (Dice)** chips. **Locked** chips stay unchanged.
*   **Arrows (< >)**: Undo / Redo history state.
*   **Auto-Copy**: If enabled, every roll automatically copies the prompt to your clipboard.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| **Ctrl + Drag** | **Move/Delete Single Chip** (Ignore Links) |
| **Ctrl + Z** | **Global Undo** (Moves, Edits, Deletions, Favorites) |
| **Ctrl + Y** / **Ctrl + Shift + Z** | Redo |
| **Alt + Drag** | Copy Chip |
| **Alt + Scroll** | Cycle Chip Options |
| **Space / Enter** | Confirm (in Dialogs) |
| **Esc** | Close Popover / Cancel Edit |

---

## 🛠 Features

*   **Smart Randomization**: Chips marked with 🎲 pick a random value from their capsule each roll. Chips marked with 🔒 keep their value.
*   **Linked Dragging**: Dragging a chip that is "Linked" to others will move the **entire chain** together.
*   **Theme Engine**: Built-in Light/Dark mode and Color Palette generator.
*   **Import/Export**: detailed JSON state management in Settings.
*   **PWA Ready**: Can be installed as a standalone app on supported browsers.

---

## 📦 Installation (Local)

Promit is a static web application. No build step is strictly required, but a local server is recommended for avoiding CORS issues with JSON data.

```bash
# Using Python
python -m http.server 8080

# Then open http://localhost:8080/index.html
```

or just visit my github io page.

```bash
https://banimayo.github.io/Promit/

```

## 📜 License

MIT License. Free to use and modify.
