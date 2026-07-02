import { motion } from 'motion/react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';

const stats = [
  { value: '50+', label: 'Brands Scaled' },
  { value: '150+', label: 'Projects Completed' },
  { value: '10M+', label: 'Organic Views Generated' },
  { value: '95%', label: 'Client Retention' },
];

export const ImpactStats = () => {
  return (
    <Section className="bg-accent py-20 overflow-hidden relative">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-black/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center px-4"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tighter text-black mb-2">
                {stat.value}
              </h3>
              <p className="text-black/70 font-semibold uppercase tracking-widest text-xs md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
