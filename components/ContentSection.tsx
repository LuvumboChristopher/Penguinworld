"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export function ContentSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % 3);
      }, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  function handleMouseEnter(index: number) {
    setIsHovered(true);
    setActiveIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <section className="relative py-10 lg:py-14">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/promovols-placeholder.jpg')" }}
      />
      <div className="absolute inset-0 bg-black opacity-35" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative container mx-auto max-w-6xl p-10 lg:p-12 rounded-3xl border-2 border-black bg-white bg-opacity-95"
      >
        <div className="grid md:grid-cols-2 gap-12 xl:gap-16 items-start">
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-8">
            <div className="flex flex-row items-center gap-6">
              <img
                src="/images/torro-photo.jpg"
                alt="Raphaël Torro"
                className="w-14 h-14 hidden md:block xl:hidden lg:block rounded-full object-cover border-4 border-gray-300"
              />
              <h2 className="w-full text-center md:text-left text-2xl md:text-lg  xl:text-3xl font-bold tracking-tight -ml-2">
                La vision moderne du voyage
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center md:items-start lg:items-center gap-6">
              <img
                src="/images/torro-photo.jpg"
                alt="Raphaël Torro"
                className="w-24 h-24 md:hidden xl:block rounded-full object-cover border-4 border-gray-300"
              />
              <p className="text-muted-foreground text-center sm:text-left text-sm lg:text-md xl:text-justify-optimized lg:text-base">
                Je suis Raphaël Torro, Président de VLC Travel et fondateur de la plateforme Resaneo. Depuis plusieurs années,
                je m&apos;investis dans la transformation du secteur du tourisme. Comprendre finement le marché, innover et accompagner
                les professionnels du voyage : voilà ce qui guide chacune de mes actions.
              </p>
            </div>
            <div className="pt-8">
              <blockquote className="border-l-8 pl-4 italic text-sm sm:text-[12px] md:text-[15px] text-muted-foreground">
                <strong className="text-black font-bold">Le Progrès</strong> : &quot;Grâce à Resaneo, sa plateforme de réservations de vols pour
                les agences de voyages, Raphaël Torro est cette année en tête de notre palmarès des jeunes patrons du Rhône par
                chiffre d&apos;affaires.&quot;
              </blockquote>
            </div>
          </motion.div>

          <div className="h-full flex flex-col justify-between gap-4 lg:gap-6">
            <motion.div
              variants={itemVariants}
              animate={{ scale: activeIndex === 0 ? 1.01 : 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.01 }}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
              className="border-b-4 sm:border-b-0 pb-6 sm:pb-0 sm:border-l-8 sm:pl-6 cursor-pointer py-2 transition-all duration-300 ease-in-out"
              style={{
                borderColor: activeIndex === 0 ? "#feb516" : "black",
              }}
            >
              <h3 className="font-semibold text-md xl:text-lg mb-3">Une vision à 360° du secteur</h3>
              <p
                className="text-muted-foreground text-sm sm:text-[13px] xl:text-sm max-w-xl mr-auto"
                dangerouslySetInnerHTML={{
                  __html:
                    "En tant qu&apos;entrepreneur actif, je vous apporte une vision actuelle et à 360° du marché du tourisme. Mon objectif est de faire évoluer le secteur avec pragmatisme et modernité.",
                }}
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              animate={{ scale: activeIndex === 1 ? 1.01 : 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.01 }}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              className="border-b-4 sm:border-b-0 pb-6 sm:pb-0 sm:border-l-8 sm:pl-6 cursor-pointer py-2 transition-all duration-300 ease-in-out"
              style={{
                borderColor: activeIndex === 1 ? "#feb516" : "black",
              }}
            >
              <h3 className="font-semibold text-md xl:text-lg mb-3">L&apos;engagement terrain</h3>
              <p
                className="text-muted-foreground text-sm sm:text-[13px] xl:text-sm max-w-xl mr-auto"
                dangerouslySetInnerHTML={{
                  __html:
                    "Je suis engagé au quotidien auprès des professionnels du voyage. En tant que membre du Comité des adhésions de l&apos;APST et délégué régional, j&apos;accompagne les futurs acteurs du tourisme avec énergie et réalisme.",
                }}
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              animate={{ scale: activeIndex === 2 ? 1.01 : 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.01 }}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              className="border-b-4 sm:border-b-0 pb-6 sm:pb-0 sm:border-l-8 sm:pl-6 cursor-pointer py-2 transition-all duration-300 ease-in-out"
              style={{
                borderColor: activeIndex === 2 ? "#feb516" : "black",
              }}
            >
              <h3 className="font-semibold text-md xl:text-lg mb-3">Une passion pour l&apos;entrepreneuriat</h3>
              <p
                className="text-muted-foreground text-sm sm:text-[13px] xl:text-sm max-w-xl mr-auto"
                dangerouslySetInnerHTML={{
                  __html:
                    "Je suis un entrepreneur passionné. J&apos;aime aller au bout des dossiers, les traiter avec rigueur et humanité. Mon approche repose sur l&apos;écoute et l&apos;efficacité.",
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
