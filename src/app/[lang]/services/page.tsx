import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getDictionary } from "@/get-dictionary";

import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Physiotherapy Services | Advance Chiropractic Clinic",
    description: "Explore the comprehensive physiotherapy services at Advance Chiropractic Clinic in Patna. We specialize in Cardiac, Musculoskeletal, Vestibular, Neuro, Sports, and Home Care Physiotherapy.",
    alternates: {
      canonical: `/${lang}/services`,
      languages: {
        'en': '/en/services',
        'hi': '/hi/services',
      },
    },
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const defaultServices = [
    {
      title: "Cardiac Rehabilitation",
      icon: "favorite",
      desc: "A customized program of exercise and education designed to help you recover after a heart attack, heart surgery, or other cardiac condition.",
      color: "text-red-500 bg-red-50"
    },
    {
      title: "Musculoskeletal Physiotherapy",
      icon: "accessibility_new",
      desc: "Specialized care for restoring mobility, strength, and function to joints, muscles, ligaments, and tendons.",
      color: "text-healthcare-teal bg-teal-50"
    },
    {
      title: "Vestibular Rehabilitation",
      icon: "balance",
      desc: "Targeted exercise programs to alleviate dizziness, balance problems, and vertigo issues related to the inner ear.",
      color: "text-indigo-500 bg-indigo-50"
    },
    {
      title: "Pre & Post Surgery Rehabilitation",
      icon: "medical_services",
      desc: "Tailored physical therapy to prepare your body for surgery and optimize recovery, restoring full range of motion post-operation.",
      color: "text-blue-500 bg-blue-50"
    },
    {
      title: "Women's Health Physiotherapy",
      icon: "female",
      desc: "Compassionate pelvic floor rehab and support for pre-natal, post-natal, and other gender-specific health conditions.",
      color: "text-pink-500 bg-pink-50"
    },
    {
      title: "Sports Physiotherapy",
      icon: "sports_gymnastics",
      desc: "Focused injury rehabilitation and athletic performance training to help you safely return to sport and prevent future issues.",
      color: "text-amber-500 bg-amber-50"
    },
    {
      title: "Pediatric Physiotherapy",
      icon: "child_care",
      desc: "Gentle, play-based therapeutic exercises to support children's physical development, coordination, and motor skills.",
      color: "text-green-500 bg-green-50"
    },
    {
      title: "Geriatric Physiotherapy",
      icon: "elderly",
      desc: "Focused mobility and strength training to manage arthritis, balance loss, and keep seniors active, safe, and independent.",
      color: "text-cyan-500 bg-cyan-50"
    },
    {
      title: "Neuro Physiotherapy",
      icon: "psychology",
      desc: "Expert rehabilitation for patients recovering from stroke, Parkinson's, Multiple Sclerosis, paralysis, or spinal cord injuries.",
      color: "text-clinical-purple bg-purple-50"
    },
    {
      title: "Home Care Physiotherapy",
      icon: "home",
      desc: "Dedicated professional physiotherapy assessments and treatment programs brought directly to the convenience of your home.",
      color: "text-emerald-500 bg-emerald-50"
    }
  ];

  const translatedServices = defaultServices.map((service, i) => ({
    ...service,
    title: dict?.services?.items?.[i]?.title || service.title,
    desc: dict?.services?.items?.[i]?.desc || service.desc
  }));

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
        <div className="flex flex-col gap-6 pr-0 md:pr-12">
          <span className="text-label-md font-label-md text-healthcare-teal uppercase tracking-widest">{dict?.services?.badge || "Clinical Excellence"}</span>
          <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-deep-blue-primary leading-tight">
            {dict?.services?.title || "Targeted Physiotherapy for Active Living"}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {dict?.services?.desc || "Our evidence-based physiotherapy services are designed to diagnose, treat, and prevent structural and functional disorders of the body. Experience a clinical approach to pain relief, mobility, and recovery."}
          </p>
          <div className="pt-4">
            <Link href="#physiotherapy-services">
              <button className="bg-deep-blue-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded hover:bg-healthcare-teal transition-colors duration-300">
                {dict?.services?.explore || "Explore Services"}
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-8 md:mt-0 relative rounded-xl overflow-hidden h-[400px] shadow-medical">
          <Image 
            src="/images/services-hero.webp"
            alt="Modern clinic therapy room"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-deep-blue-primary/10 to-transparent"></div>
        </div>
      </section>

      {/* Grid Services Section */}
      <section id="physiotherapy-services" className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-16">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-deep-blue-primary mb-4">{dict?.services?.sectionTitle || "Our Physiotherapy Services"}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">{dict?.services?.sectionDesc || "We provide a comprehensive range of clinical physiotherapy treatments customized to meet your healing and movement goals."}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {translatedServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 flex flex-col justify-between shadow-medical hover:shadow-medical-hover transition-all duration-300 group"
            >
              <div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 shrink-0 text-2xl font-semibold text-deep-blue-primary bg-soft-blue-accent group-hover:bg-deep-blue-primary group-hover:text-white transition-colors duration-300`}>
                  <span className="material-symbols-outlined text-[24px]">{service.icon}</span>
                </div>
                <h3 className="font-headline-md text-[20px] font-bold text-deep-blue-primary mb-3">{service.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
              <div>
                <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 font-label-md text-label-md text-healthcare-teal hover:text-deep-blue-primary transition-colors">
                  {dict?.services?.book || "Book Consult"} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-soft-blue-accent border-y border-outline-variant/30 mt-12">
        <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-headline-lg text-headline-lg text-deep-blue-primary mb-4">{dict?.services?.ctaTitle || "Restore Your Movement Today"}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {dict?.services?.ctaDesc || "Schedule a comprehensive initial assessment. Our team will design a personalized recovery plan tailored to your condition."}
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link href={`/${lang}/contact`}>
              <button className="bg-deep-blue-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded hover:bg-clinical-purple transition-colors duration-300 shadow-md">
                {dict?.hero?.requestApt || "Request An Appointment"}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
