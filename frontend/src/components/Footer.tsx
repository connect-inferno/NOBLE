import React from "react";

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
            <span
              className="material-symbols-outlined text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              security
            </span>
            Noble Security
          </button>
          <p className="text-secondary-fixed-dim text-body-md leading-relaxed">
            Premier provider of integrated security services, protecting lives and assets across Maharashtra through discipline, innovation, and ex-military leadership.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-surface-variant/20 flex items-center justify-center hover:bg-primary transition-all duration-200"
              aria-label="Facebook"
            >
              <span className="material-symbols-outlined text-white">public</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-surface-variant/20 flex items-center justify-center hover:bg-primary transition-all duration-200"
              aria-label="Share"
            >
              <span className="material-symbols-outlined text-white">share</span>
            </a>
            <a
              href="mailto:info@noblesecurity.co.in"
              className="w-10 h-10 rounded-full bg-surface-variant/20 flex items-center justify-center hover:bg-primary transition-all duration-200"
              aria-label="Email"
            >
              <span className="material-symbols-outlined text-white">alternate_email</span>
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
                <strong>Sangli HQ:</strong> Plot 15, Sector 4, Market Yard, Sangli - 416416
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-primary-fixed shrink-0">location_on</span>
              <span>
                <strong>Pune Branch:</strong> Office 402, Security Plaza, Hinjewadi Phase 1, Pune
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <span className="material-symbols-outlined text-primary-fixed shrink-0">call</span>
              <span>+91 94224 07555</span>
            </li>
            <li className="mt-6 pt-6 border-t border-white/10">
              <p className="text-label-sm text-primary-fixed font-bold">GSTIN: 27AHTPN6678H2ZE</p>
              <p className="text-xs text-secondary-fixed-dim/60 mt-1">PSARA License: #27AHTPN</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-white/10 py-8 px-gutter">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-secondary-fixed-dim text-label-sm">
          <p>© 2024 Noble Security & Services. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
