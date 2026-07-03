import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Palette,
  Share2,
  TrendingUp,
  Camera,
  Heart,
  Video,
  Monitor,
  type LucideIcon,
} from 'lucide-react';
import { SERVICES } from '@/src/data/content';
import { SectionLabel } from '@/src/components/SectionLabel';
import { Container } from '@/src/components/layout/Container';
import { Section } from '@/src/components/layout/Section';

const ICONS: Record<string, LucideIcon> = {
  Palette,
  Share2,
  TrendingUp,
  Camera,
  Heart,
  Video,
  Monitor,
};

export function Services() {
  return (
    <Section className="bg-background overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex justify-center">
            <SectionLabel number="02" text="Services" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tighter leading-none mb-5">
            Everything your brand needs{' '}
            <span className="text-accent">to get noticed</span>
          </h2>
          <p className="text-foreground/60 font-medium leading-relaxed">
            One partner for branding, content production, social media, and
            performance marketing — strategy to execution, in-house.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Camera;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl border border-white/5 bg-white/[0.02] p-7 md:p-8 hover:border-accent/25 hover:bg-white/[0.04] transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/15 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/25">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold font-display tracking-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-foreground/55 text-sm leading-relaxed mb-6 line-clamp-3">
                  {s.shortDesc}
                </p>

                {s.features.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {s.features.slice(0, 4).map((f) => (
                      <span
                        key={f}
                        className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/8 text-foreground/40"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                )}

                <Link
                  to={`/services/${s.slug}`}
                  className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:gap-3.5 transition-all"
                >
                  Explore service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}

          {/* Filler card that converts — grid is 7 services + this = 8 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.16, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl bg-accent p-7 md:p-8 flex flex-col justify-between min-h-[240px]"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-display tracking-tight text-background mb-3">
                Not sure what your brand needs?
              </h3>
              <p className="text-background/70 text-sm leading-relaxed font-medium">
                Tell us your goals on a free 30-minute consultation and we'll
                recommend the right mix — no commitments.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-background hover:gap-3.5 transition-all"
            >
              Get a free consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
