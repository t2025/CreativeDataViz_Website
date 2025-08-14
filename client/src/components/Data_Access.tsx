// components/DataAccessSection.tsx
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function DataAccessSection() {
  return (
    <section id="data-access" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Match AboutSection heading: text-5xl md:text-7xl, font-serif, gradient-text */}
           <motion.h2
          className="text-2xl md:text-4xl font-serif font-bold temple-gold mb-10 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
            Data Access
          </motion.h2>

          {/* Match AboutSection subline: text-lg md:text-2xl, same maroon color */}
          <motion.p
          className="text-center text-lg text-cream font-serif leading-relaxed max-w-4xl mx-auto mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
            For complete access to our comprehensive dataset and additional resources
          </motion.p>
        </motion.div>

        {/* Body */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Match paragraph style from AboutSection body: text-lg, text-cream, font-serif */}
          <motion.p
          className="text-center text-lg text-cream font-serif leading-relaxed max-w-4xl mx-auto mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
            Our team will respond to your inquiry within 2–3 business days and provide
            detailed information about data access procedures and requirements.
          </motion.p>

          {/* Contact block */}
          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            variants={fadeInUp}
          >
            <a
              href="mailto:data.access@creativedataviz.com"
              className="block text-center rounded-lg border border-neutral-200 bg-white p-6 shadow-md hover:border-temple-gold transition-colors"
            >
              <span className="text-lg font-serif text-cream">
                rohini@buffalo.edu
              </span>
            </a>

            <a
              href="mailto:datasets@creativedataviz.com"
              className="block text-center rounded-lg border border-neutral-200 bg-white p-6 shadow-md hover:border-temple-gold transition-colors"
            >
              <span className="text-lg font-serif text-cream">
                asudarsh@buffal.edu
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
