import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NavbarLinks({ navLinks, pathname }) {
  return (
    <motion.div
      className="hidden md:flex items-center gap-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
    >
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
    </motion.div>
  )
}

