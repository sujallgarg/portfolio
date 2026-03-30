import React from 'react'
import { motion } from 'framer-motion'


export default function NavbarMobileTrigger() {
  return (
   
    <motion.div
      className="md:hidden flex flex-col gap-1.5 items-end"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
    >
      <div className="w-5 h-[1px] bg-white" />
      <div className="w-3 h-[1px] bg-white" />
    </motion.div>
  )
}

