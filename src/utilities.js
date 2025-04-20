// mobile menu toggle
const menuBtn = document.getElementById("mobile-menu-btn");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.contains("open")
    ? menuBtn.classList.remove("open")
    : menuBtn.classList.add("open");
});

// mobile sub-menu toggle
const subMenu = document.getElementById("sub-menu");
subMenu.addEventListener("click", function () {
  subMenu.classList.contains("open")
    ? subMenu.classList.remove("open")
    : subMenu.classList.add("open");
});

// navigating carosel
const leftBtn = document.getElementById("previous");
const rightBtn = document.getElementById("next");
const carosel = document.getElementById("carosel");

rightBtn.addEventListener("click", function () {
  const width = carosel.getElementsByTagName("div")[0].clientWidth; // takes the card width dynamically
  carosel.scrollLeft += width; // moves the carosel to the right by the card width
});
leftBtn.addEventListener("click", function () {
  const width = carosel.getElementsByTagName("div")[0].clientWidth; // takes the card width dynamically
  carosel.scrollLeft -= width; // moves the carosel to the left by the card width
});

// light-dark-toggle
const darkLightToggle = document.getElementById("dark-light");
darkLightToggle.addEventListener("click", function () {
  document.body.classList.contains("dark")
    ? document.body.classList.remove("dark")
    : document.body.classList.add("dark");
});
