import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/lib/dictionaries";

function getLocale(request: NextRequest): string {
  const accept = request.headers.get("accept-language") ?? "";
  // Lightweight detection: if Arabic appears in the preference list, prefer ar.
  const preferred = accept
    .split(",")
    .map((p) => p.split(";")[0].trim().toLowerCase())
    .find((p) => p === "ar" || p.startsWith("ar-"));
  if (preferred) return "ar";
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) return NextResponse.next();

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
