import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { viewportOnce } from '../utils/motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ScrollText from '../components/ui/ScrollText.jsx';
import { CardHoverEffect } from '../components/ui/CardHoverEffect.jsx';

const ease = [0.22, 1, 0.36, 1];
const DOT_BG = { backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.13) 1.5px, transparent 1.5px)', backgroundSize: '26px 26px' };

const CAPABILITIES = [
  { num: '01', title: 'Application Modernization & Digital Delivery', desc: 'Migrate legacy systems, re-platform monoliths to microservices, and accelerate digital product delivery with experienced engineering teams.', icon: AppIcon },
  { num: '02', title: 'Data Engineering & Data Platforms', desc: 'Design and build modern data pipelines, lakehouse architectures, and data platform foundations that are reliable, scalable, and governed.', icon: DataIcon },
  { num: '03', title: 'Analytics, AI/ML Enablement', desc: 'Operationalize analytics and bring AI/ML models from experimentation to production with the right tooling, architecture, and talent.', icon: AiIcon },
  { num: '04', title: 'Cloud & Data Modernization', desc: 'Migrate, optimize, and modernize cloud and data environments—reducing cost, improving reliability, and increasing deployment velocity.', icon: CloudIcon },
];

const DELIVERY = [
  { step: '01', title: 'Discovery & Scoping', desc: 'We align on outcomes, constraints, and success metrics before any work begins—no surprises.' },
  { step: '02', title: 'Team Assembly', desc: 'A curated delivery team is assembled from our specialist network, matched to your stack and timeline.' },
  { step: '03', title: 'Governed Delivery', desc: 'Structured sprint cadences, status reporting, and clear escalation paths keep delivery on track.' },
  { step: '04', title: 'Outcomes & Handoff', desc: 'We deliver documented, production-ready outcomes with knowledge transfer built into every engagement.' },
];

const OUTCOMES = [
  { client: 'Financial Services Organization', tag: 'App Modernization', result: 'Improved system stability and 3× deployment velocity with zero downtime during cloud migration.', color: '#0ea5e9' },
  { client: 'Retail / eCommerce Brand', tag: 'Data Platform', result: '5× improvement in reporting speed and a reliable data foundation enabling AI/ML initiatives.', color: '#2F80ED' },
  { client: 'National Healthcare Provider', tag: 'QA & Delivery', result: 'Faster release cycles and measurable quality improvement through blended delivery support.', color: '#2F80ED' },
];

const FORM_STEPS = [
  { num: '01', title: 'Discovery Call', desc: 'We align on your initiative scope, constraints, and success metrics before any work begins.' },
  { num: '02', title: 'Team Assembly', desc: 'A curated delivery team matched to your stack and timeline is assembled from our specialist network.' },
  { num: '03', title: 'Governed Sprints', desc: 'Structured sprint cadences, status reporting, and clear escalation paths keep delivery on track.' },
  { num: '04', title: 'Handoff & Documentation', desc: 'We deliver production-ready outcomes with full knowledge transfer built into every engagement.' },
];

export default function TechnologyServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[82vh] flex items-center overflow-hidden pt-24" style={{ backgroundColor: '#0B1120' }}>
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[600px] h-[500px] rounded-full blur-[120px]" style={{ background: 'rgba(47,128,237,0.08)' }} />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[350px] rounded-full blur-[100px]" style={{ background: 'rgba(99,102,241,0.06)' }} />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 py-20 flex flex-col items-center text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-6"
            style={{ border: '1px solid rgba(47,128,237,0.3)', background: 'rgba(47,128,237,0.1)', color: '#2F80ED' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />Technology Services
          </motion.span>
          <ScrollText text="Technology services that move programs forward—faster." as="h1" delay={0.15} stagger={0.055}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.03] tracking-tight text-white max-w-4xl mx-auto" />
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.55 }}
            className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.72)' }}>
            Modernize applications, build data platforms, operationalize analytics & AI/ML, and modernize cloud environments—with enterprise-grade delivery governance.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.7 }} className="mt-10 flex flex-wrap justify-center gap-4">
            <CTABtn href="#start-project" primary>Start a Project</CTABtn>
            <CTABtn href="#outcomes" primary={false}>View Success Stories</CTABtn>
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="py-20 sm:py-28" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <SectionHdr badge="Capabilities" title="What we deliver"
            sub="Four core capability areas built around the technology initiatives that matter most to enterprise delivery teams." />
          <div className="mt-14"><CardHoverEffect items={CAPABILITIES} /></div>
        </div>
      </section>

      {/* DELIVERY APPROACH */}
      <section id="delivery" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <SectionHdr badge="Delivery Approach" title="How we work"
            sub="Every engagement runs on a structured delivery model designed to minimize risk and maximize velocity." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {DELIVERY.map((d, i) => (
              <motion.div key={d.step} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.65, ease, delay: i * 0.12 }}
                className="group relative rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ border: '1px solid rgba(15,23,42,0.08)' }}>
                <div className="mb-4 text-5xl font-extrabold text-[rgba(47,128,237,0.12)] transition-colors duration-300 group-hover:text-[#2F80ED]" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', lineHeight: 1 }}>{d.step}</div>
                <h4 className="font-display text-lg font-bold text-ink-900 mb-2">{d.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{d.desc}</p>
                {i < DELIVERY.length - 1 && <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-xl" style={{ color: '#cbd5e1' }}>→</span>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section id="outcomes" className="py-20 sm:py-28" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <SectionHdr badge="Case Studies" title="Outcomes we've delivered" sub="Real results from real engagements." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
            {OUTCOMES.map((o, i) => (
              <motion.div key={o.client} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.65, ease, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8" style={{ border: '1px solid rgba(15,23,42,0.08)', borderTop: `3px solid ${o.color}` }}>
                <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider mb-4" style={{ background: `${o.color}18`, color: o.color }}>{o.tag}</span>
                <h4 className="font-display text-base font-bold text-ink-900 mb-3">{o.client}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{o.result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* START A PROJECT — two-column orange CTA */}
      <OrangeCTASection
        id="start-project"
        badge="Start a Project"
        headline="Tell us what you're building"
        sub="Share your initiative and our delivery team will respond with a tailored approach—quickly."
        steps={FORM_STEPS}
        ctaLabel="Get Started"
        formHeadline="Start a Project"
        formSub="Fill in the form and we'll follow up with a tailored plan."
        selectLabel="Service area"
        selectOptions={['Application Modernization', 'Data Engineering & Platforms', 'Analytics / AI/ML Enablement', 'Cloud & Data Modernization', 'Multiple / Other']}
        submitLabel="Send Request"
      />

      <Footer />
    </div>
  );
}

/* ── Reusable blue two-column CTA section ── */
function OrangeCTASection({ id, badge, headline, sub, steps, ctaLabel, formHeadline, formSub, selectLabel, selectOptions, submitLabel }) {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({ first: '', last: '', email: '', company: '', title: '', need: '', message: '' });
  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); if (!agreed) return; setSubmitted(true); };

  return (
    <section id={id} className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E5DB8 50%, #2F80ED 100%)' }}>
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 w-[360px] h-[360px] rounded-full blur-[90px]" style={{ background: 'radial-gradient(circle, rgba(30,93,184,0.2) 0%, transparent 70%)' }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full blur-[80px]" style={{ background: 'radial-gradient(circle, rgba(47,128,237,0.25) 0%, transparent 70%)' }} />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#EAF3FF' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />{badge}
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.85, ease, delay: 0.08 }}
              className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight text-white mb-4">{headline}</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
              className="text-base leading-[1.9] max-w-sm mb-10" style={{ color: 'rgba(234,243,255,0.85)' }}>{sub}</motion.p>
            <div className="space-y-5 mb-10">
              {steps.map((s, i) => (
                <motion.div key={s.num} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce}
                  transition={{ duration: 0.65, ease, delay: 0.2 + i * 0.1 }} className="flex items-start gap-4">
                  <span className="shrink-0 grid h-11 w-11 place-items-center rounded-xl font-bold text-sm"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', color: '#EAF3FF' }}>{s.num}</span>
                  <div className="pt-1">
                    <h4 className="text-white font-bold text-sm mb-1">{s.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(234,243,255,0.75)' }}>{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.a href="#" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.6, ease, delay: 0.65 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', borderRadius: '50px', fontWeight: 700, fontSize: '14px', color: 'white', textDecoration: 'none', background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}>
              {ctaLabel} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </motion.a>
          </div>

          {/* Right: form card */}
          <motion.div initial={{ opacity: 0, x: 40, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={viewportOnce}
            transition={{ duration: 0.9, ease, delay: 0.15 }}>
            <div style={{ background: '#fff', borderRadius: '28px', padding: '36px 32px', boxShadow: '0 24px 64px rgba(0,0,0,0.28), 0 4px 16px rgba(0,0,0,0.12)' }}>
              {submitted ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="h-20 w-20 rounded-full grid place-items-center mb-6" style={{ background: 'rgba(47,128,237,0.1)' }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink-900 mb-3">Request Sent!</h3>
                  <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#475569' }}>Thanks—our delivery team will follow up within one business day.</p>
                  <button onClick={() => { setSubmitted(false); setAgreed(false); }} className="mt-8 text-sm font-semibold" style={{ color: '#2F80ED', background: 'none', border: 'none', cursor: 'pointer' }}>Send another →</button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-ink-900 mb-1">{formHeadline}</h3>
                    <p className="text-sm" style={{ color: '#64748b' }}>{formSub}</p>
                    <div style={{ width: '48px', height: '3px', background: '#2F80ED', borderRadius: '999px', marginTop: '14px' }} />
                  </div>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                    <div className="grid grid-cols-2 gap-3">
                      <FF label="First Name" name="first" value={form.first} onChange={handleChange} required />
                      <FF label="Last Name" name="last" value={form.last} onChange={handleChange} required />
                    </div>
                    <FF label="Work Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                    <FF label="Company" name="company" value={form.company} onChange={handleChange} required />
                    <FF label="Title / Role" name="title" value={form.title} onChange={handleChange} />
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#64748b' }}>{selectLabel}</label>
                      <div className="relative">
                        <select name="need" value={form.need} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-xl text-sm bg-white focus:outline-none appearance-none pr-9"
                          style={{ border: '1.5px solid #e5e7eb', color: form.need ? '#111827' : '#9ca3af' }}>
                          <option value="">Select...</option>
                          {selectOptions.map(o => <option key={o}>{o}</option>)}
                        </select>
                        <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" style={{ color: '#9ca3af' }}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M6 8L1 3h10L6 8z"/></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#64748b' }}>Message</label>
                      <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Describe the initiative..."
                        className="w-full px-4 py-3 rounded-xl text-sm bg-white focus:outline-none resize-none" style={{ border: '1.5px solid #e5e7eb' }} />
                    </div>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <div onClick={() => setAgreed(!agreed)}
                        className="w-5 h-5 mt-0.5 shrink-0 rounded-md border-2 flex items-center justify-center transition-all duration-200 cursor-pointer"
                        style={{ background: agreed ? '#2F80ED' : '#fff', borderColor: agreed ? '#2F80ED' : '#d1d5db' }}>
                        {agreed && <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12" stroke="#fff" strokeWidth="2.5"><path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      </div>
                      <span className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>
                        I agree to Ancile Inc's <a href="/contact" style={{ color: '#2F80ED', fontWeight: 600 }}>Privacy Policy</a> and <a href="/contact" style={{ color: '#2F80ED', fontWeight: 600 }}>Terms</a> *
                      </span>
                    </label>
                    <motion.button type="submit"
                      style={{ width: '100%', background: '#2F80ED', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px', borderRadius: '50px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(47,128,237,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                      whileHover={{ scale: 1.02, boxShadow: '0 12px 32px rgba(47,128,237,0.55)' }} whileTap={{ scale: 0.98 }}>
                      {submitLabel}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </motion.button>
                    <p className="text-center text-xs" style={{ color: '#9ca3af' }}>Your data is 100% secure & never shared</p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionHdr({ badge, title, sub }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.75, ease }}
      className="flex flex-col items-center text-center max-w-3xl mx-auto">
      <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />{badge}
      </span>
      <ScrollText text={title} as="h2" delay={0.05} stagger={0.07}
        className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.06] tracking-tight text-ink-900" />
      <p className="mt-4 text-base sm:text-lg leading-relaxed max-w-2xl" style={{ color: '#475569' }}>{sub}</p>
    </motion.div>
  );
}

function CTABtn({ href, children, primary }) {
  return (
    <motion.a href={href} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: primary ? '#2F80ED' : 'transparent', color: primary ? '#fff' : 'rgba(255,255,255,0.8)', fontWeight: 700, fontSize: '15px', padding: '13px 28px', borderRadius: '50px', textDecoration: 'none', border: primary ? 'none' : '1.5px solid rgba(255,255,255,0.25)', boxShadow: primary ? '0 8px 32px rgba(47,128,237,0.4)' : 'none' }}
      whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
      {children}
    </motion.a>
  );
}

function FF({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#64748b' }}>
        {label}{required && <span style={{ color: '#2F80ED' }}> *</span>}
      </label>
      <input type={type} name={name} value={value} onChange={onChange} required={required}
        className="w-full px-4 py-3 rounded-xl text-sm bg-white focus:outline-none"
        style={{ border: '1.5px solid #e5e7eb', color: '#111827' }} />
    </div>
  );
}

function AppIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>; }
function DataIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/></svg>; }
function AiIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>; }
function CloudIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>; }
