import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About Dr. Surendra Kumar & Our Clinic | Advance Chiropractic Clinic",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-soft-blue-accent/30 py-20 px-margin-mobile md:px-margin-desktop border-b border-outline-variant">
        <div className="max-w-max-width mx-auto flex flex-col items-center text-center">
          <span className="text-label-md font-label-md text-healthcare-teal uppercase tracking-widest mb-4">Advance Chiropractic Clinic</span>
          <h1 className="text-headline-lg-mobile md:text-headline-xl font-headline-xl text-deep-blue-primary mb-6 max-w-3xl">Premium Healthcare Solutions in Patna</h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Restoring mobility, alleviating pain, and enhancing your quality of life through expert, evidence-based chiropractic care.
          </p>
        </div>
      </section>

      {/* Doctor Profile Section (Asymmetric Layout) */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          {/* Image Column */}
          <div className="md:col-span-5 relative">
            <div className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow-sm relative z-10 border border-outline-variant">
              <Image 
                src="/images/doctor-profile.webp"
                alt="Professional portrait of Dr. Surendra Kumar"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Background Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-soft-blue-accent rounded-full -z-10"></div>
          </div>
          
          {/* Text Column */}
          <div className="md:col-span-7 md:pl-12 flex flex-col gap-6 mt-12 md:mt-0">
            <div>
              <h2 className="text-headline-lg font-headline-lg text-deep-blue-primary mb-2">Dr. Surendra Kumar</h2>
              <p className="text-body-lg font-body-lg text-healthcare-teal font-semibold">Lead Chiropractor & Founder</p>
            </div>
            <div className="text-body-md font-body-md text-on-surface-variant space-y-4">
              <p>
                Dr. Surendra Kumar brings years of specialized experience in diagnosing and treating neuromuscular disorders, with an emphasis on treatment through manual adjustment and/or manipulation of the spine.
              </p>
              <p>
                Committed to a patient-centric philosophy, Dr. Kumar believes in treating the root cause of discomfort rather than merely masking symptoms. His approach integrates advanced chiropractic techniques with holistic wellness strategies, ensuring comprehensive care tailored to individual patient needs.
              </p>
            </div>
            {/* Clinical Credentials Chips */}
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="bg-soft-blue-accent text-deep-blue-primary text-label-md font-label-md px-4 py-2 rounded-full border border-outline-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                Certified Specialist
              </span>
              <span className="bg-soft-blue-accent text-deep-blue-primary text-label-md font-label-md px-4 py-2 rounded-full border border-outline-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">school</span>
                Advanced Training
              </span>
              <span className="bg-soft-blue-accent text-deep-blue-primary text-label-md font-label-md px-4 py-2 rounded-full border border-outline-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                10+ Years Experience
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Mission & Facility (Bento Grid) */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-background border-t border-outline-variant">
        <div className="max-w-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg font-headline-lg text-deep-blue-primary mb-4">Our Clinic in Patna</h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">Providing a tranquil, state-of-the-art environment designed for your healing and comfort.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Card 1: Mission */}
            <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant shadow-medical hover:shadow-medical-hover transition-shadow duration-300 flex flex-col h-full">
              <div className="w-12 h-12 bg-soft-blue-accent rounded-lg flex items-center justify-center mb-6 text-healthcare-teal">
                <span className="material-symbols-outlined filled">vital_signs</span>
              </div>
              <h3 className="text-headline-md font-headline-md text-deep-blue-primary mb-3">Our Mission</h3>
              <p className="text-body-md font-body-md text-on-surface-variant flex-grow">
                To deliver premium healthcare solutions that empower our patients to lead pain-free, active lives. We are dedicated to clinical excellence and compassionate care in every interaction.
              </p>
            </div>
            {/* Card 2: Facility (Image Heavy) */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-medical hover:shadow-medical-hover transition-shadow duration-300 md:col-span-2 group">
              <div className="h-48 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-deep-blue-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                <Image 
                  src="/images/clinic-treatment-room.webp" 
                  alt="Modern clinical treatment room" 
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-headline-md font-headline-md text-deep-blue-primary mb-3">State-of-the-Art Facility</h3>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Located in the heart of Patna, our clinic is equipped with the latest diagnostic and therapeutic technology. We maintain strict hygiene protocols and a calming atmosphere to ensure your visit is as comfortable as it is effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
