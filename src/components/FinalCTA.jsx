import { useState } from 'react';
import { motion } from 'framer-motion';
import { viewportOnce } from '../utils/motion';

const ease = [0.22, 1, 0.36, 1];

const STEPS = [
  {
    num: '01',
    title: 'Define Your Need',
    desc: 'Share your talent requirements or project goals—we align fast on scope, stack, and timeline.',
    icon: DefineIcon,
  },
  {
    num: '02',
    title: 'We Source & Vet',
    desc: 'Our domain specialists surface and screen candidates against precise technical and cultural criteria.',
    icon: SearchIcon,
  },
  {
    num: '03',
    title: 'Receive a Shortlist',
    desc: 'You get a concise, high-quality shortlist—typically within days, not weeks.',
    icon: ListIcon,
  },
  {
    num: '04',
    title: 'Governed Delivery',
    desc: 'We stay engaged with clear SLAs, open reporting, and proactive communication throughout.',
    icon: ShieldIcon,
  },
];

export default function FinalCTA() {
  const [activeTab, setActiveTab] = useState('talent');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ first: '', last: '', email: '', company: '', title: '', need: '', message: '' });

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section
      id="cta"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: '#0B1120' }}
    >
      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
      {/* Glow orbs */}
      <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ background: 'rgba(249,115,22,0.10)' }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full blur-[90px]" style={{ background: 'rgba(99,102,241,0.07)' }} />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── LEFT: Steps ───────────────────────────────────── */}
          <div>
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce} transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6"
              style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)', color: '#F97316' }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Let's Connect
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce} transition={{ duration: 0.85, ease, delay: 0.08 }}
              className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight text-white mb-5"
            >
              Let's talk about your{' '}
              <span style={{ color: '#F97316' }}>hiring or delivery goals.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce} transition={{ duration: 0.7, ease, delay: 0.16 }}
              className="text-base leading-[1.8] max-w-md mb-10"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              Tell us what you're building—our team will respond quickly with next steps and a tailored plan.
            </motion.p>

            {/* Steps */}
            <div className="space-y-4">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.num}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.65, ease, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    {/* Icon box */}
                    <span
                      className="shrink-0 grid h-11 w-11 place-items-center rounded-xl"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: '#F97316',
                      }}
                    >
                      <Icon />
                    </span>
                    <div className="pt-1">
                      <h4 className="text-white font-bold text-sm mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] mr-2" style={{ color: '#F97316' }}>{s.num}</span>
                        {s.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Get started link */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce} transition={{ duration: 0.6, ease, delay: 0.65 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                marginTop: '2.5rem',
                padding: '12px 28px', borderRadius: '50px', fontWeight: 700, fontSize: '14px',
                color: 'white', textDecoration: 'none',
                background: 'rgba(255,255,255,0.08)',
                border: '1.5px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(8px)',
              }}
            >
              Get Started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.a>
          </div>

          {/* ── RIGHT: Form card ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={viewportOnce} transition={{ duration: 0.9, ease, delay: 0.15 }}
          >
            <div
              style={{
                background: '#ffffff',
                borderRadius: '28px',
                padding: '36px 32px',
                boxShadow: '0 24px 64px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.12)',
              }}
            >
              {submitted ? (
                /* Success state */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div
                    className="h-20 w-20 rounded-full grid place-items-center mb-6"
                    style={{ background: 'rgba(249,115,22,0.1)' }}
                  >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink-900 mb-3">Message Sent!</h3>
                  <p className="text-ink-500 text-sm leading-relaxed max-w-xs">Thanks—our team will follow up shortly. We typically respond within one business day.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 text-sm font-semibold" style={{ color: '#F97316' }}>Send another →</button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-7">
                    <h3 className="text-xl font-bold text-ink-900 mb-1">Send us a message</h3>
                    <p className="text-sm text-ink-400">Fill in the form and we'll get back to you quickly.</p>
                    {/* Orange underline accent */}
                    <div style={{ width: '48px', height: '3px', background: '#F97316', borderRadius: '999px', marginTop: '14px' }} />
                  </div>

                  {/* Tab toggle */}
                  <div
                    className="inline-flex rounded-xl p-1 mb-7 w-full"
                    style={{ background: 'rgba(15,23,42,0.05)', border: '1px solid rgba(15,23,42,0.08)' }}
                  >
                    {[
                      { id: 'talent', label: 'I need talent' },
                      { id: 'project', label: 'I want to start a project' },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className="flex-1 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200"
                        style={{
                          color: activeTab === tab.id ? '#fff' : '#64748b',
                          background: activeTab === tab.id ? '#F97316' : 'transparent',
                          border: 'none', cursor: 'pointer',
                        }}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <FormField label="First Name" name="first" value={form.first} onChange={handleChange} required />
                      <FormField label="Last Name" name="last" value={form.last} onChange={handleChange} required />
                    </div>
                    <FormField label="Work Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                    <FormField label="Company" name="company" value={form.company} onChange={handleChange} required />
                    <FormField label="Title / Role" name="title" value={form.title} onChange={handleChange} />

                    {activeTab === 'talent' && (
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-ink-500 mb-2">What roles do you need?</label>
                        <select name="need" value={form.need} onChange={handleChange} className="w-full px-4 py-3 rounded-xl text-sm text-ink-700 bg-white focus:outline-none" style={{ border: '1.5px solid #e5e7eb' }}>
                          <option value="">Select a role category...</option>
                          <option>Software Engineering</option>
                          <option>Data Engineering</option>
                          <option>Cloud / DevOps</option>
                          <option>QA / Automation</option>
                          <option>Cybersecurity</option>
                          <option>Product / PMO / BA</option>
                        </select>
                      </div>
                    )}

                    {activeTab === 'project' && (
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-ink-500 mb-2">Service area</label>
                        <select name="need" value={form.need} onChange={handleChange} className="w-full px-4 py-3 rounded-xl text-sm text-ink-700 bg-white focus:outline-none" style={{ border: '1.5px solid #e5e7eb' }}>
                          <option value="">Select a service area...</option>
                          <option>Application Modernization</option>
                          <option>Data Engineering & Platforms</option>
                          <option>Analytics / AI/ML Enablement</option>
                          <option>Cloud & Data Modernization</option>
                        </select>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-500 mb-2">Message</label>
                      <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Tell us more about what you're looking for..."
                        className="w-full px-4 py-3 rounded-xl text-sm text-ink-900 bg-white focus:outline-none resize-none"
                        style={{ border: '1.5px solid #e5e7eb' }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      style={{ width: '100%', background: '#F97316', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px', borderRadius: '50px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(249,115,22,0.35)' }}
                      whileHover={{ scale: 1.02, boxShadow: '0 12px 32px rgba(249,115,22,0.5)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send
                    </motion.button>
                    <p className="text-center text-xs text-ink-400">Your data is secure & never shared.</p>
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

/* Form field helper */
function FormField({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-500 mb-1.5">
        {label}{required && <span style={{ color: '#F97316' }}> *</span>}
      </label>
      <input
        type={type} name={name} value={value} onChange={onChange} required={required}
        className="w-full px-4 py-3 rounded-xl text-sm text-ink-900 bg-white focus:outline-none"
        style={{ border: '1.5px solid #e5e7eb' }}
      />
    </div>
  );
}

/* Icons */
function DefineIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>;
}
function SearchIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
}
function ListIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>;
}
function ShieldIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
}
