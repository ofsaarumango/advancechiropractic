import Image from "next/image";
import React from "react";

const treatments = [
  {
    title: "Back Pain",
    icon: "accessibility",
    image: "/images/treatment-back-pain.webp",
  },
  {
    title: "Neck Pain",
    icon: "airline_seat_flat",
    image: "/images/treatment-neck-pain.webp",
  },
  {
    title: "Knee Pain",
    icon: "sports_gymnastics",
    image: "/images/treatment-knee-pain.webp",
  },
  {
    title: "Sciatica Pain",
    icon: "bolt",
    image: "/images/treatment-sciatica.webp",
  },
  {
    title: "Slip Disc",
    icon: "healing",
    image: "/images/treatment-slip-disc.webp",
  },
  {
    title: "Joint Pain",
    icon: "sports_martial_arts",
    image: "/images/treatment-joint-pain.webp",
  },
  {
    title: "Kinesio Taping",
    icon: "medical_information",
    image: "/images/treatment-kinesio-taping.webp",
  },
  {
    title: "Headache",
    icon: "sentiment_very_dissatisfied",
    image: "/images/treatment-headache.webp",
  },
  {
    title: "Tingling & Dizziness",
    icon: "neurology",
    image: "/images/treatment-tingling-dizziness.webp",
  },
  {
    title: "Frozen Shoulder",
    icon: "physical_therapy",
    image: "/images/treatment-frozen-shoulder.webp",
  },
  {
    title: "Cupping Therapy",
    icon: "spa",
    image: "/images/treatment-cupping.webp",
  },
  {
    title: "Dry Needling",
    icon: "vaccines",
    image: "/images/treatment-dry-needling.webp",
  }
];

export default function SpecializedTreatments({ dict, lang }: { dict?: any, lang?: string }) {
  const defaultTreatments = [
    { title: "Back Pain", icon: "accessibility", image: "/images/treatment-back-pain.webp" },
    { title: "Neck Pain", icon: "airline_seat_flat", image: "/images/treatment-neck-pain.webp" },
    { title: "Knee Pain", icon: "sports_gymnastics", image: "/images/treatment-knee-pain.webp" },
    { title: "Sciatica Pain", icon: "bolt", image: "/images/treatment-sciatica.webp" },
    { title: "Slip Disc", icon: "healing", image: "/images/treatment-slip-disc.webp" },
    { title: "Joint Pain", icon: "sports_martial_arts", image: "/images/treatment-joint-pain.webp" },
    { title: "Kinesio Taping", icon: "medical_information", image: "/images/treatment-kinesio-taping.webp" },
    { title: "Headache", icon: "sentiment_very_dissatisfied", image: "/images/treatment-headache.webp" },
    { title: "Tingling & Dizziness", icon: "neurology", image: "/images/treatment-tingling-dizziness.webp" },
    { title: "Frozen Shoulder", icon: "physical_therapy", image: "/images/treatment-frozen-shoulder.webp" },
    { title: "Cupping Therapy", icon: "spa", image: "/images/treatment-cupping.webp" },
    { title: "Dry Needling", icon: "vaccines", image: "/images/treatment-dry-needling.webp" }
  ];

  const translatedTreatments = defaultTreatments.map((t, i) => ({
    ...t,
    title: dict?.treatments?.items?.[i]?.title || t.title
  }));

  return (
    <section className="py-20 md:py-32 bg-background" id="services">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-headline-lg font-headline-lg text-deep-blue-primary">{dict?.treatments?.title || "Specialized Treatments"}</h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">{dict?.treatments?.desc || "We offer targeted therapies for various musculoskeletal conditions to help you return to a pain-free life."}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {translatedTreatments.map((treatment, index) => (
            <div key={index} className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-medical-hover transition-all duration-300 group cursor-pointer">
              <div className="aspect-video overflow-hidden relative">
                <Image 
                  src={treatment.image} 
                  alt={`${treatment.title} Treatment`} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 bg-soft-blue-accent rounded-lg flex items-center justify-center text-healthcare-teal shrink-0">
                  <span className="material-symbols-outlined text-xl">{treatment.icon}</span>
                </div>
                <h3 className="text-body-md font-headline-md text-deep-blue-primary font-bold leading-tight">{treatment.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
