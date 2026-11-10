import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, ArrowRight01Icon, InstagramIcon } from "@hugeicons/core-free-icons";
import { SiteShell } from "@/components/site-shell";
import { siteConfig } from "@/data/config";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${siteConfig.name}` },
      {
        name: "description",
        content: `Get in touch with ${siteConfig.name} to start your next project.`,
      },
      { property: "og:title", content: `Contact — ${siteConfig.name}` },
      {
        property: "og:description",
        content: `Get in touch with ${siteConfig.name} to start your next project.`,
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! Our team will be in touch soon.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  }

  return (
    <SiteShell>
      {/* Header */}
      <section className="panel px-6 sm:px-12 py-12 lg:py-16 animate-fade-up">
        <h1 className="text-[40px] sm:text-[60px] leading-[1.05] font-light tracking-tight">
          Let's talk about your project.
        </h1>
        <p className="mt-4 text-body max-w-lg">
          Whether you need a new agency website, a property listing platform, or ongoing website
          maintenance, we're ready to help.
        </p>
      </section>

      {/* Direct Contact Channels: Email & Instagram */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-up delay-100">
        <a
          href={`mailto:${siteConfig.email}`}
          className="panel px-6 py-6 flex items-center justify-between gap-4 hover:bg-foreground hover:text-background group transition-colors"
        >
          <div className="flex items-center gap-4 min-w-0">
            <span className="h-12 w-12 rounded-xl bg-background group-hover:bg-background/10 flex items-center justify-center shrink-0 transition-colors">
              <HugeiconsIcon icon={Mail01Icon} size={22} />
            </span>
            <div className="min-w-0">
              <div className="font-medium text-sm">Send an email</div>
              <div className="text-body text-sm group-hover:text-background/60 transition-colors truncate">
                {siteConfig.email}
              </div>
            </div>
          </div>
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            size={18}
            className="text-body group-hover:text-background group-hover:translate-x-1 transition-all shrink-0"
          />
        </a>

        <a
          href={siteConfig.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="panel px-6 py-6 flex items-center justify-between gap-4 hover:bg-foreground hover:text-background group transition-colors"
        >
          <div className="flex items-center gap-4 min-w-0">
            <span
              className="h-12 w-12 rounded-xl flex items-center justify-center shrink-0 transition-colors"
              style={{ backgroundColor: "#E1306C15" }}
            >
              <HugeiconsIcon
                icon={InstagramIcon}
                size={22}
                style={{ color: "#E1306C" }}
                className="group-hover:text-background transition-colors"
              />
            </span>
            <div className="min-w-0">
              <div className="font-medium text-sm">Follow on Instagram</div>
              <div className="text-body text-sm group-hover:text-background/60 transition-colors truncate">
                @rtstudio82
              </div>
            </div>
          </div>
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            size={18}
            className="text-body group-hover:text-background group-hover:translate-x-1 transition-all shrink-0"
          />
        </a>
      </section>

      {/* Contact form */}
      <section className="panel px-6 sm:px-10 py-10 animate-fade-up delay-400">
        <h2 className="text-xl font-medium mb-1.5">Send an enquiry</h2>
        <p className="text-body text-sm mb-7">
          Tell us about your agency or project. We typically respond within one business day.
        </p>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-body focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your.email@agency.com"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-body focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell us about your agency, your current website, or what you'd like to build..."
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-body focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {sending ? "Sending…" : "Send Enquiry"}
            {!sending && <HugeiconsIcon icon={ArrowRight01Icon} size={14} />}
          </button>
        </form>
      </section>
    </SiteShell>
  );
}
