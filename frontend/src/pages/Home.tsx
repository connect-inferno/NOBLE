import React, { useState, useEffect } from "react";

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    {
      badge: "Premium Security Solutions",
      title: "Protecting People. Securing Futures.",
      desc: "Providing high-end guarding and IT-driven security services with military precision across India.",
      btnText: "Explore Services",
      btnAction: "services",
      bgClass: "from-[#1a1a2e] to-[#0056b3]",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    },
    {
      badge: "24/7 Monitoring",
      title: "Always On Guard.",
      desc: "Advanced surveillance and physical protection tailored for industrial and corporate complexes.",
      btnText: "Request Audit",
      btnAction: "contact",
      bgClass: "from-[#0056b3] to-[#0ABFBC]",
      img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200",
    },
    {
      badge: "Elite Personnel",
      title: "Military Discipline.",
      desc: "Our workforce is trained to the highest standards of integrity, response, and professional etiquette.",
      btnText: "Meet Our Leaders",
      btnAction: "about",
      bgClass: "from-[#1a1a2e] to-[#425e91]",
      img: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [heroSlides.length]);

  // Sector Tabs State
  const [activeSector, setActiveSector] = useState("industries");
  const sectors = {
    industries: {
      title: "Industrial Security",
      desc: "Securing vast manufacturing units with perimeter patrol, access control, and material movement tracking. Our guards are trained in fire safety and emergency evacuation protocols specific to industrial hazards.",
      points: [
        "Perimeter Patrol & Fencing Audit",
        "Raw Material Gate Management",
        "24/7 Control Room Monitoring",
      ],
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
    banks: {
      title: "Banking & Finance",
      desc: "High-alert security for financial institutions requiring strict access protocols and armed presence. We specialize in ATM guarding and vault protection services.",
      points: [
        "Armed Guard Deployment",
        "ATM Monitoring",
        "Secure Cash Transit Support",
      ],
      img: "https://images.unsplash.com/photo-1621416848469-9c5181bb5269?auto=format&fit=crop&q=80&w=800",
    },
    schools: {
      title: "Educational Institutions",
      desc: "Child-safety oriented security for schools and universities. Our staff is trained in school-specific behavioral etiquette and emergency protocols.",
      points: [
        "Child-Safety Trained Staff",
        "Visitor Management Systems",
        "Emergency Drill Management",
      ],
      img: "https://images.unsplash.com/photo-1523050335456-c7bb74ae330d?auto=format&fit=crop&q=80&w=800",
    },
    hospitals: {
      title: "Hospitality & Healthcare",
      desc: "24/7 vigil for medical centers focusing on crowd management and sensitive area protection (ICU/NICU).",
      points: [
        "Patient Wing Monitoring",
        "Crowd Control",
        "Incident Reporting",
      ],
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    },
    corporate: {
      title: "Corporate Parks",
      desc: "Front-office integrated security that manages corporate visitor experiences while maintaining strict entry-exit logs.",
      points: [
        "Digital Visitor Logging",
        "Valet & Parking Security",
        "BMS Integration",
      ],
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    },
  };

  // Stats Counters state
  const [stats, setStats] = useState({ guards: 0, cities: 0, experience: 0 });
  useEffect(() => {
    // Basic counter animation on page mount
    const duration = 1500;
    const steps = 50;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setStats({
        guards: Math.min(Math.ceil((500 / steps) * step), 500),
        cities: Math.min(Math.ceil((6 / steps) * step), 6),
        experience: Math.min(Math.ceil((9 / steps) * step), 9),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "Security Guards",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number.");
      return;
    }
    // Simulate API request
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", phone: "", serviceType: "Security Guards", message: "" });
      setIsSubmitted(false);
      alert("Thank you! Your enquiry has been received successfully. Our team will contact you shortly.");
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Fullscreen Hero Slider */}
      <section className="relative h-[85vh] md:h-screen overflow-hidden">
        <div className="h-full w-full relative">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide flex items-center justify-center bg-gradient-to-r ${
                slide.bgClass
              } ${index === currentSlide ? "active" : ""}`}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-20 text-center px-gutter max-w-4xl mt-16 md:mt-0">
                <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1 rounded-full font-label-sm text-label-sm mb-6 uppercase tracking-wider">
                  {slide.badge}
                </span>
                <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6 md:mb-8 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-white/80 font-body-lg text-body-lg mb-8 md:mb-10 max-w-2xl mx-auto">
                  {slide.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      if (slide.btnAction === "services") setCurrentPage("services");
                      if (slide.btnAction === "contact") setCurrentPage("contact");
                      if (slide.btnAction === "about") setCurrentPage("about");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="bg-[#ba1a1a] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg"
                  >
                    {slide.btnText}
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPage("contact");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-200 cursor-pointer"
                  >
                    Contact Us Now
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 -z-10">
                <img
                  className="w-full h-full object-cover opacity-50"
                  src={slide.img}
                  alt={slide.title}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Slider dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* About Intro Section */}
      <section className="py-section-padding-lg bg-white" id="about">
        <div className="max-w-container-max mx-auto px-gutter flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-[55%]">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              A Legacy of Trust and Vigilance
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              Established in 2015, Noble Security & Services has evolved from a local guarding firm into a premier pan-India security partner. We combine the rigorous discipline of former military personnel with cutting-edge surveillance technology to provide a protective shield for your assets.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-10 leading-relaxed">
              Our commitment to compliance (PSARA, GST, EPF) and our rigorous recruitment standards ensure that every guard at your gate represents the "Noble" standard of integrity and excellence.
            </p>
            <div className="flex items-center gap-6">
              <img
                className="w-20 h-20 rounded-full object-cover shadow-md"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150"
                alt="Col. R.S. Sharma"
              />
              <div>
                <p className="font-bold text-on-surface">Col. (Retd) R.S. Sharma</p>
                <p className="text-on-surface-variant text-label-md font-label-md">
                  Director of Operations
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-[45%] grid grid-cols-2 gap-4 w-full">
            {[
              { icon: "timeline", title: "Our Journey", desc: "9+ Years of Excellence" },
              { icon: "military_tech", title: "Awards", desc: "Top Security Firm 2023" },
              { icon: "groups", title: "Leadership", desc: "Ex-Military Command" },
              { icon: "map", title: "Locations", desc: "Serving 6+ Major Cities" },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-surface-container-low p-8 rounded-2xl soft-blue-shadow-hover transition-all duration-300 text-center border border-outline-variant/50"
              >
                <span className="material-symbols-outlined text-primary text-4xl mb-4">
                  {card.icon}
                </span>
                <h4 className="font-bold text-on-surface mb-2">{card.title}</h4>
                <p className="text-label-sm text-on-surface-variant">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-section-padding-lg bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Specialized Sectors We Serve
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Tailored security protocols for diverse environments, ensuring compliance, safety, and operational continuity.
            </p>
          </div>

          {/* Sector Tabs Nav */}
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 mb-8 border-b border-outline-variant">
            {[
              { key: "industries", label: "Industries" },
              { key: "banks", label: "Banking & Finance" },
              { key: "schools", label: "Education" },
              { key: "hospitals", label: "Hospitals" },
              { key: "corporate", label: "Corporate Parks" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveSector(tab.key)}
                className={`whitespace-nowrap px-8 py-4 font-bold text-lg transition-all duration-200 cursor-pointer focus:outline-none ${
                  activeSector === tab.key
                    ? "text-primary border-b-3 border-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Sector Display */}
          {Object.entries(sectors).map(
            ([key, data]) =>
              activeSector === key && (
                <div
                  key={key}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[400px] animate-in fade-in duration-500"
                >
                  <div className="space-y-6">
                    <h3 className="font-headline-md text-headline-md text-primary">
                      {data.title}
                    </h3>
                    <p className="text-body-lg text-on-surface-variant leading-relaxed">
                      {data.desc}
                    </p>
                    <ul className="space-y-4">
                      {data.points.map((pt, i) => (
                        <li key={i} className="flex items-center gap-3 text-on-surface">
                          <span className="material-symbols-outlined text-tertiary">
                            check_circle
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] max-h-[400px]">
                    <img
                      src={data.img}
                      alt={data.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
          )}
        </div>
      </section>

      {/* Core Competencies Alternating Strips */}
      <section className="py-section-padding-lg bg-white overflow-hidden" id="services">
        <div className="max-w-container-max mx-auto px-gutter space-y-16">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Our Core Competencies
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {[
            {
              icon: "security",
              title: "Security Guards (Unarmed)",
              desc: "Punctual, disciplined, and alert guards for residential, commercial, and retail establishments. Trained in conflict resolution, gate logs, and high-standard professional etiquette.",
              isFlipped: false,
            },
            {
              icon: "history",
              title: "Armed Gunmen",
              desc: "Elite personnel with valid arms licenses, specifically deployed for high-risk assets, bank vault guards, cash-in-transit, and VIP protection details.",
              isFlipped: true,
            },
            {
              icon: "sports_kabaddi",
              title: "Personal Bodyguards & Bouncers",
              desc: "Professional bouncers for corporate events and personal bodyguards with expert situational awareness, defensive driving skills, and rapid risk mediation capabilities.",
              isFlipped: false,
            },
            {
              icon: "cleaning_services",
              title: "Facility Management & Housekeeping",
              desc: "End-to-end cleaning and facility maintenance for corporate offices, commercial malls, and high-rises using eco-friendly materials and mechanized equipment.",
              isFlipped: true,
            },
            {
              icon: "engineering",
              title: "Skilled & Unskilled Labour Staff",
              desc: "Flexible manpower solutions for warehouse operations, logistics hubs, packaging lines, and corporate back-office administrative management.",
              isFlipped: false,
            },
          ].map((serv, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 group border-b border-outline-variant/40 pb-12 last:border-none last:pb-0 ${
                serv.isFlipped ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/3 flex justify-center">
                <div className="w-32 h-32 rounded-3xl bg-surface-container-high flex items-center justify-center group-hover:bg-primary transition-all duration-500 shadow-md">
                  <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white transition-colors duration-500">
                    {serv.icon}
                  </span>
                </div>
              </div>
              <div className="lg:w-2/3 space-y-4">
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors duration-300">
                  {serv.title}
                </h3>
                <p className="text-body-lg text-on-surface-variant leading-relaxed">
                  {serv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-on-primary">
            <div>
              <div className="font-display-lg text-display-lg-mobile md:text-display-lg mb-2">
                {stats.guards}+
              </div>
              <p className="text-label-md font-label-md uppercase tracking-widest text-primary-fixed">
                Active Guards
              </p>
            </div>
            <div>
              <div className="font-display-lg text-display-lg-mobile md:text-display-lg mb-2">
                {stats.cities}+
              </div>
              <p className="text-label-md font-label-md uppercase tracking-widest text-primary-fixed">
                Operational Cities
              </p>
            </div>
            <div>
              <div className="font-display-lg text-display-lg-mobile md:text-display-lg mb-2">
                {stats.experience}+
              </div>
              <p className="text-label-md font-label-md uppercase tracking-widest text-primary-fixed">
                Years Experience
              </p>
            </div>
            <div>
              <div className="font-display-lg text-display-lg-mobile md:text-display-lg mb-2">
                100%
              </div>
              <p className="text-label-md font-label-md uppercase tracking-widest text-primary-fixed">
                PSARA Compliant
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Noble Advantage */}
      <section className="py-section-padding-lg bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-16">
            The Noble Advantage
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "verified_user",
                title: "Background Verified",
                desc: "Rigorous 3-step verification including police verification for every recruit before deployment.",
              },
              {
                icon: "model_training",
                title: "Specialized Training",
                desc: "Monthly refresher training sessions covering fire safety, evacuations, first aid, and soft skills.",
              },
              {
                icon: "support_agent",
                title: "24/7 Field Support",
                desc: "Active patrol officers checking guards on rotation to ensure alert, punctual attendance.",
              },
              {
                icon: "assignment_turned_in",
                title: "Statutory Compliance",
                desc: "Strict adherence to ESIC, EPF, GST, and local labour standards of Maharashtra.",
              },
            ].map((adv, index) => (
              <div
                key={index}
                className="p-8 border border-outline-variant rounded-2xl hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {adv.icon}
                  </span>
                </div>
                <h4 className="font-bold text-lg mb-4 text-on-surface">{adv.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section-padding-lg bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
                What Our Clients Say
              </h2>
              <p className="text-on-surface-variant">
                Trusted by industrial complexes and corporate hubs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Noble Security has been managing our warehouse logistics for over 3 years. Their guards are exceptionally well-trained and their response to emergency situations is commendable.",
                author: "Rajesh Mehta",
                role: "VP Ops, Global Logistics",
              },
              {
                quote:
                  "Highly professional housekeeping and security services. The staff is courteous and the management is always available for feedback and immediate action.",
                author: "Sanya Verma",
                role: "Admin Head, TechPark Inc.",
              },
              {
                quote:
                  "Their armed gunmen provide us the peace of mind needed for our cash-in-transit operations. Reliable, disciplined, and strictly professional.",
                author: "Anil Kulkarni",
                role: "Manager, Allied Bank",
              },
            ].map((t, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-3xl soft-blue-shadow relative border border-outline-variant/40"
              >
                <span className="material-symbols-outlined text-primary-fixed-dim text-6xl absolute top-6 right-6 opacity-20">
                  format_quote
                </span>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <span
                      key={idx}
                      className="material-symbols-outlined text-yellow-500 text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-on-surface-variant font-body-md mb-8 italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary font-bold shadow-inner">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">{t.author}</p>
                    <p className="text-label-sm text-on-surface-variant">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form & Contact details */}
      <section className="py-section-padding-lg bg-white" id="enquiry">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Let's Secure Your World
            </h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              Whether you need a single armed guard or an enterprise-wide integrated security and housekeeping overhaul, our operations staff is ready to assist you.
            </p>
            <div className="space-y-6">
              {[
                { icon: "call", title: "Call Us Directly", info: "+91 94224 07555" },
                { icon: "mail", title: "Email Inquiries", info: "info@noblesecurity.co.in" },
                {
                  icon: "location_on",
                  title: "Head Office",
                  info: "Plot No. 15, Sector 4, Market Yard, Sangli, Maharashtra",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="flex gap-6 p-6 rounded-2xl bg-surface-container-low soft-blue-shadow-hover transition-all border border-outline-variant/50"
                >
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <span className="material-symbols-outlined text-white">{c.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">{c.title}</h4>
                    <p className="text-on-surface-variant font-body-md mt-1">{c.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-outline-variant"
            id="quote"
          >
            <h3 className="font-headline-md text-headline-md text-on-surface mb-6 font-bold">
              Request a Free Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-label-sm font-label-sm text-on-surface-variant ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface-container-low"
                    placeholder="John Doe"
                    disabled={isSubmitted}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-label-sm font-label-sm text-on-surface-variant ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface-container-low"
                    placeholder="+91 00000 00000"
                    disabled={isSubmitted}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-label-sm font-label-sm text-on-surface-variant ml-1">
                  Service Type
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface-container-low"
                  disabled={isSubmitted}
                >
                  <option value="Security Guards">Security Guards (Unarmed)</option>
                  <option value="Armed Guard">Armed Gunmen</option>
                  <option value="Facility Management">Facility Management & Housekeeping</option>
                  <option value="Bouncers/VIP Protection">Bouncers/VIP Protection</option>
                  <option value="Labour Supply">Labour Staff Supply</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-label-sm font-label-sm text-on-surface-variant ml-1">
                  Message / Requirements
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface-container-low"
                  placeholder="Describe your security requirements..."
                  rows={4}
                  disabled={isSubmitted}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-[#ba1a1a] text-white py-5 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer flex justify-center items-center gap-2"
              >
                {isSubmitted ? (
                  <>
                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                    Sending...
                  </>
                ) : (
                  "Send Enquiry"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
