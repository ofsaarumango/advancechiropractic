import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Expert Chiropractic Services | Advance Chiropractic Clinic",
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
        <div className="flex flex-col gap-6 pr-0 md:pr-12">
          <span className="text-label-md font-label-md text-healthcare-teal uppercase tracking-widest">Clinical Excellence</span>
          <h1 className="font-headline-xl text-headline-xl text-deep-blue-primary leading-tight">
            Targeted Therapies for Optimal Recovery
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Our evidence-based chiropractic treatments are designed to diagnose, treat, and prevent mechanical disorders of the musculoskeletal system. Experience a clinical approach to pain relief and structural correction.
          </p>
          <div className="pt-4">
            <Link href="#comprehensive-care">
              <button className="bg-deep-blue-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded hover:bg-healthcare-teal transition-colors duration-300">
                View Treatment Protocols
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-8 md:mt-0 relative rounded-xl overflow-hidden h-[400px] shadow-medical">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnQHLn7BHM5Hajn7QTKas1WnbtaTJ21f1R74W0PpgVqUxASMBuF4jxIMmez2GBGkl3KQ726r5dsRQE09c_nUTTgfcAfTDb4BaKTa2tELuzCTwl7HaF2sm2s-Suf3-WWFtkUfflstdz0WCDOjcz2awrIzlkT73Ef00nBXTZOjecFr43TjWRCRqwVAD_fbiNReusEp7vS00LnkgnwVTCjvOX06F7-pa__shNJzPEur7YTauCUG8jFTIwo2RnTcOeNj7dxxE0vj6QfcY"
            alt="Modern chiropractic clinic room"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-deep-blue-primary/10 to-transparent"></div>
        </div>
      </section>

      {/* Bento Grid Services Section */}
      <section id="comprehensive-care" className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-16">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-deep-blue-primary mb-4">Comprehensive Care</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Explore our specialized treatment areas. We utilize state-of-the-art diagnostic tools alongside traditional adjustments.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Card 1: Back Pain (Large Featured) */}
          <div className="md:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant p-8 flex flex-col justify-between shadow-medical hover:shadow-medical-hover transition-all duration-300 group">
            <div className="flex items-start justify-between mb-8">
              <div className="w-16 h-16 rounded-full bg-soft-blue-accent flex items-center justify-center text-deep-blue-primary group-hover:bg-deep-blue-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-[32px] filled">accessibility_new</span>
              </div>
              <span className="bg-surface-container py-1 px-3 rounded-full text-caption font-caption text-on-surface-variant">Primary Focus</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-deep-blue-primary mb-3">Spinal & Lumbar Rehabilitation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-xl">
                Comprehensive management of acute and chronic back pain. Utilizing spinal manipulation, mobilization, and targeted soft tissue therapies to restore structural integrity and alleviate nerve compression.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 font-label-md text-label-md text-clinical-purple hover:text-deep-blue-primary transition-colors">
                View Back Pain Protocols <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Neck Pain (Small) */}
          <div className="md:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant p-8 flex flex-col justify-between shadow-medical hover:shadow-medical-hover transition-all duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-healthcare-teal mb-4">
                <span className="material-symbols-outlined">airline_seat_recline_normal</span>
              </div>
              <h3 className="font-headline-md text-[20px] font-semibold text-deep-blue-primary mb-2">Cervical Therapy</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Targeted treatments for neck stiffness, whiplash, and tension headaches caused by cervical spine misalignment.
              </p>
            </div>
          </div>

          {/* Card 3: Sciatica (Small) */}
          <div className="md:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant p-8 flex flex-col justify-between shadow-medical hover:shadow-medical-hover transition-all duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-clinical-purple mb-4">
                <span className="material-symbols-outlined">electric_bolt</span>
              </div>
              <h3 className="font-headline-md text-[20px] font-semibold text-deep-blue-primary mb-2">Sciatica Relief</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Decompression techniques aimed at relieving pressure on the sciatic nerve to eliminate radiating leg pain and numbness.
              </p>
            </div>
          </div>

          {/* Card 4: Sports Injuries (Medium) */}
          <div className="md:col-span-4 bg-deep-blue-primary rounded-xl p-8 flex flex-col justify-between shadow-medical hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-[100px] text-white">directions_run</span>
            </div>
            <div className="relative z-10 mb-6">
              <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center text-white mb-4">
                <span className="material-symbols-outlined filled">fitness_center</span>
              </div>
              <h3 className="font-headline-md text-[20px] font-semibold text-white mb-2">Sports Medicine</h3>
              <p className="font-body-md text-body-md text-primary-fixed-dim text-sm">
                Accelerated recovery programs for athletic injuries, focusing on joint mobility, biomechanics, and performance enhancement.
              </p>
            </div>
          </div>

          {/* Card 5: Posture (Small) */}
          <div className="md:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant p-8 flex flex-col justify-between shadow-medical hover:shadow-medical-hover transition-all duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 rounded bg-soft-blue-accent flex items-center justify-center text-deep-blue-primary mb-4">
                <span className="material-symbols-outlined">straighten</span>
              </div>
              <h3 className="font-headline-md text-[20px] font-semibold text-deep-blue-primary mb-2">Posture Correction</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Ergonomic assessments and structural adjustments to correct modern sedentary lifestyle impacts like "tech neck".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-soft-blue-accent border-y border-outline-variant/30 mt-12">
        <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-headline-lg text-headline-lg text-deep-blue-primary mb-4">Ready to Address Your Discomfort?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Schedule a comprehensive initial consultation. Our clinical team will perform a full structural assessment and design a personalized treatment protocol.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link href="/contact">
              <button className="bg-deep-blue-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded hover:bg-clinical-purple transition-colors duration-300 shadow-md">
                Request An Appointment
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
