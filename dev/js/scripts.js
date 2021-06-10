//IMPORTS
import { gsap } from "gsap";
// import { MorphSVGPlugin} from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import {CustomWiggle} from "gsap/CustomWiggle";
// import { GSDevTools } from "gsap/GSDevTools";
// import {MotionPathPlugin} from "gsap/MotionPathPlugin";
// import {CustomEase} from "gsap/CustomEase";


//register Plugins
gsap.registerPlugin(DrawSVGPlugin);



//page ready listener
let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  //add tools
  //GSDevTools.create();

  /* add your code here */
  //Variables
  let mainTL = gsap.timeline({id:"main"});



  function init(){

  // hide tool

// gsap.set(["#shadow", "#bottomq"],{alpha:0});


  // INTRO BASE
    gsap.set("#cards", {transformOrigin: "50% 50%"});
    gsap.set("#r1", {transformOrigin: "50% 50%"});
    gsap.set("#mainh", {transformOrigin: "50% 50%"});


  }

  //Nested Timelines
  //***********  fadeInTL  ****************
  function fadeInTL(){
    let tl = gsap.timeline();

    // rectangles in

    tl.from ("#r1", {alpha:1, duration:2, rotation:360, ease:"bounce+=0.5", transformOrigin:"50% 50%"},"r1")
    .to("#r1", {alpha:0, transformOrigin:"50% 50%"})
    .from("#r2", {alpha:0, duration:0.6, ease:"expo"})
    .from("#r3", {alpha:0, duration:0.6,ease:"expo"})
    .from("#r4", {alpha:0, duration:0.6,ease:"expo"})
    .from("#r5", {alpha:0, duration:0.6, ease:"expo"})
    .from("#r6", {alpha:0, duration:0.6,ease:"expo"})
    .from("#shadow", {alpha:0, duration:1,ease:"expo"})

    // detials

    .from("#toph", {alpha:0, duration:.5, rotation:360, ease:"expo+=0.5", transformOrigin:"50% 50%"})
    .from("#bottomh", {alpha:0, duration:.5,rotation:360, ease:"expo+=0.5", transformOrigin:"50% 50%"})

    .from("#topq", {alpha:0, duration:1, ease:"expo+=0.5", transformOrigin:"50% 50%"})
    .from("#bottomq", {alpha:0, duration:1,ease:"expo+=0.5", transformOrigin:"50% 50%"})


    .from("#line1", {alpha:0, duration:.3,scale:0.2, ease:"expo", transformOrigin:"50% 50%"})
    .to("#line1", {duration:.3,scale:1, ease:"expo",transformOrigin:"50% 50%"})

    .from("#line2", {alpha:0, duration:.3,scale:0.2, ease:"expo", transformOrigin:"50% 50%"})
    .to("#line2", {duration:.3,scale:1, ease:"expo",transformOrigin:"50% 50%"})



    .from("#mainh", {alpha:0, duration:2,scale:0.2, ease:"expo+=0.5", transformOrigin:"50% 50%"})
    .to("#mainh", {duration:1,scale:1, ease:"expo",transformOrigin:"50% 50%"})

    .from("#h1", {alpha:0, duration:.3,scale:0.1, ease:"bounce", transformOrigin:"50% 50%"})
    .to("#h1", {duration:.1,scale:1, ease:"bounce",transformOrigin:"50% 50%"})

    .from("#h2", {alpha:0, duration:.1,scale:0.2, ease:"bounce", transformOrigin:"50% 50%"})
    .to("#h2", {duration:.1,scale:1, ease:"bounce",transformOrigin:"50% 50%"})

    .from("#h3", {alpha:0, duration:.1,scale:0.2, ease:"bounce", transformOrigin:"50% 50%"})
    .to("#h3", {duration:.1,scale:1, ease:"bounce",transformOrigin:"50% 50%"})


    ;
  }

//tl END
//     // return tl;
 
//       let tl = gsap.timeline();

//     // gsap.set ("line1", {drawSVG:"20% 80%"})

//     tl.from("line1", {duration:2, ease:"bounce", drawSVG:"100%"})
//     .to("line1", {duration:2,fill:"50% 50%"}, "-=1")
//     //tl END
//     // return tl;


//   //   return tl;
// ;



init();

//2. show content - prevents FOUC
gsap.set('#svg-container',{visibility:"visible"});

//3. BUILD Main timeline
mainTL
// .add(logomorphTL())
.add(fadeInTL())
// .add(DrawSVG())
// .add(liftOffTL())
// .add(flightTL(),"target")

;//tl END

//mainTL.play("target");



});//ready END
