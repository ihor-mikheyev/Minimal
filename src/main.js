function openMenu() {
  menu.classList.toggle("active");
  list.classList.toggle("showMenu");
}

const menu = document.querySelector(".menu-button");
const list = document.querySelector(".navigation__list");
menu.addEventListener("click", openMenu);
