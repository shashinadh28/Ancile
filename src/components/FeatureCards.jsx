import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import SectionWrapper from './SectionWrapper.jsx';
import Card from './Card.jsx';
import { RevealGroup } from './Reveal.jsx';
import { stagger, viewportOnce, easePremium, fadeUpSmall } from '../utils/motion';

const FEATURES = [
  {
    title: 'Staff Augmentation',
    description:
      'Access skilled IT professionals who integrate seamlessly into your team to fill gaps, scale faster, and deliver projects on time.',
    cta: 'Learn More',
    accent: 'from-brand-400 to-brand-700',
    icon: UsersIcon,
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80',
    tag: 'Talent',
  },
  {
    title: 'Staff Assignments Process',
    description:
      'A structured, collaborative process that ensures the right talent match by aligning technical skills, timelines, and cultural fit.',
    cta: 'Learn More',
    accent: 'from-brand-300 to-brand-600',
    icon: UsersIcon,
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80',
    tag: 'Process',
  },
  {
    title: 'Technology Consulting',
    description:
      'Strategic guidance to help you navigate complex technology decisions, optimize systems, and drive measurable business outcomes.',
    cta: 'Learn More',
    accent: 'from-brand-500 to-brand-800',
    icon: SparkIcon,
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    tag: 'Consulting',
  },
  {
    title: 'IT Training',
    description:
      'Hands-on, customizable training programs designed to upskill teams and keep them competitive in evolving technologies.',
    cta: 'Learn More',
    accent: 'from-blue-400 to-blue-700',
    icon: GraduationIcon,
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80',
    tag: 'Training',
  },
  {
    title: 'Managed Services',
    description:
      'End-to-end IT management that ensures your systems run securely, efficiently, and without disruption.',
    cta: 'Learn More',
    accent: 'from-purple-400 to-purple-700',
    icon: ShieldIcon,
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    tag: 'Services',
  },
  {
    title: 'Products & Platforms',
    description:
      'Robust solutions and platforms that streamline operations, enhance security, and support scalable business growth.',
    cta: 'Learn More',
    accent: 'from-teal-400 to-teal-700',
    icon: BoxIcon,
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    tag: 'Solutions',
  },
  {
    title: 'Deliverable-Centric Solutions',
    description:
      'Outcome-driven approach focused on identifying core problems and delivering tailored solutions that maximize business impact.',
    cta: 'Learn More',
    accent: 'from-indigo-400 to-indigo-700',
    icon: TargetIcon,
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80',
    tag: 'Delivery',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: easePremium } },
};

const innerItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easePremium } },
};

export default function FeatureCards() {
  return (
    <section id="services" className="relative py-24 sm:py-28 lg:py-32 overflow-hidden">
      {/* Mesh gradient background — distinct from other sections */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-mesh-gradient" />
        <div className="absolute inset-0 bg-grid-accent bg-[size:60px_60px] opacity-40 mask-fade-b" />
        {/* Floating orbs */}
        <div className="absolute top-20 right-[15%] h-[350px] w-[350px] rounded-full bg-brand-500/8 blur-[100px] animate-blob" />
        <div className="absolute bottom-20 left-[10%] h-[300px] w-[300px] rounded-full bg-brand-400/6 blur-[80px] animate-blob [animation-delay:-7s]" />
      </div>

      <div className="mx-auto max-w-page container-px">
        {/* Section header */}
        <RevealGroup
          staggerChildren={0.18}
          className="flex flex-col items-start text-left max-w-3xl mb-14 sm:mb-16"
        >
          <motion.span
            variants={fadeUpSmall}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brand-200"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            What we do
          </motion.span>
          <motion.h2
            variants={fadeUpSmall}
            className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tightest text-white"
          >
            How can we help?
          </motion.h2>
          <motion.p
            variants={fadeUpSmall}
            className="mt-5 text-base sm:text-lg leading-relaxed text-white/65 max-w-2xl"
          >
            Our team is at the forefront of innovation, constantly pushing boundaries to stay ahead in today's fast-paced world
          </motion.p>
        </RevealGroup>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.12)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6"
        >
          {FEATURES.map((f, i) => (
            <motion.div key={i} variants={cardVariant}>
              <FeatureCard f={f} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}

function FeatureCard({ f }) {
  const Icon = f.icon;
  const ref = useRef(null);

  // Image parallax inside the card.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const y = useSpring(yRaw, { stiffness: 80, damping: 20, mass: 0.4 });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  return (
    <Card tilt className="group h-full p-0 overflow-hidden" ref={ref}>
      {/* Image cap with internal parallax */}
      <div className="relative h-44 overflow-hidden">
        <motion.img
          src={f.image}
          alt=""
          loading="lazy"
          style={{ y, scale }}
          className="absolute inset-0 h-[140%] w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-navy-950/10" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
          {f.tag}
        </span>
        <span
          className={`absolute right-4 bottom-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${f.accent} shadow-glow`}
        >
          <Icon />
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <RevealGroup staggerChildren={0.08} delay={0.05}>
          <motion.h3
            variants={innerItem}
            className="font-display text-lg sm:text-xl font-bold leading-tight text-white"
          >
            {f.title}
          </motion.h3>
          <motion.p
            variants={innerItem}
            className="mt-2.5 text-sm leading-relaxed text-white/60 line-clamp-3"
          >
            {f.description}
          </motion.p>
          <motion.div
            variants={innerItem}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition-colors group-hover:text-brand-200"
          >
            {f.cta}
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.div>
        </RevealGroup>
      </div>

      {/* Hover glow accent */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {/* Top edge shimmer on hover */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </Card>
  );
}

function GraduationIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M22 10L12 5 2 10l10 5 10-5z" strokeLinejoin="round" />
      <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" strokeLinejoin="round" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" strokeLinecap="round" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" strokeLinejoin="round" strokeLinecap="round" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeLinejoin="round" strokeLinecap="round" />
      <line x1="12" y1="22.08" x2="12" y2="12" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <circle cx="12" cy="12" r="10" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="12" cy="12" r="6" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
