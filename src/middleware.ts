import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

type Locale = typeof i18n.locales[number];

function getLocaleFromCookie(request: NextRequest): Locale | undefined {
  const cookieLocale = request.cookies.get('locale')?.value;
  // Narrow down the type to match allowed locales
  return i18n.locales.includes(cookieLocale as Locale) ? (cookieLocale as Locale) : undefined;
}

function getLocaleFromHeaders(request: NextRequest): Locale {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: Locale[] = [...i18n.locales];
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale as Locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the URL already includes a locale
  const matchedLocale = i18n.locales.find((locale) => pathname.startsWith(`/${locale}`)) as Locale | undefined;

  // Try to get the locale from cookies
  const cookieLocale = getLocaleFromCookie(request);

  // If a locale is in the URL, ensure it's set in the cookie and use it
  if (matchedLocale) {
    if (cookieLocale !== matchedLocale) {
      const response = NextResponse.next();
      response.cookies.set('locale', matchedLocale);
      return response;
    }
    return NextResponse.next();
  }

  // If no locale in the URL, determine the locale to use
  const resolvedLocale = cookieLocale || getLocaleFromHeaders(request) || i18n.defaultLocale;

  // Redirect to the URL with the determined locale
  const response = NextResponse.redirect(
    new URL(`/${resolvedLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url)
  );
  response.cookies.set('locale', resolvedLocale);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|manifest.webmanifest|sitemap.xml|robots.txt|.*\\.png|.*\\.webp|.*\\.jpg).*)"],
};
