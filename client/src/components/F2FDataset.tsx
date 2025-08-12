// components/F2FDatasetSection.tsx

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function F2FDatasetSection() {
  return (
    <section className="py-20 bg-white" id="f2f-dataset">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-4xl font-serif font-bold temple-gold mb-10 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          FootWork2FrameWork (F2F) Dataset
        </motion.h2>

        <motion.p
          className="text-center text-lg text-cream leading-relaxed font-serif"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Footwork2Framework is designed to digitally preserve the nuanced vocabulary of this South Asian dance form through a combination of curated performances and controlled recordings.
          The Footwork2Framework dataset comprises 1,910 video clips, each 25 seconds long and sampled at 30 frames per second, totaling 47,750 seconds (approximately 13 hours) of performance footage.
        Each clip is meticulously annotated with detailed footwork patterns, making F2F a substantially larger dataset for motion sequences that uniquely represents the South Asian dance genre, establishing it as a valuable resource for classical dance motion analysis.

        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8 items-start justify-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Row 1 */}
          <div className="text-center">
            <img
              src="/images/f2f_sample1.jpg"
              alt="F2F Sample 1"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="text-center">
            <img
              src="/images/f2f_sample2.jpg"
              alt="F2F Sample 2"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="text-center">
            <img
              src="/images/f2f_sample3.jpg"
              alt="F2F Sample 3"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Row 2 */}
          <div className="text-center">
            <img
              src="/images/f2f_sample4.jpg"
              alt="F2F Sample 4"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="text-center">
            <img
              src="/images/f2f_sample5.jpg"
              alt="F2F Sample 5"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="text-center">
            <img
              src="/images/f2f_sample6.jpg"
              alt="F2F Sample 6"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
