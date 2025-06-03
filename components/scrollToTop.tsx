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
                        fixed bottom-[52px]  md:bottom-[54px] right-0 z-50
                        p-3 rounded-l-lg
                        bg-[#feb516]
                        text-black
                        border-2 border-black
                        border-r-0
                        transition duration-300
                        hover:text-white hover:bg-[#feb516]
                    "
                >
                    <FaArrowUp className="w-6 h-6" />
                </button>
            )}
        </>
    );
}
