import { motion } from "framer-motion";
import { ExternalLink, Heart } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export function Footer() {
  const footerLinks = [
    {
      title: "Cultural Heritage",
      links: [
        { name: "Bharatanatyam Origins", href: "https://en.wikipedia.org/wiki/Bharatanatyam" },
        { name: "Kalakshetra Foundation", href: "https://kalakshetra.in/" },
        { name: "UNESCO Dance Heritage", href: "https://ich.unesco.org/" },
        { name: "Tamil Classical Arts", href: "#" },
      ]
    },
    {
      title: "Learning Resources",
      links: [
        { name: "Interactive Poses", href: "#poses" },
        { name: "Historical Timeline", href: "#timeline" },
        { name: "Cultural Context", href: "#about" },
        { name: "Modern Adaptations", href: "#future" },
      ]
    },
    {
      title: "Technology",
      links: [
        { name: "AI Integration", href: "#" },
        { name: "Motion Capture", href: "#" },
        { name: "Virtual Reality", href: "#" },
        { name: "Digital Preservation", href: "#" },
      ]
    },
  ];

  const socialLinks = [
    { name: "Research Papers", href: "#" },
    { name: "Cultural Institute", href: "#" },
    { name: "Global Community", href: "#" },
  ];

  return (
    <footer className="bg-temple-brown border-t border-temple-gold/20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {/* Brand Section */}
          <motion.div className="space-y-4" variants={fadeInUp}>
            <h2 className="text-2xl font-serif font-bold gradient-text">
              Bharatanatyam
            </h2>
            <p className="temple-gold text-sm">Heritage Digital Platform</p>
            <p className="text-cream text-sm leading-relaxed">
              Preserving and evolving the sacred art of Bharatanatyam through innovative 
              technology and cultural storytelling.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-deep-red" />
              <span>for cultural preservation</span>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div key={index} className="space-y-4" variants={fadeInUp}>
              <h3 className="font-semibold temple-gold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-cream hover:temple-gold transition-colors duration-200 text-sm flex items-center gap-1"
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                      {link.href.startsWith('http') && (
                        <ExternalLink className="w-3 h-3" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-temple-gold hover:text-temple-gold/80 transition-colors duration-200 text-sm"
            >
              {link.name}
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-temple-gold/20 pt-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © 2024 Bharatanatyam Heritage Digital Platform. Cultural preservation through technological innovation.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-temple-gold transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-temple-gold transition-colors duration-200">
                Terms of Use
              </a>
              <a href="#" className="hover:text-temple-gold transition-colors duration-200">
                Cultural Guidelines
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
