import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/content';
import { SectionLabel } from '../SectionLabel';

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-background">
      {/* Soft background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <SectionLabel number="06" text="Testimonials" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tighter leading-none mb-5">
            Trusted by <span className="text-accent">growing businesses</span>
          </h2>
          <p className="text-foreground/50 max-w-2xl mx-auto text-sm md:text-base font-medium">
            Hotels, hospitals, real estate, jewellery, and food brands — here's
            what working with us actually feels like.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-white/5 bg-white/[0.02] p-7 md:p-8 flex flex-col hover:border-accent/20 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-accent/25 fill-accent/10" />
              </div>

              <blockquote className="text-foreground/80 text-sm md:text-[15px] leading-relaxed font-medium mb-8">
                "{t.quote}"
              </blockquote>

              <div className="mt-auto flex items-center gap-3 pt-5 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-sm font-bold font-display text-accent uppercase">
                      {t.author.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-foreground font-bold text-sm leading-tight truncate">
                    {t.author}
                  </p>
                  <p className="text-foreground/35 text-[10px] font-bold uppercase tracking-widest mt-0.5">
                    Client Partner
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
