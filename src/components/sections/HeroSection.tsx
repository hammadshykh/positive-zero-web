"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "../layout/Header";
import { Separator } from "../ui/separator";

export default function HeroSection() {
 const heroRef = useRef<HTMLElement>(null);

 useGSAP(() => {
  // Animate bottom cards
  gsap.from(".bottom-cards > div", {
   scale: 0.7,
   opacity: 0,
   duration: 1.3,
   delay: 1,
   ease: "back.out(1.7)",
   stagger: 0.05,
  });
 }, []);

 useEffect(() => {
  const ctx = gsap.context(() => {
   const tl = gsap.timeline();

   tl
    .from(".hero-badge", {
     duration: 0.8,
     y: 30,
     opacity: 0,
     ease: "power3.out",
    })
    .from(
     ".hero-text",
     {
      duration: 1.2,
      y: 100,
      ease: "expo.out",
      stagger: 0.5,
     },
     "-=0.4"
    );
  }, heroRef);

  // ✅ GSAP parallax for background
  gsap.to(".hero-bg", {
   backgroundPosition: "50% 100%", // move background as you scroll
   ease: "none",
   scrollTrigger: {
    trigger: heroRef.current,
    start: "top top",
    end: "bottom top",
    scrub: true, // smooth sync with scroll
   },
  });

  return () => ctx.revert();
 }, []);

 return (
  <section
   ref={heroRef}
   className="relative min-h-[80vh] md:min-h-screen bg-cover bg-center bg-no-repeat pt-4 hero-bg flex flex-col justify-between"
   style={{
    backgroundImage: `linear-gradient(rgba(82, 0, 66, .2), rgba(0,0,0,1)), url('/positive-zero-hero-image.jpg')`,
    // backgroundAttachment: "fixed", // ✅ Parallax effect
   }}
  >
   {/* Header Navigation */}
   <Header />

   {/* Hero Content */}
   <div className="relative z-10 pb-10 md:pb-20">
    <div className="max-w-7xl mx-auto md:px-0 px-4">
     <div className="flex flex-col">
      {/* Main Headline */}
      <div className="hero-text">
       <h1 className="hero-title text-3xl font-raleway md:text-4xl lg:text-6xl  text-white leading-tight tracking-tighter mb-4">
        Empowering A New Energy Economy
       </h1>
      </div>
     </div>

     {/* Bottom Cards */}
     <div className="max-w-7xl mx-auto mt-4 bg-[#FFFFFF0D] backdrop-blur-xs py-4 px-8 md:p-6 rounded-3xl flex overflow-auto items-center md:justify-between justify-start md:px-40 space-x-8 md:space-x-20">
      {/* Card 1 */}
      <div className="bg-opacity-70  snap-center shrink-0 flex flex-col justify-center text-center max-w-40">
       <h3 className="text-white font-bold md:text-2xl  md:mb-3 mb-1.5">
        140 MWp
       </h3>
       <p className="text-white text-sm md:text-base leading-relaxed">
        Installed portfolio of distributed solar
       </p>
      </div>
      <div className=" h-14">
       <Separator orientation="vertical" className="bg-white" />
      </div>

      {/* Card 2 */}
      <div className="bg-opacity-70  snap-center shrink-0 flex flex-col justify-center text-center max-w-40">
       <h3 className="text-white font-bold md:text-2xl  md:mb-3 mb-1.5">
        100M kWh
       </h3>
       <p className="text-white text-sm md:text-base leading-relaxed">
        Energy <br /> saved
       </p>
      </div>
      <div className=" h-14">
       <Separator orientation="vertical" className="bg-white" />
      </div>

      {/* Card 3 */}
      <div className="bg-opacity-70  snap-center shrink-0 flex flex-col justify-center text-center max-w-40">
       <h3 className="text-white font-bold md:text-2xl text-lg md:mb-3 mb-1.5">
        200K Mt
       </h3>
       <p className="text-white text-sm md:text-base leading-relaxed">
        Total CO2 emission avoided
       </p>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}
