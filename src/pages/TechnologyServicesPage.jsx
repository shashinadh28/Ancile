import { useState } from 'react';
import { motion } from 'framer-motion';
import { viewportOnce } from '../utils/motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ScrollText from '../components/ui/ScrollText.jsx';
import { CardHoverEffect } from '../components/ui/CardHoverEffect.jsx';

const ease = [0.22, 1, 0.36, 1];

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
  { client: 'Retail / eCommerce Brand', tag: 'Data Platform', result: '5× improvement in reporting speed and a reliable data foundation enabling AI/ML initiatives.', color: '#10b981' },
  { client: 'National Healthcare Provider', tag: 'QA & Delivery', result: 'Faster release cycles and measurable quality improvement through blended delivery support.', color: '#F97316' },
];

export default function TechnologyServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-[82vh] flex items-center overflow-hidden pt-24" style={{ backgroundColor: '#0B1120' }}>
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: '48px 48px' }} />
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[600px] h-[500px] rounded-full blur-[120px]" style={{ background: 'rgba(249,115,22,0.08)' }} />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[350px] rounded-full blur-[100px]" style={{ background: 'rgba(99,102,241,0.06)' }} />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 py-20">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-6"
            style={{ border: '1px solid rgba(249,115,22,0.3)', background: 'rgba(249,115,22,0.1)', color: '#F97316' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />Technology Services
          </motion.span>

          <ScrollText
            text="Technology services that move programs forward—faster."
            as="h1"
            delay={0.15}
            stagger={0.055}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.03] tracking-tight text-white max-w-4xl"
          />

          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.55 }}
            className="mt-6 text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Modernize applications, build data platforms, operationalize analytics & AI/ML, and modernize cloud/data environments—with enterprise-grade delivery governance.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.7 }} className="mt-10 flex flex-wrap gap-4">
            <CTABtn href="#contact-form" primary>Start a Project</CTABtn>
            <CTABtn href="#outcomes" primary={false}>View Success Stories</CTABtn>
          </motion.div>
        </div>
      </section>

      {/* ── CAPABILITIES ───────────────────────────────────── */}
      <section id="capabilities" className="py-20 sm:py-28" style={{ backgroundColor: '#FAFAF8', backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.06) 1.5px, transparent 1.5px)', backgroundSize: '26px 26px' }}>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.75, ease }} className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700"><span className="h-1.5 w-1.5 rounded-full bg-accent-500" />Capabilities</span>
            <ScrollText text="What we deliver" as="h2" delay={0.05} stagger={0.1}
              className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.06] tracking-tight text-ink-900" />
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-500 max-w-2xl">Four core capability areas built around the technology initiatives that matter most to enterprise delivery teams.</p>
          </motion.div>
          <CardHoverEffect items={CAPABILITIES} />
        </div>
      </section>

      {/* ── DELIVERY APPROACH ──────────────────────────────── */}
      <section id="delivery" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.75, ease }} className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700"><span className="h-1.5 w-1.5 rounded-full bg-accent-500" />Delivery Approach</span>
            <ScrollText text="How we work" as="h2" delay={0.05} stagger={0.12}
              className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.06] tracking-tight text-ink-900" />
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-500 max-w-2xl">Every engagement runs on a structured delivery model designed to minimize risk and maximize velocity.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERY.map((d, i) => (
              <motion.div key={d.step} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.65, ease, delay: i * 0.12 }}
                className="relative bg-white rounded-2xl p-7" style={{ border: '1px solid rgba(15,23,42,0.08)' }}>
                <div className="text-5xl font-extrabold mb-4" style={{ color: 'rgba(249,115,22,0.12)', fontFamily: '"Plus Jakarta Sans", sans-serif', lineHeight: 1 }}>{d.step}</div>
                <h4 className="font-display text-lg font-bold text-ink-900 mb-2">{d.title}</h4>
                <p className="text-sm text-ink-500 leading-relaxed">{d.desc}</p>
                {i < DELIVERY.length - 1 && <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-ink-200 text-2xl">→</span>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ───────────────────────────────────────── */}
      <section id="outcomes" className="py-20 sm:py-28" style={{ backgroundColor: '#FAFAF8', backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.06) 1.5px, transparent 1.5px)', backgroundSize: '26px 26px' }}>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.75, ease }} className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700"><span className="h-1.5 w-1.5 rounded-full bg-accent-500" />Case Studies</span>
            <ScrollText text="Outcomes we've delivered" as="h2" delay={0.05} stagger={0.08}
              className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.06] tracking-tight text-ink-900" />
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-500 max-w-2xl">Real results from real engagements.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {OUTCOMES.map((o, i) => (
              <motion.div key={o.client} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.65, ease, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8" style={{ border: '1px solid rgba(15,23,42,0.08)', borderTop: `3px solid ${o.color}` }}>
                <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider mb-4" style={{ background: `${o.color}15`, color: o.color }}>{o.tag}</span>
                <h4 className="font-display text-base font-bold text-ink-900 mb-3">{o.client}</h4>
                <p className="text-sm leading-relaxed text-ink-500">{o.result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM ───────────────────────────────────────────── */}
      <section id="contact-form" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[680px] px-6 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.75, ease }} className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700"><span className="h-1.5 w-1.5 rounded-full bg-accent-500" />Start a Project</span>
            <ScrollText text="Tell us what you're building" as="h2" delay={0.05} stagger={0.08}
              className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.06] tracking-tight text-ink-900" />
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-500 max-w-2xl">Share your initiative and our delivery team will respond with a tailored approach—quickly.</p>
          </motion.div>
          <LeadForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CTABtn({ href, children, primary }) {
  return (
    <motion.a href={href} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: primary ? '#F97316' : 'transparent', color: primary ? '#fff' : 'rgba(255,255,255,0.75)', fontWeight: 700, fontSize: '15px', padding: '13px 28px', borderRadius: '50px', textDecoration: 'none', border: primary ? 'none' : '1.5px solid rgba(255,255,255,0.2)', boxShadow: primary ? '0 8px 32px rgba(249,115,22,0.35)' : 'none' }}
      whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
      {children}
    </motion.a>
  );
}

function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 rounded-2xl" style={{ background: '#FAFAF8', border: '1px solid rgba(15,23,42,0.08)' }}>
      <div className="h-16 w-16 rounded-full grid place-items-center mx-auto mb-5" style={{ background: 'rgba(249,115,22,0.1)' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
      </div>
      <h3 className="font-display text-xl font-bold text-ink-900 mb-2">Request Sent!</h3>
      <p className="text-sm text-ink-500">Thanks—our team will follow up shortly.</p>
    </motion.div>
  );
  return (
    <motion.form initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.7, ease, delay: 0.2 }}
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4"
      style={{ background: '#FAFAF8', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(15,23,42,0.08)' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FF label="First Name" name="first_name" /><FF label="Last Name" name="last_name" />
      </div>
      <FF label="Work Email" name="email" type="email" /><FF label="Company" name="company" /><FF label="Title / Role" name="title" />
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-ink-500 mb-1.5">Message</label>
        <textarea rows={4} placeholder="Describe the initiative and what you need..." className="w-full px-4 py-3 rounded-xl text-sm text-ink-900 bg-white focus:outline-none resize-none" style={{ border: '1px solid rgba(15,23,42,0.12)' }} />
      </div>
      <motion.button type="submit" style={{ width: '100%', background: '#F97316', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px', borderRadius: '50px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(249,115,22,0.3)' }}
        whileHover={{ scale: 1.02, boxShadow: '0 12px 32px rgba(249,115,22,0.45)' }} whileTap={{ scale: 0.98 }}>
        Send Request
      </motion.button>
      <p className="text-center text-xs text-ink-400">Thanks—our team will follow up shortly.</p>
    </motion.form>
  );
}

function FF({ label, name, type = 'text' }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-500 mb-1.5">{label}</label>
      <input type={type} name={name} className="w-full px-4 py-3 rounded-xl text-sm text-ink-900 bg-white focus:outline-none" style={{ border: '1px solid rgba(15,23,42,0.12)' }} />
    </div>
  );
}

function AppIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>; }
function DataIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/></svg>; }
function AiIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>; }
function CloudIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" strokeLinejoin="round" strokeLinecap="round"/></svg>; }
