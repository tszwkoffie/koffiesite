"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export function Footer() {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px" })

  return (
    <footer ref={footerRef} id="contact" className="relative bg-[#121212] pt-16 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-12"
        >
          <span className="font-mono text-[#AFFF00] text-xs tracking-widest">CONTACT</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] overflow-hidden mt-3">
            <motion.span
              className="block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              JURA KAPOT?
            </motion.span>
            <motion.span
              className="block text-[#AFFF00]"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            >
              NEEM CONTACT OP
            </motion.span>
          </h2>
          <motion.p
            className="text-white/60 font-mono text-sm max-w-xl mx-auto leading-relaxed mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Bel of mail ons gerust. Wij helpen u graag snel verder met de reparatie van uw Jura koffie- of
            espressomachine in heel Zeeland.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#AFFF00] flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#121212]" />
            </div>
            <span className="font-mono text-white/50 text-xs tracking-wide">Telefoonnummer</span>
            <span className="font-bold text-white text-base select-all">
              06-23212870
            </span>
          </div>

          <motion.a
            href="mailto:info@tszw.nl"
            className="group bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:border-[#AFFF00] transition-colors"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="w-11 h-11 rounded-xl bg-[#AFFF00] flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#121212]" />
            </div>
            <span className="font-mono text-white/50 text-xs tracking-wide">Mail ons</span>
            <span className="font-bold text-white text-base group-hover:text-[#AFFF00] transition-colors">
              info@tszw.nl
            </span>
          </motion.a>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#AFFF00] flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#121212]" />
            </div>
            <span className="font-mono text-white/50 text-xs tracking-wide">Werkgebied</span>
            <span className="font-bold text-white text-base">Goes &amp; heel Zeeland</span>
          </div>
        </motion.div>

        <ContactForm />

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2.5">
            <div className="bg-white/90 rounded-lg p-1">
              <Image
                src="/images/tszw-logo-header.png"
                alt="TSZW Espresso Service logo"
                width={28}
                height={32}
                className="h-7 w-auto"
              />
            </div>
            <span className="text-lg font-black text-white leading-none">
              TSZW
              <span className="block text-[9px] font-mono font-medium tracking-[0.25em] text-white/40">
                ESPRESSO SERVICE
              </span>
            </span>
          </div>

          <p className="text-white/40 font-mono text-xs text-center">
            &copy; {new Date().getFullYear()} TSZW Espresso Service &middot; Onafhankelijke Jura specialist uit Zeeland
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15rem] md:text-[28rem] font-black text-white/[0.02] pointer-events-none select-none leading-none"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        TSZW
      </motion.div>
    </footer>
  )
}
