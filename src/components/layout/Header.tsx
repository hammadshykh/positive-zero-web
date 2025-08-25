"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import Link from "next/link";

const navLinks = [
 { label: "Home", href: "/" },
 { label: "About Us", href: "/about" },
 { label: "Portfolio", href: "/contact" },
 { label: "Resources", href: "/resources" },
];

const Header = () => {
 const [isOpen, setIsOpen] = useState(false);
 const headerRef = useRef<HTMLDivElement>(null);
 const [showHeader, setShowHeader] = useState(false);

 // Refs for mobile sidebar
 const overlayRef = useRef<HTMLDivElement>(null);
 const sidebarRef = useRef<HTMLDivElement>(null);
 const menuRef = useRef<HTMLDivElement>(null);

 // Init hidden state for sidebar + overlay so GSAP can animate in
 useEffect(() => {
  if (overlayRef.current && sidebarRef.current) {
   gsap.set(overlayRef.current, { autoAlpha: 0 });
   gsap.set(sidebarRef.current, { autoAlpha: 0, scale: 0.95 });
  }
 }, []);

 // Sidebar open/close animation (simple fade + scale)
 useEffect(() => {
  if (!overlayRef.current || !sidebarRef.current) return;

  if (isOpen) {
   // lock scroll
   document.body.style.overflow = "hidden";

   gsap.to(overlayRef.current, {
    autoAlpha: 1,
    duration: 0.2,
    ease: "power1.out",
   });

   gsap.to(sidebarRef.current, {
    autoAlpha: 1,
    scale: 1,
    duration: 0.35,
    ease: "power3.out",
   });
   gsap.fromTo(
    menuRef.current,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, delay: 0.2 }
   );
  } else {
   // unlock scroll
   document.body.style.overflow = "";

   gsap.to(sidebarRef.current, {
    autoAlpha: 0,
    scale: 0.96,
    duration: 0.25,
    ease: "power2.in",
   });

   gsap.to(overlayRef.current, {
    autoAlpha: 0,
    duration: 0.2,
    ease: "power1.in",
   });
  }
 }, [isOpen]);

 // Sticky header show/hide after hero
 // Sticky Header animation on scroll
 useEffect(() => {
  const headerEl = headerRef.current;
  if (!headerEl) return;

  gsap.set(headerEl, { y: -100, opacity: 0 }); // sticky header hidden

  const showHeader = () => {
   gsap.to(headerEl, {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power3.out",
   });
  };

  const hideHeader = () => {
   gsap.to(headerEl, {
    y: -100,
    opacity: 0,
    duration: 0.4,
    ease: "power3.in",
   });
  };

  const handleScroll = () => {
   if (window.scrollY > window.innerHeight * 0.8) {
    showHeader();
    setShowHeader(true);
   } else if (window.scrollY > 300) {
    setShowHeader(false);
    hideHeader();
   }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, []);
 return (
  <>
   {/* Default Header (visible on load) */}
   <header className="relative z-40">
    <div className="max-w-7xl px-4 md:px-0 mx-auto flex items-center justify-between gap-6 md:gap-">
     {/* Desktop nav */}
     <div className="relative -ms-4">
      <Image src="/positive-zero.svg" alt="Logo" width={200} height={200} />
     </div>

     <div className=" h-[72px] hidden md:flex items-center gap-10">
      {/* Logo */}

      <nav className="hidden md:flex items-center space-x-10">
       {navLinks.map((link) => (
        <Link
         key={link.label}
         href={link.href}
         className="text-white hover:text-primary-theme transition-colors font-medium duration-200 text-sm"
        >
         {link.label}
        </Link>
       ))}
      </nav>
      <Button size="lg">Get Consultation</Button>
     </div>

     {/* Mobile: open sidebar button */}
     <div className="md:hidden flex items-center gap-3">
      <button
       className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
       aria-label="Toggle mobile menu"
       aria-expanded={isOpen}
       onClick={() => setIsOpen(true)}
      >
       <Menu className="w-6 h-6 text-white" />
      </button>
     </div>
    </div>
   </header>

   {/* Sticky Header (after scroll) */}
   {/* <header
    ref={headerRef}
    className={`fixed md:block hid top-5 w-full left-0 z-[80] ${
     showHeader ? "opacity-100" : "opacity-0"
    }`}
   >
    <div className="md:max-w-5xl px-4 md:px-0 mx-auto flex items-center justify-between gap-6 md:gap-0 h-[72px]">
     <div className="backdrop-blur-md bg-white/15 h-[72px]  shadow-2xl items-center flex md:max-w-5xl justify-between ps-10 pe-2 rounded-full w-full">
      <div className="relative -ms-2">
       <Image src="/positive-zero.svg" alt="Logo" width={120} height={120} />
      </div>
      <nav className="items-center hidden md:flex  space-x-10">
       {navLinks.map((link) => (
        <Link
         key={link.label}
         href={link.href}
         className="text-white hover:text-white/60 transition-colors font-medium duration-200 text-sm"
        >
         {link.label}
        </Link>
       ))}
      </nav>
      <Button size="lg" className="rounded-full">
       Get Consultation
      </Button>
      <div className="md:hidden flex items-center gap-3">
       {isOpen ? (
        <button
         className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
         aria-label="Toggle mobile menu"
         aria-expanded={isOpen}
         onClick={() => setIsOpen(false)}
        >
         <X className="w-6 h-6 text-white" />
        </button>
       ) : (
        <button
         className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
         aria-label="Toggle mobile menu"
         aria-expanded={isOpen}
         onClick={() => setIsOpen(true)}
        >
         <Menu className="w-6 h-6 text-white" />
        </button>
       )}
      </div>
     </div>

    </div>
   </header> */}

   {/* Mobile Sidebar Overlay + Panel (fade+scale) */}
   <div
    ref={overlayRef}
    className={`fixed inset-0 w-full h-full z-[70] md:hidden ${
     isOpen
      ? "pointer-events-auto opacity-100"
      : "pointer-events-none opacity-0"
    }`}
    onClick={() => setIsOpen(false)}
   >
    <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />

    {/* Centered transparent panel */}
    <div
     ref={sidebarRef}
     className="absolute inset-0 flex items-center justify-center p-6"
     onClick={(e) => e.stopPropagation()}
    >
     <div className="w-full mx-4 rounded-2xl p-6">
      <div className="flex items-center justify-between gap-3">
       <div>
        <Image src="/positive-zero.svg" alt="Logo" width={120} height={120} />
       </div>
       <div className="absolute top-15 right-5">
        <button
         className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
         aria-label="Toggle mobile menu"
         aria-expanded={isOpen}
         onClick={() => setIsOpen(false)}
        >
         <X className="w-6 h-6 text-white" />
        </button>
       </div>
      </div>
      <nav ref={menuRef} className="flex flex-col items-center gap-5 py-2">
       {navLinks.map((link) => (
        <Link
         key={link.label}
         href={link.href}
         onClick={() => setIsOpen(false)}
         className="text-white text-lg font-medium hover:text-primary transition-colors"
        >
         {link.label}
        </Link>
       ))}
      </nav>

      <div className="mt-8">
       <Button
        size="lg"
        className="w-full rounded-full bg-primary text-black font-semibold hover:opacity-90"
        onClick={() => setIsOpen(false)}
       >
        Get Consultation
       </Button>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default Header;
