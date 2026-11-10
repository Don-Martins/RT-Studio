import { createFileRoute } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon, QuoteUpIcon } from "@hugeicons/core-free-icons";
import { SiteShell } from "@/components/site-shell";
import { siteConfig } from "@/data/config";
import { getAvatarUrl } from "@/lib/avatar";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: `Client Feedback — ${siteConfig.name}` },
      {
        name: "description",
        content: `What clients and real estate professionals say about working with ${siteConfig.name}.`,
      },
      { property: "og:title", content: `Client Feedback — ${siteConfig.name}` },
      {
        property: "og:description",
        content: `What clients and real estate professionals say about working with ${siteConfig.name}.`,
      },
    ],
  }),
  component: Testimonials,
});

const items = [
  {
    quote:
      "RT Studio gave our estate agency a modern website that showcases our properties effortlessly. The feedback from vendors and buyers has been excellent.",
    name: "Marcus Vance",
    role: "Managing Director, Vance & Co. Realty",
    seed: "marcus",
    stars: 5,
  },
  {
    quote:
      "The showcase website for our new residential development was clean, fast, and brought in viewing enquiries from the very first week.",
    name: "Elena Rostova",
    role: "Marketing Director, Horizon Developments",
    seed: "elena",
    stars: 5,
  },
  {
    quote:
      "Our old website took eight seconds to load on mobile phones. RT Studio rebuilt it from scratch, and now listings load instantly. It made a real difference.",
    name: "David Adeleke",
    role: "Principal Broker, Prime Commercial",
    seed: "david",
    stars: 5,
  },
  {
    quote:
      "Their ongoing support gives us total peace of mind. Whenever we have new properties or team updates, they take care of it promptly.",
    name: "Sarah Jenkins",
    role: "Operations Head, Jenkins Property Management",
    seed: "sarah",
    stars: 5,
  },
  {
    quote:
      "Clear communication, no tech jargon, and a team that truly understands what real estate buyers and sellers expect from a modern website.",
    name: "Priya Sharma",
    role: "Independent Realtor",
    seed: "priya",
    stars: 5,
  },
  {
    quote:
      "Our property enquiry submissions doubled within months of launching our new website. Clean layout, easy to navigate, and reliable ongoing support.",
    name: "Julian Taylor",
    role: "Partner, Taylor & White Estates",
    seed: "julian",
    stars: 5,
  },
];

function Testimonials() {
  return (
    <SiteShell>
      <section className="panel px-6 sm:px-12 py-12 lg:py-16 animate-fade-up text-center">
        <h1 className="text-[40px] sm:text-[60px] leading-[1.05] font-light tracking-tight">
          What Clients Say
        </h1>
        <p className="mt-4 text-body max-w-lg mx-auto text-sm">
          Hear from real estate agents, brokers, and property developers who partnered with RT
          Studio to build their websites and listing platforms.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-up delay-100">
        {items.map((t, i) => (
          <figure
            key={i}
            className="panel p-7 hover-lift flex flex-col"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {/* Stars */}
            <div className="flex items-center gap-0.5 text-amber-500 mb-4">
              {[...Array(t.stars)].map((_, k) => (
                <HugeiconsIcon key={k} icon={StarIcon} size={12} className="fill-current" />
              ))}
            </div>

            <HugeiconsIcon icon={QuoteUpIcon} size={20} className="text-foreground/20 mb-3" />
            <blockquote className="text-foreground text-sm leading-relaxed flex-1">
              "{t.quote}"
            </blockquote>

            <div className="mt-6 flex items-center gap-3">
              <img
                src={getAvatarUrl(t.seed)}
                alt={t.name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full shrink-0"
              />
              <div className="min-w-0">
                <div className="text-sm font-medium truncate">{t.name}</div>
                <div className="text-xs text-body truncate">{t.role}</div>
              </div>
            </div>
          </figure>
        ))}
      </section>
    </SiteShell>
  );
}
