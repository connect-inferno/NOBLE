import React, { useState, useEffect } from "react";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "clients", label: "Clients" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-on-background text-white py-2 hidden md:block border-b border-white/10">
        <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center text-label-sm font-label-sm">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-primary-fixed">call</span>
              +91 94224 07555
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-primary-fixed">mail</span>
              info@noblesecurity.co.in
            </span>
          </div>
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-primary-fixed">location_on</span>
              Sangli & Pune, Maharashtra, India
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
            ? "top-0 py-2 glass-nav soft-blue-shadow border-b border-outline-variant"
            : "top-0 md:top-10 py-4 bg-surface-container-lowest md:bg-white border-b border-outline-variant md:border-none"
          }`}
      >
        <div className="flex justify-between items-center px-gutter max-w-container-max mx-auto">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-2 focus:outline-none cursor-pointer"
          >
            <span
              className="material-symbols-outlined text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              security
            </span>
            <span className="hidden sm:inline">Noble Security & Services</span>
            <span className="inline sm:hidden">Noble Security</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-label-md text-label-md cursor-pointer transition-colors duration-200 focus:outline-none ${currentPage === item.id
                    ? "text-primary border-b-2 border-primary font-bold pb-1"
                    : "text-on-surface-variant hover:text-primary"
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md font-bold hover:bg-opacity-90 transition-all scale-100 active:scale-95 shadow-md cursor-pointer"
            >
              Get Free Quote
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary focus:outline-none cursor-pointer p-2"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-on-background bg-opacity-95 flex flex-col p-8 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center mb-12">
          <span className="font-headline-md text-headline-md font-bold text-primary-fixed">
            Noble Security
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white focus:outline-none p-2 cursor-pointer"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-[32px]">close</span>
          </button>
        </div>
        <div className="flex flex-col gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-headline-md text-headline-md text-left cursor-pointer transition-colors focus:outline-none ${currentPage === item.id ? "text-primary-fixed font-bold" : "text-secondary-fixed-dim"
                }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("contact")}
            className="bg-primary text-white py-4 rounded-xl font-headline-md hover:bg-opacity-90 transition-all text-center cursor-pointer shadow-lg mt-4"
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </>
  );
};
