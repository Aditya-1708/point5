import { motion } from 'motion/react';
import { SectionLabel } from '../SectionLabel';
import { TextReveal } from '../TextReveal';
import { Target, Eye, Handshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import { COMPANY, MISSION_CARDS, FOUNDERS } from '../../data/content';
import { GlareCard } from '../ui/glare-card';

const ICONS: Record<string, any> = { Target, Eye, Handshake };

export const AboutIntro = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="01" text="About Us" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mt-12 mb-24">
          {/* Left Column - Text */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tighter leading-tight mb-8">
                <TextReveal>Elevating brands through digital design.</TextReveal>
              </h2>

              <div className="space-y-6">
                {COMPANY.aboutDescription.split('\n\n').map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="text-foreground/60 text-lg md:text-xl leading-relaxed"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-10"
              >
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-3 text-accent font-bold uppercase tracking-widest hover:gap-5 transition-all group"
                >
                  Get in touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Mission Cards with 3D Effect */}
          <div className="grid grid-cols-1 gap-4">
            {MISSION_CARDS.map((card, i) => {
              const Icon = ICONS[card.icon] || Target;
              return (
                <CardContainer key={card.title} className="inter-var w-full py-0">
                  <CardBody className="relative group/card bg-white/[0.02] border border-white/5 w-full h-auto rounded-3xl p-8 md:p-10 hover:border-accent/20 transition-all">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <CardItem translateZ="50" className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover/card:bg-accent group-hover/card:text-black transition-all shadow-xl">
                        <Icon className="w-8 h-8" />
                      </CardItem>
                      <div className="flex-1">
                        <CardItem translateZ="60" className="text-2xl font-bold font-display mb-3 group-hover/card:text-accent transition-colors">
                          {card.title}
                        </CardItem>
                        <CardItem translateZ="40" className="text-foreground/50 text-lg leading-relaxed">
                          {card.desc}
                        </CardItem>
                      </div>
                    </div>
                    
                    {/* Corner detailing */}
                    <div className="absolute top-4 right-4 opacity-10 group-hover/card:opacity-30 transition-opacity">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-accent">0{i+1}</div>
                    </div>
                  </CardBody>
                </CardContainer>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
