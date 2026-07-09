"use client";

import { motion } from "framer-motion";

/**
 * MotionSubmitButton — client-side animated submit button for the contact form.
 */
export default function MotionSubmitButton({ children, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
