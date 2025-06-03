"use client";
import { CircleArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  // Contenedor con stagger para que los hijos aparezcan escalonados
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.35,
        delayChildren: 0.2,
      },
    },
  };

  // Animación para textos, más suave y lenta
  const textVariantFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } },
  };

  // Botón con fade-in y efecto hover suave
  const buttonVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <section className="relative h-screen 2xl:h-[71vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-65" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 container mx-auto h-full flex flex-col md:flex-row items-center md:items-center justify-center gap-12 px-4"
      >
        <motion.div
          variants={textVariantFadeIn}
          className="space-y-6 max-w-xl text-center text-white"
        >
          {/* Título con varios elementos animados */}
          <motion.div variants={textVariantFadeIn} className="flex flex-col items-center leading-none">
            <motion.div
              variants={textVariantFadeIn}
              className="text-[clamp(1.5rem,6vw,2rem)] font-bold tracking-tighter text-white text-center"
            >
              Bienvenue chez
            </motion.div>
            <motion.div variants={textVariantFadeIn} className="-mt-2 lg:-mt-3">
              <motion.h2
                style={{ letterSpacing: "-0.1em" }}
                className="font-extrabold outlined-text text-center text-[clamp(2.5rem,10vw,4.5rem)]"
              >
                PenguinWorld
              </motion.h2>
            </motion.div>
          </motion.div>

          {/* Texto pequeño y párrafo */}
          <motion.small variants={textVariantFadeIn} className="my-6 block">
            Connecter les professionnels et les voyageurs avec confort et confiance.
          </motion.small>

          <motion.p variants={textVariantFadeIn} className="text-muted-foreground text-sm md:text-base">
            Nous sommes spécialisés dans les services de mise à disposition sur mesure, assurant des expériences fluides
            et efficaces à travers les frontières et les métiers.
          </motion.p>

          {/* Botón animado con hover */}
          <motion.div variants={buttonVariant} whileHover="hover" className="flex justify-center gap-4 pt-4">
            <a
              href="#solutions"
              className="group border hover:border-white bg-white hover:bg-transparent hover:text-white text-black text-[12px] sm:text-sm px-5 py-2 rounded-xl font-medium flex gap-4 justify-center items-center transition-all duration-300"
            >
              Voir nos solutions
              <div className="border-l group-hover:border-white border-black py-2">
                <div className="ml-3 w-5 h-5 flex items-center justify-center">
                  <motion.div
                    initial={false}
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CircleArrowRight />
                  </motion.div>
                </div>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
