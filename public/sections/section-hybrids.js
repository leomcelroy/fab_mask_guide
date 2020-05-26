import { html, define } from 'https://unpkg.com/hybrids/src';

function handleShowLongform(host) {
  host.showLongform = !host.showLongform;
};

const render = ({ showLongform }) => html`
  <style>
    video {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 420px;
      height: 300px;
    }

    .expand {
      position: absolute;
      right: 5%;

    }

    .expand:hover {
      color: purple;

    }

    .title {
      font-size: 30pt;
      width: 80%;
      margin: 10px;
      margin-left: auto;
      margin-right: auto;
    }

    .section {
      background: white;
      border: 3px solid black;
      padding: 10px;
      border-radius: 5px;
      width: 80%;
      margin: 10px;
      margin-left: auto;
      margin-right: auto;
    }

    .long-form {
      padding:0px;
      margin: 0px;
      width: 100%;
    }
  </style>
  <div class="title">Step Four: Sewing the Mask</div>
  <br/>
  <div class="section">
    <b>Description</b> <br/><br/>
    Sewing masks can be done at the fablab or at people’s homes. If a crew will be working together at the fablab, it’s important to make sure the sewing stations are spaced out enough to practice social distancing. 
  <br/><br/>
    The most efficient way to sew a batch of masks is via the chain sewing method. The mask pieces are given to the sewer with each component type in a stack (as described in the previous step). The sewer performs each step of the sewing process on all the pieces in the stack, without cutting and trimming the thread in between. 
    <br/><br/>
    For example, hem all the cheek pieces, then hem all the mouth pieces, then connect the mouth pieces, etc.
    <br/>
    <a class="expand" onclick=${handleShowLongform}>${showLongform ? "show less" : "show more"}</a>
    <br/>
    ${showLongform && 
      html`
      <div class="long-form">
        Here is more info on the mask.
      </div>
      `
    }
  </div>
  <div class="section">
    <b>Video</b>
    <br/><br/>
    <video
      controls="controls" 
      src="./assets/sewingVid.mp4">
    </video>
    <br/><br/>
  </div>
  <div class="section">
    <b>Documents</b>
    <br/><br/>
    The following guide outlines how to sew an Olson mask using the chain sewing method as well as the slower, one-by-one method.
    <br/><br/>
    <a target="_blank" href="https://docs.google.com/document/d/1bBy4I5Xly3T6qQt2tH_GlZHGS9aj_1Ijl1JU4WKS2No/edit?usp=sharing">Link</a>
  </div>
`

const section = {
  showLongform: false,
  render
};

define('section-hybrids', section);