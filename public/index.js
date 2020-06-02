import { render, makeID } from "./libs.js";
import { section } from "./sections/section-template.js";

// place arguments for section routes here
const routes = {
  "1": {
    makeHTML: "<b>Test 1</b>",
    mainContent: `This is where I will put all that rich content.`,
    next: { name: "next", link: "2" }
  },
  "2": {
    makeHTML: "<b>Test 2</b>",
    previous: { name: "previous", link: "1" }

  }
}

// call this with form `${root}/index.html?section=${name}`
window.router = function router(route) {
  route = route.split("=")[1];
  if (route in routes) {
    console.log("in")
    render(document.body, section(routes[route], makeID()));
  } else {
    document.body.innerHTML = "No such path exists."
  }
}

let currentRoute = window.location.href;

router(currentRoute);
// render(section({}, makeID()), document.body);
