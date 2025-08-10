import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export function Footer() {
  const footerSections = [
    {
      title: "Academic Resources",
      links: [
        {
          name: "Indian Classical Dance Studies – Sangeet Natak Akademi",
          href: "http://www.sangeetnatak.gov.in/",
        },
        {
          name: "ACM Digital Library",
          href: "https://dl.acm.org/",
        },
      ],
    },
    {
      title: "Institutions & Collaborators",
      links: [
        {
          name: "University at Buffalo – CSE Department",
          href: "https://engineering.buffalo.edu/computer-science-engineering.html",
        },
        {
          name: "Sampradaya Dance Creations",
          href:"https://www.sampradaya.ca/"
        }
      ],
    },
  //   {
  //     title: "Research Contributions",
  //     links: [
  //       {
  //         name: "Footwork2Frameworks Project Overview",
  //         href: "https://github.com/t2025/Footwork2Frameworks",
  //       },
  //       {
  //         name: "RealisDance: Diffusion-based Motion Stylization",
  //         href: "https://thefoxofsky.github.io/project_pages/RealisDance-DiT/index.html",
  //       },
  //       {
  //         name: "GVHMR: Generalizable Video-based Human Mesh Recovery",
  //         href: "https://zju3dv.github.io/gvhmr/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Digital Tools",
  //     links: [
  //       { name: "SMPL-X Model", href: "https://smpl-x.is.tue.mpg.de/" },
  //       {
  //         name: "RealisDance",
  //         href: "https://thefoxofsky.github.io/project_pages/RealisDance-DiT/index.html",
  //       },
  //       { name: "GVHMR", href: "https://zju3dv.github.io/gvhmr/" },
  //       {
  //         name: "MediaPipe",
  //         href: "https://developers.google.com/mediapipe",
  //       },
  //     ],
  //   },
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
              <h3 className="font-semibold text-temple-gold font-serif">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-temple-gold text-sm flex items-center gap-1 transition-colors"
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
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
            <p>© 2025 Footwork2Frameworks.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="https://engineering.buffalo.edu/"
                className="hover:text-temple-gold transition-colors duration-200"
              >
                Institutional Access
              </a>
              <a
                href="https://www.nsf.gov/od/odi/ethics.jsp"
                className="hover:text-temple-gold transition-colors duration-200"
              >
                Research Ethics
              </a>
              <a
                href="https://apastyle.apa.org/style-grammar-guidelines/citations"
                className="hover:text-temple-gold transition-colors duration-200"
              >
                Citation Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
