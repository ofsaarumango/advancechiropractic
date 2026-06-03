import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import { getDictionary } from "@/get-dictionary";

export const metadata = {
  title: "Contact Advance Chiropractic Clinic | Patna, Bihar",
};

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="w-full">
      {/* Hero Title */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop mb-12 mt-12">
        <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-deep-blue-primary mb-4">
          {dict?.contact?.title || "Get in Touch"}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          {dict?.contact?.desc || "We're here to help you on your journey to optimal health. Reach out to schedule an appointment or ask any questions about our chiropractic care."}
        </p>
      </section>

      {/* Bento Grid Layout */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-20">
        {/* Left Column: Contact Form */}
        <ContactForm dict={dict} lang={lang} />

        {/* Right Column: Info Cards */}
        <div className="lg:col-span-5 flex flex-col gap-gutter">
          {/* Contact Details Card */}
          <div className="bg-surface-container-lowest border border-outline-variant shadow-sm rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300 group">
            <h3 className="font-headline-md text-headline-md text-deep-blue-primary mb-6 border-b border-outline-variant/30 pb-4">{dict?.contact?.clinicInfo || "Clinic Information"}</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-soft-blue-accent p-3 rounded-full text-deep-blue-primary group-hover:bg-deep-blue-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined filled">call</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant mb-1">{dict?.contact?.phone || "Phone"}</p>
                  <a href="tel:+918409801156" className="font-body-lg text-body-lg text-on-surface font-semibold hover:text-deep-blue-primary transition-colors">
                    +91 84098 01156
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-soft-blue-accent p-3 rounded-full text-deep-blue-primary group-hover:bg-deep-blue-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined filled">email</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant mb-1">{dict?.contact?.email || "Email Addresses"}</p>
                  <p className="font-body-md text-body-md text-on-surface">info@advancechiropractic.in</p>
                  <p className="font-body-md text-body-md text-on-surface mt-1">dr.surendr1@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location & Map Card */}
          <div className="bg-surface-container-lowest border border-outline-variant shadow-sm rounded-xl p-6 md:p-8 flex flex-col flex-grow">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-soft-blue-accent p-3 rounded-full text-deep-blue-primary">
                <span className="material-symbols-outlined filled">location_on</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface-variant mb-1">{dict?.contact?.location || "Location"}</p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Advance+Chiropractic+clinic,+Bombay+dyeing+building,+Kankarbagh+Colony+More,+Ghrounda,+Patna,+Bihar+800001" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-body-md text-body-md text-on-surface leading-relaxed hover:text-deep-blue-primary transition-colors block"
                >
                  Advance Chiropractic Clinic,<br />
                  Bombay Dyeing Building, Kankarbagh Colony More,<br />
                  Ghrounda, Patna, Bihar - 800001
                </a>
              </div>
            </div>
            {/* Map Link */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Advance+Chiropractic+clinic,+Bombay+dyeing+building,+Kankarbagh+Colony+More,+Ghrounda,+Patna,+Bihar+800001" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full h-48 bg-surface-container-high rounded-lg border border-outline-variant overflow-hidden relative mt-auto flex items-center justify-center bg-cover bg-center group cursor-pointer" 
              style={{ backgroundImage: "url('/images/contact-hero-bg.webp')" }}
            >
              <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all duration-300"></div>
              <div className="relative z-10 bg-surface-container-lowest/90 px-4 py-2 rounded-lg shadow-sm border border-outline-variant flex items-center gap-2 group-hover:bg-surface transition-colors">
                <span className="material-symbols-outlined text-healthcare-teal">map</span>
                <span className="font-label-md text-label-md text-deep-blue-primary">{dict?.contact?.viewMap || "View on Maps"}</span>
              </div>
            </a>
          </div>

          {/* Socials Card */}
          <div className="bg-surface-container-lowest border border-outline-variant shadow-sm rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">{dict?.contact?.connect || "Connect With Us"}</h3>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.facebook.com/drsurendrapatna" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-soft-blue-accent text-deep-blue-primary hover:bg-deep-blue-primary hover:text-on-primary transition-colors px-4 py-2 rounded-full font-label-md text-label-md flex items-center gap-2 group"
              >
                <svg className="w-4 h-4 fill-current text-deep-blue-primary group-hover:text-on-primary transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
                Facebook
              </a>
              <a 
                href="https://www.instagram.com/dr.surendrakumarchiro/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-soft-blue-accent text-deep-blue-primary hover:bg-deep-blue-primary hover:text-on-primary transition-colors px-4 py-2 rounded-full font-label-md text-label-md flex items-center gap-2 group"
              >
                <svg className="w-4 h-4 fill-current text-deep-blue-primary group-hover:text-on-primary transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Instagram
              </a>
              <a 
                href="https://www.youtube.com/channel/UCyIJEAuygRFgBqLBFOo65Qg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-soft-blue-accent text-deep-blue-primary hover:bg-deep-blue-primary hover:text-on-primary transition-colors px-4 py-2 rounded-full font-label-md text-label-md flex items-center gap-2 group"
              >
                <svg className="w-4 h-4 fill-current text-deep-blue-primary group-hover:text-on-primary transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.519 0 9.388-.508a3.002 3.002 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
