// Shared Framer Motion variants and helpers.
// Goal: consistent, premium scroll-triggered motion across every section.

export const easeOutSoft = [0.22, 1, 0.36, 1];
export const easeInOut = [0.65, 0, 0.35, 1];
export const easePremium = [0.16, 1, 0.3, 1];

// Default viewport setting — fires once when 15% of the element is visible
// and triggers slightly before the element fully enters for a smoother feel.
export const viewportOnce = { once: true, margin: '-80px 0px -80px 0px', amount: 0.15 };

// Use this for sections that should re-animate every time they enter the viewport.
export const viewportRepeat = { once: false, margin: '-100px', amount: 0.2 };

/* -------------------------------------------------------------------------- */
/* Atomic variants                                                             */
/* -------------------------------------------------------------------------- */

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easePremium },
  },
};

export const fadeUpSmall = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easePremium } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: easePremium } },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -70 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: easePremium } },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: easePremium } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.85, ease: easePremium } },
};

export const blurIn = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 16 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.9, ease: easePremium },
  },
};

/* -------------------------------------------------------------------------- */
/* Word / character reveal variants                                            */
/* -------------------------------------------------------------------------- */

export const wordReveal = {
  hidden: { opacity: 0, y: '110%' },
  visible: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.85, ease: easePremium },
  },
};

export const charReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easePremium } },
};

/* -------------------------------------------------------------------------- */
/* Stagger helpers                                                             */
/* -------------------------------------------------------------------------- */

export const stagger = (children = 0.18, delay = 0.05) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: children,
      delayChildren: delay,
    },
  },
});

export const staggerFast = stagger(0.06, 0);
export const staggerWords = stagger(0.08, 0.05);
