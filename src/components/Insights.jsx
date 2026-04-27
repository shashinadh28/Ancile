import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import SectionWrapper from './SectionWrapper.jsx';
import { stagger, viewportOnce, easePremium } from '../utils/motion';

const POSTS = [
  {
    title: 'Cybersecurity in the Digital Age',
    excerpt:
      'How modern enterprises defend against an ever-evolving threat landscape — and what 2026 demands of every CISO.',
    category: 'Security',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1100&q=80',
  },
  {
    title: 'Revolutionizing Customer Experience',
    excerpt:
      'AI-driven personalization is rewriting the rules. We unpack the playbook winning brands are using right now.',
    category: 'Experience',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1100&q=80',
  },
  {
    title: 'The Emergence of 5G: Reshaping Connectivity',
    excerpt:
      'From smart factories to immersive XR, 5G is unlocking infrastructure-grade speed at consumer scale.',
    category: 'Connectivity',
    readTime: '7 min read',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1100&q=80',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: easePremium } },
};

export default function Insights() {
  return (
    <section id="insights" className="relative py-24 sm:py-28 lg:py-32 overflow-hidden">
      {/* Distinctive dark panel background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="absolute inset-0 bg-grid-faint bg-[size:48px_48px] opacity-20" />
        {/* Accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-brand-500/6 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-page container-px">
        {/* Section header with centered alignment for variety */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.18)}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easePremium } },
            }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brand-200"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Insights
          </motion.span>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easePremium } },
            }}
            className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tightest text-white"
          >
            Ideas shaping the future of work.
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easePremium } },
            }}
            className="mt-5 text-base sm:text-lg leading-relaxed text-white/65 max-w-2xl"
          >
            Sharp, opinionated reads from the Ancile team — covering the technologies, trends, and strategies redefining global business.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.22)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {POSTS.map((p, i) => (
            <motion.div key={i} variants={cardVariant}>
              <InsightCard p={p} index={i} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <motion.a
            href="#blog"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.4, duration: 0.7, ease: easePremium }}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white"
          >
            View all insights
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/15 transition-all group-hover:border-brand-300 group-hover:bg-brand-500/20">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
                <polyline points="12 5 19 12 12 19" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </motion.a>
        </div>
      </div>

      {/* Section dividers */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}

function InsightCard({ p, index }) {
  const ref = useRef(null);

  // Card-level parallax: each card moves at a slightly different rate.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const offsets = [60, 30, 90];
  const yRaw = useTransform(scrollYProgress, [0, 1], [offsets[index] || 50, -(offsets[index] || 50)]);
  const yCard = useSpring(yRaw, { stiffness: 80, damping: 22, mass: 0.5 });

  // Image internal parallax (slower than card, opposite direction).
  const imgYRaw = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const imgY = useSpring(imgYRaw, { stiffness: 80, damping: 22, mass: 0.5 });
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.05]);

  return (
    <motion.article
      ref={ref}
      style={{ y: yCard, willChange: 'transform' }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-card-lg cursor-pointer backdrop-blur-sm"
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          src={p.img}
          alt={p.title}
          loading="lazy"
          style={{ y: imgY, scale: imgScale }}
          className="absolute inset-0 h-[140%] w-full object-cover transition-transform duration-[1100ms] ease-out will-change-transform group-hover:scale-110"
        />
        {/* Permanent dim */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-navy-950/10" />
        {/* Hover overlay fade */}
        <div className="absolute inset-0 bg-brand-700/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Category chip */}
        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {p.category}
        </span>

        {/* Content overlay */}
        <div className="absolute inset-x-5 bottom-5 text-white">
          <div className="mb-3 text-xs uppercase tracking-[0.2em] text-white/60">
            {p.readTime}
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">
            {p.title}
          </h3>
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
            <div className="overflow-hidden">
              <p className="mt-3 text-sm text-white/75">{p.excerpt}</p>
            </div>
          </div>
          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-200">
            Read article
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
          </div>
        </div>
      </div>

      {/* Hover glow line */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}
