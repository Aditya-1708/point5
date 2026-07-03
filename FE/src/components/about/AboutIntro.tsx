import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Target, Eye, ArrowRight } from 'lucide-react';
import { SectionLabel } from '../SectionLabel';
import { TextReveal } from '../TextReveal';
import { ABOUT_STORY, MISSION_CARDS } from '../../data/content';

export const AboutIntro = () => {
  const mission = MISSION_CARDS[0];
  const vision = MISSION_CARDS[1];

  return (
    <section className="py-24 px-6 md:px-12 relative bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="01" text="Our Story" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start mt-10">
          {/* Left — the founding story */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tighter leading-tight mb-8">
              <TextReveal>{ABOUT_STORY.heading}</TextReveal>
            </h2>

            <div className="space-y-6 mb-10">
              {ABOUT_STORY.paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="text-foreground/60 text-base md:text-lg leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Mission callout */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="border-l-2 border-accent bg-accent/5 rounded-r-2xl p-6 md:p-8 mb-10"
            >
              <p className="text-foreground/85 text-base md:text-lg leading-relaxed font-medium">
                {ABOUT_STORY.missionCallout}
              </p>
              <footer className="mt-4 text-accent text-xs font-bold uppercase tracking-widest">
                — Sumedha Pathak, Founder &amp; CEO
              </footer>
            </motion.blockquote>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 text-accent font-bold uppercase tracking-widest text-xs hover:gap-5 transition-all"
            >
              Work with us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right — mission & vision, stated plainly */}
          <div className="flex flex-col gap-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-10 hover:border-accent/20 transition-colors"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
                  Our Mission
                </h3>
              </div>
              <p className="text-foreground/70 text-lg md:text-xl leading-relaxed font-medium">
                {mission.desc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-10 hover:border-accent/20 transition-colors"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
                  Our Vision
                </h3>
              </div>
              <p className="text-foreground/70 text-lg md:text-xl leading-relaxed font-medium">
                {vision.desc}
              </p>
            </motion.div>

            {/* BTS image card — real production feel instead of abstract art */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl overflow-hidden border border-white/5 relative aspect-[16/9]"
            >
              <img
                src="/bts/videographer.jpg"
                alt="Point 5 Media crew on set"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
                On set — every frame in-house
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
