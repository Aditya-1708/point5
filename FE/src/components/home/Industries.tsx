import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Coffee,
  Building2,
  ShoppingBag,
  Gem,
  Shirt,
  Stethoscope,
  GraduationCap,
  PartyPopper,
  type LucideIcon,
} from 'lucide-react';
import { INDUSTRIES } from '@/src/data/content';
import { SectionLabel } from '@/src/components/SectionLabel';
import { Container } from '@/src/components/layout/Container';
import { Section } from '@/src/components/layout/Section';

const ICONS: Record<string, LucideIcon> = {
  Coffee,
  Building2,
  ShoppingBag,
  Gem,
  Shirt,
  Stethoscope,
  GraduationCap,
  PartyPopper,
};

export function Industries() {
  return (
    <Section className="bg-white/[0.015] border-y border-white/5 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — pitch */}
          <div className="lg:col-span-5">
            <SectionLabel number="03" text="Industries" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tighter leading-none mb-6">
              Industries we{' '}
              <span className="text-accent">transform</span>
            </h2>
            <p className="text-foreground/60 font-medium leading-relaxed mb-4">
              Every industry buys differently. We've built content and
              campaigns for 50+ brands, so we already know what stops the
              scroll for your customers — and what converts them.
            </p>
            <p className="text-foreground/40 text-sm leading-relaxed mb-8">
              Don't see your industry? The playbook adapts — strategy first,
              content second.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 text-accent font-bold uppercase tracking-widest text-xs hover:gap-5 transition-all"
            >
              See work by industry
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right — industry grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-4">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ICONS[ind.icon] ?? Coffee;
              return (
                <motion.div
                  key={ind.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: (i % 4) * 0.06, duration: 0.45 }}
                  className="rounded-2xl border border-white/5 bg-background p-5 flex flex-col items-center text-center gap-4 hover:border-accent/25 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground/80 leading-relaxed">
                    {ind.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
