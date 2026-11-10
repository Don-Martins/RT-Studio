import { useState, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  StarIcon,
  QuoteUpIcon,
  PlusSignIcon,
  MinusSignIcon,
  PaintBrush02Icon,
  Rocket01Icon,
  ComputerIcon,
  Clock01Icon,
  DeliveryBox01Icon,
  CustomerService01Icon,
  Search01Icon,
  Tick01Icon,
} from "@hugeicons/core-free-icons";
import { SiteShell } from "@/components/site-shell";
import { works } from "@/data/works";
import { siteConfig } from "@/data/config";
import { getAvatarUrl } from "@/lib/avatar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${siteConfig.name} — ${siteConfig.role}` },
      { name: "description", content: siteConfig.bio },
      { property: "og:title", content: `${siteConfig.name} — ${siteConfig.role}` },
      { property: "og:description", content: siteConfig.bio },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteConfig.siteUrl },
    ],
  }),
  component: Index,
});

/* ── Data ──────────────────────────────────────────────────────── */

const services = [
  {
    icon: ComputerIcon,
    title: "Real Estate Website Design",
    desc: "Custom-built agency websites with modern layouts and clean branding. Solves dated, generic web pages by giving your business a distinctive, credible presence.",
    tag: "Web Design",
  },
  {
    icon: DeliveryBox01Icon,
    title: "Property Listing Websites",
    desc: "Intuitive listing showcases with high-res galleries, floor plans, and filters. Solves difficult property discovery so buyers and renters can easily explore available homes.",
    tag: "Listings",
  },
  {
    icon: Search01Icon,
    title: "Website SEO Optimisation",
    desc: "Technical and local search optimisation for your target areas. Solves low Google visibility so local sellers and buyers find your agency ahead of competitors.",
    tag: "SEO",
  },
  {
    icon: CustomerService01Icon,
    title: "Website Maintenance & Updates",
    desc: "Ongoing technical care, security patches, backups, and listing updates. Solves the risk of broken features and downtime without you needing any technical know-how.",
    tag: "Support",
  },
  {
    icon: PaintBrush02Icon,
    title: "Website Redesign",
    desc: "Transforming older, slow real estate sites into high-converting digital platforms. Solves high bounce rates and lost leads caused by outdated web designs.",
    tag: "Redesign",
  },
  {
    icon: Rocket01Icon,
    title: "Speed & Performance",
    desc: "Accelerating image-heavy listing pages and scripts for mobile users. Solves slow loading times so prospective clients never leave out of frustration.",
    tag: "Speed",
  },
];

const designPackages = [
  {
    num: "01",
    name: "Starter Presence",
    price: "$499",
    period: "project",
    description:
      "A professional starting point for independent real estate agents and small agencies looking to establish their presence online.",
    features: [
      "Up to 5 website pages",
      "Custom website design",
      "About and services pages",
      "Property showcase section",
      "Contact and enquiry form",
      "WhatsApp integration",
      "Mobile-friendly design",
      "Basic on-page SEO",
      "Social media integration",
      "Website launch and testing",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    num: "02",
    name: "Business Growth",
    price: "$999",
    period: "project",
    badge: "Most Popular",
    description:
      "A more complete website experience for growing real estate agencies that want to showcase multiple properties and attract more enquiries.",
    features: [
      "Up to 10 website pages",
      "Everything in Starter Presence",
      "Property listing pages",
      "Individual property detail pages",
      "Property image galleries",
      "Property search and basic filters",
      "Agent profile section",
      "Blog or property insights section",
      "Enhanced on-page SEO",
      "Google Analytics integration",
      "Website speed optimisation",
      "30-day post-launch support",
    ],
    cta: "Choose Business Growth",
    featured: true,
  },
  {
    num: "03",
    name: "Premium Estate",
    price: "$1,999+",
    period: "project",
    description:
      "A comprehensive digital solution for established real estate agencies, property developers and businesses with larger property portfolios.",
    features: [
      "Custom multi-page website",
      "Everything in Business Growth",
      "Advanced property listing system",
      "Advanced property search and filters",
      "Property category management",
      "Dedicated agent profiles",
      "Interactive map integration",
      "Property enquiry management",
      "Advanced SEO setup",
      "Performance optimisation",
      "Analytics integration",
      "Custom functionality based on business needs",
      "60-day post-launch support",
    ],
    cta: "Discuss Your Project",
    featured: false,
  },
];

const testimonials = [
  {
    quote:
      "RT Studio gave our estate agency a modern web presence that showcases our high-end listings effortlessly. The feedback from vendors has been exceptional.",
    name: "Marcus Vance",
    role: "Managing Director, Vance & Co. Realty",
    seed: "marcus",
  },
  {
    quote:
      "The property showcase site they delivered for our new residential development was fast, sleek, and generated private viewing bookings from day one.",
    name: "Elena Rostova",
    role: "Marketing Director, Horizon Developments",
    seed: "elena",
  },
  {
    quote:
      "Our old website took eight seconds to load on mobile phones. RT Studio rebuilt it from scratch and now properties load instantly. It made a huge difference.",
    name: "David Adeleke",
    role: "Principal Broker, Prime Commercial",
    seed: "david",
  },
  {
    quote:
      "The ongoing maintenance package gives us total peace of mind. Whenever we have a new development or team update, they handle it promptly.",
    name: "Sarah Jenkins",
    role: "Operations Head, Jenkins Property Management",
    seed: "sarah",
  },
  {
    quote:
      "Clear communication, zero tech jargon, and an agency that truly understands what real estate buyers and sellers expect from a modern website.",
    name: "Priya Sharma",
    role: "Independent Realtor",
    seed: "priya",
  },
  {
    quote:
      "Our valuation enquiry submissions doubled within months of launching our redesigned website. Clean layout, intuitive navigation, and reliable support.",
    name: "Julian Taylor",
    role: "Partner, Taylor & White Estates",
    seed: "julian",
  },
];

const faqs = [
  {
    q: "Why does my real estate business need a website?",
    a: "A professional website gives your agency immediate credibility and serves as your 24/7 digital office. When prospective buyers, sellers, or landlords hear about your business, they search for you online. A dedicated website ensures you control your brand, showcase properties effectively, and capture direct enquiries without relying solely on third-party portals.",
  },
  {
    q: "Can I display properties available for sale and rent?",
    a: "Yes. We create structured property listings where you can present available homes, commercial units, or rentals with clear photographs, key specifications, pricing, and location details. Visitors can easily filter listings by property type and status.",
  },
  {
    q: "Can customers contact me directly through my website?",
    a: "Yes. Every property page and contact section includes direct enquiry forms, click-to-call buttons, and direct WhatsApp or email links, allowing interested buyers and tenants to reach your team immediately.",
  },
  {
    q: "Will my website work on mobile phones?",
    a: "Yes. Over 60% of property buyers browse listings on smartphones. Every website we build is fully responsive, ensuring fast loading and smooth navigation on phones, tablets, and desktop computers.",
  },
  {
    q: "Can my website appear on Google?",
    a: "Yes. We set up all necessary technical SEO foundations so search engines can index your pages. While search positions depend on content and local competition, we structure your site so your business name, services, and location are easily discoverable.",
  },
  {
    q: "Do you provide website maintenance and ongoing management?",
    a: "Yes. We offer ongoing maintenance packages covering security updates, technical monitoring, regular backups, and content updates such as adding new listings or team members.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. If your current website is slow, outdated, or difficult to use on mobile devices, we can redesign it from scratch while keeping your existing domain name and preserving your valuable content.",
  },
  {
    q: "How do I get started?",
    a: "Simply get in touch via our contact page or schedule an introductory consultation. We will discuss your real estate business goals, recommend the ideal website structure, and provide a clear proposal.",
  },
];

/* ── Testimonial Slider ─────────────────────────────────────── */
function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const startX = useRef(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }
  };

  return (
    <div className="relative">
      {/* Desktop grid — 3 columns */}
      <div className="hidden md:grid md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>

      {/* Mobile slider — swipe only, no arrow buttons */}
      <div
        className="md:hidden overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="w-full shrink-0">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>

        {/* Dots only — centered, no arrows */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: active === i ? "20px" : "6px",
                height: "6px",
                backgroundColor:
                  active === i ? "var(--color-foreground)" : "var(--color-muted-foreground)",
                opacity: active === i ? 1 : 0.35,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <figure className="rounded-2xl bg-background border border-border p-6 hover-lift flex flex-col h-full">
      <div className="flex items-center gap-0.5 text-amber-500 mb-4">
        {[...Array(5)].map((_, k) => (
          <HugeiconsIcon key={k} icon={StarIcon} size={11} className="fill-current" />
        ))}
      </div>
      <HugeiconsIcon icon={QuoteUpIcon} size={18} className="text-foreground/20 mb-3" />
      <blockquote className="text-foreground text-sm leading-relaxed flex-1">{t.quote}</blockquote>
      <div className="mt-5 flex items-center gap-3">
        <img
          src={getAvatarUrl(t.seed)}
          alt={t.name}
          width={36}
          height={36}
          className="h-9 w-9 rounded-full shrink-0"
        />
        <div className="min-w-0">
          <div className="text-sm font-medium truncate">{t.name}</div>
          <div className="text-xs text-body truncate">{t.role}</div>
        </div>
      </div>
    </figure>
  );
}

/* ── Page ───────────────────────────────────────────────────── */
function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <SiteShell
      hero={
        <section className="relative w-full min-h-[100svh] flex items-center justify-start overflow-hidden bg-[#142B25] text-white">
          {/* Full-bleed background image covering entire viewport width and height */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <img
              src="/assets/aistudio/Modern_House_Background_ff11f886.jfif"
              alt="RT Studio Real Estate Architecture"
              className="w-full h-full object-cover object-center lg:object-[75%_center]"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Desktop gradient overlay: dark forest green on the left for crisp text contrast, fading right to showcase the architecture */}
            <div
              className="absolute inset-0 hidden lg:block"
              style={{
                background:
                  "linear-gradient(to right, rgba(20, 43, 37, 0.96) 0%, rgba(20, 43, 37, 0.88) 38%, rgba(20, 43, 37, 0.55) 65%, rgba(20, 43, 37, 0.20) 100%)",
              }}
            />

            {/* Mobile/Tablet gradient overlay: deep vertical contrast to ensure high readability */}
            <div
              className="absolute inset-0 lg:hidden"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(20, 43, 37, 0.88) 0%, rgba(20, 43, 37, 0.92) 50%, rgba(20, 43, 37, 0.96) 100%)",
              }}
            />
          </div>

          {/* Hero Content aligned within site grid */}
          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 pt-32 sm:pt-36 lg:pt-28 pb-16 sm:pb-20">
            <div className="max-w-2xl">
              <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.08] font-normal tracking-tight text-white font-serif">
                A Better Digital Presence for Real Estate Brands.
              </h1>

              <p className="mt-5 sm:mt-6 text-[#F7F5F0]/90 text-base sm:text-lg lg:text-xl leading-relaxed font-sans max-w-xl">
                We help real estate businesses turn their online presence into a powerful platform
                for showcasing properties and attracting serious buyers.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#D6B98C] text-[#142B25] font-semibold text-sm sm:text-base hover:brightness-105 hover:shadow-lg transition-all shadow-md text-center"
                >
                  Work With Us
                  <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
                </Link>
                <Link
                  to="/work"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 text-white text-sm sm:text-base font-medium border border-white/25 backdrop-blur-sm hover:bg-white/20 transition-all text-center"
                >
                  View Portfolio
                  <HugeiconsIcon icon={ArrowRight01Icon} size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      }
    >
      {/* ── Recent Work Marquee ───────────────────────────────── */}
      <section className="panel py-10 animate-fade-up delay-100 overflow-hidden">
        <div className="flex items-end justify-between mb-7 px-6 sm:px-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight">
              Recent Real Estate Work
            </h2>
            <p className="mt-1 text-xs text-body">
              Concept projects for property agencies and developers · Click to view
            </p>
          </div>
          <Link
            to="/work"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-background border border-border text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            Explore Our Work
            <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
          </Link>
        </div>

        <div className="relative group/marquee">
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, var(--color-surface), transparent)" }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, var(--color-surface), transparent)" }}
          />

          <div className="flex gap-4 animate-marquee-slow group-hover/marquee:[animation-play-state:paused] w-max px-6 sm:px-12">
            {[...works, ...works].map((w, i) => (
              <Link
                to="/work/$id"
                params={{ id: w.id }}
                key={i}
                className="group/card relative w-[240px] sm:w-[340px] lg:w-[420px] shrink-0 rounded-2xl overflow-hidden bg-background border border-border hover-lift"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={w.image}
                    alt={w.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-foreground/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background text-foreground text-xs font-medium translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                      View Project
                      <HugeiconsIcon icon={ArrowRight01Icon} size={13} />
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium">
                    {w.category}
                  </span>
                </div>
                <div className="px-4 py-3.5 flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm text-foreground">{w.title}</div>
                    <div className="text-xs text-body mt-0.5">
                      {w.client} · {w.year}
                    </div>
                  </div>
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={14}
                    className="text-body group-hover/card:text-foreground transition-colors"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section id="services" className="panel px-6 sm:px-12 py-12 lg:py-16 animate-fade-up">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-body mb-2">
              Our Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
              Real Estate Digital Services
            </h2>
          </div>
          <p className="text-body text-sm max-w-[240px] text-right hidden sm:block">
            Designed specifically for agencies, brokers, and developers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group rounded-2xl bg-background border border-border p-6 hover-lift flex gap-5 items-start"
              style={{ animationDelay: `${i * 55}ms` }}
            >
              <span className="h-11 w-11 rounded-xl bg-surface border border-border flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:border-foreground transition-colors">
                <HugeiconsIcon
                  icon={s.icon}
                  size={20}
                  className="text-foreground group-hover:text-background transition-colors"
                />
              </span>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="text-sm font-medium">{s.title}</h3>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-surface border border-border text-body">
                    {s.tag}
                  </span>
                </div>
                <p className="text-body text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Website Design Packages ──────────────────────────── */}
      <section id="pricing" className="panel px-6 sm:px-12 py-12 lg:py-16 animate-fade-up">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-body mb-2">
              Website Design Packages
            </p>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight">
              Website Design Packages
            </h2>
            <p className="mt-2 text-body text-sm max-w-xl leading-relaxed">
              Professional websites designed to help real estate businesses showcase properties,
              build trust and attract potential clients. Choose a package that fits your business
              and where you want to go.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {designPackages.map((pkg, i) => {
            const isFeatured = pkg.featured;
            return (
              <div
                key={pkg.name}
                className={`rounded-2xl flex flex-col overflow-hidden transition-all duration-300 ${
                  isFeatured
                    ? "bg-[#142B25] text-white shadow-xl lg:-translate-y-2 border-2 border-[#D6B98C]"
                    : "bg-surface text-foreground border border-border"
                }`}
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="p-7 flex flex-col flex-1">
                  {/* Package header */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-semibold tracking-wider uppercase ${
                        isFeatured ? "text-[#D6B98C]" : "text-body"
                      }`}
                    >
                      Package {pkg.num}
                    </span>
                    {pkg.badge && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#D6B98C] text-[#142B25]">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <h3
                    className={`text-xl font-normal mb-2 ${
                      isFeatured ? "text-white" : "text-foreground"
                    }`}
                  >
                    {pkg.name}
                  </h3>

                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span
                      className={`text-3xl sm:text-4xl font-normal tracking-tight ${
                        isFeatured ? "text-white" : "text-foreground"
                      }`}
                    >
                      {pkg.price}
                    </span>
                    <span className={`text-sm ${isFeatured ? "text-[#F7F5F0]/70" : "text-body"}`}>
                      / {pkg.period}
                    </span>
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      isFeatured ? "text-[#F7F5F0]/80" : "text-body"
                    }`}
                  >
                    {pkg.description}
                  </p>

                  <div className={`h-px w-full mb-6 ${isFeatured ? "bg-white/15" : "bg-border"}`} />

                  <div className="mb-4">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        isFeatured ? "text-[#D6B98C]" : "text-foreground"
                      }`}
                    >
                      What's included:
                    </span>
                  </div>

                  {/* Feature list */}
                  <ul className="space-y-2.5 flex-1 mb-8">
                    {pkg.features.map((feat, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <span
                          className={`h-5 w-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isFeatured
                              ? "bg-[#D6B98C]/20 text-[#D6B98C]"
                              : "bg-[#142B25]/10 text-[#142B25]"
                          }`}
                        >
                          <HugeiconsIcon icon={Tick01Icon} size={12} />
                        </span>
                        <span className={isFeatured ? "text-[#F7F5F0]/90" : "text-foreground/90"}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <Link
                    to="/contact"
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:brightness-105 ${
                      isFeatured
                        ? "bg-[#D6B98C] text-[#142B25] shadow-md"
                        : "bg-[#142B25] text-white hover:bg-[#142B25]/90"
                    }`}
                  >
                    {pkg.cta}
                    <HugeiconsIcon icon={ArrowRight01Icon} size={15} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Need something different? Custom Quote */}
        <div className="mt-12 rounded-2xl bg-background border border-border p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#142B25] mb-1.5 block">
              Tailored Solutions
            </span>
            <h4 className="text-lg sm:text-xl font-normal text-foreground">
              Need something different?
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm text-body leading-relaxed">
              Every real estate business has different needs. If you require a custom website,
              additional functionality or a combination of services, let's discuss a solution that
              works for your business.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#142B25] text-white text-xs sm:text-sm font-semibold hover:bg-[#142B25]/90 transition-colors shrink-0 shadow-sm"
          >
            Request a Custom Quote
            <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
          </Link>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section id="testimonials" className="panel px-6 sm:px-12 py-12 lg:py-16 animate-fade-up">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-body mb-2">
              Client Feedback
            </p>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight">What Clients Say</h2>
          </div>
          <Link
            to="/testimonials"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-background border border-border text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            All reviews
            <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
          </Link>
        </div>
        <TestimonialSlider />
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section id="faq" className="panel px-6 sm:px-12 py-12 lg:py-16 animate-fade-up">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-body mb-2">
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-body text-sm max-w-[240px] text-right hidden sm:block">
            Clear answers to help you choose the right digital solution.
          </p>
        </div>
        <div className="divide-y divide-border">
          {faqs.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="py-1">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-4 py-4 rounded-xl hover:bg-background transition-colors"
                >
                  <span className="font-medium text-foreground text-sm sm:text-base">{f.q}</span>
                  <span className="h-7 w-7 rounded-full bg-background border border-border flex items-center justify-center shrink-0">
                    <HugeiconsIcon icon={isOpen ? MinusSignIcon : PlusSignIcon} size={13} />
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

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="panel px-6 sm:px-12 py-16 lg:py-20 text-center animate-fade-up">
        <p className="text-xs font-semibold tracking-widest uppercase text-body mb-4">
          Start Your Project
        </p>
        <h2 className="text-4xl sm:text-5xl font-light tracking-tight max-w-lg mx-auto">
          Ready to elevate your real estate brand online?
        </h2>
        <p className="mt-4 text-body text-sm max-w-md mx-auto leading-relaxed">
          Whether you need a new agency website, an interactive property listing showcase, or
          ongoing website maintenance, RT Studio is here to help your business stand out.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Book a Consultation
          <HugeiconsIcon icon={ArrowRight01Icon} size={15} />
        </Link>
      </section>
    </SiteShell>
  );
}
