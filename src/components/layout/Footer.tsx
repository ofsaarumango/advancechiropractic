import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Footer({ dict, lang = "en" }: { dict?: any; lang?: string }) {
  const getPath = (path: string) => {
    return `/${lang}${path === "/" ? "" : path}`;
  };

  return (
    <footer className="bg-primary w-full border-t border-primary-fixed-dim/20 transition-opacity duration-300 hover:opacity-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter py-12 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="col-span-1 md:col-span-1 space-y-6">
          <Link href={getPath("/")} className="flex items-center gap-2">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center p-0.5 overflow-hidden">
              <Image src="/logo.png" alt="Advance Chiropractic Logo" width={40} height={40} className="object-contain w-full h-full" />
            </div>
            <span className="text-base sm:text-headline-md font-headline-md text-on-primary transition-all duration-200">
              {dict?.hero?.title || "Advance Chiropractic Clinic"}
            </span>
          </Link>
          <p className="text-body-md font-body-md text-on-primary/80">
            {dict?.footer?.desc || "Providing expert chiropractic care and holistic healing solutions in Patna. Restore your body's natural balance."}
          </p>
          <div className="flex gap-4 pt-2 text-on-primary/80">
            <a 
              href="https://www.facebook.com/drsurendrapatna" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-healthcare-teal transition-colors flex items-center justify-center" 
              aria-label="Facebook"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/dr.surendrakumarchiro/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-healthcare-teal transition-colors flex items-center justify-center" 
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a 
              href="https://www.youtube.com/channel/UCyIJEAuygRFgBqLBFOo65Qg" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-healthcare-teal transition-colors flex items-center justify-center" 
              aria-label="YouTube"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.519 0 9.388-.508a3.002 3.002 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="col-span-1">
          <h4 className="text-headline-md font-headline-md text-on-primary mb-6">{dict?.footer?.quickLinks || "Quick Links"}</h4>
          <nav aria-label="Footer Navigation" className="flex flex-col gap-3">
            <Link href={getPath("/")} className="text-on-primary/80 hover:text-on-primary text-label-md font-label-md hover:underline decoration-healthcare-teal underline-offset-4 w-fit">
              {dict?.nav?.home || "Home"}
            </Link>
            <Link href={getPath("/about")} className="text-on-primary/80 hover:text-on-primary text-label-md font-label-md hover:underline decoration-healthcare-teal underline-offset-4 w-fit">
              {dict?.nav?.about || "About"}
            </Link>
            <Link href={getPath("/services")} className="text-on-primary/80 hover:text-on-primary text-label-md font-label-md hover:underline decoration-healthcare-teal underline-offset-4 w-fit">
              {dict?.nav?.services || "Services"}
            </Link>
            <Link href={getPath("/gallery")} className="text-on-primary/80 hover:text-on-primary text-label-md font-label-md hover:underline decoration-healthcare-teal underline-offset-4 w-fit">
              {dict?.nav?.gallery || "Gallery"}
            </Link>
          </nav>
        </div>

        <div className="col-span-1">
          <h4 className="text-headline-md font-headline-md text-on-primary mb-6">{dict?.footer?.support || "Support"}</h4>
          <nav aria-label="Support Navigation" className="flex flex-col gap-3">
            <Link href={getPath("/contact")} className="text-on-primary/80 hover:text-on-primary text-label-md font-label-md hover:underline decoration-healthcare-teal underline-offset-4 w-fit">
              {dict?.footer?.contact || "Contact Us"}
            </Link>
            <Link href={getPath("/privacy")} className="text-on-primary/80 hover:text-on-primary text-label-md font-label-md hover:underline decoration-healthcare-teal underline-offset-4 w-fit">
              {dict?.footer?.privacy || "Privacy Policy"}
            </Link>
            <Link href={getPath("/terms")} className="text-on-primary/80 hover:text-on-primary text-label-md font-label-md hover:underline decoration-healthcare-teal underline-offset-4 w-fit">
              {dict?.footer?.terms || "Terms of Service"}
            </Link>
          </nav>
        </div>

        <div className="col-span-1">
          <h4 className="text-headline-md font-headline-md text-on-primary mb-6">{dict?.footer?.contact || "Contact"}</h4>
          <div className="space-y-4 text-on-primary/80 text-body-md font-body-md">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Advance+Chiropractic+clinic,+Bombay+dyeing+building,+Kankarbagh+Colony+More,+Ghrounda,+Patna,+Bihar+800001" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-start gap-3 hover:text-on-primary transition-colors group"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-healthcare-teal">location_on</span>
              <span>{dict?.hero?.title || "Advance Chiropractic Clinic"},<br />Bombay Dyeing Building, Kankarbagh Colony More,<br />Ghrounda, Patna, Bihar - 800001</span>
            </a>
            <a 
              href="tel:+918409801156" 
              className="flex items-center gap-3 hover:text-on-primary transition-colors"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-healthcare-teal">phone</span>
              +91 84098 01156
            </a>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="material-symbols-outlined text-healthcare-teal">schedule</span>
              <span>{dict?.footer?.hours || "Mon - Sat: 9:00 AM - 7:00 PM"}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-primary-fixed-dim/20 py-6 text-center">
        <p className="text-caption font-caption text-on-primary/60">
          © {new Date().getFullYear()} {dict?.footer?.rights || "Advance Chiropractic Clinic. All rights reserved."}
        </p>
      </div>
    </footer>
  );
}
