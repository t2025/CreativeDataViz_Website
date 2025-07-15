import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const timelineSteps = [
    { year: "1000", era: "Past", section: "#past" },
    { year: "1930", era: "Revival", section: "#present" },
    { year: "2024", era: "Future", section: "#future" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-temple-gold rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-warm-orange rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-deep-red rounded-full opacity-10 animate-pulse"></div>
      </div>

      {/* Floating Dance Poses */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.img
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
          alt="Bharatanatyam pose"
          className="absolute top-20 left-10 w-32 h-48 object-cover rounded-lg opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
          alt="Classical dance costume"
          className="absolute top-32 right-16 w-28 h-40 object-cover rounded-lg opacity-15"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-serif font-bold mb-6 gradient-text"
          variants={fadeInUp}
        >
          Bharatanatyam
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl temple-gold mb-4 font-light"
          variants={fadeInUp}
        >
          Heritage Digital Platform
        </motion.p>
        
        <motion.p
          className="text-lg md:text-xl text-cream mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          Evolving Cultural Heritage through Interactive Technology
        </motion.p>

        {/* Timeline Navigation */}
        <motion.div
          className="flex justify-center items-center space-x-8 md:space-x-16 mb-8"
          variants={fadeInUp}
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
                <div className="w-16 h-0.5 bg-temple-gold/30 mx-4"></div>
              )}
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="space-y-6">
          <p className="text-4xl md:text-6xl font-serif font-bold temple-gold">
            1000+
          </p>
          <p className="text-lg text-cream max-w-3xl mx-auto leading-relaxed">
            Years of classical Indian dance tradition preserved through innovative digital storytelling
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
