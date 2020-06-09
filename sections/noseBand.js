const mainContent = `
There are quite a few options, ranging from pipe cleaners to metal wire. We recommend 16 gauge aluminum wire. If there’s a chance your masks will be delivered to a hospital, make sure to avoid steel wire as its magnetic properties can interfere with some hospital procedures. Wax coated string is an alternative used by the same clinicians who designed the Olson mask. 
<br/><br/>
Cut the pieces of wire to just under the length of the top of the mouth pieces, about 4”. Use wire pliers to bend back the tips so they don’t scratch or pierce the fabric. Insert the wire into the top of the pocket. Optionally, you can stitch a line under the wire to create a pocket to keep it from edging downwards.
<br/><br/>
<img class="center" src="${window.location.href.includes("leomcelroy") ? "https://leomcelroy.com/fab_mask_guide" : ".."}/assets/noseBand.png" alt="Picture of wire noseband.">
`;

const tips = [
  "If you’re adding a nose band to the mask, make sure to make note of it on the information sheet where materials are listed and instruct the wearer to shape it to the bridge of their nose."
];

export default {
  title: "Nose Band",
  mainContent,
  tips,
  previous: { name: "previous", link: "filter" },
  next: { name: "next", link: "doubleSidedTape" },
};
