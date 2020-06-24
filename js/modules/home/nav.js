// Selection of HTML objects
export const burger = document.querySelector(".burger i");

export const nav = document.querySelector(".nav");

// Defining a function
export const toggleNav = () => {
  burger.classList.toggle("fa-bars");
  burger.classList.toggle("fa-times");
  nav.classList.toggle("nav-active");
};
