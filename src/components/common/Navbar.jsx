import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  // Track scroll to change appearance
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", to: "/projects", hash: "#projects" },
    { name: "Services", to: "/services", hash: "#services" },
    { name: "About", to: "/about", hash: "#about" },
    { name: "Contact", to: "/contact", hash: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-6 px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center justify-between px-8 py-3 rounded-full transition-all duration-500 border ${
          isScrolled 
            ? "w-full max-w-4xl bg-black/40 backdrop-blur-xl border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]" 
            : "w-full max-w-5xl bg-transparent border-transparent"
        }`}
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300" />
          <span className="text-white font-bold tracking-[0.2em] uppercase text-sm">
            Sujal <span className="opacity-50 font-light">Garg</span>
          </span>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={pathname === '/' ? link.hash : link.to}
              className="relative text-[10px] cursor-none text-white/50 uppercase tracking-[0.3em] font-medium hover:text-white transition-colors duration-300 group"
            >
              {link.name}
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA BUTTON */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          // className="mt-12 flex flex-wrap justify-center gap-6"
        >
        <Link
          to={pathname === '/' ? '#contact' : '/contact'}
          className="hidden sm:inline-block text-[10px] px-5 py-2 border border-white/20 rounded-full text-white uppercase tracking-widest hover:bg-white hover:text-black transition-color duration-300 z-10 uppercase tracking-[0.2em] font-bold transition-colors duration-300 text-center"
        >
          Let&apos;s Talk
        </Link>

        </motion.div>

    
        <div className="md:hidden flex flex-col gap-1.5 items-end">

          
          <div className="w-5 h-[1px] bg-white" />
          <div className="w-3 h-[1px] bg-white" />
        </div>
      </motion.nav>
    </header>
  );
};


const Hamburger = ()=>{
  return(
    <div className="">

    </div>
  )
}

export default Navbar;