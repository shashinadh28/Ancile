import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Button from './Button.jsx';
import { RevealText, RevealGroup } from './Reveal.jsx';
import { fadeUpSmall, viewportOnce, easePremium } from '../utils/motion';

const TALENTS = [
  {
    name: 'Maya Patel',
    role: 'Product Designer',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80',
    rating: '4.9',
    tag: 'Design',
  },
  {
    name: 'David Chen',
    role: 'Cloud Engineer',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    rating: '4.8',
    tag: 'Engineering',
  },
  {
    name: 'Aisha Rahman',
    role: 'Data Scientist',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    rating: '5.0',
    tag: 'AI / ML',
  },
  {
    name: 'Liam Foster',
    role: 'DevOps Lead',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    rating: '4.7',
    tag: 'Infra',
  },
  {
    name: 'Sara Kim',
    role: 'PM, Fintech',
    img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
    rating: '4.9',
    tag: 'Product',
  },
  {
    name: 'Noah Brooks',
    role: 'Solutions Architect',
    img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=600&q=80',
    rating: '4.8',
    tag: 'Strategy',
  },
];

const POINTS = ['Vetted by Ancile experts', 'Match in under 48 hours', 'Flexible engagement models'];

export default function FindTalents() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Different parallax speeds per column for layered motion (smoothed with springs).
  const yA = useSpring(useTransform(scrollYProgress, [0, 1], [80, -80]), {
    stiffness: 70, damping: 20, mass: 0.5,
  });
  const yB = useSpring(useTransform(scrollYProgress, [0, 1], [-40, 40]), {
    stiffness: 70, damping: 20, mass: 0.5,
  });
  const yC = useSpring(useTransform(scrollYProgress, [0, 1], [60, -120]), {
    stiffness: 70, damping: 20, mass: 0.5,
  });

  const columns = [
    [TALENTS[0], TALENTS[1]],
    [TALENTS[2], TALENTS[3]],
    [TALENTS[4], TALENTS[5]],
  ];
  const ys = [yA, yB, yC];

  return (
    <section
      id="talents"
      ref={sectionRef}
      className="relative py-24 sm:py-28 lg:py-36 overflow-hidden"
    >
      {/* Decorative blob with subtle scroll drift */}
      <motion.div
        aria-hidden
        style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 40]) }}
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-brand-500/10 blur-3xl"
      />

      <div className="mx-auto max-w-page container-px grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT — Text */}
        <RevealGroup staggerChildren={0.16} className="lg:col-span-5">
          <motion.span
            variants={fadeUpSmall}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brand-200"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Find Talents
          </motion.span>

          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tightest text-white">
            <RevealText
              text="Find Talents that meet your project need"
              staggerChildren={0.06}
              className="block"
            />
          </h2>

          <motion.p
            variants={fadeUpSmall}
            className="mt-6 text-base sm:text-lg leading-relaxed text-white/65 max-w-lg"
          >
            Discover the perfect match for your project! Our platform makes it easy to find talents
            that precisely align with your project needs. Say goodbye to the guesswork and connect
            with skilled individuals ready to bring your vision to life.
          </motion.p>

          <motion.ul
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            }}
            className="mt-8 space-y-3"
          >
            {POINTS.map((point) => (
              <motion.li
                key={point}
                variants={fadeUpSmall}
                className="flex items-start gap-3 text-white/75"
              >
                <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-brand-500/30 text-brand-200">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3">
                    <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm sm:text-base">{point}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUpSmall} className="mt-9">
            <Button href="#contact" variant="primary" size="lg">
              Find Your Talent
            </Button>
          </motion.div>
        </RevealGroup>

        {/* RIGHT — Parallax image grid */}
        <div className="lg:col-span-7 relative">
          <div className="grid grid-cols-3 gap-4 sm:gap-5">
            {columns.map((col, ci) => (
              <motion.div
                key={ci}
                style={{ y: ys[ci], willChange: 'transform' }}
                className={`flex flex-col gap-4 sm:gap-5 ${ci === 1 ? 'pt-10 sm:pt-14' : ''}`}
              >
                {col.map((t, ti) => (
                  <TalentCard key={ti} t={t} delay={ci * 0.08 + ti * 0.08} />
                ))}
              </motion.div>
            ))}
          </div>
          {/* glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[40px] bg-gradient-to-br from-brand-500/15 via-transparent to-transparent blur-3xl"
          />
        </div>
      </div>
    </section>
  );
}

function TalentCard({ t, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.85, ease: easePremium, delay }}
      whileHover={{ scale: 1.04, y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-card cursor-pointer"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={t.img}
          alt={t.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-transparent" />
      <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur">
        {t.tag}
      </span>
      <div className="absolute inset-x-3 bottom-3">
        <div className="flex items-center justify-between text-white">
          <div>
            <div className="text-sm font-semibold leading-tight">{t.name}</div>
            <div className="text-[11px] text-white/65">{t.role}</div>
          </div>
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium backdrop-blur">
            ★ {t.rating}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
