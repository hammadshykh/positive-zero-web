"use client";
import React, { useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
 title: string;
 description: string;
 className?: string;
}

export function ServiceCard({
 title,
 description,
 className = "",
}: ServiceCardProps) {
 const iconRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  if (!iconRef.current) return;

  // Ripple / Pulse effect on icon when section comes into view
  const ctx = gsap.context(() => {
   gsap.fromTo(
    iconRef.current,
    { scale: 0.8 },
    {
     scale: 1,
     yoyo: true,
     duration: 0.6,
     ease: "power1.inOut",
     scrollTrigger: {
      trigger: iconRef.current,
      start: "top 90%", // when icon comes into view
      once: true, // run once only
     },
    }
   );
  }, iconRef);

  return () => ctx.revert();
 }, []);

 return (
  <div className={`transition-shadow duration-300 ${className}`}>
   {/* Lightning Icon with Ripple */}
   <div className="mb-4" ref={iconRef}>
    <div className="bg-[#FFFAED] w-14 h-14 flex items-center rounded-full justify-center relative overflow-hidden">
     {/* Ripple circle */}
     <span className="absolute w-14 h-14 rounded-full bg-[#FFF5DA] opacity-30"></span>
     <div className="w-10 h-10 bg-[#FFF5DA] rounded-full flex items-center justify-center relative z-10">
      <Image src={"/zap.svg"} width={20} height={18} alt="zap svg" />
     </div>
    </div>
   </div>

   {/* Title */}
   <h3 className="font-medium text-[#1E1E1E] mb-3 leading-tight">{title}</h3>

   {/* Description */}
   <p className="mb-4 text-[#1E1E1E] font-[300] leading-relaxed">
    {description}
   </p>

   {/* Arrow Icon */}
   <div className="flex justify-start cursor-pointer">
    <ChevronRight className="w-6 h-6 hover:text-gray-600 transition-colors duration-200" />
   </div>
  </div>
 );
}
