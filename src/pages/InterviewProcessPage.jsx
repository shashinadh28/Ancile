import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { viewportOnce } from '../utils/motion.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const ease = [0.22, 1, 0.36, 1];
const DOT_BG = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.13) 1.5px, transparent 1.5px)',
  backgroundSize: '26px 26px'
};

export default function InterviewProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ExpectSection />
      <LookForSection />
      <TipsSection />
      <ReadyToApplySection />
      <Footer />
    </div>
  );
}

/* ────────────────────────────────────────────────────── HERO ─── */
function HeroSection() {
  return (
    <section className="relative min-h-[75vh] flex flex-col justify-center items-center overflow-hidden pt-24" style={{ backgroundColor: '#0B1120' }}>
      {/* Background patterns */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[500px] rounded-full blur-[120px]"
        style={{ background: 'rgba(47,128,237,0.08)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[350px] rounded-full blur-[100px]"
        style={{ background: 'rgba(99,102,241,0.06)' }}
      />

      <div className="relative z-10 mx-auto max-w-[1000px] px-6 sm:px-8 lg:px-12 py-20 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-6"
          style={{
            border: '1px solid rgba(47,128,237,0.3)',
            background: 'rgba(47,128,237,0.1)',
            color: '#2F80ED',
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          Careers & Hiring
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white"
        >
          Interview <span style={{ color: '#2F80ED' }}>Process</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          className="mt-6 text-lg sm:text-xl leading-relaxed max-w-3xl"
          style={{ color: 'rgba(255,255,255,0.72)' }}
        >
          Our consulting interview process is a two-way conversation. As you learn about us, we’ll get to know your skills, achievements, and experiences. We value diverse voices and want you to bring your personality to life.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#expect"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm"
            style={{
              backgroundColor: '#2F80ED',
              boxShadow: '0 8px 32px rgba(47,128,237,0.4)',
              textDecoration: 'none',
            }}
          >
            What To Expect
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="#criteria"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300"
            style={{
              border: '1.5px solid rgba(255,255,255,0.25)',
              color: 'rgba(255,255,255,0.85)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Hiring Criteria
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────── WHAT TO EXPECT ─── */
function ExpectSection() {
  const steps = [
    {
      num: 'Step 1',
      title: 'Application',
      desc: 'Submit your application by clicking on “Apply” and logging into our portal.',
      link: 'Using AI In Your Application Process',
      href: '/using-ai-application-process',
      isRoute: true,
      color: '#2F80ED', // Blue Accent
    },
    {
      num: 'Step 2',
      title: 'Skill Interview',
      desc: 'In this traditional interview, we will explore your experience, skills, and motivation for joining Ancile; your chance to go beyond your resume.',
      link: null,
      color: '#a855f7', // Purple
    },
    {
      num: 'Step 3',
      title: 'Case Interview',
      desc: 'For client facing roles, we’ll assess your problem-solving and analytical skills in a case interview.',
      link: 'Case Interview Preparation',
      href: '/case-interview-prep',
      isRoute: true,
      color: '#3b82f6', // Blue
    },
    {
      num: 'Step 4',
      title: 'Team Interview',
      desc: 'If you’re applying for a client-facing role, we will assess your problem-solving, analytical, and communication skills.',
      link: null,
      color: '#1E5DB8', // Blue
    },
  ];

  return (
    <section id="expect" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease }}
          className="mb-16 max-w-3xl"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-4"
            style={{
              background: 'rgba(47,128,237,0.1)',
              border: '1px solid rgba(47,128,237,0.25)',
              color: '#2F80ED',
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Interview Timeline
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-5">
            What to expect
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-500">
            Throughout our consulting interview process, you’ll have the chance to showcase your problem-solving skills, curiosity, and collaboration style. We aim to get to know you—your experience, strengths, and aspirations—while giving you a real sense of what it’s like to work at Ancile.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {steps.map((st, i) => (
            <motion.div
              key={st.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease, delay: i * 0.12 }}
              className="flex flex-col justify-between pl-6 relative transition-all duration-300 min-h-[220px]"
            >
              {/* Colored left border accent line */}
              <span
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
                style={{ backgroundColor: st.color }}
              />

              <div>
                <span className="text-sm font-bold uppercase tracking-wider block mb-1" style={{ color: st.color }}>
                  {st.num}
                </span>
                <h3 className="font-display text-2xl font-extrabold text-slate-900 mt-2 mb-3">
                  {st.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 max-w-sm">
                  {st.desc}
                </p>
              </div>

              {st.link && (
                <div className="mt-6">
                  {st.isRoute ? (
                    <Link
                      to={st.href}
                      className="inline-flex items-center gap-1 text-xs font-bold border-b pb-0.5 border-slate-800 text-slate-800 hover:text-blue-500 hover:border-blue-500 transition-all duration-200"
                      style={{ textDecoration: 'none' }}
                    >
                      {st.link}
                    </Link>
                  ) : (
                    <a
                      href={st.href || '#'}
                      className="inline-flex items-center gap-1 text-xs font-bold border-b pb-0.5 border-slate-800 text-slate-800 hover:text-blue-500 hover:border-blue-500 transition-all duration-200"
                      style={{ textDecoration: 'none' }}
                    >
                      {st.link}
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── hiring criteria ─── */
function LookForSection() {
  const attributes = [
    {
      title: 'Integrity',
      icon: <GraduationIcon />,
      color: '#2F80ED',
      bgColor: 'rgba(47,128,237,0.06)',
      borderColor: 'rgba(47,128,237,0.15)',
    },
    {
      title: 'Intellectual Curiosity',
      icon: <CuriosityIcon />,
      color: '#8B5CF6',
      bgColor: 'rgba(139,92,246,0.06)',
      borderColor: 'rgba(139,92,246,0.15)',
    },
    {
      title: 'Creative Thinking',
      icon: <CreativeIcon />,
      color: '#3B82F6',
      bgColor: 'rgba(59,130,246,0.06)',
      borderColor: 'rgba(59,130,246,0.15)',
    },
    {
      title: 'Collaborative Mindset',
      icon: <CollabIcon />,
      color: '#0EA5E9',
      bgColor: 'rgba(14,165,233,0.06)',
      borderColor: 'rgba(14,165,233,0.15)',
    },
    {
      title: 'Drive',
      icon: <DriveIcon />,
      color: '#1E293B',
      bgColor: 'rgba(30,41,59,0.04)',
      borderColor: 'rgba(30,41,59,0.1)',
    },
  ];

  return (
    <section id="criteria" className="py-20 sm:py-28" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease }}
          className="mb-16 max-w-4xl"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-4"
            style={{
              background: 'rgba(47,128,237,0.1)',
              border: '1px solid rgba(47,128,237,0.25)',
              color: '#2F80ED',
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Hiring Criteria
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-5">
            What our consulting interviewers look for
          </h2>
          <p className="text-base leading-relaxed text-slate-500 max-w-3xl">
            Spotting trends. Advising senior leaders. Cutting fresh tracks. Moving quickly and creatively. Finding storylines in data sets. Making the world better. Ancile’s experienced hires do all this and more. Here are just a few examples of the value our experienced professionals deliver.
          </p>
        </motion.div>

        {/* Attributes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-stretch">
          {attributes.map((attr, i) => (
            <motion.div
              key={attr.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.65, ease, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-200/40 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div 
                className="h-16 w-16 mb-6 flex items-center justify-center rounded-2xl transition-all duration-300"
                style={{ 
                  backgroundColor: attr.bgColor,
                  color: attr.color,
                  border: `1px solid ${attr.borderColor}`
                }}
              >
                {attr.icon}
              </div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-800 leading-snug">
                {attr.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────── TIPS ─── */
function TipsSection() {
  const tips = [
    {
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
      tag: 'First Impressions',
      text: 'Hear What Ancilers Expected During the Interview Process.',
    },
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
      tag: 'What Surprised You?',
      text: 'Learn How Interview Differed From Expectations.',
    },
    {
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
      tag: 'The Interview Process',
      text: 'Get An Overview Of How Interviewing At Ancile Unfolds.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease }}
          className="mb-14"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-4"
            style={{
              background: 'rgba(47,128,237,0.1)',
              border: '1px solid rgba(47,128,237,0.25)',
              color: '#2F80ED',
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Advice & Insights
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
            Ancile consultant interview tips
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            Explore tips to help you succeed at every stage of the consulting interview process.
          </p>
        </motion.div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((t, i) => (
            <motion.div
              key={t.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease, delay: i * 0.12 }}
              className="group flex flex-col cursor-pointer"
            >
              {/* Thumbnail Container: Split layout matching Screenshot 3 */}
              <div className="relative h-[220px] rounded-[24px] overflow-hidden flex shadow-md mb-5 group-hover:shadow-lg transition-shadow duration-300">
                {/* Left half: Blurred city skyline + title box */}
                <div className="w-1/2 relative overflow-hidden flex items-center justify-center">
                  <div 
                    className="absolute inset-0 bg-cover bg-center filter blur-[1.5px] scale-110"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80')` }}
                  />
                  <div className="absolute inset-0 bg-slate-950/70" />
                  
                  {/* Centered White Square Border with Text */}
                  <div className="relative z-10 border-[3.5px] border-white w-[82%] h-[82%] flex items-center justify-center p-3 text-center">
                    <span className="font-display font-black text-white text-xs sm:text-sm tracking-wide uppercase leading-tight">
                      {t.tag}
                    </span>
                  </div>
                </div>

                {/* Right half: Consultant Photo */}
                <div className="w-1/2 relative">
                  <img 
                    src={t.img} 
                    alt="Ancile Consultant" 
                    className="w-full h-full object-cover object-top filter contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Floating Play Circular Button in center of split */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-[#2F80ED] flex items-center justify-center shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-300 z-20">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#ffffff" className="ml-0.5">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>

              {/* Card Label */}
              <p className="font-display font-bold text-slate-800 text-lg leading-snug group-hover:text-[#2F80ED] transition-colors duration-200">
                {t.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────── READY TO APPLY ─── */
function ReadyToApplySection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF8] overflow-hidden" style={DOT_BG}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease }}
          className="mb-14"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-900 leading-[1.05] tracking-tight">
            Ready To Apply?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Find a Job (Double width: 6 cols out of 12) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease }}
            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(11,26,46,0.4)' }}
            className="lg:col-span-6 group relative rounded-[28px] overflow-hidden flex flex-col justify-between p-8 sm:p-10 cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: '#0B1A2E',
              minHeight: '280px',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Geometric stripes background overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-20 flex flex-col justify-center items-end pr-6">
              <svg width="100%" height="80%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L100 50L50 100L0 50L50 0Z" fill="#2F80ED" />
                <path d="M70 10L110 50L70 90" stroke="#60A5FA" strokeWidth="6" />
              </svg>
            </div>

            <div>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Find a Job at Ancile
              </h3>
              <p className="text-sm leading-relaxed mt-4 max-w-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Discover opportunities that match your ambitions. At Ancile, you’ll work with exceptional people, solve meaningful challenges, and grow your career across our global offices and disciplines.
              </p>
            </div>

            <div className="mt-8 self-start">
              <div
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: '#2F80ED',
                }}
              >
                View Jobs
              </div>
            </div>
          </motion.div>

          {/* Card 2: Ancile on Campus (3 cols out of 12) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease, delay: 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(47,128,237,0.15)' }}
            className="lg:col-span-3 group rounded-[28px] p-8 flex flex-col justify-between cursor-pointer border border-[#2F80ED]/10 transition-all duration-300 min-h-[280px]"
            style={{
              backgroundColor: '#EAF3FF',
            }}
          >
            <div>
              <h3 className="font-display text-2xl font-extrabold text-ink-900 leading-tight" style={{ color: '#1E293B' }}>
                Ancile on Campus
              </h3>
              <p className="text-sm leading-relaxed mt-4" style={{ color: '#475569' }}>
                Explore opportunities to meet our team on campus or online, learn about recruiting timelines, and get connected with Ancile at your campus.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-800 border-b-2 border-slate-800 pb-0.5 hover:text-accent-500 hover:border-accent-500 transition-all duration-200"
                style={{ color: '#2F80ED', borderColor: '#2F80ED' }}
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Card 3: FAQs (3 cols out of 12) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease, delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(47,128,237,0.15)' }}
            className="lg:col-span-3 group rounded-[28px] p-8 flex flex-col justify-between cursor-pointer border border-[#2F80ED]/10 transition-all duration-300 min-h-[280px]"
            style={{
              backgroundColor: '#EAF3FF',
            }}
          >
            <div>
              <h3 className="font-display text-2xl font-extrabold text-ink-900 leading-tight" style={{ color: '#1E293B' }}>
                Frequently Asked Questions
              </h3>
              <p className="text-sm leading-relaxed mt-4" style={{ color: '#475569' }}>
                Find answers to common questions about benefits, the application process, undergraduate programs, profile expectations, and more.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-800 border-b-2 border-slate-800 pb-0.5 hover:text-accent-500 hover:border-accent-500 transition-all duration-200"
                style={{ color: '#2F80ED', borderColor: '#2F80ED' }}
              >
                Explore FAQs
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────── SVG ICONS ─── */
function GraduationIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 10l10-5 10 5-10 5-10-5z" />
      <path d="M6 12v4c0 2 2.5 3.5 6 3.5s6-1.5 6-3.5v-4" />
      <path d="M12 10h5v6" />
      <circle cx="17" cy="17.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

function CuriosityIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M9 5V2M12 5V2M15 5V2" />
      <path d="M9 19v3M12 19v3M15 19v3" />
      <path d="M5 9H2M5 12H2M5 15H2" />
      <path d="M19 9h3M19 12h3M19 15h3" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 9.5V7h2" />
      <path d="M9.5 12H7v2" />
    </svg>
  );
}

function CreativeIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 14c1.2-1.2 2-2.8 2-4.5A5 5 0 007 9.5c0 1.7.8 3.3 2 4.5v2h6v-2z" />
      <path d="M9 18h6v2H9z" />
      <path d="M10.5 22h3v-2h-3z" />
      <path d="M12 2v2M4.9 4.9l1.4 1.4M2 9.5h2M19.1 4.9l-1.4 1.4M20 9.5h2" />
    </svg>
  );
}

function CollabIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Left head */}
      <path d="M3 21v-1a3 3 0 013-3h2a3 3 0 013 3v1" />
      <circle cx="7" cy="12" r="3" />
      
      {/* Right head */}
      <path d="M13 21v-1a3 3 0 013-3h2a3 3 0 013 3v1" />
      <circle cx="17" cy="12" r="3" />
      
      {/* Left speech bubble */}
      <path d="M5 3h3.5a1 1 0 011 1v1.5a1 1 0 01-1 1H7l-1.5 1.5V6.5H5a1 1 0 01-1-1V4a1 1 0 011-1z" />
      
      {/* Right speech bubble */}
      <path d="M15.5 2H19a1 1 0 011 1v1.5a1 1 0 01-1 1h-1.5L16 7V5.5h-0.5a1 1 0 01-1-1V3a1 1 0 011-1z" />
    </svg>
  );
}

function DriveIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 010 8h-1" />
      <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
      <line x1="6" y1="2" x2="14" y2="2" />
    </svg>
  );
}
