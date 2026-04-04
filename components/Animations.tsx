import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export const FadeIn = ({ children, delay = 0, direction = 'up', distance = 20 }: { children: ReactNode, delay?: number, direction?: 'up' | 'down' | 'left' | 'right', distance?: number }) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

export const FloatingText = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => (
  <motion.span
    animate={{ y: [0, -5, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
    className="inline-block"
  >
    {children}
  </motion.span>
);

export const PulseText = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => (
  <motion.span
    animate={{ opacity: [0.7, 1, 0.7], scale: [0.98, 1, 0.98] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay }}
    className="inline-block"
  >
    {children}
  </motion.span>
);
