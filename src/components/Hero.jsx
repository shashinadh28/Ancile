import { useRef } from 'react';
import { motion } from 'framer-motion';
import { stagger, easePremium } from '../utils/motion';

const ease = [0.22, 1, 0.36, 1];

/* Per-item stagger variant */
const item = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease, delay: i * 0.12 },
  }),
};

export default function Hero() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="home"
      className="relative isolate overflow-hidden"
      style={{ backgroundColor: '#0B1120', minHeight: '100vh' }}
    >
      {/* ── BACKGROUND: Big orange circle slides in from right ── */}
      <motion.img
        src="/SVG/Orange_Circle.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none hidden lg:block"
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease, delay: 0.1 }}
        style={{
          top: '9%',
          right: '-3%',
          transform: 'translateY(-50%)',
          width: '30vw',
          maxWidth: '700px',
          minWidth: '400px',
          zIndex: 0,
        }}
      />

      {/* ── CONTENT ─────────────────────────────────────────────── */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1280px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'clamp(1.25rem, 4vw, 3rem)',
          paddingRight: 'clamp(1.25rem, 4vw, 3rem)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'center',
            minHeight: '100vh',
            paddingTop: 'clamp(5rem, 10vw, 7rem)',
            paddingBottom: '4rem',
          }}
        >
          {/* ── LEFT: Text ─────────────────────────────────────── */}
          <div>
            {/* Badge */}
            <motion.div
              custom={0} variants={item} initial="hidden" animate="visible"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '1.75rem' }}
            >
              <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#F97316', borderRadius: '2px' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#F97316', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Welcome to Ancile
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={1} variants={item} initial="hidden" animate="visible"
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4.25rem)',
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: '-0.035em',
                color: '#FFFFFF',
                fontFamily: '"Plus Jakarta Sans", Inter, sans-serif',
                marginBottom: '1.5rem',
              }}
            >
              Talent + Technology<br />
              to Accelerate<br />
              <span style={{ color: '#F97316' }}>Delivery.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2} variants={item} initial="hidden" animate="visible"
              style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.6)',
                maxWidth: '440px',
                marginBottom: '1rem',
              }}
            >
              Ancile helps organizations scale with specialized talent and technology
              services—built for speed, accountability, and measurable impact.
            </motion.p>

            {/* Trust line */}
            <motion.p
              custom={3} variants={item} initial="hidden" animate="visible"
              style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em', marginBottom: '2.5rem' }}
            >
              Trusted by teams across industries in the U.S. and globally.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={4} variants={item} initial="hidden" animate="visible"
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}
            >
              <motion.a
                href="#contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  background: '#F97316', color: '#fff', fontWeight: 700,
                  fontSize: '15px', padding: '14px 28px', borderRadius: '50px',
                  textDecoration: 'none', boxShadow: '0 8px 32px rgba(249,115,22,0.35)',
                  letterSpacing: '0.01em',
                }}
                whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(249,115,22,0.5)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                Talk to Sales
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </motion.a>

              <motion.a
                href="#services"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}
                whileHover={{ color: '#fff' }}
              >
                View Capabilities
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={5} variants={item} initial="hidden" animate="visible"
              style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)', flexWrap: 'wrap' }}
            >
              <Stat value="500+" label="Talents Placed" />
              <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />
              <Stat value="20+" label="Industries Served" />
              <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />
              <Stat value="98%" label="Client Retention" />
            </motion.div>
          </div>

          {/* ── RIGHT: Hero Image (desktop only) ─────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.1, ease }}
            className="hidden lg:flex"
            style={{ position: 'relative', justifyContent: 'center', alignItems: 'flex-end' }}
          >
            {/* White Circle — slides up */}
            <motion.img
              src="/SVG/white_circle.png" alt="" aria-hidden="true"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8, ease }}
              style={{ position: 'absolute', top: '-70px', left: '156px', zIndex: 2, width: '35px', objectFit: 'contain', pointerEvents: 'none' }}
            />

            {/* Tall rectangle behind white circle — slides up */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 0.2, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8, ease }}
              style={{ position: 'absolute', top: '-50px', left: '156px', zIndex: 1, width: '35px', height: '150px', background: '#ffffff', borderRadius: '4px', pointerEvents: 'none' }}
            />

            {/* Orange Circle mid-left — slides up */}
            <motion.img
              src="/SVG/Orange_Circle.png" alt="" aria-hidden="true"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.8, ease }}
              style={{ position: 'absolute', top: '-34px', left: '105px', zIndex: 2, width: '35px', objectFit: 'contain', pointerEvents: 'none' }}
            />

            {/* White Circle bottom-left — slides up */}
            <motion.img
              src="/SVG/white_circle.png" alt="" aria-hidden="true"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.8, ease }}
              style={{ position: 'absolute', top: '-8px', left: '54px', zIndex: 2, width: '35px', objectFit: 'contain', pointerEvents: 'none' }}
            />

            {/* Rectangle behind orange circle — slides up */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 0.2, y: 0 }}
              transition={{ delay: 1.15, duration: 0.8, ease }}
              style={{ position: 'absolute', top: '-10px', left: '105px', zIndex: 1, width: '35px', height: '150px', background: '#ffffff', borderRadius: '4px', pointerEvents: 'none' }}
            />

            {/* Rectangle far left — slides up */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 0.2, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease }}
              style={{ position: 'absolute', top: '15px', left: '54px', zIndex: 1, width: '35px', height: '150px', background: '#ffffff', borderRadius: '4px', pointerEvents: 'none' }}
            />

            {/* Stars — slides up */}
            <motion.img
              src="/SVG/stars.png" alt="" aria-hidden="true"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8, ease }}
              style={{ position: 'absolute', top: '80%', left: '-80px', zIndex: 1, width: '80px', objectFit: 'contain', pointerEvents: 'none' }}
            />

            {/* 18k+ Clients badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.8, ease }}
              style={{ position: 'absolute', left: '-20px', top: '42%', zIndex: 10, background: 'white', borderRadius: '50px', padding: '8px 16px 8px 8px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
            >
              <div style={{ display: 'flex' }}>
                {['#6366f1', '#10b981', '#f59e0b'].map((color, i) => (
                  <div key={i} style={{ width: '30px', height: '30px', borderRadius: '50%', background: color, border: '2px solid white', marginLeft: i > 0 ? '-8px' : '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                ))}
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#22c55e', border: '2px solid white', marginLeft: '-8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <line x1="12" y1="5" x2="12" y2="19" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    <line x1="5" y1="12" x2="19" y2="12" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#0B1120', lineHeight: 1 }}>18k+</div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Trusted Clients</div>
              </div>
            </motion.div>

            {/* Main hero image */}
            <img
              src="/ancile_Landing_Page.png"
              alt="Professional team collaborating"
              style={{
                width: '100%',
                maxWidth: '560px',
                objectFit: 'contain',
                position: 'relative',
                zIndex: 2,
                marginTop: '-80px',
                marginLeft: '200px', // 👈 Moved right
                filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.6))'
              }}
            />
          </motion.div>
        </div>

        {/* Trust marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease }}
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '2rem', paddingBottom: '3rem' }}
        >
          <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.25)', textAlign: 'center', marginBottom: '1.5rem' }}>
            Trusted by delivery-focused teams
          </div>
          <div className="mask-fade-edges" style={{ overflow: 'hidden' }}>
            <div className="flex w-max animate-marquee items-center gap-14">
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <span key={i} style={{ fontSize: '16px', fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', fontWeight: 600, color: 'rgba(255,255,255,0.18)', whiteSpace: 'nowrap' }}>
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const LOGOS = ['Google', 'GM', 'Oracle', 'FedEx', 'HP', 'Verizon'];

function Stat({ value, label }) {
  return (
    <div>
      <div style={{ fontSize: 'clamp(1.4rem, 3vw, 1.75rem)', fontWeight: 800, color: '#FFFFFF', fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>{label}</div>
    </div>
  );
}
