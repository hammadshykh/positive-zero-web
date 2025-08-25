import { InfiniteSliderBasic } from "@/components/InfiniteSliderBasic";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { EnergyServicesLandingSection } from "@/components/sections/EnergyServicesLandingSection";
import HeroSection from "@/components/sections/HeroSection";
import { PortfolioAndNewsSection } from "@/components/sections/NewsSection";
import { RealTimeDataAnalyticsDashboardSection } from "@/components/sections/RealTimeDataAnalyticsDashboardSection";

export default function Home() {
 return (
  <main>
   <HeroSection />
   <InfiniteSliderBasic />
   <EnergyServicesLandingSection />
   <RealTimeDataAnalyticsDashboardSection />
   <PortfolioAndNewsSection />
   <ContactFormSection />
  </main>
 );
}
