import "../styles/index.scss";
import App from "./app";

const app = new App();
console.log("APP:", app);

window.addEventListener("load", function() {
  app.initializeSwiper();
  app.initializeSwiperMobResponsive();
});

document
  .querySelector("#header")
  .addEventListener("click", e => app.handleHeaderClickEvent(e));

console.log("webkit starter pack");
