import {render} from "https://cdn.jsdelivr.net/npm/lit-html@1.2.1/lit-html.js";
import sectionTemplate from "./sections/section-template.js";

const target = document.body;

render(sectionTemplate({}), target);