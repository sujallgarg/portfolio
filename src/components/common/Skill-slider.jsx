import React from 'react';
import { motion } from 'framer-motion';

// Replace these with your actual logo paths or CDN links
const skills = [
  { name: "React", icon: "https://cdn.simpleicons.org/react/ffffff" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/ffffff" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/ffffff" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/ffffff" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/ffffff" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/ffffff" },
  { name: "Rust", icon: "https://cdn.simpleicons.org/rust/ffffff" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/ffffff" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/ffffff" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/ffffff" },
];

const SkillSlider = () => {
  // We double the array to create a seamless infinite loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="py-20 bg-black overflow-hidden border-y border-white/5">
      <div className="mb-10 text-center">
        <span className="text-white/30 text-[20px] tracking-[0.4em] uppercase font-mono">
          // Tech Stack Deployment
        </span>
      </div>

      <div className="relative flex">
        {/* Transparent Fades for a "Lens" look */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          className="flex gap-20 items-center whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 group opacity-40 hover:opacity-100 transition-opacity duration-500"
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-8 h-8 object-contain grayscale brightness-200"
              />
              <span className="text-white text-xs font-mono tracking-widest uppercase">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSlider;