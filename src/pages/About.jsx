import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: "01",
    title: "Full Stack Development",
    description: "Building scalable SaaS architectures. Specialized in React, Node.js, and complex database management.",
    features: ["Custom SaaS", "API Integration", "Database Design"]
  },
//   {
//     id: "02",
//     title: "Cinematic Video Editing",
//     description: "High-end visual storytelling for brands. Precision-cut editing with a focus on rhythm, color grading, and narrative impact.",
//     features: ["Color Grading", "Sound Design", "Motion Graphics"]
//   },
  {
    id: "02",
    title: "UI/UX Engineering",
    description: "Designing technical, immersive interfaces that prioritize user flow without sacrificing the high-tech aesthetic.",
    features: ["Interactive Prototyping", "Design Systems", "User Research"]
  },
  {
    id: "03",
    title: "Technical Consulting",
    description: "Helping startups bridge the gap between their vision and technical execution through clean code and modern stacks.",
    features: ["Stack Audits", "Performance Optimization", "SEO Strategy"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-accent text-[10px] tracking-[0.5em] uppercase mb-4">
            Capabilities // Offerings
          </h2>
          <h3 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter">
            System <span className="text-transparent" style={{ WebkitTextStroke: "1px #ffffff60" }}>Solutions</span>
          </h3>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col  gap-px bg-white/5 border border-white/5">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="bg-black p-10 group relative overflow-hidden transition-all duration-500 hover:bg-[#080808]"
            >
              {/* Service ID - Background Watermark */}
              <span className="absolute -right-4 -bottom-4 text-9xl font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-500">
                {service.id}
              </span>

              <div className="relative z-10">
                <span className="text-accent font-mono text-xs mb-6 block tracking-widest">
                  [{service.id}]
                </span>
                
                <h4 className="text-white text-2xl font-bold uppercase tracking-tight mb-4">
                  {service.title}
                </h4>
                
                <p className="text-secondary text-sm leading-relaxed mb-8 opacity-60 max-w-sm">
                  {service.description}
                </p>

                <ul className="flex flex-wrap gap-3">
                  {service.features.map((feature) => (
                    <li 
                      key={feature} 
                      className="text-[9px] uppercase tracking-widest text-white/40 border border-white/10 px-3 py-1 rounded-full group-hover:border-accent/40 group-hover:text-white transition-colors"
                    >
                      + {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Line Animation */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-accent transition-all duration-500 group-hover:h-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;