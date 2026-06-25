import React from "react";

export const About: React.FC = () => {
  const values = [
    { icon: "gavel", title: "Integrity", desc: "Honest, transparent, and principled in every operation and client interaction." },
    { icon: "stars", title: "Excellence", desc: "Continuous improvement, safety audits, and uncompromising standards in delivery." },
    { icon: "shield", title: "Discipline", desc: "Strict code of conduct rooted in our military heritage and operational rigour." },
    { icon: "handshake", title: "Community", desc: "Building safe, secure, and thriving environments for the people we serve." },
  ];

  const trainingBadges = [
    { icon: "fitness_center", label: "Physical Drills" },
    { icon: "fire_truck", label: "Fire Safety" },
    { icon: "videocam", label: "Surveillance Tech" },
    { icon: "medical_services", label: "First Aid & CPR" },
  ];

  const stats = [
    { icon: "military_tech", title: "Ex-Military Led", desc: "Discipline-focused operations" },
    { icon: "update", title: "24/7 Response", desc: "Uninterrupted safety dispatch" },
    { icon: "groups", title: "500+ Staff", desc: "Trained security personnel" },
    { icon: "thumb_up", title: "99% Retention", desc: "Client trust & loyalty" },
  ];

  return (
    <>
      <style>{`
        /* ── BASE ── */
        .ab-page { width: 100%; font-family: inherit; }

        /* ── HERO ── */
        .ab-hero {
          position: relative;
          background: #0a0c18;
          padding: 6rem 0 5rem;
          overflow: hidden;
        }
        .ab-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .ab-hero-glow {
          position: absolute;
          top: -120px; right: -80px;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,86,179,0.22) 0%, transparent 70%);
          pointer-events: none;
        }
        .ab-hero-inner {
          position: relative; z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }
        .ab-breadcrumb {
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
        .ab-breadcrumb-sep { font-size: 14px; color: rgba(255,255,255,0.2); }
        .ab-breadcrumb-current { color: rgba(255,255,255,0.6); }

        .ab-hero-eyebrow {
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
        .ab-hero-eyebrow::before {
          content: '';
          display: block;
          width: 24px; height: 1px;
          background: rgba(100,150,255,0.5);
        }
        .ab-hero-title {
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 1.25rem;
          max-width: 680px;
        }
        .ab-hero-title em { font-style: normal; color: #6ba3f5; }
        .ab-hero-body {
          font-size: 1rem;
          color: rgba(255,255,255,0.42);
          line-height: 1.8;
          max-width: 540px;
        }

        /* ── SHARED SECTION WRAPPER ── */
        .ab-section {
          padding: 5rem 0;
        }
        .ab-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }
        @media (max-width: 768px) { .ab-inner { padding: 0 1.25rem; } }

        /* Shared eyebrow + heading */
        .ab-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #0056b3;
          margin-bottom: 1rem;
        }
        .ab-eyebrow::before {
          content: '';
          display: block;
          width: 20px; height: 1.5px;
          background: #0056b3;
          border-radius: 2px;
        }
        .ab-eyebrow-light {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(100,150,255,0.75);
          margin-bottom: 1rem;
        }
        .ab-eyebrow-light::before {
          content: '';
          display: block;
          width: 20px; height: 1.5px;
          background: rgba(100,150,255,0.5);
          border-radius: 2px;
        }
        .ab-heading {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: #0a0c18;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        .ab-heading em { font-style: normal; color: #0056b3; }
        .ab-heading-light {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        .ab-sub {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.8;
        }

        /* ── STORY SECTION ── */
        .ab-story { background: #fff; }
        .ab-story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        @media (max-width: 900px) { .ab-story-grid { grid-template-columns: 1fr; gap: 3rem; } }

        .ab-founder-card {
          position: relative;
          background: #fff;
          border: 1px solid #eaecf4;
          border-radius: 20px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        /* blue top accent */
        .ab-founder-card::before {
          content: '';
          position: absolute;
          top: 0; left: 2rem;
          width: 60px; height: 3px;
          background: #0056b3;
          border-radius: 0 0 3px 3px;
        }
        .ab-founder-img-wrap {
          width: 100%;
          max-width: 300px;
          border-radius: 14px;
          overflow: hidden;
          aspect-ratio: 1080/1744;
          position: relative;
        }
        .ab-founder-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .ab-founder-card:hover .ab-founder-img-wrap img { transform: scale(1.04); }
        .ab-founder-badge {
          position: absolute;
          bottom: 1rem; right: 1rem;
          background: #0056b3;
          border-radius: 10px;
          padding: 0.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(0,86,179,0.35);
        }
        .ab-founder-name {
          margin-top: 1.5rem;
          font-size: 1.1rem;
          font-weight: 800;
          color: #0a0c18;
          text-align: center;
        }
        .ab-founder-role {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #0056b3;
          margin-top: 0.3rem;
          text-align: center;
        }

        .ab-story-text { display: flex; flex-direction: column; gap: 1.25rem; }
        .ab-story-body { font-size: 0.95rem; color: #555; line-height: 1.85; }
        .ab-divider { width: 36px; height: 2px; background: #eaecf4; border-radius: 2px; margin: 0.25rem 0; }

        .ab-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .ab-stat-cell {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 1rem 1.25rem;
          border: 1px solid #eaecf4;
          border-radius: 12px;
          background: #f7f8fb;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .ab-stat-cell:hover { border-color: #c8d6ef; box-shadow: 0 4px 16px rgba(0,86,179,0.06); }
        .ab-stat-icon { font-size: 26px; color: #0056b3; flex-shrink: 0; margin-top: 2px; }
        .ab-stat-title { font-size: 0.88rem; font-weight: 800; color: #0a0c18; }
        .ab-stat-desc { font-size: 0.72rem; color: #999; margin-top: 2px; }

        /* ── MISSION / VISION ── */
        .ab-mv { background: #f7f8fb; }
        .ab-mv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        @media (max-width: 700px) { .ab-mv-grid { grid-template-columns: 1fr; } }

        .ab-mv-card {
          background: #fff;
          border-radius: 18px;
          padding: 2.5rem;
          border: 1px solid #eaecf4;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.25s;
        }
        .ab-mv-card:hover { box-shadow: 0 12px 36px rgba(0,0,40,0.07); }
        .ab-mv-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 4px; height: 100%;
          background: #0056b3;
          border-radius: 0 4px 4px 0;
        }
        .ab-mv-card.vision::before { background: #1a7a4a; }
        .ab-mv-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: #eef3ff;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.5rem;
        }
        .ab-mv-card.vision .ab-mv-icon { background: #edfaf4; }
        .ab-mv-title {
          font-size: 1.2rem;
          font-weight: 900;
          color: #0a0c18;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }
        .ab-mv-body { font-size: 0.9rem; color: #666; line-height: 1.8; }

        /* ── VALUES ── */
        .ab-values { background: #fff; }
        .ab-values-header { text-align: center; margin-bottom: 3.5rem; }
        .ab-values-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #0056b3;
          margin-bottom: 1rem;
        }
        .ab-values-eyebrow::before,
        .ab-values-eyebrow::after {
          content: '';
          display: block;
          width: 24px; height: 1px;
          background: #0056b3;
          opacity: 0.4;
        }
        .ab-values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: #eaecf4;
          border: 1px solid #eaecf4;
          border-radius: 16px;
          overflow: hidden;
        }
        @media (max-width: 900px) { .ab-values-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 500px) { .ab-values-grid { grid-template-columns: 1fr; } }

        .ab-value-cell {
          background: #fff;
          padding: 2.25rem 1.75rem;
          position: relative;
          overflow: hidden;
          transition: background 0.25s;
          cursor: default;
          text-align: center;
        }
        .ab-value-cell::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 0; height: 2px;
          background: #0056b3;
          transition: width 0.35s ease;
        }
        .ab-value-cell:hover { background: #f7f9ff; }
        .ab-value-cell:hover::before { width: 100%; }
        .ab-value-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: #eef3ff;
          border: 1px solid rgba(0,86,179,0.12);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 1.25rem;
          transition: background 0.25s;
        }
        .ab-value-cell:hover .ab-value-icon { background: #0056b3; }
        .ab-value-cell:hover .ab-value-icon span { color: #fff !important; }
        .ab-value-name { font-size: 0.92rem; font-weight: 800; color: #0a0c18; margin-bottom: 0.5rem; }
        .ab-value-desc { font-size: 0.76rem; color: #888; line-height: 1.7; }

        /* ── LEADERSHIP ── */
        .ab-leadership { background: #0a0c18; }
        .ab-leadership-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 3.5rem;
          gap: 0.75rem;
        }
        .ab-leadership-sub {
          font-size: 0.92rem;
          color: rgba(255,255,255,0.38);
          line-height: 1.75;
          max-width: 460px;
        }
        .ab-leaders-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          max-width: 720px;
          margin: 0 auto;
        }
        @media (max-width: 600px) { .ab-leaders-grid { grid-template-columns: 1fr; } }

        .ab-leader-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .ab-leader-img-wrap {
          width: 100%;
          max-width: 280px;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 3/4;
          position: relative;
          margin-bottom: 1.25rem;
        }
        .ab-leader-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .ab-leader-card:hover .ab-leader-img-wrap img { transform: scale(1.05); }
        .ab-leader-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,12,24,0.55) 0%, transparent 50%);
          pointer-events: none;
        }
        /* blue accent top */
        .ab-leader-img-wrap::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 3px;
          background: #0056b3;
          z-index: 2;
        }
        .ab-leader-name { font-size: 1rem; font-weight: 800; color: #fff; }
        .ab-leader-role {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(100,150,255,0.7);
          margin-top: 0.3rem;
        }

        /* ── TRAINING ── */
        .ab-training { background: #f7f8fb; }
        .ab-training-header { text-align: center; margin-bottom: 3.5rem; }
        .ab-training-sub { font-size: 0.92rem; color: #777; line-height: 1.75; max-width: 560px; margin: 0.75rem auto 0; }

        .ab-badges-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 1px;
          background: #eaecf4;
          border: 1px solid #eaecf4;
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 3rem;
        }
        @media (max-width: 700px) { .ab-badges-grid { grid-template-columns: repeat(2,1fr); } }

        .ab-badge-cell {
          background: #fff;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.75rem;
          transition: background 0.25s;
          cursor: default;
          position: relative;
        }
        .ab-badge-cell::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 0; height: 2px;
          background: #0056b3;
          transition: width 0.3s ease;
        }
        .ab-badge-cell:hover { background: #f0f4ff; }
        .ab-badge-cell:hover::before { width: 100%; }
        .ab-badge-icon-wrap {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: #eef3ff;
          border: 1px solid rgba(0,86,179,0.1);
          display: flex; align-items: center; justify-content: center;
        }
        .ab-badge-label { font-size: 0.82rem; font-weight: 700; color: #0a0c18; }

        .ab-compliance-block {
          background: #fff;
          border: 1px solid #eaecf4;
          border-radius: 20px;
          padding: 3rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 900px) { .ab-compliance-block { grid-template-columns: 1fr; gap: 2rem; } }
        /* blue left border */
        .ab-compliance-block { position: relative; overflow: hidden; }
        .ab-compliance-block::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 4px; height: 100%;
          background: #0056b3;
        }

        .ab-compliance-title { font-size: 1.3rem; font-weight: 900; color: #0a0c18; letter-spacing: -0.02em; margin-bottom: 1rem; }
        .ab-compliance-body { font-size: 0.9rem; color: #666; line-height: 1.8; margin-bottom: 1rem; }
        .ab-compliance-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; }
        .ab-compliance-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.88rem;
          font-weight: 700;
          color: #0a0c18;
        }
        .ab-compliance-check {
          width: 22px; height: 22px;
          border-radius: 50%;
          background: #eef3ff;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .ab-compliance-check span { font-size: 13px; color: #0056b3; }

        .ab-compliance-img {
          border-radius: 14px;
          overflow: hidden;
          aspect-ratio: 4/3;
        }
        .ab-compliance-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
      `}</style>

      <div className="ab-page">

        {/* ── HERO ── */}
        <section className="ab-hero">
          <div className="ab-hero-grid" />
          <div className="ab-hero-glow" />
          <div className="ab-hero-inner">
            <div className="ab-breadcrumb">
              <span>Home</span>
              <span className="material-symbols-outlined ab-breadcrumb-sep" style={{ fontSize: 14 }}>chevron_right</span>
              <span className="ab-breadcrumb-current">About Us</span>
            </div>
            <p className="ab-hero-eyebrow">Our Story</p>
            <h1 className="ab-hero-title">
              Built on discipline.<br /><em>Driven by duty.</em>
            </h1>
            <p className="ab-hero-body">
              Since 2015, Noble Security & Services has been the silent force behind safe operations across Maharashtra — from gated communities to industrial corridors.
            </p>
          </div>
        </section>

        {/* ── STORY / FOUNDER ── */}
        <section className="ab-section ab-story">
          <div className="ab-inner">
            <div className="ab-story-grid">
              {/* Founder card */}
              <div className="ab-founder-card">
                <div className="ab-founder-img-wrap">
                  <img src="/mn.jpeg" alt="Madhukar Pandurang Narale – Founder & Director" />
                  <div className="ab-founder-badge">
                    <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: 24, fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  </div>
                </div>
                <div className="ab-founder-name">Madhukar Pandurang Narale</div>
                <div className="ab-founder-role">Founder & Director</div>
              </div>

              {/* Story text */}
              <div className="ab-story-text">
                <p className="ab-eyebrow">Our Heritage</p>
                <h2 className="ab-heading">Over a decade of <em>protected</em> operations</h2>
                <p className="ab-story-body">
                  Since our inception in 2015, Noble Security & Services has been committed to providing uncompromising safety solutions across Maharashtra. We bridge the gap between traditional security presence and modern technological surveillance — ensuring that our clients, from residential complexes to large industrial hubs, rest easy.
                </p>
                <div className="ab-divider" />
                <div className="ab-stats-grid">
                  {stats.map((s, i) => (
                    <div key={i} className="ab-stat-cell">
                      <span className="material-symbols-outlined ab-stat-icon">{s.icon}</span>
                      <div>
                        <div className="ab-stat-title">{s.title}</div>
                        <div className="ab-stat-desc">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MISSION & VISION ── */}
        <section className="ab-section ab-mv">
          <div className="ab-inner">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p className="ab-values-eyebrow">Purpose</p>
              <h2 className="ab-heading">Mission & Vision</h2>
            </div>
            <div className="ab-mv-grid">
              <div className="ab-mv-card">
                <div className="ab-mv-icon">
                  <span className="material-symbols-outlined" style={{ fontSize: 24, color: "#0056b3" }}>rocket_launch</span>
                </div>
                <div className="ab-mv-title">Our Mission</div>
                <p className="ab-mv-body">To empower businesses and communities through innovative security intelligence and disciplined physical protection, setting a gold standard in the Indian private security sector.</p>
              </div>
              <div className="ab-mv-card vision">
                <div className="ab-mv-icon">
                  <span className="material-symbols-outlined" style={{ fontSize: 24, color: "#1a7a4a" }}>visibility</span>
                </div>
                <div className="ab-mv-title">Our Vision</div>
                <p className="ab-mv-body">To be the most trusted integrated security partner in the nation — recognized for our commitment to ethical values, technological integration, and unparalleled professional excellence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CORE VALUES ── */}
        <section className="ab-section ab-values">
          <div className="ab-inner">
            <div className="ab-values-header">
              <p className="ab-values-eyebrow">Our Foundation</p>
              <h2 className="ab-heading">Core values that define us</h2>
            </div>
            <div className="ab-values-grid">
              {values.map((v, i) => (
                <div key={i} className="ab-value-cell">
                  <div className="ab-value-icon">
                    <span className="material-symbols-outlined" style={{ fontSize: 22, color: "#0056b3" }}>{v.icon}</span>
                  </div>
                  <div className="ab-value-name">{v.title}</div>
                  <div className="ab-value-desc">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LEADERSHIP ── */}
        <section className="ab-section ab-leadership">
          <div className="ab-inner">
            <div className="ab-leadership-header">
              <p className="ab-eyebrow-light">Leadership</p>
              <h2 className="ab-heading-light">The minds behind the shield</h2>
              <p className="ab-leadership-sub">Decades of experience in defence, corporate security, and operational management — all under one roof.</p>
            </div>
            <div className="ab-leaders-grid">
              {[
                { name: "Rajesh Kumar", role: "Operations Head", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
                { name: "Ananya Sharma", role: "HR Manager", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
              ].map((l, i) => (
                <div key={i} className="ab-leader-card">
                  <div className="ab-leader-img-wrap">
                    <img src={l.img} alt={l.name} />
                  </div>
                  <div className="ab-leader-name">{l.name}</div>
                  <div className="ab-leader-role">{l.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRAINING & COMPLIANCE ── */}
        <section className="ab-section ab-training">
          <div className="ab-inner">
            <div className="ab-training-header">
              <p className="ab-values-eyebrow">Our Rigor</p>
              <h2 className="ab-heading">Training & compliance excellence</h2>
              <p className="ab-training-sub">Every officer undergoes a mandatory 15-day residential training program — adhering strictly to PSARA guidelines and international safety standards.</p>
            </div>

            <div className="ab-badges-grid">
              {trainingBadges.map((b, i) => (
                <div key={i} className="ab-badge-cell">
                  <div className="ab-badge-icon-wrap">
                    <span className="material-symbols-outlined" style={{ fontSize: 22, color: "#0056b3" }}>{b.icon}</span>
                  </div>
                  <div className="ab-badge-label">{b.label}</div>
                </div>
              ))}
            </div>

            <div className="ab-compliance-block">
              <div>
                <div className="ab-compliance-title">Integrated Training Protocol</div>
                <p className="ab-compliance-body">Our training transforms recruits into disciplined security professionals — covering physical fitness, guard drills, visitor gate protocols, log maintenance, and crisis response.</p>
                <p className="ab-compliance-body">Compliance is central to our brand. Full adherence to PF, ESIC, GST, and all regulatory labour laws eliminates legal risk for our clients.</p>
                <ul className="ab-compliance-list">
                  {[
                    "PSARA Licensed Operations (License #27AHTPN)",
                    "ISO 9001:2015 Certified Management Systems",
                    "100% Police Verified & Screened Guards",
                  ].map((item, i) => (
                    <li key={i} className="ab-compliance-item">
                      <div className="ab-compliance-check">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ab-compliance-img">
                <img src="/sg2.jpeg" alt="Security Training" />
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};