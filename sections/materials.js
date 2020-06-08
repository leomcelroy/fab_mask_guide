const mainContent = `
<b>Consumables for the basic Olson mask</b>
<br/>
<ul>
	<li>Cotton cloth</li>
	<li>Thread</li>
	<li>Elastic</li>
	<li>Ear saver ties</li>
	<li>Sewing needles</li>
</ul>

<b>Consumables for higher filtration performance</b>
<br/>
<ul>
	<li>Double-sided skin tape</li>
	<li>Nose band</li>
	<li>16 gauge craft wire</li>
	<li>Filter</li>
</ul>

<b>Fab lab tools and machines</b>
<br/>
<ul>
	<li>Laser cutter</li>
	<li>Sewing machine (as many sewing machines as daily sewers)</li>
	<li>Measuring tape</li>
	<li>Scissors / precision scissors for fabric (to match the number of sewing machines)</li>
	<li>Fabric cutter</li>
	<li>Sewing clips or pins</li>
</ul>

<b>Additional resources</b>
<br/>
<ul>
	<li>Washer/dryer (for as many people as will be washing / drying at a time)</li>
	<li>Ironing board + iron (for as many people as will be ironing at a time)</li>
</ul>
`

const longFormContent = `
<b>Consumables for the basic Olson mask:</b>
<br/><br/>
<b>Cotton cloth:</b> cotton can be purchased from fabric stores in bolts or in remnant pieces, or upcycled from bedsheets. 
For production at scale, it’s important to have the fabric in pieces of at least the size of your laser cutter bed in order to be able to layer the pieces and use a single file for cutting. In other words, recycled clothing is not ideal as it will come in diverse shapes and sizes. 
Using 100% cotton is important for general comfort and health of the wearer. Beware of fabric that appears to be cotton but has additional synthetic fibres. 
A “touch test” can usually reveal if fabric is not 100% cotton - the material will feel slightly stiff or rough. 
A “burn test” will also reveal synthetic materials. A synthetic material will  melt instead of burning.
A tight weave is important for better filtration of the mask. When holding a single ply of the material up to the light, there should be little to no “pin pricks” of light coming through the weave. 
Depending on the size of laser cutter, one yard of fabric that is 45” wide can make about 6 masks.
<br/><br/>
<b>Thread:</b> can be a blend of cotton and polyester or simply polyester. 
<br/><br/>
<b>Elastic:</b> thin strips of elastic band is preferable as it will cause less ear fatigue than thicker strips.
<br/><br/> 
Elastic supplies have been known to dry up during the coronavirus pandemic. Hair ties are a good alternative, although more expensive. The thinner and more flexible the hair tie, the more comfortable they will be around the ears. 
<br/><br/>
<b>Ear saver ties:</b> ear fatigue can happen when the elastic band is too tight around the back of the ears. To provide some relief to the ears and to adjust the mask for faces of different sizes, an additional stretchy tie or flexible strap can be attached to the ear bands and tied behind the head. There are many options for ear savers; Fab@CIC currently recommends lycra. 
<br/><br/>
<b>Sewing needles:</b> needles will break with regular use and will need to be replaced. We budget about one needle per sewer per day. 
<br/><br/>
<b>Consumables for higher filtration performance:</b> 
<br/><br/>
<b>Double-sided skin tape:</b> to create a seal around the nose and mouth of the wearer
This product ideally should be purchased by the wearer of the mask or their employer, such as a hospital, as it will be required each time the mask is meant to perform to higher filtration requirements. 
Fab@CIC does not have a recommended brand at this time. Some examples of this product include: ClingIt Double Sided Clothing Tape, Jsiton Fashion Tape. 
<br/><br/>
<b>Nose band:</b> to form the top of the mask to the bridge of the wearer’s nose
16 gauge craft wire is preferred; in a pinch, pipe cleaners can be used.
<br/><br/>
<b>Filter:</b> there are many hydrophobic products that could be used as an extra filtration layer (see subsequent section for a more detailed discussion). Fab@CIC has had success with Halyard H600, a sterilization wrap.  <a href="https://products.halyardhealth.com/surgical-solutions/sterilization-solutions/sterilization-wraps/halyard-kimguard-one-step-sterilization-wrap.html">Product Page</a>, <a href="https://www.usamedicalsurgical.com/halyard-health-one-step-sterilization-wrap-h600-fabric-heavy-duty/">Vendor</a>
`

export default {
  title: "Materials",
	mainContent,
	longFormContent,
  previous: { name: "previous", link: "theOlsonMask" },
  next: { name: "next", link: "cost" }
}