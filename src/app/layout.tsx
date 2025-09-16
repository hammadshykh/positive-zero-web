import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { PositiveZeroFooter } from "@/components/layout/Footer";
import { ReactLenis } from "@/lib/lenis";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { AnalyticsProvider } from "../components/providers";
// import LoadingScreen from "@/components/LoadingScreen";

// Montserrat font setup
const montserrat = Montserrat({
 subsets: ["latin"],
 variable: "--font-montserrat",
 display: "swap",
});

// Inter font setup
const raleway = Raleway({
 subsets: ["latin"],
 variable: "--font-raleway",
 display: "swap",
});

export const metadata: Metadata = {
 title: {
  default: "Positive Zero",
  template: "%s | Positive Zero",
 },
 description: "Secure and manage your assets with DXB Asset Guard Web.",
 keywords: [
  "Positive Zero",
  "Asset Management",
  "Security",
  "Next.js",
  "GSAP",
  "Tailwind CSS",
 ],
 authors: [{ name: "DXB Asset Guard Team" }],
 openGraph: {
  title: "DXB Asset Guard",
  description: "Secure and manage your assets with DXB Asset Guard Web.",
  url: "https://dxb-asset-guard.com",
  siteName: "DXB Asset Guard",
  images: [
   {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "DXB Asset Guard Preview",
   },
  ],
  locale: "en_US",
  type: "website",
 },
 twitter: {
  card: "summary_large_image",
  title: "DXB Asset Guard",
  description: "Secure and manage your assets with DXB Asset Guard Web.",
  images: ["/og-image.png"],
 },
 metadataBase: new URL("https://dxb-asset-guard.com"),
};

export default function RootLayout({
 children,
}: Readonly<{ children: React.ReactNode }>) {
 return (
  <html lang="en" suppressHydrationWarning>
   <body
    className={`
          ${montserrat.variable} 
          ${raleway.variable} 
          font-sans antialiased
          ${montserrat.className}
          bg-black
        `}
   >
    <ThemeProvider
     attribute="class"
     defaultTheme="dark"
     enableSystem
     disableTransitionOnChange
    >
     <ReactLenis options={{ duration: 1.5 }} root>
      {children}
      {typeof window !== "undefined" && <AnalyticsProvider />}
      {process.env.NEXT_PUBLIC_GA_ID && (
       <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
     </ReactLenis>
     <NextTopLoader color="var(--primary)" height={3} showSpinner={false} />
     <PositiveZeroFooter />
    </ThemeProvider>
   </body>
  </html>
 );
}
