(function () {

    const burgerButton = document.querySelector(".header__navigation__burger");
    const navWrapper = document.querySelector(".header__nav-wrapper");
    burgerButton.addEventListener('click', function () {
        burgerButton.classList.toggle("active");
        navWrapper.classList.toggle("active");
        document.body.classList.toggle("lock");
    })

    const navLinks = document.querySelectorAll(".navigation__link");

    navLinks.forEach((navLink) => {
        navLink.addEventListener('click', () => {
            if (burgerButton.classList.contains("active")) {
                burgerButton.classList.remove("active");
                navWrapper.classList.remove("active");
                document.body.classList.remove("lock");
            };
        });
    });

})();