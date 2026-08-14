import homeScreen from "../pages/home.js";
import menuScreen from "../pages/menu.js";

let contentContainer, navBtns;

const createElement = function ({ type, textContent, classList, eventType, eventHandler }) {
  const htmlEl = document.createElement(type);
  htmlEl.textContent = textContent ?? "";
  classList && htmlEl.classList.add(...classList);
  eventType && htmlEl.addEventListener(eventType, eventHandler);

  return htmlEl;
};

/**
 * Switching screen on click event
 * @param {Event} e click event
 */
const switchScreen = function (state) {
  contentContainer.innerHTML = "";
  contentContainer.className = "";
  const animation = [
    { opacity: 0, transform: "translateY(40%)" },
    { opacity: 1, transform: "translateY(0)" },
  ];
  const animationTiming = { duration: 500, iterations: 1 };

  console.log(state === "menu");
  console.log(contentContainer.classList.contains("menu"));
  console.log(contentContainer.className);

  switch (state) {
    case "menu":
      menuScreen(contentContainer);

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

  contentContainer.animate(animation, animationTiming);
  contentContainer.classList.add(state);
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
