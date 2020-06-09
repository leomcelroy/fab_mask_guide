const mainContent = `
Cutting the fabric prior to washing it makes it easier to handle. The first step is to know the dimensions of the laser bed that will be used to cut the masks and to map this onto the size of the fabric to come up with the most efficient way to cut fabric pieces. A lot of cotton fabric comes in bolts that are 44” or 45” wide. Let’s look at two examples of how you could cut the fabric:
<ul>
<li>If your laser cutter bed is 32” long (x axis) and 20” wide (y axis), you could cut your fabric at 33” inches and fold it in half to create a double layer that measures 33” by 22”. It’s a good idea to leave a margin of an inch or two around the border of your laser bed in case of unexpected shrinking or variation in cuts.</li>
<li>If your laser cutter bed is 24” long (x axis) and 14” wide (y axis), you could design a shorter cut file that is 22” long and cut the fabric at 29”, then fold in half widthwise and then length-wise, so that you have a four-layer piece that measures 22” by 14”.</li>
</ul>
As you’ll see further along, laser cutting fabric in layers is important for efficiency!
<br/><br/>
The diagram below depicts folding the material widthwise with the bottom side of the fabric inwards.
<br/>
<img class="center" src="../assets/roll.png" alt="Diagram depicting folding the material widthwise, bottom side of the fabric inwards.">
`

const tips = [
	"A very simple way to cut fabric is by making a 1” cut with a pair of scissors and then manually ripping. Because fabric rips along the grain, this will produce a straight and accurate cut! "
]

export default {
  title: "Measuring and Cutting",
	mainContent,
	tips,
  previous: { name: "previous", link: "process" },
  next: { name: "next", link: "washingAndIroning" }
}