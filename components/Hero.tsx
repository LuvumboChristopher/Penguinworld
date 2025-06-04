"use client";
import { CircleArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export function HeroSection() {

  useEffect(() => {
  if (window.location.hash === "#solutions") {
    history.replaceState(null, "", window.location.pathname);
  }
}, []);

  return (
    <section className="relative [height:calc(100vh-280px)] sm:h-screen 2xl:h-[71vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-55" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 container mx-auto h-full flex flex-col md:flex-row items-center justify-center gap-12 px-4"
      >
        <div className="space-y-6 max-w-2xl text-center text-white">
          <div>
            <span className="text-[clamp(0.5rem,3vw,1.5rem)] font-bold tracking-tighter text-white">
              Bienvenue chez
            </span>
            <h2
              style={{ letterSpacing: "-0.1em" }}
              className="sm:outlined-text text-[clamp(2.5rem,10vw,5rem)] -mt-5 sm:-mt-7 xl:-mt-8"
            >
              PenguinWorld
            </h2>
          </div>

          <div>
            <small className="-mt-6 text-[14px] block text-center">
              Connecter les professionnels et les voyageurs avec confort et confiance.
            </small>
            <p className="pt-8 text-muted-foreground text-sm md:text-base">
              Nous sommes spécialisés dans les services de mise à disposition sur mesure,
              assurant des expériences fluides et efficaces à travers les frontières et les métiers.
            </p>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="#solutions"
              className="group border hover:border-white bg-white hover:bg-transparent hover:text-white text-black text-[12px] sm:text-sm px-5 py-2 rounded-xl font-medium flex gap-4 justify-center items-center transition-all duration-300"
            >
              Voir nos solutions
              <div className="border-l group-hover:border-white border-black py-2">
                <div className="ml-3 w-5 h-5 flex items-center justify-center">
                  <CircleArrowRight className="transition-transform duration-500 transform group-hover:rotate-180" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
