import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { viewportOnce } from '../utils/motion.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const ease = [0.22, 1, 0.36, 1];

const DOT_BG = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.08) 1.5px, transparent 1.5px)',
  backgroundSize: '24px 24px'
};

const GRID_BG = {
  backgroundImage:
    'linear-gradient(rgba(47,128,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(47,128,237,0.04) 1px, transparent 1px)',
  backgroundSize: '48px 48px',
};

const ArrowRight = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const Pill = ({ children, color = '#2F80ED' }) => (
  <span
    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-5"
    style={{ background: `${color}14`, border: `1px solid ${color}30`, color }}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {children}
  </span>
);

export default function RiskAndSecurityPage() {
  useEffect(() => {
    document.title = 'Risk and Security — Unified Cyber Protection | Ancile Inc';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <InItWithYouSection />
      <CapabilitiesSection />
      <OurApproachSection />
      <PartnershipsSection />
      <InsightsSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ HERO ═══ */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: '#0B1120' }}
    >
      {/* Box grid bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Background image full-bleed clone style */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Risk-and-Security/Risk-and-Security-homepage.webp"
          alt="Risk and Security"
          aria-hidden
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.24 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,17,32,0.92) 0%, rgba(11,17,32,0.55) 40%, rgba(11,17,32,0.65) 70%, rgba(11,17,32,0.97) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(11,17,32,0.85) 0%, rgba(11,17,32,0.4) 50%, transparent 100%)' }} />
      </div>

      {/* Glowing orbs */}
      <motion.div aria-hidden animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} className="pointer-events-none absolute top-[-80px] right-[-60px] w-[700px] h-[600px] rounded-full blur-[130px]" style={{ background: 'rgba(47,128,237,0.15)', zIndex: 1 }} />
      <motion.div aria-hidden animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.13, 0.06] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }} className="pointer-events-none absolute bottom-0 left-[-80px] w-[500px] h-[400px] rounded-full blur-[110px]" style={{ background: 'rgba(99,102,241,0.12)', zIndex: 1 }} />

      <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 sm:px-8 lg:px-12 pt-36 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-7" style={{ border: '1px solid rgba(47,128,237,0.35)', background: 'rgba(47,128,237,0.1)', color: '#2F80ED' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
              Cyber Resilience
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease, delay: 0.1 }} className="font-display font-extrabold leading-[1.06] tracking-tight text-white mb-6" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Risk and{' '}
              <span style={{ background: 'linear-gradient(135deg, #60A5FA 0%, #93C5FD 60%, #BFDBFE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Security</span>
            </motion.h1>
            <motion.div initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, ease, delay: 0.55 }} style={{ height: '1.5px', background: 'linear-gradient(90deg, rgba(47,128,237,0.7), transparent)', maxWidth: '340px', marginBottom: '1.6rem' }} />
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.28 }} className="text-base sm:text-lg leading-[1.8] mb-10 max-w-lg" style={{ color: 'rgba(255,255,255,0.68)' }}>
              Unified, proactive cybersecurity strategies that safeguard every layer of your enterprise. Mitigate threats, optimize assets, and secure data privacy.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.42 }} className="flex flex-wrap gap-4">
              <a href="#overview" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm transition-all duration-300" style={{ backgroundColor: '#2F80ED', boxShadow: '0 8px 32px rgba(47,128,237,0.42)', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1E5DB8'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2F80ED'; }}>
                Explore Protection
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300" style={{ border: '1.5px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.82)', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Talk to an Expert
              </Link>
            </motion.div>
          </div>

          {/* Floating visual card on right */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, ease, delay: 0.3 }} className="relative hidden lg:block">
            <div className="relative rounded-[28px] overflow-hidden" style={{ height: '520px', boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)' }}>
              <img src="/Risk-and-Security/Risk-and-Security-homepage.webp" alt="Risk and Security Overview" className="w-full h-full object-cover object-center" style={{ opacity: 0.88 }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(11,17,32,0.7) 100%)' }} />
              <div className="absolute bottom-5 left-5 px-4 py-2.5 rounded-xl flex items-center gap-2.5 backdrop-blur-md" style={{ background: 'rgba(11,17,32,0.65)', border: '1px solid rgba(255,255,255,0.14)' }}>
                <span className="h-2 w-2 rounded-full bg-[#2F80ED] animate-pulse" />
                <span className="text-white text-[11px] font-bold uppercase tracking-wider">Unified Cyber Defense</span>
              </div>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-5 right-5 rounded-2xl px-4 py-3" style={{ background: 'rgba(11,17,32,0.7)', border: '1px solid rgba(47,128,237,0.35)', backdropFilter: 'blur(12px)' }}>
                <div className="text-lg font-extrabold text-white leading-none">GRC Integrated</div>
                <div className="text-[10px] mt-0.5 font-semibold uppercase tracking-wider" style={{ color: 'rgba(96,165,250,0.85)' }}>Decades of Expertise</div>
              </motion.div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full -z-10" style={{ background: 'rgba(47,128,237,0.12)', filter: 'blur(32px)' }} />
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full -z-10" style={{ background: 'rgba(99,102,241,0.1)', filter: 'blur(24px)' }} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.6 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.28)' }}>Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} className="h-8 w-5 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-white/35" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════ OVERVIEW SECTION — white ═══ */
function OverviewSection() {
  const GRC_DELIVERABLES = [
    { title: 'Regulatory Compliance', desc: 'Minimizing legal and financial exposure through robust framework auditing.' },
    { title: 'Risk Mitigation', desc: 'Identifying and eliminating vulnerabilities to proactively prevent costly security breaches.' },
    { title: 'Operational Efficiency', desc: 'Streamlining security workflows and processes with a fully unified modern framework.' },
    { title: 'Proactive Monitoring', desc: 'Detecting systems threat vectors early to prevent expensive operational disruptions.' }
  ];

  return (
    <section id="overview" className="py-24 sm:py-32 bg-white border-b border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease }}
            className="lg:col-span-5"
          >
            <Pill>Overview</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Comprehensive. Integrated. Proactive.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="lg:col-span-7 text-base sm:text-lg leading-relaxed text-slate-500 space-y-6"
          >
            <p>
              In the digital age, security means thinking bigger: a unified, proactive strategy that safeguards every layer. Our integrated approach transforms protection into a smarter, more resilient cyber landscape—built to counter today’s evolving threats and tomorrow’s unknowns. By addressing risks across every domain, our solutions protect what matters most: your assets and your data.
            </p>
            <p className="text-slate-600 font-semibold">
              Backed by decades of cross-industry expertise, we embed Governance, Risk and Compliance (GRC) into every aspect of our solutions to assess and mitigate risks across your environment.
            </p>
          </motion.div>
        </div>

        {/* 4 Mini deliverables cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GRC_DELIVERABLES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-white p-7 rounded-3xl border border-slate-100 hover:border-blue-500/20 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="h-2 w-10 rounded-full bg-blue-500 mb-5" />
              <h3 className="font-display font-extrabold text-slate-800 text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ IN IT WITH YOU — BOX GRID BG ═══ */
function InItWithYouSection() {
  const bulletPoints = [
    'Proactively protecting assets and neutralizing risks while ensuring compliance',
    'Unifying IT, business operations and infrastructure-wide data to manage evolving threats',
    'Applying best practices to maintain confidentiality, integrity and availability'
  ];

  return (
    <section className="py-24 sm:py-32 overflow-hidden border-b border-slate-100" style={{ backgroundColor: '#FAFAF9', ...GRID_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease }}
          >
            <Pill>In It With You</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-6">
              Holistic Threat &amp; Infrastructure Monitoring
            </h2>
            <p className="text-base leading-relaxed text-slate-500 mb-6">
              We offer a centralized, holistic view of cybersecurity and critical infrastructure monitoring. Our tool-agnostic models unify IT, operations and data for agile, scalable solutions tailored to your environment. The goal? Transform and maintain enterprise security through compliance and data privacy.
            </p>
            
            <div className="flex flex-col gap-4 mt-8">
              {bulletPoints.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-blue-500/10 text-blue-500" style={{ border: '1px solid rgba(47,128,237,0.25)' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-semibold">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-xl relative overflow-hidden"
          >
            {/* Visual background elements */}
            <div className="absolute right-0 bottom-0 pointer-events-none opacity-5">
              <svg width="180" height="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L100 50L50 100L0 50L50 0Z" fill="#2F80ED" />
              </svg>
            </div>
            
            <div className="h-1 w-12 rounded-full mb-6 bg-blue-500" />
            <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-4">Enterprise Defense Model</h3>
            <p className="text-slate-500 leading-relaxed text-sm mb-6">
              Ancile unifies operational signals across physical, virtual, and cloud architectures. Our models adapt to your existing stack—enforcing compliance controls without vendor lock-in.
            </p>
            <div className="rounded-2xl p-5 bg-slate-900">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">Security Architecture</span>
              <p className="text-white font-extrabold text-lg mt-1">Holistic. Agnostic. Scalable.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ CAPABILITIES — white dot bg ═══ */
function CapabilitiesSection() {
  const capabilities = [
    {
      icon: '🛡️',
      title: 'Governance, Risk and Compliance',
      desc: 'Secure your data and strengthen your security posture with integrated GRC foundational security frameworks, ensuring regulatory compliance across infrastructure, cloud and data sources.'
    },
    {
      icon: '🤖',
      title: 'AI Governance',
      desc: 'The cornerstone of AI security. Implement policies, guidelines, controls and risk assessments that dictate how AI systems should be developed, deployed and monitored.'
    },
    {
      icon: '🔑',
      title: 'Identity and Access Management',
      desc: 'Fingerprint Scanning Technology Concept. Secure and optimize enterprise directories. Establish robust controls to manage user access, authentication systems, and privileges.'
    },
    {
      icon: '🎯',
      title: 'Threat and Vulnerability Management',
      desc: 'Stay ahead of potential threats before they become major issues with strategic planning, roadmapping and clearly defined KPIs. Identify and prioritize vulnerabilities, aligning security controls with your risk profile.'
    },
    {
      icon: '💻',
      title: 'Application Security / DevSecOps',
      desc: 'Implement robust, integrated security frameworks to protect applications across their life cycles. By aligning with organizational governance and regulatory compliance, ensure adherence to industry standards.'
    },
    {
      icon: '📡',
      title: 'Cybersecurity Operations',
      desc: 'Integrate information security and IT operations to streamline processes, enhance efficiency and boost security. From threat analysis to SOC implementation, discover cybersecurity solutions that deliver robust defense.'
    },
    {
      icon: '🔍',
      title: 'AML, Fraud Detection & Prevention',
      desc: 'Safeguard your organization’s environment by implementing a proactive approach to detect and manage suspicious activity. With programs tailored to stay on top of risk assessments and alerts.'
    },
    {
      icon: '📦',
      title: 'Asset Management',
      desc: 'Secure and optimize assets across your infrastructure with improved asset visibility, streamlined management, asset monitoring, vulnerability alignment and risk mitigation.'
    }
  ];

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-white overflow-hidden border-b border-slate-100" style={DOT_BG}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl mb-20"
        >
          <Pill>Our Capabilities</Pill>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-6">
            Foundational Protection &amp; Defense Operations
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-500">
            In today’s threat landscape, security isn’t optional—it’s foundational. We design and implement strategies that mitigate risk, ensure compliance and drive sustainable results. Defensive operations and infrastructure monitoring empower your organization to protect assets, adapt for the future and meet business objectives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease, delay: i * 0.07 }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(47,128,237,0.08)' }}
              className="bg-white rounded-3xl p-7 flex flex-col gap-4 border border-slate-100 hover:border-blue-500/20 shadow-sm transition-all duration-300 cursor-default"
            >
              <div className="h-12 w-12 rounded-2xl flex items-center justify-center text-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500">
                {c.icon}
              </div>
              <h3 className="font-display font-extrabold text-slate-800 text-lg leading-snug">{c.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ OUR APPROACH SECTION ═══ */
function OurApproachSection() {
  const approaches = [
    {
      title: 'DevOps & Agile',
      desc: 'Accelerate speed and delivery for scalable growth.',
      link: '/devops-agile'
    },
    {
      title: 'Workforce Development',
      desc: 'Our innovative workforce solutions help unlock your team’s highest performance.',
      link: '/contact'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease }}
            className="lg:col-span-5"
          >
            <Pill>Our Approach</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              How We Do It
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {approaches.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.75, ease, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="h-1.5 w-12 rounded-full mb-6 bg-blue-500" />
                <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-base mb-6">{item.desc}</p>
              </div>
              <Link
                to={item.link}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider pb-1 transition-all duration-200 self-start hover:text-blue-500"
                style={{ color: '#2F80ED', borderBottom: '2px solid #2F80ED', textDecoration: 'none' }}
              >
                Learn More <ArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ PARTNERSHIPS — CLONED FROM IMAGE ═══ */
function PartnershipsSection() {
  const brands = [
    { name: 'AWS', label: 'aws' },
    { name: 'Google Cloud', label: 'Google Cloud' },
    { name: 'Microsoft', label: 'Microsoft Solutions Partner' },
    { name: 'Red Hat', label: 'Red Hat' },
    { name: 'Snowflake', label: 'snowflake' },
    { name: 'ServiceNow', label: 'servicenow' },
    { name: 'Salesforce', label: 'salesforce' }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left panel matching screenshot perfectly */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-5"
          >
            <span className="text-blue-500 font-semibold text-lg font-display block mb-4">Our Partnerships</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-800 leading-[1.1] tracking-tight mb-6">
              Best-in-Class Integrations
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-500 mb-8">
              The world’s leading technology and software providers partner with us because of our scale, full-stack capabilities and speed. Together, we can deliver new, sustainable growth across your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-bold px-7 py-3 rounded-xl transition-all duration-300"
              style={{
                border: '2px solid #84CC16', // neon lime light green border as in screenshot
                color: '#0F172A',
                background: '#ffffff',
                textDecoration: 'none',
                fontSize: '14px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F8FAFC';
                e.currentTarget.style.borderColor = '#65A30D';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.borderColor = '#84CC16';
              }}
            >
              Meet Our Partners
            </Link>
          </motion.div>

          {/* Right panel logo cards matching screenshot perfectly */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="lg:col-span-7 grid grid-cols-2 gap-4"
          >
            {brands.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                whileHover={{ y: -4, boxShadow: '0 12px 28px rgba(0,0,0,0.06)' }}
                className="bg-white rounded-2xl border border-slate-100 flex items-center justify-center p-6 text-center transition-all duration-300 min-h-[90px]"
                style={{
                  boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                  gridColumn: p.name === 'Salesforce' ? 'span 2' : 'auto',
                  maxWidth: p.name === 'Salesforce' ? '50%' : '100%',
                  justifySelf: p.name === 'Salesforce' ? 'center' : 'stretch',
                  width: p.name === 'Salesforce' ? '100%' : 'auto'
                }}
              >
                {/* Simulated Logo brand mark typography styling */}
                <div className="flex flex-col items-center">
                  <span className="font-display font-extrabold text-[#0B1A2E] text-base tracking-tight">{p.label}</span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Partner</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ FEATURED INSIGHTS — BOX GRID BG ═══ */
function InsightsSection() {
  const insights = [
    {
      color: '#2F80ED',
      icon: '📡',
      tag: 'Article',
      title: 'Mitigate Risk With Security in the Cloud',
      desc: 'Take the complexity out of compliance in the cloud by leveraging the automation power landing zones provide.'
    },
    {
      color: '#1E5DB8',
      icon: '📈',
      tag: 'Success Story',
      title: 'Cloud Capital: Investing in a Seamless AWS Migration',
      desc: 'See how a global investment management company cut costs and boosted security with Ancile Inc’s AWS migration—enabling fast, reliable service and future-ready innovation.'
    },
    {
      color: '#6366F1',
      icon: '🛡️',
      tag: 'Success Story',
      title: 'GLBA Compliance at Scale on AWS',
      desc: 'A major U.S. mortgage lender achieved 100% GLBA compliance across 1.3 PB and 13.5B objects using an AWS-based data anonymization solution with Ancile Inc.'
    }
  ];

  return (
    <section className="py-24 sm:py-32 overflow-hidden" style={{ backgroundColor: '#F8FAFC', ...GRID_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <Pill>Featured Insights</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight">Thinking Forward</h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider pb-1 transition-all duration-200 whitespace-nowrap"
            style={{ color: '#2F80ED', borderBottom: '2px solid #2F80ED', textDecoration: 'none' }}
          >
            See More <ArrowRight size={12} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {insights.map((ins, i) => (
            <motion.div
              key={ins.title}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.75, ease, delay: i * 0.12 }}
              whileHover={{ y: -8, boxShadow: `0 20px 48px ${ins.color}18` }}
              className="group rounded-3xl overflow-hidden cursor-pointer transition-all duration-400 border border-slate-100 shadow-sm"
              style={{ background: '#fff' }}
            >
              {/* Image banner mock */}
              <div className="relative h-48 overflow-hidden" style={{ background: `linear-gradient(135deg, ${ins.color}20 0%, ${ins.color}08 100%)` }}>
                <div className="absolute inset-0 flex items-center justify-center text-6xl">{ins.icon}</div>
                <span className="absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white" style={{ background: ins.color }}>
                  {ins.tag}
                </span>
              </div>
              <div className="p-7 bg-white">
                <div className="h-[2px] w-8 rounded-full mb-5 transition-all duration-300 group-hover:w-14" style={{ background: ins.color }} />
                <h3 className="font-display font-extrabold text-lg text-slate-800 leading-snug mb-3 group-hover:text-slate-900 transition-colors">
                  {ins.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 mb-5">{ins.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider" style={{ color: ins.color }}>
                  Read Now <ArrowRight size={11} color={ins.color} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ FINAL CTA ═══ */
function FinalCTASection() {
  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.85, ease }}
          className="rounded-3xl p-10 sm:p-14 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#0F172A 0%,#1E3A6E 60%,#2F80ED 100%)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', color: '#93C5FD' }}>
                <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" /> Connect With Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
                Interested in speaking with Ancile Inc?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(191,219,254,0.72)' }}>
                Let’s discuss how we can embed GRC, secure operations, and proactive threat management into your business architecture.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-300"
                  style={{ background: '#60A5FA', color: '#0F172A', textDecoration: 'none', boxShadow: '0 6px 24px rgba(96,165,250,0.4)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#93C5FD'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#60A5FA'; }}
                >
                  Get in Touch <ArrowRight />
                </Link>
                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-300"
                  style={{ border: '1.5px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                >
                  Explore Capabilities
                </a>
              </div>
            </div>
            {/* Visual element on right */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                {[80, 140, 200, 260].map((r, i) => (
                  <motion.div key={i} animate={{ rotate: i % 2 === 0 ? 360 : -360 }} transition={{ duration: 20 + i * 8, repeat: Infinity, ease: 'linear' }} className="absolute rounded-full border border-white/10" style={{ width: r, height: r, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                ))}
                <div className="relative z-10 h-32 w-32 rounded-full flex items-center justify-center" style={{ background: 'rgba(47,128,237,0.2)', border: '2px solid rgba(96,165,250,0.4)', backdropFilter: 'blur(12px)' }}>
                  <span className="text-5xl">🛡️</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
