import homeScreen from "../pages/home.js";

const createElement = function ({ type, textContent, classList }) {
  const htmlEl = document.createElement(type);
  htmlEl.textContent = textContent ?? "";
  htmlEl.classList.add(...classList);

  return htmlEl;
};

const createHandleNavBtnClicked = function (navBtns, contentContainer) {
  const activateClickedBtn = function (btn) {
    const isCtaBtn = btn => btn.classList.contains("cta-btn");
    //prettier-ignore
    if (isCtaBtn(btn)) {
    btn = document.querySelector('.btn[data-screen="menu"]');
    console.log(btn);
    }

    console.log(btn);

    navBtns.forEach(btn => btn.closest(".nav-item").classList.remove("active"));
    btn.closest(".nav-item").classList.add("active");
  };

  /**
   * Switching screen on click event
   * @param {Event} e click event
   */
  const switchScreen = function (state) {
    switch (state) {
      case "menu":
        // menuScreen();
        break;
      case "faq":
        // faqScreen();
        break;
      case "about":
        // aboutScreen();
        break;

      default:
        homeScreen(contentContainer);
        break;
    }
  };

  const handleNavBtnClicked = function (e) {
    const btnClicked = e.target.closest(".btn");

    // switch screen based on state
    const state = btnClicked.dataset.screen;
    state && switchScreen(state);

    // make button active
    activateClickedBtn(btnClicked);
  };

  return handleNavBtnClicked;
};

export { createElement, createHandleNavBtnClicked };
