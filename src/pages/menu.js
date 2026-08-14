import { createElement } from "../utils/utils.js";

const menuItems = [
  {
    name: "starters",
    foodItems: [
      {
        name: "Bruschetta al Pomodoro",
        price: 8,
        description: "Toasted bread topped with fresh tomatoes, basil, garlic, and extra virgin olive oil.",
      },
      {
        name: "Burrata & Prosciutto",
        price: 13,
        description: "Creamy burrata served with prosciutto, cherry tomatoes, and fresh basil.",
      },
      {
        name: "Calamari Fritti",
        price: 12,
        description: "Crispy fried calamari served with lemon and a house-made garlic aioli.",
      },
    ],
  },
  {
    name: "Pasta",
    foodItems: [
      {
        name: "Spaghetti Carbonara",
        price: 16,
        description: "Spaghetti with guanciale, pecorino romano, egg yolk, and freshly cracked black pepper.",
      },
      {
        name: "Tagliatelle al Ragù",
        price: 17,
        description: "Fresh tagliatelle served with our slow-cooked beef and tomato ragù.",
      },
      {
        name: "Penne all'Arrabbiata",
        price: 14,
        description: "Penne tossed in a spicy tomato sauce with garlic, chilli, and fresh parsley.",
      },
    ],
  },
  {
    name: "Mains",
    foodItems: [
      {
        name: "Pollo alla Parmigiana",
        price: 19,
        description: "Breaded chicken breast with tomato sauce, mozzarella, parmesan, and roasted potatoes.",
      },
      {
        name: "Branzino al Limone",
        price: 23,
        description: "Pan-seared sea bass with lemon, herbs, seasonal vegetables, and olive oil.",
      },
      {
        name: "Bistecca alla Griglia",
        price: 26,
        description: "Grilled sirloin steak served with rosemary potatoes and a red wine reduction.",
      },
    ],
  },
  {
    name: "Desserts",
    foodItems: [
      {
        name: "Tiramisù",
        price: 8,
        description: "Espresso-soaked ladyfingers layered with mascarpone cream and cocoa.",
      },
      {
        name: "Panna Cotta",
        price: 7,
        description: "Classic vanilla panna cotta served with a seasonal berry coulis.",
      },
      {
        name: "Affogato",
        price: 6,
        description: "Vanilla gelato topped with a freshly brewed shot of espresso.",
      },
    ],
  },
];

export default function (container) {
  const pageTitle = createElement({ type: "h1", textContent: "Our Menu", classList: ["menu-title", "heading-primary"] });

  const menuDescription = createElement({
    type: "p",
    textContent: "Simple ingredients. Traditional recipes. Italian food made the way it should be.",
    classList: ["menu__desc"],
  });

  const menuCard = createElement({ type: "div", classList: ["menu-card"] });

  // create sections with food items
  const sections = createSections(menuItems);

  menuCard.append(...sections);
  container.append(pageTitle, menuDescription, menuCard);
}

const createFoodItems = function (items) {
  return items.map(createFoodItem);
};

const createFoodItem = function (item) {
  const itemEl = createElement({
    type: "li",
    classList: ["food-item"],
  });

  const titleAndPriceEl = createElement({
    type: "h3",
    classList: ["food-item__title-and-price"],
  });

  const titleEl = createElement({
    type: "span",
    classList: ["food-item__title"],
    textContent: item.name,
  });
  const separatorEl = createElement({
    type: "span",
    textContent: "—",
  });
  const priceEl = createElement({
    type: "span",
    classList: ["food-item__price"],
    textContent: `€${item.price}`,
  });

  titleAndPriceEl.append(titleEl, separatorEl, priceEl);

  const descEl = createElement({
    type: "p",
    classList: ["food-item__desc"],
    textContent: item.description,
  });

  itemEl.append(titleAndPriceEl, descEl);

  return itemEl;
};

const createSections = function (items) {
  return items.map(section => {
    const sectionName = section.name[0].toUpperCase() + section.name.slice(1);

    // section el
    const sectionEl = createElement({
      type: "section",
      classList: ["menu__section", "section"],
    });

    // section title
    const sectionTitleEl = createElement({
      type: "h2",
      classList: ["menu__title", "heading-secondary"],
      textContent: sectionName,
    });

    // section items
    const itemsListEl = createElement({
      type: "ul",
      classList: ["food-list"],
    });
    const itemsEl = createFoodItems(section.foodItems);

    // append children of section element.
    itemsListEl.append(...itemsEl);
    sectionEl.append(sectionTitleEl, itemsListEl);

    return sectionEl;
  });
};
