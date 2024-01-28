let ACTIVE_DARK = false;
let toggle_switch;

function switchTheme(forceDark = false) {
    let doc = document.documentElement;
    toggle_switch = document.getElementById("theme-toggle-switch");

    if (forceDark) {
        if (ACTIVE_DARK) return;

        doc.setAttribute("data-bs-theme", "dark");
        toggle_switch.checked = ACTIVE_DARK = true;
        return;
    }

    toggle_switch.checked = ACTIVE_DARK = !ACTIVE_DARK;
    doc.setAttribute("data-bs-theme", ACTIVE_DARK ? "dark" : "light");
}

// Check for OS preferred theme
if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
)
    switchTheme(true);
