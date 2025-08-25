"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ComingSoon() {
 const textRef = useRef(null);

 useEffect(() => {
  if (textRef.current) {
   gsap.fromTo(
    textRef.current,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
   );
  }
 }, []);

 return (
  <section className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-4">
   <motion.h1
    ref={textRef}
    className="text-5xl md:text-7xl font-bold text-primary mb-6"
   >
    Coming Soon 🚀
   </motion.h1>
   <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 1 }}
    className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8"
   >
    We’re working hard to bring you this page. Stay tuned for updates!
   </motion.p>
   <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.8, duration: 1 }}
   >
    <Link href={"/"}>
     <Button size="lg" className="rounded-2xl">
      Back to Home
     </Button>
    </Link>
   </motion.div>
  </section>
 );
}
