import { motion } from 'framer-motion';
import Button from './Button.jsx';
import { RevealGroup } from './Reveal.jsx';
import { fadeUpSmall, viewportOnce, easePremium, stagger } from '../utils/motion';

const STORIES = [
  {
    client: 'National Healthcare Provider',
    challenge: 'Reduce delivery delays caused by skill gaps across critical care technology systems.',
    solution: 'Blended staffing model with QA automation support, integrated within two-week sprint cycles.',
    result: 'Faster release cycle, improved quality metrics, and reduced time-to-delivery by 40%.',
    tag: 'Healthcare',
    color: 'bg-red-50 text-red-600 border-red-100',
  },
  {
    client: 'Financial Services Organization',
    challenge: 'Modernize legacy applications while reducing operational risk during migration.',
    solution: 'Application modernization combined with cloud migration support and governance framework.',
    result: 'Improved system stability, 3x deployment velocity, and zero downtime during migration.',
    tag: 'Finance',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    client: 'Retail / eCommerce Brand',
    challenge: 'Data foundations not ready for analytics and AI-driven decision making.',
    solution: 'Data engineering engagement plus platform enablement to build a modern data lakehouse.',
    result: 'Improved reporting speed by 5x and established reliable data foundations for AI/ML.',
    tag: 'Retail',
    color: 'bg-green-50 text-green-600 border-green-100',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: easePremium } },
};

export default function SuccessStories() {
  return (
    <section id="stories" className="relative py-16 sm:py-20 overflow-hidden" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="mx-auto max-w-page container-px">
        <RevealGroup
          staggerChildren={0.18}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <motion.span
            variants={fadeUpSmall}
            className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Success Stories
          </motion.span>
          <motion.h2
            variants={fadeUpSmall}
            className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tightest text-ink-900"
          >
            Outcomes we've delivered
          </motion.h2>
          <motion.p
            variants={fadeUpSmall}
            className="mt-5 text-base sm:text-lg leading-relaxed text-ink-600 max-w-2xl"
          >
            Real results for real organizations. Here's how we've helped teams accelerate delivery.
          </motion.p>
        </RevealGroup>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.18)}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {STORIES.map((s, i) => (
            <motion.div key={i} variants={cardVariant}>
              <StoryCard s={s} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}

function StoryCard({ s }) {
  return (
    <div className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-ink-200 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1">
      <div className="p-7 flex-1 flex flex-col">
        {/* Tag */}
        <span className={`inline-flex self-start items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${s.color}`}>
          {s.tag}
        </span>

        {/* Client */}
        <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{s.client}</h3>

        {/* Challenge / Solution / Result */}
        <div className="mt-5 space-y-4 flex-1">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-1">Challenge</div>
            <p className="text-sm text-ink-600 leading-relaxed">{s.challenge}</p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-1">Solution</div>
            <p className="text-sm text-ink-600 leading-relaxed">{s.solution}</p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent-600 mb-1">Result</div>
            <p className="text-sm font-medium text-ink-800 leading-relaxed">{s.result}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors">
            Read Case Study
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-accent-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}
