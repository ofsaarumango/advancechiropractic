"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";

export default function TopNavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const isActive = (path: string, isDropdownParent: boolean = false) => {
    if (path === "/") {
      return pathname === "/";
    }
    if (isDropdownParent) {
      return pathname === "/services" || pathname === "/therapy" || pathname === "/symptoms";
    }
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const getLinkClass = (path: string, isDropdownParent: boolean = false) => {
    const active = isActive(path, isDropdownParent);
    const baseClass = "text-label-md font-semibold transition-colors duration-200 py-2";
    
    if (active) {
      return `text-deep-blue-primary border-b-2 border-healthcare-teal hover:text-healthcare-teal ${baseClass}`;
    }
    return `text-on-surface-variant hover:text-deep-blue-primary ${baseClass}`;
  };

  const mobileLinkClass = (path: string, isDropdownParent: boolean = false) => {
    const active = isActive(path, isDropdownParent);
    return `block px-4 py-3 rounded-md transition-colors ${
      active 
        ? "bg-soft-blue-accent text-deep-blue-primary font-bold border-l-4 border-healthcare-teal" 
        : "text-on-surface-variant hover:bg-soft-blue-accent hover:text-deep-blue-primary"
    }`;
  };

  return (
    <header className="fixed top-0 w-full z-50 shadow-sm border-b border-outline-variant/30 bg-surface transition-colors duration-200">
      {/* Top Utility Bar - Desktop Only */}
      <div className="hidden lg:block bg-deep-blue-primary text-white py-2.5 px-margin-desktop border-b border-white/10">
        <div className="max-w-max-width mx-auto flex justify-between items-center text-xs">
          <div className="flex items-center gap-6">
            <a href="tel:+918409801156" className="flex items-center gap-2 hover:text-healthcare-teal transition-colors">
              <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-healthcare-teal">call</span>
              <span>+91 84098 01156</span>
            </a>
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-healthcare-teal">schedule</span>
              <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Advance+Chiropractic+clinic,+Bombay+dyeing+building,+Kankarbagh+Colony+More,+Mithapur,+Patna,+Bihar+800001" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-healthcare-teal transition-colors"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-healthcare-teal">location_on</span>
              <span>Bombay Dyeing Bldg, Mithapur, Patna</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/60">Follow Us:</span>
            <a 
              href="https://www.facebook.com/drsurendrapatna" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-healthcare-teal transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/dr.surendrakumarchiro/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-healthcare-teal transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a 
              href="https://www.youtube.com/channel/UCyIJEAuygRFgBqLBFOo65Qg" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-healthcare-teal transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.519 0 9.388-.508a3.002 3.002 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto flex justify-between items-center h-20">
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <Image 
            src="/logo.png" 
            alt="Advance Chiropractic Logo" 
            width={44} 
            height={44} 
            className="object-contain transform group-hover:scale-105 transition-transform duration-300" 
          />
          <div className="flex flex-col">
            <span className="text-body-lg font-extrabold text-deep-blue-primary tracking-wider leading-none">
              ADVANCE
            </span>
            <span className="text-[10px] font-bold text-healthcare-teal tracking-widest leading-none mt-1.5">
              CHIROPRACTIC CLINIC
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={getLinkClass("/about")}>
            About
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group py-2">
            <button className={`flex items-center gap-1 cursor-pointer focus:outline-none ${isActive("/services", true) ? "text-deep-blue-primary font-bold border-b-2 border-healthcare-teal pb-1" : "text-on-surface-variant hover:text-deep-blue-primary"}`}>
              <span className="text-label-md font-semibold">Services</span>
              <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:rotate-180">
                expand_more
              </span>
            </button>
            
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-surface border border-outline-variant/50 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col py-2">
              <Link href="/services" className="px-4 py-2.5 text-label-md font-medium text-on-surface hover:bg-soft-blue-accent hover:text-deep-blue-primary transition-colors">
                Service
              </Link>
              <Link href="/therapy" className="px-4 py-2.5 text-label-md font-medium text-on-surface hover:bg-soft-blue-accent hover:text-deep-blue-primary transition-colors">
                Therapy
              </Link>
              <Link href="/symptoms" className="px-4 py-2.5 text-label-md font-medium text-on-surface hover:bg-soft-blue-accent hover:text-deep-blue-primary transition-colors">
                Symptoms and Condition
              </Link>
            </div>
          </div>

          <Link href="/gallery" className={getLinkClass("/gallery")}>
            Gallery
          </Link>
          <Link href="/contact" className={getLinkClass("/contact")}>
            Contact Us
          </Link>
        </nav>

        {/* Right side appointment button */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <Link href="/contact">
            <button className="bg-deep-blue-primary hover:bg-healthcare-teal text-white text-label-md font-bold px-5 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 border border-transparent active:scale-95 cursor-pointer">
              <span aria-hidden="true" className="material-symbols-outlined text-sm">calendar_month</span>
              Request Appointment
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          aria-label="Toggle Menu" 
          className="md:hidden p-2 text-deep-blue-primary focus:outline-none hover:bg-soft-blue-accent rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span aria-hidden="true" className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface border-b border-outline-variant shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto z-40">
          <nav className="flex flex-col p-4 gap-2">
            <Link href="/" className={mobileLinkClass("/")} onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className={mobileLinkClass("/about")} onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button 
                className={`w-full flex justify-between items-center ${mobileLinkClass("/services", true)}`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <span className={`material-symbols-outlined transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}>
                  expand_more
                </span>
              </button>
              
              {isServicesOpen && (
                <div className="flex flex-col pl-4 mt-2 gap-1 border-l-2 border-outline-variant ml-4">
                  <Link href="/services" className="block px-4 py-2 text-label-md text-on-surface-variant hover:text-deep-blue-primary rounded-md hover:bg-soft-blue-accent" onClick={() => setIsMobileMenuOpen(false)}>
                    Service
                  </Link>
                  <Link href="/therapy" className="block px-4 py-2 text-label-md text-on-surface-variant hover:text-deep-blue-primary rounded-md hover:bg-soft-blue-accent" onClick={() => setIsMobileMenuOpen(false)}>
                    Therapy
                  </Link>
                  <Link href="/symptoms" className="block px-4 py-2 text-label-md text-on-surface-variant hover:text-deep-blue-primary rounded-md hover:bg-soft-blue-accent" onClick={() => setIsMobileMenuOpen(false)}>
                    Symptoms and Condition
                  </Link>
                </div>
              )}
            </div>

            <Link href="/gallery" className={mobileLinkClass("/gallery")} onClick={() => setIsMobileMenuOpen(false)}>
              Gallery
            </Link>
            <Link href="/contact" className={mobileLinkClass("/contact")} onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>
            
            <div className="mt-4 pt-4 border-t border-outline-variant flex flex-col gap-4">
              <a href="tel:+918409801156" className="flex items-center gap-3 text-deep-blue-primary hover:text-healthcare-teal transition-colors px-4 py-2 rounded-md hover:bg-soft-blue-accent">
                <span aria-hidden="true" className="material-symbols-outlined text-healthcare-teal">call</span>
                <span className="font-bold">+91 84098 01156</span>
              </a>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full bg-deep-blue-primary text-white py-3 rounded-lg flex items-center justify-center gap-2 shadow-md">
                  <span aria-hidden="true" className="material-symbols-outlined text-sm">calendar_month</span>
                  Request Appointment
                </button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
