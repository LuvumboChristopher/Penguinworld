"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const blocks = [
  {
    title: "Une vision à 360° du secteur",
    content:
      "En tant qu&apos;entrepreneur actif, je vous apporte une vision actuelle et à 360° du marché du tourisme. Mon objectif est de faire évoluer le secteur avec pragmatisme et modernité.",
  },
  {
    title: "L'engagement terrain",
    content:
      "Je suis engagé au quotidien auprès des professionnels du voyage. En tant que membre du Comité des adhésions de l&apos;APST et délégué régional, j&apos;accompagne les futurs acteurs du tourisme avec énergie et réalisme.",
  },
  {
    title: "Une passion pour l'entrepreneuriat",
    content:
      "Je suis un entrepreneur passionné. J&apos;aime aller au bout des dossiers, les traiter avec rigueur et humanité. Mon approche repose sur l&apos;écoute et l&apos;efficacité.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.4,
      when: "beforeChildren",
      duration: 0.5,
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
      duration: 0.3,
      ease: "easeInOut", 
    },
  },
};

export function ContentSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (hoveredIndex !== null) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % blocks.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [hoveredIndex]);

  return (
    <section className="relative py-16 lg:py-24">
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/promovols-placeholder.jpg')" }}
      />
      <div className="absolute inset-0 bg-black opacity-35" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative container mx-auto max-w-6xl p-12 rounded-3xl border-2 border-black bg-white bg-opacity-95"
      >
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Columna izquierda */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex flex-row items-center gap-6">
              <Image
                src="/images/torro-photo.jpg"
                alt="Raphaël Torro"
                className="w-14 h-14 hidden md:block lg:hidden lg:block rounded-full object-cover border-4 border-gray-300"
              />
              <h2
                className="w-full text-center md:text-left text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight -ml-2"
                style={{ wordSpacing: "-0.1em" }}
              >
                La vision moderne du voyage
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center md:items-start lg:items-center gap-6">
              <Image
                src="/images/torro-photo.jpg"
                alt="Raphaël Torro"
                className="w-24 h-24 md:hidden lg:block rounded-full object-cover border-4 border-gray-300"
              />
              <p className="text-muted-foreground text-center md:text-left text-sm lg:text-base xl:text-md">
                Je suis Raphaël Torro, Président de VLC Travel et fondateur de la plateforme Resaneo. Depuis plusieurs années,
                je m&apos;investis dans la transformation du secteur du tourisme. Comprendre finement le marché, innover et accompagner
                les professionnels du voyage : voilà ce qui guide chacune de mes actions.
              </p>
            </div>
            <div className="pt-8">
              <blockquote className="border-l-8 pl-4 italic text-sm text-muted-foreground">
                <strong className="text-black">Le Progrès</strong> : "Grâce à Resaneo, sa plateforme de réservations de vols pour
                les agences de voyages, Raphaël Torro est cette année en tête de notre palmarès des jeunes patrons du Rhône par
                chiffre d&apos;affaires."
              </blockquote>
            </div>
          </motion.div>

          {/* Columna derecha */}
          <motion.div variants={itemVariants} className="h-full flex flex-col justify-between gap-4 lg:gap-6">
            {blocks.map((block, index) => {
              const isActive =
                hoveredIndex === index || (hoveredIndex === null && index === activeIndex);

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={{
                    scale: isActive ? 1.01 : 1,
                    borderColor: isActive ? "#feb516" : "black",
                  }}
                  transition={{ duration: 0.3 }}
                  className="border-l-4 lg:border-l-8 pl-8 cursor-pointer py-2 transition-colors duration-300 ease-out"
                  style={{
                    borderColor: isActive ? "#feb516" : "black",
                  }}
                >
                  <h3 className="font-semibold text-md lg:text-xl mb-3">{block.title}</h3>
                  <p className="text-muted-foreground text-sm max-w-xl mr-auto">{block.content}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
