import { motion } from 'motion/react';
import { SectionLabel } from '../SectionLabel';
import { InstagramEmbed } from '../ui/InstagramEmbed';

const EVENT_VIDEOS = [
  { title: "Aura Beauty Expo", tag: "Exhibition", url: "https://www.instagram.com/p/DSj0_TIj8uK/embed" },
  { title: "Aura Beauty Expo Highlights", tag: "Exhibition", url: "https://www.instagram.com/p/DSZfcXYjNdJ/embed" },
  { title: "Grand Garba Night", tag: "Cultural Night", url: "https://www.instagram.com/p/DPBaRgrjyac/embed" },
  { title: "Garba Night Energy", tag: "Cultural Night", url: "https://www.instagram.com/p/DPWRjrnjz6g/embed" },
  { title: "Garba Vibes", tag: "Cultural Night", url: "https://www.instagram.com/p/DO75jdfDq2s/embed" },
  { title: "Fit India Movement", tag: "Govt. Campaign", url: "https://www.instagram.com/p/DWgk0JlE4_7/embed" },
  { title: "Fit India Highlights", tag: "Govt. Campaign", url: "https://www.instagram.com/p/DV_KwGmEZ5k/embed" },
  { title: "Sundays on Cycle", tag: "Community Event", url: "https://www.instagram.com/p/DVGYDLhExg_/embed" },
];

const EVENT_STATS = [
  { value: "Same wk", label: "Highlight Delivery" },
  { value: "Multi-cam", label: "Coverage Crews" },
  { value: "Expos–Govt.", label: "Every Scale" },
];

export const EventVideoGrid = ({ sectionNumber = "05" }: { sectionNumber?: string }) => {
  return (
    <div className="mb-20">
      <SectionLabel number={sectionNumber} text="Proof First" />

      <div className="mb-10">
        <h3 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tight text-white mb-4">
          Watch the <span className="text-accent">energy we capture</span>
        </h3>
        <p className="text-foreground/60 text-base md:text-lg max-w-2xl mb-8">
          Real highlight films from exhibitions, cultural nights, and government
          campaigns — this is what your event will look like.
        </p>

        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 pb-2">
          {EVENT_STATS.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="text-xl md:text-2xl font-display font-bold text-accent">{stat.value}</span>
              <span className="text-foreground/45 text-[10px] font-bold uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-4 -mx-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/40">
        {EVENT_VIDEOS.map((video, i) => (
          <motion.div
            key={video.title + i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex flex-col gap-4 group w-[85vw] sm:w-[320px] md:w-[360px] snap-center sm:snap-start shrink-0"
          >
            <InstagramEmbed
              url={video.url}
              title={video.title}
              className="w-full rounded-3xl border border-white/10 hover:border-accent/40 transition-colors shadow-xl"
            />
            <div className="px-2 text-center sm:text-left">
              <span className="inline-block text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent mb-1.5">
                {video.tag}
              </span>
              <h4 className="text-lg font-bold font-display uppercase tracking-wider text-white">
                {video.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
