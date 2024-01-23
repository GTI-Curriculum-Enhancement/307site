const DEBUG = true;
contentLoaded = false;

async function showContent(force) {
    const overlayDiv = document.getElementById("overlayDiv");

    if (overlayDiv) {
        if (force) {
            window.scrollTo(0, 0);
            overlayDiv.style.opacity = "0";
            overlayDiv.remove();
        } else
            setTimeout(() => {
                if (contentLoaded) {
                    window.scrollTo(0, 0);
                    overlayDiv.style.opacity = "0";

                    setTimeout(() => overlayDiv.remove(), 1000);
                } else showContent();
            }, 100);
    }
}

function main() {
    showContent();

    contentLoaded = true
}

main();