import Link from "next/link";
import React from "react";

export default function TopNavBar() {
  return (
    <header className="bg-surface fixed top-0 w-full z-50 border-b border-outline-variant shadow-sm transition-colors duration-200">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span aria-hidden="true" className="material-symbols-outlined filled text-deep-blue-primary text-3xl">
            medical_services
          </span>
          <span className="text-headline-md font-headline-md font-bold text-deep-blue-primary">
            Advance Chiropractic
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-deep-blue-primary font-bold border-b-2 border-healthcare-teal pb-1 text-label-md font-label-md hover:bg-soft-blue-accent transition-colors duration-200 px-2 rounded-t-sm"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-on-surface-variant hover:text-deep-blue-primary text-label-md font-label-md hover:bg-soft-blue-accent transition-colors duration-200 px-2 py-1 rounded-sm"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-on-surface-variant hover:text-deep-blue-primary text-label-md font-label-md hover:bg-soft-blue-accent transition-colors duration-200 px-2 py-1 rounded-sm"
          >
            Services
          </Link>
          <Link
            href="/#gallery"
            className="text-on-surface-variant hover:text-deep-blue-primary text-label-md font-label-md hover:bg-soft-blue-accent transition-colors duration-200 px-2 py-1 rounded-sm"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="text-on-surface-variant hover:text-deep-blue-primary text-label-md font-label-md hover:bg-soft-blue-accent transition-colors duration-200 px-2 py-1 rounded-sm"
          >
            Contact Us
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-deep-blue-primary">
            <span aria-hidden="true" className="material-symbols-outlined text-xl">call</span>
            <span className="text-label-md font-label-md font-bold">084098 01156</span>
          </div>
          <Link href="/contact">
            <button className="bg-deep-blue-primary hover:bg-healthcare-teal text-white text-label-md font-label-md px-6 py-3 rounded-lg transition-colors duration-300 shadow-sm flex items-center gap-2">
              <span aria-hidden="true" className="material-symbols-outlined text-sm">calendar_month</span>
              Request An Appointment
            </button>
          </Link>
          <div className="flex items-center gap-3 text-on-surface-variant">
            <button aria-label="Share" className="hover:text-deep-blue-primary transition-colors hover:bg-soft-blue-accent p-2 rounded-full">
              <span aria-hidden="true" className="material-symbols-outlined">share</span>
            </button>
            <button aria-label="Language" className="hover:text-deep-blue-primary transition-colors hover:bg-soft-blue-accent p-2 rounded-full">
              <span aria-hidden="true" className="material-symbols-outlined">public</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button aria-label="Toggle Menu" className="md:hidden p-2 text-deep-blue-primary" id="mobile-menu-btn">
          <span aria-hidden="true" className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
  );
}
