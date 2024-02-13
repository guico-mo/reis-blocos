const hamburger = document.querySelector(".hamburguer");
const nav = document.querySelector(".navig");
const navItems = document.querySelectorAll(".lista a");

hamburger.addEventListener("click", toggleNav);

// Adiciona um evento de clique para cada item da lista
navItems.forEach(item => {
  item.addEventListener("click", closeNav);
});

// Adiciona um ouvinte de eventos para fechar o menu ao tocar no botão (X) ou fora do menu
document.addEventListener("click", (event) => {
  const isHamburgerClicked = event.target.classList.contains("hamburger");
  const isNavClicked = nav.contains(event.target);

  if (isHamburgerClicked || isNavClicked) {
    toggleNav();
  } else {
    nav.classList.remove("active");
  }
});

// Impede a propagação do clique fora do menu
nav.addEventListener("click", (event) => {
  event.stopPropagation();
});

function toggleNav() {
  nav.classList.toggle("active");
}

function closeNav() {
  nav.classList.remove("active");
}
