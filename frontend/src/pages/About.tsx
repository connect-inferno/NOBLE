import React, { useState, useEffect, useRef } from "react";

export const About: React.FC = () => {
  // Hook for intersection observer scroll reveals
  const useReveal = (threshold = 0.1) => {
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
  };

  const [certsRef, certsVisible] = useReveal();
  const [activeCert, setActiveCert] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveCert(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  const [activeOpsTab, setActiveOpsTab] = useState<"recruitment" | "modules" | "operations">("recruitment");

  const values = [
    { icon: "verified_user", title: "Surksha Pratham Kartavya", desc: "Our core philosophy. Security is much more than mere deployment; it is about thorough training and duty." },
    { icon: "gavel", title: "100% Legally Compliant", desc: "Licensed under PSARA Act 2005. Fully compliant with EPF, ESIC, Professional Tax, Labour Welfare Fund, and all labor laws." },
    { icon: "devices", title: "Tech-Savvy Operations", desc: "Automated attendance with time & location punch on guard mobile apps, enabling remote monitoring 24/7." },
    { icon: "support_agent", title: "Dedicated Customer Care", desc: "A committed Customer Care Cell that keeps in touch with clients, gathers feedback, and resolves issues within 48 hours." },
  ];


  const stats = [
    { icon: "event", title: "Since 2015", desc: "Securing India with excellence" },
    { icon: "shield", title: "100% Compliant", desc: "Licensed under PSARA 2005" },
    { icon: "map", title: "Multi-State Presence", desc: "MH, KA, and Delhi offices" },
    { icon: "room_service", title: "3-in-1 Solutions", desc: "Security, Manpower & Housekeeping" },
  ];

  const whyChooseUs = [
    "ISO 9001:2015 Certified Company.",
    "Professional & Trained Security at an affordable rate, giving you value for money.",
    "Flexible budget options by offering tailor-made quotations as per your service level expectation.",
    "Remote monitoring of security guards through an app on their mobile.",
    "Committed to resolving client complaints within 48 hours.",
    "Modern outlook, vibrant, innovative, tech-savvy and trustworthy company.",
    "No association with any labour union or political party.",
    "Stringent measures for recruitment are implemented.",
    "Noble Security Guards are well trained, neatly turned out in smart uniforms and strictly supervised.",
    "Wages are paid to Security Guards on the 10th of every month through direct bank transfer.",
    "No unwarranted deductions from the wages of the guards to ensure high morale and performance.",
    "Total statutory compliances undertaken to safeguard your interest.",
    "Additional Manpower is arranged at short notice.",
    "Regular onsite training and refresher courses to adapt to day-to-day changes.",
    "Regular interaction by our senior operations personnel at different levels with the client for feedback.",
    "Day and night patrolling.",
    "Immediate replacements for non-performance.",
    "Rotation of security personnel as required by you.",
    "Transparent and Professional approach in every aspect of our work.",
    "Taking necessary measures to safeguard your interest at all times."
  ];

  const branches = [
    {
      state: "MAHARASHTRA STATE",
      offices: [
        {
          name: "Registered Head Office & Training Center",
          address: "G-3, Girnar Tower, Opp. PNG Showroom, Sangli-Miraj Road, Vishrambag, Sangli – 416415, Maharashtra",
          phones: ["0233-3551723", "9158827123", "8484992853", "9112177123"]
        },
        {
          name: "Pune Office",
          address: "Address One, F-11, Building No. 33, Phase-II, Gahunje, Tal: Maval, Dist: Pune - 412101, Maharashtra",
          phones: ["9765206467", "9112167123"]
        },
        {
          name: "Mumbai Office",
          address: "G-20-6, Floor- Loft, Municipal Chawl, Andhra Valley Road, Rajendra Prasad Nagar, M. L. Camp Matunga, Mumbai – 400019",
          phones: ["9769936422", "9158827123"]
        },
        {
          name: "Ratnagiri Office",
          address: "F- 203, Building No. 13, Rahul Garden, Kaviltali, Chiplun, Tal: Chiplun, Dist: Ratnagiri – 415605",
          phones: ["+91 8484992853", "+91 9158827123"]
        }
      ]
    },
    {
      state: "KARNATAKA STATE",
      offices: [
        {
          name: "Belagavi Office",
          address: "No. 336, Ground Floor, Chavadi Galli, M. Vadgaon, Belgavi – 590005",
          phones: ["9158827123", "8484992853"]
        }
      ]
    },
    {
      state: "DELHI STATE",
      offices: [
        {
          name: "Delhi Office",
          address: "House No. 1033, Pole No. 46, Near Guggaji Park, Mundka Nangloi, West Delhi, Delhi - 110041",
          phones: []
        }
      ]
    }
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
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .ab-leader-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 1.25rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
        }
        .ab-leader-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(100, 150, 255, 0.3);
          transform: translateY(-2px);
        }
        .ab-leader-initials {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(0, 86, 179, 0.25), rgba(100, 150, 255, 0.25));
          border: 1px solid rgba(100, 150, 255, 0.3);
          color: #6ba3f5;
          font-weight: 800;
          font-size: 0.95rem;
          display: flex; align-items: center; justify-content: center;
          margin-right: 1.5rem;
          flex-shrink: 0;
          letter-spacing: 0.05em;
          transition: background 0.3s, color 0.3s, border-color 0.3s;
        }
        .ab-leader-card:hover .ab-leader-initials {
          background: #0056b3;
          color: #fff;
          border-color: #0056b3;
        }
        .ab-leader-meta {
          display: flex;
          align-items: center;
          flex-grow: 1;
        }
        .ab-leader-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .ab-leader-name { font-size: 1.05rem; font-weight: 800; color: #fff; }
        .ab-leader-role {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(100,150,255,0.65);
          margin-top: 0.25rem;
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

        /* ── CERTIFICATIONS ── */
        .ab-certs {
          background: #f8f9fc;
        }
        .ab-certs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-top: 3rem;
        }
        @media (min-width: 768px) {
          .ab-certs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .cert-card {
          background: #fff;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .cert-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .cert-card-img-wrap {
          width: 100%;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f9fafb;
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 1.5rem;
        }
        .cert-card-img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
        }
        .cert-card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0a0c18;
          margin-bottom: 0.5rem;
        }
        .cert-card-issuer {
          font-size: 0.85rem;
          color: #4b5563;
          margin-bottom: 0.25rem;
        }
        .cert-card-validity {
          font-size: 0.8rem;
          color: #9ca3af;
          margin-bottom: 1.5rem;
        }
        .cert-card-link {
          font-size: 0.85rem;
          font-weight: 600;
          color: #ba1a1a;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          text-decoration: underline;
          transition: color 0.2s;
          margin-top: auto;
        }
        .cert-card-link:hover {
          color: #9e1515;
        }

        /* ── LIGHTBOX MODAL ── */
        .cert-lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(10, 12, 24, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          cursor: zoom-out;
        }
        .cert-lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          background: #fff;
          padding: 1rem;
          border-radius: 12px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          cursor: default;
        }
        .cert-lightbox-img {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 8px;
        }
        .cert-lightbox-close {
          position: absolute;
          top: -2.5rem;
          right: -0.5rem;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
        }
        @media (max-width: 768px) {
          .cert-lightbox-close {
            top: 1rem;
            right: 1rem;
            background: rgba(10, 12, 24, 0.5);
            padding: 4px;
            border-radius: 50%;
            backdrop-filter: blur(4px);
          }
        }
        /* ── WHY US SECTION ── */
        .ab-whyus {
          background: #f7f8fb;
        }
        .ab-whyus-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-top: 2.5rem;
        }
        @media (max-width: 768px) {
          .ab-whyus-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
        .why-card {
          background: #fff;
          border: 1px solid #eaecf4;
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .why-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 40, 0.05);
        }
        .why-icon {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: #eef3ff;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          color: #0056b3;
        }
        .why-text {
          font-size: 0.88rem;
          color: #4b5563;
          line-height: 1.6;
          font-weight: 500;
        }

        /* ── BRANCHES SECTION ── */
        .ab-branches {
          background: #fff;
        }
        .ab-branches-container {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          margin-top: 2.5rem;
        }
        .state-group-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #0056b3;
          border-bottom: 2px solid #eaecf4;
          padding-bottom: 0.5rem;
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }
        .ab-branches-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .ab-branches-grid {
            grid-template-columns: 1fr;
          }
        }
        .branch-card {
          background: #f7f8fb;
          border: 1px solid #eaecf4;
          border-radius: 12px;
          padding: 1.5rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .branch-card:hover {
          border-color: #c8d6ef;
          box-shadow: 0 4px 16px rgba(0,86,179,0.06);
        }
        .branch-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0a0c18;
          margin-bottom: 0.75rem;
        }
        .branch-address {
          font-size: 0.88rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 1rem;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }
        .branch-contact {
          font-size: 0.85rem;
          color: #0056b3;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .branch-contact-item {
          background: #fff;
          border: 1px solid #eaecf4;
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: #4b5563;
        }
        .branch-contact-item span {
          color: #0056b3;
          font-size: 16px;
        }

        /* ── INTERACTIVE OPS TABS ── */
        .ab-ops-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .ab-ops-tab-btn {
          background: #fff;
          border: 1px solid #eaecf4;
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #666;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .ab-ops-tab-btn.active {
          background: #0056b3;
          border-color: #0056b3;
          color: #fff;
          box-shadow: 0 4px 12px rgba(0,86,179,0.2);
        }
        .ab-ops-tab-btn:hover:not(.active) {
          background: #f0f4ff;
          color: #0056b3;
          border-color: #0056b3;
        }
        .ab-ops-content-card {
          background: #fff;
          border: 1px solid #eaecf4;
          border-radius: 20px;
          padding: 2.5rem;
          min-height: 300px;
          box-shadow: 0 4px 20px rgba(0,0,40,0.02);
        }
        .ab-ops-grid-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        @media (max-width: 900px) {
          .ab-ops-grid-2col {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        /* ── SCROLL REVEALS (ABOUT) ── */
        .ab-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .ab-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .ab-stagger > * {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .ab-stagger.visible > *:nth-child(1) { opacity:1; transform:translateY(0); transition-delay: 0.1s; }
        .ab-stagger.visible > *:nth-child(2) { opacity:1; transform:translateY(0); transition-delay: 0.2s; }
        .ab-stagger.visible > *:nth-child(3) { opacity:1; transform:translateY(0); transition-delay: 0.3s; }
        .ab-stagger.visible > *:nth-child(4) { opacity:1; transform:translateY(0); transition-delay: 0.4s; }
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
            <p className="ab-hero-eyebrow">ABOUT US</p>
            <h1 className="ab-hero-title">
              Noble Security &<br /><em>Services</em>
            </h1>
            <p className="ab-hero-body">
              An ISO 9001:2015 Certified Security Group Company providing a wide range of Security, Manpower, and Housekeeping Services. Delivering customized protection and peace of mind since 2015.
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
                <p className="ab-eyebrow">Our Profile</p>
                <h2 className="ab-heading">Integrated solutions <em>under one roof</em></h2>
                <p className="ab-story-body">
                  We are the best security guards service provider company in India since 2015. We are passionate about our work and truly believe in offering the best services to our clients at the most affordable cost. We continuously upgrade and improve ourselves to give you the best in security. Our philosophy is <strong>“Surksha Pratham Kartavya”</strong> (Security is Our Primary Duty).
                </p>
                <p className="ab-story-body">
                  We provide integrated solutions to our clients by combining Security, Housekeeping and Manpower services under one roof, thereby enabling our clients to avoid multiple vendors and deal only with us for all such non-core tasks.
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

        {/* ── MISSION & APPROACH ── */}
        <section className="ab-section ab-mv">
          <div className="ab-inner">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p className="ab-values-eyebrow">Purpose</p>
              <h2 className="ab-heading">Philosophy & Approach</h2>
            </div>
            <div className="ab-mv-grid">
              <div className="ab-mv-card">
                <div className="ab-mv-icon">
                  <span className="material-symbols-outlined" style={{ fontSize: 24, color: "#0056b3" }}>rocket_launch</span>
                </div>
                <div className="ab-mv-title">Our Philosophy & Mission</div>
                <p className="ab-mv-body">
                  We truly believe that Security is much more than mere deployment and monitoring of guards. It involves thorough identification of the roles and responsibilities of each guard and providing training to enable them to perform their duties most efficiently and productively. We aim to make your investment in security more productive and to relieve the management completely of security and all allied problems.
                </p>
              </div>
              <div className="ab-mv-card vision">
                <div className="ab-mv-icon">
                  <span className="material-symbols-outlined" style={{ fontSize: 24, color: "#1a7a4a" }}>visibility</span>
                </div>
                <div className="ab-mv-title">Tailored Security Solutions</div>
                <p className="ab-mv-body">
                  Manned Guarding is no longer a one-size-fits-all solution. Depending on the size, location, nature and requirements of the client’s business, we customize our solution after understanding the client’s pain points. We secure Corporates, Banks & Financial Institutions, Retail Outlets, Industrial Units, Residential and Commercial Buildings, Hospitals, Educational and Government Institutions.
                </p>
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

        {/* ── WHY US? (REASONS TO CHOOSE US) ── */}
        <section className="ab-section ab-whyus">
          <div className="ab-inner">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p className="ab-values-eyebrow">Differentiators</p>
              <h2 className="ab-heading">Why Choose Us?</h2>
              <p className="ab-sub" style={{ maxWidth: "600px", margin: "1rem auto 0" }}>
                Discover the key reasons why Noble Security & Services is the preferred choice for clients seeking security, housekeeping, and manpower solutions.
              </p>
            </div>
            <div className="ab-whyus-grid">
              {whyChooseUs.map((reason, i) => (
                <div key={i} className="why-card">
                  <div className="why-icon">
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>done</span>
                  </div>
                  <div className="why-text">{reason}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRAINING & COMPLIANCE (SECURITY OPERATIONS) ── */}
        <section className="ab-section ab-training">
          <div className="ab-inner">
            <div className="ab-training-header">
              <p className="ab-values-eyebrow">Operations</p>
              <h2 className="ab-heading">Security Operations & Training</h2>
              <p className="ab-training-sub">
                Our strict recruitment, ongoing training, pre-deployment planning, and active post-deployment supervision ensure reliable protection.
              </p>
            </div>

            {/* Interactive Tabs */}
            <div className="ab-ops-tabs">
              <button
                className={`ab-ops-tab-btn ${activeOpsTab === "recruitment" ? "active" : ""}`}
                onClick={() => setActiveOpsTab("recruitment")}
              >
                <span className="material-symbols-outlined">how_to_reg</span>
                Recruitment & Training
              </button>
              <button
                className={`ab-ops-tab-btn ${activeOpsTab === "modules" ? "active" : ""}`}
                onClick={() => setActiveOpsTab("modules")}
              >
                <span className="material-symbols-outlined">menu_book</span>
                Training Modules
              </button>
              <button
                className={`ab-ops-tab-btn ${activeOpsTab === "operations" ? "active" : ""}`}
                onClick={() => setActiveOpsTab("operations")}
              >
                <span className="material-symbols-outlined">published_with_changes</span>
                Pre & Post Deployment
              </button>
            </div>

            {/* Tab content */}
            <div className="ab-ops-content-card">
              {activeOpsTab === "recruitment" && (
                <div className="ab-ops-grid-2col">
                  <div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0a0c18", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span className="material-symbols-outlined" style={{ color: "#0056b3" }}>person_search</span>
                      Stringent Selection & Recruitment
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: "1.75", marginBottom: "1rem" }}>
                      Utmost attention is given to the recruitment of our personnel by stringent parameters laid down as a group policy. This includes education, age, physical fitness, and background check.
                    </p>
                    <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: "1.75" }}>
                      Our dedicated recruitment department is strictly responsible for conducting police verifications, comprehensive background checks, and reviewing the service records of each employee before they are hired.
                    </p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0a0c18", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span className="material-symbols-outlined" style={{ color: "#0056b3" }}>school</span>
                      Comprehensive Ongoing Training
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: "1.75", marginBottom: "1rem" }}>
                      All Guarding Personnel undergo a Security Training Course, which imparts the necessary skills to perform their duties with great efficiency and productivity. The training process is ongoing and progressive throughout the employee's career to refresh and develop their knowledge.
                    </p>
                    <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: "1.75" }}>
                      We feature well-equipped classrooms with facilities such as projectors and training equipment. Site-specific training courses are designed after thorough site-visits and discussions with the client.
                    </p>
                  </div>
                </div>
              )}

              {activeOpsTab === "modules" && (
                <div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0a0c18", marginBottom: "1.5rem" }}>
                    Our Security Training covers:
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                    <div>
                      <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#0056b3", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span className="material-symbols-outlined">fitness_center</span>
                        1. Basics & Physicals
                      </h4>
                      <ul style={{ paddingLeft: "1.25rem", color: "#555", fontSize: "0.88rem", lineHeight: "1.7" }}>
                        <li>Physical fitness training & drills</li>
                        <li>Guarding personnel duties & responsibilities</li>
                        <li>Conduct in public & courtesy</li>
                        <li>Correct wearing of uniform & rank badges</li>
                        <li>Alertness, obedience & mannerism</li>
                        <li>Right to private defence & filing FIR</li>
                        <li>Statutory benefits (PF, ESIC, LWF)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#0056b3", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span className="material-symbols-outlined">vpn_key</span>
                        2. Trade & Technical Skills
                      </h4>
                      <ul style={{ paddingLeft: "1.25rem", color: "#555", fontSize: "0.88rem", lineHeight: "1.7" }}>
                        <li>Handling security at reception, gates, stores, factories, residences, hotels, malls, banks, ATMs</li>
                        <li>Patrolling premises & search procedures</li>
                        <li>Handing & taking over procedures</li>
                        <li>Register maintenance & log books</li>
                        <li>Handling keys & CCTV systems</li>
                        <li>Operating metal detectors & breath analysers</li>
                        <li>Examining identification papers & report writing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#0056b3", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span className="material-symbols-outlined">emergency</span>
                        3. Emergency Protocols
                      </h4>
                      <ul style={{ paddingLeft: "1.25rem", color: "#555", fontSize: "0.88rem", lineHeight: "1.7" }}>
                        <li>First aid & life saving procedures</li>
                        <li>Fire prevention & firefighting controls</li>
                        <li>Crisis response & evacuation drills</li>
                        <li>Disaster management guidelines</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeOpsTab === "operations" && (
                <div className="ab-ops-grid-2col">
                  <div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0a0c18", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span className="material-symbols-outlined" style={{ color: "#0056b3" }}>preview</span>
                      Pre-Deployment Site Surveys
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: "1.75", marginBottom: "1rem" }}>
                      Before Noble Group takes up any assignment, the operation team visits the site for a survey to analyse and understand the security needs of the client’s premises.
                    </p>
                    <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: "1.75" }}>
                      Based on the survey, a custom security setup is designed. A detailed set of site-specific instructions, emergency procedures, client pain points, and a charter of duties is prepared in consultation with the client.
                    </p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0a0c18", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span className="material-symbols-outlined" style={{ color: "#0056b3" }}>gps_fixed</span>
                      Post-Deployment Supervision
                    </h3>
                    <ul style={{ color: "#555", fontSize: "0.88rem", lineHeight: "1.7", paddingLeft: "1.25rem" }}>
                      <li><strong>Surprise Checks:</strong> Regular day and night checks by area officers, area managers, and senior executives.</li>
                      <li><strong>Mobile App Tracking:</strong> Remote monitoring of guard movement and automated attendance with time & location punches.</li>
                      <li><strong>Regular Rotation:</strong> Security personnel are transferred preferably every 12 months or per client requirements to prevent familiarity.</li>
                      <li><strong>Customer Care Cell:</strong> Dedicated cell in touch with clients to collect feedback and resolve issues within 48 hours.</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section className="ab-section ab-certs">
          <div className="ab-inner">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p className="ab-values-eyebrow">Credentials</p>
              <h2 className="ab-heading">Our Certifications</h2>
              <p className="ab-training-sub" style={{ margin: "1rem auto 0", maxWidth: "600px" }}>
                We are fully certified and compliant with the highest industry standards, giving you complete peace of mind.
              </p>
            </div>
            <div
              ref={certsRef}
              className={`ab-certs-grid ab-stagger ${certsVisible ? "visible" : ""}`}
            >
              {[
                { title: "Trade Mark Annexure", issuer: "Intellectual Property India, Government of India", img: "/c1.jpeg" },
                { title: "Trade Mark Registration", issuer: "Trade Marks Registry, Government of India", img: "/c2.jpeg" },
                { title: "ISO 9001:2015 Certification", issuer: "International Quality Certification Services UK Ltd", img: "/ce3.png" },
                { title: "PSARA Security License", issuer: "Controlling Authority, Government of Maharashtra", img: "/ce4.png" },
              ].map((c, i) => (
                <div key={i} className="cert-card">
                  <div className="cert-card-img-wrap">
                    <img src={c.img} alt={c.title} className="cert-card-img" />
                  </div>
                  <h3 className="cert-card-title">Certification Name</h3>
                  <p style={{ fontSize: "0.85rem", fontWeight: "600", color: "#666", marginBottom: "0.5rem" }}>{c.title}</p>
                  <p className="cert-card-issuer">Issued by: {c.issuer}</p>
                  <button className="cert-card-link" onClick={() => setActiveCert(c.img)}>
                    View Certificate
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR BRANCHES ── */}
        <section className="ab-section ab-branches">
          <div className="ab-inner">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p className="ab-values-eyebrow">Our Offices</p>
              <h2 className="ab-heading">Our Branches</h2>
              <p className="ab-sub" style={{ maxWidth: "600px", margin: "1rem auto 0" }}>
                Serving clients across Maharashtra, Karnataka, and Delhi with localized coordination and rapid response.
              </p>
            </div>

            <div className="ab-branches-container">
              {branches.map((b, i) => (
                <div key={i}>
                  <h3 className="state-group-title">{b.state}</h3>
                  <div className="ab-branches-grid">
                    {b.offices.map((office, idx) => (
                      <div key={idx} className="branch-card">
                        <div className="branch-name">{office.name}</div>
                        <div className="branch-address">
                          <span className="material-symbols-outlined" style={{ color: "#0056b3", fontSize: 18, marginTop: "2px" }}>location_on</span>
                          {office.address}
                        </div>
                        {office.phones.length > 0 && (
                          <div className="branch-contact">
                            <span style={{ color: "#555", display: "flex", alignItems: "center" }}>
                              <span className="material-symbols-outlined" style={{ fontSize: 18, marginRight: "4px" }}>phone</span>
                              Contact:
                            </span>
                            {office.phones.map((phone, pIdx) => (
                              <a href={`tel:${phone}`} key={pIdx} className="branch-contact-item">
                                {phone}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {activeCert && (
        <div
          className="cert-lightbox"
          onClick={() => setActiveCert(null)}
        >
          <div className="cert-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-lightbox-close" onClick={() => setActiveCert(null)} aria-label="Close Lightbox">
              <span className="material-symbols-outlined" style={{ fontSize: 24 }}>close</span>
            </button>
            <img src={activeCert} alt="Certificate" className="cert-lightbox-img" />
          </div>
        </div>
      )}
    </>
  );
};