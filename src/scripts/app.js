import Swiper from "swiper/dist/js/swiper.min.js";
import colors from "../styles/global_vars";

export default class App {
  constructor() {
    this._search = false;
  }

  initializeSwiper() {
    new Swiper(".swiper-container", {
      speed: 400,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        direction: "horizontal",
        clickable: true
      }
    });
  }

  handleSearchBtn(e) {
    const target = e.target;
    const searchInput = document.querySelector(".search-input-div");

    if (target.classList.contains("search-btn")) {
      const searchBtn = target.childNodes[0];
      if (!this._search) {
        searchBtn.style.color = colors.primary;
        searchInput.style.display = "block";
        this._search = true;
      } else {
        searchBtn.style.color = colors.headerText;
        searchInput.style.display = "none";
        this._search = false;
      }
    }
  }
}
