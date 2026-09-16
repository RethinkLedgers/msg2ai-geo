"use client";

import { useEffect, useRef, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  OPEN_COOKIE_SETTINGS_EVENT,
  disableAnalytics,
  enableAnalytics,
  initialDecision,
  saveConsent,
} from "@/lib/consent";

const GA_ID = "G-B58SC743SB";

export default function CookieConsent() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);
  // Set once the visitor accepts or rejects, so a slow region lookup cannot
  // override their choice.
  const choiceMade = useRef(false);

  useEffect(() => {
    const openSettings = () => setBannerOpen(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);

    initialDecision().then((decision) => {
      if (choiceMade.current) return;
      if (decision === "load") setAnalyticsAllowed(true);
      if (decision === "ask") setBannerOpen(true);
    });

    return () =>
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  const accept = () => {
    choiceMade.current = true;
    saveConsent("granted");
    enableAnalytics(GA_ID);
    setAnalyticsAllowed(true);
    setBannerOpen(false);
  };

  const reject = () => {
    choiceMade.current = true;
    saveConsent("denied");
    disableAnalytics(GA_ID);
    setBannerOpen(false);
  };

  return (
    <>
      {analyticsAllowed && <GoogleAnalytics gaId={GA_ID} />}

      {bannerOpen && (
        <div
          role="region"
          aria-labelledby="cookie-consent-title"
          className="fixed inset-x-0 bottom-0 z-50 p-4"
        >
          <div className="mx-auto max-w-3xl rounded-xl border border-border bg-background p-5 shadow-2xl sm:flex sm:items-center sm:gap-6">
            <div className="text-sm text-zinc-600">
              <h2 id="cookie-consent-title" className="mb-1 text-base font-semibold text-foreground">
                Can we use analytics cookies?
              </h2>
              <p>
                Google Analytics cookies show us how people use this site. We only set them if you
                accept, and you can change your choice any time in Cookie settings.{" "}
                <a
                  href="https://www.msg2ai.xyz/privacy#cookies"
                  className="text-primary underline hover:text-primary-dark"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
            <div className="mt-4 flex shrink-0 gap-3 sm:mt-0">
              <button
                type="button"
                onClick={reject}
                className="flex-1 rounded-lg border border-border px-6 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:flex-none"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={accept}
                className="flex-1 rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:flex-none"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
