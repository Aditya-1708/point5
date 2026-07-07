import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SERVICES, COMPANY } from "../../data/content";
import { SectionLabel } from "../SectionLabel";
import { MagneticButton } from "../MagneticButton";
import {
  Palette,
  Share2,
  TrendingUp,
  Camera,
  Heart,
  Video,
  Monitor,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  Plus,
  Minus,
  type LucideIcon,
} from "lucide-react";
import { GridBackground } from "../ui/GridBackground";
import { PortfolioShowcase } from "./PortfolioShowcase";
import { SocialMediaShowcase } from "./SocialMediaShowcase";
import { EventVideoGrid } from "./EventVideoGrid";
import { ImpactHighlights } from "./ImpactHighlights";
import { PageDetailing } from "../ui/PageDetailing";

const ICONS: Record<string, LucideIcon> = { Palette, Share2, TrendingUp, Camera, Heart, Video, Monitor };

export const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-display mb-4 text-foreground uppercase tracking-tighter">
            Service Not Found
          </h1>
          <Link
            to="/services"
            className="text-accent font-bold uppercase tracking-widest hover:underline"
          >
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = ICONS[service.icon] || Palette;
  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  return (
    <div className="bg-background text-foreground min-h-screen relative overflow-hidden">
      <PageDetailing />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GridBackground className="opacity-[0.03]" />
      </div>

      <div className="relative z-10">
        {/* ══════════════ HERO ══════════════ */}
        <section className="relative pt-36 md:pt-40 pb-16 px-6 md:px-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-accent/40 mb-10">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="w-4 h-[1px] bg-accent/20" />
              <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
              <span className="w-4 h-[1px] bg-accent/20" />
              <span className="text-foreground/80">{service.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left — pitch */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <span className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/15 flex items-center justify-center text-accent">
                    <Icon className="w-6 h-6" />
                  </span>
                  <span className="text-accent/80 text-[11px] font-bold uppercase tracking-[0.25em]">
                    Best for · {service.bestFor}
                  </span>
                  {service.popular && (
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-accent text-background shadow-[0_0_15px_rgba(196,239,23,0.4)]">
                      Client Favorite
                    </span>
                  )}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl md:text-6xl font-bold font-display uppercase tracking-tighter leading-[0.95] mb-5"
                >
                  {service.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-accent text-lg md:text-2xl font-display font-bold tracking-tight mb-6"
                >
                  {service.heroTagline}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-foreground/60 text-base md:text-lg leading-relaxed font-medium max-w-xl mb-9"
                >
                  {service.fullDesc}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap items-center gap-4 mb-10"
                >
                  <Link to="/contact">
                    <MagneticButton className="inline-flex items-center gap-3 bg-accent text-background px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(196,239,23,0.5)] transition-all duration-500 group shadow-2xl">
                      <span className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-accent transition-transform group-hover:rotate-45">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      Get a Free Quote
                    </MagneticButton>
                  </Link>
                  <a href={COMPANY.socials.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MagneticButton className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-foreground px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white/10 hover:border-accent/30 transition-all duration-500">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Us
                    </MagneticButton>
                  </a>
                </motion.div>

                {/* Proof chips */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap items-center gap-x-10 gap-y-4 pt-7 border-t border-white/5"
                >
                  {service.stats.map((stat) => (
                    <div key={stat.label} className="flex items-baseline gap-2">
                      <span className="text-xl md:text-2xl font-display font-bold text-accent">{stat.value}</span>
                      <span className="text-foreground/45 text-[10px] font-bold uppercase tracking-widest">{stat.label}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right — service image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 relative"
              >
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)] aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">
                      Shot &amp; produced in-house
                    </span>
                  </div>
                </div>
                {/* Accent frame offset */}
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-[2rem] border border-accent/15 -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════ MAIN + SIDEBAR ══════════════ */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* ── Main column ── */}
              <div className="lg:col-span-8">
                {/* Proof first — visitors believe work, not claims.
                    Each service shows the visual format that sells it best. */}
                {service.slug === "social-media-management" ? (
                  <SocialMediaShowcase sectionNumber="01" />
                ) : service.slug === "event-photography-videography" ? (
                  <EventVideoGrid sectionNumber="01" />
                ) : service.impactCases?.length ? (
                  <ImpactHighlights service={service} sectionNumber="01" />
                ) : (
                  <PortfolioShowcase
                    serviceType={service.serviceType}
                    sectionNumber="01"
                    sectionTitle="See The Work First"
                  />
                )}

                {/* Outcomes */}
                <div className="mb-20">
                  <SectionLabel number="02" text="Outcomes" />
                  <h2 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tighter leading-none mt-4 mb-10">
                    What you <span className="text-accent">walk away with</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {service.outcomes.map((outcome, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ delay: (i % 2) * 0.08, duration: 0.5 }}
                        className="flex items-start gap-4 rounded-3xl border border-white/5 bg-white/[0.02] p-6 hover:border-accent/20 transition-colors duration-300"
                      >
                        <span className="flex-shrink-0 w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-accent" />
                        </span>
                        <p className="text-foreground/75 text-sm md:text-[15px] leading-relaxed font-medium">
                          {outcome}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* What's included */}
                {service.features.length > 0 && (
                  <div className="mb-20">
                    <SectionLabel number="03" text="What's Included" />
                    <div className="flex flex-wrap gap-3 mt-8">
                      {service.features.map((feature, i) => (
                        <motion.span
                          key={feature}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/8 bg-white/[0.03] text-xs font-bold uppercase tracking-wider text-foreground/70"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}

                {/* How it works */}
                <div className="mb-20">
                  <SectionLabel number="04" text="How It Works" />
                  <h2 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tighter leading-none mt-4 mb-10">
                    Simple, <span className="text-accent">start to finish</span>
                  </h2>
                  <div className="relative">
                    {/* Connector line */}
                    <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent hidden md:block" />
                    <div className="space-y-4">
                      {service.steps.map((step, i) => (
                        <motion.div
                          key={step.title}
                          initial={{ opacity: 0, x: -16 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ delay: i * 0.08, duration: 0.5 }}
                          className="relative flex items-start gap-5 rounded-3xl border border-white/5 bg-white/[0.02] p-6 md:p-7 hover:border-accent/20 transition-colors duration-300 md:ml-0"
                        >
                          <span className="flex-shrink-0 w-12 h-12 rounded-full bg-background border border-accent/30 flex items-center justify-center text-accent font-display font-bold relative z-10">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <h4 className="text-base md:text-lg font-bold font-display text-foreground mb-1.5 tracking-tight">
                              {step.title}
                            </h4>
                            <p className="text-foreground/50 text-sm leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* FAQs */}
                <div className="mb-8">
                  <SectionLabel number="05" text="Common Questions" />
                  <div className="space-y-3 mt-8">
                    {service.faqs.map((faq, i) => (
                      <div
                        key={i}
                        className={`rounded-3xl border transition-all duration-300 ${
                          openFaq === i
                            ? "bg-[#0D0D0D] border-accent/20"
                            : "bg-white/[0.02] border-white/5 hover:border-white/10"
                        }`}
                      >
                        <button
                          type="button"
                          className="w-full flex items-center justify-between gap-4 p-6 text-left"
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        >
                          <span className="text-sm md:text-base font-bold font-display text-foreground">
                            {faq.question}
                          </span>
                          <span
                            className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                              openFaq === i ? "bg-accent text-background" : "bg-white/5 text-white/40"
                            }`}
                          >
                            {openFaq === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                          </span>
                        </button>
                        <AnimatePresence>
                          {openFaq === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <p className="px-6 pb-6 text-foreground/55 text-sm leading-relaxed">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Sidebar ── */}
              <div className="lg:col-span-4">
                <div className="sticky top-28 space-y-8">
                  {/* Quote card */}
                  <div className="rounded-[2rem] border border-accent/15 bg-gradient-to-b from-accent/[0.07] to-transparent p-8">
                    <div className="flex items-center gap-2 mb-5">
                      <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                      <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">
                        We reply within 4 hours
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold font-display uppercase tracking-tight leading-tight mb-3">
                      Get a quote for your project
                    </h3>
                    <p className="text-foreground/50 text-sm leading-relaxed mb-7">
                      Free consultation, custom proposal within 48 hours, no
                      lock-in.
                    </p>
                    <div className="space-y-3">
                      <Link
                        to="/contact"
                        className="w-full inline-flex items-center justify-center gap-2 bg-accent text-background px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_25px_rgba(196,239,23,0.4)] transition-all"
                      >
                        Get Free Consultation
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href={COMPANY.socials.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 hover:border-accent/30 transition-all"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                      <a
                        href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`}
                        className="w-full inline-flex items-center justify-center gap-2 text-foreground/50 hover:text-accent px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        {COMPANY.phones[0]}
                      </a>
                    </div>
                  </div>

                  {/* Other services */}
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30 mb-6 flex items-center gap-3">
                      <span className="w-8 h-[1px] bg-foreground/20" />
                      Explore Other Services
                    </h3>
                    <div className="space-y-2.5">
                      {otherServices.map((s) => {
                        const SIcon = ICONS[s.icon] || Palette;
                        return (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-accent/25 hover:bg-white/[0.04] transition-all group"
                          >
                            <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                              <SIcon className="w-5 h-5" />
                            </span>
                            <span className="flex-1 text-xs font-bold uppercase tracking-wider text-foreground/55 group-hover:text-foreground transition-colors leading-snug">
                              {s.title}
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-foreground/25 group-hover:text-accent transition-colors flex-shrink-0" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ══════════════ FINAL CTA ══════════════ */}
        <section className="py-20 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/8 blur-[130px] rounded-full pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tighter leading-none mb-5">
                Ready to start your{" "}
                <span className="text-accent">{service.title.toLowerCase()}</span>{" "}
                project?
              </h2>
              <p className="text-foreground/55 text-base md:text-lg font-medium max-w-xl mx-auto mb-9">
                Tell us your goals — we'll reply within 4 hours with next steps
                and an honest take on what fits your budget.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact">
                  <MagneticButton className="inline-flex items-center gap-3 bg-accent text-background px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(196,239,23,0.5)] transition-all duration-500 group shadow-2xl">
                    <span className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-accent transition-transform group-hover:rotate-45">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    Start Your Project
                  </MagneticButton>
                </Link>
                <a href={COMPANY.socials.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MagneticButton className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-foreground px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white/10 hover:border-accent/30 transition-all duration-500">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </MagneticButton>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};
