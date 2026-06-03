import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

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
      className={`${inter.variable} ${montserrat.variable} scroll-smooth antialiased bg-background text-on-surface`}
    >
      {/* We need the Google Material Symbols font as well */}
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body-md pt-20 min-h-screen flex flex-col">
        <TopNavBar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
