import { motion } from 'motion/react';
import { BRAND_LOGOS } from '../../data/content';

export const BrandMarquee = () => {
  const logos = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section className="py-24 border-y border-white/5 bg-background overflow-hidden relative">
      {/* Background glow behind marquee matching reference */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="flex flex-col gap-12">
        <div className="px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-foreground/30 text-[10px] font-bold uppercase tracking-[0.5em] text-center"
          >
            Trusted by global brands & industry leaders
          </motion.p>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Gradient edges for seamless transition */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex whitespace-nowrap">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-24 md:gap-48 pr-24 md:pr-48"
            >
              {logos.map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex-shrink-0 group"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-16 md:h-24 lg:h-32 w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
