import React, { useState, useEffect } from "react";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "clients", label: "Clients" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .nb {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: #ffffff;
          transition: box-shadow 0.3s ease;
        }
        .nb.scrolled {
          box-shadow: 0 1px 0 rgba(0,0,0,0.08), 0 4px 24px rgba(0,0,40,0.07);
        }
        .nb-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2.5rem;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }
        @media (max-width: 768px) {
          .nb-inner { padding: 0 1.25rem; height: 60px; }
        }

        /* ── LOGO ── */
        .nb-logo {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          cursor: pointer;
          border: none;
          background: none;
          padding: 0;
          flex-shrink: 0;
          text-decoration: none;
        }
        /* Drop your logo image here — replace placeholder div with:
           <img src="/logo.png" alt="Noble Security" style="height:40px;width:auto;" />  */
        .nb-logo-img {
          width: 60px; height: 60px;
          border-radius: 8px;
          border: 1.5px solid #dde3f5;
          object-fit: cover;
          flex-shrink: 0;
          transition: transform 0.2s;
        }
        .nb-logo:hover .nb-logo-img { transform: scale(1.05); }
        .nb-logo-text { display: flex; flex-direction: column; line-height: 1.15; }
        .nb-logo-name {
          font-size: 0.92rem;
          font-weight: 800;
          color: #0a0c18;
          letter-spacing: -0.01em;
        }
        .nb-logo-sub {
          font-size: 0.59rem;
          font-weight: 500;
          color: #aaa;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        /* ── NAV LINKS ── */
        .nb-links {
          display: none;
          align-items: center;
          gap: 0.1rem;
          list-style: none;
          margin: 0; padding: 0;
        }
        @media (min-width: 900px) { .nb-links { display: flex; } }

        .nb-link {
          position: relative;
          padding: 0.45rem 0.9rem;
          font-size: 0.84rem;
          font-weight: 600;
          color: #555;
          cursor: pointer;
          border: none;
          background: none;
          border-radius: 7px;
          transition: color 0.18s, background 0.18s;
          white-space: nowrap;
        }
        .nb-link:hover { color: #0a0c18; background: #f3f4f8; }
        .nb-link.active { color: #0a0c18; font-weight: 700; }
        .nb-link.active::after {
          content: '';
          position: absolute;
          bottom: 3px; left: 50%;
          transform: translateX(-50%);
          width: 16px; height: 2px;
          border-radius: 2px;
          background: #0056b3;
        }

        /* ── CTA ── */
        .nb-cta {
          margin-left: 0.5rem;
          padding: 0.55rem 1.3rem;
          font-size: 0.81rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          border-radius: 999px;
          cursor: pointer;
          border: none;
          background: #0056b3;
          color: #fff;
          box-shadow: 0 2px 10px rgba(0,86,179,0.22);
          transition: background 0.18s, transform 0.18s, box-shadow 0.18s;
          white-space: nowrap;
        }
        .nb-cta:hover {
          background: #0047a0;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(0,86,179,0.3);
        }
        .nb-cta:active { transform: scale(0.97); }

        /* ── HAMBURGER ── */
        .nb-ham {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 40px; height: 40px;
          cursor: pointer;
          border: none;
          background: none;
          padding: 7px;
          border-radius: 8px;
          transition: background 0.18s;
        }
        @media (min-width: 900px) { .nb-ham { display: none; } }
        .nb-ham:hover { background: #f3f4f8; }
        .hb {
          width: 100%;
          height: 2px;
          border-radius: 2px;
          background: #0a0c18;
          transition: transform 0.28s cubic-bezier(0.4,0,0.2,1), opacity 0.28s;
        }
        .hb-t.open { transform: translateY(7px) rotate(45deg); }
        .hb-m.open { opacity: 0; transform: scaleX(0); }
        .hb-b.open { transform: translateY(-7px) rotate(-45deg); }

        /* ── MOBILE DRAWER ── */
        .drawer-wrap {
          position: fixed; inset: 0;
          z-index: 200;
          pointer-events: none;
        }
        .drawer-wrap.open { pointer-events: auto; }
        .drawer-backdrop {
          position: absolute; inset: 0;
          background: rgba(10,12,24,0.45);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .drawer-wrap.open .drawer-backdrop { opacity: 1; }
        .drawer-panel {
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: min(310px, 88vw);
          background: #fff;
          display: flex; flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.32s cubic-bezier(0.4,0,0.2,1);
          box-shadow: -8px 0 40px rgba(0,0,40,0.12);
        }
        .drawer-wrap.open .drawer-panel { transform: translateX(0); }
        .drawer-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid #f0f0f5;
        }
        .drawer-close {
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 1.5px solid #e8e8ee;
          background: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: #555;
          transition: background 0.18s;
        }
        .drawer-close:hover { background: #f5f5f8; }
        .drawer-nav {
          flex: 1;
          padding: 0.75rem 1.25rem;
          display: flex; flex-direction: column; gap: 0.2rem;
        }
        .drawer-link {
          padding: 0.85rem 1rem;
          font-size: 0.9rem; font-weight: 600;
          color: #3a3a4a;
          border-radius: 10px;
          cursor: pointer; border: none; background: none;
          text-align: left;
          display: flex; align-items: center; justify-content: space-between;
          transition: background 0.18s, color 0.18s;
        }
        .drawer-link:hover { background: #f5f5f8; color: #0a0c18; }
        .drawer-link.active { background: #eef3ff; color: #0056b3; font-weight: 700; }
        .drawer-foot {
          padding: 1.25rem 1.5rem;
          border-top: 1px solid #f0f0f5;
          display: flex; flex-direction: column; gap: 0.7rem;
        }
        .drawer-cta {
          width: 100%; padding: 0.9rem;
          background: #0056b3; color: #fff;
          font-weight: 700; font-size: 0.88rem;
          border-radius: 10px; border: none; cursor: pointer;
          transition: background 0.18s;
        }
        .drawer-cta:hover { background: #0047a0; }
        .drawer-contact {
          display: flex; align-items: center; gap: 0.5rem;
          font-size: 0.76rem; color: #888;
        }
      `}</style>

      <header className={`nb ${isScrolled ? "scrolled" : ""}`}>
        <div className="nb-inner">

          {/* LOGO — replace .nb-logo-placeholder with your <img> tag */}
          <button className="nb-logo" onClick={() => handleNavClick("home")} aria-label="Home">
            <img src="/logo.jpeg" alt="Noble Security" className="nb-logo-img" />
            <div className="nb-logo-text">
              <span className="nb-logo-name">Noble Security</span>
              <span className="nb-logo-sub">& Services</span>
            </div>
          </button>

          {/* DESKTOP NAV */}
          <nav aria-label="Main navigation">
            <ul className="nb-links">
              {navItems.map(item => (
                <li key={item.id}>
                  <button
                    className={`nb-link ${currentPage === item.id ? "active" : ""}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button className="nb-cta" onClick={() => handleNavClick("contact")}>
                  Get Free Quote
                </button>
              </li>
            </ul>
          </nav>

          {/* HAMBURGER */}
          <button
            className="nb-ham"
            onClick={() => setIsMobileMenuOpen(v => !v)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`hb hb-t ${isMobileMenuOpen ? "open" : ""}`} />
            <span className={`hb hb-m ${isMobileMenuOpen ? "open" : ""}`} />
            <span className={`hb hb-b ${isMobileMenuOpen ? "open" : ""}`} />
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div className={`drawer-wrap ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="drawer-backdrop" onClick={() => setIsMobileMenuOpen(false)} />
        <div className="drawer-panel">
          <div className="drawer-head">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <img
                src="/logo.jpeg"
                alt="Noble Security"
                style={{ width: "36px", height: "36px", borderRadius: "6px", objectFit: "cover" }}
              />
              <span style={{ fontWeight: 800, fontSize: "0.88rem", color: "#0a0c18" }}>Noble Security</span>
            </div>
            <button className="drawer-close" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="material-symbols-outlined" style={{ fontSize: 17 }}>close</span>
            </button>
          </div>
          <nav className="drawer-nav">
            {navItems.map(item => (
              <button
                key={item.id}
                className={`drawer-link ${currentPage === item.id ? "active" : ""}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
                <span className="material-symbols-outlined" style={{ fontSize: 15, opacity: 0.35 }}>chevron_right</span>
              </button>
            ))}
          </nav>
          <div className="drawer-foot">
            <button className="drawer-cta" onClick={() => handleNavClick("contact")}>Get Free Quote</button>
            <div className="drawer-contact">
              <span className="material-symbols-outlined" style={{ fontSize: 13, color: "#0056b3" }}>call</span>
              +91 94224 07555
            </div>
            <div className="drawer-contact">
              <span className="material-symbols-outlined" style={{ fontSize: 13, color: "#0056b3" }}>mail</span>
              info@noblesecurity.co.in
            </div>
          </div>
        </div>
      </div>
    </>
  );
};