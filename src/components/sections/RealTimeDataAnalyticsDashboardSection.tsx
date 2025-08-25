import { Button } from "@/components/ui/button";
import Image from "next/image";

export function RealTimeDataAnalyticsDashboardSection() {
 return (
  <section className="bg-black relative overflow-hidden min-h-screen flex items-center py-20 md:py-40">
   {/* Background Image */}
   {/* <div className="absolute inset-0 w-full h-full opacity-20">
    <Image
     alt="Data analytics dashboard background"
     src="/call-to-action-image.jpg"
     fill
     className="object-cover"
     priority
    />
   </div> */}

   <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
    <div className="flex flex-col md:flex-row items-center gap-12">
     {/* Image Container - Left Side */}
     <div className="md:w-2/3 ">
      <div className="relative ml-[-600px] h-[565px] w-[1200px] rounded-lg overflow-hidden">
       <Image
        alt="Real-time data analytics dashboard visualization"
        src="/call-to-action-image.jpg"
        fill
        className="object-cover"
        priority
       />
      </div>
     </div>

     {/* Content - Right Side */}
     <div className="md:w-1/2 space-y-8 text-foreground">
      <h1 className="font-heading text-3xl lg:text-4xl font-medium text-white leading-tight">
       Real-Time Data,
       <br />
       Real-Time Saving
      </h1>

      <div className="space-y-10 text-[#A1A1A1] text-sm md:text-base leading-relaxed">
       <p className="leading-[2]">
        You can remotely manage your complete asset portfolio, automate and
        centralize your bills, understand energy distribution patterns, monitor
        and optimize your equipment performance and benchmark your facilities
        against a 1000+ facilities.
       </p>
       <p className="leading-[2]">
        Our cloud-based analytics platforms across Positive {"Zero's"} three
        verticals use cognitive and predictive intelligence to provide complete
        energy transparency to predict, identify, manage, and save.
       </p>
      </div>

      <Button className="bg-gradient-to-r from-white to-purple-200 text-slate-900 hover:from-slate-100 hover:to-purple-100 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-1">
       Request a demo
      </Button>
     </div>
    </div>
   </div>
  </section>
 );
}
