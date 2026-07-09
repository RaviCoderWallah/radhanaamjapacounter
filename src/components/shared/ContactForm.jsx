"use client";

import { motion } from "framer-motion";

/**
 * ContactForm — client component for the contact form with submit interactivity.
 */
export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission placeholder
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-semibold text-[#4A1C00] mb-1.5"
        >
          Your Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          placeholder="e.g. Radha Das"
          className="w-full border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-amber-900 bg-amber-50/50 focus:outline-none focus:ring-2 focus:ring-[#F37420]/40 transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-semibold text-[#4A1C00] mb-1.5"
        >
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          required
          placeholder="your@email.com"
          className="w-full border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-amber-900 bg-amber-50/50 focus:outline-none focus:ring-2 focus:ring-[#F37420]/40 transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="block text-sm font-semibold text-[#4A1C00] mb-1.5"
        >
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          required
          placeholder="What is this about?"
          className="w-full border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-amber-900 bg-amber-50/50 focus:outline-none focus:ring-2 focus:ring-[#F37420]/40 transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-semibold text-[#4A1C00] mb-1.5"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          required
          placeholder="Write your message here..."
          className="w-full border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-amber-900 bg-amber-50/50 focus:outline-none focus:ring-2 focus:ring-[#F37420]/40 transition-all resize-none"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="submit"
        className="w-full bg-gradient-to-r from-[#F37420] to-[#F9BB4D] text-white font-bold py-3.5 rounded-xl transition-all shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-amber-600 cursor-pointer text-center"
      >
        Send Message 🙏
      </motion.button>
    </form>
  );
}
