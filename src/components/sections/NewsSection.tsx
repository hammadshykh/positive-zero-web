"use client";

import { useRef, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

// Portfolio companies data
const portfolioCompanies = [
 { id: "siraj", name: "Siraj Power" },
 { id: "taka", name: "Taka Solutions" },
 { id: "hypr", name: "Hypr Energy" },
 { id: "creek", name: "Creek Capital" },
];

// News items data
const newsItems = [
 {
  id: 1,
  title:
   '"Positive Zero" Launches New Brand, Consolidates Subsidiaries under One Company',
  image: "/news/new-1.png",
  alt: "News article about Positive Zero's new brand",
 },
 {
  id: 2,
  title:
   "Positive Zero to Drive Energy Transition in the GCC with BlackRock Investment",
  image: "/news/new-2.png",
  alt: "News article about Positive Zero and BlackRock",
 },
 {
  id: 3,
  title:
   "Al Jalila Foundation and Positive Zero Inaugurate Rooftop and Carport Solar Project",
  image: "/news/news-4.png",
  alt: "News article about Al Jalila Foundation and Positive Zero",
 },
 {
  id: 4,
  title:
   "Positive Zero and Tamimi Energy Join Forces to Support Rapid Growth of Saudi Clean Energy Market",
  image: "/news/new-3.png",
  alt: "News article about Positive Zero and Tamimi Energy",
 },
];

export function PortfolioAndNewsSection() {
 const sectionRef = useRef(null);
 const headingRef = useRef(null);
 const tabsRef = useRef(null);
 const newsHeadingRef = useRef(null);
 const newsGridRef = useRef(null);
 const tabTriggersRef = useRef<HTMLElement[]>([]);

 useEffect(() => {
  // Set up animations only on client side
  const ctx = gsap.context(() => {
   // Animate section entrance with reverse capability
   gsap.fromTo(
    sectionRef.current,
    { opacity: 0, y: 50 },
    {
     opacity: 1,
     y: 0,
     duration: 1,
     scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
      toggleActions: "play reverse play reverse", // Reverse on scroll back
     },
    }
   );

   // Animate headings with reverse capability
   gsap.fromTo(
    [headingRef.current, newsHeadingRef.current],
    { opacity: 0, y: 30 },
    {
     opacity: 1,
     y: 0,
     duration: 0.8,
     stagger: 0.2,
     scrollTrigger: {
      trigger: headingRef.current,
      start: "top 85%",
      end: "bottom 5%",
      toggleActions: "play none none none",
     },
    }
   );

   // Animate tabs with reverse capability
   gsap.fromTo(
    tabsRef.current,
    { opacity: 0, y: 20 },
    {
     opacity: 1,
     y: 0,
     duration: 0.5,
     delay: 0.3,
     scrollTrigger: {
      trigger: tabsRef.current,
      start: "top 85%",
      toggleActions: "play reverse play reverse", // Reverse on scroll back
     },
    }
   );

   // Animate tab triggers with staggered effect
   gsap.fromTo(
    tabTriggersRef.current,
    {
     opacity: 0,
     scale: 0.8,
     y: 20,
    },
    {
     opacity: 1,
     scale: 1,
     y: 0,
     duration: 0.6,
     stagger: 0.1,
     ease: "back.out(1.7)",
     scrollTrigger: {
      trigger: tabsRef.current,
      start: "top 85%",
      toggleActions: "play reverse play reverse", // Reverse on scroll back
     },
    }
   );

   // Enhanced news cards animation with 3D-like effect
   gsap.fromTo(
    ".news-card",
    {
     opacity: 0,
     y: 60,
     rotationX: -15, // 3D rotation effect
     scale: 0.9,
    },
    {
     opacity: 1,
     y: 0,
     rotationX: 0,
     scale: 1,
     duration: 0.8,
     stagger: 0.15,
     ease: "power2.out",
     scrollTrigger: {
      trigger: newsGridRef.current,
      start: "top 80%",
      toggleActions: "play reverse play reverse", // Reverse on scroll back
     },
    }
   );

   // Enhanced hover animations for news cards with parallax effect
   const newsCards = document.querySelectorAll(".news-card");
   newsCards.forEach((card) => {
    const image = card.querySelector("img");
    const text = card.querySelector("p");

    // Scale animation on hover with parallax effect
    card.addEventListener("mouseenter", () => {
     gsap.to(image, {
      scale: 1.1,
      duration: 0.6,
      ease: "power2.out",
     });

     gsap.to(card, {
      y: -12,
      duration: 0.5,
      ease: "power2.out",
     });

     gsap.to(text, {
      y: -5,
      color: "#ffffff",
      duration: 0.4,
      ease: "power2.out",
     });
    });

    card.addEventListener("mouseleave", () => {
     gsap.to(image, {
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
     });

     gsap.to(card, {
      y: 0,
      duration: 0.5,
      ease: "power2.out",
     });

     gsap.to(text, {
      y: 0,
      color: "#d4d4d8",
      duration: 0.4,
      ease: "power2.out",
     });
    });
   });

   // Add subtle continuous animation to tabs on scroll
   ScrollTrigger.create({
    trigger: sectionRef.current,
    start: "top bottom",
    end: "bottom top",
    onUpdate: (self) => {
     gsap.to(tabTriggersRef.current, {
      // y: self.progress * -10, // Subtle float effect
      duration: 0.5,
      stagger: 0.05,
     });
    },
   });
  }, sectionRef);

  // Clean up ScrollTrigger on component unmount
  return () => {
   ctx.revert();
   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
 }, []);

 return (
  <div
   ref={sectionRef}
   className="w-full bg-black text-foreground overflow-hidden md:py-20"
  >
   <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
    <section className="flex flex-col items-center text-center">
     <h2
      ref={headingRef}
      className="text-3xl font-heading md:text-4xl font-medium tracking-tight text-white"
     >
      Our Portfolio Companies
     </h2>
     <div ref={tabsRef} className="mt-8">
      <Tabs defaultValue="siraj">
       <TabsList className="h-auto gap-2 rounded-full bg-gradient-to-r from-[#5e00b58f] to-[#ff06cd9d] text-white p-[2px]">
        <div className="rounded-full bg-[#1C1A1F] p-1.5">
         {portfolioCompanies.map((company) => (
          <TabsTrigger
           key={company.id}
           value={company.id}
           className="rounded-full px-5 py-2 text-sm text-white font-bold data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm transition-all duration-300 transform hover:scale-105"
          >
           {company.name}
          </TabsTrigger>
         ))}
        </div>
       </TabsList>
      </Tabs>
     </div>
    </section>

    <section className="md:mt-60 mt-20">
     <h2
      ref={newsHeadingRef}
      className="text-3xl font-raleway font-heading tracking-[0.5] md:text-4xl mb-10 text-white"
     >
      We Are In The News
     </h2>
     <div
      ref={newsGridRef}
      className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
     >
      {newsItems.map((item) => (
       <div key={item.id} className="news-card group cursor-pointer">
        <div className="overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-black shadow-lg shadow-purple-500/10">
         <img
          src={item.image}
          alt={item.alt}
          className="h-auto w-full object-cover aspect-[3/3] transition-transform duration-500 ease-out"
         />
        </div>
        <p className="mt-4 text-base text-zinc-300 leading-relaxed transition-all duration-300 group-hover:text-white">
         {item.title}
        </p>
       </div>
      ))}
     </div>
    </section>
   </div>
  </div>
 );
}
