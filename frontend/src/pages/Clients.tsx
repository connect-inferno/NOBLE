import React from "react";

export const Clients: React.FC = () => {
  const partners = [
    { name: "Mehta Logistics", sector: "Industrial & Warehousing" },
    { name: "Allied Bank", sector: "Financial Services" },
    { name: "TechNova Events", sector: "Event Security" },
    { name: "Green Valley Residency", sector: "Residential Gated Community" },
    { name: "Maharashtra Trade Center", sector: "Commercial Complex" },
    { name: "Apex Healthcare Hospital", sector: "Hospital & Medical Care" },
    { name: "Hinjewadi IT Plaza", sector: "Corporate IT Park" },
    { name: "Sangli District Agro Co-op", sector: "Government/Co-operative" },
    { name: "Silver Malls India", sector: "Retail & Loss Prevention" },
    { name: "St. Jude Campus", sector: "Educational Institution" },
    { name: "City Logistics Hub", sector: "Supply Chain & Staffing" },
    { name: "Skyline Tower Association", sector: "Facility Management" },
  ];

  const sectors = [
    { icon: "factory", name: "Industrial", desc: "Comprehensive protection for manufacturing plants, warehouses, and logistics hubs." },
    { icon: "apartment", name: "Residential", desc: "Gated communities and high-rise apartments with smart visitor management systems." },
    { icon: "account_balance", name: "Banking", desc: "High-risk security protocols, vault guards, and ATM monitoring for finance centers." },
    { icon: "school", name: "Educational", desc: "Safe, secure, and disciplined campus environments for schools and universities." },
    { icon: "local_hospital", name: "Healthcare", desc: "Patient wing safety, visitor management, and crowd control for medical complexes." },
    { icon: "shopping_cart", name: "Retail", desc: "Loss prevention, floor vigilance, and asset protection for shopping malls." },
    { icon: "event_seat", name: "Events", desc: "Bouncer services, rapid risk mitigation, and crowd controls for corporate events." },
    { icon: "cloud_done", name: "IT Parks", desc: "Advanced electronic surveillance integration and strict biometric access controls." },
  ];

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-on-background/70 z-10 pointer-events-none"></div>
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
          alt="Noble Security Clients"
        />
        <div className="relative z-20 text-center px-4 mt-12">
          <h1 className="text-white font-display-lg text-display-lg-mobile md:text-display-lg mb-4">
            Our Clients & Partners
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-section-padding-sm md:py-section-padding-lg max-w-container-max mx-auto px-gutter text-center space-y-4">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
          Trusted Across Maharashtra
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto font-body-lg leading-relaxed">
          For over a decade, Noble Security &amp; Services has been the preferred partner for corporate industry leaders, government bodies, educational academies, and residential complexes across the state.
        </p>
      </section>

      {/* Client Logos Grid */}
      <section className="py-section-padding-sm bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl flex flex-col items-center justify-center gap-4 soft-shadow-l1 hover:soft-shadow-l2 transition-all duration-300 group border border-outline-variant/30"
              >
                <div className="w-16 h-16 bg-surface-variant rounded-full flex items-center justify-center text-outline group-hover:text-primary group-hover:bg-primary-fixed transition-colors duration-300 shadow-inner">
                  <span className="material-symbols-outlined text-3xl">corporate_fare</span>
                </div>
                <span className="text-on-surface font-bold font-label-md text-center">
                  {partner.name}
                </span>
                <span className="text-on-surface-variant/70 text-xs text-center">
                  {partner.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-section-padding-lg max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16 space-y-2">
          <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
            Sectors We Serve
          </h2>
          <p className="text-on-surface-variant">
            Specialised security and staffing solutions tailored for diverse environments
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {sectors.map((sec, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-outline-variant/50 soft-shadow-l1 hover:-translate-y-1 transition-all duration-300 space-y-4"
            >
              <span className="material-symbols-outlined text-primary text-4xl">{sec.icon}</span>
              <h3 className="font-headline-md text-on-surface font-bold text-[20px]">{sec.name}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{sec.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials & Reviews */}
      <section className="py-section-padding-lg bg-on-background text-white overflow-hidden relative">
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16 text-center lg:text-left">
            <div className="max-w-xl space-y-4">
              <h2 className="font-headline-lg text-display-lg-mobile md:text-headline-lg font-bold">
                Proven Client Satisfaction
              </h2>
              <p className="text-secondary-fixed text-lg">
                Delivering peace of mind through professional excellence and unwavering compliance.
              </p>
            </div>
            {/* Google Reviews Badge */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center min-w-[260px] shadow-lg">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(4)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[#FBBC05] text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
                <span
                  className="material-symbols-outlined text-[#FBBC05] text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star_half
                </span>
              </div>
              <div className="text-3xl font-bold mb-1">4.8 / 5.0</div>
              <div className="text-sm text-secondary-fixed">240+ Google Business Reviews</div>
              <div className="mt-3 flex items-center justify-center gap-2 border-t border-white/10 pt-3">
                <span className="material-symbols-outlined text-sm text-[#34A853]">verified</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-secondary-fixed-dim">
                  Verified Local Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {
                quote:
                  "Their response time and professional demeanor are unmatched. We've seen a significant reduction in security incidents since partnering with Noble.",
                author: "Rajesh Mehta",
                role: "MD, Mehta Logistics",
                badgeColor: "bg-primary-fixed",
              },
              {
                quote:
                  "A truly tech-enabled security firm. Their integrated monitoring systems and visitor logging software have simplified our facility operations immensely.",
                author: "Anjali Kulkarni",
                role: "Director, Green Valley Residency",
                badgeColor: "bg-tertiary-fixed",
              },
              {
                quote:
                  "Exceptional bouncer services for our corporate gala. Disciplined, polite, and firm. They handled a crowd of 2000+ guests effortlessly.",
                author: "Sameer Khan",
                role: "Ops Manager, TechNova Events",
                badgeColor: "bg-secondary-fixed",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-6 flex flex-col justify-between"
              >
                <span className="material-symbols-outlined text-tertiary-fixed text-4xl">
                  format_quote
                </span>
                <p className="font-body-lg italic leading-relaxed opacity-85">"{t.quote}"</p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                  <div
                    className={`w-12 h-12 rounded-full ${t.badgeColor} flex items-center justify-center text-on-background font-bold shadow-md`}
                  >
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold">{t.author}</div>
                    <div className="text-sm text-secondary-fixed-dim">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications / Compliances */}
      <section className="py-section-padding-lg max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-12 space-y-2">
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            Licensed &amp; Compliant Agency
          </h2>
          <p className="text-on-surface-variant">
            Meeting the highest standards of state and national regulatory compliance
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {[
            {
              icon: "verified_user",
              title: "PSARA Licensed",
              desc: "Maharashtra Private Security Agencies Regulation Act compliant.",
            },
            {
              icon: "receipt_long",
              title: "GST Registered",
              desc: "GSTIN: 27AHTPN6678H2ZE. Fully tax-compliant invoicing.",
            },
            {
              icon: "task_alt",
              title: "MSME Verified",
              desc: "Registered micro enterprise with corporate vendor compliance.",
            },
            {
              icon: "gavel",
              title: "Govt Compliant",
              desc: "Strict adherence to ESIC, Provident Fund (PF), and labour laws.",
            },
          ].map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-surface-container-low rounded-2xl border border-outline-variant/60"
            >
              <span
                className="material-symbols-outlined text-primary text-5xl mb-4"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {cert.icon}
              </span>
              <h4 className="font-bold text-lg mb-2 text-on-surface">{cert.title}</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">{cert.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
