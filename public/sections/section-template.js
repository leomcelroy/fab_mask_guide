import {
  html,
  render,
} from "https://cdn.jsdelivr.net/npm/lit-html@1.2.1/lit-html.js";

const style = html`
  // wish this was scoped
  <style>
    video {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 420px;
      height: 300px;
    }

    iframe {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 420px;
      height: 300px;
    }

    .expand {
      position: absolute;
      right: 5%;
    }

    .expand:hover {
      color: purple;
    }

    .title {
      font-size: 30pt;
      width: 80%;
      margin: 10px;
      margin-left: auto;
      margin-right: auto;
    }

    .section {
      background: white;
      border: 3px solid black;
      padding: 10px;
      border-radius: 5px;
      width: 80%;
      margin: 10px;
      margin-left: auto;
      margin-right: auto;
    }

    .long-form {
      padding: 0px;
      margin: 0px;
      width: 100%;
    }

    .links {
      background: transparent;
      border: none;
    }

    #forward-link {
      float: right;
    }

    #backward-link {
      float: left;
    }
  </style>
`;

export class comp {
  constructor(target, props = {}) {
    // interior state
    this.target = target;
    this.showLongForm = false;

    // props
    const defaultProps = {
      title: "Section Title",
      mainContent: html` This is a new thing in the place <br />
        please go to a new line here`,
      longFormContent: html`New line.`,
      documentsContent: `Describe the links.`,
      attachments: [{ name: "link-title", link: "https://www.google.com" }],
      video: "",
      previous: { name: "previous", link: "https://www.google.com" },
      next: { name: "next", link: "https://www.google.com" },
    };

    this.props = { ...defaultProps, ...props };

    this.update();
  }

  update() {
    render(this.view(this.props), this.target);
  }

  handleShowLongform() {
    // how can this trigger a re-render
    this.showLongForm = !this.showLongForm;
    this.update();
  }

  view(props) {
    return html`
      ${style}
      <div class="title">${props.title}</div>
      <br />
      <div class="section">
        <b>Description</b> <br /><br />
        ${props.mainContent}
        <br />
        <a
          class="expand"
          @click=${() => {
            this.handleShowLongform();
          }}
        >
          ${this.showLongForm ? "show less" : "show more"}
        </a>
        <br />
        ${this.showLongForm
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
  }
}

export function comp2(props = {}) {
  // id
  const id = 'id' + (new Date()).getTime();

  // internal state
  let showLongForm = false;

  function handleShowLongform() {
    showLongForm = !showLongForm;

    update();
  }

  // props
  const defaultProps = {
    title: "Section Title",
    mainContent: html` This is a new thing in the place <br />
      please go to a new line here`,
    longFormContent: html`New line.`,
    documentsContent: `Describe the links.`,
    attachments: [{ name: "link-title", link: "https://www.google.com" }],
    video: "",
    previous: { name: "previous", link: "https://www.google.com" },
    next: { name: "next", link: "https://www.google.com" },
  };

  props = { ...defaultProps, ...props };

  const update = () => {
    let target = document.getElementById(id);
    render(view(props), target);
  };

  const view = (props) => html`
    ${style}
    <div class="title">${props.title}</div>
    <br />
    <div class="section">
      <b>Description</b> <br /><br />
      ${props.mainContent}
      <br />
      <a
        class="expand"
        @click=${() => {
          handleShowLongform();
        }}
      >
        ${showLongForm ? "show less" : "show more"}
      </a>
      <br />
      ${showLongForm
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

  return html`<div id=${id}>${view(props)}</div>`;
}
