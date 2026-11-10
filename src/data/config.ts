/**
 * PORTFOLIO TEMPLATE — SITE CONFIG
 * Edit this single file to personalise every page.
 * Full documentation: /GUIDE.md
 */

export const siteConfig = {
  /** Your display name — appears in the nav, footer, and page titles */
  name: "RT Studio",

  /** Short role label shown under your name in the hero */
  role: "Real Estate Website Design & Digital Solutions",

  /** Hero headline — keep it under 60 characters */
  tagline: "Modern websites designed for real estate businesses.",

  /** 1-2 sentence bio used in the footer and meta description */
  bio: "RT Studio is a digital agency specialising in website design, property listing development, SEO, and ongoing management for the real estate industry.",

  /** Contact email shown on the contact page and in the footer */
  email: "hello@rtstudio.design",

  /** Location string shown in the footer */
  location: "Real Estate Digital Agency · Worldwide",

  /** Set to false to hide the green "Available" badge */
  available: false,

  /**
   * Social links.
   * Set any value to "" to hide that link across the whole site.
   */
  socials: {
    instagram: "https://instagram.com/rtstudio",
    x: "https://x.com/rtstudio",
    linkedin: "https://linkedin.com/company/rt-studio",
    github: "",
    dribbble: "https://dribbble.com/rtstudio",
  },

  /**
   * Cal.com booking namespace — e.g. "yourname/30min".
   * Set to "" to hide the booking section on the contact page.
   */
  calLink: "rtstudio/30min",

  /** Canonical site URL used for SEO */
  siteUrl: "https://rtstudio.design",

  /**
   * Visual theme applied to <html>.
   * Options:
   *   "light"   — clean white (default)
   *   "dark"    — deep charcoal
   */
  theme: "light" as "light" | "dark",
};
