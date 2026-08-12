/**
 * PrivacyPolicy.tsx — Privacy Policy Page
 *
 * Tasks:
 *   29 — Right to Delete
 *   30 — Privacy Policy
 *
 * Covers: GDPR, India's Digital Personal Data Protection Act (DPDPA) 2023,
 * data collection, cookies, third-party services, right to erasure.
 */

import React, { useEffect } from "react";
import { useSEO } from "../hooks/useSEO";

interface PrivacyPolicyProps {
  setCurrentPage?: (page: string) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ setCurrentPage }) => {
  useSEO({
    title: "Privacy Policy",
    description:
      "Read Noble Security Services' privacy policy. We are committed to protecting your personal data in compliance with India's DPDPA 2023.",
    canonical: "/privacy-policy",
    keywords: "Noble Security Privacy Policy, Data Protection, DPDPA 2023",
    location: "all",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = "12 August 2026";

  return (
    <>
      <style>{`
        .pp-page { max-width: 900px; margin: 0 auto; padding: 4rem 2rem 6rem; color: #0a0c18; font-family: inherit; }
        .pp-hero { background: #0a0c18; padding: 5rem 0 4rem; }
        .pp-hero-inner { max-width: 900px; margin: 0 auto; padding: 0 2rem; }
        .pp-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(100,150,255,0.8); margin-bottom: 1rem;
        }
        .pp-hero-eyebrow::before { content:''; display:block; width:24px; height:1px; background:rgba(100,150,255,0.5); }
        .pp-hero h1 { font-size: clamp(2rem,5vw,3rem); font-weight:900; color:#fff; letter-spacing:-0.03em; margin-bottom:0.75rem; }
        .pp-hero-sub { font-size:0.9rem; color:rgba(255,255,255,0.45); }
        .pp-toc { background:#f7f8fb; border:1px solid #eaecf4; border-radius:14px; padding:1.5rem 2rem; margin:2.5rem 0; }
        .pp-toc h2 { font-size:0.88rem; font-weight:800; margin-bottom:0.75rem; color:#0a0c18; text-transform:uppercase; letter-spacing:0.08em; }
        .pp-toc ol { margin:0; padding-left:1.2rem; }
        .pp-toc li { font-size:0.84rem; color:#0056b3; margin-bottom:0.35rem; }
        .pp-toc a { color:#0056b3; text-decoration:none; }
        .pp-toc a:hover { text-decoration:underline; }
        .pp-section { margin-bottom:3rem; }
        .pp-section h2 { font-size:1.2rem; font-weight:800; color:#0a0c18; margin-bottom:1rem; padding-bottom:0.5rem; border-bottom:2px solid #eaecf4; scroll-margin-top:100px; }
        .pp-section h3 { font-size:0.98rem; font-weight:700; color:#0a0c18; margin:1.25rem 0 0.5rem; }
        .pp-section p { font-size:0.88rem; color:#444; line-height:1.85; margin-bottom:0.85rem; }
        .pp-section ul { font-size:0.88rem; color:#444; line-height:1.85; padding-left:1.5rem; margin-bottom:0.85rem; }
        .pp-section li { margin-bottom:0.35rem; }
        .pp-section strong { color:#0a0c18; }
        .pp-highlight {
          background:#eef3ff; border-left:3px solid #0056b3;
          border-radius:0 10px 10px 0; padding:1rem 1.25rem;
          font-size:0.85rem; color:#0a0c18; margin:1.25rem 0; line-height:1.7;
        }
        .pp-contact-box {
          background:#0056b3; border-radius:16px; padding:2rem;
          color:#fff; margin-top:3rem;
        }
        .pp-contact-box h2 { color:#fff; border-color:rgba(255,255,255,0.2); }
        .pp-contact-box p { color:rgba(255,255,255,0.8); }
        .pp-contact-box a { color:#fff; font-weight:700; }
        .pp-back-btn {
          display:inline-flex; align-items:center; gap:0.4rem;
          background:none; border:1.5px solid #eaecf4; border-radius:999px;
          padding:0.55rem 1.1rem; font-size:0.8rem; font-weight:700;
          color:#0056b3; cursor:pointer; margin-bottom:2rem;
          transition:border-color 0.2s, background 0.2s;
        }
        .pp-back-btn:hover { background:#f0f5ff; border-color:#0056b3; }
        .pp-badge {
          display:inline-flex; align-items:center; gap:0.35rem;
          background:#eef3ff; border-radius:999px; padding:0.3rem 0.8rem;
          font-size:0.72rem; font-weight:700; color:#0056b3; margin-bottom:2rem;
        }
      `}</style>

      {/* Hero */}
      <section className="pp-hero">
        <div className="pp-hero-inner">
          <p className="pp-hero-eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="pp-hero-sub">Last updated: {lastUpdated} · Effective from: 12 August 2026</p>
        </div>
      </section>

      {/* Content */}
      <div className="pp-page">
        {setCurrentPage && (
          <button className="pp-back-btn" onClick={() => setCurrentPage("home")}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
            Back to Home
          </button>
        )}

        <span className="pp-badge">
          <span className="material-symbols-outlined" style={{ fontSize: 14 }}>verified_user</span>
          Compliant with India's Digital Personal Data Protection Act 2023
        </span>

        {/* Table of Contents */}
        <div className="pp-toc">
          <h2>Table of Contents</h2>
          <ol>
            <li><a href="#who-we-are">1. Who We Are</a></li>
            <li><a href="#data-we-collect">2. Data We Collect</a></li>
            <li><a href="#how-we-use">3. How We Use Your Data</a></li>
            <li><a href="#legal-basis">4. Legal Basis for Processing</a></li>
            <li><a href="#cookies">5. Cookies &amp; Tracking</a></li>
            <li><a href="#third-parties">6. Third-Party Services</a></li>
            <li><a href="#data-retention">7. Data Retention</a></li>
            <li><a href="#your-rights">8. Your Rights (including Right to Delete)</a></li>
            <li><a href="#security">9. Data Security</a></li>
            <li><a href="#children">10. Children's Privacy</a></li>
            <li><a href="#changes">11. Changes to This Policy</a></li>
            <li><a href="#contact-us">12. Contact Us</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section className="pp-section" id="who-we-are">
          <h2>1. Who We Are</h2>
          <p>
            <strong>Noble Security Services</strong> ("Noble Security", "we", "our", or "us") is a professional
            security agency registered in Maharashtra, India. Our registered office is at:
          </p>
          <p>
            G-3, Girnar Tower, Opp. PNG Showroom, Sangli-Miraj Road, Vishrambag, Sangli – 416415, Maharashtra, India.
          </p>
          <p>
            We are committed to protecting your personal data and your privacy. This Privacy Policy explains how
            we collect, use, store, and protect information about you when you visit{" "}
            <strong>www.noblesecurityservices.com</strong> or contact us.
          </p>
        </section>

        {/* Section 2 */}
        <section className="pp-section" id="data-we-collect">
          <h2>2. Data We Collect</h2>
          <h3>Information you provide directly:</h3>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number (if provided)</li>
            <li>Message content submitted via our contact form</li>
            <li>Inquiry subject / service interest</li>
          </ul>
          <h3>Information collected automatically:</h3>
          <ul>
            <li>IP address and approximate geolocation</li>
            <li>Browser type, version, and operating system</li>
            <li>Pages visited and time spent on each page</li>
            <li>Referring URL</li>
            <li>Device type (mobile, tablet, desktop)</li>
          </ul>
          <div className="pp-highlight">
            <strong>We do not collect:</strong> government ID numbers, financial information,
            biometric data, passwords, or sensitive personal data through this website.
          </div>
        </section>

        {/* Section 3 */}
        <section className="pp-section" id="how-we-use">
          <h2>3. How We Use Your Data</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and service requests</li>
            <li>Provide and improve our security services</li>
            <li>Send service-related communications (not marketing, unless you opt in)</li>
            <li>Analyse website performance and user experience</li>
            <li>Ensure the security and integrity of our website</li>
            <li>Comply with legal obligations under Indian law</li>
          </ul>
          <p>
            We will <strong>never sell, rent, or trade</strong> your personal data to third parties.
          </p>
        </section>

        {/* Section 4 */}
        <section className="pp-section" id="legal-basis">
          <h2>4. Legal Basis for Processing</h2>
          <p>
            Under India's <strong>Digital Personal Data Protection Act (DPDPA) 2023</strong>, we process
            your personal data on the following lawful bases:
          </p>
          <ul>
            <li><strong>Consent:</strong> When you submit a contact form or accept cookies.</li>
            <li><strong>Legitimate Interests:</strong> To improve our website and respond to inquiries.</li>
            <li><strong>Legal Obligation:</strong> To comply with applicable Indian laws and regulations.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="pp-section" id="cookies">
          <h2>5. Cookies &amp; Tracking</h2>
          <p>
            We use cookies and similar technologies to enhance your browsing experience. You can manage
            your cookie preferences through our <strong>Cookie Consent banner</strong> shown on your
            first visit, or at any time by clearing your browser data.
          </p>
          <h3>Types of cookies we use:</h3>
          <ul>
            <li>
              <strong>Necessary Cookies:</strong> Essential for the website to function correctly.
              These cannot be disabled. They do not store personally identifiable information.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how visitors use our site
              (e.g., page views, bounce rate). Collected only with your consent.
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Used to personalise advertisements and measure
              campaign effectiveness. Collected only with your explicit consent.
            </li>
          </ul>
          <p>
            You can withdraw consent for non-essential cookies at any time by clicking
            "Manage Preferences" in the cookie banner or by contacting us at{" "}
            <a href="mailto:info@noblesecurity.co.in">info@noblesecurity.co.in</a>.
          </p>
        </section>

        {/* Section 6 */}
        <section className="pp-section" id="third-parties">
          <h2>6. Third-Party Services</h2>
          <p>Our website uses the following third-party services:</p>
          <ul>
            <li>
              <strong>Google Maps:</strong> Embedded maps for office locations. Google may collect
              data per their{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>.
            </li>
            <li>
              <strong>Google Fonts:</strong> Typography loaded from Google servers. Google may log
              font requests per their Privacy Policy.
            </li>
            <li>
              <strong>WhatsApp:</strong> Links to our WhatsApp business number. WhatsApp's{" "}
              <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>{" "}
              applies when you initiate a chat.
            </li>
            <li>
              <strong>Instagram &amp; LinkedIn:</strong> Social media profile links. Their respective
              privacy policies apply when you visit those platforms.
            </li>
          </ul>
          <div className="pp-highlight">
            We do not use Facebook Pixel, Google Ads remarketing, or any behavioural advertising
            platforms on this website without your explicit consent.
          </div>
        </section>

        {/* Section 7 */}
        <section className="pp-section" id="data-retention">
          <h2>7. Data Retention</h2>
          <p>
            We retain your personal data only as long as necessary to fulfil the purpose for which
            it was collected or as required by law:
          </p>
          <ul>
            <li><strong>Contact form submissions:</strong> 12 months from submission date</li>
            <li><strong>Analytics data:</strong> Up to 26 months (anonymised after 6 months)</li>
            <li><strong>Cookie consent records:</strong> 12 months</li>
            <li><strong>Legal/compliance records:</strong> 7 years as required by Indian law</li>
          </ul>
          <p>
            After the retention period expires, your data is securely deleted or anonymised.
          </p>
        </section>

        {/* Section 8 — Right to Delete */}
        <section className="pp-section" id="your-rights">
          <h2>8. Your Rights (including Right to Delete)</h2>
          <p>
            Under India's DPDPA 2023 and applicable international privacy law, you have the
            following rights regarding your personal data:
          </p>
          <ul>
            <li>
              <strong>Right to Access:</strong> Request a copy of the personal data we hold about you.
            </li>
            <li>
              <strong>Right to Correction:</strong> Request that we correct inaccurate or incomplete data.
            </li>
            <li>
              <strong>Right to Erasure (Right to Delete):</strong> Request that we delete your
              personal data. We will comply within 30 days unless we have a legal obligation to
              retain it.
            </li>
            <li>
              <strong>Right to Withdraw Consent:</strong> Withdraw your consent for data processing
              at any time. This will not affect the lawfulness of processing based on consent before withdrawal.
            </li>
            <li>
              <strong>Right to Nominate:</strong> Under DPDPA 2023, you may nominate another person
              to exercise these rights on your behalf in the event of your death or incapacity.
            </li>
            <li>
              <strong>Right to Object:</strong> Object to processing of your data for direct marketing.
            </li>
          </ul>
          <div className="pp-highlight">
            <strong>To exercise your rights:</strong> Send a written request to{" "}
            <a href="mailto:info@noblesecurity.co.in">info@noblesecurity.co.in</a> with subject line
            "Data Rights Request — [Your Name]". We will respond within <strong>30 days</strong>.
            For Right to Delete requests, we will confirm deletion in writing.
          </div>
        </section>

        {/* Section 9 */}
        <section className="pp-section" id="security">
          <h2>9. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal
            data against unauthorised access, disclosure, alteration, or destruction, including:
          </p>
          <ul>
            <li>HTTPS / TLS 1.3 encryption for all data in transit</li>
            <li>HTTP Strict Transport Security (HSTS) enforced</li>
            <li>Content Security Policy (CSP) to prevent XSS attacks</li>
            <li>Input sanitization and validation on all form submissions</li>
            <li>Regular dependency vulnerability scanning</li>
            <li>Restricted access to contact form submissions</li>
          </ul>
          <p>
            While we take all reasonable precautions, no method of transmission over the Internet is
            100% secure. Please use discretion when sharing sensitive information online.
          </p>
        </section>

        {/* Section 10 */}
        <section className="pp-section" id="children">
          <h2>10. Children's Privacy</h2>
          <p>
            Our website is not directed to children under the age of 18. We do not knowingly
            collect personal data from anyone under 18. If you believe we have inadvertently
            collected data from a minor, please contact us immediately so we can delete it.
          </p>
        </section>

        {/* Section 11 */}
        <section className="pp-section" id="changes">
          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the
            "Last updated" date at the top of this page and, where appropriate, notify you via email
            or a prominent notice on our website. We encourage you to review this policy periodically.
          </p>
          <p>
            Your continued use of our website after any changes constitutes acceptance of the
            updated Privacy Policy.
          </p>
        </section>

        {/* Section 12 — Contact */}
        <div className="pp-contact-box" id="contact-us">
          <h2>12. Contact Us</h2>
          <p>
            For any questions, concerns, or data rights requests, please contact our Data Protection
            Officer:
          </p>
          <p>
            <strong>Noble Security Services</strong><br />
            G-3, Girnar Tower, Opp. PNG Showroom, Sangli-Miraj Road,<br />
            Vishrambag, Sangli – 416415, Maharashtra, India<br />
            Email: <a href="mailto:info@noblesecurity.co.in">info@noblesecurity.co.in</a><br />
            Phone: <a href="tel:+919823245552">+91 9823245552</a>
          </p>
        </div>
      </div>
    </>
  );
};
