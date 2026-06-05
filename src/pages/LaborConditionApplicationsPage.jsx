import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import SectionWrapper from '../components/SectionWrapper.jsx';
import { fadeUp, viewportOnce } from '../utils/motion';

export default function LaborConditionApplicationsPage() {
  const lcas = [
    {
      title: 'Sr. Data Engineer',
      location: 'Hanover, MD',
      details: 'Department: Data & Analytics. Posted in compliance with U.S. Department of Labor guidelines.'
    },
    {
      title: 'Practice Architect',
      location: 'Catonsville, MD & Ellicott City, MD',
      details: 'Department: Architecture & Cloud. Posted in compliance with U.S. Department of Labor guidelines.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[400px] h-[300px] rounded-full blur-[100px]" style={{ background: 'rgba(59,130,246,0.1)' }} />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 text-left">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Compliance
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            Labor Condition Applications
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed"
          >
            Previous Labor Condition Applications (LCAs) are displayed below in accordance with U.S. Department of Labor regulations.
          </motion.p>
        </div>
      </section>

      {/* LCA Listings */}
      <SectionWrapper id="lca-list" className="bg-slate-50">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {lcas.map((lca, i) => (
            <motion.div
              key={lca.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 font-bold text-sm">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-800">{lca.title}</h3>
                </div>
                <p className="text-slate-500 text-sm pl-11">{lca.details}</p>
              </div>

              <div className="flex items-center gap-2 pl-11 sm:pl-0">
                <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-semibold text-slate-600">{lca.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
}
