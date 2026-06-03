import type { Metadata } from "next";
import "../globals.css";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import { getDictionary } from "@/get-dictionary";
import { Locale, i18n } from "@/i18n-config";

export const metadata: Metadata = {
  title: "Advance Chiropractic Clinic | Best Chiropractic Clinic in Patna",
  description: "Experience expert chiropractic care and cure at Advance Chiropractic Clinic in Patna, led by Dr. Surendra Kumar. Specializing in back pain, neck pain, sciatica, and more.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className="scroll-smooth antialiased bg-background text-on-surface"
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800;900&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body-md pt-20 lg:pt-[117px] min-h-screen flex flex-col">
        <TopNavBar dict={dict} lang={lang} />
        <main className="flex-1">
          {props.children}
        </main>
        <Footer dict={dict} lang={lang} />
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/918409801156"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.731-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.632 1.97 14.161.947 11.533.947c-5.445 0-9.87 4.373-9.874 9.803-.002 1.956.52 3.864 1.512 5.539L2.14 21.846l5.808-1.52c.002 0 .003 0 .004-.002zm11.704-7.854c-.299-.149-1.77-.873-2.043-.973-.272-.101-.471-.149-.669.149-.198.299-.767.973-.94.1.173-.873.84-.972 1.114-1.12.274-.149.546-.746.67-.846.124-.099.247-.149.371-.149.124 0 .247.05.371.149.124.099 1.013 2.483 1.101 2.682.089.199.089.373.012.522-.077.149-.297.299-.544.448-.247.149-.656.347-1.111.347-.456 0-.89-.199-1.311-.472-.348-.225-1.077-.397-2.05-1.266-.757-.674-1.269-1.509-1.417-1.758-.149-.249-.016-.384.108-.507.112-.111.247-.299.371-.448.124-.15.165-.249.247-.418.082-.169.041-.318-.02-.468-.062-.15-.545-1.346-.747-1.839-.197-.479-.413-.415-.568-.42-.143-.005-.308-.005-.473-.005-.165 0-.433.062-.659.309-.227.247-.866.846-.866 2.064 0 1.219.89 2.396.99 2.531.1.136 1.752 2.674 4.246 3.75.593.256 1.056.408 1.417.523.596.19 1.138.163 1.567.099.478-.072 1.77-.72 2.019-1.417.247-.697.247-1.294.173-1.417-.074-.124-.272-.198-.57-.347z" />
          </svg>
          {/* Tooltip on hover */}
          <span className="absolute right-16 bg-[#1A365D] text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md pointer-events-none whitespace-nowrap border border-outline-variant/20">
            Chat on WhatsApp
          </span>
        </a>
      </body>
    </html>
  );
}
