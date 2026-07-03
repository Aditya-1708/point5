import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Cover } from '../ui/cover';

export const AboutHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-start md:items-center overflow-hidden pt-36 md:pt-32 pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Left Content (Now Centered) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {/* Breadcrumbs */}
            <nav className="flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-accent/40 mb-12">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="w-4 h-[1px] bg-accent/20" />
              <span className="text-foreground/80">About Us</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16"
            >
              <Cover containerClassName="w-full py-12 md:py-20 bg-white/[0.01] border-y border-white/5">
                <h1 className="text-[12vw] md:text-8xl lg:text-[9rem] font-bold font-display tracking-tighter text-white leading-[0.8] uppercase">
                  The team behind <br /> <span className="text-accent italic">the stories</span>
                </h1>
              </Cover>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <p className="text-foreground/50 text-lg md:text-xl leading-relaxed font-medium mb-16">
                Point 5 Media is a Varanasi-based media production and digital
                marketing agency. Since 2022, we've helped 50+ brands get seen,
                remembered, and chosen — with films, campaigns, and social media
                that actually convert.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 w-full px-4">
                <div className="flex flex-col items-center text-center">
                  <span className="text-3xl font-bold text-white tracking-tighter">03+</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent font-bold mt-1 text-center">Years Experience</span>
                </div>
                <div className="hidden sm:block w-[1px] h-12 bg-white/10" />
                <div className="flex flex-col items-center text-center">
                  <span className="text-3xl font-bold text-white tracking-tighter">50+</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent font-bold mt-1 text-center">Global Brands</span>
                </div>
                <div className="hidden sm:block w-[1px] h-12 bg-white/10" />
                <div className="flex flex-col items-center text-center">
                  <span className="text-3xl font-bold text-white tracking-tighter">24/7</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent font-bold mt-1 text-center">Creative Support</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
