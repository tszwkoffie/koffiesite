"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const instagramPosts = [
  { image: "/images/jura-repair-bench.png", label: "Reparatie" },
  { image: "/images/brew-unit.png", label: "Zetgroep" },
  { image: "/images/jura-maintenance.png", label: "Onderhoud" },
  { image: "/images/tools-flatlay.png", label: "Vakwerk" },
  { image: "/images/machine-detail.png", label: "Detail" },
  { image: "/images/coffee-pour.png", label: "Resultaat" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

export function SocialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="werk" className="relative py-16 bg-[#121212] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-10"
        >
          <motion.span
            className="font-mono text-[#AFFF00] text-xs tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            ONS WERK
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mt-2 overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            >
              VAKWERK IN{" "}
            </motion.span>
            <motion.span
              className="text-[#AFFF00] inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
            >
              BEELD
            </motion.span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {instagramPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                zIndex: 10,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.label}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <motion.div
                className="absolute inset-0 bg-[#AFFF00]/0 group-hover:bg-[#AFFF00]/20 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex items-center gap-1 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  <span className="font-mono text-xs font-bold tracking-wide bg-[#121212]/70 px-3 py-1 rounded-full">
                    {post.label}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#contact"
            className="flex items-center gap-2 bg-[#AFFF00] text-[#121212] px-6 py-3 rounded-full font-bold text-sm tracking-wide relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Neem contact op</span>
            <motion.svg
              className="w-4 h-4 relative z-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
