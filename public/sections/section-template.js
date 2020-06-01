import {html, svg, render, initState, makeID} from "../libs.js";

export function section(props, id) {
  // props
  const initProps = {
    showLongForm: false,
    title: "Section Title",
    mainContent: `This is a new thing in the place <br />
      please go to a new line here`,
    longFormContent: html`New line.`,
    documentsContent: `Describe the links.`,
    attachments: [{ name: "link-title", link: "https://www.google.com" }],
    video: "",
    previous: { name: "previous", link: "https://www.google.com" },
    next: { name: "next", link: "https://www.google.com" },
  };

  const view = (props) => html`
    <div class="title">${props.title}</div>
    <br />
    <div class="section">
      <b>Description</b> <br /><br />
      ${props.mainContent}
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
            <div class="long-form">
              ${props.longFormContent}
            </div>
          `
        : ""}
    </div>
    <div class="section">
      <b>Video</b>
      <br /><br />
      <video controls type="video/mp4" src="./assets/sewingVid.mp4"></video>
      <br /><br />
      <iframe src="${props.video}" frameborder="0" allowfullscreen></iframe>
      <br /><br />
    </div>
    <div class="section">
      <b>Documents</b>
      <br /><br />
      ${props.documentsContent}
      <br /><br />
      ${props.attachments.map(
        (x) => html` <a target="_blank" href="${x.link}">
          ${x.name}
        </a>`
      )}
    </div>
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
