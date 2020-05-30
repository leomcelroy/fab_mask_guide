import {
  html,
  render,
} from "https://cdn.jsdelivr.net/npm/lit-html@1.2.1/lit-html.js";


import {comp, comp2} from "./sections/section-template.js";
const target1 = document.getElementById("1");
const target2 = document.getElementById("2");

// new comp(target1);
render(comp2(), target1)
render(comp2(), target2)