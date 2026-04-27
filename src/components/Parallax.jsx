import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * Scroll-driven parallax wrapper.
 *
 * Translates the child along Y as the element moves through the viewport.
 *  - speed: positive = moves up (slower than scroll), negative = moves down (faster).
 *  - range: pixel distance of total movement.
 *  - smooth: passes Y through a spring for buttery motion.
 *
 * <Parallax speed={1}>...</Parallax>            // mild upward drift
 * <Parallax speed={-1.5} range={140}>...</Parallax> // counter-scroll drift
 */
export default function Parallax({
  children,
  speed = 1,
  range = 100,
  smooth = true,
  className = '',
  as: Tag = 'div',
  style,
  ...rest
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const distance = range * speed;
  const yRaw = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const ySpring = useSpring(yRaw, { stiffness: 80, damping: 20, mass: 0.4 });
  const y = smooth ? ySpring : yRaw;

  const MotionTag = motion(Tag);

  return (
    <MotionTag
      ref={ref}
      style={{ y, willChange: 'transform', ...style }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Scroll-progress driven scale + opacity for cinematic image entries.
 * Starts slightly zoomed out / faded, lands at 1 / 1 as it crosses the viewport.
 */
export function ParallaxImage({
  children,
  className = '',
  scaleFrom = 1.08,
  scaleTo = 1,
  fadeFrom = 0.6,
  yRange = 60,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scaleRaw = useTransform(scrollYProgress, [0, 0.6, 1], [scaleFrom, scaleTo, scaleTo]);
  const opacityRaw = useTransform(scrollYProgress, [0, 0.4, 1], [fadeFrom, 1, 1]);
  const yRaw = useTransform(scrollYProgress, [0, 1], [yRange, -yRange]);

  const scale = useSpring(scaleRaw, { stiffness: 80, damping: 22, mass: 0.4 });
  const y = useSpring(yRaw, { stiffness: 80, damping: 22, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity: opacityRaw, y, willChange: 'transform, opacity' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
