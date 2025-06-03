"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { CircleArrowRight } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const solutions = [
  {
    title: "Resaneo",
    icon: null,
    image: "/images/resaneo-placeholder.jpg",
    description: `Resaneo est une plateforme de réservation de vols professionnels qui offre une expérience utilisateur fluide et rapide. Grâce à son moteur de recherche avancé, les agences peuvent comparer instantanément des centaines de compagnies aériennes, optimiser leurs offres et fournir un service client exceptionnel. La solution intègre des outils de gestion performants pour les pros du voyage.`,
    infoUrl: "#",
    siteUrl: "https://www.resaneo.com",
  },
  {
    title: "Quartier Libre",
    icon: null,
    image: "/images/quartier-libre-placeholder.jpg",
    description: `Quartier Libre propose des voyages culturels sur mesure, conçus pour répondre aux attentes des voyageurs exigeants. La plateforme facilite la découverte de circuits thématiques, d'expériences authentiques et d'itinéraires personnalisés, le tout dans une interface intuitive et agréable à naviguer, adaptée aussi bien sur mobile que sur desktop.`,
    infoUrl: "#",
    siteUrl: "https://www.quartier-libre.fr",
  },
  {
    title: "SpeedMedia",
    icon: null,
    image: "/images/speedmedia-placeholder.jpg",
    description: `SpeedMedia est une solution innovante qui combine technologie et marketing digital pour les agences de voyages. Elle propose un moteur de recherche rapide et dynamique, couplé à une interface de gestion simplifiée des offres et promotions, permettant d'attirer plus de clients et d'améliorer la visibilité sur le web.`,
    infoUrl: "#",
    siteUrl: "https://www.speedmedia.fr",
  },
  {
    title: "Bourse des Vols",
    icon: null,
    image: "/images/bdv-vols-placeholder.jpg",
    description: `La Bourse des Vols est un comparateur performant qui aide les utilisateurs à trouver rapidement les meilleures offres sur le marché. Son interface claire et ergonomique facilite la recherche, le tri et la réservation de billets d&apos;avion à prix compétitifs, tout en intégrant des options avancées comme les alertes de prix et les filtres personnalisés.`,
    infoUrl: "#",
    siteUrl: "https://www.bourse-des-vols.com",
  },
  {
    title: "Bourse de Voyages",
    icon: null,
    image: "/images/bdv-voyages-placeholder.jpg",
    description: `Cette plateforme est dédiée aux voyages organisés et séjours tout compris, offrant aux utilisateurs une expérience simple et efficace pour découvrir et réserver leurs prochaines vacances. Avec un catalogue complet et régulièrement mis à jour, elle est devenue une référence dans le secteur des voyages en ligne.`,
    infoUrl: "#",
    siteUrl: "https://www.bourse-des-voyages.com",
  },
  {
    title: "Promovols",
    icon: null,
    image: "/images/promovols-placeholder.jpg",
    description: `Promovols met l'accent sur la rapidité et la simplicité pour réserver des billets d'avion à bas prix. Grâce à son interface épurée et ses outils performants, la plateforme garantit une expérience utilisateur optimale, permettant de trouver et réserver facilement des vols adaptés à tous les budgets.`,
    infoUrl: "#",
    siteUrl: "https://www.promovols.com",
  },
]

export function Services() {
const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (el) {
      const scrollAmount = 400
      el.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" })
    }
  }

const detectActiveItem = () => {
  const container = scrollRef.current;
  if (!container || !itemRefs.current.length) return;

  const isSmallScreen = window.innerWidth < 640;

  if (isSmallScreen) {
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    itemRefs.current.forEach((item, index) => {
      if (item) {
        const itemCenter = item.offsetLeft + item.clientWidth / 2;
        const distance = Math.abs(containerCenter - itemCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  } else {
    const scrollLeft = container.scrollLeft;
    let firstVisibleIndex = 0;

    for (let i = 0; i < itemRefs.current.length; i++) {
      const item = itemRefs.current[i];
      if (item) {
        if (item.offsetLeft >= scrollLeft) {
          firstVisibleIndex = i;
          break;
        }
      }
    }

    if (firstVisibleIndex !== activeIndex) {
      setActiveIndex(firstVisibleIndex);
    }
  }
};


  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0)
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
      detectActiveItem()
    }}, []);

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    setActiveIndex(0)

    const handleResize = () => checkScroll()
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(el)

    el.addEventListener("scroll", checkScroll)
    checkScroll()

    return () => {
      resizeObserver.disconnect()
      el.removeEventListener("scroll", checkScroll)
    }
  }, [])

  return (

<section id="solutions">
  <div className="container mx-auto py-8 lg:py-12 relative">
    <AnimatePresence>
      <motion.div
        key="content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col justify-start xl:flex-row items-center gap-4 text-left md:py-5">
          <motion.h2
            className="w-full mx-auto text-[clamp(1.25rem,3vw,1.5rem)] font-extrabold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Solutions proposées par
            <div className="lg:max-w-4xl lg:mr-auto flex items-end flex-wrap">
              <h2
                className="font-bold text-[clamp(2rem,6vw,3rem)] leading-none"
                style={{ letterSpacing: "-0.1em" }}
              >
                Penguin
              </h2>
              <h2
                className="outlined-text-black text-[clamp(2rem,6vw,3rem)] md:-ml-2 leading-none"
                style={{ letterSpacing: "-0.1em" }}
              >
                World
              </h2>
            </div>
          </motion.h2>

          <motion.p
            className="w-full xl:w-max mx-auto lg:mr-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            Découvrez les plateformes digitales que PinguinWorld a développées
            pour révolutionner le secteur du tourisme. Chacune est conçue pour
            offrir une expérience utilisateur exceptionnelle, tout en répondant
            aux besoins spécifiques des professionnels et voyageurs. Explorez
            les fonctionnalités avancées, l&apos;ergonomie optimisée et la robustesse
            technique qui caractérisent chacune de nos solutions.
          </motion.p>
        </div>

        {/* Flechas */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`absolute top-[45%] sm:top-[60%] -left-5 transform -translate-y-1/2 z-10 bg-white border border-black rounded-full p-2 shadow transition-colors ${
            canScrollLeft ? "text-black" : "text-gray-300 border-gray-300"
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`absolute top-[45%] sm:top-[60%] -right-5 transform -translate-y-1/2 z-10 bg-white border border-black rounded-full p-2 shadow transition-colors ${
            canScrollRight ? "text-black" : "text-gray-300 border-gray-300"
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carrusel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pt-10 snap-x snap-mandatory scrollbar-none"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <AnimatePresence initial={false}>
            {solutions.map((solution, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.div
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(0)}
                  className={`
                    flex-shrink-0 snap-start
                    w-[90vw] sm:w-[447px] lg:w-[667px] 2xl:w-[707px]
                    shadow-sm rounded-2xl transition overflow-hidden border-2 border-black cursor-pointer duration-700 
                    ${isActive ? "bg-black text-white" : ""}
                  `}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  layout
                >
                  <div className="flex flex-col lg:flex-row items-center">
                    <div className="relative w-full h-[300px] sm:h-[265px] lg:w-[40%] 2xl:w-[50%] lg:h-[460px] 2xl:h-[500px] rounded-lg overflow-hidden lg:border-r-2 border-black">
                      <Image
                        src={solution.image}
                        alt={`${solution.title} image`}
                        fill
                        className="object-cover object-[center_80%] md:object-[center_72%]"
                        placeholder="blur"
                        blurDataURL="/placeholder.svg"
                      />
                    </div>
                    <div className="w-full lg:w-[60%] 2xl:w-[50%] p-6 flex flex-col">
                      <div className="flex flex-col flex-grow justify-between h-full">
                        <div className="flex items-center text-left gap-4 min-h-[80px]">
                          <h2 className="text-3xl font-bold">{solution.title}</h2>
                        </div>
                        <p className="text-sm text-justify flex-grow sm:min-h-[160px] lg:pb-6">
                          {solution.description}
                        </p>
                        <div className="w-full flex flex-col gap-4 pt-6">
                          <div className="w-full">
                            <a
                              href={solution.infoUrl}
                              className={`
                                group border-2 rounded-xl text-sm px-5 py-2 font-medium flex gap-2 justify-between items-center transition-all duration-300
                                ${
                                  isActive
                                    ? "border-black bg-white text-black hover:border-white hover:bg-transparent hover:text-white"
                                    : "border-black bg-white text-black hover:border-black hover:bg-black hover:text-white"
                                }
                              `}
                            >
                              <span className="mr-3">Plus d&apos;infos</span>
                              <div
                                className={`border-l py-2 ${
                                  isActive
                                    ? "border-black group-hover:border-white"
                                    : "border-black group-hover:border-white"
                                }`}
                              >
                                <div className="ml-3 w-5 h-5 flex items-center justify-center">
                                  <CircleArrowRight className="transition-transform duration-500 transform group-hover:rotate-180" />
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="w-full">
                            <a
                              href={solution.siteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group border-2 border-black hover:bg-white bg-[#FEB516] hover:text-black text-black text-sm px-5 py-2 rounded-xl font-medium flex gap-2 justify-between items-center transition-all duration-300"
                            >
                              <span className="mr-3">Visiter le site</span>
                              <div className="border-l group-hover:border-black border-black py-2">
                                <div className="ml-3 w-5 h-5 flex items-center justify-center">
                                  <CircleArrowRight className="transition-transform duration-500 transform group-hover:rotate-180" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
</section>

  )
}
