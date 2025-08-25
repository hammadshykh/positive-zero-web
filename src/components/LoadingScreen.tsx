"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function LoadingScreen() {
 const [showLoader, setShowLoader] = useState(true);

 useEffect(() => {
  // prevent showing loader again if already visited
  const hasVisited = sessionStorage.getItem("hasVisited");
  if (hasVisited) {
   setShowLoader(false);
   return;
  }

  // GSAP animation timeline
  const tl = gsap.timeline({
   onComplete: () => {
    sessionStorage.setItem("hasVisited", "true");
    gsap.to(".loader", {
     duration: 1,
     opacity: 0,
     y: -100,
     ease: "power3.inOut",
     onComplete: () => setShowLoader(false),
    });
   },
  });

  tl
   .fromTo(
    ".loader-text",
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
   )
   .to(".loader-text", {
    scale: 1.2,
    duration: 0.8,
    yoyo: true,
    repeat: 1,
    ease: "power1.inOut",
   })
   .to(".loader-progress", {
    width: "100%",
    duration: 1.5,
    ease: "power3.inOut",
   });
 }, []);

 if (!showLoader) return null;

 return (
  <div className="loader fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary text-white">
   <h1 className="loader-text text-4xl md:text-5xl font-bold tracking-wider">
    DXB Asset Guard
   </h1>
   <div className="mt-6 w-40 h-1 bg-white/20 overflow-hidden rounded-full">
    <div className="loader-progress h-full bg-white w-0"></div>
   </div>
  </div>
 );
}
