import React,{useEffect} from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = ()=>{

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);
  

    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);
   
    useEffect(() => {
      const handleMouseMove = (e) => {
        // Update coordinates on every mouse move
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };
  
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);
    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
          {/* VERTICAL LINE */}
          <motion.div
            className="absolute top-0 bottom-0 w-[1px] bg-white/10"
            style={{ x: smoothX }}
          />
    
         {/* HORIZONTAL LINE */}
          <motion.div
            className="absolute left-0 right-0 h-[1px] bg-white/10"
            style={{ y: smoothY }}
          />
    
          {/* CENTRAL SVG SCOPE */}
          <motion.div
            style={{ x: smoothX, y: smoothY }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              {/* Central Crosshair */}
              <path d="M20 15V25M15 20H25" stroke="white" strokeWidth="1"/>
              Corner Brackets
              <path d="M8 2H2V8" stroke="white" strokeWidth="1.0"/>
              <path d="M32 2H38V8" stroke="white" strokeWidth="1.0"/>
              <path d="M8 38H2V32" stroke="white" strokeWidth="1.0"/>
              <path d="M32 38H38V32" stroke="white" strokeWidth="1.0"/>
            </svg>
          </motion.div>
        </div>
      );
}



export default CustomCursor;