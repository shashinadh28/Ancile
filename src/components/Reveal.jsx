import { motion } from 'framer-motion';
import {
  fadeUp,
  fadeUpSmall,
  fadeIn,
  slideInLeft,
  slideInRight,
  scaleIn,
  blurIn,
  stagger,
  wordReveal,
  viewportOnce,
  easePremium,
} from '../utils/motion';

const VARIANTS = {
  fadeUp,
  fadeUpSmall,
  fadeIn,
  slideInLeft,
  slideInRight,
  scaleIn,
  blurIn,
};

/**
 * Generic scroll-triggered reveal wrapper.
 * Use for any element that should animate in when it enters the viewport.
 *
 * <Reveal as="h2" variant="fadeUp" delay={0.1}>...</Reveal>
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'fadeUp',
  delay = 0,
  duration,
  className = '',
  viewport = viewportOnce,
  children,
  ...rest
}) {
  const baseVariant = VARIANTS[variant] ?? fadeUp;

  // Apply per-instance delay/duration override.
  const customised = {
    ...baseVariant,
    visible: {
      ...baseVariant.visible,
      transition: {
        ...(baseVariant.visible.transition ?? {}),
        ...(duration ? { duration } : {}),
        delay,
      },
    },
  };

  const MotionTag = motion(Tag);

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={customised}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Splits text into words and animates each one upward from a clipped mask.
 * Use for hero / large headings where you want a cinematic line-by-line feel.
 *
 * <RevealText text="Your Trusted Source" stagger={0.08} />
 */
export function RevealText({
  text,
  as: Tag = 'span',
  className = '',
  wordClassName = '',
  staggerChildren = 0.08,
  delay = 0,
  viewport = viewportOnce,
  trigger = 'whileInView', // 'whileInView' | 'animate'
}) {
  const words = String(text).split(' ');
  const MotionTag = motion(Tag);

  const animationProps =
    trigger === 'animate'
      ? { initial: 'hidden', animate: 'visible' }
      : { initial: 'hidden', whileInView: 'visible', viewport };

  return (
    <MotionTag
      {...animationProps}
      variants={stagger(staggerChildren, delay)}
      className={className}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className={`inline-block overflow-hidden align-bottom ${wordClassName}`}
        >
          <motion.span
            variants={wordReveal}
            className="inline-block will-change-transform"
            style={{ paddingBottom: '0.05em' }}
          >
            {word}
            {i !== words.length - 1 && '\u00A0'}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/**
 * Container that staggers its direct children. Wrap any group whose children
 * are wrapped in <Reveal /> or motion.div with the matching variant.
 */
export function RevealGroup({
  as: Tag = 'div',
  staggerChildren: s = 0.18,
  delay = 0.05,
  className = '',
  viewport = viewportOnce,
  children,
  ...rest
}) {
  const MotionTag = motion(Tag);
  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger(s, delay)}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export { easePremium };
