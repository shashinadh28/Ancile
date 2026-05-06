import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-accent-500 text-white hover:bg-accent-600 shadow-glow hover:shadow-glow-lg',
  secondary:
    'bg-ink-900 text-white hover:bg-ink-800',
  outline:
    'bg-white text-ink-900 border border-ink-300 hover:border-ink-400 hover:bg-surface-100 shadow-soft',
  ghost: 'text-ink-700 hover:text-ink-900',
  light:
    'bg-white text-ink-900 hover:bg-surface-100 shadow-card',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon = true,
  type = 'button',
}) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 will-change-transform ${variants[variant]} ${sizes[size]} ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      {icon && (
        <svg
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      )}
    </>
  );

  const motionProps = {
    whileHover: { y: -2, scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 22 },
  };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={classes} {...motionProps}>
      {inner}
    </motion.button>
  );
}
