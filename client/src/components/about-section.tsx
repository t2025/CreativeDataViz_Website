import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, Users, Globe } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import type { CulturalElement } from "@shared/schema";

export function AboutSection() {
  const { data: culturalElements, isLoading } = useQuery<CulturalElement[]>({
    queryKey: ["/api/cultural"],
  });

  const stats = [
    { icon: <Heart className="w-8 h-8" />, value: "1000+", label: "Years of Tradition" },
    { icon: <Users className="w-8 h-8" />, value: "50M+", label: "Global Practitioners" },
    { icon: <Globe className="w-8 h-8" />, value: "100+", label: "Countries" },
  ];

  if (isLoading) {
    return (
      <div className="py-20 bg-black">
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
    <section id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold temple-gold mb-6"
            variants={fadeInUp}
          >
            Cultural Heritage Meets Technology
          </motion.h2>
          <motion.p
            className="text-lg text-cream max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Discover how ancient wisdom and modern innovation unite to preserve and evolve the sacred art of Bharatanatyam
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={fadeInUp}
            >
              <div className="temple-gold mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold temple-gold mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-6" variants={slideInLeft}>
            <p className="text-lg text-cream leading-relaxed">
              Bharatanatyam stands as one of the world's most ancient and sophisticated dance forms, 
              originating in the sacred temples of Tamil Nadu over a thousand years ago. This classical 
              art form represents the perfect union of spiritual devotion, technical precision, and 
              artistic expression.
            </p>
            <p className="text-lg text-cream leading-relaxed">
              Our digital heritage platform leverages cutting-edge technology to preserve, teach, 
              and evolve this timeless art form. Through interactive experiences, we bridge the gap 
              between ancient wisdom and modern learning, making Bharatanatyam accessible to practitioners 
              worldwide.
            </p>
            <p className="text-lg text-cream leading-relaxed">
              By combining traditional knowledge with artificial intelligence, motion capture, and 
              virtual reality, we create immersive experiences that honor the past while embracing 
              the future of cultural preservation.
            </p>
            
            <div className="flex gap-4 mt-8">
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
            </div>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={slideInRight}
          >
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500"
              alt="Classical dance performance"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500"
              alt="Traditional dance costume"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500"
              alt="Classical dance hand gestures"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500"
              alt="Indian cultural heritage performance"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Cultural Elements */}
        {culturalElements && culturalElements.length > 0 && (
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-serif font-bold temple-gold mb-8 text-center"
              variants={fadeInUp}
            >
              Essential Cultural Elements
            </motion.h3>
            
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              {culturalElements.map((element, index) => (
                <motion.div key={element.id} variants={fadeInUp}>
                  <Card className="bg-gray-900 border-temple-gold/20 h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="temple-gold border-temple-gold/50 capitalize">
                          {element.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-serif text-cream">
                        {element.name}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {element.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm text-temple-gold font-semibold mb-1">Origin:</p>
                        <p className="text-gray-300 text-sm">{element.origin}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-temple-gold font-semibold mb-1">Significance:</p>
                        <p className="text-gray-300 text-sm">{element.significance}</p>
                      </div>
                      
                      {element.modernAdaptation && (
                        <div>
                          <p className="text-sm text-temple-gold font-semibold mb-1">Modern Adaptation:</p>
                          <p className="text-gray-300 text-sm">{element.modernAdaptation}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
