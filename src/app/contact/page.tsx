import React from "react";

export const metadata = {
  title: "Contact Advance Chiropractic Clinic | Patna, Bihar",
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Title */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop mb-12 mt-12">
        <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-deep-blue-primary mb-4">
          Get in Touch
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          We're here to help you on your journey to optimal health. Reach out to schedule an appointment or ask any questions about our chiropractic care.
        </p>
      </section>

      {/* Bento Grid Layout */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-20">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant shadow-sm rounded-xl p-6 md:p-10 flex flex-col justify-between">
          <div>
            <h2 className="font-headline-md text-headline-md text-deep-blue-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-healthcare-teal">mail</span>
              Send a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="firstName">First Name</label>
                  <input className="border border-outline-variant focus:border-deep-blue-primary focus:ring-1 focus:ring-deep-blue-primary/20 font-body-md text-body-md bg-transparent rounded-lg px-4 py-3 w-full outline-none transition-all" id="firstName" placeholder="Jane" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="lastName">Last Name</label>
                  <input className="border border-outline-variant focus:border-deep-blue-primary focus:ring-1 focus:ring-deep-blue-primary/20 font-body-md text-body-md bg-transparent rounded-lg px-4 py-3 w-full outline-none transition-all" id="lastName" placeholder="Doe" type="text" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">Email Address</label>
                  <input className="border border-outline-variant focus:border-deep-blue-primary focus:ring-1 focus:ring-deep-blue-primary/20 font-body-md text-body-md bg-transparent rounded-lg px-4 py-3 w-full outline-none transition-all" id="email" placeholder="jane@example.com" type="email" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="phone">Phone Number</label>
                  <input className="border border-outline-variant focus:border-deep-blue-primary focus:ring-1 focus:ring-deep-blue-primary/20 font-body-md text-body-md bg-transparent rounded-lg px-4 py-3 w-full outline-none transition-all" id="phone" placeholder="084098 01156" type="tel" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="message">How can we help you?</label>
                <textarea className="border border-outline-variant focus:border-deep-blue-primary focus:ring-1 focus:ring-deep-blue-primary/20 font-body-md text-body-md bg-transparent rounded-lg px-4 py-3 w-full outline-none transition-all resize-none" id="message" placeholder="Describe your symptoms or reason for visit..." rows={5}></textarea>
              </div>
            </form>
          </div>
          <div className="mt-8 pt-6 border-t border-outline-variant/30 flex justify-end">
            <button className="bg-deep-blue-primary text-on-primary hover:bg-healthcare-teal transition-colors px-8 py-3 rounded-lg font-label-md text-label-md flex items-center gap-2">
              Submit Request
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Right Column: Info Cards */}
        <div className="lg:col-span-5 flex flex-col gap-gutter">
          {/* Contact Details Card */}
          <div className="bg-surface-container-lowest border border-outline-variant shadow-sm rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300 group">
            <h3 className="font-headline-md text-headline-md text-deep-blue-primary mb-6 border-b border-outline-variant/30 pb-4">Clinic Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-soft-blue-accent p-3 rounded-full text-deep-blue-primary group-hover:bg-deep-blue-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined filled">call</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant mb-1">Phone</p>
                  <p className="font-body-lg text-body-lg text-on-surface font-semibold">084098 01156</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-soft-blue-accent p-3 rounded-full text-deep-blue-primary group-hover:bg-deep-blue-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined filled">email</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant mb-1">Email Addresses</p>
                  <p className="font-body-md text-body-md text-on-surface">info@advancechiropractic.in</p>
                  <p className="font-body-md text-body-md text-on-surface mt-1">dr.surendr1@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location & Map Card */}
          <div className="bg-surface-container-lowest border border-outline-variant shadow-sm rounded-xl p-6 md:p-8 flex flex-col flex-grow">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-soft-blue-accent p-3 rounded-full text-deep-blue-primary">
                <span className="material-symbols-outlined filled">location_on</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface-variant mb-1">Location</p>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  Bombay dyeing building,<br />
                  Kankarbagh Colony More,<br />
                  Patna, Bihar
                </p>
              </div>
            </div>
            {/* Map Placeholder */}
            <div 
              className="w-full h-48 bg-surface-container-high rounded-lg border border-outline-variant overflow-hidden relative mt-auto flex items-center justify-center bg-cover bg-center" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB06PbuRzm5744b6pT1YzcjLkPXyD8e0pJSGvo2nZjbB1GbfAI9kp6Be-sjSjOaG4O4ndIv9p9GTYcMItdSKbqguJT_iHivYc_sZmFT7Q0_4qzKf2Qd49J9Klce-oxsrlReQnFflXnOHWaB66RAzXK2FwnjhpkrKZ33rEU4xcmqMOUvt9zcePxce0vQpDXmdVXaOF5r7a_8H8ZBEEW1gu7DunK5fBbHkESVaQwsBq5uIEAfIJiPMqB3RuH88Dzh367PJlydogfEcNY')" }}
            >
              <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]"></div>
              <div className="relative z-10 bg-surface-container-lowest/90 px-4 py-2 rounded-lg shadow-sm border border-outline-variant flex items-center gap-2 cursor-pointer hover:bg-surface transition-colors">
                <span className="material-symbols-outlined text-healthcare-teal">map</span>
                <span className="font-label-md text-label-md text-deep-blue-primary">View on Maps</span>
              </div>
            </div>
          </div>

          {/* Socials Card */}
          <div className="bg-surface-container-lowest border border-outline-variant shadow-sm rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Connect With Us</h3>
            <div className="flex gap-3">
              <a href="#" className="bg-soft-blue-accent text-deep-blue-primary hover:bg-deep-blue-primary hover:text-on-primary transition-colors px-4 py-2 rounded-full font-label-md text-label-md flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">public</span>
                Facebook
              </a>
              <a href="#" className="bg-soft-blue-accent text-deep-blue-primary hover:bg-deep-blue-primary hover:text-on-primary transition-colors px-4 py-2 rounded-full font-label-md text-label-md flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">share</span>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
