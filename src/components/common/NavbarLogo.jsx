import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NavbarLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300" />
        <span className="text-white font-bold tracking-[0.2em] uppercase text-sm">
          Sujal <span className="opacity-50 font-light">Garg</span>
        </span>
      </Link>
    </motion.div>
  )
}

