"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-5 right-2.5 md:bottom-[54px] md:right-0 z-40 flex h-10 w-10 items-center justify-center rounded-xl bg-[#feb516] text-black border border-black shadow-[inset_0_0_0_0.1rem_rgba(128,130,134,0.25)] transition duration-300 hover:bg-black hover:text-white hover:border-white md:rounded-none sm:border-r-0"
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
}
