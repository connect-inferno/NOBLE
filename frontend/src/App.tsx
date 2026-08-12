import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { CookieConsent } from "./components/CookieConsent";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ServicesPage } from "./pages/ServicesPage";
import { Clients } from "./pages/Clients";
import { Contact } from "./pages/Contact";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";

function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "about":
        return <About />;
      case "services":
        return <ServicesPage setCurrentPage={setCurrentPage} />;
      case "clients":
        return <Clients setCurrentPage={setCurrentPage} />;
      case "contact":
        return <Contact />;
      // Task 30: Privacy Policy page
      case "privacy-policy":
        return <PrivacyPolicy setCurrentPage={setCurrentPage} />;
      // Task 31: Terms of Service page
      case "terms-of-service":
        return <TermsOfService setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow pt-16 md:pt-20">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
      <WhatsAppButton />
      {/* Task 28: Cookie Consent — shown on first visit, GDPR/DPDPA compliant */}
      <CookieConsent setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
