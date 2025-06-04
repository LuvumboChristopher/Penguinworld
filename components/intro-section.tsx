"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export function IntroSection() {
  return (
    <section className="relative pt-10 lg:py-14">
      <div className="w-full lg:max-w-[90%] 2xl:max-w-[75%] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-[90%] mx-auto lg:w-[60%] space-y-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl xl:text-5xl font-bold"
            style={{ letterSpacing: "-0.1em" }}
          >
            À propos de{' '}
            <span className="outlined-text-black">
              nous
            </span>
          </motion.h2>

          <div className="space-y-6">
            <p className="text-justify-optimized">
              Le groupe PenguinWorld et sa large palette de services mise à disposition des professionnels et des voyageurs, se situe au cœur de cette réalité, nous en avons fait notre ADN, notre mission première, et celle de toutes nos équipes d&apos;experts disponibles et passionnés qui contribuent à diffuser ce souffle de concorde et paix à travers le monde.
            </p>
            <p className="text-justify-optimized">
              Un voyage réussi est celui où toute la chaine humaine a été au rendez-vous, et qui aura permis au voyageur de gagner les espaces de liberté et de découverte auxquels il aspire.
            </p>
            <p className="text-justify-optimized">
              Tous unis, portés par nos passions et nos rêves, nous souhaitons vous faire partager cette noble mission : rapprocher les peuples, et contribuer à diffuser la paix, partout sur les chemins, les routes, les mers, et les océans de notre merveilleuse Terre.
            </p>
            <p className="text-justify-optimized">
              N&apos;hésitez jamais à partir loin, au delà de toutes les mers, toutes les frontières, tous les pays, toutes les croyances.
            </p>
          </div>

          <hr className="border-t border-gray-300 my-8" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center gap-6 max-w-xl mr-auto"
          >
            <blockquote className="italic text-base lg:text-lg text-gray-700 leading-relaxed relative pl-6 before:absolute before:left-0 before:top-0 before:text-6xl before:text-gray-300 before:content-['“'] before:-translate-y-2">
              Le plus beau voyage, c&apos;est celui qu&apos;on n&apos;a pas encore fait.<br />— Loïck Peyron
            </blockquote>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative w-full h-[230px] md:h-[370px] lg:h-[655px] lg:w-[40%] overflow-hidden lg:rounded-3xl lg:border-2 border-black cursor-pointer lg:hover:scale-[101%] duration-300"
        >
          <Image
            src="/images/nous-sommes.jpg"
            alt="À propos de PenguinWorld"
            fill
            className="object-cover object-[center_85%] md:object-[center_72%]"
            priority
          />
          <div className="absolute inset-0 bg-black/40 lg:hidden z-10" />
        </motion.div>
      </div>
    </section>
  )
}
