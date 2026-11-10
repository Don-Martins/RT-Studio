import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlusSignIcon, MinusSignIcon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { SiteShell } from "@/components/site-shell";
import { siteConfig } from "@/data/config";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: `FAQ — ${siteConfig.name}` },
      {
        name: "description",
        content: `Answers to common questions about real estate website design, listings, SEO, and maintenance with ${siteConfig.name}.`,
      },
      { property: "og:title", content: `FAQ — ${siteConfig.name}` },
      {
        property: "og:description",
        content: `Answers to common questions about real estate website design, listings, SEO, and maintenance with ${siteConfig.name}.`,
      },
    ],
  }),
  component: FAQ,
});

const faqs = [
  {
    q: "Why does my real estate business need a website?",
    a: "A dedicated website establishes professional credibility and acts as your 24/7 digital office. When prospective buyers, sellers, or landlords hear about your business, the first thing they do is search for your name online. A professional website ensures you control your brand narrative, present your property listings attractively, and collect direct client enquiries without relying entirely on third-party property portals.",
  },
  {
    q: "Can I display properties available for sale and rent?",
    a: "Yes. We build clean, organised property listing sections where you can showcase available properties with high-resolution photo galleries, floor plans, key features, pricing, and location details. Visitors can easily filter properties by type, location, and status (for sale or rent).",
  },
  {
    q: "Can customers contact me directly through my website?",
    a: "Yes. Every property page and contact section includes direct enquiry forms, click-to-call phone buttons, and direct WhatsApp or email links, so interested clients can reach your team immediately without roadblocks.",
  },
  {
    q: "Will my website work on mobile phones?",
    a: "Yes. More than 60% of real estate searches happen on mobile devices. Every website we design is fully responsive, meaning it automatically adjusts to look sharp and function smoothly on smartphones, tablets, laptops, and desktop computers.",
  },
  {
    q: "Can my website appear on Google?",
    a: "Yes. We implement the technical structure required for search engines like Google to find and index your website pages. While search ranking depends on continuous local activity and competition, we make sure your business name, services, and location are easily discoverable.",
  },
  {
    q: "What is website SEO?",
    a: "SEO stands for Search Engine Optimisation. In everyday terms, it means structuring your website's content, page titles, headlines, and loading speed so search engines understand your services and show your website when people in your area search for real estate services.",
  },
  {
    q: "Do you provide website maintenance and management?",
    a: "Yes. We offer ongoing website management packages covering technical monitoring, software and security updates, backups, and regular content adjustments, such as updating agent profiles or modifying service details.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. If your current website is outdated, slow to load, or difficult to navigate on mobile devices, we can redesign it from the ground up while keeping your existing web address (domain) and preserving valuable information.",
  },
  {
    q: "What happens after my website is launched?",
    a: "After launch, we give you a clear walkthrough of your new site. We also remain available for ongoing technical support, performance checks, and updates so your website continues running smoothly.",
  },
  {
    q: "How do I get started?",
    a: "Getting started is straightforward. Send us a message through our contact page or schedule an introductory consultation. We will discuss your real estate business goals, recommend the right website approach, and provide a clear proposal.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SiteShell>
      <section className="panel px-6 sm:px-12 py-12 lg:py-16 animate-fade-up text-center">
        <h1 className="text-[40px] sm:text-[60px] leading-[1.05] font-light tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-body text-sm max-w-lg mx-auto">
          Clear answers to common questions about our real estate website design, property listing
          platforms, and maintenance services. Have a specific question?{" "}
          <Link
            to="/contact"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            Reach out anytime.
          </Link>
        </p>
      </section>

      <section className="panel p-3 sm:p-4 animate-fade-up delay-100">
        <div className="divide-y divide-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="py-1">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-4 py-4 rounded-xl hover:bg-background transition-colors"
                >
                  <span className="font-medium text-foreground text-sm sm:text-base">{f.q}</span>
                  <span className="h-7 w-7 rounded-full bg-background flex items-center justify-center shrink-0">
                    <HugeiconsIcon icon={isOpen ? MinusSignIcon : PlusSignIcon} size={14} />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-5 text-sm text-body leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="panel px-6 sm:px-12 py-12 text-center animate-fade-up delay-200">
        <p className="text-sm text-body mb-3">Still have questions?</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Get in touch
          <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
        </Link>
      </section>
    </SiteShell>
  );
}
