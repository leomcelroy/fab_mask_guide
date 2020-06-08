function make_href(path) {
  let current = window.location.href;
  let new_href = current.split("=");

  new_href[1] = path;

  return new_href.join("=");
}

const mainContent = `
It is expected that the nation will go through several phases of reopening and may possibly return to higher restrictions on physical proximity before this pandemic is completely over. Therefore, your fab lab should have a production setup that allows people to socially distance and to sanitize their work stations after each use. It’s equally important to encourage open communication with your members and mask makers to make sure everyone has the opportunity to voice questions and concerns, and ultimately climb on board with following the recommended safety protocols.
<br/><br/>
Anyone working in the fab lab should be prepared to follow the below safety protocols if necessary, even though officially recommended public safety measures may ease over time. We recommend printing these guidelines out and posting at the entrances to your lab. You might also consider having everyone who is participating in mask making sign their name on a print out to show they agree to follow the protocols. 

<ul>
  <li><a href="${make_href("safetyProtocols")}">Safety Protocols for Mask Production</a></li>
  <li><a href="${make_href("sanitizing")}">Sanitizing Masks for Delivery</a></li>
  <li><a href="${make_href("liability")}">Liability for your Fab Lab</a></li>
</ul>
`

export default {
  title: "Safe Production and Distribution Guidelines",
	mainContent,
  previous: { name: "previous", link: "earSavers" },
  next: { name: "next", link: "safetyProtocols" }
}