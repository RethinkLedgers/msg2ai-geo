import { NextResponse } from "next/server";
import { isConsentRequired } from "@/lib/consent";

// The answer depends on the visitor's country, so it must never be cached.
export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const country = request.headers.get("x-vercel-ip-country");
  return NextResponse.json(
    { consentRequired: isConsentRequired(country) },
    { headers: { "Cache-Control": "private, no-store" } },
  );
}
