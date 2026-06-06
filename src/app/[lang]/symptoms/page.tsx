import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "@/get-dictionary";

import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Symptoms & Conditions | Advance Chiropractic Clinic",
    description: "Explore common symptoms and conditions treated at Advance Chiropractic Clinic in Patna. We provide holistic care for back pain, sciatica, headaches, and joint issues.",
    alternates: {
      canonical: `/${lang}/symptoms`,
      languages: {
        'en': '/en/symptoms',
        'hi': '/hi/symptoms',
      },
    },
  };
}

export default async function SymptomsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const defaultGeneralUpperBody = [
    "Muscle Spasm",
    "Tremors",
    "Joint Cracking",
    "Sprains & Strains",
    "Shortness of Breath",
    "Headache",
    "Neck Stiffness & Cervical Pain",
    "Shoulder Impingement",
    "Frozen Shoulder"
  ];
  const generalUpperBody = dict?.symptoms?.items1 || defaultGeneralUpperBody;

  const defaultNeurologicalConditions = [
    "Paralysis Recovery Support",
    "Facial Palsy Rehabilitation",
    "Neurological Movement Dysfunctions",
    "Balance and Coordination Issues",
    "Post-Stroke Recovery"
  ];
  const neurologicalConditions = dict?.symptoms?.items2 || defaultNeurologicalConditions;

  const defaultSpineLowerBody = [
    "Sciatica & Radiating Nerve Pain",
    "Slipped Disc & Herniation Issues",
    "Chronic Lower Back Pain",
    "Knee Osteoarthritis & Joint Pain",
    "Plantar Fasciitis & Foot Pain",
    "Hip and Pelvic Pain"
  ];
  const spineLowerBody = dict?.symptoms?.items3 || defaultSpineLowerBody;

  return (
    <div className="flex-grow w-full">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px] flex items-center justify-center bg-surface-container overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply" style={{ backgroundImage: "url('/images/symptoms-hero-bg.webp')" }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-3xl">
          <h1 className="font-headline-xl text-headline-lg-mobile md:text-[48px] font-bold text-primary mb-4 drop-shadow-md">{dict?.symptoms?.title || "Symptoms & Conditions"}</h1>
          <p className="font-body-lg text-[18px] text-on-surface-variant bg-surface-bright/80 backdrop-blur-sm p-4 rounded-xl inline-block border border-outline-variant shadow-sm">
            {dict?.symptoms?.desc || "Symptoms and conditions of each issue may vary from one another."}
          </p>
        </div>
      </section>

      {/* Main Content Directory */}
      <section className="py-16 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Category 1: General & Upper Body */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 shadow-[0_4px_20px_-4px_rgba(26,54,93,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(26,54,93,0.1)] transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6 border-b border-outline-variant pb-4">
              <div className="bg-soft-blue-accent text-deep-blue-primary p-3 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">sports_gymnastics</span>
              </div>
              <h2 className="font-headline-md text-[24px] font-bold text-primary">{dict?.symptoms?.cat1 || "General & Upper Body"}</h2>
            </div>
            <ul className="space-y-3 font-body-md text-on-surface-variant h-96 overflow-y-auto pr-2 custom-scrollbar">
              {generalUpperBody.map((item, idx) => (
                <li key={idx} className={`flex items-start gap-2 p-2 rounded transition-colors cursor-pointer ${idx % 2 === 0 ? 'bg-surface-bright hover:bg-surface-container-lowest' : 'hover:bg-surface-bright'}`}>
                  <span className="material-symbols-outlined text-healthcare-teal text-[20px] mt-0.5">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Category 2: Neurological & Head */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 shadow-[0_4px_20px_-4px_rgba(26,54,93,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(26,54,93,0.1)] transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6 border-b border-outline-variant pb-4">
              <div className="bg-soft-blue-accent text-deep-blue-primary p-3 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">psychology</span>
              </div>
              <h2 className="font-headline-md text-[24px] font-bold text-primary">{dict?.symptoms?.cat2 || "Neurological Conditions"}</h2>
            </div>
            <ul className="space-y-3 font-body-md text-on-surface-variant h-96 overflow-y-auto pr-2 custom-scrollbar">
              {neurologicalConditions.map((item, idx) => (
                <li key={idx} className={`flex items-start gap-2 p-2 rounded transition-colors cursor-pointer ${idx % 2 === 0 ? 'bg-surface-bright hover:bg-surface-container-lowest' : 'hover:bg-surface-bright'}`}>
                  <span className="material-symbols-outlined text-healthcare-teal text-[20px] mt-0.5">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Category 3: Spine & Lower Body */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 shadow-[0_4px_20px_-4px_rgba(26,54,93,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(26,54,93,0.1)] transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6 border-b border-outline-variant pb-4">
              <div className="bg-soft-blue-accent text-deep-blue-primary p-3 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">accessibility</span>
              </div>
              <h2 className="font-headline-md text-[24px] font-bold text-primary">{dict?.symptoms?.cat3 || "Spine & Lower Body"}</h2>
            </div>
            <ul className="space-y-3 font-body-md text-on-surface-variant h-96 overflow-y-auto pr-2 custom-scrollbar">
              {spineLowerBody.map((item, idx) => (
                <li key={idx} className={`flex items-start gap-2 p-2 rounded transition-colors cursor-pointer ${idx % 2 === 0 ? 'bg-surface-bright hover:bg-surface-container-lowest' : 'hover:bg-surface-bright'}`}>
                  <span className="material-symbols-outlined text-healthcare-teal text-[20px] mt-0.5">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="bg-soft-blue-accent py-12 px-margin-mobile md:px-margin-desktop my-8 mx-auto max-w-5xl rounded-2xl text-center border border-outline-variant/30">
        <h3 className="font-headline-lg text-[28px] font-bold text-deep-blue-primary mb-4">{dict?.symptoms?.ctaTitle || "Are you suffering from any of these conditions?"}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-2xl mx-auto">
          {dict?.symptoms?.ctaDesc || "Our clinic provides comprehensive assessments and tailored chiropractic adjustments alongside active physiotherapy protocols to aid your path back to comfort."}
        </p>
        <Link href={`/${lang}/contact`} className="inline-block bg-deep-blue-primary text-white px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-healthcare-teal transition-colors shadow-sm">
          {dict?.symptoms?.ctaButton || "Schedule a Free Assessment"}
        </Link>
      </section>
    </div>
  );
}

