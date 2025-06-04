"use client"

import { useRef, useState, useEffect, useCallback, SetStateAction } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { CircleArrowRight } from "lucide-react"
import Image from "next/image"
import { useInView, motion, AnimatePresence } from "framer-motion"
import { Solution, solutions } from "@/lib/solutions"

export function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  const openModal = (solution: Solution) => {
    setSelectedSolution(solution);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedSolution(null);
  };



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
    }
  }, []);

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

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [modalOpen]);


  return (
    <motion.section
      id="solutions"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >      <div className="container mx-auto py-8 lg:py-12 relative">
        <AnimatePresence>
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Flechas */}
            <div className="hidden sm:block">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`absolute top-[45%] sm:top-1/2 -left-5 transform -translate-y-1/2 z-10 bg-white border-2 border-black rounded-full p-2 shadow transition-colors
      ${canScrollLeft
                    ? "text-black hover:bg-black hover:text-white cursor-pointer"
                    : "text-gray-300 border-gray-300 cursor-not-allowed"
                  }`}
              >
                <ChevronLeft className={`w-6 h-6 transition-transform duration-200 ${canScrollLeft ? "hover:scale-110" : ""}`} />
              </button>

              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`absolute top-[45%] sm:top-1/2 -right-5 transform -translate-y-1/2 z-10 bg-white border-2 border-black rounded-full p-2 shadow transition-colors
      ${canScrollRight
                    ? "text-black hover:bg-black hover:text-white cursor-pointer"
                    : "text-gray-300 border-gray-300 cursor-not-allowed"
                  }`}
              >
                <ChevronRight className={`w-6 h-6 transition-transform duration-200 ${canScrollRight ? "hover:scale-110" : ""}`} />
              </button>
            </div>
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-none"
              style={{ scrollSnapType: "x mandatory" }}
            >
              <AnimatePresence initial={false}>
                {solutions.map((solution, index) => {
                  const isHovered = hoverIndex !== null && hoverIndex !== activeIndex && hoverIndex === index;
                  const shouldLookActive = isHovered || (hoverIndex === null && index === activeIndex);
                  return (
                    <motion.div
                      key={index}
                      ref={(el) => {
                        itemRefs.current[index] = el;
                      }}
                      onMouseEnter={() => {
                        if (index !== activeIndex) setHoverIndex(index);
                      }}
                      onMouseLeave={() => {
                        setHoverIndex(null);
                      }}
                      className={`
                    flex-shrink-0 snap-start
                    w-[90vw] lg:w-[447px] xl:w-[663px]  2xl:w-[707px]
                    shadow-sm rounded-2xl transition overflow-hidden border-2 border-black cursor-pointer duration-700 ${shouldLookActive ? "bg-black text-white" : ""}
                  `}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      layout
                    >
                      <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center">
                        <div className="relative w-full h-[205px] sm:h-[465px] md:w-[50%] lg:w-full xl:w-[48.5%] lg:h-[240px] xl:h-[420px] rounded-lg overflow-hidden md:border-r-2 lg:border-0 xl:border-r-2 border-black">
                          <Image
                            src={solution.image}
                            alt={`${solution.title} image`}
                            fill
                            className="object-cover object-[center_83%] md:object-[center_72%] md:object-[center_85%]"
                            placeholder="blur"
                            blurDataURL="/placeholder.svg"
                          />
                        </div>
                        <div className="w-full md:w-[50%] lg:w-full xl:w-[62.5%] p-8 flex flex-col">
                          <div className="flex flex-col flex-grow justify-between gap-2 h-full">
                            <div className="flex items-center text-left gap-4">
                              <h2 className="w-full  text-2xl md:text-3xl text-center sm:text-left font-bold mb-3">{solution.title}</h2>
                            </div>
                            <p className="text-sm text-justify-optimized  overflow-hidden text-ellipsis line-clamp-5">
                              {solution.description}
                            </p>
                            <div className="w-full flex flex-col gap-4 pt-6">
                              <div className="w-full" >
                                <button
                                  onClick={() => openModal(solution)}
                                  className={`w-full
                                group border-[2px] rounded-xl text-sm px-5 py-2 font-medium flex gap-2 justify-between items-center transition-all duration-300 border-black bg-white text-black hover:border-white hover:bg-transparent hover:text-white`}
                                >
                                  <span className="mr-3">Plus d&apos;infos</span>
                                  <div
                                    className={`border-l py-2 border-black group-hover:border-white`}
                                  >
                                    <div className="ml-3 w-5 h-5 flex items-center justify-center">
                                      <CircleArrowRight className="transition-transform duration-500 transform group-hover:rotate-180" />
                                    </div>
                                  </div>
                                </button>
                              </div>
                              <div className="w-full">
                                <a
                                  href={solution.siteUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group border-[2px] border-black hover:bg-white bg-[#FEB516] hover:text-black text-black text-sm  px-5 py-2 rounded-xl font-medium flex gap-2 justify-between items-center transition-all duration-300"
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
            <AnimatePresence>
              {modalOpen && selectedSolution && (
                <motion.div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
                  onClick={closeModal}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="bg-white text-black sm:rounded-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent shadow-lg w-screen h-screen sm:h-max  sm:w-[570px] sm:max-w-[90%] sm:max-h-[90%] w-full p-12 relative space-y-4"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >

                    <div className="flex items-center gap-4 ">
                      <h2 className="w-full text-3xl text-left font-semibold ">
                        {selectedSolution.title}
                      </h2>
                      <button
                        onClick={closeModal}
                        className="text-black hover:text-red-600 text-2xl font-bold"
                        aria-label="Close modal"
                      >
                        ✕
                      </button>
                    </div>

                    <p className="text-sm py-6 whitespace-pre-line text-justify-optimized border-b border-black">{selectedSolution.description}</p>
                    <div className="pt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
                      <a
                        href={selectedSolution.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group border-[2px] border-black hover:bg-white bg-[#FEB516]  hover:text-black text-black text-sm md:tex-[14.5px]  px-5 py-2 rounded-xl font-medium flex gap-2 justify-between items-center transition-all duration-300 w-full"
                      >
                        <span className="mr-3">Visiter le site</span>
                        <div className="border-l group-hover:border-black border-black py-2">
                          <div className="ml-3 w-5 h-5 flex items-center justify-center">
                            <CircleArrowRight className="transition-transform duration-500 transform group-hover:rotate-180" />
                          </div>
                        </div>
                      </a>
                      {selectedSolution.extraLinks &&
                        selectedSolution.extraLinks.map(({ label, url }) => (
                          <a
                            key={label}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border-[2px] border-black hover:bg-white bg-black hover:text-black text-white text-sm md:tex-[14.5px] px-5 py-2 rounded-xl font-medium flex gap-2 justify-between items-center transition-all duration-300 w-full"
                          >
                            <span className="mr-3">{label}</span>
                            <div className="border-l group-hover:border-black border-white py-2">
                              <div className="ml-3 w-5 h-5 flex items-center justify-center">
                                <CircleArrowRight className="transition-transform duration-500 transform group-hover:rotate-180" />
                              </div>
                            </div>
                          </a>
                        ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>

  )
}
