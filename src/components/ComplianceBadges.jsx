import { motion } from 'framer-motion';
import { viewportOnce } from '../utils/motion';

const ease = [0.22, 1, 0.36, 1];

const BADGES = [
  { name: 'SOC 2 Type II', standard: 'Security & Trust', desc: 'Continuous compliance monitoring across access layers.' },
  { name: 'HIPAA', standard: 'Healthcare Standards', desc: 'Secure identity tracking and data audit logs for health systems.' },
  { name: 'FedRAMP', standard: 'Federal Security', desc: 'Aligned with stringent government identity boundary rules.' },
  { name: 'NIST CSF', standard: 'Cybersecurity Framework', desc: 'Rigorous implementation guidelines for threat detection & controls.' },
  { name: 'ISO 27001', standard: 'Information Security', desc: 'Best practices for robust credential and operational safety.' },
  { name: 'EU AI Act', standard: 'AI Safety & Audit', desc: 'Access controls and transparency logging for generative systems.' },
];

export default function ComplianceBadges() {
  return (
    <section
      id="compliance"
      className="relative py-12 sm:py-16 overflow-hidden border-b border-gray-100"
      style={{ backgroundColor: '#F8FAFC' }}
    >
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease }}
            className="flex-shrink-0 max-w-sm text-center lg:text-left"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-blue-600 mb-2">
              Compliance & Safety
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-tight">
              Enterprise security built for complex standards.
            </h3>
            <p className="mt-2 text-xs text-slate-500 font-medium">
              We design and staff systems that maintain perfect compliance audits in highly regulated industries.
            </p>
          </motion.div>

          {/* Right badges list */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
            {BADGES.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, ease, delay: i * 0.04 }}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col justify-between p-4 rounded-xl bg-white border border-slate-100 shadow-sm cursor-default"
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-black text-slate-800">{b.name}</span>
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 block mt-0.5 uppercase tracking-wide">
                    {b.standard}
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 font-medium mt-2 leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
