import { Button } from "@/components/ui/button"
import { CircleArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)]">
      <div className="mx-auto text-center space-y-6 ">
        <div className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
          {/* Video de fondo */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/contact.mp4" type="video/mp4" />
          </video>

          {/* Superposición */}
          <div className="absolute inset-0 bg-black bg-opacity-55 z-10" />

          {/* Contenido */}
          <div className="relative z-20 text-left text-white text-center space-y-4 max-w-3xl px-4">
            <h2 className="text-3xl font-extrabold">
              Convaincu par notre expertise ? Donnez vie à votre projet avec nous !
            </h2>
     
            <p className="text-md text-gray-300">
              N’attendez plus, faites le premier pas vers l’innovation et la croissance. Contactez-nous dès aujourd’hui pour une consultation personnalisée, sans engagement.
            </p>

            <div className="flex justify-center pt-6">
              <a
                href="/contact"
                className="group border hover:border-white bg-white hover:bg-transparent hover:text-white text-black text-sm px-6 py-3 rounded-xl font-semibold flex gap-4 items-center transition-all duration-300"
              >
                Nous contacter
                <div className="border-l group-hover:border-white border-black py-2">
                  <div className="ml-3 w-5 h-5 flex items-center justify-center">
                    <CircleArrowRight className="transition-transform duration-500 transform group-hover:rotate-180" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
