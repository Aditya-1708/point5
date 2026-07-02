import { motion } from 'motion/react';
import { Users, Lightbulb, Award, Clock } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { cn } from '../../lib/utils';

const features = [
  {
    title: 'Seamless Collaboration',
    description: 'Transparent communication and feedback loops at every stage of the project.',
    icon: Users,
  },
  {
    title: 'Creative Ideas',
    description: 'Fresh, innovative approaches tailored to make your brand unforgettable.',
    icon: Lightbulb,
  },
  {
    title: '2+ Years Experience',
    description: 'Over 2 years of experience delivering innovative digital solutions.',
    icon: Award,
    extra: '99+ Happy clients',
  },
  {
    title: '7 Day Turnaround',
    description: 'Fast delivery without compromising on quality or creativity.',
    icon: Clock,
  },
];

export function Features() {
  return (
    <Section className="bg-background py-24 relative overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight leading-tight max-w-xl">
            We are offering the best solutions
          </h2>
          <p className="text-foreground/60 font-medium leading-relaxed max-w-sm text-lg md:text-right">
            We offer a full range of digital services to help your brand stand out, connect, and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={cn(
                  "relative rounded-3xl bg-[#121212] border border-white/5 p-8 flex flex-col items-center text-center group",
                  "hover:border-white/10 transition-all duration-300 hover-lift"
                )}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#C4EF17]/10 flex items-center justify-center mb-8 text-[#C4EF17] group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-auto">
                  {feature.description}
                </p>
                {feature.extra && (
                  <div className="mt-8 pt-6 border-t border-white/5 w-full">
                    <p className="text-[#C4EF17] font-bold text-sm">{feature.extra}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
