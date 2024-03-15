menuButton = document.querySelector("nav:first-of-type ul li:nth-of-type(9)");
kruis = document.querySelector("header > nav:nth-of-type(2) img");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
menuButton.onclick = openMenu;
kruis.onclick = sluitMenu;
// stap 3: voeg in de functie een class toe aan de nav
function openMenu(){
  navigatie = document.querySelector("header > nav:nth-of-type(2)");
  navi = document.querySelector("nav:first-of-type");
  main = document.querySelector("main");


  navigatie.classList.toggle("toonMenu");
  navi.classList.toggle("borderbottom");
  main.classList.toggle("toonMenu2")
}


function sluitMenu(){
  navigatie.classList.remove("toonMenu");
  navi.classList.remove("borderbottom");
  main.classList.remove("toonMenu2")
}


/* bonus: menu sluiten met escape */
window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("header > nav:nth-of-type(2)");
    deNav.classList.remove("toonMenu");
  }
}

// const hamburger = document.querySelector("header nav div");
// const navMenu = document.querySelector("header nav ul");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//   hamburger.classList.remove("active");
//   navMenu.classList.remove("active");
// }))