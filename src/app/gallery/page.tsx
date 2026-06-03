import Gallery from "@/components/home/Gallery";
import React from "react";

export const metadata = {
  title: "Gallery & Facilities | Advance Chiropractic Clinic",
  description: "View the gallery and facilities at Advance Chiropractic Clinic in Patna.",
};

export default function GalleryPage() {
  return (
    <div className="w-full pt-20 bg-surface">
      <div className="text-center max-w-2xl mx-auto pt-12 pb-6 px-margin-mobile md:px-margin-desktop space-y-4">
        <span className="text-label-md font-label-md text-healthcare-teal uppercase tracking-widest">Our Clinic</span>
        <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-deep-blue-primary">Gallery & Facilities</h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant">Take a virtual tour of our Patna facility, specialized equipment, and clinical environment.</p>
      </div>
      <Gallery />
    </div>
  );
}
