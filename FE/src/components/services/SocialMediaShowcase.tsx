import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionLabel } from '../SectionLabel';
import { InstagramEmbed } from '../ui/InstagramEmbed';

const SOCIAL_CATEGORIES = [
  {
    id: "hospitality",
    label: "Hospitality & Food",
    clients: [
      { 
        name: "Taste Factory",
        metric: "+180% reach", 
        desc: "Over the past year, Point 5 Media has shaped Taste Factory’s digital presence through daily social media management, creative content, and fun team-led content.", 
        url: "https://www.instagram.com/p/DTAi9o8Aa89/embed" 
      },
      { 
        name: "Hotel Broadway",
        metric: "2× enquiries", 
        desc: "Point 5 Media manages the digital presence of Hotel Broadway through consistent social media management, hospitality-focused content, engaging visuals, and brand-driven communication.", 
        url: "https://www.instagram.com/p/DQg5yO8ARnH/embed" 
      },
      { 
        name: "Heritage Kashinaama",
        metric: "+140% engagement", 
        desc: "The digital presence of Heritage Kashinaama is shaped by Point 5 media through thoughtful social media management, storytelling-driven content, and visuals that capture the culture and warmth.", 
        url: "https://www.instagram.com/p/DTk1dIXjyKI/embed" 
      },
      { 
        name: "Tandoor Villa",
        metric: "3× reel views", 
        desc: "The digital presence is shaped by Point 5 media through thoughtful social media management, storytelling-driven content, and visuals that capture the culture.", 
        url: "https://www.instagram.com/p/DIyfxf_SsWK/embed" 
      },
      { 
        name: "Tandoor Villa Catering",
        metric: "+90% saves", 
        desc: "Showcasing premium catering services with engaging storytelling, highlighting quality, scale, and culinary excellence.", 
        url: "https://www.instagram.com/p/DJMT1JSpvmR/embed" 
      },
      { 
        name: "Holy Chopsticks",
        metric: "2× followers", 
        desc: "Curated digital presence through engaging social media management, food-focused content, and visually driven storytelling that reflects the energy of the restaurant.", 
        url: "https://www.instagram.com/p/DIyfxf_SsWK/embed" 
      },
      { 
        name: "Momo Chow",
        metric: "+160% reach", 
        desc: "Vibrant, food-focused digital presence that captures the essence of street-style culinary delight.", 
        url: "https://www.instagram.com/p/DH0tSIspSak/embed" 
      },
      { 
        name: "Aman-E-Khas",
        metric: "+120% profile visits", 
        desc: "Strategic social media management and hospitality-focused creatives to build a strong and credible digital presence.", 
        url: "https://www.instagram.com/p/DWbaO6jk3nz/embed" 
      },
      { 
        name: "Banarasi Anna",
        metric: "2.5× engagement", 
        desc: "Engaging and culturally resonant food content designed to connect with South Indian cuisine lovers in the city.", 
        url: "https://www.instagram.com/p/DOD7VG2gW9b/embed" 
      },
      { 
        name: "Narayan Kothi",
        metric: "+200% reel views", 
        desc: "Highlighting the royal aesthetic and heritage hospitality experience through premium visual content.", 
        url: "https://www.instagram.com/p/DLkLvmiBZ38/embed" 
      },
      { 
        name: "Kashi Kravings",
        metric: "3× product enquiries", 
        desc: "Rooted in heritage and cultural aesthetics, Point 5 manages Kashi Kravings’ digital presence through product-focused content and visually engaging creatives.", 
        url: "https://www.instagram.com/p/DVSzwA-EoDw/embed" 
      }
    ]
  },
  {
    id: "fashion",
    label: "Fashion & Jewellery",
    clients: [
      { 
        name: "Swarnaavya",
        metric: "10k+ launch-month followers", 
        desc: "For the past one year, we have been handling the digital presence of Swarnaavya from scratch - from designing their logo to managing their social media on a daily basis.", 
        url: "https://www.instagram.com/p/DWuF9trEmm5/embed" 
      },
      { 
        name: "Sarvaga Fashions",
        metric: "2× engagement", 
        desc: "Trend-driven style content reflecting contemporary fashion sensibilities while honoring the brand's ethnic and modern roots.", 
        url: "https://www.instagram.com/p/C6bQoV8oxzd/embed" 
      },
      {
        name: "Khizar Silk Estate",
        metric: "+150% reach",
        desc: "Showcasing the timeless elegance and heritage of Banarasi silk through rich, premium social media creatives.",
        url: "https://www.instagram.com/p/DFK0SKiqvjX/embed"
      }
    ]
  },
  {
    id: "healthcare",
    label: "Healthcare & Beauty",
    clients: [
      { 
        name: "Dr Neha Sah Skin Clinic",
        metric: "2× consult enquiries", 
        desc: "Point 5 manages Dr. Neha Sah’s personal brand through informative skincare content, expert-led communication, and content that builds credibility and trust.", 
        url: "https://www.instagram.com/p/DXzCd5cEyUF/embed" 
      },
      { 
        name: "Panchsheel Hospital",
        metric: "+130% reach", 
        desc: "With a focus on awareness and credibility, Point 5 handles the digital presence through informative healthcare content and streamlined communication.", 
        url: "https://www.instagram.com/p/DVSq59iEZUF/embed" 
      },
      {
        name: "Global Diagnostic Center",
        metric: "+90% engagement",
        desc: "Handling digital presence through informative healthcare content, streamlined communication, and consistent social media management.",
        url: "https://www.instagram.com/p/DWDjq2-GqvD/embed"
      },
      { 
        name: "Looks Salon Varanasi",
        metric: "2× DM bookings", 
        desc: "Trend-driven beauty content, social media management, and visually engaging creatives that reflect the style and personality of the brand.", 
        url: "https://www.instagram.com/p/DW4R0t0j1ij/embed" 
      },
      {
        name: "Xytiles Professionals",
        metric: "+110% product queries",
        desc: "Blending aesthetics with brand-focused communication through skincare and haircare content, product-led creatives, and engaging social media management.",
        url: "https://www.instagram.com/p/DXzCd5cEyUF/embed"
      }
    ]
  },
  {
    id: "fmcg",
    label: "FMCG & Retail",
    clients: [
      { 
        name: "Magadh Delight",
        metric: "+170% engagement", 
        desc: "Built Magadh Delight’s digital presence through product-focused campaigns, market-oriented creatives, and content designed to make the brand relatable and engaging.", 
        url: "https://www.instagram.com/p/DSSLcN4EleP/embed" 
      },
      {
        name: "Sri Annapurna",
        metric: "2× post reach",
        desc: "Enhancing brand recall and consumer engagement for FMCG products through high-quality daily social media content.",
        url: "https://www.instagram.com/p/DPGyZm9DHWw/embed"
      }
    ]
  },
  {
    id: "realestate",
    label: "Real Estate & Brands",
    clients: [
      { 
        name: "Awadh Group",
        metric: "+140% profile visits", 
        desc: "Representing the scale and vision of the brand, Point 5 Media manages Awadh Group’s digital presence through real estate-focused content.", 
        url: "https://www.instagram.com/p/DWjmmizEl3b/embed" 
      },
      { 
        name: "Gungun Green Properties",
        metric: "60+ leads a quarter", 
        desc: "Through strategic social media management and property-focused creatives, we help build a strong digital presence that connects with modern real estate audiences.", 
        url: "https://www.instagram.com/p/DRPQdZmgSRm/embed" 
      },
      {
        name: "Mahajan Greens",
        metric: "2× venue enquiries",
        desc: "Designed to reflect the elegance and scale of the venue, Point 5 Media manages Mahajan Greens’ digital presence through wedding-focused content and venue highlights.",
        url: "https://www.instagram.com/p/DWjmmizEl3b/embed"
      },
      {
        name: "H K Art",
        metric: "+120% engagement",
        desc: "Showcasing creativity through visually refined content, Point 5 Media shapes HK Art’s digital presence with design-focused creatives.",
        url: "https://www.instagram.com/p/DRmhxjzCC6z/embed"
      },
      {
        name: "Kidzee Sarnath",
        metric: "3× admission queries",
        desc: "Blending creativity with parent-focused communication, Point 5 Media shapes Kidzee Sarnath’s digital presence through engaging content and activity highlights.",
        url: "https://www.instagram.com/p/DVn_t8RkmX7/embed"
      }
    ]
  }
];

const SHOWCASE_STATS = [
  { value: "25+", label: "Pages Managed Daily" },
  { value: "10M+", label: "Organic Views" },
  { value: "5", label: "Industries" },
  { value: "95%", label: "Client Retention" },
];

export const SocialMediaShowcase = ({ sectionNumber = "05" }: { sectionNumber?: string }) => {
  const [activeTab, setActiveTab] = useState(SOCIAL_CATEGORIES[0].id);

  const activeCategory = SOCIAL_CATEGORIES.find(c => c.id === activeTab) || SOCIAL_CATEGORIES[0];

  return (
    <div className="mb-20">
      <SectionLabel number={sectionNumber} text="Proof First" />

      <div className="mb-10">
        <h3 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tight text-white mb-4">
          Driving Impact <span className="text-accent">&amp; Engagement</span>
        </h3>
        <p className="text-foreground/60 text-base md:text-lg max-w-2xl mb-8">
          Don't take our word for it — watch the actual content we run for
          clients, and what it did for them.
        </p>

        {/* Stat strip — the numbers behind the feed */}
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 pb-2">
          {SHOWCASE_STATS.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="text-xl md:text-2xl font-display font-bold text-accent">{stat.value}</span>
              <span className="text-foreground/45 text-[10px] font-bold uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {SOCIAL_CATEGORIES.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
              activeTab === category.id 
                ? 'bg-accent text-background shadow-[0_0_20px_rgba(196,239,23,0.3)]' 
                : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Showcase Carousel */}
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-4 -mx-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/40">
        <AnimatePresence>
          {activeCategory.clients.map((client, i) => (
            <motion.div
              key={client.name + activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="flex flex-col gap-4 shrink-0 snap-center sm:snap-start w-[85vw] sm:w-[280px]"
            >
              {/* Cropped reel — video only, no Instagram chrome */}
              <InstagramEmbed
                url={client.url}
                title={client.name}
                className="mx-auto w-full max-w-[280px] rounded-3xl border border-white/10 hover:border-accent/40 transition-colors shadow-2xl"
              />

              {/* Client Info — result first */}
              <div className="text-center md:text-left px-2">
                <div className="inline-flex items-center gap-2 mb-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-accent text-[11px] font-black uppercase tracking-wider">
                    {client.metric}
                  </span>
                </div>
                <h4 className="text-lg font-bold font-display uppercase tracking-wider text-white mb-1">
                  {client.name}
                </h4>
                <p className="text-xs text-foreground/50 leading-relaxed line-clamp-3">
                  {client.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
