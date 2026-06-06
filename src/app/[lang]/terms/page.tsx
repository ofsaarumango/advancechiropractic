import React from "react";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isHi = lang === "hi";
  const prefix = lang === 'en' ? '' : `/${lang}`;
  return {
    title: isHi ? "सेवा की शर्तें | एडवांस कायरोप्रैक्टिक क्लिनिक" : "Terms of Service | Advance Chiropractic Clinic",
    description: isHi 
      ? "एडवांस कायरोप्रैक्टिक क्लिनिक, पटना के लिए हमारी सेवा की शर्तें पढ़ें। हमारे क्लिनिक के नियमों, बुकिंग नीतियों और चिकित्सा अस्वीकरणों को समझें।"
      : "Read the Terms of Service for Advance Chiropractic Clinic in Patna. Understand our clinic guidelines, booking policies, and medical disclaimers.",
    alternates: {
      canonical: `${prefix}/terms`,
      languages: {
        'en': '/terms',
        'hi': '/hi/terms',
      },
    }
  };
}

export default async function TermsOfServicePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isHi = lang === "hi";

  return (
    <article className="w-full bg-surface py-12 md:py-20 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-[800px] mx-auto bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-medical p-6 md:p-12">
        {isHi ? (
          // Hindi Version
          <div className="space-y-8">
            <header className="border-b border-outline-variant pb-6">
              <h1 className="text-headline-lg font-headline-lg text-deep-blue-primary mb-2">सेवा की शर्तें</h1>
              <p className="text-body-md font-body-md text-on-surface-variant">अंतिम अपडेट: 3 जून, 2026</p>
            </header>

            <section className="space-y-4">
              <p className="text-body-lg font-body-lg text-on-surface leading-relaxed">
                एडवांस कायरोप्रैक्टिक क्लिनिक में आपका स्वागत है। हमारे क्लिनिक में अपॉइंटमेंट बुक करके, घरौंदा, पटना में हमारे भौतिक परिसर में आकर, या हमारी वेबसाइट का उपयोग करके, आप निम्नलिखित नियमों और शर्तों का पालन करने और उनसे बाध्य होने के लिए सहमत हैं।
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">1. सेवाओं का दायरा</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                हम डॉ. सुरेंद्र कुमार और हमारी योग्य नैदानिक टीम के विशेषज्ञ मार्गदर्शन के तहत पेशेवर कायरोप्रैक्टिक समायोजन, मैनुअल थेरेपी और फिजियोथेरेपी सेवाएं प्रदान करते हैं।
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
                <li>उपचार योजनाएं पूरी तरह से व्यक्तिगत शारीरिक आकलन और चिकित्सा इतिहास पर आधारित होती हैं।</li>
                <li>उपचार के परिणाम व्यक्ति-दर-व्यक्ति भिन्न हो सकते हैं और किसी भी विशिष्ट परिणाम या पूर्ण दर्द मुक्ति की 100% गारंटी नहीं दी जा सकती।</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">2. चिकित्सा अस्वीकरण</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                हमारी वेबसाइट पर उपलब्ध सामग्री (जैसे लेख, पाठ, ग्राफिक्स, चित्र) केवल सामान्य सूचनात्मक और शैक्षिक उद्देश्यों के लिए है। यह पेशेवर चिकित्सा सलाह, सटीक नैदानिक जांच, या व्यक्तिगत चिकित्सा का विकल्प नहीं है। किसी भी शारीरिक समस्या के लिए हमेशा व्यक्तिगत रूप से क्लिनिक में संपर्क करें।
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">3. अपॉइंटमेंट बुकिंग और रद्दीकरण नीति</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                सुलभ और कुशल देखभाल सुनिश्चित करने के लिए:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
                <li>सभी परामर्श और चिकित्सा सत्र पहले से निर्धारित किए जाने चाहिए (वेबसाइट फॉर्म, फोन कॉल या व्हाट्सएप के माध्यम से)।</li>
                <li>यदि आप अपना अपॉइंटमेंट रद्द करना या पुनर्निर्धारित करना चाहते हैं, तो कृपया निर्धारित समय से कम से कम 2 घंटे पहले क्लिनिक को सूचित करें, ताकि अन्य रोगियों को वह समय दिया जा सके।</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">4. रोगी की जिम्मेदारी</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                एक सुरक्षित और प्रभावी उपचार के लिए रोगी के रूप में आपकी निम्नलिखित जिम्मेदारियां हैं:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
                <li>आपको अपनी वर्तमान शारीरिक समस्याओं, एलर्जी, पिछले ऑपरेशन या अन्य चिकित्सा स्थितियों का बिल्कुल सटीक और पूरा इतिहास प्रदान करना होगा।</li>
                <li>सर्वोत्तम पुनर्प्राप्ति परिणामों के लिए हमारे चिकित्सकों द्वारा सुझाए गए घरेलू व्यायामों और सुरक्षा नियमों का लगन से पालन करें।</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">5. आचार संहिता</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                हम अपने क्लिनिक में सभी रोगियों और कर्मचारियों के लिए एक सुरक्षित, स्वच्छ और सम्मानजनक वातावरण बनाए रखने के लिए प्रतिबद्ध हैं। क्लिनिक परिसर में किसी भी प्रकार का दुर्व्यवहार, अभद्र व्यवहार या तोड़-फोड़ करने वाले रोगियों की चिकित्सा सेवाएं तत्काल प्रभाव से समाप्त की जा सकती हैं।
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">6. क्षेत्राधिकार और कानून</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                इन शर्तों से उत्पन्न होने वाले या एडवांस कायरोप्रैक्टिक क्लिनिक द्वारा प्रदान की जाने वाली चिकित्सा सेवाओं से संबंधित किसी भी विवाद या दावों का निपटारा विशेष रूप से पटना, बिहार, भारत के सक्षम न्यायालयों के क्षेत्राधिकार के तहत किया जाएगा।
              </p>
            </section>

            <footer className="border-t border-outline-variant pt-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">संपर्क जानकारी</h2>
              <p>इन सेवा शर्तों के संबंध में किसी भी स्पष्टीकरण के लिए, कृपया हमसे संपर्क करें:</p>
              <address className="not-italic bg-surface-container-low p-4 rounded-xl border border-outline-variant space-y-1">
                <p className="font-bold text-deep-blue-primary">एडवांस कायरोप्रैक्टिक क्लिनिक</p>
                <p>बॉम्बे डाइंग बिल्डिंग, कंकड़बाग कॉलोनी मोड़,</p>
                <p>घरौंदा, पटना, बिहार - 800001</p>
                <p className="pt-2">फोन: +91 84098 01156</p>
              </address>
            </footer>
          </div>
        ) : (
          // English Version
          <div className="space-y-8">
            <header className="border-b border-outline-variant pb-6">
              <h1 className="text-headline-lg font-headline-lg text-deep-blue-primary mb-2">Terms of Service</h1>
              <p className="text-body-md font-body-md text-on-surface-variant">Last Updated: June 3, 2026</p>
            </header>

            <section className="space-y-4">
              <p className="text-body-lg font-body-lg text-on-surface leading-relaxed">
                Welcome to Advance Chiropractic Clinic. By booking an appointment, visiting our clinic premises in Ghrounda, Patna, or using our website, you agree to comply with and be bound by the following Terms of Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">1. Scope of Clinical Services</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                We provide professional chiropractic adjustments, spinal manual therapy, and comprehensive physiotherapy sessions under the expert supervision of Dr. Surendra Kumar and our clinical staff.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
                <li>All treatments are custom-tailored based on individual diagnostics and personal clinical histories.</li>
                <li>Individual healing results vary, and no treatment or chiropractic adjustment offers guaranteed instant recovery.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">2. Medical Disclaimer</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                All educational materials, texts, descriptions, and graphics published on our website are provided for general educational purposes only. They do not constitute formal medical advice, diagnostic tests, or structured clinical prescriptions. Always visit our physical clinic for direct examination.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">3. Appointment and Cancellation Policy</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                To help us maintain seamless patient coordination and avoid slot gaps:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
                <li>All treatments must be scheduled in advance through our official website forms, phone, or WhatsApp.</li>
                <li>If you need to reschedule or cancel a booking, please notify us at least 2 hours before the scheduled time slot as a courtesy to other patients waiting for treatment.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">4. Patient Responsibilities</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                To guarantee safe and highly effective treatment, patients must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
                <li>Provide accurate, honest, and complete information regarding current pain, historical diagnoses, past surgeries, and allergies.</li>
                <li>Follow clinical advice, restricted movements, and home-care physical exercise protocols suggested by our team.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">5. Code of Conduct</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                We maintain a clean, secure, and compassionate healing space. Any physical misbehavior, verbal abuse, or destructive behavior directed towards clinical staff or other patients will result in immediate termination of care and removal from the clinic.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">6. Governing Law & Jurisdiction</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                These terms, and all services rendered by Advance Chiropractic Clinic, are governed by Indian law. Any disputes arising out of these terms shall be subject exclusively to the jurisdiction of the courts of Patna, Bihar, India.
              </p>
            </section>

            <footer className="border-t border-outline-variant pt-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">Contact Information</h2>
              <p>For any queries or interpretations of these Terms of Service, please reach out to us:</p>
              <address className="not-italic bg-surface-container-low p-4 rounded-xl border border-outline-variant space-y-1">
                <p className="font-bold text-deep-blue-primary">Advance Chiropractic Clinic</p>
                <p>Bombay Dyeing Building, Kankarbagh Colony More,</p>
                <p>Ghrounda, Patna, Bihar - 800001</p>
                <p className="pt-2">Phone: +91 84098 01156</p>
              </address>
            </footer>
          </div>
        )}
      </div>
    </article>
  );
}
