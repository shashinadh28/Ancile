import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

/**
 * ScrollText — blur + fade word-by-word animation on viewport entry.
 *
 * Props:
 *   text        — string to animate
 *   as          — HTML tag (default 'h2')
 *   className   — class names
 *   delay       — initial delay before stagger starts (seconds)
 *   stagger     — per-word stagger (seconds, default 0.07)
 *   letterAnime — animate letter-by-letter instead of word-by-word
 *   lineAnime   — animate line-by-line (splits on \n)
 *   direction   — 'up' | 'down' | 'left' | 'right' (entry direction)
 *   blurAmount  — blur radius in px (default 10)
 *   once        — only animate once (default true)
 */
export default function ScrollText({
  text,
  as: Tag = 'h2',
  className = '',
  delay = 0,
  stagger: staggerPer = 0.07,
  letterAnime = false,
  lineAnime = false,
  direction = 'up',
  blurAmount = 10,
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-8% 0px' });

  // Build initial offset based on direction
  const getInitial = () => {
    switch (direction) {
      case 'down':  return { y: -24 };
      case 'left':  return { x: 32 };
      case 'right': return { x: -32 };
      default:      return { y: 20 };    // up
    }
  };

  const hiddenStyle = {
    opacity: 0,
    filter: `blur(${blurAmount}px)`,
    ...getInitial(),
  };

  const visibleStyle = (i) => ({
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    x: 0,
    transition: {
      duration: 0.65,
      ease,
      delay: delay + i * staggerPer,
    },
  });

  // --- Letter-by-letter ---
  if (letterAnime) {
    const chars = text.split('');
    return (
      <Tag ref={ref} className={className} aria-label={text}>
        {chars.map((ch, i) => (
          <motion.span
            key={i}
            style={{ display: 'inline-block', whiteSpace: ch === ' ' ? 'pre' : 'normal' }}
            initial={hiddenStyle}
            animate={inView ? visibleStyle(i) : hiddenStyle}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </motion.span>
        ))}
      </Tag>
    );
  }

  // --- Line-by-line ---
  if (lineAnime) {
    const lines = text.split('\n');
    return (
      <Tag ref={ref} className={className} aria-label={text}>
        {lines.map((line, i) => (
          <motion.span
            key={i}
            style={{ display: 'block' }}
            initial={hiddenStyle}
            animate={inView ? visibleStyle(i) : hiddenStyle}
          >
            {line}
          </motion.span>
        ))}
      </Tag>
    );
  }

  // --- Word-by-word (default) ---
  const words = text.split(' ');
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
          initial={hiddenStyle}
          animate={inView ? visibleStyle(i) : hiddenStyle}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
