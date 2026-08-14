import "./styles.css";

import { createHandleNavBtnClicked, switchScreen } from "./utils/utils.js";

const state = "home";
const navBtns = document.querySelectorAll(".nav-item .btn");
const contentContainer = document.getElementById("content");
const handleNavBtnClicked = createHandleNavBtnClicked(navBtns, contentContainer);

// set up nav button event listeners
navBtns.forEach(btn => btn.addEventListener("click", handleNavBtnClicked));

switchScreen("menu");
