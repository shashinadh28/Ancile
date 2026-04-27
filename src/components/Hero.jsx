import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Button from './Button.jsx';
import { RevealText } from './Reveal.jsx';
import { stagger, easePremium, fadeUpSmall } from '../utils/motion';
import { TypeAnimation } from 'react-type-animation';

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easePremium } },
};

export default function Hero() {
  const ref = useRef(null);

  // Scroll progress for the WHOLE hero — used for scene-level parallax/fade.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Layered parallax — different speeds for depth.
  const yMain = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yChipL = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const yChipR = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yNotif = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  // Smooth springs for buttery parallax.
  const sMain = useSpring(yMain, { stiffness: 80, damping: 20, mass: 0.4 });
  const sChipL = useSpring(yChipL, { stiffness: 80, damping: 20, mass: 0.4 });
  const sChipR = useSpring(yChipR, { stiffness: 80, damping: 20, mass: 0.4 });
  const sNotif = useSpring(yNotif, { stiffness: 80, damping: 20, mass: 0.4 });

  return (
    <section
      ref={ref}
      id="home"
      className="relative isolate overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-40"
    >
      {/* Background glows — enhanced with more layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-radial from-brand-500/25 via-brand-600/10 to-transparent blur-3xl" />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -60]) }}
          className="absolute -top-20 -left-32 h-[400px] w-[400px] animate-blob rounded-full bg-brand-500/20 blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 60]) }}
          className="absolute top-40 -right-24 h-[500px] w-[500px] animate-blob rounded-full bg-brand-400/15 blur-3xl [animation-delay:-4s]"
        />
        {/* Animated grid with accent colors */}
        <div className="absolute inset-0 bg-grid-faint bg-[size:48px_48px] opacity-[0.35] mask-fade-b" />
        {/* Orbiting accent dot */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-2 w-2 rounded-full bg-brand-300/60 animate-orbit blur-[1px]" />
        </div>
        {/* Extra radial wash for hero depth */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-950 to-transparent" />
      </div>

      <motion.div style={{ opacity, scale: heroScale }} className="mx-auto max-w-page container-px">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT: Text */}
          <motion.div style={{ y: yText }} className="lg:col-span-7 -ml-2 sm:-ml-4 lg:-ml-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger(0.15, 0.1)}
            >
              <motion.div
                variants={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 border-shimmer"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
                </span>
                Trusted by clients across 12+ countries
              </motion.div>

              <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold leading-[1.02] tracking-tightest">
                <RevealText
                  as="span"
                  text="Your Trusted Source for"
                  trigger="animate"
                  staggerChildren={0.12}
                  delay={0.25}
                  className="block text-white/90"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.65, duration: 0.8 }}
                  className="mt-2 block min-h-[2.4em]"
                >
                  <TypeAnimation
                    sequence={[
                      'Study Abroad\nservices',
                      2000,
                      'Technology\nConsulting',
                      2000,
                      'Expert\nRecruitment',
                      2000,
                      'Recruiting\nservices',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-gradient whitespace-pre-line block"
                  />
                </motion.div>
              </h1>

              <motion.p
                variants={item}
                className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-white/70"
              >
                Your strategic partner in global education, elite talent acquisition, and transformative technology consulting.
              </motion.p>

              <motion.div
                variants={item}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <Button href="#cta" variant="primary" size="lg">
                  Get Started
                </Button>
                <Button href="#services" variant="secondary" size="lg" icon={false}>
                  Explore Services
                </Button>
              </motion.div>

              <motion.div
                variants={stagger(0.12, 1.1)}
                initial="hidden"
                animate="visible"
                className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-white/50"
              >
                <Stat value="500+" label="Talents Placed" />
                <Divider />
                <Stat value="20+" label="Industries Served" />
                <Divider />
                <Stat value="98%" label="Client Retention" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Animated visual composition */}
          <div className="lg:col-span-5 relative h-[460px] sm:h-[520px] lg:h-[580px]">
            {/* Soft halo */}
            <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-br from-brand-500/20 via-transparent to-transparent blur-2xl" />
            {/* Animated glow ring */}
            <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-br from-brand-400/10 to-brand-600/5 blur-3xl animate-pulse-glow" />

            {/* Main hero image card */}
            <motion.div
              style={{ y: sMain }}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.55, duration: 1.1, ease: easePremium }}
              className="absolute right-0 top-6 w-[78%] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-glow-lg"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80"
                alt="Confident professional"
                className="h-full w-full object-cover"
                loading="eager"
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.55, duration: 1.6, ease: easePremium }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl glass-premium p-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-500/30 text-brand-200">
                    <Star />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/60">Top rated</div>
                    <div className="text-sm font-semibold text-white">Verified specialist</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating profile chip */}
            <motion.div
              style={{ y: sChipL }}
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.85, duration: 1, ease: easePremium }}
              className="absolute left-0 top-32 w-56"
            >
              <div className="rounded-2xl glass-premium p-4 shadow-card animate-float">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                    alt="Talent"
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-brand-400/40"
                  />
                  <div>
                    <div className="text-sm font-semibold text-white">Anika S.</div>
                    <div className="text-xs text-white/55">Senior Cloud Architect</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-white/60">
                  <span className="rounded-full bg-brand-500/20 px-2 py-0.5 text-brand-200">Available</span>
                  <span>★ 4.9</span>
                </div>
              </div>
            </motion.div>

            {/* Floating metric chip */}
            <motion.div
              style={{ y: sChipR }}
              initial={{ opacity: 0, x: 30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1, duration: 1, ease: easePremium }}
              className="absolute -left-2 bottom-10 w-60"
            >
              <div className="rounded-2xl glass-premium p-4 shadow-card animate-float-slow">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/55">Projects Live</div>
                    <div className="mt-1 font-display text-2xl font-bold text-white">128</div>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 shadow-glow">
                    <Bolt />
                  </span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '76%' }}
                    transition={{ delay: 1.4, duration: 1.4, ease: easePremium }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-200"
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating notification */}
            <motion.div
              style={{ y: sNotif }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8, ease: easePremium }}
              className="absolute right-2 bottom-2 w-52"
            >
              <div className="rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 p-4 shadow-glow-lg animate-float [animation-delay:-2s]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-brand-100">
                  <PulseDot /> New match
                </div>
                <div className="mt-1 text-sm font-semibold text-white">
                  3 new talents matched your project brief.
                </div>
              </div>
            </motion.div>

            {/* Decorative rings */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10 animate-pulse-glow" />
            <div className="pointer-events-none absolute -left-6 bottom-24 h-24 w-24 rounded-full border border-brand-400/20" />
          </div>
        </div>

        {/* Marquee of trust labels */}
        <motion.div
          variants={fadeUpSmall}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative mt-20 sm:mt-24 overflow-hidden"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-white/35 mb-5 text-center">
            Powering teams at forward-thinking companies
          </div>
          <div className="mask-fade-edges">
            <div className="flex w-max animate-marquee items-center gap-14">
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <span
                  key={i}
                  className="text-base sm:text-lg font-display font-semibold text-white/40 hover:text-white/80 transition-colors"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}

const LOGOS = [
  'Google',
  'GM',
  'Oracle',
  'FedEx',
  'HP',
  'Verizon',
];

function Divider() {
  return <span className="hidden sm:block h-8 w-px bg-white/10" />;
}

function Stat({ value, label }) {
  return (
    <motion.div variants={item}>
      <div className="font-display text-2xl font-bold text-white">{value}</div>
      <div className="text-xs uppercase tracking-wider text-white/45">{label}</div>
    </motion.div>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" />
    </svg>
  );
}

function Bolt() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="h-5 w-5">
      <path d="M13 2L3 14h7l-1 8 11-14h-7l1-6z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function PulseDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
    </span>
  );
}
