"use client"
import { motion } from "framer-motion";

export function FeatureList() {
  const features = [
    {
      title: "1. Innovation responsable",
      description:
        "Chez Pinguen World, l'innovation ne se fait jamais au détriment de l'humain. Chaque solution pensée est durable, éthique et utile, pour bâtir un avenir numérique plus sain.",
    },
    {
      title: "2. Engagement collectif",
      description:
        "Nos entreprises partagent un ADN commun : la collaboration d'abord. Ensemble, nous co-construisons des services qui répondent aux besoins réels de nos clients et de la société.",
    },
    {
      title: "3. Excellence et simplicité",
      description:
        "Nous visons l'excellence, sans complexité inutile. Notre priorité : livrer des produits performants, accessibles et élégants, portés par une exigence de qualité constante.",
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

  return (
    <section className="py-12 2xl:h-[29vh] border-t-4 lg:border-t-0 flex items-center bg-black text-white scroll-mt-[-4px] lg:scroll-mt-0">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid lg:grid-cols-3 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-left"
            >
              <h2 className="text-xl font-semibold mb-4">{feature.title}</h2>
              <p className="text-muted-foreground text-sm md:text-base text-justify leading-relaxed text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
