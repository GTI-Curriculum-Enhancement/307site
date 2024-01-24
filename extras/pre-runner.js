let ACTIVE_DARK = false

function switchTheme(forceDark = false) {
    const elm = document.documentElement
    
    if (forceDark) {
        if (ACTIVE_DARK)
            return;

        elm.setAttribute("data-bs-theme", "")
        ACTIVE_DARK = true;
        return;
    }

    ACTIVE_DARK = !ACTIVE_DARK
    elm.setAttribute("data-bs-theme", ACTIVE_DARK ? "dark" : "light")
}

// Check for OS preferred theme
if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
)
    switchTheme(false, true);