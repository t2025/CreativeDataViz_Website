import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { fadeInUp, staggerContainer, poseCardHover } from "@/lib/animations";
import type { DancePose } from "@shared/schema";

export function PoseLibrary() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPose, setSelectedPose] = useState<DancePose | null>(null);

  const { data: poses, isLoading } = useQuery<DancePose[]>({
    queryKey: ["/api/poses"],
  });

  const categories = [
    { id: "all", label: "All Poses", count: poses?.length || 0 },
    { id: "fundamental", label: "Fundamental", count: poses?.filter(p => p.category === "fundamental").length || 0 },
    { id: "intermediate", label: "Intermediate", count: poses?.filter(p => p.category === "intermediate").length || 0 },
    { id: "advanced", label: "Advanced", count: poses?.filter(p => p.category === "advanced").length || 0 },
  ];

  const filteredPoses = poses?.filter(pose => 
    selectedCategory === "all" || pose.category === selectedCategory
  ) || [];

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty <= 2) return "bg-forest-green";
    if (difficulty <= 3) return "bg-warm-orange";
    return "bg-deep-red";
  };

  if (isLoading) {
    return (
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-8 bg-temple-gold/20 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold temple-gold mb-6"
            variants={fadeInUp}
          >
            Interactive Pose Library
          </motion.h2>
          <motion.p
            className="text-lg text-cream mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Explore the fundamental positions and movements of Bharatanatyam
          </motion.p>

          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            variants={fadeInUp}
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-temple-gold text-temple-brown hover:bg-temple-gold/80"
                    : "border-temple-gold/50 text-temple-gold hover:bg-temple-gold/10"
                }`}
              >
                {category.label}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </motion.div>
        </motion.div>

        {/* Poses Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {filteredPoses.map((pose, index) => (
            <motion.div
              key={pose.id}
              variants={fadeInUp}
              custom={index}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div
                    className="pose-card cursor-pointer"
                    variants={poseCardHover}
                    whileHover="whileHover"
                  >
                    <Card className="bg-gray-900 border-temple-gold/20 hover:border-temple-gold/40 transition-colors duration-300">
                      <div className="relative">
                        <img
                          src={pose.imageUrl}
                          alt={pose.name}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute top-2 right-2 flex gap-2">
                          <Badge variant="outline" className="temple-gold border-temple-gold/50 text-xs">
                            {pose.poseNumber}
                          </Badge>
                          <div className={`w-3 h-3 rounded-full ${getDifficultyColor(pose.difficulty)}`}></div>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-serif text-cream">
                          {pose.name}
                        </CardTitle>
                        <CardDescription className="text-gray-300 text-sm line-clamp-2">
                          {pose.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs capitalize">
                            {pose.category}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <span className="text-temple-gold text-xs">Difficulty:</span>
                            <span className="text-cream text-xs">{pose.difficulty}/5</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </DialogTrigger>
                
                <DialogContent className="max-w-2xl bg-gray-900 border-temple-gold/20">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-serif temple-gold">
                      {pose.name}
                    </DialogTitle>
                    <DialogDescription className="text-gray-300">
                      Pose {pose.poseNumber} • {pose.category} • Difficulty {pose.difficulty}/5
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <img
                        src={pose.imageUrl}
                        alt={pose.name}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-temple-gold mb-2">Description</h4>
                        <p className="text-gray-300 text-sm">{pose.description}</p>
                      </div>
                      
                      {pose.symbolism && (
                        <div>
                          <h4 className="font-semibold text-temple-gold mb-2">Symbolism</h4>
                          <p className="text-gray-300 text-sm">{pose.symbolism}</p>
                        </div>
                      )}
                      
                      <div>
                        <h4 className="font-semibold text-temple-gold mb-2">Body Parts</h4>
                        <div className="flex flex-wrap gap-2">
                          {pose.bodyParts.map((part, i) => (
                            <Badge key={i} variant="outline" className="text-xs capitalize">
                              {part}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {pose.mudraType && (
                        <div>
                          <h4 className="font-semibold text-temple-gold mb-2">Mudra Type</h4>
                          <Badge variant="secondary" className="capitalize">
                            {pose.mudraType}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="temple-gold font-semibold mb-4">
            Select any pose to explore its details and cultural significance
          </p>
          <Button
            size="lg"
            className="bg-temple-gold text-temple-brown hover:bg-temple-gold/80"
          >
            Explore Interactive 3D Poses
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
