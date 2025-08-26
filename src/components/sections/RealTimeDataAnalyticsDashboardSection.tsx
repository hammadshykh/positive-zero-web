"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

export function RealTimeDataAnalyticsDashboardSection() {
 const sectionRef = useRef(null);
 const imageRef = useRef(null);
 const contentRef = useRef(null);

 useEffect(() => {
  const ctx = gsap.context(() => {
   // Image animation - slide in from left with rotation and scale
   gsap.fromTo(
    imageRef.current,
    {
     x: -200,
     scale: 0.9,
     opacity: 0,
    },
    {
     x: 0,
     scale: 1,
     opacity: 1,
     duration: 1.5,
     ease: "power3.out",
     scrollTrigger: {
      trigger: imageRef.current,
      start: "top 80%",
      toggleActions: "play none none none",
     },
    }
   );

   // Content animation - staggered elements
   const contentElements = contentRef.current || [];
   gsap.fromTo(
    contentElements,
    {
     y: 50,
     opacity: 0,
    },
    {
     y: 0,
     opacity: 1,
     duration: 0.8,
     stagger: 0.2,
     ease: "power2.out",
     scrollTrigger: {
      trigger: contentRef.current,
      start: "top 75%",
      toggleActions: "play none none none",
     },
    }
   );

   // Continuous subtle rotation animation on scroll
   ScrollTrigger.create({
    trigger: sectionRef.current,
    start: "top bottom",
    end: "bottom top",
    onUpdate: (self) => {
     if (imageRef.current) {
      gsap.to(imageRef.current, {
       scale: 1 - self.progress * 0.1, // Slight scale change
       x: self.progress * 150, // Left to right movement (0px to 100px)
       duration: 0.5,
      });
     }
    },
   });
  }, sectionRef);

  return () => ctx.revert();
 }, []);

 return (
  <section
   ref={sectionRef}
   className="bg-black relative overflow-hidden min-h-screen flex items-center py-20 md:py-52"
  >
   <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
    <div className="flex flex-col md:flex-row items-center gap-12">
     {/* Image Container - Left Side */}
     <div className="md:w-2/3 relative">
      <div
       ref={imageRef}
       className="relative h-[565px] w-[1110px] ml-[-550px] rounded-lg overflow-hidden border-2 border-white/10 
                         shadow-[0_0_400px_50px_rgba(168,85,247,0.3)] 
                         shadow-[#ED05CA21]
                         backdrop-blur-2xl
                         filter saturate-150"
      >
       <Image
        alt="Real-time data analytics dashboard visualization"
        src="/call-to-action-image.jpg"
        fill
        className="object-cover"
        priority
       />
       {/* Image overlay gradient */}
       <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>
     </div>

     {/* Content - Right Side */}
     <div ref={contentRef} className="md:w-1/2 space-y-8 text-foreground">
      <h1 className="font-heading text-3xl lg:text-4xl font-medium text-white leading-tight">
       Real-Time Data,
       <br />
       Real-Time Saving
      </h1>

      <div className="space-y-6 text-[#A1A1A1] text-sm md:text-base leading-relaxed">
       <p className="leading-[2]">
        You can remotely manage your complete asset portfolio, automate and
        centralize your bills, understand energy distribution patterns, monitor
        and optimize your equipment performance and benchmark your facilities
        against a 1000+ facilities.
       </p>
       <p className="leading-[2]">
        {
         "Our cloud-based analytics platforms across Positive Zero's three verticals use cognitive and predictive intelligence to provide complete energy transparency to predict, identify, manage, and save."
        }
       </p>
      </div>

      <Button
       size={"lg"}
       className=" font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30"
      >
       Request a demo
      </Button>
     </div>
    </div>
   </div>
  </section>
 );
}
