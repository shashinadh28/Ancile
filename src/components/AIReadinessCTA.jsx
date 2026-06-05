import { motion } from 'framer-motion';
import { viewportOnce } from '../utils/motion';
import { Link } from 'react-router-dom';

const ease = [0.22, 1, 0.36, 1];

export default function AIReadinessCTA() {
  return (
    <section
      id="assessment"
      className="relative py-16 overflow-hidden border-t border-white/5"
      style={{ backgroundColor: '#070D19' }}
    >
      {/* Decorative background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[500px] h-[300px] rounded-full blur-[100px] opacity-[0.25]"
        style={{
          background: 'radial-gradient(circle, rgba(13,148,136,0.18) 0%, transparent 70%)',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-[500px] h-[300px] rounded-full blur-[100px] opacity-[0.18]"
        style={{
          background: 'radial-gradient(circle, rgba(21,101,216,0.12) 0%, transparent 70%)',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />

      {/* Subtle lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Headline / Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease }}
            className="text-center lg:text-left max-w-2xl"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ border: '1px solid rgba(13,148,136,0.3)', background: 'rgba(13,148,136,0.1)', color: '#0D9488' }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#0D9488' }} />
              Free Assessment
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white tracking-tight">
              Find out where your AI program stands — in 3 minutes.
            </h2>
            <p className="mt-3 text-sm text-slate-400 font-medium">
              Take our interactive Readiness Survey to score your engineering depth, identify deployment bottlenecks, and get custom recommendations.
            </p>
          </motion.div>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto flex-shrink-0 justify-center"
          >
            <Link
              to="/ai-readiness-assessment"
              className="inline-flex items-center justify-center gap-2 text-white font-bold text-sm py-4 px-8 rounded-full shadow-lg transition-transform hover:scale-102 focus:outline-none w-full sm:w-auto"
              style={{ backgroundColor: '#0D9488', boxShadow: '0 8px 24px rgba(13,148,136,0.35)' }}
            >
              Take the Free AI Assessment
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 text-slate-300 hover:text-white font-bold text-sm py-4 px-6 transition-colors w-full sm:w-auto"
            >
              Or book a free 30-min call
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
