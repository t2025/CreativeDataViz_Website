import { useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { fadeInUp, staggerContainer, poseCardHover } from "@/lib/animations";
import type { DancePose } from "@shared/schema";

export function PoseLibrary() {
  const [selectedPose, setSelectedPose] = useState<DancePose | null>(null);

  const { data: poses, isLoading } = useQuery<DancePose[]>({
    queryKey: ["/api/poses"],
  });

  if (isLoading) {
    return (
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-8 bg-[#b38000]/20 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-[#b38000] mb-6"
            variants={fadeInUp}
          >
            Interactive Pose Library
          </motion.h2>
          <motion.p
            className="text-lg text-[#5f4330]/80 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Explore the fundamental positions and movements of Bharatanatyam
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {poses?.map((pose, index) => (
            <motion.div key={pose.id} variants={fadeInUp} custom={index}>
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div
                    className="pose-card cursor-pointer"
                    variants={poseCardHover}
                    whileHover="whileHover"
                  >
                    <Card className="bg-[#fdf6ec] border border-neutral-200 hover:border-[#b38000] transition-colors duration-300 text-[#3c2d1d] shadow-md min-h-[360px]">
                      {/* Two inline videos in card */}
                      <div className="flex gap-2 px-2 pt-2 justify-center">
                        {pose.videoUrls.slice(0, 2).map((url, i) => (
                          <span key={i} className="w-1/2">
                            <video
                              src={url}
                              className="w-full h-44 object-cover rounded-md"
                              muted
                              autoPlay
                              loop
                              playsInline
                            />
                          </span>
                        ))}
                      </div>

                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-serif font-bold text-[#b38000]">
                          {pose.name}
                        </CardTitle>
                        <CardDescription className="text-sm text-[#5f4330]/80 line-clamp-2">
                          {pose.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs capitalize">
                            {pose.mudraType || "General"}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </DialogTrigger>

                <DialogContent className="max-w-4xl bg-[#fdf6ec] border border-neutral-200 text-[#3c2d1d]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-serif font-bold text-[#b38000]">
                      {pose.name}
                    </DialogTitle>
                    <DialogDescription className="text-sm text-[#5f4330]/80">
                      {pose.description}
                    </DialogDescription>
                  </DialogHeader>

                  {/* Two inline videos in modal */}
                  <div className="flex gap-4 py-4 justify-center">
                    {pose.videoUrls.slice(0, 2).map((url, i) => (
                      <span key={i} className="w-1/2">
                        <video
                          src={url}
                          className="w-full h-64 object-cover rounded-md"
                          muted
                          autoPlay
                          loop
                          controls
                        />
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4 mt-4">
                    {pose.symbolism && (
                      <div>
                        <h4 className="font-semibold text-[#b38000] mb-2">Symbolism</h4>
                        <p className="text-sm text-[#3c2d1d]">{pose.symbolism}</p>
                      </div>
                    )}

                    {pose.mudraType && (
                      <div>
                        <h4 className="font-semibold text-[#b38000] mb-2">Mudra Type</h4>
                        <Badge variant="secondary" className="capitalize">
                          {pose.mudraType}
                        </Badge>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
