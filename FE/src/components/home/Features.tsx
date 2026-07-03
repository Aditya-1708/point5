import { motion } from 'motion/react';
import { Clapperboard, Share2, TrendingUp, Clock, type LucideIcon } from 'lucide-react';
import { WHY_CHOOSE_US } from '../../data/content';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { cn } from '../../lib/utils';

const ICONS: Record<string, LucideIcon> = { Clapperboard, Share2, TrendingUp, Clock };

export function Features() {
  return (
    <Section className="bg-background py-24 relative overflow-hidden">
      {/* Studio-shoot backdrop — kept faint so cards stay readable */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="/bts/studio-shoot.jpg"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/30 to-background" />
      </div>
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight leading-tight max-w-xl">
            Why growing brands choose us
          </h2>
          <p className="text-foreground/60 font-medium leading-relaxed max-w-sm text-lg md:text-right">
            From the first shoot to full-funnel marketing — this is what working with one accountable team gets you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((feature, i) => {
            const Icon = ICONS[feature.icon] ?? Clapperboard;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={cn(
                  "relative rounded-3xl bg-[#121212] border border-white/5 p-8 flex flex-col items-center text-center group",
                  "hover:border-white/10 transition-all duration-300 hover-lift"
                )}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#C4EF17]/10 flex items-center justify-center mb-8 text-[#C4EF17] group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-auto">
                  {feature.desc}
                </p>
                {feature.stat && (
                  <div className="mt-8 pt-6 border-t border-white/5 w-full">
                    <p className="text-[#C4EF17] font-bold text-sm">{feature.stat}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
