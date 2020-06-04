import { html, initState } from "./libs.js";

function make_href(path) {
  let current = window.location.href;
  let new_href = current.split("=");

  new_href[1] = path;

  return new_href.join("=");
}

export function section(props, id) {
  // props
  const initProps = {
    showLongForm: false,
    title: "",
    mainContent: "",
    longFormContent: "",
    tips: [],
    documentsContent: "",
    attachments: [],
    video: "",
    previous: {},
    next: {},
  };

  const makeHTML = (str) => {
    let temp = document.createElement("div");
    temp.innerHTML = str;
    return temp;
  };

  // <div style="white-space: pre-wrap;">${props.mainContent}</div>

  const view = (props) => html`
    <div class="title">${props.title}</div>
    ${props.mainContent ?
      html`
        <div class="section">
          ${makeHTML(props.mainContent)}
          ${props.longFormContent ?
            html`
              <a
                class="expand"
                onclick=${() => {
                  update({ showLongForm: !props.showLongForm });
                }}>
                ${props.showLongForm ? "show less" : "show more"}
              </a>
              ${props.showLongForm ? makeHTML(props.longFormContent) : ""}
            ` : ""
          }
        </div>
      `
      : ""
    }

    ${props.tips.length > 0 ?
      html`
      <div class="section">
        <b>Tips</b>
        <ul>
          ${props.tips.map( tip => html`<li>${tip}</li>`)}
        </ul>
      </div>
      ` : ""
    }
    
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
            <br/><br/>
            ${props.documentsContent ? 
              html`${props.documentsContent}<br/><br/>`
            : ""}
            ${props.attachments.map(
              (x) => html`
                <a target="_blank" href="${x.link}">
                  ${x.name}
                </a><br/>
              `
            )}
          </div>
        `
      : ""}
    <div class="section links">
      ${Object.keys(props.previous).length > 0 ? 
        html`
          <div id="backward-link">
            ←
            <a href=${make_href(props.previous.link)}>
              ${props.previous.name}
            </a>
          </div>
        ` : ""
      }
      ${Object.keys(props.next).length > 0 ? 
        html`
          <div id="forward-link">
            <a href=${make_href(props.next.link)}>
              ${props.next.name}
            </a>
            →
          </div>
        ` : ""
      }
    </div>
  `;

  const { update, mount } = initState({ view, props, initProps, id });

  return mount;
}
