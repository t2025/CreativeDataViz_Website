// components/OtherUseCasesSection.tsx

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function OtherUseCasesSection() {
  return (
    <section className="py-20 bg-white" id="other-use-cases">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-4xl font-serif font-bold temple-gold mb-10 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Other Use Cases: Bharatanatyam on Diverse Avatars
        </motion.h2>

        <motion.p
          className="text-center text-lg text-cream font-serif leading-relaxed max-w-4xl mx-auto mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Examples of Bharatanatyam motion retargeted to varied avatar styles—ranging from stylized
          characters to pop-culture–inspired figures—illustrating portability of our motion
          representations across appearance and rig domains.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-6 items-start justify-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Row 1 */}
          <div className="text-center">
            <p className="text-sm md:text-base text-[#9c1c1c] mb-2 font-semibold font-serif">
              K-pop Style Avatar
            </p>
            <video
              src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/chunk%3D002-ref_pop_chunk_002.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-40 md:h-56 object-cover rounded-lg shadow-md mx-auto bg-black"
            />
          </div>

          <div className="text-center">
            <p className="text-sm md:text-base text-[#9c1c1c] mb-2 font-semibold font-serif">
              Stylized Toon (Sponge-inspired)
            </p>
            <video
              src="https://your-bucket/sponge_style_01.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-40 md:h-56 object-cover rounded-lg shadow-md mx-auto bg-black"
            />
          </div>

          <div className="text-center">
            <p className="text-sm md:text-base text-[#9c1c1c] mb-2 font-semibold font-serif">
              Anime Girl Rig
            </p>
            <video
              src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/chunk%3D002-ref_anime_chunk_002.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-40 md:h-56 object-cover rounded-lg shadow-md mx-auto bg-black"
            />
          </div>

          {/* Row 2 */}
          <div className="text-center">
            <p className="text-sm md:text-base text-[#9c1c1c] mb-2 font-semibold font-serif">
              Low-Poly Character
            </p>
            <video
              src="https://your-bucket/lowpoly_avatar_01.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-40 md:h-56 object-cover rounded-lg shadow-md mx-auto bg-black"
            />
          </div>

          <div className="text-center">
            <p className="text-sm md:text-base text-[#9c1c1c] mb-2 font-semibold font-serif">
              Cartoon Mascot
            </p>
            <video
              src="https://your-bucket/cartoon_avatar_01.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-40 md:h-56 object-cover rounded-lg shadow-md mx-auto bg-black"
            />
          </div>

          <div className="text-center">
            <p className="text-sm md:text-base text-[#9c1c1c] mb-2 font-semibold font-serif">
              Realistic Human Avatar
            </p>
            <video
              src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/chunk%3D003-ref_realman_chunk_003.mp4"
              autoPlay
              loop
              
              muted
              playsInline
              className="w-full h-40 md:h-56 object-cover rounded-lg shadow-md mx-auto bg-black"
            />
          </div>
        </motion.div>

        <motion.p
          className="text-center text-base text-cream font-serif leading-relaxed max-w-4xl mx-auto mt-12 mb-8"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          These lightweight previews demonstrate cross-avatar generalization: the same Bharatanatyam
          sequence can be mapped to heterogeneous rigs while preserving rhythmic structure and expressivity.
        </motion.p>

        {/* Contact Button */}
        <motion.div
          className="text-center mt-6"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <a id="contact-button"
            href="mailto:asudarsh@buffalo.edu,lipishan@buffalo.edu,tanviran@buffalo.edu,inwogu@buffalo.edu,rohini@buffalo.edu?subject=Request%20for%20Access%20to%20Data"
            className="inline-block bg-[#9c1c1c] hover:bg-[#7a1616] text-white font-serif px-6 py-3 rounded-lg shadow-md transition-colors duration-200"
          >
            Access to Data
          </a>
        </motion.div>
      </div>
    </section>
  );
}
