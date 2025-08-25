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

 useEffect(() => {
  // Set up animations only on client side
  const ctx = gsap.context(() => {
   // Animate section entrance
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
      toggleActions: "play none none none",
     },
    }
   );

   // Animate headings
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
      toggleActions: "play none none none",
     },
    }
   );

   // Animate tabs
   gsap.fromTo(
    tabsRef.current,
    { opacity: 0, y: 20 },
    {
     opacity: 1,
     y: 0,
     duration: 0.7,
     delay: 0.3,
     scrollTrigger: {
      trigger: tabsRef.current,
      start: "top 85%",
      toggleActions: "play none none none",
     },
    }
   );

   // Animate news cards with stagger effect
   gsap.fromTo(
    ".news-card",
    {
     opacity: 0,
     y: 40,
     scale: 0.95,
    },
    {
     opacity: 1,
     y: 0,
     scale: 1,
     duration: 0.6,
     stagger: 0.15,
     scrollTrigger: {
      trigger: newsGridRef.current,
      start: "top 80%",
      toggleActions: "play none none none",
     },
    }
   );

   // Enhanced hover animations for news cards
   const newsCards = document.querySelectorAll(".news-card");
   newsCards.forEach((card) => {
    const image = card.querySelector("img");

    // Scale animation on hover
    card.addEventListener("mouseenter", () => {
     gsap.to(image, {
      scale: 1.08,
      duration: 0.5,
      ease: "power2.out",
     });

     gsap.to(card, {
      y: -8,
      duration: 0.4,
      ease: "power2.out",
     });
    });

    card.addEventListener("mouseleave", () => {
     gsap.to(image, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
     });

     gsap.to(card, {
      y: 0,
      duration: 0.4,
      ease: "power2.out",
     });
    });
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
      className="text-3xl font-heading md:text-4xl font-medium tracking-tight"
     >
      Our Portfolio Companies
     </h2>
     <div ref={tabsRef} className="mt-8">
      <Tabs defaultValue="siraj">
       <TabsList className="h-auto rounded-full bg-[#1C1A1F] p-1.5 border border-[#5E00B5]">
        {portfolioCompanies.map((company) => (
         <TabsTrigger
          key={company.id}
          value={company.id}
          className="rounded-full px-5 py-2 text-sm  text-white font-bold data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm transition-all duration-300"
         >
          {company.name}
         </TabsTrigger>
        ))}
       </TabsList>
      </Tabs>
     </div>
    </section>

    <section className="md:mt-60 mt-20">
     <h2
      ref={newsHeadingRef}
      className="text-3xl font-heading -tracking-tight md:text-4xl mb-10"
     >
      We Are In The News
     </h2>
     <div
      ref={newsGridRef}
      className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
     >
      {newsItems.map((item) => (
       <div key={item.id} className="news-card group cursor-pointer">
        <div className="overflow-hidden rounded  bg-gradient-to-br from-gray-900 to-black">
         <img
          src={item.image}
          alt={item.alt}
          className="h-auto w-full object-cover aspect-[3/3] transition-transform duration-500 ease-out"
         />
        </div>
        <p className="mt-4 text-base text-zinc-300 leading-relaxed transition-colors duration-300 group-hover:text-white">
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
