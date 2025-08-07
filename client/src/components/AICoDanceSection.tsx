// components/AICoDanceSection.tsx

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function AICoDanceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-temple-gold text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          AI and Human Co-Dancing
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8 items-start justify-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Human Dance */}
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-2 font-semibold">Human Performance</p>
            <video
              src="./src/videos/realis_ref_ankitha1_smpl (1).mp4"
              autoPlay
              loop
              muted
              className="w-full h-[30rem] object-cover rounded-lg shadow-md mx-auto"
            />
          </div>

          {/* Mesh Animation */}
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-2 font-semibold">Mesh Animation</p>
            <video
              src="./src/videos/example.mp4"
              autoPlay
              loop
              muted
              className="w-full h-[30rem] object-cover rounded-lg shadow-md mx-auto"
            />
          </div>

          {/* RealisDance Output */}
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-2 font-semibold">Our Output</p>
            <video
              src="./src/videos/ref_smpl.mp4"
              autoPlay
              loop
              muted
              className="w-full h-[30rem] object-cover rounded-lg shadow-md mx-auto"
            />
          </div>
        </motion.div>

        <motion.p
          className="text-center text-gray-600 max-w-4xl mx-auto mt-12 text-base"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          This tri-frame view compares traditional human choreography with AI-driven mesh outputs and the stylized RealisDance rendering. The side-by-side layout emphasizes how artificial intelligence can model, interpret, and creatively reimagine expressive human motion.
        </motion.p>
      </div>
    </section>
  );
}
