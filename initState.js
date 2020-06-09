// import {
//   html,
//   render,
//   svg
// } from "https://cdn.jsdelivr.net/npm/lit-html@1.2.1/lit-html.js";

import { render, html, svg } from './uhtml.js';

function makeID() {
  return "id" + new Date().getTime();
}

function initState({
  view,
  id,
  props = {},
  initProps = {},
}) {
  if (!view) console.error("Must pass \"view\" to initState()");
  if (!id) console.error("Must pass \"id\" to initState()");
  // console.log("props", props, "init", initProps, "id", id);

  // ideally I could assign id here but right now it needs to be passed so I know where to check
  if (!id) id = makeID();

  function update(props) {
    const old = document.getElementById(id);
    const oldProps = JSON.parse(old.getAttribute("props"));
    const newProps = { ...oldProps, ...props };
    old.setAttribute("props", JSON.stringify(newProps));

    render(old, view(newProps));
    // render(view(newProps), old);
  }

  const old = document.getElementById(id);

  if (old) {
    // get old props and merge with these
    const oldProps = JSON.parse(old.getAttribute("props"));
    props = { ...oldProps, ...props };

    // shouldn't be necessary ?
    update(props);
  } else {
    props = { ...initProps, ...props };
  }

  return {
    update,
    mount: html`
    <div 
      id=${id} 
      props=${JSON.stringify(props)}>
      ${view(props)}
    </div>`,
  };
}

export {html, svg, render, initState, makeID};