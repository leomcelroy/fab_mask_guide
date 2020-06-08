function make_href(path) {
  let current = window.location.href;
  let new_href = current.split("=");

  new_href[1] = path;

  return new_href.join("=");
}

const mainContent = `
<ul>
<li><a href="${make_href("theOlsonMask")}">Introduction to Olson Mask</a></li>
<li><a href="${make_href("materials")}">Material Descriptions and Considerations</a></li>
<li><a href="${make_href("cost")}">Cost and Example Timetable</a></li>
<li><a href="${make_href("process")}">The Process</a><ul>
	<li><a href="${make_href("measuringAndCutting")}">Measuring and Cutting Fabric</a></li>
	<li><a href="${make_href("washingAndIroning")}">Washing and Ironing</a></li>
	<li><a href="${make_href("laseringAndOrganizing")}">Lasering and Organizing Sets</a></li>
	<li><a href="${make_href("sewing")}">Sewing Masks</a></li>
</ul></li>
<li>
	<a href="${make_href("filtration")}">Achieving Higher Filtration Performance (optional)</a>
	<ul>
		<li><a href="${make_href("filter")}">Filter</a></li>
		<li><a href="${make_href("noseBand")}">Nose Band</a></li>
		<li><a href="${make_href("doubleSidedTape")}">Double-Sided Tape</a></li>
	</ul>
</li>
<li><a href="${make_href("earSavers")}">Ear Savers</a></li>
<li><a href="${make_href("safeProduction")}">Safe Production and Distribution Guidelines</a><ul>
	<li><a href="${make_href("safetyProtocols")}">Safety Protocols for Mask Production</a></li>
	<li><a href="${make_href("sanitizing")}">Sanitizing masks for Delivery</a></li>
	<li><a href="${make_href("liability")}">Liability for your Fab Lab</a></li>
</ul></li>
</ul>
`

export default {
  title: "Table of Contents",
  mainContent,
  previous: { name: "previous", link: "introduction" },
  next: { name: "next", link: "theOlsonMask" }
}