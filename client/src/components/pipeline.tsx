import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function PipelineSection() {
    return (
        <section id="pipeline" className="py-20 px-4 bg-white">
            <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="max-w-5xl mx-auto text-center space-y-8"
            >
                <motion.h2
                    className="text-2xl md:text-4xl font-serif font-bold temple-gold mb-10"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    Our Pipeline
                </motion.h2>
                <div className="flex justify-center items-start gap-6 px-2 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {[
                            { title: "Stage 1", src: "./src/images/data_collection_stage1.png" },
                            { title: "Stage 2", src: "./src/images/feature_extraction_stage2.png" },
                            { title: "Stage 3", src: "./src/images/architecture.png" },
                        ].map((img) => (
                            <div key={img.title} className="flex flex-col items-center">
                                <h3 className="text-lg text-[#9c1c1c] font-semibold mb-2 font-serif">{img.title}</h3>

                                {/* Fixed-size frame with aspect and border */}
                                <div className="w-full aspect-[4/3] rounded-lg border-4 border-gray-900 shadow-md bg-white p-2">
                                    <motion.img
                                        src={img.src}
                                        alt={img.title}
                                        className="w-full h-full object-contain"
                                        variants={fadeInUp}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <motion.p
                    className="text-lg text-cream max-w-3xl mx-auto leading-relaxed font-serif"
                    variants={fadeInUp}
                >
                    We build on a Transformer-based variational autoencoder (VAE) architecture to model human motion sequences. Unlike prior works that condition on language or action labels, our model takes as input a series of motion priors, specifically sequences of SMPL-X pose parameters captured from 3D mesh reconstructions. The architecture is designed to learn meaningful representations of spatiotemporal dynamics without relying on textual supervision.
                </motion.p>
            </motion.div>
        </section>
    );
}
