"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function CallToActionSection() {
 const sectionRef = useRef<HTMLElement>(null);

 useGSAP(
  () => {
   const tl = gsap.timeline({
    scrollTrigger: {
     trigger: sectionRef.current,
     start: "top 80%",
     end: "bottom 20%",
     toggleActions: "play none none reverse",
    },
   });

   // Text animations
   tl
    .from(".cta-title", {
     duration: 0.8,
     y: 40,
     opacity: 0,
     ease: "power3.out",
    })
    .from(
     ".cta-description",
     {
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: "power3.out",
     },
     "-=0.4"
    )
    .from(
     ".cta-button",
     {
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: "power3.out",
     },
     "-=0.3"
    );

   // Image parallax-style animation
   gsap.from(".cta-image", {
    scrollTrigger: {
     trigger: sectionRef.current,
     start: "top 90%",
     end: "bottom 20%",
     scrub: true, // smooth parallax effect on scroll
    },
    y: 80,
    scale: 1.1,
    opacity: 0,
    ease: "power3.out",
    duration: 1.2,
   });
  },
  { scope: sectionRef }
 );

 return (
  <section
   ref={sectionRef}
   className="md:py-16 py-10 bg-[#A58E50] relative overflow-hidden"
  >
   <div className="max-w-7xl mx-auto px-4 md:px-0">
    <div className="md:grid flex flex-col-reverse md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-0  items-center">
     {/* Left Content */}
     <div className="space-y-6">
      <h2 className="cta-title text-xl font-inter sm:text-2xl lg:text-4xl font-semibold text-white leading-tight">
       Are You a Victim of a Failed Property Investment?
      </h2>

      <p className="cta-description text-sm sm:text-base font-medium text-white/90 leading-relaxed max-w-3xl">
       We specialize in recovering investments lost to fraudulent, canceled, or
       failed property projects in Dubai. With our experienced legal and
       financial team, we offer a streamlined solution to help you get your
       money back with a No Win, No Fee guarantee. We handle the complexities,
       so you can recover your hard-earned funds without stress.
      </p>

      <div className="cta-button pt-2">
       <Button
        size="lg"
        className="bg-white py-6 text-gray-800 hover:bg-gray-50 px-8 md:px-10 text-base font-semibold rounded-full transition-all duration-300 hover:shadow-xl"
       >
        Schedule Your Consultation
       </Button>
      </div>
     </div>

     {/* Right Image */}
     <div className="md:absolute right-0 -top-1">
      <div className="relative overflow-hidden shadow-2xl ">
       <Image
        src="/victim-section-image.jpg"
        alt="Dubai construction and development projects"
        className="cta-image w-full h-[300px] sm:h-[300px] lg:h-[420px] object-cover"
        width={400}
        height={400}
       />
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}
