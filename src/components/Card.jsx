import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Card = forwardRef(function Card(
  { children, className = '', as: Tag = 'div', hover = true, tilt = false, ...rest },
  ref,
) {
  const base =
    'relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md ring-soft shadow-card';

  const hoverStyles = hover
    ? 'transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-glow'
    : '';

  const motionProps = hover
    ? {
        whileHover: tilt
          ? { y: -8, rotateX: 2, rotateY: -2, scale: 1.015 }
          : { y: -6, scale: 1.01 },
        transition: { type: 'spring', stiffness: 220, damping: 22 },
      }
    : {};

  const MotionTag = motion(Tag);

  return (
    <MotionTag ref={ref} className={`${base} ${hoverStyles} ${className}`} {...motionProps} {...rest}>
      {children}
    </MotionTag>
  );
});

export default Card;
