import { ElementToString, createElement } from "../utils/utils.js";

const createStorySection = function () {
  const sectionStory = createElement({
    type: "section",
    classList: ["about__section", "section-story"],
  });

  sectionStory.append(
    createElement({
      type: "h2",
      textContent: "Our Story",
      classList: ["heading-secondary"],
    }),
    createElement({
      type: "p",
      textContent: "At Bella Tavola, we believe the best meals are the ones shared with good company.",
    }),
    createElement({
      type: "p",
      textContent:
        "Inspired by the traditional kitchens of Italy, our restaurant was created around a simple idea: serve honest Italian food made from quality ingredients and time-tested recipes.",
    }),
    createElement({
      type: "p",
      textContent: "From handmade pasta to carefully prepared classics, every dish is made to bring a little piece of Italy to your table.",
    }),
  );

  return sectionStory;
};

const createPhilosophySection = function () {
  const sectionPhilosophy = createElement({
    type: "section",
    classList: ["section-philosophy", "about__section"],
  });

  sectionPhilosophy.append(
    createElement({
      type: "h2",
      textContent: "Our Philosophy",
      classList: ["heading-secondary"],
    }),
    createElement({
      type: "p",
      textContent:
        "Good Italian food doesn't need to be complicated. We focus on fresh ingredients, simple recipes, and bold flavours — prepared with care and served in a warm, welcoming atmosphere.",
    }),
  );

  return sectionPhilosophy;
};

const createAddressContainer = function () {
  const addressContainer = createElement({
    type: "div",
    classList: ["address-container"],
  });

  const addressEl = createElement({
    type: "address",
    classList: ["address"],
  });

  addressEl.append(
    createElement({
      type: "h3",
      textContent: "Bella Tavola",
      classList: ["address-title", "about-title"],
    }),
    createElement({
      type: "p",
      textContent: "Via Roma 24",
    }),
    createElement({
      type: "p",
      textContent: "Florence, Italy",
    }),
  );

  addressContainer.append(addressEl);

  return addressContainer;
};

const createWorkingHoursEl = function (startDay, endDay, openingHours, closingHours) {
  const time1 = createElement({
    type: "time",
    textContent: `${openingHours}`,
  });
  time1.setAttribute("datetime", `${openingHours}`);

  const time2 = createElement({
    type: "time",
    textContent: `${closingHours}`,
  });
  time2.setAttribute("datetime", `${closingHours}`);

  const workingHoursEl = createElement({
    type: "p",
    innerHtml: `${startDay} - ${endDay}: ${ElementToString(time1)} - ${ElementToString(time2)}`,
  });

  return workingHoursEl;
};

const createHoursContainer = function () {
  const hoursContainer = createElement({
    type: "div",
    classList: ["hours-container"],
  });

  const workingHours1 = createWorkingHoursEl("Monday", "Thursday", "12:00", "22:00");
  const workingHours2 = createWorkingHoursEl("Friday", "Sunday", "12:00", "23:00");

  hoursContainer.append(
    createElement({
      type: "h3",
      classList: ["hours-title", "about-title"],
      textContent: "Opening Hours:",
    }),
    workingHours1,
    workingHours2,
  );

  return hoursContainer;
};

const createContactContainer = function () {
  // <div class="contact-container">
  //   <h3 class="contact-title about-title">Contact Details</h3>
  //   <address class="contact-details">
  //     <p class="phone-number">Phone: +39 055 123 4567</p>
  //     <p class="email">Email: hello@bellatavola.it</p>
  //   </address>
  // </div>;

  const contactContainer = createElement({
    type: "div",
    classList: ["contact-container"],
  });

  const title = createElement({
    type: "h3",
    classList: ["contact-title", "about-title"],
    textContent: "Contact Details",
  });

  const contactDetails = createElement({
    type: "address",
    classList: ["contact-details"],
  });

  const phoneNumber = createElement({
    type: "p",
    classList: ["phone-number"],
    textContent: "Phone: +39 055 123 4567",
  });

  const email = createElement({
    type: "p",
    classList: ["email"],
    textContent: "Email: hello@bellatavola.it",
  });

  contactDetails.append(phoneNumber, email);
  contactContainer.append(title, contactDetails);

  return contactContainer;
};

const createAddressSection = function () {
  const sectionAddress = createElement({
    type: "section",
    classList: ["section-address", "about__section"],
  });

  const title = createElement({
    type: "h2",
    classList: ["heading-secondary"],
    textContent: "Visit Us",
  });

  const addressContainer = createAddressContainer();

  const hoursContainer = createHoursContainer();

  const contactContainer = createContactContainer();

  sectionAddress.append(title, addressContainer, hoursContainer, contactContainer);

  return sectionAddress;
};

export default function (container) {
  const aboutTitle = createElement({
    type: "h1",
    textContent: "About Us",
    classList: ["heading-primary", "about-title"],
  });

  const sectionStory = createStorySection();

  const sectionPhilosophy = createPhilosophySection();

  const sectionAddress = createAddressSection();

  container.append(aboutTitle, sectionStory, sectionPhilosophy, sectionAddress);
}

/**
 *
 */
