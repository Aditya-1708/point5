import { motion } from 'motion/react';
import { useState, type FormEvent, type ChangeEvent } from 'react';
import {
  Send,
  CheckCircle,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Lock,
} from 'lucide-react';
import { MagneticButton } from '../MagneticButton';
import { createContact, type CreateContactPayload } from '../../api/contact';
import { COMPANY, SERVICES, BUSINESS_TYPES } from '../../data/content';

const NEXT_STEPS = [
  { title: 'We reply within 4 hours', desc: 'A real person from our team — not an auto-responder — during working hours.' },
  { title: 'Free 20-min discovery call', desc: 'We understand your business, audience, and what growth looks like for you.' },
  { title: 'Plan & quote in 48 hours', desc: 'A clear, no-obligation proposal. You decide if we move forward.' },
];

const inputClass =
  'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm font-medium text-white placeholder:text-foreground/25 focus:outline-none focus:border-accent transition-colors';

const labelClass =
  'block text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/50 mb-2';

const EMPTY_FORM = {
  fullName: '',
  phoneNumber: '',
  email: '',
  businessType: '',
  service: '',
  projectInfo: '',
};

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState(EMPTY_FORM);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');

      const payload: CreateContactPayload = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phoneNumber: formData.phoneNumber.trim() || undefined,
        businessType: formData.businessType || undefined,
        subject: formData.service
          ? `Enquiry: ${formData.service}`
          : 'General Enquiry — Contact Page',
        projectInfo: formData.projectInfo.trim() || undefined,
      };

      const response = await createContact(payload);
      if (response.success) {
        setSubmitted(true);
        setFormData(EMPTY_FORM);
      }
    } catch (err: any) {
      setError(
        err?.response?.data?.error ||
          err?.response?.data?.message ||
          'Something went wrong. Try WhatsApp instead — we reply fast there.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 md:px-12 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">

        {/* ── Lead form ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-3 bg-white/[0.03] border border-white/8 rounded-3xl p-7 md:p-10 shadow-2xl"
        >
          {submitted ? (
            <div className="text-center py-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.1 }}
                className="w-20 h-20 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-10 h-10 text-accent" />
              </motion.div>
              <h3 className="text-3xl font-bold font-display uppercase tracking-tighter text-white mb-3">
                Request received!
              </h3>
              <p className="text-foreground/55 font-medium max-w-md mx-auto mb-8">
                We'll reach out within 4 working hours (Mon–Sat, 10 AM – 8 PM).
                Keep an eye on your phone and inbox.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={COMPANY.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-background px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_25px_rgba(196,239,23,0.4)] transition-shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  Can't wait? WhatsApp us
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-foreground/50 hover:text-accent text-xs font-bold uppercase tracking-widest transition-colors px-4 py-3"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold font-display uppercase tracking-tighter text-white mb-2">
                  Get your free <span className="text-accent">growth plan</span>
                </h2>
                <p className="text-foreground/50 text-sm font-medium">
                  Takes under a minute. We'll do the thinking — you'll get a plan.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>Your Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full name"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className={labelClass}>Phone / WhatsApp *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-email" className={labelClass}>Email *</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@business.com"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-business" className={labelClass}>Business Type</label>
                    <select
                      id="contact-business"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer [&>option]:bg-[#0D0D0D] ${formData.businessType ? '' : 'text-foreground/25'}`}
                    >
                      <option value="">Select your industry</option>
                      {BUSINESS_TYPES.map((type) => (
                        <option key={type} value={type} className="text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className={labelClass}>What do you need help with?</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none cursor-pointer [&>option]:bg-[#0D0D0D] ${formData.service ? '' : 'text-foreground/25'}`}
                  >
                    <option value="">Not sure yet — help me decide</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.title} className="text-white">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>Anything else we should know?</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    name="projectInfo"
                    value={formData.projectInfo}
                    onChange={handleChange}
                    placeholder="Your goals, timelines, current struggles… (optional)"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm font-medium">{error}</p>
                )}

                <MagneticButton
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent text-background font-bold uppercase tracking-[0.2em] py-4 rounded-xl hover:shadow-[0_0_30px_rgba(196,239,23,0.4)] transition-all flex items-center justify-center gap-3 text-sm shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {loading ? 'Sending…' : 'Get My Free Growth Plan'}
                </MagneticButton>

                <p className="flex items-center justify-center gap-1.5 text-foreground/35 text-[11px] font-medium">
                  <Lock className="w-3 h-3" />
                  We only use your details for this enquiry. No spam, ever.
                </p>
              </form>
            </>
          )}
        </motion.div>

        {/* ── Fast lanes + reassurance rail ─────────────────── */}
        <div className="lg:col-span-2 space-y-6">

          {/* Talk right now */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/[0.03] border border-white/8 rounded-3xl p-7 shadow-2xl"
          >
            <h3 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-1">
              Prefer to talk right now?
            </h3>
            <p className="text-foreground/45 text-xs font-medium mb-5">
              Fastest during business hours — WhatsApp gets replies in minutes.
            </p>

            <a
              href={COMPANY.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full bg-accent text-background py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_25px_rgba(196,239,23,0.4)] transition-shadow mb-3"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>

            <div className="space-y-2">
              {COMPANY.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-foreground/70 hover:text-accent hover:border-accent/30 transition-colors text-sm font-medium"
                >
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  {phone}
                </a>
              ))}
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-foreground/70 hover:text-accent hover:border-accent/30 transition-colors text-sm font-medium break-all"
              >
                <Mail className="w-4 h-4 text-accent shrink-0" />
                {COMPANY.email}
              </a>
            </div>
          </motion.div>

          {/* What happens next */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/[0.03] border border-white/8 rounded-3xl p-7 shadow-2xl"
          >
            <h3 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-5">
              What happens next
            </h3>
            <div className="space-y-5">
              {NEXT_STEPS.map((step, i) => (
                <div key={step.title} className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center text-accent text-xs font-display font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-white text-sm font-bold mb-0.5">{step.title}</p>
                    <p className="text-foreground/45 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Office */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/[0.03] border border-white/8 rounded-3xl p-7 shadow-2xl"
          >
            <h3 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-5">
              Visit the studio
            </h3>
            <div className="flex gap-3 mb-4">
              <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <p className="text-foreground/55 text-sm font-medium leading-relaxed">
                {COMPANY.address}
              </p>
            </div>
            <div className="flex gap-3 mb-5">
              <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <p className="text-foreground/55 text-sm font-medium">{COMPANY.hours}</p>
            </div>
            <a
              href={`https://www.google.com/maps?q=${encodeURIComponent(COMPANY.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent text-[11px] font-bold uppercase tracking-widest hover:gap-3 transition-all"
            >
              Open in Google Maps
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
