const DEBUG = true;
let contentLoaded = false;

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
            overlayDiv.remove();
            window.scrollTo(0, 0);
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

function startCarousels() {
    const myCarouselElement = document.querySelector("#homeCarousel");

    const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 5000,
    });
}

function finalizeContent() {
    // Slideshow
    //startSlideshow();
    //startCarousels()
}

function main() {
    showContent(DEBUG);

    contentLoaded = true;
}

main();
