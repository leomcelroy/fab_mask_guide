function make_href(path) {
  let current = window.location.href;
  let new_href = current.split("=");

  new_href[1] = path;

  return new_href.join("=");
}

const mainContent = `
It’s important to make the distinction between respirators and surgical masks, which map to two modes of usage of the Olson mask. A respirator guarantees a certain level of protection (95% of particles greater than 0.3 microns in the case of N95s) by creating an airtight seal with the user’s face. This can be validated with a pressure test (conducted whenever the mask is donned) and with a more conclusive fit test (when the mask is worn under a hood while aerosolized particles are injected in). A surgical mask, on the other hand, is loose fitting and does not guarantee a specific level of filtration.
<br/><br/>
The Olson mask is intended to function as a surgical mask replacement but it can be upgraded to function more like a respirator (though we offer no filtration guarantee). The upgrade consists of a filter insert, a nose band, and a facial adhesive.
<ul>
  <li><a href="${make_href("filter")}">Filter</a></li>
  <li><a href="${make_href("noseBand")}">Nose Band</a></li>
  <li><a href="${make_href("doubleSidedTape")}">Double-Sided Tape</a></li>
</ul>
`


export default {
  title: "Achieving Higher Filtration Performance",
  mainContent,
  previous: { name: "previous", link: "sewing" },
  next: { name: "next", link: "earSavers" }
}