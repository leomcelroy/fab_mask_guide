const mainContent = `
Sewing masks can be done at the fablab or at people’s homes. If a crew will be working together at the fablab, it’s important to make sure the sewing stations are spaced out enough to practice social distancing. 
<br/><br/>
The most efficient way to sew a batch of masks is via the chain sewing method. The mask pieces are given to the sewist with each component type in a stack (as described in the previous step). The sewist performs each step of the sewing process on all the pieces in the stack, without cutting and trimming the thread in between. For example, hem all the cheek pieces in a stack, then hem all the mouth pieces, then attach all the mouth pieces, etc.
<br/><br/>
The attached guides outline how to sew an Olson mask using the chain sewing method as well as the slower, one-by-one method. 
`

const video = `
<video
controls="controls" 
src="./assets/Sewing.mp4">
</video>
<br />
`

{/* <iframe
src=""
frameborder="0"
allowfullscreen
></iframe>
<br /><br /> */}

export default {
  title: "Sewing Masks",
	mainContent,
	video,
	attachments: [
		{ name: "One-by-one Method", link: "https://docs.google.com/document/d/1iJztqCA-0DPrI06O9dHukfo5woGhnE1mJtAYpGCG4Ic/edit?usp=sharing" },
		{ name: "Turbo Method (Chain Sewing)", link: "https://docs.google.com/document/d/1sntsb8skqimdsK6fv746E5QccRscY-usHXW2cCKtK8w/edit?usp=sharing" }
	],
  previous: { name: "previous", link: "laseringAndOrganizing" },
  next: { name: "next", link: "filtration" }
}