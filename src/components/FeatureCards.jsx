import { motion } from 'framer-motion';
import Button from './Button.jsx';
import { RevealGroup } from './Reveal.jsx';
import { stagger, viewportOnce, easePremium, fadeUpSmall } from '../utils/motion';

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: easePremium } },
};

const PILLARS = [
  {
    id: 'talent-solutions',
    tag: 'Talent',
    title: 'Talent Solutions',
    body: 'Scale delivery with specialized talent across engineering, data, cloud, QA automation, and AI—curated quickly and aligned to outcomes.',
    bullets: [
      'Staff Augmentation',
      'Direct Hire',
      'Project-Based Teams',
      'Delivery & PMO Support',
    ],
    cta: 'Request Talent',
    ctaHref: '#contact',
    icon: UsersIcon,
    accentFrom: 'from-accent-400',
    accentTo: 'to-accent-600',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'tech-services',
    tag: 'Technology',
    title: 'Technology Services',
    body: 'Deliver programs faster with a delivery-first partner across modern applications, data platforms, analytics & AI/ML, and cloud modernization.',
    bullets: [
      'Application Modernization',
      'Data Engineering & Platforms',
      'Analytics, AI/ML Enablement',
      'Cloud & Data Modernization',
    ],
    cta: 'Start a Project',
    ctaHref: '#contact',
    icon: CodeIcon,
    accentFrom: 'from-ink-700',
    accentTo: 'to-ink-900',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
  },
];

export default function FeatureCards() {
  return (
    <section id="services" className="relative py-16 sm:py-20 bg-white overflow-hidden" style={{ backgroundColor: '#ffffff' }}>

      <div className="mx-auto max-w-page container-px">
        {/* Section header */}
        <RevealGroup
          staggerChildren={0.18}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <motion.span
            variants={fadeUpSmall}
            className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            What we do
          </motion.span>
          <motion.h2
            variants={fadeUpSmall}
            className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tightest text-ink-900"
          >
            Two pillars. One mission.
          </motion.h2>
          <motion.p
            variants={fadeUpSmall}
            className="mt-5 text-base sm:text-lg leading-relaxed text-ink-600 max-w-2xl"
          >
            Whether you need specialized talent or technology services, Ancile delivers with speed, transparency, and accountability.
          </motion.p>
        </RevealGroup>

        {/* Two Pillar Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.2)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {PILLARS.map((p) => (
            <motion.div key={p.id} variants={cardVariant}>
              <PillarCard p={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}

function PillarCard({ p }) {
  const Icon = p.icon;
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white border border-ink-200 shadow-card hover:shadow-card-hover transition-all duration-500">
      {/* Image header */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/20 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full bg-white/90 backdrop-blur-sm border border-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-700">
          {p.tag}
        </span>
        <span
          className={`absolute right-5 bottom-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${p.accentFrom} ${p.accentTo} shadow-glow`}
        >
          <Icon />
        </span>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="font-display text-2xl font-bold text-ink-900">
          {p.title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-ink-600">
          {p.body}
        </p>

        <ul className="mt-6 space-y-3">
          {p.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-3 text-ink-700">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-100 text-accent-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3">
                  <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-sm font-medium">{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Button href={p.ctaHref} variant="primary" size="lg">
            {p.cta}
          </Button>
        </div>
      </div>

      {/* Hover glow accent */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-accent-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

function UsersIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" strokeLinecap="round" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
