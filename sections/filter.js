const mainContent = `
<b>Our filter recommendation:</b> We recommend Halyard H600 sterilization wrap. 
<a href="https://products.halyardhealth.com/surgical-solutions/sterilization-solutions/sterilization-wraps/halyard-kimguard-one-step-sterilization-wrap.html">Halyard H600</a> 
is composed of Spunbond Meltblown Spunbond (SMS) polypropylene and is hydrophobic, meaning it repels water, including the droplets that the coronavirus likes to travel in. It is commonly used in hospitals to wrap surgical equipment. It comes in two sheets (blue and white) which are equivalent. Halyard H600 has undergone rigorous filter testing and is found to be 99% efficient at filtering particles (whereas the N95 is 95% efficient). It has not undergone rigorous breathability testing but recently has grown popular as an alternative mask material. A French study found that using two plies instead of one ply of Halyard material only increases the filtration capability by <1%. 
<br/><br/>
It is important to note that O&M Halyard (the manufacturer) does not endorse their product for off-label uses but it’s efficacy as a substitute mask material has been verified by the 
<a href="https://anest.ufl.edu/clinical-divisions/mask-alternative/frequently-asked-questions/">University of Florida Health Anesthesiology Department</a>, who is using the material to create masks. 
<br/><br/>
<b>Cleaning Halyard 600:</b> Place in a 165°F oven for 30 minutes. Do not wash.
<br/><br/>
<b>Alternative filter materials:</b> In addition to filter efficacy, breathability, clean ability/reusability, and professional validation there are some other non-obvious criteria to consider when choosing a filter insert. Peter Tsai, inventor of the N95 mask, recommends layering a hydrophobic material between two layers of fabric. This approach works well with the Olson mask. To test whether your material is hydrophobic or hydrophilic place a droplet of water onto it. If the water beads up your material is hydrophobic, if it spreads out it is hydrophilic. A hydrophobic filter layer prevents droplets that land on the outside of the mask from being wicked to the user's mouth.
<br/><br/>
As with many things Covid related, there is a significant amount of conflicting information available. For example, while Peter Tsai explicitly recommends against paper towels, the University of Hong Kong-Shenzhen Hospital and <a href="https://www.consumer.org.hk/ws_en/news/2020/covid-19-diymasks">Hong Kong Consumer Council</a> explicitly recommend the usage of layer paper towels. Some of our collaborators have had luck with non-fiberglass MERV filters which can be purchased from hardware stores. We highly recommend conducting your own research when choosing a filter medium as the data available may have changed. 
`;

const tips = [
  "Be careful with using HEPA filters (or don’t use them at all) as they often contain fiberglass which is harmful to breathe through.",
  "If you plan to seal your mask, verify your filter is breathable enough to prevent carbon dioxide (CO2) build-up inside your mask.",
  "Make sure you know how to clean the material without reducing its filtration capacity."
];

const documentsContent = ``;

const attachments = [
	{ name: "Attach PDF of Cut Sheet", link: "http://www.leomcelroy.com" },
	{ name: "Attach PDF of Inside", link: "http://www.leomcelroy.com" },
	{ name: "Attach PDF of Outside", link: "http://www.leomcelroy.com" },
	{ name: "Attach PDF of 3 Pieces", link: "http://www.leomcelroy.com" },
];

export default {
  title: "Filter Choice",
  mainContent,
  tips,
  // documentsContent,
  // attachments,
  previous: { name: "previous", link: "filtration" },
  next: { name: "next", link: "noseBand" },
};
