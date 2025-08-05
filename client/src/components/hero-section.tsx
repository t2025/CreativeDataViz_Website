import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { CulturalElement } from "@shared/schema";
import { useQuery } from "@tanstack/react-query";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const timelineSteps = [
    { year: "500 BCE", era: "Past", section: "#past" },
    { year: "1940", era: "Revival", section: "#present" },
    { year: "2025", era: "Future", section: "#future" },
  ];

  // const { data: culturalElements, isLoading } = useQuery<CulturalElement[]>({
  //   queryKey: ["/api/cultural"],
  // });

  return (
    <section className="relative min-h-screen flex flex-col justify-start overflow-hidden bg-white pt-16">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-temple-gold rounded-full opacity-10 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-warm-orange rounded-full opacity-15 animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-deep-red rounded-full opacity-10 animate-pulse" />
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Optional Titles */}
        {/* <motion.h1
          className="text-5xl md:text-7xl font-serif font-bold mb-6 gradient-text"
          variants={fadeInUp}
        >
          Footwork2Framework
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl temple-gold mb-4 font-light"
          variants={fadeInUp}
        >
          A unified dataset for Indian Classical Dance form
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-cream mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          Advancing Cultural Traditions through AI-Driven Choreographic Collaboration
        </motion.p> */}

        {/* Timeline Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-serif font-bold temple-gold mb-10"
          variants={fadeInUp}
        >
          Journey Through Time
        </motion.h2>

        {/* Timeline Navigation - vertical stacking */}
        <motion.div
          className="flex flex-col items-center space-y-6 mb-12"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
  className="flex justify-center items-center space-x-6 flex-wrap mb-12"
  variants={{
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
>
  {timelineSteps.map((step, index) => (
    <div key={step.year} className="flex items-center">
      <button
        onClick={() => scrollToSection(step.section)}
        className="timeline-dot flex flex-col items-center group"
      >
        <div className="w-16 h-16 rounded-full bg-temple-gold/20 flex items-center justify-center mb-2 group-hover:bg-temple-gold/40 transition-colors duration-300 border-2 border-temple-gold/30">
          <span className="temple-gold font-bold text-sm">{step.year}</span>
        </div>
        <span className="text-sm text-gray-400 group-hover:temple-gold transition-colors duration-300">
          {step.era}
        </span>
      </button>

      {index < timelineSteps.length - 1 && (
        <div className="w-16 h-0.5 bg-temple-gold/30 mx-4" />
      )}
    </div>
  ))}
</motion.div>

        </motion.div>

        {/* Summary Section */}
        <motion.div variants={fadeInUp} className="space-y-6 mb-16">
          <motion.p
            className="text-lg text-cream max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Discover the evolution of Bharatanatyam from ancient temple traditions to modern digital innovation
          </motion.p>

          <p className="text-4xl md:text-6xl font-serif font-bold temple-gold">5000+</p>

          <p className="text-lg text-cream max-w-3xl mx-auto leading-relaxed">
            Years of classical Indian dance tradition preserved through innovative digital storytelling
          </p>
        </motion.div>

        {/* Cultural Elements (Optional, for future use) */}
        {/* {culturalElements && culturalElements.length > 0 && (
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h3
              className="text-2xl md:text-3xl font-serif font-bold temple-gold mb-8 text-center"
              variants={fadeInUp}
            >
              Geometry & Choreography
            </motion.h3>

            <motion.div
              className="grid md:grid-cols-3 gap-6"
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {culturalElements.map((element) => (
                <motion.div key={element.id} variants={fadeInUp}>
                  <Card className="bg-gray-900 border-temple-gold/20 h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          variant="outline"
                          className="temple-gold border-temple-gold/50 capitalize"
                        >
                          {element.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-serif text-cream">{element.name}</CardTitle>
                      <CardDescription className="text-gray-300">{element.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm text-temple-gold font-semibold mb-1">Significance:</p>
                        <p className="text-gray-300 text-sm">{element.significance}</p>
                      </div>
                    </CardContent>
                    {element.imageUrl && (
                      <div className="w-full h-60 flex items-center justify-center overflow-hidden bg-black/10">
                        <img
                          src={element.imageUrl}
                          alt={element.name}
                          className="object-contain h-full"
                        />
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )} */}
      </motion.div>
    </section>
  );
}
