import { motion } from 'motion/react';
import { ServicesHero } from '../components/services/ServicesHero';
import { ServiceCards } from '../components/services/ServiceCards';
import { ServicesCTA } from '../components/services/ServicesCTA';
import { GridBackground } from '../components/ui/GridBackground';
import { PageDetailing } from '../components/ui/PageDetailing';

export const ServicesPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-background text-foreground min-h-screen relative selection:bg-accent/30"
    >
      <PageDetailing />
      <div className="fixed inset-0 z-0">
        <GridBackground className="opacity-[0.03]" />
        <div className="noise-bg fixed inset-0 opacity-[0.02]" />
      </div>

      <div className="relative z-10">
        <ServicesHero />
        <ServiceCards />
        <ServicesCTA />
      </div>
    </motion.main>
  );
};
