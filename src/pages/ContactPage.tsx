import { motion } from 'motion/react';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactInfo } from '../components/contact/ContactInfo';
import { ContactForm } from '../components/contact/ContactForm';

import { GridBackground } from '../components/ui/GridBackground';
import { BackgroundBeams } from '../components/ui/BackgroundBeams';
import { PageDetailing } from '../components/ui/PageDetailing';
import { TextCarousel } from '../components/ui/text-carousel';

export const ContactPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background text-foreground min-h-screen overflow-hidden relative pt-12"
    >
      <PageDetailing />
      <div className="fixed inset-0 z-0">
        <GridBackground className="opacity-10" />
        <BackgroundBeams className="opacity-20" />
      </div>

      <div className="relative z-10">
        <ContactHero />
        

        <ContactInfo />
        <ContactForm />
      </div>
    </motion.main>
  );
};
