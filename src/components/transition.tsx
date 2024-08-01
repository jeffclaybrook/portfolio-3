"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

const Transition = ({ children }: { children: ReactNode }) => {
 return (
  <motion.div
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 1 }}
   viewport={{ once: true, amount: 0.4 }}
  >
   {children}
  </motion.div>
 )
}

export default Transition