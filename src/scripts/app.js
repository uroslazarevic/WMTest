import Swiper from "swiper/dist/js/swiper.min.js";
import colors from "../styles/global_vars";

export default class App {
  constructor() {
    this._search = false;
    this._hamburger = false;
  }

  initializeSwiper() {
    new Swiper(".swiper-container", {
      speed: 300,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        direction: "horizontal",
        clickable: true
      }
    });
  }

  initializeSwiperMobResponsive() {
    const mySwiper = new Swiper(".swiper-container-mob-responsive", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

    document
      .querySelector(".swiper-button-next-altered")
      .addEventListener("click", () => {
        console.log("CLICK");
        mySwiper.slideNext(300, true);
      });

    document
      .querySelector(".swiper-button-prev-altered")
      .addEventListener("click", () => {
        console.log("CLICK");
        mySwiper.slidePrev(400, true);
      });
  }

  handleHeaderClickEvent(e) {
    const target = e.target;
    const searchInput = document.querySelector(".search-input-div");
    const mobileNav = document.querySelector(".nav-list-mob-size");
    const borderDiv = document.querySelector(".border-div");

    // Handle search-btn click
    if (target.classList.contains("search-btn")) {
      const searchBtn = target.childNodes[0];
      document.querySelector(".hamburger").className = "hamburger inactive-ham";
      borderDiv.style.display = "block";
      mobileNav.style.height = "0px";
      this._hamburger = false;

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

    // Handle mobile navigation
    if (target.classList.contains("hamburger")) {
      // Deactivate search-btn & search-input if active
      document.querySelector(".search-btn").childNodes[0].style.color =
        colors.headerText;
      searchInput.style.display = "none";
      this._search = false;
      console.log("TARGET:", target);

      if (!this._hamburger) {
        target.className = "hamburger active-ham";
        borderDiv.style.display = "none";
        mobileNav.style.height = "125px";
        this._hamburger = true;
      } else {
        target.className = "hamburger inactive-ham";
        borderDiv.style.display = "block";
        mobileNav.style.height = "0px";
        this._hamburger = false;
      }
    }
  }
}
