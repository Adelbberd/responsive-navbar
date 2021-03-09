const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    // Used when a burger (menu) bar is click.
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");


        // delay the loading of each nav link
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.2}s`;
            }
        }); // End forEach

        burger.classList.toggle("toggle-burger");
    }); // End EventListener
}

navSlide();