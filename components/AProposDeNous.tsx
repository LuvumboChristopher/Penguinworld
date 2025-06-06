"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export function IntroSection() {
  return (
    <section className="relative">
      <div className="w-full  pt-8 lg:pt-0 lg:max-w-[90%] 2xl:max-w-[75%] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-[90%] mx-auto lg:w-[60%] space-y-4 md:space-y-8"
        >
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl xl:text-5xl font-bold"
              style={{ letterSpacing: "-0.1em" }}
            >
              À propos de{' '}
              <span className="md:outlined-text-black">
                nous
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-muted-foreground text-sm sm:text-base xl:text-md font-light italic"
            >
              Derrière chaque destination, une intention : rassembler, relier, inspirer.
            </motion.p>
          </div>
          <div className="space-y-6">
            <p className="font-light text-sm md:text-base text-justify-optimized">
              Le groupe PenguinWorld et sa large palette de services mise à disposition des professionnels et des voyageurs, se situe au cœur de cette réalité, nous en avons fait notre ADN, notre mission première, et celle de toutes nos équipes d&apos;experts disponibles et passionnés qui contribuent à diffuser ce souffle de concorde et paix à travers le monde.
            </p>
            <p className="font-light text-sm md:text-base text-justify-optimized">
              Un voyage réussi est celui où toute la chaine humaine a été au rendez-vous, et qui aura permis au voyageur de gagner les espaces de liberté et de découverte auxquels il aspire.
            </p>
            <p className="font-light text-sm md:text-base text-justify-optimized">
              Tous unis, portés par nos passions et nos rêves, nous souhaitons vous faire partager cette noble mission : rapprocher les peuples, et contribuer à diffuser la paix, partout sur les chemins, les routes, les mers, et les océans de notre merveilleuse Terre.
            </p>
            <p className="font-light text-sm md:text-base text-justify-optimized">
              N&apos;hésitez jamais à partir loin, au delà de toutes les mers, toutes les frontières, tous les pays, toutes les croyances.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden lg:block flex items-center gap-6 mr-auto"
          >
            <hr className="hidden lg:block border-t border-gray-300 my-8" />
            <blockquote className=" max-w-xl italic text-sm md:text-base  text-gray-700 leading-relaxed relative pl-6 before:absolute before:-left-2 before:top-0 before:text-6xl before:text-gray-300 before:content-['“'] before:-translate-y-2">
              Le plus beau voyage, c&apos;est celui qu&apos;on n&apos;a pas encore fait.<br />— Loïck Peyron
            </blockquote>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative border-b border-white w-full h-[205px]  lg:h-[825px] xl:h-[735px] lg:w-[45%] overflow-hidden lg:border-b-0 lg:border-l-2 lg:border-r-2 lg:border-black cursor-pointer duration-300"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute inset-0 lg:hidden flex items-center justify-center z-10"
          >
            <blockquote className="relative max-w-[85vw] italic text-sm md:text-base text-center text-white leading-relaxed 
    before:absolute before:-left-5 before:top-0 before:text-6xl before:text-white/50 before:content-['“'] before:-translate-y-2
    after:absolute after:right-0 after:bottom-3 s:after:bottom-0 after:text-6xl after:text-white/50 after:content-['”'] after:translate-y-2">
              Le plus beau voyage, c&apos;est celui qu&apos;on n&apos;a pas encore fait.<br />— Loïck Peyron
            </blockquote>
          </motion.div>

          <Image
            src="/images/nous-sommes.jpg"
            alt="À propos de PenguinWorld"
            fill
            className="object-cover object-[center_70%] sm:object-[center_80%] md:object-[center_73%]"
            priority
          />
          <div className="absolute inset-0 bg-black/80 lg:hidden z-0" />
        </motion.div>
      </div>
    </section>
  )
}
