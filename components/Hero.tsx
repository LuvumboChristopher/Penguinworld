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
    <section className="relative [height:calc(100vh-256px)] sm:h-screen xl:h-[73vh] 2xl:h-[71vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 container mx-auto h-full flex flex-col md:flex-row items-center justify-center gap-12 px-4"
      >
        <div className="space-y-8 max-w-2xl text-center text-white">
          <div className="flex flex-col">
            <small className="text-[clamp(0.5rem,3vw,1.15rem)] font-bold tracking-tighter text-white -mb-3 md:-mb-7 z-30 drop-shadow-3xl">
              Bienvenue chez
            </small>

            <div className="w-full justify-center flex items-center gap-2 sm:gap-3">
              <h2
                style={{
                  letterSpacing: "-0.1em",
                  textShadow: "3px 3px 6px rgba(0,0,0,0.6)",
                }}
                className="text-[clamp(2.5rem,8vw,4.5rem)] text-white"
              >
                Pengu
              </h2>

              <img
                src="/android-chrome-512x512.png"
                alt="Séparateur"
                className="h-[clamp(0.6rem,8vw,3.8rem)] w-auto object-contain -mx-3 sm:-mx-5 z-20"
              />

              <h2
                style={{
                  letterSpacing: "-0.1em",
                  textShadow: "3px 3px 6px rgba(0,0,0,0.6)",
                }}
                className="text-[clamp(2.5rem,10vw,4.5rem)] -mx-1 sm:-mx-2 z-10 text-white"
              >
                n
              </h2>

              <h2
                style={{
                  letterSpacing: "-0.1em",
                  textShadow: "3px 3px 6px rgba(0,0,0,0.6)",
                }}
                className="text-[clamp(2.5rem,8vw,4.5rem)] text-white xl:outlined-text"
              >
                World
              </h2>
            </div>
          </div>

          <div>
            <small className="-mt-6 text-[14px] block text-center font-light">
              Connecter les professionnels et les voyageurs avec confort et confiance.
            </small>
            <p className="pt-8 text-muted-foreground text-sm md:text-base font-light">
              Nous sommes spécialisés dans les services de mise à disposition sur mesure,
              assurant des expériences fluides et efficaces à travers les frontières et les métiers.
            </p>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="#solutions"
              className="group border font-normal	 hover:border-white bg-white hover:bg-transparent hover:text-white text-black text-[12px] sm:text-sm px-5 py-2 rounded-xl font-medium flex gap-4 justify-center items-center transition-all duration-300"
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
