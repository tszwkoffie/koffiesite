"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Wrench, Search, Sparkles, ShieldCheck } from "lucide-react"

const activations = [
  {
    icon: Search,
    title: "Diagnose & storingsanalyse",
    description: "Maakt uw Jura vreemde geluiden, lekt hij of geeft hij een foutmelding? Wij sporen de oorzaak nauwkeurig op.",
    cta: "Neem contact op",
  },
  {
    icon: Wrench,
    title: "Reparatie van Jura machines",
    description: "Van defecte zetgroep en pomp tot maalwerk en elektronica. Met originele onderdelen weer als nieuw.",
    cta: "Neem contact op",
  },
  {
    icon: Sparkles,
    title: "Onderhoud & ontkalken",
    description: "Periodiek onderhoud, reiniging en ontkalken zodat uw Jura jarenlang perfecte koffie blijft zetten.",
    cta: "Neem contact op",
  },
  {
    icon: ShieldCheck,
    title: "Revisie zetgroep",
    description: "Volledige revisie en vervanging van de zetgroep voor een soepele werking en de beste koffiekwaliteit.",
    cta: "Neem contact op",
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
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
}

export function ActivationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="diensten" className="relative py-16 bg-white overflow-hidden">
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
            ONZE DIENSTEN
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-[#121212] tracking-tighter mt-2 overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            >
              ALLES VOOR UW{" "}
            </motion.span>
            <motion.span
              className="text-[#84cc16] inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
            >
              JURA
            </motion.span>
          </h2>
          <motion.p
            className="text-sm text-[#121212]/60 font-mono mt-2 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Wij richten ons volledig op Jura. Diagnose, reparatie en onderhoud &mdash; zowel voor particulier als zakelijk.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {activations.map((activation, index) => (
            <motion.a
              key={activation.title}
              href="#contact"
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
              className="group bg-[#121212] rounded-2xl p-6 cursor-pointer relative overflow-hidden block"
            >
              <motion.div
                className="absolute inset-0 bg-[#AFFF00]/0 group-hover:bg-[#AFFF00]"
                transition={{ duration: 0.4 }}
              />

              <div className="relative z-10">
                <motion.div
                  className="w-11 h-11 rounded-xl bg-[#AFFF00] flex items-center justify-center mb-4 group-hover:bg-[#121212] transition-colors duration-300"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <activation.icon className="w-5 h-5 text-[#121212] group-hover:text-[#AFFF00] transition-colors duration-300" />
                </motion.div>

                <h3 className="text-lg font-black text-white group-hover:text-[#121212] tracking-tight mb-2 transition-colors duration-300">
                  {activation.title}
                </h3>
                <p className="text-white/60 group-hover:text-[#121212]/60 font-mono text-xs leading-relaxed mb-4 transition-colors duration-300">
                  {activation.description}
                </p>

                <motion.span
                  className="flex items-center gap-2 text-[#AFFF00] group-hover:text-[#121212] font-bold text-xs tracking-wide transition-colors duration-300"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {activation.cta}
                  <motion.svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
