/**
 * useSEO — Programmatic SEO hook for Noble Security Services
 *
 * Dynamically updates document title, meta tags, Open Graph tags,
 * Twitter Card tags, and canonical URL on every page change.
 *
 * Tasks: 1 (Programmatic SEO), 2 (Location-based Routing & Dynamic SEO)
 */

import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  /**
   * Location focus for location-based SEO (Task 2).
   * Injects geo-specific meta tags.
   */
  location?: "sangli" | "pune" | "maharashtra" | "all";
  /** Schema.org JSON-LD structured data to inject on this page */
  schema?: Record<string, unknown>;
}

const SITE_NAME = "Noble Security Services";
const BASE_URL = "https://www.noblesecurityservices.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

const GEO_META: Record<string, { region: string; placename: string; position: string }> = {
  sangli: {
    region: "IN-MH",
    placename: "Sangli, Maharashtra, India",
    position: "16.8524;74.5815",
  },
  pune: {
    region: "IN-MH",
    placename: "Pune, Maharashtra, India",
    position: "18.5204;73.8567",
  },
  maharashtra: {
    region: "IN-MH",
    placename: "Maharashtra, India",
    position: "19.7515;75.7139",
  },
  all: {
    region: "IN-MH",
    placename: "Sangli & Pune, Maharashtra, India",
    position: "17.6868;74.5824",
  },
};

/** Helper: set or create a <meta> tag by attribute selector */
function setMeta(selector: string, value: string, attr: "name" | "property" = "name"): void {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${selector}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, selector);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

/** Helper: set or create a <link> tag by rel */
function setLink(rel: string, href: string, extra?: Record<string, string>): void {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
  if (extra) {
    Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v));
  }
}

/** Helper: inject or update a JSON-LD <script> block */
function setJsonLd(schema: Record<string, unknown>): void {
  const id = "page-jsonld";
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(schema, null, 2);
}

/** Remove the per-page JSON-LD block (used on unmount) */
function removeJsonLd(): void {
  const el = document.getElementById("page-jsonld");
  if (el) el.remove();
}

export function useSEO({
  title,
  description,
  canonical,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  location = "all",
  schema,
}: SEOProps): void {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
    const geo = GEO_META[location];

    // ── Document title
    document.title = fullTitle;

    // ── Primary meta tags
    setMeta("title", fullTitle);
    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("author", SITE_NAME);
    setMeta("robots", "index, follow");
    setMeta("language", "English");

    // ── Geo / Location-based SEO (Task 2)
    setMeta("geo.region", geo.region);
    setMeta("geo.placename", geo.placename);
    setMeta("geo.position", geo.position);
    setMeta("ICBM", geo.position);

    // ── Canonical URL
    setLink("canonical", canonicalUrl);

    // ── Open Graph
    setMeta("og:type", ogType, "property");
    setMeta("og:url", canonicalUrl, "property");
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:image", ogImage, "property");
    setMeta("og:site_name", SITE_NAME, "property");
    setMeta("og:locale", "en_IN", "property");

    // ── Twitter Card
    setMeta("twitter:card", "summary_large_image", "property");
    setMeta("twitter:url", canonicalUrl, "property");
    setMeta("twitter:title", fullTitle, "property");
    setMeta("twitter:description", description, "property");
    setMeta("twitter:image", ogImage, "property");

    // ── JSON-LD structured data
    if (schema) {
      setJsonLd(schema);
    }

    return () => {
      if (schema) removeJsonLd();
    };
  }, [title, description, canonical, keywords, ogImage, ogType, location, schema]);
}
