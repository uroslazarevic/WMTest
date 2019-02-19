import "../styles/index.scss";
import App from "./app";

const app = new App();

window.addEventListener("load", function() {
  app.initializeSwiper();
  app.initializeSwiperMobResponsive();
});

document
  .querySelector("#header")
  .addEventListener("click", app.handleHeaderClickEvent);

document
  .querySelector(".scroll-top-btn")
  .addEventListener("click", app.scrollOnTop);

console.log("webkit starter pack");
