const mainContent = `
Your Fab Lab is trying to help people reduce the risk of infection but despite your good will, it’s possible that someone, somewhere could sue you over PPE they think caused harm, regardless of whether the masks were sold or donated. Based on pro-bono legal advice, we recommend distributing a flyer with the following disclaimer to every recipient or recipient institution. If possible, have the recipient sign the sheet to show they acknowledge the information. The following sample information sheet includes the disclaimer as well as other notes that will be useful to the wearer (please change the highlighted text to reflect your Fab Lab and situation).
`


const attachments = [
	{name:"Liability Handout", link:"https://docs.google.com/document/d/1JvGV_0yfJbRzRrUevyZUEUk5PpmFtSSY2dSVcDPINqU/edit?usp=sharing"}
]

export default {
  title: "Liability for your Fab Lab",
  mainContent,
  attachments,
  previous: { name: "previous", link: "sanitizing" },
  next: { name: "next", link: "introduction" }
}