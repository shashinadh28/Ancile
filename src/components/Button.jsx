import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-brand-500 text-white hover:bg-brand-400 shadow-glow hover:shadow-[0_30px_80px_-15px_rgba(90,130,235,0.6)]',
  secondary:
    'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20',
  ghost: 'text-white/80 hover:text-white',
  light:
    'bg-white text-navy-900 hover:bg-brand-50 shadow-soft',
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
