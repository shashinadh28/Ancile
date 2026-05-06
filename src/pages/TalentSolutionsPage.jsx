import { useState } from 'react';
import { motion } from 'framer-motion';
import { viewportOnce } from '../utils/motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ScrollText from '../components/ui/ScrollText.jsx';
import { CardHoverEffect } from '../components/ui/CardHoverEffect.jsx';

const ease = [0.22, 1, 0.36, 1];

const ENGAGEMENT_MODELS = [
  { num: '01', title: 'Staff Augmentation', desc: 'Extend your team with vetted specialists on demand. Scale up or down as project needs shift—without the overhead of full-time hiring.', icon: AugIcon },
  { num: '02', title: 'Direct Hire', desc: 'We identify, vet, and present top permanent candidates aligned to your culture, requirements, and growth trajectory.', icon: HireIcon },
  { num: '03', title: 'Project-Based Teams', desc: 'Deploy a curated team purpose-built for a specific initiative—from kickoff to delivery with built-in accountability.', icon: TeamIcon },
  { num: '04', title: 'Delivery & PMO Support', desc: 'Strengthen program delivery with experienced PMs, delivery leads, and BAs who bring governance and velocity.', icon: PmoIcon },
];

const ROLES = [
  { role: 'Software Engineers', spec: 'Full-Stack / Backend / Frontend' },
  { role: 'Data Engineers', spec: 'Pipelines, Platforms, Lakehouse/Warehouse' },
  { role: 'Cloud Engineers', spec: 'AWS / Azure / GCP' },
  { role: 'DevOps / Platform Engineers', spec: 'CI/CD, Observability, SRE' },
  { role: 'QA / Test Automation Engineers', spec: 'Quality Engineering' },
  { role: 'Data Scientists / ML Engineers', spec: 'Applied AI/ML' },
];

const PROCESS = [
  { step: '01', title: 'Intake & Alignment', desc: 'We map your requirements, culture, and constraints in a focused discovery session.' },
  { step: '02', title: 'Sourcing & Vetting', desc: 'Our domain-specific recruiters surface and screen candidates against precise technical and behavioral criteria.' },
  { step: '03', title: 'Shortlist Delivery', desc: 'You receive a concise, high-quality shortlist—typically within days, not weeks.' },
  { step: '04', title: 'Onboarding & Governance', desc: 'We stay engaged post-placement with clear SLAs, reporting, and proactive communication.' },
];

export default function TalentSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-[82vh] flex items-center overflow-hidden pt-24" style={{ backgroundColor: '#0B1120' }}>
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: '48px 48px' }} />
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[600px] h-[500px] rounded-full blur-[120px]" style={{ background: 'rgba(249,115,22,0.09)' }} />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 py-20">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-6"
            style={{ border: '1px solid rgba(249,115,22,0.3)', background: 'rgba(249,115,22,0.1)', color: '#F97316' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />Talent Solutions
          </motion.span>

          <ScrollText
            text="Talent solutions built for speed, fit, and accountability."
            as="h1"
            delay={0.15}
            stagger={0.06}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.03] tracking-tight text-white max-w-3xl"
          />

          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.5 }}
            className="mt-6 text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Specialized talent across engineering, data, cloud, QA automation, and AI—matched quickly and supported with clear governance.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.65 }} className="mt-10 flex flex-wrap gap-4">
            <CTABtn href="#contact-form" primary>Request Talent</CTABtn>
            <CTABtn href="#contact-form" primary={false}>Talk to Sales</CTABtn>
          </motion.div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ──────────────────────────────── */}
      <section id="engagement-models" className="py-20 sm:py-28" style={{ backgroundColor: '#FAFAF8', backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.06) 1.5px, transparent 1.5px)', backgroundSize: '26px 26px' }}>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.75, ease }} className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />Engagement Models
            </span>
            <ScrollText text="Choose the model that fits your needs" as="h2" delay={0.05} stagger={0.06}
              className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.06] tracking-tight text-ink-900" />
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-500 max-w-2xl">From rapid staff augmentation to full program delivery—structured for outcomes, not just headcount.</p>
          </motion.div>
          <CardHoverEffect items={ENGAGEMENT_MODELS} />
        </div>
      </section>

      {/* ── ROLES ──────────────────────────────────────────── */}
      <section id="roles" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.75, ease }} className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700"><span className="h-1.5 w-1.5 rounded-full bg-accent-500" />Roles & Specialties</span>
            <ScrollText text="The talent we place" as="h2" delay={0.05} stagger={0.09}
              className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.06] tracking-tight text-ink-900" />
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-500 max-w-2xl">High-demand engineering and technology disciplines that drive modern delivery.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ROLES.map((r, i) => (
              <motion.div key={r.role} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white hover:shadow-md transition-shadow duration-300" style={{ border: '1px solid rgba(15,23,42,0.08)' }}>
                <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full grid place-items-center flex-shrink-0" style={{ background: 'rgba(249,115,22,0.12)' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <div><div className="font-semibold text-ink-900 text-sm">{r.role}</div><div className="text-xs text-ink-400 mt-0.5">{r.spec}</div></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────── */}
      <section id="process" className="py-20 sm:py-28" style={{ backgroundColor: '#FAFAF8', backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.06) 1.5px, transparent 1.5px)', backgroundSize: '26px 26px' }}>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.75, ease }} className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700"><span className="h-1.5 w-1.5 rounded-full bg-accent-500" />Our Process</span>
            <ScrollText text="From intake to impact" as="h2" delay={0.05} stagger={0.09}
              className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.06] tracking-tight text-ink-900" />
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-500 max-w-2xl">A repeatable, accountable process that gets the right talent in place—fast.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.65, ease, delay: i * 0.12 }}
                className="relative bg-white rounded-2xl p-7" style={{ border: '1px solid rgba(15,23,42,0.08)' }}>
                <div className="text-5xl font-extrabold mb-4" style={{ color: 'rgba(249,115,22,0.12)', fontFamily: '"Plus Jakarta Sans", sans-serif', lineHeight: 1 }}>{p.step}</div>
                <h4 className="font-display text-lg font-bold text-ink-900 mb-2">{p.title}</h4>
                <p className="text-sm text-ink-500 leading-relaxed">{p.desc}</p>
                {i < PROCESS.length - 1 && <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-ink-200 text-2xl">→</span>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM ───────────────────────────────────────────── */}
      <section id="contact-form" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[680px] px-6 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.75, ease }} className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700"><span className="h-1.5 w-1.5 rounded-full bg-accent-500" />Request Talent</span>
            <ScrollText text="Tell us what you need" as="h2" delay={0.05} stagger={0.1}
              className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.06] tracking-tight text-ink-900" />
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-500 max-w-2xl">Share your requirements and our team will respond with qualified candidates—typically within 48 hours.</p>
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
        <label className="block text-xs font-semibold uppercase tracking-wider text-ink-500 mb-1.5">What do you need?</label>
        <select name="need" className="w-full px-4 py-3 rounded-xl text-sm text-ink-700 bg-white focus:outline-none" style={{ border: '1px solid rgba(15,23,42,0.12)' }}>
          <option>Select...</option><option>Staffing</option><option>Project</option><option>Both</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-ink-500 mb-1.5">Message</label>
        <textarea rows={4} placeholder="Describe what you're looking for..." className="w-full px-4 py-3 rounded-xl text-sm text-ink-900 bg-white focus:outline-none resize-none" style={{ border: '1px solid rgba(15,23,42,0.12)' }} />
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

/* Icons for engagement models */
function AugIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>; }
function HireIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function TeamIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>; }
function PmoIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>; }
