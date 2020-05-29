const target = document.getElementById("domdiff-test");

let count = 0;

function handleIncrease() {
  count += 1;
  console.log(count);
  update();
}

function makeView(count) {

  var div = document.createElement("div");
  div.innerHTML = `<div>${count}</div><div>Same</div>`;

  div.addEventListener("click", () => {
    handleIncrease();
  })

  return div;
}

// re-render update
function update() {
  // new inside
  var children = target.children;
  var childrenArray = [];
  
  for (let child of children) {
    childrenArray.push(child);
  };
  
  // console.log("child nodes", childrenArray);
  // console.log("new child nodes", [makeView(count)]);

  // domdiff(
  //   parentNode,     // where changes happen
  //   parentNode.childNodes,   // Array of current items/nodes
  //   futureNodes    // Array of future items/nodes (returned)
  // );


  let diff = domdiff(target, childrenArray, [makeView(count)]);
  // console.log ("diff", diff);
};

// initial render
target.append(makeView(count));
