import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "",
    category: "",
    description: "",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    image: "", // Replace with your actual screenshot
    link: "#"
  },
  // {
  //   title: "LUMINA SaaS",
  //   category: "Full Stack / Fintech",
  //   description: "Advanced time-tracking and automated invoicing platform for creative agencies.",
  //   tags: ["React", "Node.js", "Stripe", "MongoDB"],
  //   image: "/project-lumina.jpg", // Replace with your actual screenshot
  //   link: "#"
  // },
  // {
  //   title: "IPOVAULT",
  //   category: "Web App / Finance",
  //   description: "Interactive platform for pooled investment features and equity tracking.",
  //   tags: ["Next.js", "Firebase", "Tailwind"],
  //   image: "/project-ipovault.jpg",
  //   link: "#"
  // },
  // {
  //   title: "1CLICKUPLOAD",
  //   category: "Utility / Cloud",
  //   description: "High-speed asset management tool for video editors and creators.",
  //   tags: ["AWS", "Express", "React"],
  //   image: "/project-upload.jpg",
  //   link: "#"
  // }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-accent text-[10px] tracking-[0.5em] uppercase mb-4">
              Project Archive // 2024-2026
            </h2>
            <h3 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Selected <span className="text-transparent" style={{ WebkitTextStroke: "1px #ffffff60" }}>Works</span>
            </h3>
          </div>
          <p className="text-secondary text-xs uppercase tracking-widest opacity-50">
            [ Total Entries: 01 ]
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group relative overflow-hidden bg-[#111] border border-white/5 p-4 ${
                index % 3 === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Image Container */}
              <div className="relative h-[300px] md:h-[450px] overflow-hidden bg-black">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                />
                {/* Scanline Overlay Effect */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-10 bg-[length:100%_2px,3px_100%]" />
              </div>

              {/* Project Info */}
              <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h4 className="text-white text-2xl font-bold tracking-tight uppercase">
                    {project.title}
                  </h4>
                  <p className="text-secondary text-xs mt-1 uppercase tracking-widest opacity-60">
                    {project.category}
                  </p>
                </div>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] border border-white/20 px-2 py-1 text-white/40 rounded-full uppercase font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Button */}
              <div className="mt-6">
                <a href={project.link} className="inline-block text-[10px] text-white font-bold tracking-[0.3em] uppercase border-b border-white/20 pb-1 hover:border-white transition-all">
                  Access Details →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;