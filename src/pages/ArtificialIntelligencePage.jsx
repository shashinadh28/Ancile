import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, animate } from 'framer-motion';
import { viewportOnce } from '../utils/motion.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const ease = [0.22, 1, 0.36, 1];
const DOT_BG = {
  backgroundImage: 'radial-gradient(circle, rgba(47,128,237,0.07) 1.5px, transparent 1.5px)',
  backgroundSize: '28px 28px',
};

/* ── Arrow SVG ── */
const ArrowRight = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ── Animated counter ── */
function CountUp({ to, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState('0');
  useEffect(() => {
    if (!inView) return;
    const c = animate(count, to, { duration, ease: 'easeOut', onUpdate: v => setDisplay(Math.floor(v).toLocaleString()) });
    return c.stop;
  }, [inView, to, duration, count]);
  return <span ref={ref}>{display}{suffix}</span>;
}

/* ═══════════════════════════════════════════════════════════ HERO ═══ */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #020817 0%, #0F1F45 45%, #1E3A6E 75%, #2F80ED 100%)' }}>

      {/* Animated grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Neural network dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div key={i} aria-hidden
          className="pointer-events-none absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `rgba(${[47, 96, 147][i % 3]},${[128, 165, 197][i % 3]},237,${Math.random() * 0.5 + 0.2})`,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }} />
      ))}

      {/* Big glow orbs */}
      <motion.div aria-hidden animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-40 right-0 w-[800px] h-[800px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(47,128,237,0.25) 0%, transparent 60%)' }} />
      <motion.div aria-hidden animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.22, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="pointer-events-none absolute bottom-0 -left-40 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(30,93,184,0.3) 0%, transparent 60%)' }} />

      {/* Rotating rings */}
      {[120, 240, 380].map((s, i) => (
        <motion.div key={i} aria-hidden animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 25 + i * 12, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute right-[8%] top-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]"
          style={{ width: s, height: s }} />
      ))}

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 py-32">
        <div className="max-w-[800px]">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-8"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.16)', color: '#93C5FD' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA] animate-pulse" />
            Artificial Intelligence
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 56 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.04] tracking-tight text-white mb-7">
            Artificial Intelligence{' '}
            <span style={{ background: 'linear-gradient(135deg,#60A5FA 0%,#93C5FD 50%,#BFDBFE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              at Scale
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="text-base sm:text-lg leading-relaxed max-w-2xl mb-6" style={{ color: 'rgba(219,234,254,0.78)' }}>
            With artificial intelligence at a crucial inflection point, Ancile is helping organizations weave together human and technological capabilities to maximize value potential, productivity, and innovation from AI.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.38 }}
            className="text-sm sm:text-base leading-relaxed max-w-2xl mb-12" style={{ color: 'rgba(191,219,254,0.62)' }}>
            When predictive AI is complemented by generative AI, their combined power offers stronger capabilities and greater, sustained AI value creation. Building from a proven strategic playbook, our AI strategy consulting team empowers clients to focus on key strategic opportunities and execute a comprehensive AI business transformation.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.5 }}
            className="flex flex-wrap gap-4">
            <a href="#services"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white transition-all duration-300"
              style={{ background: '#2F80ED', boxShadow: '0 8px 32px rgba(47,128,237,0.5)' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1E5DB8'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#2F80ED'; }}>
              Explore AI Services <ArrowRight />
            </a>
            <a href="#approach"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold transition-all duration-300"
              style={{ border: '1.5px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
              Our Approach
            </a>
          </motion.div>
        </div>

        {/* Hero stats */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-5">
          {[
            { val: 10, suffix: '-20-70', label: 'AI Value Framework' },
            { val: 72, suffix: '%', label: 'AI Value in Core Functions' },
            { val: 60, suffix: '%', label: 'Companies Using GenAI' },
            { val: 15, suffix: '+', label: 'AI Partners Worldwide' },
          ].map((s, i) => (
            <div key={s.label} className="rounded-2xl p-5 flex flex-col gap-1"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', backdropFilter: 'blur(14px)' }}>
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                <CountUp to={s.val} suffix={s.suffix} duration={2 + i * 0.2} />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'rgba(191,219,254,0.5)' }}>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═════════════════════════════════════════════ AI SERVICES SECTION ═══ */
const AI_SERVICES = [
  {
    id: 'agents',
    tag: 'AI Agents',
    title: 'AI Agents',
    desc: 'Imagine a teammate that works tirelessly, learns continuously, and adapts to your needs. With the ability to observe, plan, and act autonomously, AI agents open a new chapter of end-to-end transformation across industries—streamlining processes, driving data insights, and augmenting human potential like never before.',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=900&q=80',
    color: '#2F80ED',
    accent: '#60A5FA',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    id: 'genai',
    tag: 'Generative AI',
    title: 'Generative AI',
    desc: 'Generative artificial intelligence is a form of AI that uses deep learning and GANs for content creation. Learn how it can disrupt or benefit businesses—from creative automation to intelligent data synthesis and enterprise-grade productivity transformation.',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80',
    color: '#1E5DB8',
    accent: '#93C5FD',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    id: 'responsible',
    tag: 'Responsible AI',
    title: 'Responsible AI',
    desc: 'Our Ancile responsible AI consulting team helps organizations execute a strategic approach to responsible AI through a tailored program based on five pillars—ensuring AI deployments are fair, transparent, accountable, and aligned with human values.',
    img: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=900&q=80',
    color: '#0EA5E9',
    accent: '#7DD3FC',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    id: 'physical',
    tag: 'Physical AI',
    title: 'Physical AI',
    desc: 'Machines are beginning to sense, decide, and act in the real world. Known as physical artificial intelligence, this frontier opens new pathways to productivity and performance across industrial systems, logistics, and end-to-end workflows.',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80',
    color: '#6366F1',
    accent: '#A5B4FC',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
];

function AIServicesSection() {
  const [active, setActive] = useState(0);
  const svc = AI_SERVICES[active];

  return (
    <section id="services" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }} className="mb-16">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-5"
            style={{ background: 'rgba(47,128,237,0.08)', border: '1px solid rgba(47,128,237,0.2)', color: '#2F80ED' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            AI Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight">Our AI Services</h2>
        </motion.div>

        {/* Tab nav */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-10">
          {AI_SERVICES.map((s, i) => (
            <button key={s.id} onClick={() => setActive(i)}
              className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300"
              style={active === i
                ? { background: s.color, color: '#fff', boxShadow: `0 6px 24px ${s.color}44` }
                : { background: '#F1F5F9', color: '#64748B', border: '1px solid #E2E8F0' }}>
              <span style={{ color: active === i ? '#fff' : s.color }}>{s.icon}</span>
              {s.tag}
            </button>
          ))}
        </motion.div>

        {/* Active card */}
        <AnimatePresence mode="wait">
          <motion.div key={svc.id}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-3xl overflow-hidden"
            style={{ border: '1px solid #E2E8F0', boxShadow: '0 4px 40px rgba(15,23,42,0.07)' }}>
            {/* Text side */}
            <div className="p-10 sm:p-14 flex flex-col justify-between bg-white">
              <div>
                <div className="h-14 w-14 rounded-2xl flex items-center justify-center mb-7"
                  style={{ background: `${svc.color}15`, color: svc.color, border: `1px solid ${svc.color}25` }}>
                  {svc.icon}
                </div>
                <div className="h-1 w-12 rounded-full mb-7" style={{ background: svc.color }} />
                <h3 className="font-display text-3xl font-extrabold text-slate-900 mb-5">{svc.title}</h3>
                <p className="text-base leading-relaxed text-slate-500">{svc.desc}</p>
              </div>
              <div className="mt-10">
                <a href="#"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all duration-300"
                  style={{ background: svc.color, boxShadow: `0 6px 24px ${svc.color}44` }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.boxShadow = `0 10px 32px ${svc.color}55`; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.boxShadow = `0 6px 24px ${svc.color}44`; }}>
                  Learn More <ArrowRight />
                </a>
              </div>
            </div>
            {/* Image side */}
            <div className="relative overflow-hidden min-h-[300px] lg:min-h-0">
              <img src={svc.img} alt={svc.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${svc.color}22 0%, transparent 60%)` }} />
              {/* Floating tag */}
              <div className="absolute top-6 right-6 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
                style={{ background: svc.color, boxShadow: `0 4px 16px ${svc.color}55` }}>
                {svc.tag}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mini service cards below */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-8">
          {AI_SERVICES.map((s, i) => (
            <motion.button key={s.id} onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="text-left p-5 rounded-2xl transition-all duration-300 flex flex-col gap-3"
              style={active === i
                ? { background: `${s.color}12`, border: `1.5px solid ${s.color}`, boxShadow: `0 8px 24px ${s.color}20` }
                : { background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
              <div className="h-10 w-10 rounded-xl flex items-center justify-center"
                style={{ background: `${s.color}15`, color: s.color }}>
                {s.icon}
              </div>
              <span className="font-bold text-sm text-slate-800">{s.tag}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════ APPROACH / DRI SECTION ═══ */
const DRI_PLAYS = [
  {
    key: 'deploy',
    label: 'Deploy',
    subtitle: 'GenAI in Everyday Tools',
    color: '#2F80ED',
    pct: '10–15%',
    pctLabel: 'Workforce productivity boost',
    stat: '60%',
    statLabel: 'of companies have active deploy plays',
    body: 'Organizations can begin deploying GenAI by leveraging off-the-shelf tools, boosting workforce productivity by 10%-15% and generating excitement for broader AI impact. Using tools such as ChatGPT Enterprise, Microsoft Copilot, and Adobe Firefly. The widespread adoption of AI starts in the design stage, where our consultants help you engage AI solutions that solve real business problems and foster employees\' trust in the technology.',
  },
  {
    key: 'reshape',
    label: 'Reshape',
    subtitle: 'Critical Functions',
    color: '#1E5DB8',
    pct: '72%',
    pctLabel: 'AI value in core functions',
    stat: '68%',
    statLabel: 'of AI companies have reshape plays in motion',
    body: 'Of the companies on their AI transformation journey, 68% have reshape plays in motion, transforming their support functions with AI before moving to the core functions critical to their industry. AI-mature companies are already generating 72% of their AI value in core functions like operations, marketing, and sales. We help reimagine functions end-to-end, boosting efficiency and effectiveness through reengineered workflows.',
  },
  {
    key: 'invent',
    label: 'Invent',
    subtitle: 'New Business Models',
    color: '#0EA5E9',
    pct: '46%',
    pctLabel: 'of AI-mature companies executing invent plays',
    stat: 'New',
    statLabel: 'Revenue opportunities unlocked',
    body: 'It is also important to keep inventing new offers, services, and experiences with AI, capitalizing on the GenAI era of innovation to shape the future of industries and functions. With only 46% of AI-mature companies executing invent plays, our AI strategy consulting team make it easier to integrate your data into existing processes—connecting GenAI to your core strengths to make new offerings stand out.',
  },
];

function ApproachSection() {
  const [activePlay, setActivePlay] = useState(0);
  const play = DRI_PLAYS[activePlay];

  return (
    <section id="approach" className="py-24 sm:py-32 overflow-hidden" style={{ backgroundColor: '#F8FAFC', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }} className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-5"
            style={{ background: 'rgba(47,128,237,0.08)', border: '1px solid rgba(47,128,237,0.2)', color: '#2F80ED' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Strategic Framework
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-5">
            Our Approach to Artificial Intelligence at Scale
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-500">
            For Ancile and our clients, the future of AI offers both a strategic tool to scale up value and a viable solution to our most pressing global challenges. We prioritize a <strong className="text-slate-700">10-20-70 approach</strong> that emphasizes algorithms (10%), tech and data (20%), and people and processes (70%).
          </p>
        </motion.div>

        {/* 10-20-70 visual */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {[
            { pct: '10%', label: 'Algorithms', color: '#2F80ED' },
            { pct: '20%', label: 'Tech & Data', color: '#1E5DB8' },
            { pct: '70%', label: 'People & Processes', color: '#0B1A2E' },
          ].map((item, i) => (
            <motion.div key={item.label}
              initial={{ opacity: 0, scaleY: 0 }} whileInView={{ opacity: 1, scaleY: 1 }} viewport={viewportOnce}
              transition={{ duration: 0.8, ease, delay: i * 0.12 }}
              className="rounded-2xl p-6 flex flex-col items-center text-center gap-2"
              style={{ background: item.color, minHeight: `${60 + i * 40}px` }}>
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-white">{item.pct}</span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.75)' }}>{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Three Strategic Plays */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.7, ease }} className="mb-10">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">Three Strategic Plays to Maximize AI Value Creation</h3>
          <p className="text-slate-500 text-sm">Our DRI framework — Deploy, Reshape, Invent — guides clients to long-term competitive advantage.</p>
        </motion.div>

        {/* DRI tab switcher */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {DRI_PLAYS.map((p, i) => (
            <motion.button key={p.key} onClick={() => setActivePlay(i)}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              className="rounded-full px-6 py-3 text-sm font-bold transition-all duration-300"
              style={activePlay === i
                ? { background: p.color, color: '#fff', boxShadow: `0 6px 24px ${p.color}44` }
                : { background: '#fff', color: '#64748B', border: '1px solid #E2E8F0' }}>
              {p.label}: {p.subtitle}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={play.key}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main body */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 sm:p-10"
              style={{ border: `1.5px solid ${play.color}30`, boxShadow: `0 8px 40px ${play.color}12` }}>
              <div className="h-1 w-16 rounded-full mb-6" style={{ background: play.color }} />
              <h4 className="font-display text-2xl font-extrabold mb-4" style={{ color: '#1E293B' }}>
                {play.label} {play.subtitle}
              </h4>
              <p className="text-slate-500 leading-relaxed text-base">{play.body}</p>
            </div>
            {/* Stats sidebar */}
            <div className="flex flex-col gap-5">
              <div className="bg-white rounded-2xl p-7 flex flex-col gap-2" style={{ border: '1px solid #E2E8F0' }}>
                <span className="font-display text-4xl font-extrabold" style={{ color: play.color }}>{play.pct}</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{play.pctLabel}</span>
              </div>
              <div className="rounded-2xl p-7 flex flex-col gap-2" style={{ background: play.color }}>
                <span className="font-display text-4xl font-extrabold text-white">{play.stat}</span>
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.72)' }}>{play.statLabel}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════ CEO DATA + NEWS SECTION ═══ */
const NEWS = [
  {
    date: 'June 27, 2025', source: 'Vogue Business',
    title: "What's Agentic AI and What Should Brands Know About It?",
    body: 'Agentic AI is the fashion world\'s new obsession. LVMH and Diane von Furstenberg are exploring AI agents that can set goals, make decisions, and transform everything from in-store luxury experiences to supply chain forecasting.',
  },
  {
    date: 'February 6, 2025', source: 'Fortune',
    title: 'How Much Do Aspiring CEOs Really Need to Know About AI?',
    body: 'AI is reshaping what it takes to lead. Future CEOs should not chase the "next big tech," but get hands-on with AI—integrating it into workflows and learning its real applications.',
  },
  {
    date: 'January 30, 2025', source: 'The Wall Street Journal',
    title: 'How to Reduce AI Chatbot Hallucinations',
    body: 'AI chatbots can dazzle—but they also hallucinate. Vague prompts fuel errors. Detailed instructions, structured queries, and smarter techniques can help you get more accurate answers from your AI.',
  },
  {
    date: 'January 30, 2025', source: 'Forbes',
    title: "Why 75% of Businesses Aren't Seeing ROI from AI Yet",
    body: 'Despite massive AI investments, only 25% of companies are seeing ROI. Rethinking workflows, aligning incentives, and focusing ruthlessly on value makes the difference.',
  },
];

function NewsSectionFull() {
  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">

        {/* CEO Data Point highlight */}
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }}
          className="rounded-3xl mb-16 p-10 sm:p-14 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#0F172A 0%,#1E3A6E 60%,#2F80ED 100%)', border: '1px solid rgba(255,255,255,0.06)' }}>
          {/* Animated grid */}
          <div aria-hidden className="pointer-events-none absolute inset-0"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', color: '#93C5FD' }}>
                <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
                CEO Data Point Interactive
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
                Explore the trends shaping CEO priorities with insights powered by AI.
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(191,219,254,0.72)' }}>
                Powered by Ancile AI and deep industry expertise, it analyzes thousands of earnings call transcripts and keywords to reveal the trends gaining and losing momentum in CEO conversations.
              </p>
              <a href="#"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-300"
                style={{ background: '#60A5FA', color: '#0F172A', textDecoration: 'none', boxShadow: '0 6px 24px rgba(96,165,250,0.4)' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#93C5FD'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#60A5FA'; }}>
                Explore the Data <ArrowRight />
              </a>
            </div>
            {/* Visual right panel */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                {/* Animated concentric rings */}
                {[80, 140, 200, 260].map((r, i) => (
                  <motion.div key={i} animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{ duration: 20 + i * 8, repeat: Infinity, ease: 'linear' }}
                    className="absolute rounded-full border border-white/10"
                    style={{ width: r, height: r, top: '50%', left: '50%', transform: `translate(-50%,-50%)` }} />
                ))}
                <div className="relative z-10 h-32 w-32 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(47,128,237,0.2)', border: '2px solid rgba(96,165,250,0.4)', backdropFilter: 'blur(12px)' }}>
                  <svg className="h-12 w-12 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* News Headlines */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.7, ease }} className="mb-10">
          <h2 className="font-display text-4xl font-extrabold text-slate-900">Our Latest News Headlines</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS.map((n, i) => (
            <motion.div key={n.title}
              initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.65, ease, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(47,128,237,0.12)' }}
              className="group bg-white rounded-3xl p-7 flex flex-col cursor-pointer transition-all duration-300"
              style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(15,23,42,0.04)' }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: '#2F80ED' }}>{n.source}</span>
                <span className="text-[10px] text-slate-400">•</span>
                <span className="text-[10px] text-slate-400">{n.date}</span>
              </div>
              <h3 className="font-display font-extrabold text-base text-slate-800 leading-snug mb-3 group-hover:text-[#2F80ED] transition-colors flex-1">
                {n.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-500 mb-5">{n.body}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
                style={{ color: '#2F80ED', borderBottom: '1.5px solid #2F80ED' }}>
                Learn More <ArrowRight size={11} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════ PARTNERS SECTION ═══ */
const PARTNERS = ['AWS', 'Google', 'IBM', 'Microsoft', 'Salesforce', 'SAP', 'OpenAI', 'Anthropic', 'LangChain', 'Palantir'];

function PartnersSection() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden" style={{ backgroundColor: '#F8FAFC', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.9, ease }}>
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6"
              style={{ background: 'rgba(47,128,237,0.08)', border: '1px solid rgba(47,128,237,0.2)', color: '#2F80ED' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Ecosystem
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-6">
              Our AI &amp; GenAI Collaborations
            </h2>
            <p className="text-base leading-relaxed text-slate-500 mb-6">
              Ancile is more than just a strategic consultant. Our clients benefit from our global ecosystem of AI and GenAI collaborations, including those with leading tech companies like AWS, Google, IBM, Microsoft, Salesforce, and SAP—and with AI-centered enterprises such as OpenAI, Anthropic, LangChain, and Palantir.
            </p>
            <p className="text-base leading-relaxed text-slate-500 mb-10">
              Working together, we deliver unprecedented value across four critical transformation pillars: optimizing existing technology, reshaping business functions, inventing new business opportunities, and reimagining entire organizations.
            </p>
            <a href="#"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider pb-1 transition-all duration-200"
              style={{ color: '#2F80ED', borderBottom: '2px solid #2F80ED', textDecoration: 'none' }}>
              Learn More <ArrowRight size={12} />
            </a>
          </motion.div>

          {/* Partner grid */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {PARTNERS.map((p, i) => (
              <motion.div key={p}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewportOnce}
                transition={{ duration: 0.5, ease, delay: i * 0.07 }}
                whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(47,128,237,0.15)' }}
                className="bg-white rounded-2xl p-5 flex items-center justify-center text-center transition-all duration-300 cursor-default"
                style={{ border: '1px solid #E2E8F0', minHeight: '72px' }}>
                <span className="font-display font-extrabold text-slate-700 text-sm tracking-tight">{p}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════ INSIGHTS SECTION ═══ */
const INSIGHTS = [
  {
    cat: 'Business Transformation', type: 'Article', date: 'March 26, 2026',
    title: 'Five Barriers CEOs Must Overcome for AI Impact',
    body: 'It is easy to get distracted by the illusion of fast AI progress. The leaders who turn AI into financial value apply transformation discipline.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
    color: '#2F80ED',
  },
  {
    cat: 'Principal Investors & Private Equity', type: 'Article', date: 'January 23, 2026',
    title: 'The AI-First Private Equity Firm',
    body: 'Most private equity firms cannot show meaningful returns from AI in many of their portfolio companies. Here\'s what the leaders are doing differently.',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=700&q=80',
    color: '#1E5DB8',
  },
  {
    cat: 'Artificial Intelligence', type: 'Article', date: 'January 22, 2026',
    title: 'The AI-First Life Insurance Company',
    body: 'Advances in AI are giving life insurers new ways to offer clearer guidance, faster decisions, and stronger support when customers need it most.',
    img: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=700&q=80',
    color: '#0EA5E9',
  },
];

function InsightsSection() {
  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-5"
              style={{ background: 'rgba(47,128,237,0.08)', border: '1px solid rgba(47,128,237,0.2)', color: '#2F80ED' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Knowledge Hub
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight">
              Explore Our Insights on AI
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider pb-1 transition-all duration-200 whitespace-nowrap"
            style={{ color: '#2F80ED', borderBottom: '2px solid #2F80ED', textDecoration: 'none' }}>
            See More Insights <ArrowRight size={12} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {INSIGHTS.map((ins, i) => (
            <motion.div key={ins.title}
              initial={{ opacity: 0, y: 44 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.75, ease, delay: i * 0.12 }}
              whileHover={{ y: -8, boxShadow: `0 20px 48px ${ins.color}18` }}
              className="group rounded-3xl overflow-hidden cursor-pointer transition-all duration-400"
              style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 16px rgba(15,23,42,0.05)' }}>
              <div className="relative h-52 overflow-hidden">
                <img src={ins.img} alt={ins.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 40%, ${ins.color}BB 100%)` }} />
                <span className="absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
                  style={{ background: ins.color }}>
                  {ins.type}
                </span>
              </div>
              <div className="p-7 bg-white">
                <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: ins.color }}>{ins.cat}</p>
                <p className="text-xs text-slate-400 mb-4">{ins.date}</p>
                <div className="h-[2px] w-8 rounded-full mb-5 transition-all duration-300 group-hover:w-14" style={{ background: ins.color }} />
                <h3 className="font-display font-extrabold text-lg text-slate-800 leading-snug mb-3 group-hover:text-slate-900 transition-colors">
                  {ins.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 mb-5">{ins.body}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider" style={{ color: ins.color }}>
                  Read Article <ArrowRight size={11} color={ins.color} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════ ANCILE ANSWER + EXPLORE MORE ═══ */
function ExploreMoreSection() {
  return (
    <section className="overflow-hidden" style={{ backgroundColor: '#F8FAFC', ...DOT_BG }}>
      {/* Ancile Answer banner */}
      <div className="py-16 sm:py-20" style={{ background: 'linear-gradient(135deg,#EAF3FF 0%,#DBEAFE 60%,#EFF6FF 100%)' }}>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.85, ease }}>
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] mb-5 px-3 py-1 rounded-full"
                style={{ background: 'rgba(47,128,237,0.12)', color: '#2F80ED', border: '1px solid rgba(47,128,237,0.22)' }}>
                New AI-Powered Feature
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-5">
                Ancile Answer
              </h2>
              <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-md">
                Discover the answer to your most important business challenges. Ancile Answer delivers integrated insights powered by our cross-functional expertise and the latest thinking shaping today's business decisions. Bringing together our most relevant perspectives, Ancile Answer guides you to what matters most right now.
              </p>
              <a href="#"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all duration-300"
                style={{ background: '#2F80ED', boxShadow: '0 6px 24px rgba(47,128,237,0.35)', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1E5DB8'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#2F80ED'; }}>
                Ask Us a Question <ArrowRight />
              </a>
            </motion.div>
            {/* Right visual */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.85, ease, delay: 0.15 }}
              className="relative flex items-center justify-center" style={{ minHeight: '300px' }}>
              {/* Animated blob */}
              <motion.div animate={{ scale: [1, 1.08, 1], borderRadius: ['40% 60% 60% 40%/40% 40% 60% 60%', '60% 40% 40% 60%/60% 60% 40% 40%', '40% 60% 60% 40%/40% 40% 60% 60%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 m-auto"
                style={{ width: 280, height: 280, background: 'linear-gradient(135deg,rgba(47,128,237,0.25) 0%,rgba(96,165,250,0.15) 100%)' }} />
              {/* Floating cards */}
              {[
                { icon: '🤖', label: 'AI Agents', pos: 'top-4 left-4' },
                { icon: '✨', label: 'GenAI', pos: 'top-4 right-4' },
                { icon: '🧠', label: 'Deep Learning', pos: 'bottom-4 left-4' },
                { icon: '🌐', label: 'Physical AI', pos: 'bottom-4 right-4' },
              ].map((card, i) => (
                <motion.div key={card.label}
                  animate={{ y: [0, -6, 0] }} transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
                  className={`absolute ${card.pos} bg-white rounded-xl px-4 py-2.5 flex items-center gap-2 shadow-lg`}
                  style={{ border: '1px solid rgba(47,128,237,0.15)' }}>
                  <span>{card.icon}</span>
                  <span className="text-xs font-bold text-slate-700">{card.label}</span>
                </motion.div>
              ))}
              {/* Center icon */}
              <div className="relative z-10 h-20 w-20 rounded-2xl bg-white flex items-center justify-center shadow-xl"
                style={{ border: '1px solid rgba(47,128,237,0.2)' }}>
                <svg className="h-10 w-10 text-[#2F80ED]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Explore More grid */}
      <div className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.7, ease }}
            className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 mb-12">
            Explore More
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Wide dark card */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.75, ease }}
              whileHover={{ y: -5, boxShadow: '0 20px 48px rgba(11,26,46,0.45)' }}
              className="lg:col-span-6 group relative rounded-[28px] overflow-hidden flex flex-col justify-between p-8 sm:p-10 cursor-pointer transition-all duration-300 min-h-[300px]"
              style={{ backgroundColor: '#0B1A2E', border: '1px solid rgba(255,255,255,0.06)' }}>
              {/* Background arrows */}
              <div className="absolute right-0 top-0 bottom-0 w-2/5 pointer-events-none overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="absolute" style={{
                    top: '50%', right: `${i * 20}px`,
                    width: 0, height: 0,
                    borderTop: '60px solid transparent',
                    borderBottom: '60px solid transparent',
                    borderLeft: `40px solid rgba(47,128,237,${0.15 - i * 0.02})`,
                    transform: 'translateY(-50%)',
                  }} />
                ))}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block" style={{ color: 'rgba(96,165,250,0.7)' }}>Next Section</span>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Our Latest Thinking on Artificial Intelligence
                </h3>
              </div>
              <div className="mt-8 self-start">
                <div className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 group-hover:scale-105"
                  style={{ backgroundColor: '#2F80ED' }}>
                  Learn More <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>

            {/* Right 2 stacked cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {[
                {
                  tag: 'Capability',
                  title: 'Ancile X',
                  desc: 'Our in-house design-and-build capability, offering practical AI solutions and customized, industrial-grade platforms.',
                  img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
                  color: '#2F80ED',
                },
                {
                  tag: 'Capability',
                  title: 'Digital, Technology, and Data',
                  desc: 'Unlock the full potential of your digital and data capabilities to power AI-driven business transformation.',
                  img: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=600&q=80',
                  color: '#1E5DB8',
                },
              ].map((card, i) => (
                <motion.div key={card.title}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                  transition={{ duration: 0.65, ease, delay: 0.1 + i * 0.1 }}
                  whileHover={{ y: -4, boxShadow: `0 12px 32px ${card.color}18` }}
                  className="group grid grid-cols-2 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                  style={{ border: '1px solid #E2E8F0', background: '#EAF3FF', minHeight: '120px' }}>
                  <div className="p-5 flex flex-col justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2" style={{ color: '#64748B' }}>{card.tag}</span>
                    <h4 className="font-display font-extrabold text-base leading-snug" style={{ color: '#1E293B' }}>{card.title}</h4>
                  </div>
                  <div className="relative overflow-hidden">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${card.color}22 0%, transparent 60%)` }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════ PAGE ROOT ═══ */
export default function ArtificialIntelligencePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AIServicesSection />
      <ApproachSection />
      <NewsSectionFull />
      <PartnersSection />
      <InsightsSection />
      <ExploreMoreSection />
      <Footer />
    </div>
  );
}
