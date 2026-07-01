"use client";

import { motion } from "framer-motion";

/**
 * PageHeader — Reusable page header with breadcrumb + animated heading + decorative divider.
 *
 * @param {string} eyebrow - Small text above heading (e.g. "Sacred Mantras")
 * @param {string} heading - Main H1 heading text
 * @param {string} [description] - Optional subtitle paragraph
 * @param {Array} breadcrumbs - Array of { label, href } breadcrumb items
 * @param {string} [headingColor] - CSS color for heading (default: #F37420)
 */
export default function PageHeader({
  eyebrow,
  heading,
  description,
  headingColor = "#F37420",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center mb-12"
    >
      {eyebrow && (
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-2"
          style={{ color: headingColor }}
        >
          {eyebrow}
        </p>
      )}
      <h1
        className="primary-heading font-bold mb-3"
        style={{ color: headingColor }}
      >
        {heading}
      </h1>
      <div
        className="w-16 h-1 rounded-full mx-auto"
        style={{ backgroundColor: headingColor }}
      />
      {description && (
        <p className="paragraph-text max-w-xl mx-auto mt-4 text-[#7a5c2e]">
          {description}
        </p>
      )}
    </motion.div>
  );
}
