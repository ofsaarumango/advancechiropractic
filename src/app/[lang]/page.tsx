import Hero from "@/components/home/Hero";
import SpecializedTreatments from "@/components/home/SpecializedTreatments";
import SymptomsAccordion from "@/components/home/SymptomsAccordion";
import Testimonials from "@/components/home/Testimonials";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Home(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero dict={dict} lang={lang} />
      <SpecializedTreatments dict={dict} lang={lang} />
      <SymptomsAccordion dict={dict} lang={lang} />
      <Testimonials dict={dict} lang={lang} />
    </>
  );
}
