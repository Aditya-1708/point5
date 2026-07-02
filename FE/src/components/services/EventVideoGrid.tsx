import { motion } from 'motion/react';
import { SectionLabel } from '../SectionLabel';

const EVENT_VIDEOS = [
  { title: "Aura Beauty Expo", url: "https://www.instagram.com/p/DSj0_TIj8uK/embed" },
  { title: "Aura Beauty Expo Highlights", url: "https://www.instagram.com/p/DSZfcXYjNdJ/embed" },
  { title: "Grand Garba Night", url: "https://www.instagram.com/p/DPBaRgrjyac/embed" },
  { title: "Garba Night Energy", url: "https://www.instagram.com/p/DPWRjrnjz6g/embed" },
  { title: "Garba Vibes", url: "https://www.instagram.com/p/DO75jdfDq2s/embed" },
  { title: "Fit India Movement", url: "https://www.instagram.com/p/DWgk0JlE4_7/embed" },
  { title: "Fit India Highlights", url: "https://www.instagram.com/p/DV_KwGmEZ5k/embed" },
  { title: "Sundays on Cycle", url: "https://www.instagram.com/p/DVGYDLhExg_/embed" },
];

export const EventVideoGrid = () => {
  return (
    <div className="mt-32 pt-20 border-t border-white/5">
      <SectionLabel number="05" text="Event Highlights" />
      
      <div className="mb-12">
        <h3 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tight text-white mb-4">
          Capturing the Energy
        </h3>
        <p className="text-foreground/60 text-lg max-w-2xl">
          From large-scale exhibitions to high-energy cultural nights, we capture the essence, scale, and emotion of every event.
        </p>
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
            <div className="relative w-full aspect-[9/16] bg-black rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all shadow-xl">
              {/* Instagram Embed Container */}
              <iframe 
                src={video.url} 
                className="w-full h-[105%] border-none absolute top-0 left-0 bg-black"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media"
                title={video.title}
                style={{ top: '-1px' }}
              />
            </div>
            <div className="px-2 text-center sm:text-left">
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
