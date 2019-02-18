import "../styles/index.scss";
import App from "./app";

const app = new App();
console.log("APP:", app);

document.addEventListener("DOMContentLoaded", () => {
  app.initializeSwiper();
});

document.addEventListener("click", e => app.handleSearchBtn(e));

console.log("webkit starter pack");
