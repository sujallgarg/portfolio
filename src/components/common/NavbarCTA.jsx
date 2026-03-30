import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NavbarCTA({ pathname }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
    >
      <Link
        to={pathname === '/' ? '#contact' : '/contact'}
        className="hidden sm:inline-block text-[10px] px-5 py-2 border border-white/20 rounded-full text-white uppercase tracking-widest hover:bg-white hover:text-black transition-color duration-300 z-10 uppercase tracking-[0.2em] font-bold transition-colors duration-300 text-center"
      >
        Let&apos;s Talk
      </Link>
    </motion.div>
  )
}

