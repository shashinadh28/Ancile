import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { viewportOnce } from '../utils/motion.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const ease = [0.22, 1, 0.36, 1];

const DOT_BG = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.08) 1.5px, transparent 1.5px)',
  backgroundSize: '24px 24px',
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

export default function WorkforceDevelopmentPage() {
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

/* ═══════════════════════════════════════════════ HERO ═══ */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: '#0B1120' }}
    >
      {/* Grid bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Workforce_Development/Workforce-Development_homepage.webp"
          alt="Workforce Development"
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
          {/* Left text */}
          <div>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-7"
              style={{ border: '1px solid rgba(47,128,237,0.35)', background: 'rgba(47,128,237,0.1)', color: '#2F80ED' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
              Workforce Development
            </motion.span>

            <motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease, delay: 0.1 }}
              className="font-display font-extrabold leading-[1.06] tracking-tight text-white mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Future-proof Your{' '}
              <span style={{ background: 'linear-gradient(135deg, #60A5FA 0%, #93C5FD 60%, #BFDBFE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Workforce
              </span>
            </motion.h1>

            <motion.div initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, ease, delay: 0.55 }}
              style={{ height: '1.5px', background: 'linear-gradient(90deg, rgba(47,128,237,0.7), transparent)', maxWidth: '340px', marginBottom: '1.6rem' }} />

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.28 }}
              className="text-base sm:text-lg leading-[1.8] mb-10 max-w-lg" style={{ color: 'rgba(255,255,255,0.68)' }}>
              When your people thrive, so does your business. Empowered, engaged teams are the foundation of innovation and growth. We ensure your teams keep pace with changing technology, data streams and modern ways of working.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.42 }} className="flex flex-wrap gap-4">
              <a href="#overview" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm transition-all duration-300"
                style={{ backgroundColor: '#2F80ED', boxShadow: '0 8px 32px rgba(47,128,237,0.42)', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1E5DB8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2F80ED'; }}>
                Explore Solutions
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300"
                style={{ border: '1.5px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.82)', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Talk to an Expert
              </Link>
            </motion.div>
          </div>

          {/* Right floating card */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, ease, delay: 0.3 }} className="relative hidden lg:block">
            <div className="relative rounded-[28px] overflow-hidden" style={{ height: '520px', boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)' }}>
              <img src="/Workforce_Development/Workforce-Development_homepage.webp" alt="Workforce Development" className="w-full h-full object-cover object-center" style={{ opacity: 0.88 }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(11,17,32,0.7) 100%)' }} />
              <div className="absolute bottom-5 left-5 px-4 py-2.5 rounded-xl flex items-center gap-2.5 backdrop-blur-md" style={{ background: 'rgba(11,17,32,0.65)', border: '1px solid rgba(255,255,255,0.14)' }}>
                <span className="h-2 w-2 rounded-full bg-[#2F80ED] animate-pulse" />
                <span className="text-white text-[11px] font-bold uppercase tracking-wider">Workforce Transformation</span>
              </div>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-5 right-5 rounded-2xl px-4 py-3"
                style={{ background: 'rgba(11,17,32,0.7)', border: '1px solid rgba(47,128,237,0.35)', backdropFilter: 'blur(12px)' }}>
                <div className="text-lg font-extrabold text-white leading-none">1M+ Learners</div>
                <div className="text-[10px] mt-0.5 font-semibold uppercase tracking-wider" style={{ color: 'rgba(96,165,250,0.85)' }}>15+ Countries Since 1985</div>
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
  const bullets = [
    { title: 'Accelerate Growth', desc: 'Spark innovation by building a future-ready workforce equipped with modern skills and tools.' },
    { title: 'Boost Engagement', desc: 'Increase employee engagement and retention through meaningful learning experiences.' },
    { title: 'Upskill & Reskill', desc: 'Elevate existing talent with targeted programs for evolving roles and responsibilities.' },
    { title: 'Modern Learning', desc: 'Adopt cutting-edge methods and technologies that enhance productivity and measurable impact.' },
  ];

  return (
    <section id="overview" className="py-24 sm:py-32 bg-white border-b border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce} transition={{ duration: 0.75, ease }}
            className="lg:col-span-5"
          >
            <Pill>Overview</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Comprehensive. Transformative. Human-Centered.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce} transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="lg:col-span-7 text-base sm:text-lg leading-relaxed text-slate-500 space-y-5"
          >
            <p>
              Our approach to workforce transformation can accelerate growth and spark innovation, boost employee engagement and retention, upskill or reskill your existing talent, and adopt modern learning methods and technologies that enhance productivity.
            </p>
            <p className="text-slate-600 font-semibold">
              When your people thrive, so does your business. Empowered, engaged teams are the foundation of innovation and growth.
            </p>
          </motion.div>
        </div>

        {/* 4 Mini cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bullets.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce} transition={{ duration: 0.6, ease, delay: i * 0.08 }}
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

/* ═══════════════════════════ IN IT WITH YOU ═══ */
function InItWithYouSection() {
  const stats = [
    { value: '150+', label: 'Customized training programs annually' },
    { value: '1M+', label: 'Learners reached across 15+ countries since 1985' },
    { value: '94%', label: 'Customer satisfaction with our services' },
  ];

  const bullets = [
    'Integrate business and IT through innovative learning experiences that enable new ways of working',
    'Increase, measure and sustain business performance through workforce skills development, reskilling and technology adoption programs',
    'Partner with broader communities to build high-performing inclusive teams',
  ];

  return (
    <section className="py-24 sm:py-32 overflow-hidden border-b border-slate-100" style={{ backgroundColor: '#FAFAF9', ...GRID_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }}>
            <Pill>In It With You</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-6">
              The Right Partner for Workforce Transformation
            </h2>
            <p className="text-base leading-relaxed text-slate-500 mb-6">
              With the right partner, organizations can unlock their talent's potential. Together, we can develop tailored workforce development solutions to achieve your workforce transformation goals. Through our focus on corporate social responsibility and inclusivity in the workplace, we partner with broader communities to build high-performing teams.
            </p>
            <div className="flex flex-col gap-4 mt-8">
              {bullets.map((text, i) => (
                <motion.div
                  key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce} transition={{ duration: 0.5, ease, delay: i * 0.1 }}
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

          {/* Stats card */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-xl relative overflow-hidden">
            <div className="absolute right-0 bottom-0 pointer-events-none opacity-5">
              <svg width="180" height="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L100 50L50 100L0 50L50 0Z" fill="#2F80ED" />
              </svg>
            </div>
            <div className="h-1 w-12 rounded-full mb-6 bg-blue-500" />
            <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-2">At a Glance</h3>
            <p className="text-slate-500 leading-relaxed text-sm mb-8">Decades of expertise. Measurable impact. Global reach.</p>
            <div className="flex flex-col gap-6">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                  transition={{ duration: 0.55, ease, delay: i * 0.1 }}
                  className="flex items-start gap-4 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="text-3xl font-extrabold text-blue-500 leading-none min-w-[80px]" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{s.value}</div>
                  <p className="text-sm text-slate-500 leading-relaxed pt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ CAPABILITIES ═══ */
function CapabilitiesSection() {
  const capabilities = [
    {
      icon: '🎓',
      title: 'Learning Advisory Services',
      desc: 'Your workforce is unique—your training should be too. We collaborate with you to design learning experiences that inspire your workforce and reflect the realities of your organization. From strategic learning consultations to in-depth training services—we have your learning needs covered.',
    },
    {
      icon: '🧑‍🏫',
      title: 'Instructor-Led Training',
      desc: 'For more than 40 years, we\'ve been a trusted partner in delivering dedicated learning solutions. Our comprehensive catalog of over 500 instructor-led courses offers a wide breadth of skill development opportunities each year.',
    },
    {
      icon: '🔗',
      title: 'Building New Talent Pipelines',
      desc: 'Together, we can design customized recruitment strategies, skills-based trainings and managed workforce programs that upskill candidates for peak performance—building a sustainable, job-ready talent pipeline.',
    },
    {
      icon: '⚙️',
      title: 'Technology Adoption',
      desc: 'Our learning strategy empowers end users with the practical skills they need to succeed—so your organization can realize the value of its technology investments. Tailored for accelerating time to productivity and enhancing user satisfaction.',
    },
  ];

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-white overflow-hidden border-b border-slate-100" style={DOT_BG}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }} className="max-w-3xl mb-16">
          <Pill>Our Capabilities</Pill>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-6">
            Powered by Expertise, Delivered with Impact
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-500">
            Powered by expertise across full-stack technologies and elite partnerships with the top enterprise platforms, our workforce development services get you from job-readiness to full productivity. You'll accelerate workforce performance and achieve measurable business outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce} transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(47,128,237,0.08)' }}
              className="bg-white rounded-3xl p-8 flex gap-6 border border-slate-100 hover:border-blue-500/20 shadow-sm transition-all duration-300 cursor-default"
            >
              <div className="h-14 w-14 rounded-2xl flex items-center justify-center text-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex-shrink-0">
                {c.icon}
              </div>
              <div>
                <h3 className="font-display font-extrabold text-slate-800 text-lg leading-snug mb-2">{c.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ OUR APPROACH ═══ */
function OurApproachSection() {
  const approaches = [
    {
      title: 'DevOps & Agile',
      desc: 'Accelerate speed and delivery for scalable growth.',
      link: '/devops-agile',
    },
    {
      title: 'Risk & Security',
      desc: 'Implement security-first strategies to safeguard your enterprise.',
      link: '/risk-and-security',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-16">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.75, ease }} className="lg:col-span-5">
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
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce} transition={{ duration: 0.75, ease, delay: i * 0.12 }}
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

/* ═══════════════════════════ PARTNERSHIPS ═══ */
function PartnershipsSection() {
  const brands = [
    { name: 'AWS', label: 'aws' },
    { name: 'Google Cloud', label: 'Google Cloud' },
    { name: 'Microsoft', label: 'Microsoft Solutions Partner' },
    { name: 'Red Hat', label: 'Red Hat' },
    { name: 'Snowflake', label: 'snowflake' },
    { name: 'ServiceNow', label: 'servicenow' },
    { name: 'Salesforce', label: 'salesforce' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.9, ease }} className="lg:col-span-5">
            <span className="text-blue-500 font-semibold text-lg font-display block mb-4">Our Partnerships</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-800 leading-[1.1] tracking-tight mb-6">
              Best-in-Class Integrations
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-500 mb-8">
              The world's leading technology and software providers partner with us because of our scale, full-stack capabilities and speed. Together, we can deliver new, sustainable growth across your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-bold px-7 py-3 rounded-xl transition-all duration-300"
              style={{ border: '2px solid #84CC16', color: '#0F172A', background: '#ffffff', textDecoration: 'none', fontSize: '14px' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#F8FAFC'; e.currentTarget.style.borderColor = '#65A30D'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = '#84CC16'; }}
            >
              Meet Our Partners
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="lg:col-span-7 grid grid-cols-2 gap-4">
            {brands.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce} transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                whileHover={{ y: -4, boxShadow: '0 12px 28px rgba(0,0,0,0.06)' }}
                className="bg-white rounded-2xl border border-slate-100 flex items-center justify-center p-6 text-center transition-all duration-300 min-h-[90px]"
                style={{
                  boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                  gridColumn: p.name === 'Salesforce' ? 'span 2' : 'auto',
                  maxWidth: p.name === 'Salesforce' ? '50%' : '100%',
                  justifySelf: p.name === 'Salesforce' ? 'center' : 'stretch',
                  width: p.name === 'Salesforce' ? '100%' : 'auto',
                }}
              >
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

/* ═══════════════════════════ INSIGHTS ═══ */
function InsightsSection() {
  const insights = [
    {
      color: '#2F80ED',
      icon: '📈',
      tag: 'Success Story',
      title: 'Investing in Agile',
      desc: 'Financial institution increases speed and quality of services through workforce agile transformation.',
    },
    {
      color: '#1E5DB8',
      icon: '🏥',
      tag: 'Success Story',
      title: 'Continuous Education in the Digital Health Age',
      desc: 'A healthcare education program collaborated with Ancile to modernize their online presence with innovative learning solutions to help improve geriatric care.',
    },
    {
      color: '#6366F1',
      icon: '💡',
      tag: 'Success Story',
      title: 'Next-Level Learning',
      desc: 'A global technology company delivers next-level IT learning solutions, enabling measurable performance gains across their workforce.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 overflow-hidden" style={{ backgroundColor: '#F8FAFC', ...GRID_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <Pill>Featured Insights</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight">Thinking Forward</h2>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider pb-1 transition-all duration-200 whitespace-nowrap"
            style={{ color: '#2F80ED', borderBottom: '2px solid #2F80ED', textDecoration: 'none' }}>
            See More <ArrowRight size={12} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {insights.map((ins, i) => (
            <motion.div
              key={ins.title}
              initial={{ opacity: 0, y: 44 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce} transition={{ duration: 0.75, ease, delay: i * 0.12 }}
              whileHover={{ y: -8, boxShadow: `0 20px 48px ${ins.color}18` }}
              className="group rounded-3xl overflow-hidden cursor-pointer transition-all duration-400 border border-slate-100 shadow-sm"
              style={{ background: '#fff' }}
            >
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
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({ first: '', last: '', email: '', company: '', title: '', need: '', message: '' });
  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); if (!agreed) return; setSubmitted(true); };

  const steps = [
    { num: '01', title: 'Discovery Call', desc: 'We align on your workforce goals, skill gaps, and transformation vision.' },
    { num: '02', title: 'Program Design', desc: 'A tailored learning roadmap matched to your industry and team dynamics.' },
    { num: '03', title: 'Delivery & Coaching', desc: 'Instructor-led or blended learning with measurable progress tracking.' },
    { num: '04', title: 'Outcomes & Sustain', desc: 'We ensure lasting impact with reinforcement programs and performance metrics.' },
  ];

  return (
    <section id="contact-wd" className="relative py-20 sm:py-28 overflow-hidden"
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
              <span className="h-1.5 w-1.5 rounded-full bg-current" />Interested in speaking with Ancile?
            </motion.span>

            <motion.h2 initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.85, ease, delay: 0.08 }}
              className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight text-white mb-4">
              Transform Your Workforce Today
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
              className="text-base leading-[1.9] max-w-sm mb-10" style={{ color: 'rgba(234,243,255,0.85)' }}>
              Let's discuss how we can build tailored workforce development solutions to achieve your transformation goals.
            </motion.p>

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

          {/* Right: form card */}
          <motion.div initial={{ opacity: 0, x: 40, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={viewportOnce}
            transition={{ duration: 0.9, ease, delay: 0.15 }}>
            <div style={{ background: '#fff', borderRadius: '28px', padding: '36px 32px', boxShadow: '0 24px 64px rgba(0,0,0,0.28), 0 4px 16px rgba(0,0,0,0.12)' }}>
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
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Start a Conversation</h3>
                    <p className="text-sm" style={{ color: '#64748b' }}>Fill in the form and we'll follow up with a tailored plan.</p>
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
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#64748b' }}>Service Area</label>
                      <div className="relative">
                        <select name="need" value={form.need} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-xl text-sm bg-white focus:outline-none appearance-none pr-9"
                          style={{ border: '1.5px solid #e5e7eb', color: form.need ? '#111827' : '#9ca3af' }}>
                          <option value="">Select...</option>
                          {['Learning Advisory Services', 'Instructor-Led Training', 'Building New Talent Pipelines', 'Technology Adoption', 'Multiple / Other'].map(o => <option key={o}>{o}</option>)}
                        </select>
                        <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" style={{ color: '#9ca3af' }}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M6 8L1 3h10L6 8z" /></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#64748b' }}>Message</label>
                      <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Describe your workforce goals..."
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
                      whileHover={{ scale: 1.02, boxShadow: '0 12px 32px rgba(47,128,237,0.55)' }} whileTap={{ scale: 0.98 }}>
                      Send Request
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
