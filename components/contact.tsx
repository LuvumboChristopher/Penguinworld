"use client"

import { Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ContactSection() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section className="relative h-[700px] overflow-hidden">
      <div className="container absolute inset-0 flex">
        {/* Partie gauche : vidéo avec infos */}
        <div className="w-[60%] relative z-0 clip-diagonal-video text-white flex flex-col justify-between p-8">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/contact.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
          
          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl font-bold">Restons en contact</h2>
            <p className="text-sm text-gray-200">
              Vous avez un projet ou une question ? N'hésitez pas à nous écrire.
            </p>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-300" />
              <span>18 rue Barrème, 69006 Lyon, France</span>
            </div>
          </div>

          <div className="relative z-10 flex gap-4 mt-auto">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 text-white hover:text-gray-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-white hover:text-gray-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-white hover:text-gray-300" />
            </a>
          </div>
        </div>

        {/* Partie droite : formulaire */}
        <div className="w-[40%] bg-white flex items-center justify-center px-8 z-10">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg space-y-5"
          >
            <div className="flex gap-4">
              <div className="w-1/2">
                <label htmlFor="lastname" className="block font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  id="lastname"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="firstname" className="block font-medium text-gray-700">Prénom</label>
                <input
                  type="text"
                  id="firstname"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-medium text-gray-700">Téléphone</label>
              <input
                type="tel"
                id="phone"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-medium text-gray-700">Sujet</label>
              <input
                type="text"
                id="subject"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                required
              />
            </div>

            <Button type="submit" className="w-full">Envoyer</Button>

            {sent && (
              <p className="text-green-600 font-medium text-sm mt-2">Message envoyé avec succès !</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
