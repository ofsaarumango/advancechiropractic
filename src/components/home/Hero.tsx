import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-surface-container-lowest pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden border-b border-outline-variant/30">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-soft-blue-accent rounded-l-[100px] opacity-50 -z-10 hidden md:block"></div>
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-soft-blue-accent text-deep-blue-primary rounded-full text-label-md font-label-md">
            <span aria-hidden="true" className="material-symbols-outlined filled text-healthcare-teal text-sm">
              verified
            </span>
            Best Chiropractic Clinic in Patna
          </div>
          <h1 className="text-headline-xl font-headline-xl text-deep-blue-primary leading-tight">
            Advance Chiropractic Clinic
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl">
            Experience comprehensive healing and pain relief through expert chiropractic treatments led by <strong className="text-deep-blue-primary">Dr. Surendra Kumar</strong>. We focus on restoring your body&apos;s natural alignment and function.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/contact">
              <button className="bg-deep-blue-primary hover:bg-healthcare-teal text-white text-label-md font-label-md px-8 py-4 rounded-lg transition-colors duration-300 shadow-medical hover:shadow-medical-hover flex items-center gap-2">
                Request An Appointment
                <span aria-hidden="true" className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </Link>
            <Link href="/services">
              <button className="border-2 border-outline-variant hover:border-clinical-purple text-deep-blue-primary text-label-md font-label-md px-8 py-4 rounded-lg transition-colors duration-300 flex items-center gap-2 bg-surface-container-lowest">
                View Services
              </button>
            </Link>
          </div>
        </div>
        <div className="relative z-10 hidden md:block">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medical relative">
            <Image 
              src="/images/hero-patient.webp" 
              alt="Chiropractor treating patient" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={true}
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-medical border border-outline-variant/20 flex items-center gap-4">
              <div className="w-12 h-12 bg-soft-blue-accent rounded-full flex items-center justify-center text-healthcare-teal">
                <span aria-hidden="true" className="material-symbols-outlined filled text-2xl">stars</span>
              </div>
              <div>
                <p className="text-headline-md font-headline-md text-deep-blue-primary">10+ Years</p>
                <p className="text-caption font-caption text-on-surface-variant">Clinical Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
