function make_href(path) {
  let current = window.location.href;
  let new_href = current.split("=");

  new_href[1] = path;

  return new_href.join("=");
}

const mainContent = `
<ul>
  <li><a href="${make_href("measuringAndCutting")}">Measuring and Cutting Fabric</a></li>
  <li><a href="${make_href("washingAndIroning")}">Washing and Ironing</a></li>
  <li><a href="${make_href("laseringAndOrganizing")}">Lasering and Organizing Sets</a></li>
  <li><a href="${make_href("sewing")}">Sewing Masks</a></li>
</ul>
`

export default {
  title: "The Process",
  mainContent,
  previous: { name: "previous", link: "cost" },
  next: { name: "next", link: "measuringAndCutting" }
}