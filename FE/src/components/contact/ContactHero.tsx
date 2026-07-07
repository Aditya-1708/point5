import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Zap, Gift, ShieldCheck, Users } from 'lucide-react';

const TRUST_CHIPS = [
  { icon: Zap, label: 'Replies within 4 hours' },
  { icon: Gift, label: 'Free consultation' },
  { icon: ShieldCheck, label: 'No lock-in contracts' },
  { icon: Users, label: '50+ brands served' },
];

export const ContactHero = () => {
  return (
    <section className="relative pt-36 md:pt-44 pb-10 md:pb-14 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <nav className="flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-accent/40 mb-10">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span className="w-4 h-[1px] bg-accent/20" />
          <span className="text-foreground/80">Contact</span>
        </nav>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display uppercase tracking-tighter leading-[0.9] text-white mb-6"
        >
          Your growth plan
          <br />
          <span className="text-accent italic">starts here</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-foreground/55 text-base md:text-lg font-medium max-w-2xl mb-10"
        >
          Tell us about your business and goals — we'll get back within 4 working
          hours with next steps and a free consultation slot. No pressure, no
          obligation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-2.5"
        >
          {TRUST_CHIPS.map((chip) => (
            <div
              key={chip.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-foreground/70 text-[11px] font-bold uppercase tracking-widest"
            >
              <chip.icon className="w-3.5 h-3.5 text-accent" />
              {chip.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
