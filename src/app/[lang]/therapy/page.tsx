import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "@/get-dictionary";

import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Physiotherapy Therapies | Advance Chiropractic Clinic",
    description: "Explore the comprehensive range of therapies offered at Advance Chiropractic Clinic, including Post-COVID Physiotherapy, Shockwave Therapy, and more.",
    alternates: {
      canonical: `/${lang}/therapy`,
      languages: {
        'en': '/en/therapy',
        'hi': '/hi/therapy',
      },
    },
  };
}

export default async function TherapyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const defaultFeaturedTreatments = [
    {
      title: "Post-COVID Physiotherapy",
      desc: "Comprehensive respiratory and physical rehabilitation programs to help patients regain strength and lung capacity following COVID-19.",
      img: "/images/therapy-covid.webp",
    },
    {
      title: "Shockwave Physiotherapy",
      desc: "Advanced non-invasive treatment utilizing acoustic waves to promote healing in subacute, subchronic, and chronic conditions.",
      img: "/images/therapy-shockwave.webp",
    },
    {
      title: "Chest Physiotherapy",
      desc: "Specialized airway clearance techniques and breathing exercises to improve respiratory function and clear lung secretions.",
      img: "/images/therapy-chest.webp",
    },
    {
      title: "Cryotherapy (Cold Therapy)",
      desc: "Targeted cold therapy designed to reduce inflammation, alleviate pain, and promote faster recovery from acute injuries.",
      icon: "ac_unit",
    },
    {
      title: "Pelvic Floor Physical Therapy",
      desc: "Specialized treatments to address dysfunction, pain, and weakness in the pelvic region, improving core stability and control.",
      icon: "pregnant_woman",
    },
    {
      title: "Traction Therapy",
      desc: "Gentle decompression techniques to relieve pressure on the spine and alleviate nerve pain or disc-related discomfort.",
      icon: "accessible_forward",
    },
    {
      title: "Soft Tissue Mobilization",
      desc: "Hands-on techniques focused on muscles, ligaments, and fascia to break down scar tissue and enhance flexibility.",
      icon: "front_hand",
    },
    {
      title: "Myofascial Release (MFR)",
      desc: "Targeted sustained pressure to relieve tension in the connective tissues (fascia), reducing pain and restoring motion.",
      icon: "boy",
    },
    {
      title: "Acupuncture",
      desc: "Traditional and contemporary acupuncture methods to stimulate the nervous system, alleviate pain, and promote natural healing.",
      icon: "colorize",
    }
  ];

  const translatedFeaturedTreatments = defaultFeaturedTreatments.map((treatment, i) => ({
    ...treatment,
    title: dict?.therapy?.items?.[i]?.title || treatment.title,
    desc: dict?.therapy?.items?.[i]?.desc || treatment.desc
  }));

  const defaultAdditionalTherapies = [
    { title: "Cupping Therapy", icon: "spa" },
    { title: "Kinesio Taping / Taping Therapy", icon: "healing" },
    { title: "Chiropractic Therapy", icon: "accessibility_new" },
    { title: "Spinal Decompression / Traction Therapy", icon: "airline_seat_recline_extra" },
    { title: "Dry Needling Therapy", icon: "colorize" },
    { title: "Wax Therapy", icon: "water_drop" },
    { title: "THERMOTHERAPY (Heat Therapy)", icon: "thermostat" },
    { title: "Manual Therapy", icon: "pan_tool" },
    { title: "LASER Therapy", icon: "flare" },
  ];

  const translatedAdditionalTherapies = defaultAdditionalTherapies.map((therapy, i) => ({
    ...therapy,
    title: dict?.therapy?.additional?.[i] || therapy.title,
  }));

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        className="relative w-full h-[60vh] min-h-[500px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/therapy-hero-bg.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue-primary/90 to-deep-blue-primary/40"></div>
        <div className="relative z-10 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="max-w-2xl">
            <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl font-bold text-on-primary mb-6">{dict?.therapy?.title || "Therapies"}</h1>
            <p className="font-body-lg text-body-lg text-on-primary/90">{dict?.therapy?.desc || "Have a glance at the therapies we provide."}</p>
          </div>
        </div>
      </section>

      {/* Featured Therapies Grid */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-[32px] font-bold text-deep-blue-primary mb-4">{dict?.therapy?.featured || "Featured Treatments"}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            {dict?.therapy?.featuredDesc || "Discover our specialized treatment programs designed to accelerate recovery and restore optimal function."}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {translatedFeaturedTreatments.map((treatment, index) => (
            <article key={index} className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden group hover:shadow-[0_8px_30px_rgb(26,54,93,0.08)] transition-all duration-300 flex flex-col">
              {treatment.img ? (
                <div className="h-48 overflow-hidden relative">
                  <Image 
                    src={treatment.img} 
                    alt={treatment.title} 
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ) : (
                <div className="h-48 bg-soft-blue-accent flex items-center justify-center group-hover:bg-primary-fixed transition-colors duration-300">
                  <span className="material-symbols-outlined text-6xl text-deep-blue-primary">{treatment.icon}</span>
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-headline-md text-[24px] font-bold text-deep-blue-primary mb-3">{treatment.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-grow">{treatment.desc}</p>
                <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 font-label-md text-label-md text-healthcare-teal hover:text-deep-blue-primary transition-colors mt-auto">
                  {dict?.therapy?.learnMore || "Learn more"} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Additional Therapies Grid */}
      <section className="py-20 bg-surface px-margin-mobile md:px-margin-desktop">
        <div className="max-w-max-width mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="font-headline-lg text-[32px] font-bold text-deep-blue-primary mb-4">{dict?.therapy?.manyMore || "Many More..."}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">{dict?.therapy?.manyMoreDesc || "A wide array of evidence-based treatments tailored to your specific recovery needs."}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {translatedAdditionalTherapies.map((item, index) => (
              <div key={index} className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-healthcare-teal hover:shadow-[0_4px_20px_rgb(49,151,149,0.1)] transition-all duration-300 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-soft-blue-accent flex items-center justify-center mb-4 group-hover:bg-healthcare-teal transition-colors duration-300">
                  <span className="material-symbols-outlined text-deep-blue-primary group-hover:text-on-primary">{item.icon}</span>
                </div>
                <span className="font-label-md text-label-md text-on-surface">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
