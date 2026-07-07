import { motion } from 'motion/react';
import { Instagram, Facebook, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { COMPANY } from '../../data/content';

const PROOF_STATS = [
  { value: '50+', label: 'Brands Served' },
  { value: '3+', label: 'Years of Craft' },
  { value: '25+', label: 'Pages Managed Daily' },
  { value: '10M+', label: 'Organic Views' },
];

const SOCIAL_LINKS = [
  { icon: Instagram, href: COMPANY.socials.instagram, label: 'Instagram' },
  { icon: Linkedin, href: COMPANY.socials.linkedin, label: 'LinkedIn' },
  { icon: Facebook, href: COMPANY.socials.facebook, label: 'Facebook' },
  { icon: Twitter, href: COMPANY.socials.twitter, label: 'Twitter' },
  { icon: MessageCircle, href: COMPANY.socials.whatsapp, label: 'WhatsApp' },
];

export const ContactInfo = () => {
  return (
    <section className="px-6 md:px-12 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto rounded-3xl border border-white/8 bg-white/[0.02] px-8 py-8 md:px-12 md:py-10 flex flex-col lg:flex-row items-center justify-between gap-8"
      >
        <div className="grid grid-cols-2 md:flex md:flex-wrap items-center gap-x-12 gap-y-6">
          {PROOF_STATS.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-2xl md:text-3xl font-display font-bold text-accent leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-foreground/45 text-[10px] font-bold uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center lg:items-end gap-3">
          <p className="text-foreground/40 text-[11px] font-bold uppercase tracking-widest">
            See our daily work
          </p>
          <div className="flex items-center gap-2.5">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-foreground/60 hover:text-background hover:bg-accent hover:border-accent transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
