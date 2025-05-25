const $ = document;
const hamburgerMenuBtn = $.querySelector(".hamburger-menu-btn");
const hamburgerMenuLine = $.querySelector(".hamburger-menu-btn__line");
const mobileMenu = $.querySelector(".mobile-menu");
const upArrowLink = $.querySelector(".arrow-up-link");
let isMobileMenuEnable = false;

hamburgerMenuBtn.addEventListener("click", () => {
  if (isMobileMenuEnable) {
    mobileMenu.classList.remove("mobile-menu--open");
    hamburgerMenuLine.classList.remove("hamburger-menu-btn__line--open");
    isMobileMenuEnable = false;
  } else {
    mobileMenu.classList.add("mobile-menu--open");
    hamburgerMenuLine.classList.add("hamburger-menu-btn__line--open");
    isMobileMenuEnable = true;
  }
});

upArrowLink.addEventListener("click", () => {
  window.scrollTo(0,0)
});
