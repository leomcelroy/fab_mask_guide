import { html, initState } from "../libs.js";

export function section(props, id) {
  // props
  const initProps = {
    showLongForm: false,
    makeHTML: "<b>Test</b>",
    title: "Section Title",
    mainContent: `This is a new thing in the place, \nplease go to a new line here`,
    longFormContent: `New line.`,
    documentsContent: `Describe the links.`,
    attachments: [{ name: "link-title", link: "https://www.google.com" }],
    video: "",
    previous: { name: "previous", link: "https://www.google.com" },
    next: { name: "next", link: "https://www.google.com" },
  };

  const makeHTML = (str) => {
    let temp = document.createElement("div");
    temp.innerHTML = str;
    return temp;
  };

  const view = (props) => html`
    <div class="title">${props.title}</div>
    <br />
    ${props.makeHTML
      ? html`
          <div class="section">
            ${makeHTML(props.makeHTML)}
          </div>
        `
      : ""}
    <div class="section">
      <b>Description</b> <br /><br />
      <div style="white-space: pre-wrap;">${props.mainContent}</div>
      <br />
      <a
        class="expand"
        onclick=${() => {
          update({ showLongForm: !props.showLongForm });
        }}
      >
        ${props.showLongForm ? "show less" : "show more"}
      </a>
      <br />
      ${props.showLongForm
        ? html`
            <div class="long-form" style="white-space: pre-wrap;">${props.longFormContent}</div>
          `
        : ""}
    </div>
    ${props.video !== ""
      ? html`
          <div class="section">
            <b>Video</b>
            <br /><br />
            <iframe
              src="${props.video}"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <br /><br />
          </div>
        `
      : ""}
    ${props.attachments.length > 0
      ? html`
          <div class="section">
            <b>Documents</b>
            <br /><br />
            ${props.documentsContent}
            <br /><br />
            ${props.attachments.map(
              (x) => html`
                <a target="_blank" href="${x.link}">
                  ${x.name}
                </a>
              `
            )}
          </div>
        `
      : ""}
    <div class="section links">
      <div id="backward-link">
        ←
        <a href=${props.previous.link} target="_blank">
          ${props.previous.name}
        </a>
      </div>
      <div id="forward-link">
        <a href=${props.next.link} target="_blank">
          ${props.next.name}
        </a>
        →
      </div>
    </div>
  `;

  const { update, mount } = initState({ view, props, initProps, id });

  return mount;
}
