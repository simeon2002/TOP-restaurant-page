import homeScreen from "../pages/home.js";

let contentContainer, navBtns;

const createElement = function ({ type, textContent, classList, eventType, eventHandler }) {
  const htmlEl = document.createElement(type);
  htmlEl.textContent = textContent ?? "";
  htmlEl.classList.add(...classList);
  eventType && htmlEl.addEventListener(eventType, eventHandler);

  return htmlEl;
};

/**
 * Switching screen on click event
 * @param {Event} e click event
 */
const switchScreen = function (state) {
  contentContainer.innerHTML = "";

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
      homeScreen(navBtns, contentContainer);
      break;
  }
};

const activateClickedBtn = function (btn) {
  navBtns.forEach(btn => btn.closest(".nav-item").classList.remove("active"));
  btn.closest(".nav-item").classList.add("active");
};

const createHandleNavBtnClicked = function (navButtons, contentCont) {
  contentContainer = contentCont;
  navBtns = navButtons;

  const handleNavBtnClicked = function (e) {
    const isCtaBtn = btn => btn.classList.contains("cta-btn");
    let btn = e.target.closest(".btn");

    if (isCtaBtn(btn)) {
      btn = document.querySelector('.btn[data-screen="menu"]');
    }

    // switch screen based on state
    const state = btn.dataset.screen;

    state && switchScreen(state);

    // make button active
    activateClickedBtn(btn);
  };

  return handleNavBtnClicked;
};

export { createElement, switchScreen, createHandleNavBtnClicked };
