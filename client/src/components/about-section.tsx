import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, Users, Globe } from "lucide-react";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/lib/animations";
import type { CulturalElement } from "@shared/schema";

export function AboutSection() {
  const { data: culturalElements, isLoading } = useQuery<CulturalElement[]>({
    queryKey: ["/api/cultural"],
  });

  if (isLoading) {
    return (
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-temple-gold/20 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-700 rounded w-96 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-bold mb-6 gradient-text"
            variants={fadeInUp}
          >
            Footwork2Framework
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl temple-gold mb-4 font-serif"
            variants={fadeInUp}
          >
            Capturing Fine-Grained 3D Motion Representations in Expressive Dance
          </motion.p>

          {/* <motion.p
            className="text-lg md:text-xl text-cream mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Advancing Cultural Traditions through AI-Driven Choreographic
            Collaboration
          </motion.p> */}


          <motion.div
            className="flex justify-center items-center space-x-8 md:space-x-16 mb-8"
            variants={fadeInUp}
          >
            <motion.p className="text-lg  font-serif font-bold mb-6 gradient-text"
              variants={fadeInUp}>
              Ankitha Sudarshan*, Lipisha Nitin Chaudhary* Tanvi Ranga, Ifeoma Nwogu, Rohini Srihari
              <br />

              University at Buffalo, State University of New York
            </motion.p>
          </motion.div>

        </motion.div>

        {/* Main Content Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-6" variants={slideInLeft}>
            <>
              <p className="text-lg text-cream leading-relaxed font-serif">
                Traditional South Asian dance forms encode complex motions, rhythms, and expressions through coordinated movements of the body and hands. Yet they remain largely absent from computational archives due to scarce motion-capture resources and the difficulty of capturing fine-grained, synchronized motion at scale.
              </p>

              <p className="text-lg text-cream leading-relaxed font-serif">
                We introduce Footwork2Framework (F2F)—the first large-scale 3D motion dataset for South Asian classical dance, focusing on Bharatanatyam. It comprises over 47,000 seconds of temporally aligned full-body and detailed hand mesh sequences reconstructed from high-resolution videos using state-of-the-art mesh recovery.
              </p>

              <p className="text-lg text-cream leading-relaxed font-serif">
                Surpassing prior resources in scale, anatomical detail, and cultural specificity, F2F documents Bharatanatyam at unprecedented granularity and releases processed 3D features to catalyze research in motion analysis, generation, and cultural preservation. As an initial exploration, we train a simple VAE-based transformer, showing that these fine-grained 3D features support learning of intricate spatiotemporal structure; we envision F2F as a foundation for Creative AI systems that learn from, generate, and help safeguard embodied knowledge of intangible cultural heritage.
              </p>
            </>


            {/* <div className="flex gap-4 mt-8">
              <Button
                size="lg"
                className="bg-temple-gold text-temple-brown hover:bg-temple-gold/80"
              >
                Begin Your Journey
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-temple-gold text-temple-gold hover:bg-temple-gold/10"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Learn More
              </Button>
            </div> */}
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={slideInRight}
          >
            <video
              className="rounded-lg shadow-lg w-full h-64 object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/chunk_000+(1).mp4" />


            <video
              src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/chunk_000+(1).mp4"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
              autoPlay
              loop
              muted
              playsInline
            />

            <video
              src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/cs_map_smplx.mp4"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
              autoPlay
              loop
              muted
              playsInline
            />

            <video
              src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/cs_map_smplx.mp4"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
}
