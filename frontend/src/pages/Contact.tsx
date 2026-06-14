import React, { useState } from "react";

export const Contact: React.FC = () => {
  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What types of security personnel do you provide?",
      a: "We provide highly trained Unarmed Guards, Licensed Armed Gunmen, Corporate Security Officers, Event Bouncers, and specialized Executive Protection agents based on your specific requirements.",
    },
    {
      q: "How fast is your emergency response time?",
      a: "Our Sangli headquarters and Pune branch maintain a 24/7 Rapid Response Team. In primary service zones, our patrol officers typically reach sites within 15-20 minutes of an alarm trigger.",
    },
    {
      q: "Do you offer combined housekeeping and security?",
      a: "Yes, Noble Security offers integrated facility management. We can provide a unified package including security, corporate housekeeping, and general maintenance for better operational efficiency.",
    },
    {
      q: "Are your guards trained in First Aid and Fire Safety?",
      a: "Absolutely. All our personnel undergo mandatory training in basic life support, CPR, fire extinguisher operation, and emergency evacuation protocols.",
    },
    {
      q: "How can I request a security audit for my business?",
      a: "You can use the form below, send an email, or call our main line. Our security consultants will schedule a visit to your site to perform a comprehensive vulnerability assessment free of charge.",
    },
  ];

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
      setIsSubmitting(false);
      alert("Thank you! Your message has been sent successfully. Our support team will get back to you shortly.");
    }, 1500);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[350px] flex items-center justify-center overflow-hidden bg-on-background">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200"
            alt="Noble Security HQ"
          />
        </div>
        <div className="relative z-10 text-center px-gutter mt-12">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-4">
            Contact Us
          </h1>
          <p className="font-body-lg text-body-lg text-secondary-fixed max-w-2xl mx-auto leading-relaxed">
            Expert protection is just a message away. Reach out to our 24/7 operations center or visit one of our regional offices.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-section-padding-sm max-w-container-max mx-auto px-gutter -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Location */}
          <div className="glass-card p-8 rounded-xl soft-shadow-l2 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6 text-white shadow-md">
              <span className="material-symbols-outlined text-[32px]">location_on</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-2 font-bold">Office Locations</h3>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              Plot No. 15, Sector 4, Market Yard, Sangli - 416416
            </p>
            <p className="text-on-surface-variant font-body-md mt-2 leading-relaxed">
              Pune Corporate Hub, Hinjewadi Phase 1, Pune - 411057
            </p>
          </div>
          {/* Call */}
          <div className="glass-card p-8 rounded-xl soft-shadow-l2 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6 text-white shadow-md">
              <span className="material-symbols-outlined text-[32px]">call</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-2 font-bold">Call / WhatsApp</h3>
            <p className="text-on-surface-variant font-body-md">Main Operations: +91 94224 07555</p>
            <p className="text-on-surface-variant font-body-md mt-2">WhatsApp Support: +91 233 2301555</p>
          </div>
          {/* Email */}
          <div className="glass-card p-8 rounded-xl soft-shadow-l2 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6 text-white shadow-md">
              <span className="material-symbols-outlined text-[32px]">mail</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-2 font-bold">Email Addresses</h3>
            <p className="text-on-surface-variant font-body-md">Inquiries: info@noblesecurity.co.in</p>
            <p className="text-on-surface-variant font-body-md mt-2">Careers: careers@noblesecurity.co.in</p>
          </div>
        </div>
      </section>

      {/* Main Form & Map */}
      <section className="py-section-padding-sm max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl soft-shadow-l1 border border-outline-variant/50">
            <h2 className="font-headline-lg text-headline-lg mb-8 font-bold text-on-surface">
              Send us a Message
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-md text-on-surface-variant">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-xl border border-outline-variant bg-surface-bright focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-on-surface-variant">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-xl border border-outline-variant bg-surface-bright focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-on-surface-variant">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-xl border border-outline-variant bg-surface-bright focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  disabled={isSubmitting}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Security Audit Request">Security Audit Request</option>
                  <option value="Housekeeping Services">Housekeeping Services Inquiry</option>
                  <option value="Career Opportunities">Career / Job Opportunities</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-on-surface-variant">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-xl border border-outline-variant bg-surface-bright focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="How can we help you?"
                  rows={5}
                  disabled={isSubmitting}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-error text-on-error py-4 rounded-xl font-headline-md hover:bg-opacity-90 active:scale-[0.98] transition-all shadow-md cursor-pointer flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                    Submitting...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="space-y-8">
            <div className="rounded-xl overflow-hidden soft-shadow-l2 h-[450px] border border-outline-variant">
              <iframe
                title="Noble Security Sangli Office"
                allowFullScreen
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.5284166299863!2d74.59599547516248!3d16.850024483944686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc123019f243009%3A0xe9634f195864197e!2sMarket%20Yard%2C%20Sangli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715854321000!5m2!1sen!2sin"
                style={{ border: 0 }}
                width="100%"
              ></iframe>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between p-6 bg-surface-container-high rounded-xl gap-4 border border-outline-variant/40">
              <div className="text-center sm:text-left">
                <h4 className="font-headline-md text-headline-md mb-1 font-bold text-on-surface">
                  Sangli Headquarters
                </h4>
                <p className="text-on-surface-variant font-body-md">
                  Plot 15, Sector 4, Market Yard, Sangli
                </p>
              </div>
              <a
                className="flex items-center gap-2 text-primary font-label-md hover:underline font-bold shrink-0"
                href="https://maps.app.goo.gl/9Zc1N"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined">directions</span>
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-section-padding-sm bg-on-background text-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16 space-y-2">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold">
              Availability &amp; Support
            </h2>
            <p className="text-secondary-fixed opacity-80 max-w-xl mx-auto">
              Our regional operations centers and support teams are positioned for rapid dispatch and client oversight.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter text-center md:text-left">
            <div className="p-8 border border-outline border-opacity-20 rounded-xl hover:bg-surface-variant hover:bg-opacity-5 transition-all">
              <h3 className="font-headline-md text-headline-md text-tertiary-fixed mb-4 font-bold">
                Sangli HQ Hours
              </h3>
              <p className="font-label-md text-secondary-fixed-dim">Monday — Saturday</p>
              <p className="font-headline-md mb-4 text-white">09:00 AM — 07:00 PM</p>
              <p className="text-sm opacity-60">Closed on Sundays &amp; National Holidays</p>
            </div>
            <div className="p-8 border border-outline border-opacity-20 rounded-xl hover:bg-surface-variant hover:bg-opacity-5 transition-all">
              <h3 className="font-headline-md text-headline-md text-tertiary-fixed mb-4 font-bold">
                Pune Branch Hours
              </h3>
              <p className="font-label-md text-secondary-fixed-dim">Monday — Friday</p>
              <p className="font-headline-md mb-4 text-white">10:00 AM — 06:00 PM</p>
              <p className="text-sm opacity-60">Saturday Operations by Appointment Only</p>
            </div>
            <div className="p-8 bg-primary-container rounded-xl text-left shadow-lg">
              <h3 className="font-headline-md text-headline-md text-white mb-4 font-bold">
                24/7 Support Center
              </h3>
              <p className="font-label-md text-secondary-fixed">Emergency Command Center</p>
              <p className="font-headline-md mb-4 text-white">Always Online</p>
              <p className="text-sm opacity-90 leading-relaxed">
                Emergency guard dispatch, incident reporting, and active remote monitoring services available 365 days a year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-section-padding-lg max-w-3xl mx-auto px-gutter">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-12 text-center text-on-surface font-bold">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item group border border-outline-variant rounded-xl overflow-hidden bg-white ${
                activeFaq === index ? "active border-primary shadow-sm" : ""
              }`}
            >
              <button
                className="w-full p-6 flex justify-between items-center text-left focus:outline-none cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-headline-md text-[18px] md:text-headline-md font-bold text-on-surface">
                  {faq.q}
                </span>
                <span className="material-symbols-outlined faq-icon transition-transform duration-300 text-primary shrink-0 ml-4">
                  expand_more
                </span>
              </button>
              <div
                className={`faq-content px-6 text-on-surface-variant font-body-md leading-relaxed ${
                  activeFaq === index ? "pb-6" : ""
                }`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
