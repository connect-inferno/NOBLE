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

  const row1 = partners.slice(0, 4);
  const row2 = partners.slice(4, 8);
  const row3 = partners.slice(8, 12);

  const sectors = [
    { icon: "factory",          name: "Industrial",  desc: "Comprehensive protection for manufacturing plants, warehouses, and logistics hubs." },
    { icon: "apartment",        name: "Residential", desc: "Gated communities and high-rise apartments with smart visitor management systems." },
    { icon: "account_balance",  name: "Banking",     desc: "High-risk security protocols, vault guards, and ATM monitoring for finance centers." },
    { icon: "school",           name: "Educational", desc: "Safe, secure, and disciplined campus environments for schools and universities." },
    { icon: "local_hospital",   name: "Healthcare",  desc: "Patient wing safety, visitor management, and crowd control for medical complexes." },
    { icon: "shopping_cart",    name: "Retail",      desc: "Loss prevention, floor vigilance, and asset protection for shopping malls." },
    { icon: "event_seat",       name: "Events",      desc: "Bouncer services, rapid risk mitigation, and crowd controls for corporate events." },
    { icon: "cloud_done",       name: "IT Parks",    desc: "Advanced electronic surveillance integration and strict biometric access controls." },
  ];

  const certifications = [
    { icon: "verified_user",  title: "PSARA Licensed",  desc: "Maharashtra Private Security Agencies Regulation Act compliant." },
    { icon: "receipt_long",   title: "GST Registered",  desc: "GSTIN: 27AHTPN6678H2ZE. Fully tax-compliant invoicing." },
    { icon: "task_alt",       title: "MSME Verified",   desc: "Registered micro enterprise with corporate vendor compliance." },
    { icon: "gavel",          title: "Govt Compliant",  desc: "Strict adherence to ESIC, Provident Fund (PF), and labour laws." },
  ];

  const dup = (arr: typeof partners) => [...arr, ...arr, ...arr];

  return (
    <>
      <style>{`
        .cl-page { width: 100%; font-family: inherit; }

        /* ── HERO — matches Services / About dark hero ── */
        .cl-hero {
          position: relative;
          background: #0a0c18;
          padding: 6rem 0 5rem;
          overflow: hidden;
        }
        .cl-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .cl-hero-glow {
          position: absolute;
          top: -120px; right: -80px;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,86,179,0.22) 0%, transparent 70%);
          pointer-events: none;
        }
        .cl-hero-inner {
          position: relative; z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }
        .cl-breadcrumb {
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
        .cl-breadcrumb-sep { font-size: 14px; color: rgba(255,255,255,0.2); }
        .cl-breadcrumb-current { color: rgba(255,255,255,0.6); }

        .cl-hero-eyebrow {
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
        .cl-hero-eyebrow::before {
          content: '';
          display: block;
          width: 24px; height: 1px;
          background: rgba(100,150,255,0.5);
        }
        .cl-hero-title {
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 1.25rem;
          max-width: 680px;
        }
        .cl-hero-title em { font-style: normal; color: #6ba3f5; }
        .cl-hero-body {
          font-size: 1rem;
          color: rgba(255,255,255,0.42);
          line-height: 1.8;
          max-width: 540px;
        }

        /* ── INTRO ── */
        .cl-intro {
          background: #fff;
          padding: 5rem 2.5rem 4rem;
        }
        .cl-intro-inner {
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
        }
        .cl-eyebrow-center {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #0056b3;
          margin-bottom: 1.25rem;
        }
        .cl-eyebrow-center::before,
        .cl-eyebrow-center::after {
          content: '';
          display: block;
          width: 28px; height: 1px;
          background: #0056b3;
          opacity: 0.4;
        }
        .cl-intro-heading {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #0a0c18;
          letter-spacing: -0.03em;
          line-height: 1.08;
          margin-bottom: 1.25rem;
        }
        .cl-intro-heading em { font-style: normal; color: #0056b3; }
        .cl-intro-divider {
          width: 40px; height: 3px;
          background: #0056b3;
          border-radius: 2px;
          margin: 0 auto 1.5rem;
        }
        .cl-intro-body {
          font-size: 1rem;
          color: #555;
          line-height: 1.85;
          max-width: 600px;
          margin: 0 auto;
        }

        /* ── MARQUEE ── */
        .cl-marquee {
          background: #f7f8fb;
          padding: 5rem 0;
          overflow: hidden;
        }
        .cl-marquee-header {
          max-width: 1280px;
          margin: 0 auto 3.5rem;
          padding: 0 2.5rem;
          text-align: center;
        }
        .cl-marquee-heading {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: #0a0c18;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }
        .marquee-track {
          display: flex;
          gap: 1.25rem;
          width: max-content;
          will-change: transform;
        }
        .marquee-row { overflow: hidden; margin-bottom: 1.25rem; }
        .marquee-row:last-child { margin-bottom: 0; }
        .marquee-row-1 .marquee-track { animation: mScrollL 38s linear infinite; }
        .marquee-row-2 .marquee-track { animation: mScrollR 42s linear infinite; }
        .marquee-row-3 .marquee-track { animation: mScrollL 36s linear infinite; }
        .marquee-row:hover .marquee-track { animation-play-state: paused; }
        @keyframes mScrollL {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes mScrollR {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .mq-card {
          flex-shrink: 0;
          width: 240px;
          background: #fff;
          border: 1px solid #eaecf4;
          border-radius: 14px;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: box-shadow 0.25s, border-color 0.25s, transform 0.25s;
          cursor: default;
        }
        .mq-card:hover {
          box-shadow: 0 8px 28px rgba(0,0,40,0.09);
          border-color: #c8d6ef;
          transform: translateY(-2px);
        }
        .mq-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: #eef3ff;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .mq-name { font-size: 0.82rem; font-weight: 700; color: #0a0c18; line-height: 1.3; }
        .mq-sector { font-size: 0.68rem; color: #999; margin-top: 2px; }

        /* ── SECTORS — dark, same as other pages ── */
        .cl-sectors {
          background: #0a0c18;
          padding: 5rem 0;
        }
        .cl-sectors-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }
        .cl-sectors-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .cl-eyebrow-dark {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(100,150,255,0.8);
          margin-bottom: 1rem;
        }
        .cl-eyebrow-dark::before,
        .cl-eyebrow-dark::after {
          content: '';
          display: block;
          width: 24px; height: 1px;
          background: rgba(100,150,255,0.5);
        }
        .cl-sectors-heading {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 0.75rem;
        }
        .cl-sectors-sub {
          font-size: 0.92rem;
          color: rgba(255,255,255,0.38);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.75;
        }
        .cl-sectors-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          overflow: hidden;
        }
        @media (max-width: 900px) { .cl-sectors-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 480px) { .cl-sectors-grid { grid-template-columns: 1fr; } }

        .cl-sector-cell {
          background: #0e1022;
          padding: 2.25rem 1.75rem;
          position: relative;
          overflow: hidden;
          transition: background 0.3s;
          cursor: default;
        }
        .cl-sector-cell::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 0; height: 2px;
          background: #0056b3;
          transition: width 0.35s ease;
        }
        .cl-sector-cell::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,86,179,0.15), transparent 60%);
          opacity: 0;
          transition: opacity 0.35s;
        }
        .cl-sector-cell:hover { background: #111428; }
        .cl-sector-cell:hover::before { width: 100%; }
        .cl-sector-cell:hover::after { opacity: 1; }
        .cl-sector-icon {
          width: 46px; height: 46px;
          border-radius: 12px;
          background: rgba(0,86,179,0.15);
          border: 1px solid rgba(0,86,179,0.25);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.25rem;
          transition: background 0.3s, border-color 0.3s;
          position: relative; z-index: 1;
        }
        .cl-sector-cell:hover .cl-sector-icon { background: #0056b3; border-color: #0056b3; }
        .cl-sector-cell:hover .cl-sector-icon span { color: #fff !important; }
        .cl-sector-name {
          font-size: 0.9rem; font-weight: 800; color: #fff;
          margin-bottom: 0.5rem; letter-spacing: 0.01em;
          position: relative; z-index: 1;
        }
        .cl-sector-desc {
          font-size: 0.76rem; color: rgba(255,255,255,0.38);
          line-height: 1.7; position: relative; z-index: 1;
          transition: color 0.3s;
        }
        .cl-sector-cell:hover .cl-sector-desc { color: rgba(255,255,255,0.55); }

        /* ── TESTIMONIALS ── */
        .cl-testi { background: #f7f8fb; }
        .cl-testi-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 5rem 2.5rem;
        }
        .cl-testi-header { text-align: center; margin-bottom: 3rem; }
        .cl-testi-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 1.25rem;
        }
        @media (max-width: 900px) { .cl-testi-grid { grid-template-columns: 1fr; } }
        .cl-testi-card {
          background: #fff;
          border: 1px solid #eaecf4;
          border-radius: 16px;
          padding: 2rem;
          display: flex; flex-direction: column; gap: 1.25rem;
          transition: transform 0.25s, box-shadow 0.25s;
          position: relative; overflow: hidden;
        }
        .cl-testi-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 0; height: 2px;
          background: #0056b3;
          transition: width 0.35s ease;
        }
        .cl-testi-card:hover::before { width: 100%; }
        .cl-testi-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,40,0.08);
        }
        .cl-testi-stars { display: flex; gap: 2px; }
        .cl-testi-quote { font-size: 0.88rem; color: #444; line-height: 1.8; font-style: italic; flex: 1; }
        .cl-testi-author {
          display: flex; align-items: center; gap: 0.75rem;
          padding-top: 1rem;
          border-top: 1px solid #f0f0f5;
        }
        .cl-testi-avatar {
          width: 38px; height: 38px; border-radius: 50%;
          background: #eef3ff;
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 0.85rem; color: #0056b3;
          flex-shrink: 0;
        }
        .cl-testi-name { font-size: 0.85rem; font-weight: 700; color: #0a0c18; }
        .cl-testi-role { font-size: 0.72rem; color: #999; margin-top: 1px; }

        /* ── CERTIFICATIONS ── */
        .cl-cert { background: #fff; }
        .cl-cert-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 5rem 2.5rem;
        }
        .cl-cert-header { text-align: center; margin-bottom: 3rem; }
        .cl-cert-sub {
          font-size: 0.92rem; color: #777;
          line-height: 1.75; max-width: 480px;
          margin: 0.75rem auto 0;
        }
        .cl-cert-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 1px;
          background: #eaecf4;
          border: 1px solid #eaecf4;
          border-radius: 16px;
          overflow: hidden;
        }
        @media (max-width: 900px) { .cl-cert-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 480px) { .cl-cert-grid { grid-template-columns: 1fr; } }

        .cl-cert-cell {
          background: #fff;
          padding: 2.25rem 1.75rem;
          text-align: center;
          position: relative;
          transition: background 0.25s;
          cursor: default;
        }
        .cl-cert-cell::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 0; height: 2px;
          background: #0056b3;
          transition: width 0.35s ease;
        }
        .cl-cert-cell:hover { background: #f7f9ff; }
        .cl-cert-cell:hover::before { width: 100%; }
        .cl-cert-icon {
          width: 52px; height: 52px;
          border-radius: 12px;
          background: #eef3ff;
          border: 1px solid rgba(0,86,179,0.1);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 1.25rem;
          transition: background 0.25s;
        }
        .cl-cert-cell:hover .cl-cert-icon { background: #0056b3; }
        .cl-cert-cell:hover .cl-cert-icon span { color: #fff !important; }
        .cl-cert-title { font-size: 0.88rem; font-weight: 800; color: #0a0c18; margin-bottom: 0.5rem; }
        .cl-cert-desc { font-size: 0.75rem; color: #888; line-height: 1.65; }

        /* ── CTA ── */
        .cl-cta {
          background: #0a0c18;
          padding: 5.5rem 2.5rem;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .cl-cta-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 600px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(0,86,179,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .cl-cta-inner { position: relative; z-index: 2; max-width: 640px; margin: 0 auto; }
        .cl-cta-eyebrow {
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
        .cl-cta-eyebrow::before,
        .cl-cta-eyebrow::after {
          content: '';
          display: block;
          width: 24px; height: 1px;
          background: rgba(100,150,255,0.4);
        }
        .cl-cta-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 0.85rem;
        }
        .cl-cta-sub {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.75;
          margin-bottom: 2.5rem;
        }
        .cl-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 2.4rem;
          background: #fff;
          color: #0a0c18;
          font-size: 0.85rem;
          font-weight: 800;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          letter-spacing: 0.01em;
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .cl-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255,255,255,0.12);
        }

        /* shared heading used across sections */
        .cl-section-heading {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: #0a0c18;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }
      `}</style>

      <div className="cl-page">

        {/* ── HERO ── */}
        <section className="cl-hero">
          <div className="cl-hero-grid" />
          <div className="cl-hero-glow" />
          <div className="cl-hero-inner">
            <div className="cl-breadcrumb">
              <span>Home</span>
              <span className="material-symbols-outlined cl-breadcrumb-sep" style={{ fontSize: 14 }}>chevron_right</span>
              <span className="cl-breadcrumb-current">Clients</span>
            </div>
            <p className="cl-hero-eyebrow">Our Network</p>
            <h1 className="cl-hero-title">
              Clients &amp;<br /><em>trusted partners</em>
            </h1>
            <p className="cl-hero-body">
              From government co-operatives to Fortune-500 supply chains — Noble Security is the silent force behind operations that can't afford to fail.
            </p>
          </div>
        </section>

        {/* ── INTRO ── */}
        <section className="cl-intro">
          <div className="cl-intro-inner">
            <p className="cl-eyebrow-center">Trusted Across Maharashtra</p>
            <h2 className="cl-intro-heading">
              Over a decade of<br /><em>protected</em> partnerships
            </h2>
            <div className="cl-intro-divider" />
            <p className="cl-intro-body">
              We've earned the trust of organisations that operate where safety is non-negotiable — and we intend to keep it that way.
            </p>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <section className="cl-marquee">
          <div className="cl-marquee-header">
            <p className="cl-eyebrow-center">Active Clients</p>
            <h2 className="cl-marquee-heading">Who trusts Noble</h2>
          </div>

          {[row1, row2, row3].map((row, ri) => (
            <div key={ri} className={`marquee-row marquee-row-${ri + 1}`}>
              <div className="marquee-track">
                {dup(row).map((p, i) => (
                  <div className="mq-card" key={i}>
                    <div className="mq-icon">
                      <span className="material-symbols-outlined" style={{ fontSize: 20, color: "#0056b3" }}>corporate_fare</span>
                    </div>
                    <div>
                      <div className="mq-name">{p.name}</div>
                      <div className="mq-sector">{p.sector}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ── SECTORS ── */}
        <section className="cl-sectors">
          <div className="cl-sectors-inner">
            <div className="cl-sectors-header">
              <p className="cl-eyebrow-dark">Where We Operate</p>
              <h2 className="cl-sectors-heading">Sectors we serve</h2>
              <p className="cl-sectors-sub">Tailored protocols for every environment — because no two sites have the same risk profile.</p>
            </div>
            <div className="cl-sectors-grid">
              {sectors.map((s, i) => (
                <div key={i} className="cl-sector-cell">
                  <div className="cl-sector-icon">
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: "#6ba3f5" }}>{s.icon}</span>
                  </div>
                  <div className="cl-sector-name">{s.name}</div>
                  <div className="cl-sector-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="cl-testi">
          <div className="cl-testi-inner">
            <div className="cl-testi-header">
              <p className="cl-eyebrow-center">Client Feedback</p>
              <h2 className="cl-section-heading">What they say</h2>
            </div>
            <div className="cl-testi-grid">
              {[
                { quote: "Their response time and professional demeanor are unmatched. We've seen a significant reduction in security incidents since partnering with Noble.", author: "Rajesh Mehta", role: "MD, Mehta Logistics" },
                { quote: "A truly tech-enabled security firm. Their integrated monitoring and visitor logging have simplified our facility operations immensely.", author: "Anjali Kulkarni", role: "Director, Green Valley Residency" },
                { quote: "Exceptional bouncer services for our corporate gala. Disciplined, polite, and firm — handled a crowd of 2000+ guests effortlessly.", author: "Sameer Khan", role: "Ops Manager, TechNova Events" },
              ].map((t, i) => (
                <div key={i} className="cl-testi-card">
                  <div className="cl-testi-stars">
                    {[...Array(5)].map((_, k) => (
                      <span key={k} className="material-symbols-outlined" style={{ fontSize: 15, color: "#f59e0b", fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="cl-testi-quote">"{t.quote}"</p>
                  <div className="cl-testi-author">
                    <div className="cl-testi-avatar">{t.author.charAt(0)}</div>
                    <div>
                      <div className="cl-testi-name">{t.author}</div>
                      <div className="cl-testi-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section className="cl-cert">
          <div className="cl-cert-inner">
            <div className="cl-cert-header">
              <p className="cl-eyebrow-center">Compliance</p>
              <h2 className="cl-section-heading">Licensed &amp; regulated</h2>
              <p className="cl-cert-sub">Every deployment is backed by state and national regulatory compliance — giving clients full legal assurance.</p>
            </div>
            <div className="cl-cert-grid">
              {certifications.map((c, i) => (
                <div key={i} className="cl-cert-cell">
                  <div className="cl-cert-icon">
                    <span className="material-symbols-outlined" style={{ fontSize: 24, color: "#0056b3", fontVariationSettings: "'FILL' 1" }}>{c.icon}</span>
                  </div>
                  <div className="cl-cert-title">{c.title}</div>
                  <div className="cl-cert-desc">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cl-cta">
          <div className="cl-cta-glow" />
          <div className="cl-cta-inner">
            <p className="cl-cta-eyebrow">Get Started</p>
            <h2 className="cl-cta-title">Ready to become a Noble client?</h2>
            <p className="cl-cta-sub">Talk to our operations team for a site-specific security assessment — at no cost.</p>
            <button className="cl-cta-btn">
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              Request a Free Assessment
            </button>
          </div>
        </section>

      </div>
    </>
  );
};