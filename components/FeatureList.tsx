"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function FeatureList() {
  const features = [
    {
      title: "1. Innovation responsable",
      description:
        "Chez Penguin World, l'innovation ne se fait jamais au détriment de l'humain. Chaque solution pensée est durable, éthique et utile, pour bâtir un avenir numérique plus sain.",
    },
    {
      title: "2. Engagement collectif",
      description:
        "Nos entreprises partagent un ADN commun : La collaboration d'abord. Ensemble, nous co-construisons des services qui répondent aux besoins réels de nos clients.",
    },
    {
      title: "3. Excellence et simplicité",
      description:
        "Nous visons l'excellence, sans complexité inutile. Notre priorité : Livrer des produits performants, accessibles et élégants, portés par une exigence de qualité constante.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-8 lg:py-12 xl:h-[27vh]  2xl:h-[29vh] border-t-2 flex items-center bg-black text-white scroll-mt-[-4px] lg:scroll-mt-0"
      ref={ref}
    >
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-3 gap-10 lg:gap-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-left"
            >
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-6">{feature.title}</h2>
              <p className="text-muted-foreground text-sm text-justify-optimized font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
