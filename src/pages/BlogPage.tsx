import { motion } from 'motion/react';
import { PageDetailing } from '../components/ui/PageDetailing';
import { SectionLabel } from '../components/SectionLabel';
import { KineticText } from '../components/motion/KineticText';
import { BLOG_POSTS } from '../data/content';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BlogPage = () => {
  return (
    <main className="bg-background text-foreground min-h-screen relative pt-32 pb-24">
      <PageDetailing />
      
      {/* Decorative background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <SectionLabel number="05" text="Our Journal" className="mb-8" />
          
          <h1 className="text-5xl md:text-8xl font-bold font-display uppercase tracking-tighter leading-none text-white">
            <KineticText as="span" className="block">
              Latest
            </KineticText>
            <KineticText as="span" className="block text-accent/80 italic" delay={0.1}>
              Thoughts
            </KineticText>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 max-w-2xl text-foreground/50 text-lg md:text-xl font-medium"
          >
            Insights, strategies, and creative perspectives from the minds at Point 5 Media Productions.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {BLOG_POSTS.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
              className="group relative flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white/[0.03] border border-white/10 group-hover:border-accent/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
              </div>
                

            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};
