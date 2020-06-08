import { render, makeID } from "./libs.js";
import { section } from "./section-template.js";
import introduction from "./sections/introduction.js"
import tableOfContents from "./sections/tableOfContents.js"
import cost from "./sections/cost.js"
import earSavers from "./sections/earSavers.js"
import filtration from "./sections/filtration.js"
import laseringAndOrganizing from "./sections/laseringAndOrganizing.js"
import liability from "./sections/liability.js"
import materials from "./sections/materials.js"
import measuringAndCutting from "./sections/measuringAndCutting.js"
import process from "./sections/process.js"
import safeProduction from "./sections/safeProduction.js"
import safetyProtocols from "./sections/safetyProtocols.js"
import sanitizing from "./sections/sanitizing.js"
import theOlsonMask from "./sections/theOlsonMask.js"
import washingAndIroning from "./sections/washingAndIroning.js"
import sewing from "./sections/sewing.js"
import filter from "./sections/filter.js"
import noseBand from "./sections/noseBand.js"
import doubleSidedTape from "./sections/doubleSidedTape.js"


// place arguments for section routes here
const routes = {
  "introduction": introduction,
  "tableOfContents": tableOfContents,
  "theOlsonMask": theOlsonMask,
  "materials": materials,
  "cost": cost,
  "earSavers": earSavers,
  "filtration": filtration,
  "filter": filter,
  "noseBand": noseBand,
  "doubleSidedTape": doubleSidedTape,
  "laseringAndOrganizing": laseringAndOrganizing,
  "measuringAndCutting": measuringAndCutting,
  "sewing": sewing,
  "process": process,
  "safeProduction": safeProduction,
  "safetyProtocols": safetyProtocols,
  "sanitizing": sanitizing,
  "washingAndIroning": washingAndIroning,
  "liability": liability,
}

// call this with form `${root}/index.html?section=${name}`
function router(route) {
  route = route.split("=")[1];
  if (route in routes) {
    render(document.body, section(routes[route], makeID()));
  } else {
    document.body.innerHTML = "No such path exists."
  }
}

let currentRoute = window.location.href;
router(currentRoute);