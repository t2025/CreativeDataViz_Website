import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const meshVideos = [
  { title: "Mesh View 01", src: "https://your-bucket/f2f_mesh_01.mp4" },
  { title: "Mesh View 02", src: "https://your-bucket/f2f_mesh_02.mp4" },
  { title: "Mesh View 03", src: "https://your-bucket/f2f_mesh_03.mp4" },
  { title: "Mesh View 04", src: "https://your-bucket/f2f_mesh_04.mp4" },
  { title: "Mesh View 05", src: "https://your-bucket/f2f_mesh_05.mp4" },
  { title: "Mesh View 06", src: "https://your-bucket/f2f_mesh_06.mp4" },
];

function MeshVideoTile({ title, src }: { title: string; src: string }) {
  return (
    <div className="text-center">
      <p className="text-base text-[#9c1c1c] mb-2 font-semibold font-serif">{title}</p>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[14rem] md:h-[18rem] object-cover rounded-lg shadow-md mx-auto bg-black"
      />
    </div>
  );
}

export function F2F3DSection() {
  return (
    <section className="py-20 bg-white" id="f2f-3d">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-4xl font-serif font-bold temple-gold mb-10 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          F2F 3D Mesh Visualizations
        </motion.h2>

        <motion.p
          className="text-center text-lg text-cream font-serif leading-relaxed max-w-4xl mx-auto mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          This section showcases 3D mesh renderings from the Footwork2Framework (F2F) dataset.
          Each clip visualizes pose dynamics, skeletal motion, and mesh deformation aligned with rhythmic footwork,
          enabling deeper analysis of temporal structure, articulation, and style.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8 items-start justify-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {meshVideos.map((video, index) => (
            <MeshVideoTile key={index} title={video.title} src={video.src} />
          ))}
        </motion.div>

        <motion.p
          className="text-center text-base text-cream font-serif leading-relaxed max-w-4xl mx-auto mt-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          The 3D mesh views provide a compact representation of motion quality—ideal for sequence alignment,
          pose tracking, and benchmarking mesh-based generation models on F2F.
        </motion.p>
      </div>
    </section>
  );
}
