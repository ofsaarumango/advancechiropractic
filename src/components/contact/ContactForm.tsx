"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !phone) {
      alert("Please fill in your First Name, Last Name, and Phone Number.");
      return;
    }
    
    // Format message cleanly for WhatsApp
    const formattedMessage = 
      `Hello Advance Chiropractic Clinic,\n\n` +
      `I would like to request an appointment.\n\n` +
      `*Name:* ${firstName} ${lastName}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email || "Not provided"}\n` +
      `*Message:* ${message || "Not provided"}`;
      
    const encodedText = encodeURIComponent(formattedMessage);
    window.open(`https://wa.me/918409801156?text=${encodedText}`, "_blank");
  };

  return (
    <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant shadow-sm rounded-xl p-6 md:p-10 flex flex-col justify-between">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="font-headline-md text-headline-md text-deep-blue-primary mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-healthcare-teal">mail</span>
            Send a Message
          </h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="firstName">First Name *</label>
                <input 
                  className="border border-outline-variant focus:border-deep-blue-primary focus:ring-1 focus:ring-deep-blue-primary/20 font-body-md text-body-md bg-transparent rounded-lg px-4 py-3 w-full outline-none transition-all" 
                  id="firstName" 
                  placeholder="Jane" 
                  type="text" 
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="lastName">Last Name *</label>
                <input 
                  className="border border-outline-variant focus:border-deep-blue-primary focus:ring-1 focus:ring-deep-blue-primary/20 font-body-md text-body-md bg-transparent rounded-lg px-4 py-3 w-full outline-none transition-all" 
                  id="lastName" 
                  placeholder="Doe" 
                  type="text" 
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">Email Address</label>
                <input 
                  className="border border-outline-variant focus:border-deep-blue-primary focus:ring-1 focus:ring-deep-blue-primary/20 font-body-md text-body-md bg-transparent rounded-lg px-4 py-3 w-full outline-none transition-all" 
                  id="email" 
                  placeholder="jane@example.com" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="phone">Phone Number *</label>
                <input 
                  className="border border-outline-variant focus:border-deep-blue-primary focus:ring-1 focus:ring-deep-blue-primary/20 font-body-md text-body-md bg-transparent rounded-lg px-4 py-3 w-full outline-none transition-all" 
                  id="phone" 
                  placeholder="+91 84098 01156" 
                  type="tel" 
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="message">How can we help you?</label>
              <textarea 
                className="border border-outline-variant focus:border-deep-blue-primary focus:ring-1 focus:ring-deep-blue-primary/20 font-body-md text-body-md bg-transparent rounded-lg px-4 py-3 w-full outline-none transition-all resize-none" 
                id="message" 
                placeholder="Describe your symptoms or reason for visit..." 
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-outline-variant/30 flex justify-end">
          <button 
            type="submit"
            className="bg-deep-blue-primary text-on-primary hover:bg-[#25D366] hover:text-white transition-all px-8 py-3 rounded-lg font-label-md text-label-md flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg border border-transparent active:scale-95 duration-200"
          >
            Submit Request via WhatsApp
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.731-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.632 1.97 14.161.947 11.533.947c-5.445 0-9.87 4.373-9.874 9.803-.002 1.956.52 3.864 1.512 5.539L2.14 21.846l5.808-1.52c.002 0 .003 0 .004-.002zm11.704-7.854c-.299-.149-1.77-.873-2.043-.973-.272-.101-.471-.149-.669.149-.198.299-.767.973-.94.1.173-.873.84-.972 1.114-1.12.274-.149.546-.746.67-.846.124-.099.247-.149.371-.149.124 0 .247.05.371.149.124.099 1.013 2.483 1.101 2.682.089.199.089.373.012.522-.077.149-.297.299-.544.448-.247.149-.656.347-1.111.347-.456 0-.89-.199-1.311-.472-.348-.225-1.077-.397-2.05-1.266-.757-.674-1.269-1.509-1.417-1.758-.149-.249-.016-.384.108-.507.112-.111.247-.299.371-.448.124-.15.165-.249.247-.418.082-.169.041-.318-.02-.468-.062-.15-.545-1.346-.747-1.839-.197-.479-.413-.415-.568-.42-.143-.005-.308-.005-.473-.005-.165 0-.433.062-.659.309-.227.247-.866.846-.866 2.064 0 1.219.89 2.396.99 2.531.1.136 1.752 2.674 4.246 3.75.593.256 1.056.408 1.417.523.596.19 1.138.163 1.567.099.478-.072 1.77-.72 2.019-1.417.247-.697.247-1.294.173-1.417-.074-.124-.272-.198-.57-.347z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
