import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18n-config";

function getLocale(request: NextRequest): string {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (!pathnameIsMissingLocale) {
    // If it already has a locale, just return it
    const localeMatch = pathname.match(/^\/([^\/]+)/);
    if (localeMatch && i18n.locales.includes(localeMatch[1] as any)) {
       return localeMatch[1];
    }
  }

  // Look for a locale cookie
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && i18n.locales.includes(cookieLocale as any)) {
    return cookieLocale;
  }

  // Look at the Accept-Language header (simplified matcher)
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    if (acceptLanguage.includes("hi")) {
      return "hi";
    }
  }

  return i18n.defaultLocale;
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Ignore static assets and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /about
    // The new URL is now /en/about
    const url = new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url);
    // Keep search params
    url.search = request.nextUrl.search;
    
    const response = NextResponse.redirect(url);
    // Persist locale via cookie
    response.cookies.set('NEXT_LOCALE', locale, { path: '/', maxAge: 60 * 60 * 24 * 365 });
    return response;
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};
