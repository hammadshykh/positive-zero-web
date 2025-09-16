export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

/** Track page views */
export const pageview = (url: string) => {
 if (typeof window === "undefined") return;
 if (!window.gtag) return;

 window.gtag("event", "page_view", {
  page_path: url,
 });
};

/** Track custom events */
export const event = (name: string, params: Record<string, unknown> = {}) => {
 if (typeof window === "undefined") return;
 if (!window.gtag) return;

 window.gtag("event", name, params);
};
