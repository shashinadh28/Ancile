import { motion } from 'framer-motion';
import { RevealGroup } from './Reveal.jsx';
import { viewportOnce, fadeUpSmall, easePremium } from '../utils/motion';

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: easePremium } },
};

// FEATURED CARDS (80% weight — AI + IAM)
const FEATURED_CARDS = [
  {
    id: 'ai-implementation',
    badgeLabel: 'AI IMPLEMENTATION',
    badgeColor: '#0B6E56',
    badgeBg: 'rgba(11,110,86,0.12)',
    borderAccent: '#0B6E56',
    headline: 'Design, build, and scale AI systems that work in production.',
    body: 'From custom LLM integrations and RAG pipelines to full agentic workflow systems — Ancile\'s AI engineers bring the technical depth to move your AI initiatives from proof-of-concept to production-grade delivery. We work across the full stack: model selection, data pipelines, evaluation frameworks, MLOps, and governance.',
    bullets: [
      'GenAI & LLM Integration',
      'AI Agents & Agentic Workflows',
      'MLOps & Model Operations',
      'AI Strategy, Roadmap & Governance',
    ],
    cta: 'Request AI Engineering Talent',
    ctaHref: '#contact',
    icon: BrainIcon,
  },
  {
    id: 'iam',
    badgeLabel: 'IDENTITY & ACCESS MANAGEMENT',
    badgeColor: '#3C3489',
    badgeBg: 'rgba(60,52,137,0.12)',
    borderAccent: '#3C3489',
    headline: 'Secure every identity. Control every access point. At scale.',
    body: 'Identity is the most critical control plane in the modern enterprise. Ancile\'s IAM architects implement, migrate, and optimize the identity platforms that protect your organization — from workforce SSO to privileged access controls to AI-native identity security. We are platform-certified across Okta, SailPoint, CyberArk, and Microsoft Entra ID.',
    bullets: [
      'IAM Platform Implementation',
      'Zero Trust Architecture',
      'Identity Governance & Administration (IGA)',
      'Privileged Access Management (PAM)',
    ],
    cta: 'Start an IAM Engagement',
    ctaHref: '#contact',
    icon: ShieldLockIcon,
  },
];

// SECONDARY CARDS (20% weight — Data & Talent)
const SECONDARY_CARDS = [
  {
    id: 'data-cloud',
    badgeLabel: 'DATA & CLOUD',
    badgeColor: '#1565D8',
    badgeBg: 'rgba(21,101,216,0.1)',
    headline: 'Data platforms and cloud infrastructure for AI-ready enterprises.',
    body: 'Modern AI systems require modern data architecture. We design and build data lakehouses, real-time pipelines, and cloud-native platforms that feed your AI workloads and analytics layers.',
    bullets: [
      'Data Engineering & Pipelines',
      'Cloud Architecture (AWS · Azure · GCP)',
      'Analytics & BI Platforms',
      'Data Lakehouse Design',
    ],
    cta: 'Explore Data Services',
    ctaHref: '#contact',
    icon: DatabaseIcon,
  },
  {
    id: 'talent',
    badgeLabel: 'TALENT SOLUTIONS',
    badgeColor: '#6B7280',
    badgeBg: 'rgba(107,114,128,0.1)',
    headline: 'Specialized engineering talent when you need to move fast.',
    body: 'When projects need reinforcement fast, Ancile provides pre-vetted engineers, analysts, and architects across AI, IAM, data, cloud, and QA. Staff augmentation, direct hire, or project-based teams — all aligned to your stack and culture.',
    bullets: [
      'Staff Augmentation',
      'Direct Hire',
      'Project-Based Teams',
      'AI & IAM Specialist Placement',
    ],
    cta: 'Request Talent',
    ctaHref: '#contact',
    icon: UsersIcon,
  },
];

export default function FeatureCards() {
  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">

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
            What We Do
          </motion.span>
          <motion.h2
            variants={fadeUpSmall}
            className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight"
            style={{ color: '#1A1A18' }}
          >
            Built for the technology challenges<br className="hidden sm:block" /> that define the next decade.
          </motion.h2>
          <motion.p
            variants={fadeUpSmall}
            className="mt-5 text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ color: '#3D3D3A' }}
          >
            Ancile combines deep technical expertise in AI and identity security with a delivery-first mindset.
            We build, implement, and staff the systems that enterprise organizations depend on.
          </motion.p>
        </RevealGroup>

        {/* Featured 2-up cards (AI + IAM) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {FEATURED_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              id={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.85, ease: easePremium, delay: i * 0.12 }}
            >
              <FeaturedCard card={card} />
            </motion.div>
          ))}
        </div>

        {/* Secondary 2-up cards (Data + Talent) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {SECONDARY_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              id={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.75, ease: easePremium, delay: i * 0.1 }}
            >
              <SecondaryCard card={card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ card }) {
  const Icon = card.icon;
  return (
    <div
      className="group relative h-full flex flex-col rounded-2xl bg-white transition-all duration-500 hover:shadow-2xl"
      style={{
        border: '1px solid rgba(15,23,42,0.08)',
        boxShadow: '0 4px 24px rgba(15,23,42,0.06)',
        padding: '32px',
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${card.borderAccent}, transparent)` }}
      />

      {/* Badge */}
      <div className="flex items-center gap-3 mb-5">
        <span
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.12em]"
          style={{ background: card.badgeBg, color: card.badgeColor, border: `1px solid ${card.badgeColor}25` }}
        >
          <Icon size={12} />
          {card.badgeLabel}
        </span>
      </div>

      {/* Headline */}
      <h3
        className="text-xl sm:text-2xl font-bold leading-snug mb-4"
        style={{ color: '#1A1A18', fontFamily: '"Inter", sans-serif' }}
      >
        {card.headline}
      </h3>

      {/* Body */}
      <p className="text-sm leading-relaxed mb-6" style={{ color: '#3D3D3A' }}>
        {card.body}
      </p>

      {/* Bullets */}
      <ul className="space-y-2.5 mb-8 flex-1">
        {card.bullets.map((b) => (
          <li key={b} className="flex items-center gap-3 text-sm" style={{ color: '#3D3D3A' }}>
            <span
              className="shrink-0 h-5 w-5 rounded-full grid place-items-center"
              style={{ background: `${card.badgeColor}15`, color: card.badgeColor }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3">
                <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="font-medium">{b}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={card.ctaHref}
        className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group/link"
        style={{ color: card.badgeColor }}
      >
        {card.cta}
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          className="transition-transform duration-200 group-hover/link:translate-x-1"
        >
          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  );
}

function SecondaryCard({ card }) {
  const Icon = card.icon;
  return (
    <div
      className="group relative h-full flex flex-col rounded-2xl transition-all duration-500 hover:shadow-xl"
      style={{
        border: '1px solid rgba(15,23,42,0.07)',
        background: '#FAFAF8',
        padding: '28px',
        boxShadow: '0 2px 12px rgba(15,23,42,0.04)',
      }}
    >
      {/* Bottom accent line on hover */}
      <div
        className="absolute inset-x-0 bottom-0 h-[2px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: card.badgeColor }}
      />

      {/* Badge */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.12em]"
          style={{ background: card.badgeBg, color: card.badgeColor, border: `1px solid ${card.badgeColor}20` }}
        >
          <Icon size={11} />
          {card.badgeLabel}
        </span>
      </div>

      {/* Headline */}
      <h3
        className="text-lg sm:text-xl font-bold leading-snug mb-3"
        style={{ color: '#1A1A18', fontFamily: '"Inter", sans-serif' }}
      >
        {card.headline}
      </h3>

      {/* Body */}
      <p className="text-sm leading-relaxed mb-5" style={{ color: '#3D3D3A' }}>
        {card.body}
      </p>

      {/* Bullets */}
      <ul className="space-y-2 mb-6 flex-1">
        {card.bullets.map((b) => (
          <li key={b} className="flex items-center gap-2.5 text-sm" style={{ color: '#3D3D3A' }}>
            <span
              className="shrink-0 h-4 w-4 rounded-full grid place-items-center"
              style={{ background: `${card.badgeColor}12`, color: card.badgeColor }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-2.5 w-2.5">
                <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={card.ctaHref}
        className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group/link"
        style={{ color: card.badgeColor }}
      >
        {card.cta}
        <svg
          width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          className="transition-transform duration-200 group-hover/link:translate-x-1"
        >
          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  );
}

/* Icons */
function BrainIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z" />
    </svg>
  );
}

function ShieldLockIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <rect x="9" y="11" width="6" height="5" rx="1" />
      <path d="M10 11V9a2 2 0 0 1 4 0v2" />
    </svg>
  );
}

function DatabaseIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function UsersIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}
