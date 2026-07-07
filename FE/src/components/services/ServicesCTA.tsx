import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Check } from 'lucide-react';
import { COMPANY } from '../../data/content';
import { MagneticButton } from '../MagneticButton';

const REASSURANCES = [
  'Free 30-minute discovery call',
  'Custom proposal within 48 hours',
  'No long-term lock-in required',
];

export const ServicesCTA = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-[2.5rem] border border-white/10 p-10 md:p-16 text-center shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tighter leading-none mb-5">
            Still deciding? <span className="text-accent">Let's talk it through.</span>
          </h2>
          <p className="text-foreground/60 text-base md:text-lg leading-relaxed font-medium max-w-xl mx-auto mb-10">
            No pressure, no jargon — just a straight conversation about your
            goals and which service (or combination) actually gets you there.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-10">
            {REASSURANCES.map((item) => (
              <div key={item} className="flex items-center gap-2 text-foreground/70 text-xs md:text-sm font-bold uppercase tracking-wider">
                <Check className="w-4 h-4 text-accent" />
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <MagneticButton className="inline-flex items-center gap-3 bg-accent text-background px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(196,239,23,0.5)] transition-all duration-500 group shadow-2xl">
                <span className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-accent transition-transform group-hover:rotate-45">
                  <ArrowRight className="w-4 h-4" />
                </span>
                Get Free Consultation
              </MagneticButton>
            </Link>
            <a href={COMPANY.socials.whatsapp} target="_blank" rel="noopener noreferrer">
              <MagneticButton className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-foreground px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white/10 hover:border-accent/30 transition-all duration-500">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </MagneticButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
