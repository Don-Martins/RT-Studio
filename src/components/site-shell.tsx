import { useState, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Menu01Icon,
  Cancel01Icon,
  InstagramIcon,
  Mail01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { siteConfig } from "@/data/config";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

const footerSocials = [
  {
    key: "gmail",
    icon: Mail01Icon,
    label: "Gmail",
    href: `mailto:${siteConfig.email}`,
  },
  {
    key: "instagram",
    icon: InstagramIcon,
    label: "Instagram",
    href:
      siteConfig.socials.instagram || "https://www.instagram.com/rtstudio82?exln=bzY2dGpub2IyOTN3",
  },
] as const;

/* ─── Top Bar ────────────────────────────────────────────────── */
function TopBar({ onMenu, menuOpen }: { onMenu: () => void; menuOpen: boolean }) {
  const location = useLocation();
  return (
    <div className="flex items-center justify-between px-5 sm:px-7 py-4">
      <div className="flex items-center gap-2.5">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="RT Studio">
          <img
            src="/assets/aistudio/rt-studio-logo-dark.png"
            alt="RT Studio"
            className="h-7 sm:h-8 w-auto object-contain transition-opacity group-hover:opacity-80"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "/assets/aistudio/ChatGPT_Image_Nov_10__2026__04_14_00_AM_721817d2.jpg";
            }}
          />
        </Link>
      </div>

      <nav className="hidden lg:flex items-center gap-1">
        {links.map((l) => {
          const active =
            location.pathname === l.to ||
            (l.to === "/work" && location.pathname.startsWith("/work"));
          return (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active
                  ? "bg-foreground text-background"
                  : "text-foreground/70 hover:text-foreground hover:bg-background"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={onMenu}
        className="lg:hidden inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
        aria-label="Toggle menu"
      >
        <span className="hidden sm:inline">{menuOpen ? "Close" : "Menu"}</span>
        <HugeiconsIcon icon={menuOpen ? Cancel01Icon : Menu01Icon} size={18} />
      </button>
    </div>
  );
}

/* ─── Mobile Menu ────────────────────────────────────────────── */
function MenuPanel({ onClose }: { onClose: () => void }) {
  const location = useLocation();
  return (
    <div className="px-3 pb-3 lg:hidden animate-fade-in">
      <div className="rounded-3xl bg-foreground text-background p-3 grid grid-cols-2 gap-2">
        {links.map((l) => {
          const active = location.pathname === l.to;
          return (
            <Link
              key={l.to}
              to={l.to}
              onClick={onClose}
              className={`rounded-2xl py-5 text-center text-base font-medium transition-all ${
                active ? "bg-background/15" : "hover:bg-background/10"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Footer ─────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="w-full bg-[#142B25] text-[#F7F5F0] border-t border-[#142B25] mt-14 sm:mt-20 animate-fade-up">
      {/* CTA strip */}
      <div className="w-full border-b" style={{ borderColor: "rgba(214, 185, 140, 0.15)" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal tracking-tight text-[#F7F5F0] leading-snug">
              Showcase Your Properties. Attract More Buyers. Generate More Leads.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold transition-all hover:brightness-105 shrink-0 font-sans shadow-md"
            style={{
              backgroundColor: "#D6B98C",
              color: "#142B25",
            }}
          >
            Book a Consultation
            <HugeiconsIcon icon={ArrowRight01Icon} size={15} />
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 grid gap-10 md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-5">
          <div className="mb-5">
            <Link to="/" className="inline-block group" aria-label="RT Studio">
              <img
                src="/assets/aistudio/rt-studio-logo-white.png"
                alt="RT Studio"
                className="h-8 sm:h-9 w-auto object-contain transition-opacity group-hover:opacity-85"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/assets/aistudio/ChatGPT_Image_Nov_10__2026__04_14_00_AM_721817d2.jpg";
                }}
              />
            </Link>
          </div>
          <p
            className="text-sm leading-relaxed max-w-sm"
            style={{ color: "rgba(247, 245, 240, 0.7)" }}
          >
            {siteConfig.bio}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {footerSocials.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target={s.key === "gmail" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="h-10 w-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-[#D6B98C] hover:text-[#142B25]"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  color: "#F7F5F0",
                }}
              >
                <HugeiconsIcon icon={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Pages */}
        <div className="md:col-span-3">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#D6B98C" }}
          >
            Pages
          </p>
          <ul className="space-y-2.5">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm transition-opacity hover:opacity-100"
                  style={{ color: "rgba(247, 245, 240, 0.75)" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#D6B98C" }}
          >
            Contact
          </p>
          <ul className="space-y-3 mb-8">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm flex items-center gap-2 transition-opacity hover:opacity-100"
                style={{ color: "rgba(247, 245, 240, 0.75)" }}
              >
                <HugeiconsIcon icon={Mail01Icon} size={15} />
                {siteConfig.email}
              </a>
            </li>
            <li className="text-sm" style={{ color: "rgba(247, 245, 240, 0.75)" }}>
              {siteConfig.location}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="w-full border-t"
        style={{
          borderColor: "rgba(214, 185, 140, 0.12)",
        }}
      >
        <div
          className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "rgba(247, 245, 240, 0.45)" }}
        >
          <span>
            {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <span>
            Designed by{" "}
            <a href="https://mocworkshop.web.app/" className="hover:underline">
              MUC Labs.
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ─── Shell ──────────────────────────────────────────────────── */
export function SiteShell({ children, hero }: { children: ReactNode; hero?: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen w-full bg-background flex flex-col justify-between">
      {hero ? (
        <div className="relative w-full min-h-[100svh] flex flex-col">
          {/* Header positioned floating directly above hero content */}
          <div className="absolute top-0 left-0 right-0 z-30 w-full pointer-events-none">
            <div className="mx-auto w-full max-w-[1280px] px-3 sm:px-5 pt-3 sm:pt-5 pointer-events-auto">
              <header className="panel overflow-hidden backdrop-blur-md bg-surface/95 border border-border/80 shadow-md">
                <TopBar onMenu={() => setMenuOpen((v) => !v)} menuOpen={menuOpen} />
                {menuOpen && <MenuPanel onClose={() => setMenuOpen(false)} />}
              </header>
            </div>
          </div>
          {hero}
        </div>
      ) : (
        <div className="mx-auto w-full max-w-[1280px] px-3 sm:px-5 pt-3 sm:pt-5">
          <header className="panel overflow-hidden mb-4 sticky top-3 z-30 backdrop-blur">
            <TopBar onMenu={() => setMenuOpen((v) => !v)} menuOpen={menuOpen} />
            {menuOpen && <MenuPanel onClose={() => setMenuOpen(false)} />}
          </header>
        </div>
      )}

      <div className="mx-auto w-full max-w-[1280px] px-3 sm:px-5 py-4 sm:py-6 flex-1 w-full">
        <main className="space-y-4">{children}</main>
      </div>

      <Footer />
    </div>
  );
}
