/**
 * ─────────────────────────────────────────────
 *  PORTFOLIO TEMPLATE — WORKS DATA
 *  Replace these entries with your own projects.
 * ─────────────────────────────────────────────
 */

import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

export type Work = {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  client: string;
  service: string;
  about: string;
};

export const works: Work[] = [
  {
    id: "haven-stone-realty",
    title: "Haven & Stone Realty",
    category: "Property Listings",
    year: "2025",
    image: work1,
    client: "Concept Project",
    service: "Listing Website Development",
    about:
      "A complete property listing website concept designed to solve slow, confusing property searches. Features neighborhood filters, high-resolution photo galleries, clear property specifications, and direct viewing enquiry forms.",
  },
  {
    id: "meridian-heights",
    title: "Meridian Heights",
    category: "Property Development",
    year: "2025",
    image: work2,
    client: "Concept Project",
    service: "Development Showcase",
    about:
      "A project showcase website concept created for off-plan residential developments. Built to present architectural renders, downloadable floor plans, local amenity guides, and a streamlined private viewing booking system.",
  },
  {
    id: "oakwood-partners",
    title: "Oakwood & Partners",
    category: "Agency Website",
    year: "2025",
    image: work3,
    client: "Concept Project",
    service: "Website Redesign & SEO",
    about:
      "An agency website concept built to modernise outdated realtor sites. Focuses on mobile navigation, agent profile directories, local market guides, and simple valuation request forms for prospective sellers.",
  },
  {
    id: "avenue-management",
    title: "Avenue Property Management",
    category: "Property Management",
    year: "2024",
    image: work4,
    client: "Concept Project",
    service: "Management Portal & Web",
    about:
      "A digital platform concept designed to separate landlord services from tenant resources. Features clear management fee structures, available rental listings, and straightforward tenant maintenance reporting pathways.",
  },
  {
    id: "vanguard-commercial",
    title: "Vanguard Commercial",
    category: "Commercial Real Estate",
    year: "2024",
    image: work5,
    client: "Concept Project",
    service: "Commercial Listing Design",
    about:
      "A commercial brokerage website concept tailored for office, industrial, and retail spaces. Solves the challenge of presenting lease terms, square footage filters, and PDF brochure downloads clearly on mobile devices.",
  },
  {
    id: "solstice-residences",
    title: "Solstice Coastal Living",
    category: "Luxury Portfolio",
    year: "2024",
    image: work6,
    client: "Concept Project",
    service: "Speed & Performance Redesign",
    about:
      "A performance-focused website redesign concept for luxury coastal properties. Replaces heavy, sluggish page loads with fast-loading imagery and instant inquiry actions so high-value buyers experience zero lag.",
  },
];
