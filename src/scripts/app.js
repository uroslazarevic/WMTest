import Swiper from "swiper/dist/js/swiper.min.js";
import styles from "../styles/index.scss";

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
    new Swiper(".swiper-container-mob-responsive", {
      speed: 300,
      navigation: {
        nextEl: ".swiper-button-next-altered",
        prevEl: ".swiper-button-prev-altered"
      }
    });
  }

  animateSearchInput() {
    const searchInput = document.querySelector(".search-input-div");
    const searchBtn = document.querySelector(".search-btn i");
    const primary = styles.primary;

    if (window.innerWidth > 768) {
      searchBtn.style.color = primary;
      searchInput.style.padding = "0px 33px 9px 30px";
      searchInput.style.height = "34px";
    } else {
      searchBtn.style.color = primary;
      searchInput.style.padding = "3px 22px 9px 22px";
      searchInput.style.height = "37px";
    }
  }

  disanimateSearchInput() {
    const searchInput = document.querySelector(".search-input-div");
    const searchBtn = document.querySelector(".search-btn i");
    const headerText = styles.headerText;

    if (window.innerWidth > 768) {
      searchInput.style.padding = "0px 33px 0px 30px";
    } else {
      searchInput.style.padding = "0px 22px 0px 22px";
    }
    searchBtn.style.color = headerText;
    searchInput.style.height = "0px";
  }

  animateMobileNav() {
    const mobileNav = document.querySelector(".nav-list-mob-size");
    const borderDiv = document.querySelector(".border-div");

    borderDiv.style.height = "0px";
    mobileNav.style.height = "125px";
  }

  disanimateMobileNav() {
    const mobileNav = document.querySelector(".nav-list-mob-size");
    const borderDiv = document.querySelector(".border-div");

    borderDiv.style.height = "8px";
    mobileNav.style.height = "0px";
  }

  handleHeaderClickEvent = e => {
    const target = e.target;

    // Handle search-btn click
    if (target.classList.contains("search-btn")) {
      document.querySelector(".hamburger").className = "hamburger inactive-ham";
      this.disanimateMobileNav();
      this._hamburger = false;

      if (!this._search) {
        this.animateSearchInput();
        this._search = true;
      } else {
        this.disanimateSearchInput();
        this._search = false;
      }
    }

    // Handle mobile navigation
    if (target.classList.contains("hamburger")) {
      // Deactivate search-btn & search-input if active
      this.disanimateSearchInput();
      this._search = false;

      if (!this._hamburger) {
        target.className = "hamburger active-ham";
        this.animateMobileNav();
        this._hamburger = true;
      } else {
        target.className = "hamburger inactive-ham";
        this.disanimateMobileNav();
        this._hamburger = false;
      }
    }
  };

  scrollOnTop(e) {
    const currPos = e.target.offsetTop;
    const top = document.body.scrollTop;
    let count = 0;
    let offset = 0;

    const scrollInterval = setInterval(function() {
      count += count < 700 ? 35 : 20;
      offset = currPos - count;
      document.body.scrollTop = currPos;
      window.scrollTo(0, offset);
      if (offset <= top) {
        clearInterval(scrollInterval);
      }
    }, 10);
  }
}
