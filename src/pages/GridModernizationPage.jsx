import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { viewportOnce } from '../utils/motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ScrollText from '../components/ui/ScrollText.jsx';

const ease = [0.22, 1, 0.36, 1];
const DOT_BG = { backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.13) 1.5px, transparent 1.5px)', backgroundSize: '26px 26px' };
const GRID_BG = { backgroundImage: 'linear-gradient(rgba(47,128,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(47,128,237,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px' };

const INTEGRATION_DOMAINS = [
  {
    num: '01',
    title: 'Cloud Modernization',
    desc: 'Cloud platforms such as Microsoft Azure, AWS and Google Cloud are enabling utilities to modernize legacy applications, unify data estates and deploy scalable services supporting containerization, microservices and serverless architectures.',
    icon: CloudIcon,
  },
  {
    num: '02',
    title: 'Advanced Analytics & Predictive Maintenance',
    desc: 'Unified data platforms like Databricks help utilities build AI/ML pipelines for predictive maintenance, outage forecasting and customer behavior analysis with real-time analytics and scalable governance frameworks.',
    icon: AnalyticsIcon,
  },
  {
    num: '03',
    title: 'Operational Efficiency',
    desc: 'Platforms such as ServiceNow and Red Hat streamline IT and field operations through automated workflows, unified service management and event-driven architectures—improving visibility and end-to-end service delivery.',
    icon: OpsIcon,
  },
  {
    num: '04',
    title: 'Geospatial Intelligence',
    desc: 'GIS platforms like ESRI and 3-GIS are integrated into utility operations to enable real-time asset tracking, spatial analytics and network planning—enhancing field operations and infrastructure management.',
    icon: GeoIcon,
  },
  {
    num: '05',
    title: 'Customer Experience in Utilities',
    desc: 'CRM platforms such as Salesforce unify customer data, automate service workflows and personalize engagement. Integration with billing and field service systems ensures consistent and responsive service delivery.',
    icon: CXIcon,
  },
  {
    num: '06',
    title: 'Enterprise Modernization',
    desc: 'ERP platforms like Oracle Fusion Cloud support financial automation, workforce transformation and supply chain visibility. Integration across enterprise systems enables transparency and alignment with strategic goals.',
    icon: ERPIcon,
  },
];

const CHALLENGES = [
  { label: 'Redundant data silos', desc: 'Slower incident response and inconsistent asset views' },
  { label: 'Manual workflows', desc: 'More truck rolls and higher O&M costs' },
  { label: 'Duplicated platforms', desc: 'Integration rework and licensing waste' },
  { label: 'Delayed analytics', desc: 'Slower innovation and weaker reliability' },
];

const RELATED = [
  {
    tag: 'Article',
    title: 'Small Language Models Could Be the Key to Enterprise AI',
    desc: 'Like any AI technology, small language models offer both benefits and potential challenges to organizations.',
    icon: '🧠',
  },
  {
    tag: 'Article',
    title: 'Enabling Fiber Infrastructure for the Data Center Era',
    desc: 'Once the sole province of telecom providers, fiber connectivity is now a strategic asset for utilities, powering the data center era.',
    icon: '📡',
  },
  {
    tag: 'Success Story',
    title: 'Moving Millions of Patient Records',
    desc: 'Healthcare provider works to migrate a substantial amount of patient records according to AWS best practices.',
    icon: '🏥',
  },
];

const THINKING_FORWARD = [
  {
    tag: 'Success Story',
    title: 'Moving Millions of Patient Records',
    icon: '🏥',
    desc: 'Healthcare provider works to migrate a substantial amount of patient records according to AWS best practices.',
  },
  {
    tag: 'Article',
    title: 'Enabling Fiber Infrastructure for the Data Center Era',
    icon: '📡',
    desc: 'Once the sole province of telecom providers, fiber connectivity is now a strategic asset for utilities.',
  },
  {
    tag: 'Article',
    title: 'Workforce Readiness: A Human-Centered Approach to Utility Modernization',
    icon: '👥',
    desc: 'For a successful utility modernization, it\'s critical to focus on the human element of your organization.',
  },
];

const FORM_STEPS = [
  { num: '01', title: 'Discovery Call', desc: 'We align on your utility modernization goals, current state, and success metrics.' },
  { num: '02', title: 'Ecosystem Assessment', desc: 'A curated team assesses your existing platform landscape and integration gaps.' },
  { num: '03', title: 'Roadmap & Delivery', desc: 'Structured milestones and sprint cadences keep your modernization on track.' },
  { num: '04', title: 'Outcomes & Handoff', desc: 'We deliver documented, production-ready integrations with knowledge transfer built in.' },
];

export default function GridModernizationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[82vh] flex items-center overflow-hidden pt-24" style={{ backgroundColor: '#0B1120' }}>
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[600px] h-[500px] rounded-full blur-[120px]" style={{ background: 'rgba(47,128,237,0.08)' }} />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[350px] rounded-full blur-[100px]" style={{ background: 'rgba(99,102,241,0.06)' }} />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 py-20 flex flex-col items-center text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-6"
            style={{ border: '1px solid rgba(47,128,237,0.3)', background: 'rgba(47,128,237,0.1)', color: '#2F80ED' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />Grid Modernization
          </motion.span>

          <ScrollText
            text="Integrated Partner Ecosystems for Grid Modernization"
            as="h1"
            delay={0.15}
            stagger={0.045}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.03] tracking-tight text-white max-w-5xl mx-auto"
          />

          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.55 }}
            className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.72)' }}>
            Modernization is reshaping the utility industry, and leaders should stay ahead of this transformation to deliver more reliable service and improve efficiency.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.72 }}
            className="mt-3 text-sm font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Nov. 7, 2025 &nbsp;|&nbsp; By Marc Smith
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.8 }} className="mt-10 flex flex-wrap justify-center gap-4">
            <CTABtn href="#integration-domains" primary>Explore Domains</CTABtn>
            <CTABtn href="#contact-grid" primary={false}>Start a Conversation</CTABtn>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS GRID MODERNIZATION ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.85, ease }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />What Is Grid Modernization?
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6">
                Upgrade. Integrate. Optimize.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-500 mb-4">
                Grid modernization is the upgrade of utility systems—spanning cloud modernization, advanced analytics, geospatial intelligence, ERP/CRM and field operations—to improve reliability, safety, efficiency and customer experience.
              </p>
              <p className="text-base leading-relaxed text-slate-500">
                A vendor-agnostic, integrated ecosystem enables real-time insight and faster decision-making across the enterprise. As the utility sector undergoes rapid modernization, organizations are increasingly challenged to meet evolving regulatory standards, improve operational efficiency and deliver reliable service—all while managing legacy infrastructure and a complex technology landscape.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.85, ease, delay: 0.15 }}>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <h3 className="font-display text-xl font-bold text-slate-800 mb-6">The Industry Shift: Integration as a Foundation</h3>
                <div className="space-y-4">
                  {['Interoperability across legacy and modern platforms', 'Vendor-agnostic architecture', 'Alignment of digital tools with operational goals', 'Scalable infrastructure to support future innovation'].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                      className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-500/10 border border-blue-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      </div>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── THE CHALLENGE ── */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <SectionHdr badge="The Challenge" title="Fragmented systems, disconnected solutions"
            sub="Many utilities operate within siloed technology environments, where platforms are deployed to solve isolated problems but lack cohesion." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {CHALLENGES.map((c, i) => (
              <motion.div key={c.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.65, ease, delay: i * 0.12 }}
                className="group relative rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ border: '1px solid rgba(15,23,42,0.08)', borderTop: '3px solid #2F80ED' }}>
                <div className="mb-3 text-5xl font-extrabold text-blue-500/10 group-hover:text-blue-500/20 transition-colors" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', lineHeight: 1 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className="font-display text-base font-bold text-slate-800 mb-2">{c.label}</h4>
                <p className="text-sm leading-relaxed text-slate-500">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY INTEGRATION DOMAINS ── */}
      <section id="integration-domains" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <SectionHdr badge="Key Integration Domains" title="What we deliver across utility modernization"
            sub="Six core integration domains built around the technology initiatives that matter most to utility enterprises—from cloud to field operations." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {INTEGRATION_DOMAINS.map((d, i) => (
              <motion.div key={d.num} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.65, ease, delay: i * 0.09 }}
                className="group rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ border: '1px solid rgba(15,23,42,0.08)' }}>
                <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 mb-5">
                  <d.icon />
                </div>
                <div className="text-3xl font-extrabold text-blue-500/10 group-hover:text-blue-500/20 transition-colors mb-2" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', lineHeight: 1 }}>
                  {d.num}
                </div>
                <h4 className="font-display text-lg font-bold text-slate-800 mb-2">{d.title}</h4>
                <p className="text-sm leading-relaxed text-slate-500">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILDING A FUTURE-READY ECOSYSTEM ── */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#FAFAF8', ...GRID_BG }}>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />Future-Ready Utility Ecosystem
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6">
                Building for What Comes Next
              </h2>
              <p className="text-base leading-relaxed text-slate-500 mb-4">
                Integrated partner ecosystems transform the pace of grid modernization, improving reliability, accelerating innovation and aligning investments with regulatory priorities across cloud, analytics, GIS, ERP/CRM and operations.
              </p>
              <p className="text-base leading-relaxed text-slate-500 mb-8">
                By breaking down silos and enabling cross-platform collaboration, utilities can improve grid reliability and resilience, enhance customer experience through unified data, accelerate innovation cycles and align technology investments with regulatory and business priorities.
              </p>
              <p className="text-sm font-semibold text-slate-600 italic border-l-2 border-blue-500 pl-4">
                This approach supports broader industry goals such as decarbonization, electrification and digital transformation—ensuring utilities are equipped to meet the demands of a dynamic energy future.
              </p>
            </motion.div>

            <div className="space-y-4">
              {['Improve grid reliability and resilience', 'Enhance customer experience through unified data', 'Accelerate innovation cycles', 'Align technology investments with regulatory and business priorities', 'Support decarbonization and electrification goals', 'Enable digital transformation at enterprise scale'].map((outcome, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce}
                  transition={{ duration: 0.55, ease, delay: i * 0.09 }}
                  className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all duration-300">
                  <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AUTHOR ── */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.75, ease }}
            className="flex flex-col sm:flex-row items-start gap-6 bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <div className="h-20 w-20 rounded-2xl bg-blue-500 flex items-center justify-center text-white text-2xl font-extrabold flex-shrink-0">MS</div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-1">Author</div>
              <h3 className="font-display text-xl font-extrabold text-slate-900 mb-1">Marc Smith</h3>
              <p className="text-sm text-blue-600 font-semibold mb-3">Transformation Client Executive, Energy</p>
              <p className="text-sm leading-relaxed text-slate-500">Marc is a recognized leader in digital analytics in the energy and resource sector. As a transformation client executive, Marc leads customers through journeys in their digital, cloud and data transformations. Marc has over 30 years of experience architecting and implementing data, analytics and artificial intelligence solutions in areas of risk, energy transition, operations, asset management and operational excellence.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RELATED ARTICLES ── */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <SectionHdr badge="Thinking Forward" title="Related insights" sub="Explore more perspectives on utility modernization, digital transformation and enterprise technology." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {THINKING_FORWARD.map((r, i) => (
              <motion.div key={r.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.65, ease, delay: i * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-5xl">
                  {r.icon}
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider mb-3" style={{ background: 'rgba(47,128,237,0.1)', color: '#2F80ED' }}>{r.tag}</span>
                  <h4 className="font-display text-base font-bold text-slate-800 mb-2 leading-snug group-hover:text-blue-600 transition-colors">{r.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-500 mb-4">{r.desc}</p>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-500 inline-flex items-center gap-1.5">
                    Read Now <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR TECHNOLOGY PARTNERSHIPS ── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.75, ease }} className="mb-12">
            <h3 className="font-display text-3xl font-extrabold text-slate-900 mb-3">Our Technology Partnerships</h3>
            <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">Transformational technologies demand equally transformative partnerships. The world's leading technology brands work with us because of our scale, speed and quality—making the most of your technology investments.</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Microsoft Azure', 'AWS', 'Google Cloud', 'Databricks', 'ServiceNow', 'Red Hat', 'ESRI', 'Salesforce', 'Oracle Fusion Cloud'].map((p, i) => (
              <motion.div key={p} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewportOnce}
                transition={{ duration: 0.45, ease, delay: i * 0.06 }}
                className="rounded-xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                {p}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FORM ── */}
      <OrangeCTASection
        id="contact-grid"
        badge="Start a Conversation"
        headline="Ready to modernize your grid ecosystem?"
        sub="Share your utility transformation initiative and our delivery team will respond with a tailored integration approach."
        steps={FORM_STEPS}
        ctaLabel="Start a Project"
        formHeadline="Connect With Our Team"
        formSub="Fill in the form and we'll follow up with a tailored plan."
        selectLabel="Integration domain"
        selectOptions={['Cloud Modernization', 'Advanced Analytics & Predictive Maintenance', 'Operational Efficiency', 'Geospatial Intelligence', 'Customer Experience', 'Enterprise Modernization', 'Multiple / Other']}
        submitLabel="Send Request"
      />

      <Footer />
    </div>
  );
}

/* ── Reusable CTA Section ── */
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
          </div>

          <motion.div initial={{ opacity: 0, x: 40, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={viewportOnce}
            transition={{ duration: 0.9, ease, delay: 0.15 }}>
            <div style={{ background: '#fff', borderRadius: '28px', padding: '36px 32px', boxShadow: '0 24px 64px rgba(0,0,0,0.28)' }}>
              {submitted ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="h-20 w-20 rounded-full grid place-items-center mb-6" style={{ background: 'rgba(47,128,237,0.1)' }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">Request Sent!</h3>
                  <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#475569' }}>Thanks—our team will follow up within one business day.</p>
                  <button onClick={() => { setSubmitted(false); setAgreed(false); }} className="mt-8 text-sm font-semibold" style={{ color: '#2F80ED', background: 'none', border: 'none', cursor: 'pointer' }}>Send another →</button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{formHeadline}</h3>
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
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M6 8L1 3h10L6 8z" /></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#64748b' }}>Message</label>
                      <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Describe your grid modernization initiative..."
                        className="w-full px-4 py-3 rounded-xl text-sm bg-white focus:outline-none resize-none" style={{ border: '1.5px solid #e5e7eb' }} />
                    </div>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <div onClick={() => setAgreed(!agreed)} className="w-5 h-5 mt-0.5 shrink-0 rounded-md border-2 flex items-center justify-center transition-all duration-200 cursor-pointer"
                        style={{ background: agreed ? '#2F80ED' : '#fff', borderColor: agreed ? '#2F80ED' : '#d1d5db' }}>
                        {agreed && <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12" stroke="#fff" strokeWidth="2.5"><path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                      </div>
                      <span className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>
                        I agree to Ancile Inc's <a href="/contact" style={{ color: '#2F80ED', fontWeight: 600 }}>Privacy Policy</a> and <a href="/contact" style={{ color: '#2F80ED', fontWeight: 600 }}>Terms</a> *
                      </span>
                    </label>
                    <motion.button type="submit"
                      style={{ width: '100%', background: '#2F80ED', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px', borderRadius: '50px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(47,128,237,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      {submitLabel}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
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
      <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />{badge}
      </span>
      <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.06] tracking-tight text-slate-900">{title}</h2>
      <p className="mt-4 text-base sm:text-lg leading-relaxed max-w-2xl" style={{ color: '#475569' }}>{sub}</p>
    </motion.div>
  );
}

function CTABtn({ href, children, primary }) {
  return (
    <motion.a href={href}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: primary ? '#2F80ED' : 'transparent', color: primary ? '#fff' : 'rgba(255,255,255,0.8)', fontWeight: 700, fontSize: '15px', padding: '13px 28px', borderRadius: '50px', textDecoration: 'none', border: primary ? 'none' : '1.5px solid rgba(255,255,255,0.25)', boxShadow: primary ? '0 8px 32px rgba(47,128,237,0.4)' : 'none' }}
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

function CloudIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" /></svg>; }
function AnalyticsIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
function OpsIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /></svg>; }
function GeoIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>; }
function CXIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>; }
function ERPIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>; }
