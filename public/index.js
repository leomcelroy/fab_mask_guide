import {html, svg, render, initState, makeID} from "./libs.js";
import {section} from "./sections/section-template.js";

render(document.body, section({}, makeID()));
