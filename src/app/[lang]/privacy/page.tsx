import React from "react";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isHi = lang === "hi";
  return {
    title: isHi ? "गोपनीयता नीति | एडवांस कायरोप्रैक्टिक क्लिनिक" : "Privacy Policy | Advance Chiropractic Clinic",
    description: isHi 
      ? "एडवांस कायरोप्रैक्टिक क्लिनिक, पटना के लिए हमारी गोपनीयता नीति पढ़ें। हम आपके व्यक्तिगत और स्वास्थ्य डेटा की सुरक्षा के लिए प्रतिबद्ध हैं।"
      : "Read the Privacy Policy for Advance Chiropractic Clinic in Patna. We are committed to protecting your personal and medical records data.",
    alternates: {
      canonical: `/${lang}/privacy`,
    }
  };
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isHi = lang === "hi";

  return (
    <article className="w-full bg-surface py-12 md:py-20 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-[800px] mx-auto bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-medical p-6 md:p-12">
        {isHi ? (
          // Hindi Version
          <div className="space-y-8">
            <header className="border-b border-outline-variant pb-6">
              <h1 className="text-headline-lg font-headline-lg text-deep-blue-primary mb-2">गोपनीयता नीति</h1>
              <p className="text-body-md font-body-md text-on-surface-variant">अंतिम अपडेट: 3 जून, 2026</p>
            </header>

            <section className="space-y-4">
              <p className="text-body-lg font-body-lg text-on-surface leading-relaxed">
                एडवांस कायरोप्रैक्टिक क्लिनिक ("हम", "हमारा", "हमें") में आपका स्वागत है। हम पटना में आपके विश्वसनीय कायरोप्रैक्टिक और फिजियोथेरेपी प्रदाता के रूप में आपकी व्यक्तिगत और स्वास्थ्य संबंधी जानकारी की सुरक्षा के लिए पूरी तरह से प्रतिबद्ध हैं।
              </p>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                यह गोपनीयता नीति बताती है कि जब आप घरौंदा, पटना में हमारे क्लिनिक पर आते हैं, हमारी वेबसाइट का उपयोग करते हैं, या हमसे संपर्क करते हैं, तो हम आपकी जानकारी कैसे एकत्र, उपयोग, साझा और सुरक्षित करते हैं।
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">1. जानकारी जो हम एकत्र करते हैं</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                आपके क्लिनिकल मूल्यांकन और उपचार के दौरान, हम निम्नलिखित श्रेणियां एकत्र कर सकते हैं:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
                <li><strong>व्यक्तिगत विवरण:</strong> नाम, आयु, लिंग, ईमेल पता, फोन नंबर और पता।</li>
                <li><strong>स्वास्थ्य और नैदानिक इतिहास:</strong> पिछले चिकित्सा इतिहास, लक्षण, दर्द के क्षेत्र, रीढ़ और जोड़ों की रिपोर्ट, पूर्व उपचार विवरण और एक्स-रे/एमआरआई रिपोर्ट्स।</li>
                <li><strong>वेबसाइट उपयोग डेटा:</strong> जब आप हमारी साइट ब्राउज़ करते हैं, तो आईपी पता, ब्राउज़र प्रकार, उपयोग की अवधि और पेज व्यू विवरण।</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">2. जानकारी का उपयोग</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                हम आपकी जानकारी का उपयोग मुख्य रूप से निम्नलिखित कार्यों के लिए करते हैं:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
                <li>आपके लक्षणों का सटीक निदान करने और उपयुक्त चिकित्सा/कायरोप्रैक्टिक समायोजन प्रदान करने के लिए।</li>
                <li>अपॉइंटमेंट शेड्यूलिंग, रद्दीकरण या बदलावों के लिए आपसे संवाद करने के लिए।</li>
                <li>व्हाट्सएप के माध्यम से आपकी पूछताछ और बुकिंग अनुरोधों का जवाब देने के लिए।</li>
                <li>कानूनी और चिकित्सा सेवा मानकों के अनुसार चिकित्सा इतिहास और उपचार रिकॉर्ड का दस्तावेजीकरण करने के लिए।</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">3. गोपनीयता और डेटा साझा करना</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                हम आपके डेटा की गोपनीयता का पूरा सम्मान करते हैं।
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
                <li>हम आपकी व्यक्तिगत या चिकित्सा जानकारी को तीसरे पक्षों को बेचते या किराए पर नहीं देते हैं।</li>
                <li>आपकी स्पष्ट सहमति के बिना हम आपका डेटा किसी अन्य चिकित्सक या स्वास्थ्य विशेषज्ञ के साथ साझा नहीं करते हैं (जब तक कि यह आपकी आपातकालीन चिकित्सा स्थिति के लिए आवश्यक न हो)।</li>
                <li>कानूनी दायित्वों या सरकारी आदेशों के पालन के तहत, यदि आवश्यक हो, तो कानून प्रवर्तन एजेंसियों के साथ जानकारी साझा की जा सकती है।</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">4. डेटा सुरक्षा</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                हम आपके संवेदनशील स्वास्थ्य रिकॉर्ड को अनधिकृत पहुंच, परिवर्तन या प्रकटीकरण से बचाने के लिए उचित सुरक्षा प्रोटोकॉल और एन्क्रिप्शन मानकों का उपयोग करते हैं।
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">5. व्हाट्सएप और डिजिटल संचार</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                जब आप हमारी वेबसाइट पर संपर्क फ़ॉर्म भरते हैं और व्हाट्सएप के माध्यम से सबमिट करते हैं, तो आपकी जानकारी आपके व्हाट्सएप एप्लिकेशन के माध्यम से सुरक्षित रूप से भेजी जाती है। हम इस डेटा का उपयोग केवल बुकिंग और क्लिनिक संबंधी चर्चाओं के लिए करते हैं।
              </p>
            </section>

            <footer className="border-t border-outline-variant pt-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">संपर्क करें</h2>
              <p>यदि इस नीति के बारे में आपके कोई प्रश्न हैं, तो आप हमसे नीचे दिए गए पते पर संपर्क कर सकते हैं:</p>
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
              <h1 className="text-headline-lg font-headline-lg text-deep-blue-primary mb-2">Privacy Policy</h1>
              <p className="text-body-md font-body-md text-on-surface-variant">Last Updated: June 3, 2026</p>
            </header>

            <section className="space-y-4">
              <p className="text-body-lg font-body-lg text-on-surface leading-relaxed">
                Welcome to Advance Chiropractic Clinic ("we," "our," "us"). As your trusted provider of chiropractic and physiotherapy services in Patna, we are deeply committed to protecting your personal and clinical information.
              </p>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our clinic at Ghrounda, Patna, use our website, or interact with our staff.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">1. Information We Collect</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                During your clinical consultation, assessment, and treatment phases, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
                <li><strong>Personal Identifiable Information:</strong> Name, age, gender, email address, phone number, and mailing address.</li>
                <li><strong>Medical & Health Records:</strong> Previous medical history, current symptoms, pain severity, spine and joint assessment records, past treatments, and X-ray/MRI reports.</li>
                <li><strong>Usage Data:</strong> IP address, browser type, visit durations, and page interactions when using our official website.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">2. How We Use Your Information</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                We use the collected information for the following clinical and operational purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
                <li>To accurately diagnose your musculoskeletal condition and design customized treatment plans.</li>
                <li>To schedule, confirm, modify, or remind you about appointments.</li>
                <li>To communicate with you via WhatsApp regarding consultation queries or booking requests.</li>
                <li>To maintain robust medical files in strict accordance with professional healthcare practices and standards.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">3. Information Sharing and Disclosure</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                We respect your privacy and enforce strict confidentiality policies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
                <li>We do not sell, trade, or lease patient records or personal information to third parties.</li>
                <li>We only share medical information with other healthcare practitioners (referrals) under your explicit verbal or written consent.</li>
                <li>We may disclose information where required by Indian law, judicial proceedings, or legal regulations to ensure clinical safety.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">4. Data Security</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                We implement appropriate administrative, technical, and physical security measures to safeguard your physical and electronic health records against unauthorized access, loss, or alteration.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">5. WhatsApp & Digital Communications</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Our contact forms route information through your local WhatsApp application, ensuring direct secure communication. We only use these details to coordinate treatment sessions and answer your queries.
              </p>
            </section>

            <footer className="border-t border-outline-variant pt-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
              <h2 className="text-headline-md font-headline-md text-deep-blue-primary">Contact Us</h2>
              <p>If you have any questions or concerns regarding this policy, please reach out to us:</p>
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
