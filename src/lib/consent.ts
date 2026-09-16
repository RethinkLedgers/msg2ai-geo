// Visitors from these countries are asked before analytics cookies are set:
// the EU and EEA (GDPR and the ePrivacy Directive), the UK with the Crown
// Dependencies and Gibraltar (UK GDPR and PECR), and Switzerland.
// ISO 3166-1 alpha-2 codes, as sent by Vercel in x-vercel-ip-country.
const CONSENT_COUNTRIES = new Set([
  // EU
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU",
  "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES",
  "SE",
  // Rest of the EEA
  "IS", "LI", "NO",
  // UK, Crown Dependencies and Gibraltar
  "GB", "GG", "JE", "IM", "GI",
  "CH",
]);

// An unknown country asks for consent. Failing open would set cookies for a UK
// or EU visitor that Vercel could not place.
export function isConsentRequired(country: string | null): boolean {
  if (!country) return true;
  return CONSENT_COUNTRIES.has(country.toUpperCase());
}

export type Consent = "granted" | "denied";

// These pages are served on www.msg2ai.xyz through msg2ai-website's rewrites.
// The key and event match msg2ai-website, so one choice covers every page on
// that origin. Keep them in sync.
export const CONSENT_STORAGE_KEY = "analytics-consent";
export const OPEN_COOKIE_SETTINGS_EVENT = "open-cookie-settings";

export function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function saveConsent(value: Consent): void {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // Storage is blocked, so the choice lasts for this page view only.
  }
}

// What to do when a page loads: "load" analytics, "ask" with the banner, or
// "none" because the visitor declined. A stored choice wins. Otherwise the
// visitor's country decides, and a failed lookup asks.
export async function initialDecision(): Promise<"load" | "ask" | "none"> {
  const stored = readConsent();
  if (stored === "granted") return "load";
  if (stored === "denied") return "none";
  try {
    const res = await fetch("/api/consent-region", { cache: "no-store" });
    const { consentRequired } = await res.json();
    return consentRequired === false ? "load" : "ask";
  } catch {
    return "ask";
  }
}

function setGaDisabled(gaId: string, disabled: boolean): void {
  (window as unknown as Record<string, boolean>)[`ga-disable-${gaId}`] =
    disabled;
}

export function enableAnalytics(gaId: string): void {
  setGaDisabled(gaId, false);
}

// Stops a Google Analytics tag that has already loaded and deletes its cookies.
export function disableAnalytics(gaId: string): void {
  setGaDisabled(gaId, true);
  const host = window.location.hostname;
  const domains = ["", host, `.${host.replace(/^www\./, "")}`];
  document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0].trim())
    .filter((name) => /^(_ga|_gid|_gat)/.test(name))
    .forEach((name) => {
      domains.forEach((domain) => {
        document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
      });
    });
}
