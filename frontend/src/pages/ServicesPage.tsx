import React from "react";

interface ServicesPageProps {
  setCurrentPage: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ setCurrentPage }) => {
  const services = [
    {
      id: "guards",
      title: "Professional Security Guards",
      desc: "Our core strength lies in our rigorously trained guarding personnel, equipped to handle access control, surveillance, and emergency response in diverse environments.",
      points: [
        "24/7 Residential & Commercial Premises Monitoring",
        "Strict Visitor Management & Gate Control Systems",
        "Emergency Fire Safety & First-Aid Trained Personnel",
        "Patrolling with Digital Checkpoint Recording",
      ],
      img: "/security-guard.jpeg",
      icon: "shield",
      isFlipped: false,
    },
    {
      id: "armed",
      title: "Armed Gunman Protection",
      desc: "For high-risk environments and critical asset protection, we provide licensed and highly proficient armed personnel with specialized combat and tactical training.",
      points: [
        "Escort Services for Cash-in-Transit Operations",
        "VIP & Executive Protection (Personal Bodyguards)",
        "Bank & Jewelry Showroom Armed Surveillance",
        "Regular Weapons Maintenance & Proficiency Testing",
      ],
      img: "/gunman.jpeg",
      icon: "security",
      isFlipped: true,
    },
    {
      id: "bouncers",
      title: "Crowd Management & Bouncers",
      desc: "Our event security specialists are trained in conflict de-escalation and crowd control, ensuring a safe and prestige-focused environment for guests and organizers.",
      points: [
        "Corporate Event & High-Profile Gala Security",
        "Private Party & Club Protection Units",
        "Effective Conflict De-escalation & Physical Deterrence",
        "Discreet & Professional VIP Entry Management",
      ],
      img: "/bouncer.jpeg",
      icon: "group",
      isFlipped: false,
    },
    {
      id: "housekeeping",
      title: "Integrated Housekeeping",
      desc: "We provide complete facility management solutions, ensuring your environment remains pristine, hygienic, and professional at all times.",
      points: [
        "Daily Corporate Office Deep Cleaning",
        "Mechanized Floor Polishing & Carpet Care",
        "Washroom Sanitization & Hygiene Management",
        "Eco-friendly Chemical & Supply Management",
      ],
      img: "/housekeeping.jpeg",
      icon: "cleaning_services",
      isFlipped: true,
    },
    {
      id: "labour",
      title: "Skilled Labour Supply",
      desc: "We offer flexible and reliable staffing solutions for industrial, logistics, and corporate sectors, bridging the gap between talent and operational needs.",
      points: [
        "Skilled & Unskilled Manpower for Industries",
        "Warehouse Management & Logistics Staff",
        "Administrative & Back-office Support Staff",
        "Statutory Compliance & Payroll Management Handling",
      ],
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
      icon: "engineering",
      isFlipped: false,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-on-background via-primary to-primary-container py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-6 text-primary-fixed font-label-sm text-label-sm tracking-widest uppercase">
            <button
              onClick={() => {
                setCurrentPage("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              Home
            </button>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-white">Services</span>
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6 leading-tight">
            Our Protection & Staffing Services
          </h1>
          <p className="font-body-lg text-body-lg text-secondary-fixed max-w-2xl leading-relaxed">
            Tailored security and facility solutions for corporations, residential complexes, and private assets. We combine professional manpower with modern technology to ensure absolute safety.
          </p>
        </div>
      </section>

      {/* Services List */}
      {services.map((serv, index) => (
        <section
          key={serv.id}
          id={serv.id}
          className={`py-section-padding-lg ${index % 2 === 0 ? "bg-surface-container-lowest" : "bg-[#EEF4FF]"
            }`}
        >
          <div
            className={`max-w-container-max mx-auto px-gutter flex flex-col items-center gap-16 ${serv.isFlipped ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
          >
            {/* Image Container */}
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden service-card-shadow aspect-[4/3] relative bg-neutral-900/10 flex items-center justify-center">
              {(serv.id === "armed" || serv.id === "housekeeping") && (
                <img
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-md scale-105 opacity-40 pointer-events-none"
                  src={serv.img}
                />
              )}
              <img
                alt={serv.title}
                className={`w-full h-full relative z-10 transition-transform duration-500 hover:scale-105 ${
                  serv.id === "armed" || serv.id === "housekeeping" ? "object-contain p-4" : "object-cover"
                }`}
                src={serv.img}
              />
            </div>
            {/* Text details */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="w-16 h-16 bg-primary-container rounded-xl flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-white text-[32px]">{serv.icon}</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold leading-tight">
                {serv.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {serv.desc}
              </p>
              <ul className="space-y-4">
                {serv.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary font-bold shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="font-body-md text-body-md text-on-surface leading-normal">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Banner */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[300px] select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
            security
          </span>
        </div>
        <div className="max-w-container-max mx-auto px-gutter text-center relative z-10 space-y-6">
          <h2 className="font-headline-lg text-display-lg-mobile md:text-headline-lg font-bold">
            Need a Custom Security Solution?
          </h2>
          <p className="font-body-lg text-body-lg text-secondary-fixed max-w-2xl mx-auto leading-relaxed">
            Get in touch with our experts for a personalized risk assessment and safety plan for your business or society.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
            <a
              className="flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all duration-200 w-full sm:w-auto justify-center shadow-lg cursor-pointer"
              href="tel:+919422407555"
            >
              <span className="material-symbols-outlined">call</span>
              Call Now
            </a>
            <button
              onClick={() => {
                setCurrentPage("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 bg-on-background text-white px-8 py-4 rounded-full border border-outline border-opacity-30 font-bold hover:bg-opacity-90 transition-all duration-200 w-full sm:w-auto justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined">mail</span>
              Send Enquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
