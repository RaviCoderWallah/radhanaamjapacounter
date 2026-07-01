"use client";

import { motion } from "framer-motion";

/**
 * AnimatedSection — Wraps content with a smooth fade+slide-up whileInView animation.
 * Use this around any section that should animate in when it enters the viewport.
 *
 * @param {ReactNode} children
 * @param {string} [className]
 * @param {number} [delay=0] - Optional stagger delay in seconds
 */
export default function AnimatedSection({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
