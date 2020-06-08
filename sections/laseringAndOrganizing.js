const mainContent = `
The first step to setting up your mask laser cutting operation is to profile your machine. This means determining what power and speed settings to use with the materials you’ve selected for your masks.
<br/><br/>
For high throughput you’ll be cutting multiple sheets of cloth at once. The sheets should be placed in alternating directions (top-side up then bottom-side up); this is done at the ironing step. Each pair of sheets will form mirrored pairs of components. This technique reduces sorting time because you’ll be cutting matched stacks of mask components. (See the diagram on the next page.) 
<br/><br/>
This also means you’ll want to set the speed and power profile to the maximum number of sheets that you can cut in your machine at one time. For a reference point, we used a 75W Epilog laser to cut 4 sheets at 100% power and 40% speed. We used the same machine to cut one sheet at 100% power and 90% speed.
<br/><br/>
After obtaining this profile make some cut-sheet patterns. Our preferred approach was to have a pattern for the front part of the mask (faces) and a pattern for the back (cheeks and mouths). This allowed us to mix and match fabrics while also minimizing the number of pieces in unmatched sets. We’ve provided our editable .svg and .pdf files for your reference, which you can adapt to the size of your laser bed. 
<br/><br/>
For the sake of efficiency we recommend counting your sets as you remove them from the laser cutter. We originally produced bundles of mask sets where each bundle contained the components for one full mask. We later found sewers often preferred and were more productive when provided with stacks of components. This was especially true when sewers used the highly effective chain sewing technique. Because of the alternating layers each stack will contain an even number of pieces where every two pieces form a pair. Make sure your stacks have the same number of pieces so a stack of outsides and a stack of insides form complete sets.
<br/><br/>
Add the appropriate number of ear loops or amount of elastic to each set of stacks (in our case we added two hair ties for each mask). Leave in stacks for the sewers to pick up or bag in Ziplock bags for distribution to home sewers.
<br/><br/>
[INSERT DIAGRAM]
`;

const tips = [
  "If you’re not already in the habit, we highly recommend cleaning your laser lens daily when running a mask production line. Otherwise, soot will build up quickly and diminish your laser’s ability to cut.",
  "Be sure to use the air compressor when cutting your fabric. Cotton can light on fire very easily and the compressor dramatically reduces the risk of fires.",
  "Because of the heightened risk of this material catching fire, the laser operator should always keep their eyes on the cut job.",
];

const documentsContent = `Laser cutter files have been provided with this toolkit. These files were made for a laser bed that is 32” x 20”, but you can edit them based on the size of your laser cutter. We’ve designed the files to have the outside (face) pieces all on one file, and the mouth and cheek pieces (inside) all on another file because our fabric stock tends to have designs that are better for either the outside or the inside.`;
const attachments = [
	{ name: "Attach PDF of Cut Sheet", link: "http://www.leomcelroy.com" },
	{ name: "Attach PDF of Inside", link: "http://www.leomcelroy.com" },
	{ name: "Attach PDF of Outside", link: "http://www.leomcelroy.com" },
	{ name: "Attach PDF of 3 Pieces", link: "http://www.leomcelroy.com" },
];

const video = "https://www.youtube.com/watch?v=rG38EFbZc_M";

export default {
  title: "Lasering and Organizing Sets",
  mainContent,
  tips,
  video,
  documentsContent,
  attachments,
  previous: { name: "previous", link: "washingAndIroning" },
  next: { name: "next", link: "sewing" },
};
