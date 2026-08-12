/**
 * CookieConsent.tsx — GDPR / DPDP Compliant Cookie Consent Banner
 *
 * Tasks:
 *   28 — Cookie Consent
 *   29 — Right to Delete (links to privacy policy)
 *   30 — Privacy Policy (links to page)
 *
 * Features:
 *   - First-visit banner with Accept / Reject / Manage options
 *   - Stores consent decision in localStorage
 *   - Blocks any analytics/tracking scripts until consent is given
 *   - Fully accessible (keyboard navigable, ARIA roles)
 */

import React, { useState, useEffect } from "react";

const CONSENT_KEY = "noble_cookie_consent";
const CONSENT_VERSION = "1.0"; // Increment this when your policy changes to re-prompt users

export type ConsentState = {
  necessary: true; // Always true — required for site to function
  analytics: boolean;
  marketing: boolean;
  version: string;
  timestamp: string;
};

/** Read stored consent from localStorage */
export function getStoredConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    // Re-prompt if policy version changed
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

/** Save consent to localStorage */
function saveConsent(analytics: boolean, marketing: boolean): void {
  const consent: ConsentState = {
    necessary: true,
    analytics,
    marketing,
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  // Dispatch event so other components can react to consent changes
  window.dispatchEvent(new CustomEvent("cookieConsentChanged", { detail: consent }));
}

interface CookieConsentProps {
  setCurrentPage?: (page: string) => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ setCurrentPage }) => {
  const [visible, setVisible] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);

  useEffect(() => {
    // Show banner only if no valid consent is stored
    const existing = getStoredConsent();
    if (!existing) {
      // Small delay so the page renders first
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const handleAcceptAll = () => {
    saveConsent(true, true);
    setVisible(false);
  };

  const handleRejectAll = () => {
    saveConsent(false, false);
    setVisible(false);
  };

  const handleSavePreferences = () => {
    saveConsent(analyticsChecked, marketingChecked);
    setVisible(false);
  };

  const navigateToPrivacy = () => {
    if (setCurrentPage) {
      setCurrentPage("privacy-policy");
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <>
      <style>{`
        .cookie-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: 9998;
          backdrop-filter: blur(2px);
          animation: cookieFadeIn 0.3s ease;
        }
        .cookie-banner {
          position: fixed;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          width: min(92vw, 680px);
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08);
          padding: 2rem;
          animation: cookieSlideUp 0.4s cubic-bezier(0.34,1.56,0.64,1);
          border: 1px solid #eaecf4;
        }
        @keyframes cookieFadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes cookieSlideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(40px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .cookie-icon {
          font-size: 2rem;
          margin-bottom: 0.75rem;
          display: block;
        }
        .cookie-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0a0c18;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }
        .cookie-body {
          font-size: 0.82rem;
          color: #666;
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }
        .cookie-body a {
          color: #0056b3;
          text-decoration: underline;
          cursor: pointer;
          background: none;
          border: none;
          font: inherit;
          padding: 0;
        }
        .cookie-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          align-items: center;
        }
        .cookie-btn-accept {
          flex: 1;
          min-width: 140px;
          padding: 0.8rem 1.5rem;
          background: #0056b3;
          color: #fff;
          font-size: 0.84rem;
          font-weight: 700;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
        }
        .cookie-btn-accept:hover { background: #004499; transform: translateY(-1px); }
        .cookie-btn-reject {
          flex: 1;
          min-width: 100px;
          padding: 0.8rem 1.5rem;
          background: transparent;
          color: #444;
          font-size: 0.84rem;
          font-weight: 600;
          border: 1.5px solid #dde0ea;
          border-radius: 999px;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }
        .cookie-btn-reject:hover { border-color: #0056b3; color: #0056b3; }
        .cookie-btn-manage {
          background: none;
          border: none;
          font-size: 0.78rem;
          color: #aaa;
          cursor: pointer;
          text-decoration: underline;
          padding: 0;
          white-space: nowrap;
          transition: color 0.2s;
        }
        .cookie-btn-manage:hover { color: #0056b3; }

        /* Manage preferences panel */
        .cookie-manage {
          margin-top: 1.25rem;
          border-top: 1px solid #eaecf4;
          padding-top: 1.25rem;
        }
        .cookie-manage-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: #0a0c18;
          margin-bottom: 0.75rem;
        }
        .cookie-toggle-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.6rem 0;
          border-bottom: 1px solid #f0f1f5;
        }
        .cookie-toggle-label {
          font-size: 0.8rem;
          color: #333;
          font-weight: 600;
        }
        .cookie-toggle-desc {
          font-size: 0.72rem;
          color: #999;
          margin-top: 0.15rem;
        }
        .cookie-switch {
          position: relative;
          width: 44px;
          height: 24px;
          flex-shrink: 0;
        }
        .cookie-switch input { opacity: 0; width: 0; height: 0; }
        .cookie-slider {
          position: absolute;
          inset: 0;
          background: #dde0ea;
          border-radius: 24px;
          cursor: pointer;
          transition: background 0.25s;
        }
        .cookie-slider::before {
          content: '';
          position: absolute;
          width: 18px; height: 18px;
          left: 3px; bottom: 3px;
          background: #fff;
          border-radius: 50%;
          transition: transform 0.25s;
          box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }
        .cookie-switch input:checked + .cookie-slider { background: #0056b3; }
        .cookie-switch input:checked + .cookie-slider::before { transform: translateX(20px); }
        .cookie-switch input:disabled + .cookie-slider { opacity: 0.5; cursor: not-allowed; }
        .cookie-save-btn {
          margin-top: 1rem;
          width: 100%;
          padding: 0.8rem;
          background: #0056b3;
          color: #fff;
          font-size: 0.84rem;
          font-weight: 700;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .cookie-save-btn:hover { background: #004499; }
      `}</style>

      <div className="cookie-overlay" onClick={handleRejectAll} aria-hidden="true" />

      <div
        className="cookie-banner"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
        aria-describedby="cookie-desc"
      >
        <span className="cookie-icon" role="img" aria-label="Cookie">🍪</span>
        <div className="cookie-title" id="cookie-title">We use cookies</div>
        <p className="cookie-body" id="cookie-desc">
          We use cookies to improve your experience on our site and to analyse traffic.
          By clicking <strong>Accept All</strong>, you consent to our use of cookies.
          You can also manage your preferences or read our{" "}
          <button onClick={navigateToPrivacy} aria-label="Read Privacy Policy">Privacy Policy</button>{" "}
          to learn more. Under India's Digital Personal Data Protection Act (DPDPA) 2023,
          you have the right to withdraw consent at any time.
        </p>

        <div className="cookie-actions">
          <button
            className="cookie-btn-accept"
            onClick={handleAcceptAll}
            id="cookie-accept-all"
          >
            Accept All
          </button>
          <button
            className="cookie-btn-reject"
            onClick={handleRejectAll}
            id="cookie-reject-all"
          >
            Reject All
          </button>
          <button
            className="cookie-btn-manage"
            onClick={() => setShowManage((v) => !v)}
            aria-expanded={showManage}
            id="cookie-manage-prefs"
          >
            {showManage ? "Hide Preferences" : "Manage Preferences"}
          </button>
        </div>

        {showManage && (
          <div className="cookie-manage">
            <div className="cookie-manage-title">Cookie Preferences</div>

            {/* Necessary — always on */}
            <div className="cookie-toggle-row">
              <div>
                <div className="cookie-toggle-label">Necessary Cookies</div>
                <div className="cookie-toggle-desc">
                  Required for the website to function. Cannot be disabled.
                </div>
              </div>
              <label className="cookie-switch">
                <input type="checkbox" checked disabled aria-label="Necessary cookies — always enabled" />
                <span className="cookie-slider" />
              </label>
            </div>

            {/* Analytics */}
            <div className="cookie-toggle-row">
              <div>
                <div className="cookie-toggle-label">Analytics Cookies</div>
                <div className="cookie-toggle-desc">
                  Help us understand how visitors use our site (e.g., Google Analytics).
                </div>
              </div>
              <label className="cookie-switch">
                <input
                  type="checkbox"
                  checked={analyticsChecked}
                  onChange={(e) => setAnalyticsChecked(e.target.checked)}
                  aria-label="Toggle analytics cookies"
                />
                <span className="cookie-slider" />
              </label>
            </div>

            {/* Marketing */}
            <div className="cookie-toggle-row">
              <div>
                <div className="cookie-toggle-label">Marketing Cookies</div>
                <div className="cookie-toggle-desc">
                  Used to deliver personalised advertisements and track campaign performance.
                </div>
              </div>
              <label className="cookie-switch">
                <input
                  type="checkbox"
                  checked={marketingChecked}
                  onChange={(e) => setMarketingChecked(e.target.checked)}
                  aria-label="Toggle marketing cookies"
                />
                <span className="cookie-slider" />
              </label>
            </div>

            <button className="cookie-save-btn" onClick={handleSavePreferences} id="cookie-save-prefs">
              Save My Preferences
            </button>
          </div>
        )}
      </div>
    </>
  );
};
