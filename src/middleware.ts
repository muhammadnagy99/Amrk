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

function getLocale(request: NextRequest): Locale {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: Locale[] = [...i18n.locales];
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale as Locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  const cookieLocale = getLocaleFromCookie(request);

  const matchedLocale = i18n.locales.find((locale) => pathname.startsWith(`/${locale}`)) as Locale | undefined;
  if (matchedLocale && cookieLocale !== matchedLocale) {
    const response = NextResponse.next();
    response.cookies.set('locale', matchedLocale);
    return response;
  }

  if (pathnameIsMissingLocale) {
    const locale = cookieLocale || getLocale(request);

    if (!cookieLocale) {
      const response = NextResponse.redirect(
        new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url),
      );
      response.cookies.set('locale', locale);
      return response;
    }

    return NextResponse.redirect(
      new URL(`/${cookieLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url),
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|manifest.webmanifest|sitemap.xml|robots.txt|.*\\.png|.*\\.webp|.*\\.jpg).*)"],
};
