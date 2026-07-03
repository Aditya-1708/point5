import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../../data/content';
import { SectionLabel } from '../SectionLabel';

export const ProcessSteps = ({ sectionNumber = "07" }: { sectionNumber?: string }) => {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/4" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <SectionLabel number={sectionNumber} text="Process" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tighter text-foreground leading-none mb-5">
            A complete system, <span className="text-accent">not random posting</span>
          </h2>
          <p className="text-foreground/50 max-w-2xl mx-auto text-sm md:text-base font-medium">
            Six steps from strategy to scaling — clear, accountable, and measurable at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl border border-white/5 bg-white/[0.02] p-7 md:p-8 hover:border-accent/25 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-background bg-accent px-3 py-1.5 rounded-full">
                  Step {step.num}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/30 border border-white/8 px-3 py-1.5 rounded-full">
                  {step.duration}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold font-display mb-3 text-foreground tracking-tight">
                {step.title}
              </h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* Big ghost number */}
              <div className="absolute bottom-4 right-6 text-5xl font-display font-bold text-white/[0.04] group-hover:text-accent/10 transition-colors pointer-events-none">
                {step.num}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
