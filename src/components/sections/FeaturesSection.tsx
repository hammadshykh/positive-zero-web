import { ServiceCard } from "../modules/serviceCard";

const services = [
 {
  title: "Investment Recovery Assistance",
  description:
   "We specialize in reclaiming funds lost in failed or fraudulent real estate projects in Dubai.",
 },
 {
  title: "Legal Representation",
  description:
   "We specialize in reclaiming funds lost in failed or fraudulent real estate projects in Dubai.",
 },
 {
  title: "Case Evaluation & Consultation",
  description:
   "We specialize in reclaiming funds lost in failed or fraudulent real estate projects in Dubai.",
 },
 {
  title: "Documentation & Claims Filing",
  description:
   "We specialize in reclaiming funds lost in failed or fraudulent real estate projects in Dubai.",
 },
 {
  title: "Negotiation & Settlement",
  description:
   "We specialize in reclaiming funds lost in failed or fraudulent real estate projects in Dubai.",
 },
 {
  title: "International Investor Support",
  description:
   "We specialize in reclaiming funds lost in failed or fraudulent real estate projects in Dubai.",
 },
 {
  title: "Fraud Investigation",
  description:
   "We specialize in reclaiming funds lost in failed or fraudulent real estate projects in Dubai.",
 },
 {
  title: "Post-Recovery Support",
  description:
   "We specialize in reclaiming funds lost in failed or fraudulent real estate projects in Dubai.",
 },
];

export default function FeaturesSection() {
 return (
  <section className="py-10 md:pt-20 ">
   <div className="max-w-7xl mx-auto px-4 md:px-0">
    {/* Grid Layout - 4 columns on desktop, 2 on tablet, 1 on mobile */}
    <div className="grid grid-cols-1 md:space-y-14 s md:grid-cols-2 lg:grid-cols-4 gap-10">
     {services.map((service, index) => (
      <ServiceCard
       key={index}
       title={service.title}
       description={service.description}
      />
     ))}
    </div>
   </div>
  </section>
 );
}
