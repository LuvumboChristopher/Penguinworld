"use client"
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function toggleVisibility() {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="
                        fixed bottom-[5px] sm:bottom-[50px] right-[5px] md:bottom-[54px] right-0 z-50
                        p-[9px] sm:p-3 rounded-xl sm:rounded-0 sm:rounded-l-lg
                        bg-[#feb516]
                        text-black
                        border-2 border-black
                        sm:border-r-0
                        transition duration-300
                        hover:text-white hover:bg-[#feb516]
                    "
                >
                    <FaArrowUp className="w-3 h-3 sm:w-6 sm:h-6" />
                </button>
            )}
        </>
    );
}
