/**
 * TermsOfService.tsx — Terms of Service Page
 *
 * Task: 31 — Terms of Service
 *
 * Covers: service scope, acceptable use, intellectual property,
 * disclaimers, limitations of liability, governing law.
 */

import React, { useEffect } from "react";
import { useSEO } from "../hooks/useSEO";

interface TermsOfServiceProps {
  setCurrentPage?: (page: string) => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ setCurrentPage }) => {
  useSEO({
    title: "Terms of Service",
    description:
      "Read Noble Security Services' Terms of Service. Understand the terms governing the use of our website and security services.",
    canonical: "/terms-of-service",
    keywords: "Noble Security Terms of Service, Terms and Conditions, Security Services Agreement",
    location: "all",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = "12 August 2026";

  return (
    <>
      <style>{`
        .tos-hero { background: #0a0c18; padding: 5rem 0 4rem; }
        .tos-hero-inner { max-width: 900px; margin: 0 auto; padding: 0 2rem; }
        .tos-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(100,150,255,0.8); margin-bottom: 1rem;
        }
        .tos-hero-eyebrow::before { content:''; display:block; width:24px; height:1px; background:rgba(100,150,255,0.5); }
        .tos-hero h1 { font-size: clamp(2rem,5vw,3rem); font-weight:900; color:#fff; letter-spacing:-0.03em; margin-bottom:0.75rem; }
        .tos-hero-sub { font-size:0.9rem; color:rgba(255,255,255,0.45); }
        .tos-page { max-width: 900px; margin: 0 auto; padding: 4rem 2rem 6rem; color: #0a0c18; font-family: inherit; }
        .tos-toc { background:#f7f8fb; border:1px solid #eaecf4; border-radius:14px; padding:1.5rem 2rem; margin:2.5rem 0; }
        .tos-toc h2 { font-size:0.88rem; font-weight:800; margin-bottom:0.75rem; color:#0a0c18; text-transform:uppercase; letter-spacing:0.08em; }
        .tos-toc ol { margin:0; padding-left:1.2rem; }
        .tos-toc li { font-size:0.84rem; color:#0056b3; margin-bottom:0.35rem; }
        .tos-toc a { color:#0056b3; text-decoration:none; }
        .tos-toc a:hover { text-decoration:underline; }
        .tos-section { margin-bottom:3rem; }
        .tos-section h2 { font-size:1.2rem; font-weight:800; color:#0a0c18; margin-bottom:1rem; padding-bottom:0.5rem; border-bottom:2px solid #eaecf4; scroll-margin-top:100px; }
        .tos-section h3 { font-size:0.98rem; font-weight:700; color:#0a0c18; margin:1.25rem 0 0.5rem; }
        .tos-section p { font-size:0.88rem; color:#444; line-height:1.85; margin-bottom:0.85rem; }
        .tos-section ul, .tos-section ol { font-size:0.88rem; color:#444; line-height:1.85; padding-left:1.5rem; margin-bottom:0.85rem; }
        .tos-section li { margin-bottom:0.35rem; }
        .tos-section strong { color:#0a0c18; }
        .tos-highlight {
          background:#fff7ed; border-left:3px solid #f59e0b;
          border-radius:0 10px 10px 0; padding:1rem 1.25rem;
          font-size:0.85rem; color:#0a0c18; margin:1.25rem 0; line-height:1.7;
        }
        .tos-contact-box {
          background:#0056b3; border-radius:16px; padding:2rem;
          color:#fff; margin-top:3rem;
        }
        .tos-contact-box h2 { color:#fff; border-color:rgba(255,255,255,0.2); }
        .tos-contact-box p { color:rgba(255,255,255,0.8); }
        .tos-contact-box a { color:#fff; font-weight:700; }
        .tos-back-btn {
          display:inline-flex; align-items:center; gap:0.4rem;
          background:none; border:1.5px solid #eaecf4; border-radius:999px;
          padding:0.55rem 1.1rem; font-size:0.8rem; font-weight:700;
          color:#0056b3; cursor:pointer; margin-bottom:2rem;
          transition:border-color 0.2s, background 0.2s;
        }
        .tos-back-btn:hover { background:#f0f5ff; border-color:#0056b3; }
        .tos-badge {
          display:inline-flex; align-items:center; gap:0.35rem;
          background:#fff7ed; border-radius:999px; padding:0.3rem 0.8rem;
          font-size:0.72rem; font-weight:700; color:#b45309; margin-bottom:2rem;
        }
      `}</style>

      {/* Hero */}
      <section className="tos-hero">
        <div className="tos-hero-inner">
          <p className="tos-hero-eyebrow">Legal</p>
          <h1>Terms of Service</h1>
          <p className="tos-hero-sub">Last updated: {lastUpdated} · Effective from: 12 August 2026</p>
        </div>
      </section>

      {/* Content */}
      <div className="tos-page">
        {setCurrentPage && (
          <button className="tos-back-btn" onClick={() => setCurrentPage("home")}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
            Back to Home
          </button>
        )}

        <span className="tos-badge">
          <span className="material-symbols-outlined" style={{ fontSize: 14 }}>gavel</span>
          Governed by the laws of India
        </span>

        {/* Table of Contents */}
        <div className="tos-toc">
          <h2>Table of Contents</h2>
          <ol>
            <li><a href="#acceptance">1. Acceptance of Terms</a></li>
            <li><a href="#services">2. Services Description</a></li>
            <li><a href="#website-use">3. Use of Website</a></li>
            <li><a href="#acceptable-use">4. Acceptable Use Policy</a></li>
            <li><a href="#intellectual-property">5. Intellectual Property</a></li>
            <li><a href="#disclaimer">6. Disclaimer of Warranties</a></li>
            <li><a href="#limitation">7. Limitation of Liability</a></li>
            <li><a href="#indemnification">8. Indemnification</a></li>
            <li><a href="#third-party">9. Third-Party Links</a></li>
            <li><a href="#privacy">10. Privacy</a></li>
            <li><a href="#termination">11. Termination</a></li>
            <li><a href="#governing-law">12. Governing Law &amp; Dispute Resolution</a></li>
            <li><a href="#changes">13. Changes to Terms</a></li>
            <li><a href="#contact">14. Contact</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section className="tos-section" id="acceptance">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website at{" "}
            <strong>www.noblesecurityservices.com</strong> (the "Site"), you agree to be bound by
            these Terms of Service ("Terms"). If you do not agree with any part of these Terms,
            please do not use our Site.
          </p>
          <p>
            These Terms apply to all visitors, users, and anyone who accesses or uses the Site.
            They govern your use of this website only — not any offline services or contracts you
            enter into with Noble Security Services.
          </p>
        </section>

        {/* Section 2 */}
        <section className="tos-section" id="services">
          <h2>2. Services Description</h2>
          <p>
            Noble Security Services is a professional security agency providing the following
            services across Maharashtra, India:
          </p>
          <ul>
            <li>Unarmed Security Guards</li>
            <li>Armed Gunmen (Licensed)</li>
            <li>Event Bouncers and VIP Protection</li>
            <li>Corporate and Industrial Security</li>
            <li>Executive Protection / Bodyguard Services</li>
            <li>Corporate Housekeeping and Facility Management</li>
          </ul>
          <p>
            The terms governing actual security service contracts, pricing, and deployment are set
            out in separate written agreements between Noble Security Services and the client.
            These Terms of Service govern <strong>website use only</strong>.
          </p>
        </section>

        {/* Section 3 */}
        <section className="tos-section" id="website-use">
          <h2>3. Use of Website</h2>
          <p>
            This Site is provided for informational purposes. You may use the Site to:
          </p>
          <ul>
            <li>Learn about Noble Security Services and our offerings</li>
            <li>Submit an inquiry through our contact form</li>
            <li>Find our office locations and contact details</li>
            <li>Read about our clients and case studies</li>
          </ul>
          <p>
            You may not use this Site for any commercial purpose, data scraping, or any activity
            that could harm, disrupt, or impair the operation of the Site.
          </p>
        </section>

        {/* Section 4 */}
        <section className="tos-section" id="acceptable-use">
          <h2>4. Acceptable Use Policy</h2>
          <p>You agree <strong>NOT</strong> to:</p>
          <ul>
            <li>Use the Site for any unlawful purpose or in violation of any applicable law</li>
            <li>Transmit any harmful, offensive, defamatory, or misleading content through our contact form</li>
            <li>Attempt to gain unauthorised access to any part of the Site</li>
            <li>Use automated tools (bots, scrapers, crawlers) to extract data from the Site without our written permission</li>
            <li>Transmit spam, malware, or viruses through the Site</li>
            <li>Impersonate any person or entity, or falsely represent your affiliation</li>
            <li>Interfere with or disrupt the integrity or performance of the Site</li>
            <li>Conduct security testing, penetration testing, or vulnerability scanning without explicit written permission</li>
          </ul>
          <div className="tos-highlight">
            <strong>⚠️ Security Notice:</strong> Any attempt to attack, probe, or exploit
            vulnerabilities on this website is prohibited and may be reported to law enforcement
            under India's Information Technology Act 2000 and IT (Amendment) Act 2008.
          </div>
        </section>

        {/* Section 5 */}
        <section className="tos-section" id="intellectual-property">
          <h2>5. Intellectual Property</h2>
          <p>
            All content on this Site — including text, graphics, logos, icons, images, audio clips,
            and software — is the exclusive property of Noble Security Services or its content
            suppliers and is protected by Indian and international copyright, trademark, and other
            intellectual property laws.
          </p>
          <p>
            You may view and download content from the Site solely for personal, non-commercial use,
            provided you retain all copyright and proprietary notices. Any other use — including
            reproduction, modification, distribution, or public display — is strictly prohibited
            without our prior written consent.
          </p>
        </section>

        {/* Section 6 */}
        <section className="tos-section" id="disclaimer">
          <h2>6. Disclaimer of Warranties</h2>
          <p>
            This Site is provided on an <strong>"as is"</strong> and <strong>"as available"</strong>{" "}
            basis without warranties of any kind, either express or implied. Noble Security Services
            does not warrant that:
          </p>
          <ul>
            <li>The Site will be uninterrupted, error-free, or free of viruses</li>
            <li>Information on the Site is accurate, complete, or current</li>
            <li>The Site will meet your specific requirements</li>
          </ul>
          <p>
            All information on this Site is provided for general informational purposes only. It
            does not constitute professional security, legal, or financial advice.
          </p>
        </section>

        {/* Section 7 */}
        <section className="tos-section" id="limitation">
          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Noble Security Services, its
            directors, employees, partners, or agents shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages arising from your use of, or
            inability to use, this Site.
          </p>
          <p>
            Our total liability to you for any claim arising out of or relating to your use of this
            Site shall not exceed <strong>₹1,000 INR</strong>.
          </p>
          <p>
            Some jurisdictions do not allow the exclusion or limitation of certain warranties or
            damages, so the above limitations may not apply to you.
          </p>
        </section>

        {/* Section 8 */}
        <section className="tos-section" id="indemnification">
          <h2>8. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Noble Security Services and its
            affiliates, officers, agents, employees, and partners from and against any claims,
            liabilities, damages, losses, and expenses (including reasonable legal fees) arising
            out of or in any way connected with:
          </p>
          <ul>
            <li>Your access to or use of the Site</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any third-party rights, including intellectual property rights</li>
          </ul>
        </section>

        {/* Section 9 */}
        <section className="tos-section" id="third-party">
          <h2>9. Third-Party Links</h2>
          <p>
            Our Site may contain links to third-party websites including Google Maps, WhatsApp,
            Instagram, and LinkedIn. These links are provided for your convenience only.
          </p>
          <p>
            Noble Security Services has no control over, and assumes no responsibility for, the
            content, privacy policies, or practices of any third-party websites. We encourage you
            to review the privacy policies and terms of any third-party sites you visit.
          </p>
        </section>

        {/* Section 10 */}
        <section className="tos-section" id="privacy">
          <h2>10. Privacy</h2>
          <p>
            Your use of this Site is also governed by our{" "}
            <button
              style={{
                background: "none", border: "none", color: "#0056b3",
                fontWeight: 700, cursor: "pointer", padding: 0, font: "inherit",
                textDecoration: "underline"
              }}
              onClick={() => setCurrentPage?.("privacy-policy")}
            >
              Privacy Policy
            </button>
            , which is incorporated into these Terms by reference. Please review it to understand our
            practices regarding your personal data and your rights under India's DPDPA 2023.
          </p>
        </section>

        {/* Section 11 */}
        <section className="tos-section" id="termination">
          <h2>11. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to the Site immediately,
            without prior notice, for any breach of these Terms or for any other reason we deem
            appropriate, including but not limited to:
          </p>
          <ul>
            <li>Violations of the Acceptable Use Policy</li>
            <li>Suspected fraudulent, abusive, or illegal activity</li>
            <li>Requests from law enforcement or government authorities</li>
          </ul>
        </section>

        {/* Section 12 */}
        <section className="tos-section" id="governing-law">
          <h2>12. Governing Law &amp; Dispute Resolution</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the{" "}
            <strong>Republic of India</strong>, without regard to its conflict of law principles.
          </p>
          <p>
            Any disputes arising from or relating to these Terms or your use of the Site shall be
            subject to the exclusive jurisdiction of the courts located in{" "}
            <strong>Sangli, Maharashtra, India</strong>.
          </p>
          <p>
            Before initiating any legal proceedings, both parties agree to attempt to resolve any
            dispute through good-faith negotiation for a period of 30 days.
          </p>
        </section>

        {/* Section 13 */}
        <section className="tos-section" id="changes">
          <h2>13. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective
            immediately upon posting to the Site, with the "Last updated" date revised accordingly.
          </p>
          <p>
            Your continued use of the Site following the posting of revised Terms constitutes your
            acceptance of such changes. We encourage you to review these Terms periodically.
          </p>
        </section>

        {/* Section 14 — Contact */}
        <div className="tos-contact-box" id="contact">
          <h2>14. Contact</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us:
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
