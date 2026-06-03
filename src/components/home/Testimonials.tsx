import React from "react";

const testimonials = [
  {
    quote: "Dr. Surendra Kumar accurately diagnosed my chronic lower back pain. After a few sessions, the shooting pain completely subsided. Highly recommended for anyone in Patna.",
    initials: "AK",
    name: "Abhay Kumar",
    stars: 5
  },
  {
    quote: "I was suffering from severe sciatica. The adjustments and cupping therapy provided immense relief. The clinic environment is exceptionally clean and professional.",
    initials: "SK",
    name: "Sonu Kumar",
    stars: 5
  },
  {
    quote: "Excellent treatment for my frozen shoulder. The dry needling technique really helped restore my mobility. Very grateful to the entire team at Advance Chiropractic.",
    initials: "KS",
    name: "Kumar Satyam",
    stars: 4.5
  }
];

const otherPatients = ["Ashutosh Kumar", "Abha Devi", "Smriti Devi"];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-headline-lg font-headline-lg text-deep-blue-primary">Our Valuable Clients</h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">Hear from our patients in Patna who have reclaimed their active lives through our dedicated care.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 shadow-sm relative pt-12">
              <div className="absolute -top-6 left-8 bg-healthcare-teal text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                <span aria-hidden="true" className="material-symbols-outlined filled">format_quote</span>
              </div>
              
              <div className="flex items-center gap-1 text-clinical-purple mb-4">
                {[...Array(Math.floor(testimonial.stars))].map((_, i) => (
                  <span key={i} aria-hidden="true" className="material-symbols-outlined filled text-sm">star</span>
                ))}
                {testimonial.stars % 1 !== 0 && (
                  <span aria-hidden="true" className="material-symbols-outlined filled text-sm">star_half</span>
                )}
              </div>
              
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-4 border-t border-outline-variant/20 pt-4">
                <div className="w-10 h-10 bg-soft-blue-accent rounded-full flex items-center justify-center text-deep-blue-primary font-bold text-label-md">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-label-md font-label-md text-deep-blue-primary">{testimonial.name}</p>
                  <p className="text-caption font-caption text-on-surface-variant">Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-caption font-caption text-on-surface-variant mb-4 uppercase tracking-widest">Also Trusted By</p>
          <div className="flex flex-wrap justify-center gap-3">
            {otherPatients.map((patient, idx) => (
              <span key={idx} className="px-4 py-2 bg-surface-container-low rounded-full text-label-md font-label-md text-deep-blue-primary border border-outline-variant/20">
                {patient}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
