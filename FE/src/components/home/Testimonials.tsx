import { motion, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../data/content';
import { SectionLabel } from '../SectionLabel';
import { GridBackground } from '../ui/GridBackground';
import { cn } from '../../lib/utils';
import { KineticText } from '../motion/KineticText';
import { useScrollTypeLink } from '../../motion/useScrollTypeLink';

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  useScrollTypeLink(headingRef);

  const goNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.95 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80, scale: 0.95 }),
  };

  return (
    <section className="py-32 px-6 md:px-12 relative overflow-hidden bg-background">
      <GridBackground className="opacity-10" />
      
      {/* Background blobs for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <SectionLabel number="06" text="Testimonial" />
            <h2
              ref={headingRef}
              className="text-5xl md:text-7xl font-bold font-display uppercase tracking-tighter leading-none mb-6"
            >
              <KineticText as="span" className="block">
                The best reviews
              </KineticText>
              <KineticText as="span" className="block text-white/20" delay={0.05}>
                from clients
              </KineticText>
            </h2>
          </div>
        </div>

        {/* ── DESKTOP layout (unchanged) ── */}
        <div className="hidden md:flex relative min-h-[650px] items-center justify-center">
          {/* Floating Avatars */}
          <div className="absolute inset-0 pointer-events-none">
            {TESTIMONIALS.map((t, i) => {
              const angle = (i / TESTIMONIALS.length) * Math.PI * 2;
              const radiusX = 450;
              const radiusY = 280;
              const floatDelay = i * 0.5;
              
              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${Math.cos(angle) * radiusX}px - 40px)`,
                    top: `calc(50% + ${Math.sin(angle) * radiusY}px - 40px)`,
                    animation: `floatAvatar ${5 + i}s ease-in-out infinite`,
                    animationDelay: `${floatDelay}s`,
                  }}
                >
                  <div 
                    className={cn(
                      "relative rounded-full border transition-all duration-500 cursor-pointer pointer-events-auto bg-white/5",
                      i === activeIndex 
                        ? "border-accent ring-4 ring-accent/30 scale-125 z-20" 
                        : "border-white/10 opacity-40 hover:opacity-100 scale-100 grayscale hover:grayscale-0",
                      "flex items-center justify-center w-16 h-16 md:w-20 md:h-20"
                    )}
                    onClick={() => setActiveIndex(i)}
                  >
                    {t.avatar ? (
                      <img
                        src={t.avatar}
                        className="w-full h-full rounded-full object-cover p-1"
                        alt={t.author}
                      />
                    ) : (
                      <span className="text-2xl font-bold font-display text-white/50 uppercase">
                        {t.author.charAt(0)}
                      </span>
                    )}
                    {i === activeIndex && (
                      <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(196,239,23,0.4)] animate-pulse pointer-events-none" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <style>{`
            @keyframes floatAvatar {
              0%, 100% { transform: translateY(0px) translateX(0px); }
              33% { transform: translateY(-12px) translateX(8px); }
              66% { transform: translateY(-6px) translateX(-4px); }
            }
          `}</style>

          {/* Central Active Testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) goNext();
                else if (info.offset.x > 50) goPrev();
              }}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -20 }}
              className="max-w-2xl text-center relative z-10 px-6 cursor-grab active:cursor-grabbing select-none w-full flex flex-col items-center"
            >
              <motion.div
                initial={{ rotate: -10, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center mb-8"
              >
                <Quote className="w-16 h-16 text-accent fill-accent" />
              </motion.div>

              <blockquote className="text-xl md:text-3xl font-bold font-display leading-relaxed mb-10 text-foreground italic">
                "{TESTIMONIALS[activeIndex].quote}"
              </blockquote>

              <div className="flex flex-col items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-foreground font-bold text-lg">{TESTIMONIALS[activeIndex].author}</span>
                  <span className="text-foreground/40 text-sm font-bold uppercase tracking-widest mt-1">
                    Client Partner
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── MOBILE slider layout ── */}
        <div className="md:hidden">
          {/* Swipe card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) goNext();
                  else if (info.offset.x > 50) goPrev();
                }}
                className="glass rounded-3xl border border-white/8 p-8 flex flex-col items-center text-center cursor-grab active:cursor-grabbing select-none relative overflow-hidden"
              >
                {/* Accent glow top-right */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-[60px] pointer-events-none" />

                {/* Quote icon */}
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                  <Quote className="w-7 h-7 text-accent fill-accent/30" />
                </div>

                {/* Avatar / initial */}
                <div className="w-16 h-16 rounded-full bg-white/5 border-2 border-accent/30 flex items-center justify-center mb-4 overflow-hidden shadow-[0_0_20px_rgba(196,239,23,0.2)]">
                  {TESTIMONIALS[activeIndex].avatar ? (
                    <img
                      src={TESTIMONIALS[activeIndex].avatar}
                      className="w-full h-full object-cover"
                      alt={TESTIMONIALS[activeIndex].author}
                    />
                  ) : (
                    <span className="text-2xl font-bold font-display text-white/60 uppercase">
                      {TESTIMONIALS[activeIndex].author.charAt(0)}
                    </span>
                  )}
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="text-base font-semibold font-display leading-relaxed mb-6 text-foreground/90 italic">
                  "{TESTIMONIALS[activeIndex].quote}"
                </blockquote>

                {/* Author */}
                <div className="mt-auto">
                  <span className="text-foreground font-bold text-base block">{TESTIMONIALS[activeIndex].author}</span>
                  <span className="text-foreground/40 text-xs font-bold uppercase tracking-widest mt-1 block">
                    Client Partner
                  </span>
                </div>

                {/* Counter badge */}
                <div className="absolute top-5 right-5 text-[10px] font-black uppercase tracking-widest text-accent/50">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation row */}
          <div className="flex items-center justify-between mt-6 px-1">
            {/* Prev button */}
            <button
              onClick={goPrev}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-accent hover:text-background hover:border-accent transition-all duration-300 active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > activeIndex ? 1 : -1);
                    setActiveIndex(i);
                  }}
                  aria-label={`Go to review ${i + 1}`}
                  className={cn(
                    "rounded-full transition-all duration-400",
                    i === activeIndex
                      ? "w-8 h-2.5 bg-accent shadow-[0_0_8px_rgba(196,239,23,0.6)]"
                      : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                  )}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={goNext}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-accent hover:text-background hover:border-accent transition-all duration-300 active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Swipe hint */}
          <p className="text-center text-foreground/20 text-[10px] font-bold uppercase tracking-widest mt-4">
            Swipe or tap arrows to navigate
          </p>
        </div>

      </div>
    </section>
  );
};

