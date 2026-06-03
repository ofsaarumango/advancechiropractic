import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary w-full border-t border-primary-fixed-dim/20 transition-opacity duration-300 hover:opacity-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter py-12 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="col-span-1 md:col-span-1 space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <span aria-hidden="true" className="material-symbols-outlined filled text-on-primary text-2xl">
              medical_services
            </span>
            <span className="text-headline-md font-headline-md text-on-primary">
              Advance Chiropractic
            </span>
          </Link>
          <p className="text-body-md font-body-md text-on-primary/80">
            Providing expert chiropractic care and holistic healing solutions in Patna. Restore your body's natural balance.
          </p>
        </div>
        
        <div className="col-span-1">
          <h4 className="text-headline-md font-headline-md text-on-primary mb-6">Quick Links</h4>
          <nav aria-label="Footer Navigation" className="flex flex-col gap-3">
            <Link href="/" className="text-on-primary/80 hover:text-on-primary text-label-md font-label-md hover:underline decoration-healthcare-teal underline-offset-4 w-fit">
              Home
            </Link>
            <Link href="/about" className="text-on-primary/80 hover:text-on-primary text-label-md font-label-md hover:underline decoration-healthcare-teal underline-offset-4 w-fit">
              About
            </Link>
            <Link href="/services" className="text-on-primary/80 hover:text-on-primary text-label-md font-label-md hover:underline decoration-healthcare-teal underline-offset-4 w-fit">
              Services
            </Link>
            <Link href="/#gallery" className="text-on-primary/80 hover:text-on-primary text-label-md font-label-md hover:underline decoration-healthcare-teal underline-offset-4 w-fit">
              Gallery
            </Link>
          </nav>
        </div>

        <div className="col-span-1">
          <h4 className="text-headline-md font-headline-md text-on-primary mb-6">Support</h4>
          <nav aria-label="Support Navigation" className="flex flex-col gap-3">
            <Link href="/contact" className="text-on-primary/80 hover:text-on-primary text-label-md font-label-md hover:underline decoration-healthcare-teal underline-offset-4 w-fit">
              Contact Us
            </Link>
            <Link href="/privacy" className="text-on-primary/80 hover:text-on-primary text-label-md font-label-md hover:underline decoration-healthcare-teal underline-offset-4 w-fit">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-on-primary/80 hover:text-on-primary text-label-md font-label-md hover:underline decoration-healthcare-teal underline-offset-4 w-fit">
              Terms of Service
            </Link>
          </nav>
        </div>

        <div className="col-span-1">
          <h4 className="text-headline-md font-headline-md text-on-primary mb-6">Contact</h4>
          <div className="space-y-4 text-on-primary/80 text-body-md font-body-md">
            <p className="flex items-start gap-3">
              <span aria-hidden="true" className="material-symbols-outlined text-healthcare-teal">location_on</span>
              Patna, Bihar, India
            </p>
            <p className="flex items-center gap-3">
              <span aria-hidden="true" className="material-symbols-outlined text-healthcare-teal">phone</span>
              084098 01156
            </p>
            <p className="flex items-center gap-3">
              <span aria-hidden="true" className="material-symbols-outlined text-healthcare-teal">schedule</span>
              Mon - Sat: 9:00 AM - 7:00 PM
            </p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-primary-fixed-dim/20 py-6 text-center">
        <p className="text-caption font-caption text-on-primary/60">
          © {new Date().getFullYear()} Advance Chiropractic Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
