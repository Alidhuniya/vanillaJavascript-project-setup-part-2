// imports

// navbar components
import { burger, toggleNav } from "./modules/home/nav.js";
// user profile
import { Info } from "./modules/home/profile.js";

// content
import { Content } from "./modules/home/content.js";

// footer
import { Footer } from "./modules/home/footer.js";

// Calling the function after click event occurs
burger.addEventListener("click", function () {
  toggleNav();
});

// profile.js component
const ali = new Info("alidhuniya", "19", "bhw", "hot", "south");
document.getElementById("info").innerHTML =
  ali.name +
  "<br />" +
  ali.age +
  "<br />" +
  ali.address +
  "<br />" +
  ali.weather +
  "<br />" +
  ali.direction +
  "<br />" +
  "<br />" +
  ali.direct();

// content.js

const cantent = document.getElementById("content1");
cantent.innerHTML = Content();

// footer.js

const claim = new Footer("All Right Reserverd 2020 - Ali Dhuniya");
const ftr = document.getElementById("footer");
ftr.innerHTML = claim.copyRight;
