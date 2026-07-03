import { motion } from "motion/react";
import { CheckCircle, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { COMPANY, BUSINESS_TYPES } from "@/src/data/content";
import { Container } from "@/src/components/layout/Container";
import { Section } from "@/src/components/layout/Section";
import axiosInstance from "@/src/lib/axiosInstance";

const NEXT_STEPS = [
  {
    num: "01",
    title: "We reply within 4 hours",
    desc: "Tell us about your brand and goals — a real person from the team gets back to you the same day.",
  },
  {
    num: "02",
    title: "Free discovery call",
    desc: "A 30-minute conversation to understand your audience, competition, and budget. No commitments.",
  },
  {
    num: "03",
    title: "Proposal within 48 hours",
    desc: "A clear plan with scope, deliverables, timelines, and pricing — so you know exactly what you're getting.",
  },
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const form = e.currentTarget;

      const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
      const businessType = (form.elements.namedItem("businessType") as HTMLSelectElement).value;
      const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

      const formData = {
        fullName: (form.elements.namedItem("name") as HTMLInputElement).value,

        email: (form.elements.namedItem("email") as HTMLInputElement).value,

        subject: "Free Consultation Request",

        projectInfo: `Business type: ${businessType} | Phone: ${phone}${message ? ` | ${message}` : ""}`,
      };

      const response = await axiosInstance.post("/contacts", formData);

      if (response.data.success) {
        setSubmitted(true);

        form.reset();

        window.setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      }
    } catch (err: any) {
      setError(
        err?.response?.data?.error ||
          err?.response?.data?.message ||
          "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <Section className="bg-background overflow-hidden">
      {/* Behind-the-scenes backdrop — production-crew feel behind the contact panel */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="/bts/videographer.jpg"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-[0.15] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
      </div>
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0D0D0D] border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest">
                  Response time: 4 hours
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-3 tracking-tighter uppercase leading-none">
                Get a free <br /> consultation
              </h3>
              <p className="text-white/50 text-sm font-medium mb-8">
                Share your details and get a practical growth plan for your
                brand — free, within 48 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-accent mb-4" />
                  <p className="text-white font-bold text-lg mb-1">Request received!</p>
                  <p className="text-white/50 text-sm">We'll get back to you within 4 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-white/20 font-medium"
                    required
                    name="name"
                    autoComplete="name"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-white/20 font-medium"
                    required
                    name="phone"
                    autoComplete="tel"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-white/20 font-medium"
                    required
                    name="email"
                    autoComplete="email"
                  />
                  <select
                    name="businessType"
                    required
                    defaultValue=""
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-accent transition-colors font-medium appearance-none cursor-pointer [&>option]:bg-[#0D0D0D]"
                  >
                    <option value="" disabled className="text-white/20">
                      Select business type
                    </option>
                    {BUSINESS_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <textarea
                    placeholder="Anything else you want to share? (optional)"
                    rows={2}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-white/20 font-medium resize-none"
                    name="message"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-accent text-background px-6 py-4 rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-[0_0_25px_rgba(196,239,23,0.4)] transition-all disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Get My Free Growth Plan"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
              {error && (
                <p className="text-red-400 text-sm font-medium">{error}</p>
              )}

              <div className="mt-10 pt-8 border-t border-white/5">
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3">
                  Or reach us directly
                </p>
                <div className="space-y-2 text-sm text-white/70 font-medium">
                  <div>{COMPANY.email}</div>
                  <div>{COMPANY.phones.join(" · ")}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column — what happens after you reach out */}
          <motion.div
            className="lg:col-span-7 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs mb-4">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Start Your Project
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-display uppercase tracking-tighter leading-none text-white mb-6">
              Ready to grow
              <span className="block text-white/20">your brand?</span>
            </h2>
            <p className="text-foreground/60 text-base md:text-lg leading-relaxed font-medium max-w-xl mb-12">
              Whether you need a full social media team, a brand film, or a
              campaign that actually converts — here's how we get started
              together.
            </p>

            <div className="space-y-6 mb-12">
              {NEXT_STEPS.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex items-start gap-6 bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8 hover:border-accent/20 transition-colors duration-500"
                >
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-display font-bold">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold font-display text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-foreground/50 text-sm md:text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Direct channels for visitors who'd rather skip the form */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={COMPANY.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-accent text-background px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(196,239,23,0.4)] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
              <a
                href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 hover:border-accent/30 transition-all"
              >
                <Phone className="w-4 h-4" />
                {COMPANY.phones[0]}
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
