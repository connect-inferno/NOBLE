import React, { useState, useEffect, useRef } from "react";
import { useSEO } from "../hooks/useSEO";

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

// Hook for intersection observer scroll reveals
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  // Task 1, 2: Programmatic SEO for Home page
  useSEO({
    title: "Top Security Agency in Sangli & Pune",
    description:
      "Noble Security Services provides military-grade security guards, bouncers, armed gunmen, and housekeeping services across Sangli and Pune, Maharashtra.",
    canonical: "/",
    keywords:
      "Noble Security Services, Security Agency Sangli, Security Guards Pune, Bouncers Maharashtra, Armed Gunmen Sangli, Best Security Company Pune, Industrial Security Maharashtra",
    location: "all",
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    {
      badge: "Premium Security Solutions",
      title: "Protecting People.\nSecuring Futures.",
      desc: "Providing high-end guarding and IT-driven security services with military precision across India.",
      btnText: "Explore Services",
      btnAction: "services",
      img: "/hero1.jpeg",
    },
    {
      badge: "24/7 Monitoring",
      title: "Always On Guard.",
      desc: "Advanced surveillance and physical protection tailored for industrial and corporate complexes.",
      btnText: "Request Audit",
      btnAction: "contact",
      img: "/security-guard.jpeg",
    },
    {
      badge: "Elite Personnel",
      title: "Military\nDiscipline.",
      desc: "Our workforce is trained to the highest standards of integrity, response, and professional etiquette.",
      btnText: "Meet Our Leaders",
      btnAction: "about",
      img: "/sg2.jpeg",
    },
  ];

  useEffect(() => {
    const t = setInterval(() => setCurrentSlide(p => (p + 1) % heroSlides.length), 5500);
    return () => clearInterval(t);
  }, [heroSlides.length]);

  const [activeSector, setActiveSector] = useState("industries");
  const sectors: Record<string, { title: string; desc: string; points: string[]; img: string }> = {
    industries: {
      title: "Industrial Security",
      desc: "Securing vast manufacturing units with perimeter patrol, access control, and material movement tracking. Our guards are trained in fire safety and emergency evacuation protocols specific to industrial hazards.",
      points: ["Perimeter Patrol & Fencing Audit", "Raw Material Gate Management", "24/7 Control Room Monitoring"],
      img: "/industry.jpg",
    },
    banks: {
      title: "Banking & Finance",
      desc: "High-alert security for financial institutions requiring strict access protocols and armed presence. We specialize in ATM guarding and vault protection services.",
      points: ["Armed Guard Deployment", "ATM Monitoring", "Secure Cash Transit Support"],
      img: "/bank.jpg",
    },
    schools: {
      title: "Educational Institutions",
      desc: "Child-safety oriented security for schools and universities. Our staff is trained in school-specific behavioral etiquette and emergency protocols.",
      points: ["Child-Safety Trained Staff", "Visitor Management Systems", "Emergency Drill Management"],
      img: "/school.jpg",
    },
    hospitals: {
      title: "Hospitality & Healthcare",
      desc: "24/7 vigil for medical centers focusing on crowd management and sensitive area protection.",
      points: ["Patient Wing Monitoring", "Crowd Control", "Incident Reporting"],
      img: "/hospital.jpg",
    },
    corporate: {
      title: "Corporate Parks",
      desc: "Front-office integrated security that manages corporate visitor experiences while maintaining strict entry-exit logs.",
      points: ["Digital Visitor Logging", "Valet & Parking Security", "BMS Integration"],
      img: "/office.jpg",
    },
  };

  const [stats, setStats] = useState({ guards: 0, cities: 0, experience: 0 });
  const statsRef = useRef<HTMLDivElement>(null);
  const statsCounted = useRef(false);
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !statsCounted.current) {
        statsCounted.current = true;
        const steps = 60; const dur = 1800; const interval = dur / steps;
        let s = 0;
        const t = setInterval(() => {
          s++;
          setStats({ guards: Math.min(Math.ceil(500 / steps * s), 500), cities: Math.min(Math.ceil(6 / steps * s), 6), experience: Math.min(Math.ceil(10 / steps * s), 10) });
          if (s >= steps) clearInterval(t);
        }, interval);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const [formData, setFormData] = useState({ name: "", phone: "", serviceType: "Security Guards", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) { alert("Please enter your name and phone number."); return; }
    setIsSubmitted(true);

    const phoneNumber = "919823245552";
    const text = `*New Quote Request from Website*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service Type:* ${formData.serviceType}\n*Message:* ${formData.message || "None"}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setFormData({ name: "", phone: "", serviceType: "Security Guards", message: "" });
      setIsSubmitted(false);
      alert("Thank you! Your enquiry has been received and redirected to WhatsApp.");
    }, 1000);
  };

  // Reveal hooks
  const [aboutRef, aboutVisible] = useReveal();
  const [certStripRef, certStripVisible] = useReveal();
  const [sectorsRef, sectorsVisible] = useReveal();
  const [servicesRef, servicesVisible] = useReveal();
  const [advantageRef, advantageVisible] = useReveal();
  const [testimonialsRef, testimonialsVisible] = useReveal();
  const [contactRef, contactVisible] = useReveal();

  return (
    <>
      <style>{`
        /* ---- Hero ---- */
        .hero-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1.1s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }
        .hero-slide.active {
          opacity: 1;
          pointer-events: auto;
        }
        .hero-slide img {
          transition: transform 6s ease-out;
          transform: scale(1.04);
        }
        .hero-slide.active img {
          transform: scale(1);
        }
        /* gradient: only bottom fade, no overall dark blanket */
        .hero-gradient {
          background: linear-gradient(
            to top,
            rgba(10,10,20,0.82) 0%,
            rgba(10,10,20,0.35) 45%,
            rgba(10,10,20,0.10) 100%
          );
        }
        /* left-side content vignette */
        .hero-vignette {
          background: linear-gradient(
            to right,
            rgba(10,10,20,0.72) 0%,
            rgba(10,10,20,0.20) 55%,
            transparent 100%
          );
        }

        /* ---- Scroll reveals ---- */
        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.72s cubic-bezier(0.4,0,0.2,1), transform 0.72s cubic-bezier(0.4,0,0.2,1);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-left {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.72s cubic-bezier(0.4,0,0.2,1), transform 0.72s cubic-bezier(0.4,0,0.2,1);
        }
        .reveal-left.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .reveal-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.72s cubic-bezier(0.4,0,0.2,1), transform 0.72s cubic-bezier(0.4,0,0.2,1);
        }
        .reveal-right.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .stagger > * {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .stagger.visible > *:nth-child(1) { opacity:1; transform:translateY(0); transition-delay:0ms; }
        .stagger.visible > *:nth-child(2) { opacity:1; transform:translateY(0); transition-delay:100ms; }
        .stagger.visible > *:nth-child(3) { opacity:1; transform:translateY(0); transition-delay:200ms; }
        .stagger.visible > *:nth-child(4) { opacity:1; transform:translateY(0); transition-delay:300ms; }
        .stagger.visible > *:nth-child(5) { opacity:1; transform:translateY(0); transition-delay:400ms; }

        /* ---- Service strips ---- */
        .service-strip {
          border-bottom: 1px solid rgba(0,0,0,0.08);
          padding: 3rem 0;
          transition: background 0.3s;
        }
        .service-strip:last-child { border-bottom: none; }
        .service-strip:hover { background: #fafafa; }

        /* ---- Sector tabs ---- */
        .sector-tab {
          position: relative;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.02em;
          color: #666;
          cursor: pointer;
          transition: color 0.2s;
          white-space: nowrap;
          border: none;
          background: none;
        }
        .sector-tab::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0; right: 0;
          height: 2px;
          background: var(--md-sys-color-primary, #0056b3);
          transform: scaleX(0);
          transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
        }
        .sector-tab.active { color: var(--md-sys-color-primary, #0056b3); }
        .sector-tab.active::after { transform: scaleX(1); }
        .sector-tab:hover { color: var(--md-sys-color-primary, #0056b3); }

        /* ---- Stat number ---- */
        .stat-num {
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.03em;
        }

        /* ---- Testimonial card ---- */
        .testimonial-card {
          position: relative;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 1.25rem;
          padding: 2.5rem;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
                      box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
                      border-color 0.4s;
        }
        .testimonial-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #ba1a1a, #ff4d4d);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .testimonial-card::after {
          content: '“';
          position: absolute;
          top: 0.5rem;
          right: 1.5rem;
          font-size: 6.5rem;
          line-height: 1;
          font-family: Georgia, serif;
          color: rgba(186, 26, 26, 0.03);
          pointer-events: none;
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), color 0.4s;
        }
        .testimonial-card:hover {
          transform: translateY(-8px);
          border-color: rgba(186, 26, 26, 0.15);
          box-shadow: 0 22px 45px rgba(186, 26, 26, 0.07), 0 1px 3px rgba(0, 0, 0, 0.01);
        }
        .testimonial-card:hover::before {
          transform: scaleX(1);
        }
        .testimonial-card:hover::after {
          transform: translateY(-2px) scale(1.06);
          color: rgba(186, 26, 26, 0.08);
        }
        .testimonial-card .star-icon {
          display: inline-block;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .testimonial-card:hover .star-icon:nth-child(1) { transform: scale(1.2) rotate(8deg); transition-delay: 20ms; }
        .testimonial-card:hover .star-icon:nth-child(2) { transform: scale(1.2) rotate(-6deg); transition-delay: 50ms; }
        .testimonial-card:hover .star-icon:nth-child(3) { transform: scale(1.2) rotate(8deg); transition-delay: 80ms; }
        .testimonial-card:hover .star-icon:nth-child(4) { transform: scale(1.2) rotate(-6deg); transition-delay: 110ms; }
        .testimonial-card:hover .star-icon:nth-child(5) { transform: scale(1.2) rotate(8deg); transition-delay: 140ms; }

        .testimonial-card .author-avatar {
          transition: background-color 0.35s cubic-bezier(0.25, 1, 0.5, 1), 
                      color 0.35s cubic-bezier(0.25, 1, 0.5, 1), 
                      transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .testimonial-card:hover .author-avatar {
          background-color: #ba1a1a;
          color: #fff !important;
          transform: scale(1.06);
        }

        /* ---- Advantage card ---- */
        .advantage-card {
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid rgba(0,0,0,0.07);
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
          background: #fff;
        }
        .advantage-card:hover {
          border-color: var(--md-sys-color-primary, #0056b3);
          box-shadow: 0 12px 32px rgba(0,86,179,0.10);
          transform: translateY(-3px);
        }

        /* ---- Input focus ---- */
        .noble-input {
          width: 100%;
          padding: 0.9rem 1.25rem;
          border-radius: 0.625rem;
          border: 1.5px solid #e0e0e0;
          outline: none;
          font-size: 0.95rem;
          transition: border-color 0.2s, box-shadow 0.2s;
          background: #fafafa;
        }
        .noble-input:focus {
          border-color: var(--md-sys-color-primary, #0056b3);
          box-shadow: 0 0 0 3px rgba(0,86,179,0.12);
          background: #fff;
        }

        /* ---- Dot slider ---- */
        .hero-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.45);
          cursor: pointer;
          transition: width 0.3s, background 0.3s;
          border: none;
        }
        .hero-dot.active {
          width: 28px;
          border-radius: 4px;
          background: #fff;
        }

        /* ---- Certifications strip ---- */
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          align-items: center;
          justify-items: center;
        }
        @media (min-width: 768px) {
          .cert-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }
        .cert-grid-item {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1.5rem;
          width: 100%;
          box-sizing: border-box;
        }
        @media (max-width: 767px) {
          .cert-grid-item:nth-child(odd) {
            border-right: 1px solid rgba(255, 255, 255, 0.08);
          }
          .cert-grid-item:nth-child(-n+4) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }
        }
        @media (min-width: 768px) {
          .cert-grid-item:not(:last-child) {
            border-right: 1px solid rgba(255, 255, 255, 0.08);
          }
        }
        .cert-strip-badge {
          max-height: 70px;
          max-width: 140px;
          object-fit: contain;
          filter: grayscale(100%) brightness(0.9);
          opacity: 0.65;
          transition: filter 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
        }
        .cert-strip-badge:hover {
          filter: grayscale(0%) brightness(1);
          opacity: 1;
          transform: scale(1.05);
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal, .reveal-left, .reveal-right, .stagger > * { transition: none; opacity: 1; transform: none; }
        }
      `}</style>

      <div className="w-full">

        {/* ─── HERO ─── */}
        <section className="relative h-[90vh] md:h-screen overflow-hidden bg-[#080c18]">
          {heroSlides.map((slide, i) => (
            <div key={i} className={`hero-slide ${i === currentSlide ? "active" : ""}`}>
              <img
                src={slide.img}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* bottom gradient */}
              <div className="hero-gradient absolute inset-0" />
              {/* left vignette */}
              <div className="hero-vignette absolute inset-0" />
            </div>
          ))}

          {/* Hero content — left aligned */}
          <div className="relative z-20 h-full flex items-end md:items-center">
            <div className="px-8 md:px-16 lg:px-24 pb-24 md:pb-0 max-w-3xl">
              <span
                key={currentSlide + "-badge"}
                className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-white/70 mb-5"
                style={{ animation: "fadeUp 0.6s both" }}
              >
                {heroSlides[currentSlide].badge}
              </span>
              <h1
                key={currentSlide + "-title"}
                className="text-white font-extrabold leading-[1.07] mb-6"
                style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", whiteSpace: "pre-line", animation: "fadeUp 0.7s 0.08s both" }}
              >
                {heroSlides[currentSlide].title}
              </h1>
              <p
                key={currentSlide + "-desc"}
                className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl"
                style={{ animation: "fadeUp 0.7s 0.18s both" }}
              >
                {heroSlides[currentSlide].desc}
              </p>
              <div className="flex flex-wrap gap-4" style={{ animation: "fadeUp 0.7s 0.28s both" }}>
                <button
                  onClick={() => { setCurrentPage(heroSlides[currentSlide].btnAction); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="bg-[#ba1a1a] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-[#9e1515] transition-colors shadow-lg"
                >
                  {heroSlides[currentSlide].btnText}
                </button>
                <button
                  onClick={() => { setCurrentPage("contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="border border-white/50 text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-8 left-8 md:left-16 lg:left-24 z-30 flex gap-2 items-center">
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} className={`hero-dot ${i === currentSlide ? "active" : ""}`} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>

          {/* Slide counter */}
          <div className="absolute bottom-8 right-8 z-30 text-white/50 text-xs font-mono tracking-widest">
            0{currentSlide + 1} / 0{heroSlides.length}
          </div>

          <style>{`
            @keyframes fadeUp {
              from { opacity: 0; transform: translateY(20px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </section>

        {/* ─── TRUSTED & CERTIFIED STRIP (PLACEMENT 1) ─── */}
        <section className="py-10 bg-[#0a0c18] border-t border-white/5 relative z-20">
          <div
            ref={certStripRef}
            className={`max-w-6xl mx-auto px-6 md:px-12 reveal ${certStripVisible ? "visible" : ""}`}
          >
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#ba1a1a] mb-6">
              TRUSTED & CERTIFIED
            </p>
            <div className="cert-grid">
              <div className="cert-grid-item">
                <img src="/c1.jpeg" alt="Trade Mark Annexure" className="cert-strip-badge" />
              </div>
              <div className="cert-grid-item">
                <img src="/c2.jpeg" alt="Trade Mark Certificate" className="cert-strip-badge" />
              </div>
              <div className="cert-grid-item">
                <img src="/ce3.png" alt="ISO 9001:2015" className="cert-strip-badge" />
              </div>
              <div className="cert-grid-item">
                <img src="/ce4.png" alt="PSARA License Maharashtra" className="cert-strip-badge" />
              </div>
              <div className="cert-grid-item">
                <img src="/psara-karnataka.png" alt="PSARA License Karnataka" className="cert-strip-badge" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── ABOUT ─── */}
        <section className="py-24 bg-white" id="about">
          <div
            ref={aboutRef}
            className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-start"
          >
            <div className={`lg:w-[52%] reveal-left ${aboutVisible ? "visible" : ""}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ba1a1a] mb-4">About Noble</p>
              <h2 className="font-extrabold text-[#0a0c18] leading-tight mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}>
                A Legacy of Trust<br />and Vigilance
              </h2>
              <p className="text-[#444] text-[1.05rem] leading-[1.8] mb-6">
                Established in 2015, Noble Security & Services has evolved from a local guarding firm into a premier pan-India security partner. We combine the rigorous discipline of former military personnel with cutting-edge surveillance technology to provide a protective shield for your assets.
              </p>
              <p className="text-[#666] leading-[1.8] mb-10 text-[0.95rem]">
                Our commitment to compliance — PSARA, GST, EPF — and our rigorous recruitment standards ensure that every guard at your gate represents the Noble standard of integrity and excellence.
              </p>
            </div>

            <div className={`lg:w-[48%] grid grid-cols-2 gap-4 w-full reveal-right ${aboutVisible ? "visible" : ""}`} style={{ transitionDelay: "100ms" }}>
              {[
                { icon: "timeline", label: "Our Journey", value: "10+ Years" },
                { icon: "military_tech", label: "Recognition", value: "Top Firm 2023" },
                { icon: "groups", label: "Leadership", value: "Ex-Military" },
                { icon: "map", label: "Coverage", value: "6+ Cities" },
              ].map((c, i) => (
                <div key={i} className="advantage-card flex flex-col gap-3 p-6">
                  <span className="material-symbols-outlined text-primary text-3xl">{c.icon}</span>
                  <div>
                    <div className="font-bold text-[#0a0c18] text-lg">{c.value}</div>
                    <div className="text-[#888] text-xs mt-0.5">{c.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTORS ─── */}
        <section className="py-24 bg-[#f7f8fb]">
          <div
            ref={sectorsRef}
            className={`max-w-6xl mx-auto px-6 md:px-12 reveal ${sectorsVisible ? "visible" : ""}`}
          >
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ba1a1a] mb-3">Expertise</p>
              <h2 className="font-extrabold text-[#0a0c18] mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                Sectors We Serve
              </h2>
              <p className="text-[#666] max-w-xl">
                Tailored security protocols for diverse environments, ensuring compliance, safety, and operational continuity.
              </p>
            </div>

            <div className="border-b border-[#e4e6ee] flex gap-1 overflow-x-auto mb-10 hide-scrollbar">
              {[
                { key: "industries", label: "Industrial" },
                { key: "banks", label: "Banking & Finance" },
                { key: "schools", label: "Education" },
                { key: "hospitals", label: "Healthcare" },
                { key: "corporate", label: "Corporate" },
              ].map(t => (
                <button key={t.key} onClick={() => setActiveSector(t.key)} className={`sector-tab ${activeSector === t.key ? "active" : ""}`}>
                  {t.label}
                </button>
              ))}
            </div>

            {Object.entries(sectors).map(([key, data]) =>
              activeSector === key ? (
                <div key={key} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ animation: "fadeUp 0.5s both" }}>
                  <div className="space-y-5">
                    <h3 className="font-bold text-[#0a0c18]" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)" }}>{data.title}</h3>
                    <p className="text-[#555] leading-relaxed">{data.desc}</p>
                    <ul className="space-y-3 pt-2">
                      {data.points.map((pt, i) => (
                        <li key={i} className="flex items-center gap-3 text-[#333] text-sm">
                          <span className="w-5 h-5 rounded-full bg-[#ba1a1a]/10 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-[#ba1a1a]" style={{ fontSize: "14px" }}>check</span>
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] max-h-[380px] shadow-lg">
                    <img src={data.img} alt={data.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              ) : null
            )}
          </div>
        </section>

        {/* ─── SERVICES ─── */}
        <section className="py-24 bg-white" id="services">
          <div
            ref={servicesRef}
            className={`max-w-6xl mx-auto px-6 md:px-12 reveal ${servicesVisible ? "visible" : ""}`}
          >
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ba1a1a] mb-3">What We Do</p>
              <h2 className="font-extrabold text-[#0a0c18]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                Core Competencies
              </h2>
            </div>
            {[
              { icon: "security", title: "Security Guards (Unarmed)", desc: "Punctual, disciplined, and alert guards for residential, commercial, and retail establishments. Trained in conflict resolution, gate logs, and professional etiquette." },
              { icon: "history", title: "Armed Gunmen", desc: "Elite personnel with valid arms licenses, specifically deployed for high-risk assets, bank vault guards, cash-in-transit, and VIP protection details." },
              { icon: "sports_kabaddi", title: "Personal Bodyguards & Bouncers", desc: "Professional bouncers for corporate events and personal bodyguards with expert situational awareness, defensive driving, and rapid risk mediation." },
              { icon: "cleaning_services", title: "Facility Management & Housekeeping", desc: "End-to-end cleaning and facility maintenance for corporate offices, commercial malls, and high-rises using eco-friendly materials and mechanized equipment." },
              { icon: "engineering", title: "Skilled & Unskilled Labour Staff", desc: "Flexible manpower solutions for warehouse operations, logistics hubs, packaging lines, and corporate back-office administrative management." },
            ].map((s, i) => (
              <div key={i} className="service-strip">
                <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 group ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#f0f4ff] flex items-center justify-center group-hover:bg-primary transition-colors duration-400">
                    <span className="material-symbols-outlined text-primary group-hover:text-white text-2xl transition-colors duration-400">{s.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#0a0c18] text-lg mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-[#666] leading-relaxed text-[0.95rem] max-w-2xl">{s.desc}</p>
                  </div>
                  <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-primary">arrow_forward</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── STATS ─── */}
        <section className="py-24 bg-[#0a0c18]" ref={statsRef}>
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
              {[
                { num: `${stats.guards}+`, label: "Active Guards" },
                { num: `${stats.cities}+`, label: "Operational Cities" },
                { num: `${stats.experience}+`, label: "Years Experience" },
                { num: "100%", label: "PSARA Compliant" },
              ].map((st, i) => (
                <div key={i} className="py-4">
                  <div className="stat-num text-white mb-2">{st.num}</div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">{st.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ADVANTAGE ─── */}
        <section className="py-24 bg-white">
          <div
            ref={advantageRef}
            className={`max-w-6xl mx-auto px-6 md:px-12 reveal ${advantageVisible ? "visible" : ""}`}
          >
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ba1a1a] mb-3">Why Choose Us</p>
              <h2 className="font-extrabold text-[#0a0c18]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>The Noble Advantage</h2>
            </div>
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger ${advantageVisible ? "visible" : ""}`}>
              {[
                { icon: "verified_user", title: "Background Verified", desc: "Rigorous 3-step verification including police clearance for every recruit before deployment." },
                { icon: "model_training", title: "Specialized Training", desc: "Monthly refresher sessions covering fire safety, evacuations, first aid, and professional conduct." },
                { icon: "support_agent", title: "24/7 Field Support", desc: "Active patrol officers on rotation to ensure punctual, alert coverage at every post." },
                { icon: "assignment_turned_in", title: "Statutory Compliance", desc: "Strict adherence to ESIC, EPF, GST, and local Maharashtra labour standards." },
              ].map((a, i) => (
                <div key={i} className="advantage-card">
                  <div className="w-12 h-12 bg-[#f0f4ff] rounded-xl flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-primary text-2xl">{a.icon}</span>
                  </div>
                  <h4 className="font-bold text-[#0a0c18] text-[0.95rem] mb-3">{a.title}</h4>
                  <p className="text-[#777] text-sm leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section className="py-24 bg-[#f7f8fb]">
          <div
            ref={testimonialsRef}
            className={`max-w-6xl mx-auto px-6 md:px-12 reveal ${testimonialsVisible ? "visible" : ""}`}
          >
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ba1a1a] mb-3">Client Voices</p>
              <h2 className="font-extrabold text-[#0a0c18]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                What Our Clients Say
              </h2>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 stagger ${testimonialsVisible ? "visible" : ""}`}>
              {[
                { quote: "Noble Security has been managing our warehouse logistics for over 3 years. Their guards are exceptionally well-trained and their response to emergencies is commendable.", author: "Saurabh Gherade" },
                { quote: "Highly professional housekeeping and security services. Staff is courteous and management is always available for immediate action on feedback.", author: "Ramchandra Dudhal" },
                { quote: "Their armed gunmen provide peace of mind for our cash-in-transit operations. Reliable, disciplined, and strictly professional at every engagement.", author: "Amol Danole" },
              ].map((t, i) => (
                <div key={i} className="testimonial-card">
                  <div className="flex items-center gap-0.5 mb-5">
                    {[...Array(5)].map((_, k) => (
                      <span key={k} className="star-icon material-symbols-outlined text-amber-400 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-[#444] text-[0.92rem] leading-[1.8] mb-8 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="author-avatar w-10 h-10 rounded-full bg-[#f0f4ff] flex items-center justify-center text-primary font-bold text-sm shrink-0">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-[#0a0c18] text-sm">{t.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section className="py-24 bg-white" id="enquiry">
          <div
            ref={contactRef}
            className={`max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start`}
          >
            <div className={`reveal-left ${contactVisible ? "visible" : ""}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ba1a1a] mb-3">Get in Touch</p>
              <h2 className="font-extrabold text-[#0a0c18] mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                Let's Secure<br />Your World
              </h2>
              <p className="text-[#666] leading-relaxed mb-10 max-w-md">
                Whether you need a single armed guard or an enterprise-wide integrated security solution, our operations team is ready to assist.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "call", label: "Call Us Directly", value: "+91 9823245552" },
                  { icon: "mail", label: "Email Inquiries", value: "info@noblesecurity.co.in" },
                  { icon: "location_on", label: "Head Office", value: "Plot No. 15, Sector 4, Market Yard, Sangli, Maharashtra" },
                ].map((c, i) => (
                  <div key={i} className="flex gap-4 items-start p-5 rounded-xl border border-[#eee] hover:border-primary hover:shadow-sm transition-all">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: "18px" }}>{c.icon}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#999] mb-0.5">{c.label}</p>
                      <p className="text-[#222] text-sm font-medium">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`reveal-right ${contactVisible ? "visible" : ""}`} style={{ transitionDelay: "120ms" }}>
              <div className="border border-[#eee] rounded-2xl p-8 md:p-10 shadow-sm">
                <h3 className="font-bold text-[#0a0c18] text-xl mb-6">Request a Free Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-semibold text-[#999] uppercase tracking-wide block mb-1.5">Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" required disabled={isSubmitted} className="noble-input" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#999] uppercase tracking-wide block mb-1.5">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 00000 00000" required disabled={isSubmitted} className="noble-input" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#999] uppercase tracking-wide block mb-1.5">Service Type</label>
                    <select name="serviceType" value={formData.serviceType} onChange={handleInputChange} disabled={isSubmitted} className="noble-input">
                      <option value="Security Guards">Security Guards (Unarmed)</option>
                      <option value="Armed Guard">Armed Gunmen</option>
                      <option value="Facility Management">Facility Management & Housekeeping</option>
                      <option value="Bouncers/VIP Protection">Bouncers / VIP Protection</option>
                      <option value="Labour Supply">Labour Staff Supply</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#999] uppercase tracking-wide block mb-1.5">Message / Requirements</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Describe your security requirements..." rows={4} disabled={isSubmitted} className="noble-input resize-none" />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="w-full bg-[#ba1a1a] text-white py-4 rounded-full font-bold tracking-wide hover:bg-[#9e1515] transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    {isSubmitted ? (
                      <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Sending…</>
                    ) : "Send Enquiry"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};