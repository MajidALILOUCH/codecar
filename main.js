// nav

let overlay = document.querySelector(".overlay");
let ul = document.querySelector("header ul");
let close = document.querySelector(".close");
let ulLinks = document.querySelectorAll("header ul li a");
let toggler = document.querySelector(".toggle");

window.addEventListener("DOMContentLoaded", () => {
  document.body.style.visibility = "visible";
});

let openNav = () => {
  ul.classList.add("open");
  overlay.classList.add("active");
  document.body.style =
    "visibility: visible; height: 100vh; width: 100vw; overflow: hidden";
};

let closeNav = () => {
  ul.classList.remove("open");
  overlay.classList.remove("active");
  document.body.style =
    "visibility: visible; height: initial; width: 100%; overflow-x: hidden";
};

toggler.addEventListener("click", openNav);
close.addEventListener("click", closeNav);
overlay.addEventListener("click", closeNav);
// to close the nav when we click on a link because we want to see the section
ulLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

// products

let filterButtons = document.querySelectorAll(".filter-list .filter-btn");
let productItems = document.querySelectorAll(".product-list .product-item");

filterButtons.forEach(function (button) {
  button.onclick = function () {
    // remove active class from all buttons
    filterButtons.forEach(function (button) {
      button.classList.remove("active");
    });
    // add active class to the current one
    this.classList.add("active");
    // manage productItems
    productItems.forEach(function (item) {
      item.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((item) => {
      item.style.display = "block";
    });
  };
});
