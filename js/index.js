const hamIco = document.getElementById("ham-ico");
const navItems = document.getElementById("nav-items");
const nav = document.getElementById("nav");
const navElem = document.querySelectorAll("#nav-el");

hamIco.addEventListener("click", () => {
  hamIco.classList.toggle("open");
  navItems.classList.toggle("show");
  navItems.classList.toggle("fadeIn-txt");
  nav.classList.toggle("fadeIn");
});
