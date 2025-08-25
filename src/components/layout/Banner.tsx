"use client";
import { motion } from "framer-motion";

interface BannerProps {
 title: string;
 subtitle?: string;
 background?: string; // optional custom background
}

export default function Banner({ title, subtitle, background }: BannerProps) {
 return (
  <section
   className="relative w-full min-h-[40vh] flex items-center justify-center text-center text-white"
   style={{
    backgroundImage: `url(${background || "/banner-default.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
   }}
  >
   <div className="absolute inset-0 bg-black/50" />
   <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="relative z-10 px-4"
   >
    <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
    {subtitle && <p className="mt-4 text-lg md:text-xl">{subtitle}</p>}
   </motion.div>
  </section>
 );
}
