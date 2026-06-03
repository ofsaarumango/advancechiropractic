import type { Metadata } from "next";
import "./globals.css";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Advance Chiropractic Clinic | Best Chiropractic Clinic in Patna",
  description: "Experience expert chiropractic care and cure at Advance Chiropractic Clinic in Patna, led by Dr. Surendra Kumar. Specializing in back pain, neck pain, sciatica, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased bg-background text-on-surface"
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800;900&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body-md pt-20 lg:pt-[117px] min-h-screen flex flex-col">
        <TopNavBar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
