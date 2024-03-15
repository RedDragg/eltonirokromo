// JavaScript Document
console.log("hi");

/*search*/

var searchButton = document.querySelector ("header nav:first-of-type ul li:nth-of-type(3) a");
var searchForm = document.querySelector ("header form");
var sluitSearch = document.querySelector ("header form a");

searchButton.onclick = openSearch;
sluitSearch.onclick = closeSearch;

function openSearch () {
    searchForm.classList.add("toonSearch");
}

function closeSearch () {
    searchForm.classList.remove("toonSearch");
}

/*menu*/

var menuButton = document.querySelector ("header nav:first-of-type ul li:last-of-type a");
var navMenu = document.querySelector ("header nav:nth-of-type(2)");
var sluitMenu = document.querySelector ("header nav:nth-of-type(2) a:first-of-type");

menuButton.onclick = openMenu;
sluitMenu.onclick = closeMenu;

function openMenu () {
    navMenu.classList.add("toonMenu");
}

function closeMenu () {
    navMenu.classList.remove("toonMenu");
}

