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
                    className="text-4xl md:text-5xl font-serif font-bold temple-gold"
                    variants={fadeInUp}
                >
                    Our Pipeline
                </motion.h2>
                <div className="flex justify-center items-center min-h-screen gap-6 px-2">
                       <motion.img
                        src="./src/images/data_collection_stage1.png" // <-- new image
                        alt="Additional visualization"
                        className="w-2/3 h-full object-cover rounded-lg shadow-md"
                        variants={fadeInUp}
                    />
                    <motion.img
                        src="./src/images/architecture.png"
                        alt="Pipeline visualization"
                        className="w-2/3 h-full object-cover rounded-lg shadow-md"
                        variants={fadeInUp}
                    />
                 
                </div>
                <motion.p
                    className="text-lg text-cream max-w-3xl mx-auto leading-relaxed"
                    variants={fadeInUp}
                >
                    We build on a Transformer-based variational autoencoder (VAE) architecture to model human motion sequences. Unlike prior works that condition on language or action labels, our model takes as input a series of motion priors, specifically sequences of SMPL-X pose parameters captured from 3D mesh reconstructions. The architecture is designed to learn meaningful representations of spatiotemporal dynamics without relying on textual supervision.
                </motion.p>
            </motion.div>
        </section>
    );
}
