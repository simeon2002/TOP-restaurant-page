import { createElement } from "../utils/utils.js";

/**
 * Creates the home screen content dynamically. No page reload required
 * @param {HTMLElement} container element that contains all of the content
 */
export default function (container) {
  console.log(container);

  const homeBanner = createElement({ type: "div", classList: ["home-banner"] });
  console.log(homeBanner);

  const bannerTitle = createElement({
    type: "h1",
    classList: ["heading-primary", "banner__title"],
    textContent: "Authentic Italian, Made With Love",
  });

  const bannerDescription = createElement({
    type: "p",
    classList: ["banner__description"],
    textContent: "Fresh ingredients, timeless recipes, and the warmth of Italy — served right at your table",
  });

  const ctaBtn = createElement({
    type: "button",
    classList: ["btn", "cta-btn"],
    textContent: "View Menu",
  });

  homeBanner.append(bannerTitle, bannerDescription, ctaBtn);

  console.log(homeBanner);
  container.appendChild(homeBanner);
}
