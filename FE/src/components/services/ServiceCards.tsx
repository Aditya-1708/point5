import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SERVICES, type Service } from '../../data/content';
import { SectionLabel } from '../SectionLabel';
import {
  Palette,
  Share2,
  TrendingUp,
  Camera,
  Heart,
  Video,
  Monitor,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';

const ICONS: Record<string, LucideIcon> = { Palette, Share2, TrendingUp, Camera, Heart, Video, Monitor };

// Rows group services by what the visitor is trying to do. Row ids are
// scroll targets for the quick-nav pills in ServicesHero — keep them in sync.
const ROWS: { id: string; label: string; hint: string; slugs: string[]; wide: boolean }[] = [
  {
    id: 'growth-marketing',
    label: 'Growth & Marketing',
    hint: 'Get found, get leads, grow every month',
    slugs: ['social-media-management', 'digital-marketing'],
    wide: true,
  },
  {
    id: 'brand-content',
    label: 'Brand & Content',
    hint: 'Look premium everywhere your customers see you',
    slugs: ['branding', 'brand-product-shoots', 'website-development-management'],
    wide: false,
  },
  {
    id: 'photo-events',
    label: 'Photography & Events',
    hint: 'Moments captured with cinematic craft',
    slugs: ['wedding-photography-videography', 'event-photography-videography'],
    wide: true,
  },
];

const ServiceCard = ({ service, index, wide }: { service: Service; index: number; wide: boolean }) => {
  const Icon = ICONS[service.icon] || Palette;
  const visibleChips = service.features.slice(0, wide ? 4 : 3);
  const moreCount = service.features.length - visibleChips.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={wide ? 'lg:col-span-6' : 'lg:col-span-4'}
    >
      <Link
        to={`/services/${service.slug}`}
        className="group relative flex flex-col h-full rounded-[1.75rem] overflow-hidden bg-[#0D0D0D] border border-white/8 hover:border-accent/40 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.55),0_0_35px_rgba(196,239,23,0.07)] transition-all duration-500"
      >
        {/* ── Image ── */}
        <div className={`relative overflow-hidden ${wide ? 'h-56 md:h-64' : 'h-44 md:h-52'}`}>
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="w-full h-full object-cover saturate-[0.7] group-hover:saturate-100 group-hover:scale-[1.06] transition-all duration-700 ease-out"
          />
          {/* Blend image into the card body */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/20 to-transparent" />

          {service.popular && (
            <span className="absolute top-4 right-4 text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-accent text-background shadow-[0_0_18px_rgba(196,239,23,0.45)]">
              Client Favorite
            </span>
          )}

          {/* Floating icon tile bridging image and body */}
          <div className="absolute -bottom-0.5 left-7 w-14 h-14 rounded-2xl bg-background border border-white/10 flex items-center justify-center shadow-2xl group-hover:border-accent/40 transition-colors duration-500">
            <Icon className="w-7 h-7 text-accent" />
          </div>
        </div>

        {/* ── Body ── */}
        <div className="flex flex-col flex-1 p-7 pt-9">
          <p className="text-accent/80 text-[10px] font-bold uppercase tracking-[0.25em] mb-2.5">
            Best for · {service.bestFor}
          </p>

          <h3 className="text-xl md:text-2xl font-bold font-display uppercase tracking-tight leading-tight text-foreground group-hover:text-accent transition-colors duration-300 mb-3">
            {service.title}
          </h3>

          <p className="text-foreground/50 text-sm leading-relaxed line-clamp-2 mb-6">
            {service.shortDesc}
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            {visibleChips.map((feature) => (
              <span
                key={feature}
                className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/8 text-foreground/45 group-hover:border-accent/20 group-hover:text-foreground/70 transition-colors duration-300"
              >
                {feature}
              </span>
            ))}
            {moreCount > 0 && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-dashed border-white/10 text-foreground/30">
                +{moreCount} more
              </span>
            )}
          </div>

          {/* Footer CTA */}
          <div className="mt-auto flex items-center justify-between pt-5 border-t border-white/5">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/50 group-hover:text-foreground transition-colors duration-300">
              See work &amp; pricing
            </span>
            <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-foreground/60 group-hover:bg-accent group-hover:border-accent group-hover:text-background group-hover:rotate-45 transition-all duration-500">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const ServiceCards = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative">
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <SectionLabel number="01" text="What We Do" />
            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tighter text-foreground uppercase leading-none mt-4">
              Seven ways to <span className="text-accent italic">grow your brand</span>
            </h2>
          </div>
          <p className="text-foreground/45 text-sm md:text-base font-medium leading-relaxed max-w-sm md:text-right md:mb-1.5">
            Real work, real deliverables — every card opens the full breakdown
            with samples and pricing.
          </p>
        </div>

        <div className="space-y-14">
          {ROWS.map((row) => {
            const rowServices = row.slugs
              .map((slug) => SERVICES.find((s) => s.slug === slug))
              .filter((s): s is Service => Boolean(s));

            return (
              <div key={row.id} id={row.id} className="scroll-mt-28">
                <div className="flex items-baseline gap-4 mb-6">
                  <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-accent/80 whitespace-nowrap">
                    {row.label}
                  </h3>
                  <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                  <span className="hidden sm:block text-xs text-foreground/30 font-medium italic whitespace-nowrap">
                    {row.hint}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
                  {rowServices.map((service, i) => (
                    <ServiceCard key={service.slug} service={service} index={i} wide={row.wide} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
