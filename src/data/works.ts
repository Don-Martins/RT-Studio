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
      "A fast property listing website designed for effortless home searches. Includes neighborhood filters, photo galleries, clear property details, and direct viewing enquiry forms.",
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
      "A dedicated showcase website for a new residential development. Built to present architectural renders, downloadable floor plans, area amenities, and an easy booking form for private viewings.",
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
      "A modern agency website built for smooth mobile browsing. Features agent profile directories, local market guides, and a quick property valuation request form.",
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
      "A clean website for a property management firm. Clearly separates landlord services from available rentals, with simple forms for maintenance requests and tenant enquiries.",
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
      "A commercial brokerage website built for office and retail spaces. Makes it easy for investors to filter by square footage, check lease terms, and download property brochures.",
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
      "A fast-loading portfolio website for high-end coastal properties. Features lightweight image galleries and quick enquiry buttons so buyers can explore homes without lag.",
  },
];
