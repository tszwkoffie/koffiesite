"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const products = [
  {
    image: "/images/acc-descaler.png",
    name: "Ontkalkingsmiddel",
    description: "Vloeibaar ontkalker in fles voor periodiek ontkalken van uw Jura.",
  },
  {
    image: "/images/acc-cleaning.png",
    name: "Reinigingstabletten",
    description: "Houden het zetsysteem schoon en hygiënisch.",
  },
  {
    image: "/images/acc-milk.png",
    name: "Melksysteemreiniger",
    description: "Voor een fris en schoon melkschuimsysteem.",
  },
  {
    image: "/images/acc-filter.png",
    name: "Waterfilters",
    description: "Beschermen uw machine tegen kalkaanslag.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

export function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="accessoires" className="relative py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-10"
        >
          <motion.span
            className="font-mono text-[#121212]/60 text-xs tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            OOK VERKRIJGBAAR
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-[#121212] tracking-tighter mt-2 overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            >
              ONDERHOUDSMIDDELEN{" "}
            </motion.span>
            <motion.span
              className="text-[#84cc16] inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
            >
              &amp; ACCESSOIRES
            </motion.span>
          </h2>
          <motion.p
            className="text-sm text-[#121212]/60 font-mono mt-2 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            U kunt bij ons ook terecht voor originele onderhoudsmiddelen en accessoires om uw Jura zelf in topconditie te
            houden. Vraag gerust naar de mogelijkheden.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
              className="group bg-[#f4f4f4] rounded-2xl p-5 cursor-default border-2 border-transparent hover:border-[#AFFF00] transition-colors"
            >
              <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-white">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-base font-black text-[#121212] tracking-tight mb-1">{product.name}</h3>
              <p className="text-[#121212]/60 font-mono text-xs leading-relaxed">{product.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="#contact"
            className="flex items-center gap-2 bg-[#121212] text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-[#AFFF00]/20 -translate-x-full"
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
