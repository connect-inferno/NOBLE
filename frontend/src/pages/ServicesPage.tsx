import React, { useState } from "react";

interface ServicesPageProps {
  setCurrentPage: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ setCurrentPage }) => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    {
      id: "guards",
      title: "Professional Security Guards",
      tagline: "Your first line of defence",
      desc: "Rigorously trained guarding personnel equipped for access control, surveillance, and emergency response across residential, commercial, and industrial environments.",
      points: [
        "24/7 Residential & Commercial Premises Monitoring",
        "Visitor Management & Gate Control Systems",
        "Fire Safety & First-Aid Trained Personnel",
        "Patrolling with Digital Checkpoint Recording",
      ],
      img: "/security-guard.jpeg",
      icon: "shield",
    },
    {
      id: "armed",
      title: "Armed Gunman Protection",
      tagline: "For high-risk environments",
      desc: "Licensed armed personnel with specialized combat and tactical training, deployed for critical asset protection and high-value operations.",
      points: [
        "Escort Services for Cash-in-Transit Operations",
        "VIP & Executive Personal Bodyguard Protection",
        "Bank & Jewelry Showroom Armed Surveillance",
        "Regular Weapons Maintenance & Proficiency Testing",
      ],
      img: "/gunman.jpeg",
      icon: "security",
    },
    {
      id: "bouncers",
      title: "Crowd Management & Bouncers",
      tagline: "Control without confrontation",
      desc: "Event security specialists trained in conflict de-escalation and crowd control — ensuring a safe environment for guests and organizers at any scale.",
      points: [
        "Corporate Event & High-Profile Gala Security",
        "Private Party & Club Protection Units",
        "Conflict De-escalation & Physical Deterrence",
        "Discreet VIP Entry Management",
      ],
      img: "/bouncer.jpeg",
      icon: "group",
    },
    {
      id: "housekeeping",
      title: "Integrated Housekeeping",
      tagline: "Pristine facilities, every day",
      desc: "Complete facility management solutions ensuring your environment remains clean, hygienic, and professional at all times — handled by trained staff with the right equipment.",
      points: [
        "Daily Corporate Office Deep Cleaning",
        "Mechanized Floor Polishing & Carpet Care",
        "Washroom Sanitization & Hygiene Management",
        "Eco-friendly Chemical & Supply Management",
      ],
      img: "/housekeeping.jpeg",
      icon: "cleaning_services",
    },
    {
      id: "labour",
      title: "Skilled Labour Supply",
      tagline: "Right people, right place",
      desc: "Flexible and reliable staffing solutions for industrial, logistics, and corporate sectors — bridging the gap between skilled talent and operational demand.",
      points: [
        "Skilled & Unskilled Manpower for Industries",
        "Warehouse Management & Logistics Staff",
        "Administrative & Back-office Support Staff",
        "Statutory Compliance & Payroll Management",
      ],
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
      icon: "engineering",
    },
  ];

  return (
    <>
      <style>{`
        /* ── RESET & BASE ── */
        .sp-page { width: 100%; font-family: inherit; }

        /* ── HERO ── */
        .sp-hero {
          position: relative;
          background: #0a0c18;
          padding: 6rem 0 5rem;
          overflow: hidden;
        }
        .sp-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .sp-hero-glow {
          position: absolute;
          top: -120px; right: -80px;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,86,179,0.22) 0%, transparent 70%);
          pointer-events: none;
        }
        .sp-hero-inner {
          position: relative; z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }
        .sp-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 2rem;
        }
        .sp-breadcrumb button {
          background: none; border: none; padding: 0; cursor: pointer;
          color: rgba(255,255,255,0.35);
          font-size: inherit; font-weight: inherit; letter-spacing: inherit;
          text-transform: inherit;
          transition: color 0.2s;
        }
        .sp-breadcrumb button:hover { color: rgba(255,255,255,0.7); }
        .sp-breadcrumb-sep { font-size: 14px; color: rgba(255,255,255,0.2); }
        .sp-breadcrumb-current { color: rgba(255,255,255,0.6); }

        .sp-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(100,150,255,0.8);
          margin-bottom: 1.5rem;
        }
        .sp-hero-eyebrow::before {
          content: '';
          display: block;
          width: 24px; height: 1px;
          background: rgba(100,150,255,0.5);
        }

        .sp-hero-title {
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
          max-width: 680px;
        }
        .sp-hero-title em {
          font-style: normal;
          color: #6ba3f5;
        }
        .sp-hero-body {
          font-size: 1rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
          max-width: 560px;
          margin-bottom: 3rem;
        }

        /* Quick-nav pills */
        .sp-quicknav {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        .sp-qnav-pill {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 1rem;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.5);
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          text-decoration: none;
        }
        .sp-qnav-pill:hover {
          background: rgba(0,86,179,0.2);
          border-color: rgba(0,86,179,0.5);
          color: #fff;
        }

        /* ── SERVICE ROWS ── */
        .sp-service {
          padding: 5rem 0;
          border-bottom: 1px solid #eaecf4;
        }
        .sp-service:nth-child(even) { background: #f7f8fb; }
        .sp-service:nth-child(odd)  { background: #fff; }

        .sp-service-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        .sp-service-inner.flipped { direction: rtl; }
        .sp-service-inner.flipped > * { direction: ltr; }

        @media (max-width: 900px) {
          .sp-service-inner { grid-template-columns: 1fr; gap: 2.5rem; }
          .sp-service-inner.flipped { direction: ltr; }
        }

        /* Image block */
        .sp-img-block {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          aspect-ratio: 4/3;
          background: #0a0c18;
        }
        .sp-img-block img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.55s ease;
        }
        .sp-img-block:hover img { transform: scale(1.04); }
        /* Corner accent */
        .sp-img-block::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 80px; height: 4px;
          background: #0056b3;
          z-index: 2;
          border-radius: 0 0 4px 0;
        }
        /* Service number watermark */
        .sp-img-number {
          position: absolute;
          bottom: 1.25rem; right: 1.5rem;
          font-size: 5rem;
          font-weight: 900;
          line-height: 1;
          color: rgba(255,255,255,0.08);
          letter-spacing: -0.05em;
          pointer-events: none;
          z-index: 2;
          user-select: none;
        }
        /* Gradient overlay bottom */
        .sp-img-block::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,12,24,0.45) 0%, transparent 45%);
          pointer-events: none;
        }

        /* Text block */
        .sp-text-block { display: flex; flex-direction: column; gap: 1.25rem; }

        .sp-serv-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #0056b3;
        }
        .sp-serv-eyebrow::before {
          content: '';
          display: block;
          width: 20px; height: 1.5px;
          background: #0056b3;
          border-radius: 2px;
        }

        .sp-serv-title {
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 900;
          color: #0a0c18;
          letter-spacing: -0.025em;
          line-height: 1.1;
        }

        .sp-serv-desc {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.8;
          max-width: 480px;
        }

        .sp-serv-divider {
          width: 36px; height: 2px;
          background: #eaecf4;
          border-radius: 2px;
        }

        .sp-points { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.85rem; }
        .sp-point {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.88rem;
          color: #333;
          line-height: 1.55;
        }
        .sp-point-icon {
          width: 22px; height: 22px;
          border-radius: 50%;
          background: #eef3ff;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .sp-point-icon span { font-size: 13px; color: #0056b3; }

        .sp-serv-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.5rem;
          padding: 0.7rem 1.6rem;
          background: #0056b3;
          color: #fff;
          font-size: 0.8rem;
          font-weight: 700;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          width: fit-content;
        }
        .sp-serv-cta:hover {
          background: #004499;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0,86,179,0.25);
        }

        /* ── CTA BAND ── */
        .sp-cta {
          background: #0a0c18;
          padding: 5.5rem 2.5rem;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .sp-cta-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 600px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(0,86,179,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .sp-cta-inner {
          position: relative; z-index: 2;
          max-width: 680px;
          margin: 0 auto;
        }
        .sp-cta-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(100,150,255,0.7);
          margin-bottom: 1.5rem;
        }
        .sp-cta-eyebrow::before,
        .sp-cta-eyebrow::after {
          content: '';
          display: block;
          width: 24px; height: 1px;
          background: rgba(100,150,255,0.4);
        }
        .sp-cta-title {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        .sp-cta-sub {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.75;
          margin-bottom: 2.5rem;
        }
        .sp-cta-btns {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
        .sp-cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 2.2rem;
          background: #fff;
          color: #0a0c18;
          font-size: 0.85rem;
          font-weight: 800;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.18s, box-shadow 0.18s;
          letter-spacing: 0.01em;
        }
        .sp-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255,255,255,0.15);
        }
        .sp-cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 2.2rem;
          background: transparent;
          color: rgba(255,255,255,0.65);
          font-size: 0.85rem;
          font-weight: 700;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.15);
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s, transform 0.18s;
          letter-spacing: 0.01em;
        }
        .sp-cta-btn-secondary:hover {
          border-color: rgba(255,255,255,0.35);
          color: #fff;
          transform: translateY(-2px);
        }
      `}</style>

      <div className="sp-page">

        {/* ── HERO ── */}
        <section className="sp-hero">
          <div className="sp-hero-grid" />
          <div className="sp-hero-glow" />
          <div className="sp-hero-inner">

            <div className="sp-breadcrumb">
              <button onClick={() => { setCurrentPage("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                Home
              </button>
              <span className="material-symbols-outlined sp-breadcrumb-sep" style={{ fontSize: 14 }}>chevron_right</span>
              <span className="sp-breadcrumb-current">Services</span>
            </div>

            <p className="sp-hero-eyebrow">What We Do</p>
            <h1 className="sp-hero-title">
              Protection &amp; staffing,<br /><em>built for your site</em>
            </h1>
            <p className="sp-hero-body">
              Tailored security and facility solutions for corporations, residential complexes, and private assets — combining professional manpower with modern operational discipline.
            </p>

            <nav className="sp-quicknav" aria-label="Jump to service">
              {services.map(s => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="sp-qnav-pill"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 14 }}>{s.icon}</span>
                  {s.title.split(" ").slice(0, 2).join(" ")}
                </a>
              ))}
            </nav>

          </div>
        </section>

        {/* ── SERVICE ROWS ── */}
        {services.map((serv, index) => (
          <section key={serv.id} id={serv.id} className="sp-service">
            <div className={`sp-service-inner ${index % 2 !== 0 ? "flipped" : ""}`}>

              {/* Image */}
              <div className="sp-img-block">
                <img
                  src={serv.img}
                  alt={serv.title}
                  style={
                    serv.id === "armed" || serv.id === "housekeeping"
                      ? { objectFit: "contain", padding: "1rem" }
                      : {}
                  }
                />
                <span className="sp-img-number">0{index + 1}</span>
              </div>

              {/* Text */}
              <div className="sp-text-block">
                <p className="sp-serv-eyebrow">{serv.tagline}</p>
                <h2 className="sp-serv-title">{serv.title}</h2>
                <p className="sp-serv-desc">{serv.desc}</p>
                <div className="sp-serv-divider" />
                <ul className="sp-points">
                  {serv.points.map((pt, i) => (
                    <li key={i} className="sp-point">
                      <div className="sp-point-icon">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                      </div>
                      {pt}
                    </li>
                  ))}
                </ul>
                <button
                  className="sp-serv-cta"
                  onClick={() => { setCurrentPage("contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                  Enquire about this service
                </button>
              </div>

            </div>
          </section>
        ))}

        {/* ── CTA BAND ── */}
        <section className="sp-cta">
          <div className="sp-cta-glow" />
          <div className="sp-cta-inner">
            <p className="sp-cta-eyebrow">Get Started</p>
            <h2 className="sp-cta-title">Need a custom security solution?</h2>
            <p className="sp-cta-sub">
              Our operations team will assess your site's risk profile and propose a tailored deployment — at no cost.
            </p>
            <div className="sp-cta-btns">
              <a className="sp-cta-btn-primary" href="tel:+919422407555">
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>call</span>
                Call Now
              </a>
              <button
                className="sp-cta-btn-secondary"
                onClick={() => { setCurrentPage("contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>mail</span>
                Send an Enquiry
              </button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};