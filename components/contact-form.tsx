"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Send } from "lucide-react"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [model, setModel] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Reparatieaanvraag Jura${model ? ` - ${model}` : ""}`
    const body = [
      `Naam: ${name}`,
      `E-mail: ${email}`,
      `Type Jura machine: ${model || "-"}`,
      "",
      "Omschrijving van de klacht:",
      message,
    ].join("\n")
    window.location.href = `mailto:info@tszw.nl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const inputClasses =
    "w-full bg-white/5 border-2 border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/40 font-mono text-sm focus:outline-none focus:border-[#AFFF00] transition-colors duration-300"

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 mb-14"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-black text-white tracking-tight mb-1">Stuur een aanvraag</h3>
      <p className="text-white/50 font-mono text-xs mb-6">
        Beschrijf de klacht van uw Jura. Wij nemen zo snel mogelijk contact met u op.
      </p>

      <div className="grid sm:grid-cols-2 gap-3 mb-3">
        <div>
          <label htmlFor="name" className="sr-only">
            Naam
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Uw naam"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            E-mailadres
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Uw e-mailadres"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="model" className="sr-only">
          Type Jura machine
        </label>
        <input
          id="model"
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Type Jura machine (bijv. ENA 8, E8, Z10)"
          className={inputClasses}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="message" className="sr-only">
          Omschrijving van de klacht
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Omschrijf de storing of klacht..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <motion.button
        type="submit"
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#AFFF00] text-[#121212] px-6 py-3 rounded-full font-bold text-sm tracking-wide relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
          whileHover={{ x: "200%" }}
          transition={{ duration: 0.6 }}
        />
        <Send className="w-4 h-4 relative z-10" />
        <span className="relative z-10">Verstuur aanvraag</span>
      </motion.button>
    </motion.form>
  )
}
