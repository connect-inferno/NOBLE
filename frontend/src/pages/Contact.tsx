import React, { useState } from "react";

export const Contact: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "General Inquiry", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    { q: "What types of security personnel do you provide?", a: "We provide trained Unarmed Guards, Licensed Armed Gunmen, Corporate Security Officers, Event Bouncers, and specialised Executive Protection agents based on your requirements." },
    { q: "How fast is your emergency response time?", a: "Our Sangli headquarters and Pune branch maintain a 24/7 Rapid Response Team. In primary service zones, patrol officers typically reach sites within 15–20 minutes of an alarm trigger." },
    { q: "Do you offer combined housekeeping and security?", a: "Yes. Noble Security offers integrated facility management — a unified package including security, corporate housekeeping, and general maintenance for better operational efficiency." },
    { q: "Are your guards trained in First Aid and Fire Safety?", a: "All personnel undergo mandatory training in basic life support, CPR, fire extinguisher operation, and emergency evacuation protocols." },
    { q: "How can I request a security audit for my business?", a: "Use the contact form, send an email, or call our main line. Our security consultants will schedule a site visit and perform a comprehensive vulnerability assessment free of charge." },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <>
      <style>{`
        .ct-page { width: 100%; font-family: inherit; }

        /* ── HERO — dark grid + glow, matches all other pages ── */
        .ct-hero {
          position: relative;
          background: #0a0c18;
          padding: 6rem 0 5rem;
          overflow: hidden;
        }
        .ct-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .ct-hero-glow {
          position: absolute;
          top: -120px; right: -80px;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,86,179,0.22) 0%, transparent 70%);
          pointer-events: none;
        }
        .ct-hero-inner {
          position: relative; z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }
        .ct-breadcrumb {
          display: flex; align-items: center; gap: 0.4rem;
          font-size: 0.7rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 2rem;
        }
        .ct-breadcrumb-sep { font-size: 14px; color: rgba(255,255,255,0.2); }
        .ct-breadcrumb-current { color: rgba(255,255,255,0.6); }
        .ct-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(100,150,255,0.8);
          margin-bottom: 1.5rem;
        }
        .ct-hero-eyebrow::before {
          content: ''; display: block;
          width: 24px; height: 1px;
          background: rgba(100,150,255,0.5);
        }
        .ct-hero-title {
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 900; color: #fff;
          line-height: 1.05; letter-spacing: -0.03em;
          margin-bottom: 1.25rem; max-width: 680px;
        }
        .ct-hero-title em { font-style: normal; color: #6ba3f5; }
        .ct-hero-body {
          font-size: 1rem; color: rgba(255,255,255,0.42);
          line-height: 1.8; max-width: 540px;
        }

        /* ── INFO CARDS (lifted over hero) ── */
        .ct-cards-wrap {
          background: #fff;
          padding: 0 2.5rem;
        }
        .ct-cards-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 1px;
          background: #eaecf4;
          border: 1px solid #eaecf4;
          border-radius: 16px;
          overflow: hidden;
          transform: translateY(-2.5rem);
        }
        @media (max-width: 800px) { .ct-cards-inner { grid-template-columns: 1fr; } }

        .ct-info-cell {
          background: #fff;
          padding: 2.25rem 2rem;
          display: flex; align-items: flex-start; gap: 1.25rem;
          position: relative;
          transition: background 0.25s;
        }
        .ct-info-cell::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 0; height: 2px;
          background: #0056b3;
          transition: width 0.35s ease;
        }
        .ct-info-cell:hover { background: #f7f9ff; }
        .ct-info-cell:hover::before { width: 100%; }
        .ct-info-icon {
          width: 46px; height: 46px; border-radius: 12px;
          background: #eef3ff; border: 1px solid rgba(0,86,179,0.12);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .ct-info-title { font-size: 0.88rem; font-weight: 800; color: #0a0c18; margin-bottom: 0.5rem; }
        .ct-info-line { font-size: 0.8rem; color: #666; line-height: 1.7; }

        /* ── MAIN BODY — form + map ── */
        .ct-body {
          background: #f7f8fb;
          padding: 1rem 0 5rem;
        }
        .ct-body-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        @media (max-width: 900px) { .ct-body-inner { grid-template-columns: 1fr; } }

        /* Form card */
        .ct-form-card {
          background: #fff;
          border: 1px solid #eaecf4;
          border-radius: 18px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
        }
        .ct-form-card::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 4px; height: 100%;
          background: #0056b3;
        }
        .ct-form-title {
          font-size: 1.3rem; font-weight: 900;
          color: #0a0c18; letter-spacing: -0.02em;
          margin-bottom: 0.4rem;
        }
        .ct-form-sub { font-size: 0.82rem; color: #999; margin-bottom: 2rem; }

        .ct-field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        @media (max-width: 500px) { .ct-field-row { grid-template-columns: 1fr; } }
        .ct-field { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 1rem; }
        .ct-label {
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: #888;
        }
        .ct-input, .ct-select, .ct-textarea {
          width: 100%;
          padding: 0.85rem 1rem;
          border: 1px solid #eaecf4;
          border-radius: 10px;
          background: #f7f8fb;
          font-size: 0.88rem; color: #0a0c18;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: inherit;
          box-sizing: border-box;
        }
        .ct-input:focus, .ct-select:focus, .ct-textarea:focus {
          border-color: #0056b3;
          box-shadow: 0 0 0 3px rgba(0,86,179,0.08);
          background: #fff;
        }
        .ct-textarea { resize: vertical; min-height: 130px; }

        .ct-submit {
          width: 100%;
          padding: 1rem;
          background: #0056b3;
          color: #fff;
          font-size: 0.88rem; font-weight: 800;
          border-radius: 999px; border: none;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          letter-spacing: 0.04em; text-transform: uppercase;
          transition: background 0.2s, transform 0.18s, box-shadow 0.18s;
          margin-top: 0.5rem;
        }
        .ct-submit:hover:not(:disabled) {
          background: #004499;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0,86,179,0.25);
        }
        .ct-submit:disabled { opacity: 0.6; cursor: not-allowed; }

        .ct-success {
          display: flex; align-items: center; gap: 0.75rem;
          background: #edfaf4; border: 1px solid #a3e6c3;
          border-radius: 10px; padding: 1rem 1.25rem;
          margin-bottom: 1.25rem;
          font-size: 0.88rem; font-weight: 600; color: #1a7a4a;
        }
        .ct-spin {
          width: 18px; height: 18px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: ctSpin 0.7s linear infinite;
          flex-shrink: 0;
        }
        @keyframes ctSpin { to { transform: rotate(360deg); } }

        /* Map + address */
        .ct-map-wrap { display: flex; flex-direction: column; gap: 1.25rem; }
        .ct-map {
          border-radius: 16px; overflow: hidden;
          border: 1px solid #eaecf4;
          height: 380px;
        }
        .ct-map iframe { width: 100%; height: 100%; border: 0; display: block; }
        .ct-address-card {
          background: #fff;
          border: 1px solid #eaecf4;
          border-radius: 14px;
          padding: 1.5rem;
          display: flex; align-items: center;
          justify-content: space-between; gap: 1rem;
        }
        .ct-address-name { font-size: 0.92rem; font-weight: 800; color: #0a0c18; margin-bottom: 0.25rem; }
        .ct-address-line { font-size: 0.78rem; color: #888; }
        .ct-maps-link {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-size: 0.78rem; font-weight: 700; color: #0056b3;
          text-decoration: none; white-space: nowrap;
          transition: color 0.2s;
        }
        .ct-maps-link:hover { color: #004499; }

        /* ── HOURS ── */
        .ct-hours { background: #0a0c18; padding: 5rem 0; }
        .ct-hours-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 2.5rem;
        }
        .ct-hours-header { text-align: center; margin-bottom: 3.5rem; }
        .ct-hours-eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(100,150,255,0.8); margin-bottom: 1rem;
        }
        .ct-hours-eyebrow::before, .ct-hours-eyebrow::after {
          content: ''; display: block;
          width: 24px; height: 1px;
          background: rgba(100,150,255,0.5);
        }
        .ct-hours-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900; color: #fff;
          letter-spacing: -0.03em; line-height: 1.1;
        }
        .ct-hours-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px; overflow: hidden;
        }
        @media (max-width: 800px) { .ct-hours-grid { grid-template-columns: 1fr; } }

        .ct-hours-cell {
          background: #0e1022;
          padding: 2.5rem 2rem;
          position: relative; overflow: hidden;
          transition: background 0.3s;
        }
        .ct-hours-cell::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 0; height: 2px;
          background: #0056b3;
          transition: width 0.35s ease;
        }
        .ct-hours-cell:hover { background: #111428; }
        .ct-hours-cell:hover::before { width: 100%; }
        .ct-hours-cell.highlight { background: #0056b3; }
        .ct-hours-cell.highlight::before { background: rgba(255,255,255,0.4); }
        .ct-hours-cell.highlight:hover { background: #004fa6; }

        .ct-hours-cell-title {
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(100,150,255,0.7); margin-bottom: 0.85rem;
        }
        .ct-hours-cell.highlight .ct-hours-cell-title { color: rgba(255,255,255,0.65); }
        .ct-hours-time {
          font-size: 1.5rem; font-weight: 900;
          color: #fff; letter-spacing: -0.02em;
          line-height: 1.1; margin-bottom: 0.4rem;
        }
        .ct-hours-days { font-size: 0.78rem; color: rgba(255,255,255,0.5); margin-bottom: 0.75rem; }
        .ct-hours-cell.highlight .ct-hours-days { color: rgba(255,255,255,0.7); }
        .ct-hours-note { font-size: 0.73rem; color: rgba(255,255,255,0.3); line-height: 1.6; }
        .ct-hours-cell.highlight .ct-hours-note { color: rgba(255,255,255,0.75); }

        /* ── FAQ ── */
        .ct-faq { background: #fff; padding: 5rem 0; }
        .ct-faq-inner {
          max-width: 820px; margin: 0 auto; padding: 0 2.5rem;
        }
        .ct-faq-header { text-align: center; margin-bottom: 3rem; }
        .ct-faq-eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #0056b3; margin-bottom: 1rem;
        }
        .ct-faq-eyebrow::before, .ct-faq-eyebrow::after {
          content: ''; display: block;
          width: 24px; height: 1px;
          background: #0056b3; opacity: 0.4;
        }
        .ct-faq-title {
          font-size: clamp(1.8rem, 3.5vw, 2.4rem);
          font-weight: 900; color: #0a0c18;
          letter-spacing: -0.03em; line-height: 1.1;
        }
        .ct-faq-list { display: flex; flex-direction: column; gap: 0.75rem; }
        .ct-faq-item {
          border: 1px solid #eaecf4;
          border-radius: 14px; overflow: hidden;
          background: #fff;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .ct-faq-item.open {
          border-color: #0056b3;
          box-shadow: 0 4px 20px rgba(0,86,179,0.07);
        }
        .ct-faq-btn {
          width: 100%; padding: 1.35rem 1.5rem;
          display: flex; align-items: center; justify-content: space-between; gap: 1rem;
          text-align: left; background: none; border: none; cursor: pointer;
        }
        .ct-faq-q {
          font-size: 0.92rem; font-weight: 700;
          color: #0a0c18; line-height: 1.4;
        }
        .ct-faq-item.open .ct-faq-q { color: #0056b3; }
        .ct-faq-chevron {
          font-size: 20px; color: #aaa;
          flex-shrink: 0;
          transition: transform 0.3s ease, color 0.2s;
        }
        .ct-faq-item.open .ct-faq-chevron {
          transform: rotate(180deg);
          color: #0056b3;
        }
        .ct-faq-answer {
          max-height: 0; overflow: hidden;
          transition: max-height 0.35s ease, padding 0.25s ease;
          font-size: 0.88rem; color: #666; line-height: 1.8;
          padding: 0 1.5rem;
        }
        .ct-faq-item.open .ct-faq-answer {
          max-height: 300px;
          padding: 0 1.5rem 1.35rem;
        }
      `}</style>

      <div className="ct-page">

        {/* ── HERO ── */}
        <section className="ct-hero">
          <div className="ct-hero-grid" />
          <div className="ct-hero-glow" />
          <div className="ct-hero-inner">
            <div className="ct-breadcrumb">
              <span>Home</span>
              <span className="material-symbols-outlined ct-breadcrumb-sep" style={{ fontSize: 14 }}>chevron_right</span>
              <span className="ct-breadcrumb-current">Contact</span>
            </div>
            <p className="ct-hero-eyebrow">Get in Touch</p>
            <h1 className="ct-hero-title">
              We're always<br /><em>on watch</em>
            </h1>
            <p className="ct-hero-body">
              Expert protection is a message away. Reach our 24/7 operations center or visit one of our regional offices across Maharashtra.
            </p>
          </div>
        </section>

        {/* ── INFO CARDS ── */}
        <div className="ct-cards-wrap">
          <div className="ct-cards-inner">
            {[
              {
                icon: "location_on",
                title: "Office Locations",
                lines: ["Plot No. 15, Sector 4, Market Yard, Sangli – 416416", "Pune Corporate Hub, Hinjewadi Phase 1, Pune – 411057"],
              },
              {
                icon: "call",
                title: "Call / WhatsApp",
                lines: ["Main Operations: +91 9823245552", "WhatsApp Support: +91 9823245552"],
              },
              {
                icon: "mail",
                title: "Email Addresses",
                lines: ["Inquiries: info@noblesecurity.co.in", "Careers: careers@noblesecurity.co.in"],
              },
            ].map((c, i) => (
              <div key={i} className="ct-info-cell">
                <div className="ct-info-icon">
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: "#0056b3", fontVariationSettings: "'FILL' 1" }}>{c.icon}</span>
                </div>
                <div>
                  <div className="ct-info-title">{c.title}</div>
                  {c.lines.map((l, j) => <div key={j} className="ct-info-line">{l}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FORM + MAP ── */}
        <div className="ct-body">
          <div className="ct-body-inner">

            {/* Form */}
            <div className="ct-form-card">
              <div className="ct-form-title">Send us a message</div>
              <div className="ct-form-sub">We'll respond within one business day.</div>

              {submitted && (
                <div className="ct-success">
                  <span className="material-symbols-outlined" style={{ fontSize: 20, fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Message sent — we'll be in touch shortly.
                </div>
              )}

              <form onSubmit={handleFormSubmit}>
                <div className="ct-field-row">
                  <div className="ct-field">
                    <label className="ct-label">Full Name</label>
                    <input className="ct-input" type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Rahul Sharma" disabled={isSubmitting} required />
                  </div>
                  <div className="ct-field">
                    <label className="ct-label">Email Address</label>
                    <input className="ct-input" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="rahul@example.com" disabled={isSubmitting} required />
                  </div>
                </div>
                <div className="ct-field">
                  <label className="ct-label">Subject</label>
                  <select className="ct-select" name="subject" value={formData.subject} onChange={handleInputChange} disabled={isSubmitting}>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Security Audit Request">Security Audit Request</option>
                    <option value="Housekeeping Services">Housekeeping Services</option>
                    <option value="Career Opportunities">Career / Job Opportunities</option>
                  </select>
                </div>
                <div className="ct-field">
                  <label className="ct-label">Message</label>
                  <textarea className="ct-textarea" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us about your security needs…" disabled={isSubmitting} required />
                </div>
                <button className="ct-submit" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><div className="ct-spin" />Sending…</>
                  ) : (
                    <><span className="material-symbols-outlined" style={{ fontSize: 18 }}>send</span>Send Message</>
                  )}
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="ct-map-wrap">
              <div className="ct-map">
                <iframe
                  title="Noble Security Sangli Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.5284166299863!2d74.59599547516248!3d16.850024483944686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc123019f243009%3A0xe9634f195864197e!2sMarket%20Yard%2C%20Sangli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715854321000!5m2!1sen!2sin"
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="ct-address-card">
                <div>
                  <div className="ct-address-name">Sangli Headquarters</div>
                  <div className="ct-address-line">Plot 15, Sector 4, Market Yard, Sangli – 416416</div>
                </div>
                <a className="ct-maps-link" href="https://maps.app.goo.gl/9Zc1N" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>directions</span>
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── HOURS ── */}
        <section className="ct-hours">
          <div className="ct-hours-inner">
            <div className="ct-hours-header">
              <p className="ct-hours-eyebrow">Availability</p>
              <h2 className="ct-hours-title">When we're here for you</h2>
            </div>
            <div className="ct-hours-grid">
              <div className="ct-hours-cell">
                <div className="ct-hours-cell-title">Sangli HQ</div>
                <div className="ct-hours-time">09:00 AM – 07:00 PM</div>
                <div className="ct-hours-days">Monday – Saturday</div>
                <div className="ct-hours-note">Closed Sundays &amp; National Holidays</div>
              </div>
              <div className="ct-hours-cell">
                <div className="ct-hours-cell-title">Pune Branch</div>
                <div className="ct-hours-time">10:00 AM – 06:00 PM</div>
                <div className="ct-hours-days">Monday – Friday</div>
                <div className="ct-hours-note" style={{ fontWeight: 600 }}>Saturday by appointment only</div>
              </div>
              <div className="ct-hours-cell highlight">
                <div className="ct-hours-cell-title">Emergency Command</div>
                <div className="ct-hours-time">24 / 7 / 365</div>
                <div className="ct-hours-days">Always online</div>
                <div className="ct-hours-note">Guard dispatch, incident reporting, and remote monitoring — every day, all year.</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="ct-faq">
          <div className="ct-faq-inner">
            <div className="ct-faq-header">
              <p className="ct-faq-eyebrow">Common Questions</p>
              <h2 className="ct-faq-title">Frequently asked</h2>
            </div>
            <div className="ct-faq-list">
              {faqs.map((faq, i) => (
                <div key={i} className={`ct-faq-item${activeFaq === i ? " open" : ""}`}>
                  <button className="ct-faq-btn" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                    <span className="ct-faq-q">{faq.q}</span>
                    <span className="material-symbols-outlined ct-faq-chevron">expand_more</span>
                  </button>
                  <div className="ct-faq-answer">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
};