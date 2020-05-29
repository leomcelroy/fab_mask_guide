import { innerHTML } from 'https://diffhtml.org/es';


const target = document.getElementById("diffhtml-test");

let count = 0;

function handleIncrease() {
  count += 1;
  console.log(count);
  render();
}


function makeView(count) {

  var div = document.createElement("div");
  div.innerHTML = `<div style="background: ${count > 5 ? "blue" : "yellow"};">${count} no change <div>None at all</div></div>`; // just need to make new template with directives and event listeners

  div.addEventListener("click", () => {
    handleIncrease();
  })

  // return html`<div onclick=${handleIncrease}>${count} no change <div>None at all</div></div>`;
  return div;
}

// re-render update
function render() {
  innerHTML(target, makeView(count));
};

render();