import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function AICoDanceSection() {
  return (
    <section className="py-20 bg-white" id="ai-co-dance">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-4xl font-serif font-bold temple-gold mb-10 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          AI and Human Co-Dancing
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Tile 1 */}
          <div className="text-center">
            <p className="text-lg text-[#9c1c1c] mb-2 font-semibold font-serif">Human Performance</p>
            <video
              src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/realis_ref_ankitha1_smpl+(1).mp4"
              autoPlay
              loop
              muted
              className="w-full h-[18rem] object-cover rounded-lg shadow-md mx-auto"
            />
          </div>

          {/* Tile 2 */}
          <div className="text-center">
            <p className="text-lg text-[#9c1c1c] mb-2 font-semibold font-serif">Mesh Animation</p>
            <video
              src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/example.mp4"
              autoPlay
              loop
              muted
              className="w-full h-[18rem] object-cover rounded-lg shadow-md mx-auto"
            />
          </div>

          {/* Tile 3 */}
          <div className="text-center">
            <p className="text-lg text-[#9c1c1c] mb-2 font-semibold font-serif">Our Output</p>
            <video
              src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/ref_smpl.mp4"
              autoPlay
              loop
              muted
              className="w-full h-[18rem] object-cover rounded-lg shadow-md mx-auto"
            />
          </div>

          {/* Tile 4 */}
          <div className="text-center">
            <video
              src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/realis_ref_ankitha1_smpl+(1).mp4"
              autoPlay
              loop
              muted
              className="w-full h-[18rem] object-cover rounded-lg shadow-md mx-auto"
            />
          </div>

          {/* Tile 5 */}
          <div className="text-center">
            <video
              src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/example.mp4"
              autoPlay
              loop
              muted
              className="w-full h-[18rem] object-cover rounded-lg shadow-md mx-auto"
            />
          </div>

          {/* Tile 6 */}
          <div className="text-center">
            <video
              src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/ref_smpl.mp4"
              autoPlay
              loop
              muted
              className="w-full h-[18rem] object-cover rounded-lg shadow-md mx-auto"
            />
          </div>

          {/* Tile 7 */}
          <div className="text-center">
            <video
              src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/realis_ref_ankitha1_smpl+(1).mp4"
              autoPlay
              loop
              muted
              className="w-full h-[18rem] object-cover rounded-lg shadow-md mx-auto"
            />
          </div>

          {/* Tile 8 */}
          <div className="text-center">
            <video
              src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/example.mp4"
              autoPlay
              loop
              muted
              className="w-full h-[18rem] object-cover rounded-lg shadow-md mx-auto"
            />
          </div>

          {/* Tile 9 */}
          <div className="text-center">
            <video
              src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/ref_smpl.mp4"
              autoPlay
              loop
              muted
              className="w-full h-[18rem] object-cover rounded-lg shadow-md mx-auto"
            />
          </div>
        </motion.div>

        <motion.p
          className="text-center text-lg text-cream max-w-4xl mx-auto mt-12 text-base font-serif leading-relaxed"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          This tri-frame view compares traditional human choreography with AI-driven mesh outputs and the stylized RealisDance rendering. The 9-tile layout provides a diverse visual narrative of AI and human co-creation across multiple samples.
        </motion.p>
      </div>
    </section>
  );
}
