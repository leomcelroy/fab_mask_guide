const mainContent = `
Straps that go behind the ear are often the preferred design when there is frequent changing of the mask because accessing the back of one’s own head is hard for some people. However, ear fatigue is common and if the mask is uncomfortable someone is less likely to wear it when they need it. Fab@CIC’s solution has been to provide a strip of lycra fabric with every mask delivered, which the wearer can tie in a loop around the ear straps and displace the pressure from the backs of ears to around the head. Lycra can be cut in strips 1” wide and stretched so it curls up along its length. If it needs to be replaced after several washes, an old stretchy t-shirt can be cut up and used in the same way. 
<br/><br/>
<img class="center" src="${window.location.href.includes("leomcelroy") ? "https://leomcelroy.com/fab_mask_guide" : ".."}/assets/earLastic.png" alt="Picture of elastic ear saver.">
<br/>
Another popular solution is a 3D printed ear saver with hooks to attach the ear strap at various lengths. There are many designs for this that can be downloaded from Thingiverse. 3D printed ear savers work best when the hooks are sturdy and the band is flexible. This isn’t the most economical option but they are fun! Similarly, laser cut acrylic ear saver designs abound. 
<br/><br/>
<img class="center" src="${window.location.href.includes("leomcelroy") ? "https://leomcelroy.com/fab_mask_guide" : ".."}/assets/earStrap.png" alt="Picture of 3D printed ear saver.">
`

export default {
  title: "Ear Savers",
  mainContent,
  previous: { name: "previous", link: "filtration" },
  next: { name: "next", link: "safeProduction" }
}