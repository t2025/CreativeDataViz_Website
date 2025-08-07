import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export function Footer() {
  const footerSections = [
    {
      title: "Academic Resources",
      links: [
      ],
    },
    {
      title: "Institutions & Collaborators",
      links: [
        { name: "University Departments", href: "#" },
      ],
    },
    {
      title: "Research Contributions",
      links: [
       
      ],
    },
    {
      title: "Digital Tools",
      links: [
        { name: "SMPL-X Model", href: "https://smpl-x.is.tue.mpg.de/" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-temple-gold/20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Footer Grid Sections */}
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {footerSections.map((section, index) => (
            <motion.div key={index} className="space-y-4" variants={fadeInUp}>
              <h3 className="font-semibold text-temple-gold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-temple-gold text-sm flex items-center gap-1 transition-colors"
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.name}
                      {link.href.startsWith("http") && (
                        <ExternalLink className="w-3 h-3" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Legal + Institutional Info */}
        <motion.div
          className="border-t border-temple-gold/20 pt-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>
              © 2025 FootWorks2Frameworks.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-temple-gold transition-colors duration-200">
                Institutional Access
              </a>
              <a href="#" className="hover:text-temple-gold transition-colors duration-200">
                Research Ethics
              </a>
              <a href="#" className="hover:text-temple-gold transition-colors duration-200">
                Citation Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
