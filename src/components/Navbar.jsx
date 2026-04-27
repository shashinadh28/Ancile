import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button.jsx';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Success Stories', href: '#stories' },
  { label: 'Foundation', href: '#foundation' },
  { label: 'Academy', href: '#academy' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong py-3 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.6)]'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto max-w-page container-px flex items-center justify-between">
        <a href="#" className="group flex items-center gap-2.5">
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Ancile <span className="text-brand-300">Inc</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative inline-block px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                <span>{link.label}</span>
                <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-transparent via-brand-300 to-transparent transition-transform duration-300 hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Button href="#cta" variant="primary" size="sm">
            Get Started
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" strokeLinecap="round" />
                <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
                <line x1="4" y1="17" x2="20" y2="17" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mx-4 mt-3 rounded-2xl glass p-4"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    onClick={() => setOpen(false)}
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex gap-2 px-1">
              <Button href="#cta" variant="primary" size="sm" className="flex-1">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
