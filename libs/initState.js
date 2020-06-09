import { render, html, svg } from './uhtml.js';

function makeID() {
  return "id" + new Date().getTime();
}

function updateWindowLeos(id, newProps) {
  if (!window.leos) window.leos = {};
  window.leos[id] = newProps;
};

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
    const oldProps = window.leos[id];
    const newProps = { ...oldProps, ...props };

    updateWindowLeos(id, newProps);

    render(old, view(newProps));
  }

  const old = document.getElementById(id);

  if (old) {
    // get old props and merge with these
    const oldProps = window.leos[id];
    props = { ...oldProps, ...props };

    // shouldn't be necessary ?
    update(props);
  } else {
    props = { ...initProps, ...props };
  }

  updateWindowLeos(id, props);

  return {
    update,
    mount: html`
    <div 
      id=${id} 
      >
      ${view(props)}
    </div>`,
  };
}

export {html, svg, render, initState, makeID};