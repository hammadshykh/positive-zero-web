"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

// Card data array for consistent rendering
const energyServices = [
 {
  id: 1,
  title: "Distributed Solar Generation",
  description: "Solar energy for a carbon-neutral business",
  image: "/distributed-solar-generation.jpg",
  icon: "/solar-vector.svg",
  alt: "Distributed solar generation for sustainable energy",
 },
 {
  id: 2,
  title: "Energy Efficiency",
  description: "Efficiency solutions to manage consumption",
  image: "/energy-efficiency.jpg",
  icon: "/energy-vector.svg",
  alt: "Energy efficiency solutions for businesses",
 },
 {
  id: 3,
  title: "Clean Mobility",
  description: "Clean mobility for on-demand renewable electricity",
  image: "/clean-mobility.jpg",
  icon: "/clean-vector.svg",
  alt: "Clean mobility for on-demand renewable electricity",
 },
];

export function EnergyServicesLandingSection() {
 const sectionRef = useRef<HTMLDivElement>(null);
 const cardsRef = useRef<HTMLElement[]>([]);
 const headingRef = useRef<HTMLDivElement>(null);
 const infoRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const ctx = gsap.context(() => {
   // Heading animation - works on both scroll directions
   if (headingRef.current?.children) {
    gsap.fromTo(
     headingRef.current.children,
     {
      y: 50,
      opacity: 0,
     },
     {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
       trigger: headingRef.current,
       start: "top 85%",
       toggleActions: "play reverse play reverse", // Reverse on scroll back
      },
     }
    );
   }

   // Cards animation - works on both scroll directions
   cardsRef.current.forEach((card) => {
    if (!card) return;

    gsap.fromTo(
     card,
     {
      scale: 0.8,
      opacity: 0,
      y: 30,
     },
     {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "back.out(1.7)",
      scrollTrigger: {
       trigger: card,
       start: "top 85%",
       toggleActions: "play reverse play reverse", // Reverse on scroll back
      },
     }
    );
   });

   // Info section animation - works on both scroll directions
   if (infoRef.current?.children) {
    gsap.fromTo(
     infoRef.current.children,
     {
      y: 40,
      opacity: 0,
     },
     {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
       trigger: infoRef.current,
       start: "top 80%",
       toggleActions: "play reverse play reverse", // Reverse on scroll back
      },
     }
    );
   }
  }, sectionRef);

  return () => ctx.revert();
 }, []);

 // Function to add cards to ref array with proper typing
 const addToCardsRef = (el: HTMLElement | null) => {
  if (el && !cardsRef.current.includes(el)) {
   cardsRef.current.push(el);
  }
 };

 return (
  <div ref={sectionRef} className="bg-black text-white py-10 md:py-20  md:px-6">
   <div className="max-w-7xl mx-auto md:px-0 px-4">
    <div ref={headingRef} className="md:mb-12 mb-8 font-raleway">
     <h1 className="md:text-4xl text-2xl font-medium mb-2">
      Three Energy Services.
     </h1>
     <h2 className="md:text-4xl text-2xl font-medium">
      One Blueprint For Sustainable Business.
     </h2>
    </div>

    {/* Cards Grid - Using consistent style */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12">
     {energyServices.map((service) => (
      <Card
       key={service.id}
       ref={addToCardsRef}
       className="border-gray-800 overflow-hidden relative flex flex-col justify-end items-start h-[400px]"
      >
       <Image
        className="absolute inset-0 object-cover"
        src={service.image}
        fill
        alt={service.alt}
       />
       <div className="absolute inset-0 bg-black/50 z-30" />
       <div className="relative z-50 w-full">
        <CardContent className="px-6 py-4 space-y-2 bg-transparent">
         <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center mb-4">
          <Image
           src={service.icon}
           alt={service.title}
           width={24}
           height={18}
           className="object-contain w-8 h-8"
          />
         </div>
         <h3 className="text-xl font-semibold mb-2 text-white">
          {service.title}
         </h3>
         <p className="text-[#A1A1A1] text-sm">{service.description}</p>
        </CardContent>
       </div>
      </Card>
     ))}
    </div>

    {/* Information Section */}
    <div
     ref={infoRef}
     className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start bg-[#0F0F0F] p-5 md:p-10 rounded-2xl"
    >
     <div>
      <p className="text-base font-semibold mb-4 text-white">
       Our integrated energy transition platform combines three core elements of
       decarbonization into an end-to-end energy transition plan.
      </p>
      <Button
       size={"lg"}
       className="rounded-full font-bold bg-white text-black hover:bg-gray-100"
      >
       Learn more
      </Button>
     </div>
     <div>
      <p className="text-[#A1A1A1] text-sm leading-relaxed">
       We can help your business reduce operating costs, lower carbon emissions,
       and meet your ESG commitments by replacing capital investments with
       simple, cost-saving monthly payments. Our integrated energy offering,
       which includes solar PV, efficiency upgrades, clean mobility solutions,
       and digital analytics, creates more affordable pathways to {'"zero".'}
      </p>
     </div>
     <div>
      <p className="text-[#A1A1A1] text-sm leading-relaxed">
       Since 2015, we have been investing in sustainable and decentralized
       infrastructure to meet the new energy demands of commercial, industrial
       and public sector organizations. We have the track record and know-how to
       help you transform how you generate, store, manage and mobilize power to
       drive cleaner and more efficient operations.
      </p>
     </div>
    </div>
   </div>
  </div>
 );
}
