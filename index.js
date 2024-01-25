const DEBUG = true;
contentLoaded = false;

window.onscroll = function () {
    if (window.scrollY <= sticky) navbar.classList.add("nav-up");
    else navbar.classList.remove("nav-up");
};

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        switchTheme(event.matches);
    });

var navbar = document.getElementById("head-menu");
var sticky = navbar.offsetTop;

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

                    setTimeout(() => {
                        overlayDiv.remove();
                        finalizeContent();
                    }, 1000);
                } else showContent();
            }, 100);
    }
}

function finalizeContent() {
    // Slideshow
    startSlideshow();
}

function main() {
    showContent();

    contentLoaded = true;
}

main();
