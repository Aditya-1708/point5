import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { SectionLabel } from '../SectionLabel';
import { COMPANY, type Service } from '../../data/content';

/**
 * Visual proof block for services without an embed showcase:
 * image-led cards where the RESULT is the headline, not the copy.
 */
export const ImpactHighlights = ({
  service,
  sectionNumber = '01',
}: {
  service: Service;
  sectionNumber?: string;
}) => {
  const cases = service.impactCases ?? [];
  if (cases.length === 0) return null;

  return (
    <div className="mb-20">
      <SectionLabel number={sectionNumber} text="Proof First" />
      <h2 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tighter leading-none mt-4 mb-4">
        Real work, <span className="text-accent">real numbers</span>
      </h2>
      <p className="text-foreground/50 text-sm md:text-base font-medium max-w-xl mb-10">
        What this service has actually done for brands like yours.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cases.map((c, i) => (
          <motion.div
            key={c.client}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-3xl overflow-hidden border border-white/8 hover:border-accent/35 transition-colors duration-500 min-h-[380px] flex flex-col justify-end"
          >
            {/* Image background */}
            <img
              src={c.image}
              alt={c.client}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover saturate-[0.6] group-hover:saturate-100 group-hover:scale-[1.05] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent" />

            {/* Industry tag */}
            <span className="absolute top-5 left-5 text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-background/70 backdrop-blur border border-white/10 text-foreground/70">
              {c.industry}
            </span>

            {/* Result-first content */}
            <div className="relative z-10 p-7">
              <div className="text-5xl md:text-6xl font-display font-bold text-accent leading-none mb-1.5 [text-shadow:0_0_30px_rgba(196,239,23,0.25)]">
                {c.metric}
              </div>
              <div className="text-foreground/90 text-xs font-bold uppercase tracking-widest mb-4">
                {c.metricLabel}
              </div>
              <div className="text-sm font-bold font-display uppercase tracking-wide text-foreground mb-2">
                {c.client}
              </div>
              <p className="text-foreground/55 text-xs leading-relaxed border-l-2 border-accent/40 pl-3">
                {c.how}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Route the convinced straight to samples */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-4">
        <p className="text-foreground/45 text-xs md:text-sm font-medium">
          Want the full case studies and recent samples for your industry?
        </p>
        <a
          href={COMPANY.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent text-[11px] font-bold uppercase tracking-widest hover:gap-3.5 transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          Get them on WhatsApp
        </a>
      </div>
    </div>
  );
};
