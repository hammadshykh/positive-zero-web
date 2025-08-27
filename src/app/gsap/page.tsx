"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

export default function GsapDemoPage() {
 const containerRef = useRef<HTMLDivElement>(null);
 const boxesRef = useRef<HTMLDivElement[]>([]);

 // Add boxes to ref array
 const addToBoxesRef = (el: HTMLDivElement | null) => {
  if (el && !boxesRef.current.includes(el)) {
   boxesRef.current.push(el);
  }
 };

 useEffect(() => {
  // Check if boxes are available
  if (boxesRef.current.length === 0 || !containerRef.current) return;

  const ctx = gsap.context(() => {
   // Set initial states - only first box visible
   gsap.set(boxesRef.current, { opacity: 0 });
   gsap.set(boxesRef.current[0], { opacity: 1, x: 0 });

   // Animation timeline for sequential box transitions
   const tl = gsap.timeline({
    scrollTrigger: {
     trigger: containerRef.current,
     start: "top top",
     end: "+=3000",
     scrub: true,
     pin: true,
     markers: true, // Add markers for debugging
     pinSpacing: false,
    },
   });

   // Box 2 enters from right
   tl
    .to(
     boxesRef.current[1],
     {
      x: "0%",
      opacity: 1,
      duration: 2,
     },
     "+=0.5"
    )

    // Box 1 exits left, Box 3 enters from left
    .to(
     boxesRef.current[0],
     {
      x: "-100%",
      opacity: 0,
      duration: 2,
     },
     "<"
    )
    .to(
     boxesRef.current[2],
     {
      x: "0%",
      opacity: 1,
      duration: 2,
     },
     "<"
    )

    // Box 2 exits right, Box 4 enters from right
    .to(
     boxesRef.current[1],
     {
      x: "100%",
      opacity: 0,
      duration: 1,
     },
     "+=0.5"
    )
    .to(
     boxesRef.current[3],
     {
      x: "0%",
      opacity: 1,
      duration: 2,
     },
     "<"
    );
  }, containerRef);

  return () => ctx.revert();
 }, []);

 return (
  <div className="min-h-screen">
   <div
    ref={containerRef}
    className="relative w-screen h-screen overflow-hidden"
   >
    {/* Box 1 - Visible by default */}
    <div
     ref={addToBoxesRef}
     className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600"
    >
     <h2 className="text-6xl font-bold text-white">Box 1 - Default Visible</h2>
    </div>

    {/* Box 2 - Will slide in from right */}
    <div
     ref={addToBoxesRef}
     className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600"
    >
     <h2 className="text-6xl font-bold text-white">Box 2 - From Right</h2>
    </div>

    {/* Box 3 - Will slide in from left */}
    <div
     ref={addToBoxesRef}
     className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-600"
    >
     <h2 className="text-6xl font-bold text-white">Box 3 - From Left</h2>
    </div>

    {/* Box 4 - Will slide in from right */}
    <div
     ref={addToBoxesRef}
     className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-500 to-rose-600"
    >
     <h2 className="text-6xl font-bold text-white">Box 4 - From Right</h2>
    </div>
   </div>

   {/* Add some scrollable content to enable scrolling */}
   <div className="h-screen bg-gray-100 flex items-center justify-center">
    <p className="text-2xl">Keep scrolling down to see the animation</p>
   </div>
   <div className="h-screen bg-gray-200 flex items-center justify-center">
    <p className="text-2xl">Scroll back up to see the reverse animation</p>
   </div>
  </div>
 );
}
