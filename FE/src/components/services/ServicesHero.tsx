import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY } from '../../data/content';
import { MagneticButton } from '../MagneticButton';
import { KineticText } from '../motion/KineticText';

const GROUPS = [
  { id: 'growth-marketing', label: 'Growth & Marketing' },
  { id: 'brand-content', label: 'Brand & Content' },
  { id: 'photo-events', label: 'Photography & Events' },
];

const scrollToGroup = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 120;
  window.scrollTo({ top, behavior: 'smooth' });
};

export const ServicesHero = () => {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden pt-32 pb-16 bg-background">
      {/* Backdrop — studio shoot, distinct from the homepage hero image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bts/studio-shoot.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.22] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>
      <div className="noise-bg absolute inset-0 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-accent/40 mb-10">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span className="w-4 h-[1px] bg-accent/20" />
          <span className="text-foreground/80">Services</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-accent text-xs uppercase tracking-[0.3em] font-bold mb-6 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Not sure where to start?
        </motion.div>

        <h1 className="text-[9vw] md:text-6xl lg:text-7xl font-display font-bold uppercase leading-[0.95] tracking-tighter mb-8 max-w-4xl">
          <KineticText as="span" className="block">Whatever stage you're at,</KineticText>
          <KineticText as="span" className="block text-accent" delay={0.05}>there's a service for it</KineticText>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="max-w-2xl text-foreground/65 text-base md:text-lg leading-relaxed font-medium mb-10"
        >
          Launching a brand, growing on social, or capturing an event —
          browse by what you're trying to do below, and get a straight answer
          on what fits before you commit to anything.
        </motion.p>

        {/* Quick nav — jump straight to the relevant group instead of scrolling blind */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-10"
        >
          {GROUPS.map((g) => (
            <button
              key={g.id}
              onClick={() => scrollToGroup(g.id)}
              className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-foreground/70 hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all"
            >
              {g.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link to="/contact">
            <MagneticButton className="inline-flex items-center gap-3 bg-accent text-background px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(196,239,23,0.5)] transition-all duration-500 group shadow-2xl">
              <span className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-accent transition-transform group-hover:rotate-45">
                <ArrowRight className="w-4 h-4" />
              </span>
              Get Free Consultation
            </MagneticButton>
          </Link>
          <a href={COMPANY.socials.whatsapp} target="_blank" rel="noopener noreferrer">
            <MagneticButton className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 text-foreground px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white/10 hover:border-accent/30 transition-all duration-500 shadow-2xl">
              <MessageCircle className="w-4 h-4" />
              Ask on WhatsApp
            </MagneticButton>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
};
