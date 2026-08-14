import "./styles.css";

import { createHandleNavBtnClicked, switchScreen } from "./utils/utils.js";

const state = "home";
const navBtns = document.querySelectorAll(".nav-item .btn");
const ctaBtn = document.querySelector(".cta-btn");
const contentContainer = document.getElementById("content");
const handleNavBtnClicked = createHandleNavBtnClicked(navBtns, contentContainer);

navBtns.forEach(btn => btn.addEventListener("click", handleNavBtnClicked));

switchScreen("home");
