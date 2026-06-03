"use client";

import Image from "next/image";
import React, { useState } from "react";

const symptoms = [
  {
    title: "Back Pain",
    description: "Often presents as a shooting, searing, or stabbing pain. The discomfort typically worsens with bending, lifting, standing, or walking."
  },
  {
    title: "Neck Pain",
    description: "Characterized by general stiffness, severe muscle spasms, reduced range of movement, and often accompanied by tension headaches."
  },
  {
    title: "Knee Pain",
    description: "Symptoms include localized stiffness, visible swelling, a feeling of instability or giving way, and sometimes popping or crunching noises."
  },
  {
    title: "Sciatica",
    description: "Distinctive discomfort radiating from the lower back down through the leg. Pain can vary widely from a mild ache to a sharp, burning sensation or excruciating electric shock."
  },
  {
    title: "Slipped Disc",
    description: "Frequently causes numbness, noticeable weakness in the affected area, and persistent tingling or burning sensations radiating along nerve paths."
  }
];

export default function SymptomsAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 bg-surface-container-low border-y border-outline-variant/20">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6 lg:sticky lg:top-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-soft-blue-accent text-deep-blue-primary rounded-full text-label-md font-label-md">
            <span aria-hidden="true" className="material-symbols-outlined filled text-healthcare-teal text-sm">info</span>
            Understanding Your Pain
          </div>
          <h2 className="text-headline-lg font-headline-lg text-deep-blue-primary leading-tight">
            Common Symptoms We Treat
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Identifying your symptoms accurately is the first step towards a targeted cure. If you experience any of these, specialized chiropractic intervention can help.
          </p>
          <div className="pt-4 relative h-64 w-full rounded-2xl shadow-sm border border-outline-variant/20 overflow-hidden">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnmU4zHYm7yBOMTp8tVOscsz_VaTgiQKZOMILjB0l87tbosUqEi6tu9dMIEVJrIq7RfP48SsjBSqGomz7OS4VThaKC9MrL73kDA3beC7wqD75wSOo8W3sfVmACrDAGJFfaC-xdZmA8f7LUyfBzKiyq0xQwlkFQEwEukBDTT9kzuL-ezNwnrDqb7SacLzCPyNeZrGdfYifF86PqshCZS9PAIAG4xEIEtF3heGetOyH9ruVjNOCd0Uw5DJxRG1D7fMRn_c2wk4aBGGo" 
              alt="Anatomical spine model" 
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="space-y-4">
          {symptoms.map((symptom, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index} className={`accordion-item bg-surface-container-lowest border border-outline-variant/40 rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${isActive ? 'ring-2 ring-healthcare-teal/50' : ''}`}>
                <button 
                  aria-expanded={isActive} 
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-surface-container-lowest hover:bg-soft-blue-accent/50 transition-colors focus:outline-none"
                >
                  <span className="text-body-lg font-headline-md text-deep-blue-primary font-bold text-left">{symptom.title}</span>
                  <span aria-hidden="true" className={`material-symbols-outlined text-healthcare-teal transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                <div 
                  className={`bg-background px-6 border-t border-outline-variant/20 transition-all duration-300 ease-in-out overflow-hidden ${isActive ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0 border-transparent'}`}
                >
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    {symptom.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
