import React from "react";

// =========================================================================
// SOCIAL MEDIA CONFIGURATION
// Paste your social links and WhatsApp number here.
// =========================================================================

// Instagram: Enter complete profile URL
const INSTAGRAM_URL = "https://www.instagram.com/invites/contact/?igsh=r7cdiva3xw5q&utm_content=hzaa4da";

// LinkedIn: Enter complete company or profile URL
const LINKEDIN_URL = "https://www.linkedin.com/in/noblesecurity-services-50b191424?utm_source=share_via&utm_content=profile&utm_medium=member_android";

// WhatsApp: Enter phone number with country code (e.g. 919823245552)
const WHATSAPP_NUMBER = "919823245552";
// =========================================================================

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-on-background text-white mt-auto">
      <div className="max-w-container-max mx-auto px-gutter py-section-padding-sm grid grid-cols-1 md:grid-cols-4 gap-gutter">
        {/* Company Info */}
        <div className="space-y-6">
          <button
            onClick={() => handleNavClick("home")}
            className="font-headline-md text-headline-md font-bold text-white flex items-center gap-2 cursor-pointer focus:outline-none"
          >
            <img
              src="/logo.jpeg"
              alt="Noble Security Logo"
              className="w-10 h-10 rounded-lg object-cover border border-white/10"
            />
            Noble Security
          </button>
          <p className="text-secondary-fixed-dim text-body-md leading-relaxed">
            Premier provider of integrated security services, protecting lives and assets across Maharashtra through discipline, innovation, and ex-military leadership.
          </p>
          <div className="flex gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-surface-variant/20 flex items-center justify-center hover:bg-primary transition-all duration-200"
              aria-label="WhatsApp"
            >
              <img
                src="/social.png"
                alt="WhatsApp"
                className="w-10 h-10 object-contain"
              />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-surface-variant/20 flex items-center justify-center hover:bg-primary transition-all duration-200"
              aria-label="Instagram"
            >
              <img
                src="/instagram.png"
                alt="Instagram"
                className="w-10 h-10 object-contain"
              />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-surface-variant/20 flex items-center justify-center hover:bg-primary transition-all duration-200"
              aria-label="LinkedIn"
            >
              <img
                src="/linkedin.png"
                alt="LinkedIn"
                className="w-10 h-10 object-contain"
              />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed mb-8">
            Quick Links
          </h4>
          <ul className="space-y-4">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About Us" },
              { id: "services", label: "Services" },
              { id: "clients", label: "Clients" },
              { id: "contact", label: "Contact Us" },
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors duration-200 text-body-md text-left cursor-pointer focus:outline-none"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Sectors & Services */}
        <div>
          <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed mb-8">
            Sectors & Services
          </h4>
          <ul className="space-y-4">
            {[
              { id: "services", label: "Security Guards (Unarmed)" },
              { id: "services", label: "Armed Gunmen" },
              { id: "services", label: "Bouncers & VIP Patrol" },
              { id: "services", label: "Corporate Housekeeping" },
              { id: "services", label: "Industrial Guarding" },
            ].map((service, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavClick(service.id)}
                  className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors duration-200 text-body-md text-left cursor-pointer focus:outline-none"
                >
                  {service.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Office Coordinates & Compliance */}
        <div>
          <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed mb-8">
            Offices & Info
          </h4>
          <ul className="space-y-4 text-secondary-fixed-dim text-body-md">
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-primary-fixed shrink-0">location_on</span>
              <span>
                <strong>Sangli HQ:</strong> G-3, Girnar Tower, Opp. PNG Showroom, Sangli-Miraj Road, Vishrambag, Sangli – 416415, Maharashtra
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-primary-fixed shrink-0">location_on</span>
              <span>
                <strong>Pune Branch:</strong> F-11, Building No. 33, Phase-II, Gahunje, Tal: Maval, Dist: Pune - 412101, Maharashtra
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <span className="material-symbols-outlined text-primary-fixed shrink-0">call</span>
              <span>+91 9823245552</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-white/10 py-8 px-gutter">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-secondary-fixed-dim text-label-sm">
          <p>© 2026 Noble Security & Services. All Rights Reserved.</p>
          <div className="flex gap-8 flex-wrap items-center justify-center">
            {/* Task 30: Privacy Policy link */}
            <button
              onClick={() => handleNavClick("privacy-policy")}
              className="hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none"
            >
              Privacy Policy
            </button>
            {/* Task 31: Terms of Service link */}
            <button
              onClick={() => handleNavClick("terms-of-service")}
              className="hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none"
            >
              Terms of Service
            </button>
            <p>
              Designed and Developed by{" "}
              <a
                href="https://www.infernos.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-link-infernos ml-1"
              >
                Infernos IT Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
