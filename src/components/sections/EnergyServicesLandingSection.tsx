import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Card data array for consistent rendering
const energyServices = [
 {
  id: 1,
  title: "Distributed Solar Generation",
  description: "Solar energy for a carbon-neutral business",
  image: "/distributed-solar-generation.jpg",
  icon: "solar:sun-bold",
  alt: "Distributed solar generation for sustainable energy",
 },
 {
  id: 2,
  title: "Energy Efficiency",
  description: "Efficiency solutions to manage consumption",
  image: "/energy-efficiency.jpg",
  icon: "material-symbols:check",
  alt: "Energy efficiency solutions for businesses",
 },
 {
  id: 3,
  title: "Clean Mobility",
  description: "Clean mobility for on-demand renewable electricity",
  image: "/clean-mobility.jpg",
  icon: "material-symbols:electric-bolt",
  alt: "Clean mobility for on-demand renewable electricity",
 },
];

export function EnergyServicesLandingSection() {
 return (
  <div className="bg-black text-white py-16 px-6">
   <div className="max-w-7xl mx-auto">
    <div className="mb-12">
     <h1 className="md:text-4xl text-2xl font-medium  mb-2">
      Three Energy Services.
     </h1>
     <h2 className="md:text-4xl text-2xl font-medium  ">
      One Blueprint For Sustainable Business.
     </h2>
    </div>

    {/* Cards Grid - Using consistent style */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
     {energyServices.map((service) => (
      <Card
       key={service.id}
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
         <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
          <Icon icon={service.icon} className="w-6 h-6 text-white" />
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start bg-[#0F0F0F] p-10 rounded-2xl">
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
