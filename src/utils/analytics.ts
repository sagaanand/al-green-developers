// Analytics & Lead Enrichment Utilities for Accenture Infra / Al Green Developers

export interface LeadMetadata {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  landingPage: string;
  ctaOrigin: string;
  device: "Mobile" | "Tablet" | "Desktop";
  timestamp: string;
  screenResolution: string;
}

// Extract UTM query parameters and device parameters
export function captureLeadMetadata(ctaOrigin: string): LeadMetadata {
  const params = new URLSearchParams(window.location.search);
  
  // Detect device profile based on width
  const width = window.innerWidth;
  let device: "Mobile" | "Tablet" | "Desktop" = "Desktop";
  if (width < 640) device = "Mobile";
  else if (width < 1024) device = "Tablet";

  return {
    utmSource: params.get("utm_source") || "direct",
    utmMedium: params.get("utm_medium") || "none",
    utmCampaign: params.get("utm_campaign") || "organic",
    landingPage: window.location.pathname + window.location.hash,
    ctaOrigin: ctaOrigin,
    device: device,
    timestamp: new Date().toISOString(),
    screenResolution: `${window.innerWidth}x${window.innerHeight}`
  };
}

// Enforce structured event tracking specs
export interface AnalyticsEvent {
  eventName: string;
  category: "Engagement" | "Conversion" | "Interactions" | "Navigation";
  label?: string;
  value?: string | number;
  metadata?: Record<string, any>;
  timestamp: string;
}

export function trackAnalyticsEvent(
  eventName: string,
  category: "Engagement" | "Conversion" | "Interactions" | "Navigation",
  label?: string,
  value?: string | number,
  extraMetadata?: Record<string, any>
) {
  // Capture device context
  const width = window.innerWidth;
  let device = "Desktop";
  if (width < 640) device = "Mobile";
  else if (width < 1024) device = "Tablet";

  const eventPayload: AnalyticsEvent = {
    eventName,
    category,
    label,
    value,
    timestamp: new Date().toISOString(),
    metadata: {
      device,
      path: window.location.pathname + window.location.hash,
      ...extraMetadata
    }
  };

  // Log tracking console stream for testing and verification
  console.log(`[Analytics Event] %c${eventName}`, "color: #BAA360; font-weight: bold;", eventPayload);

  // Push to local event register if available
  const existingEvents = JSON.parse(localStorage.getItem("al_green_analytics") || "[]");
  existingEvents.push(eventPayload);
  localStorage.setItem("al_green_analytics", JSON.stringify(existingEvents.slice(-100))); // Keep last 100 events
}
