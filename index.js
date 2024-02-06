import * as bootstrap from "bootstrap";

const DEBUG = false;
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

function handleCookie(cookiesOkay) {
    if (cookiesOkay) {
        setCookie("user_dark", ACTIVE_DARK, 7); // Cookie expires in 7 days
    }
}

async function showContent(force) {
    const overlayDiv = document.getElementById("overlayDiv");

    if (overlayDiv) {
        if (force) {
            overlayDiv.remove();
            window.scrollTo(0, 0);
        } else
            setTimeout(() => {
                if (contentLoaded) {
                    if (!DEBUG) window.scrollTo(0, 0);
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

function showToasts() {
    const toastElList = document.querySelectorAll(".toast");
    const toastList = [...toastElList].map(
        (toastEl) => new bootstrap.Toast(toastEl)
    );

    toastList.forEach((e) => e.show());
}

function finalizeContent() {
    // Slideshow
    //startSlideshow();
    //startCarousels()

    showToasts();
}

function main() {
    showContent(DEBUG);

    contentLoaded = true;
}

main();
