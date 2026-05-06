import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Card = forwardRef(function Card(
  { children, className = '', as: Tag = 'div', hover = true, tilt = false, ...rest },
  ref,
) {
  const base =
    'relative overflow-hidden rounded-2xl border border-ink-300/60 bg-white shadow-card';

  const hoverStyles = hover
    ? 'transition-all duration-500 hover:border-ink-300 hover:shadow-card-hover'
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
