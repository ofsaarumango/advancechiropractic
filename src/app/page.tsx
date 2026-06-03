import Hero from "@/components/home/Hero";
import SpecializedTreatments from "@/components/home/SpecializedTreatments";
import SymptomsAccordion from "@/components/home/SymptomsAccordion";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <SpecializedTreatments />
      <SymptomsAccordion />
      <Testimonials />
    </>
  );
}
