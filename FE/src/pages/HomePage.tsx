import { motion } from 'motion/react';
import { Hero } from '../components/Hero';
import { BrandMarquee } from '../components/home/BrandMarquee';
import { Services } from '../components/home/Services';
import { Industries } from '../components/home/Industries';
import { Testimonials } from '../components/home/Testimonials';
import { ContactSection } from '../components/home/ContactSection';
import { FaqSection } from '../components/home/FaqSection';
import { Features } from '../components/home/Features';
import { PortfolioShowcase } from '../components/services/PortfolioShowcase';
import { ProcessSteps } from '../components/services/ProcessSteps';
import { ImpactStats } from '../components/home/ImpactStats';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';

/**
 * Conversion-focused flow:
 * value prop → trust (clients) → what we do → proof of work → numbers →
 * why us → how we work → testimonials → objections (FAQ) → contact.
 */
export const HomePage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background text-foreground min-h-screen overflow-hidden"
    >
      <Hero />
      <BrandMarquee />

      <Services />

      <Industries />

      <Section className="bg-background">
        <Container>
          <PortfolioShowcase
            serviceType={null}
            sectionNumber="04"
            sectionTitle="Recent Work"
            featured={true}
          />
        </Container>
      </Section>

      <ImpactStats />

      <Features />

      <ProcessSteps sectionNumber="05" />

      <Testimonials />
      <FaqSection />
      <ContactSection />
    </motion.main>
  );
};
