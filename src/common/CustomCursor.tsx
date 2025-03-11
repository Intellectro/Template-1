import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useAnimation } from "framer-motion";
import { FaSprayCan } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { MdOutlineCleaningServices } from "react-icons/md";

const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const [cursorVariant, setCursorVariant] = useState<"default" | "pointer">("default");
    const [isClicking, setIsClicking] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);
    const [isIdle, setIsIdle] = useState<boolean>(false);
    const [shouldHide, setShouldHide] = useState<boolean>(false);
    
    const controls = useAnimation();
    const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
    const idleTime = 1500;
    
    const springConfig = { damping: 25, stiffness: 300 };
    const mouseX = useSpring(0, springConfig);
    const mouseY = useSpring(0, springConfig);

    useEffect(() => {
        let hideTimer: NodeJS.Timeout;
        if (!isIdle && isVisible) {
            hideTimer = setTimeout(() => setShouldHide(true), 300);
        } else {
            setShouldHide(false);
        }
        return () => clearTimeout(hideTimer);
    }, [isIdle, isVisible]);

    useEffect(() => {
        if (isIdle) {
            controls.start({
                scale: [1, 1.1, 1],
                y: -10,
                rotate: [0, 5, 0, -5, 0],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            });
        } else {
            controls.stop();
            controls.set({ scale: 1, rotate: 0, y: 0 });
        }
    }, [isIdle, controls]);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobileDevice(
                "ontouchstart" in window || navigator.maxTouchPoints > 0 || window.innerWidth <= 768
            );
        };
        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);
        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    useEffect(() => {
        if (isMobileDevice) return;

        const resetIdleTimer = () => {
            setIsIdle(false);
            if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
            idleTimerRef.current = setTimeout(() => setIsIdle(true), idleTime);
        };

        const mouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 12);
            mouseY.set(e.clientY - 12);
            resetIdleTimer();
        };

        const handleMouseOver = (e: MouseEvent) => {
            const element = e.target as HTMLElement;
            const computedStyle = window.getComputedStyle(element);
            const parentStyle = element.parentElement ? window.getComputedStyle(element.parentElement) : null;

            if (
                computedStyle.cursor === "pointer" ||
                ["BUTTON", "A"].includes(element.tagName) ||
                element.classList.contains("cursor-pointer") ||
                parentStyle?.cursor === "pointer" ||
                element.parentElement?.classList.contains("cursor-pointer")
            ) {
                setCursorVariant("pointer");
            } else {
                setCursorVariant("default");
            }
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => {
            setIsVisible(true);
            resetIdleTimer();
        };

        resetIdleTimer();
        window.addEventListener("mousemove", mouseMove);
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
            if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
        };
    }, [isMobileDevice, mouseX, mouseY]);

    if (isMobileDevice) return null;

    return (
        <motion.div
            ref={cursorRef}
            className="cursor-container fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full"
            animate={controls}
            style={{
                width: "24px",
                height: "24px",
                x: mouseX,
                y: mouseY,
                opacity: isIdle && isVisible ? 0.85 : shouldHide ? 0 : 0.85,
                backgroundImage: "linear-gradient(to right, #7083c8 -50%, #e2bfcb 33%, #d098b3 86%, #7083c8 110%)",
                boxShadow: isClicking ? "0 0 15px rgba(224, 191, 203, 0.6)" : "0 0 5px rgba(224, 191, 203, 0.3)",
                scale: cursorVariant === "pointer" ? 1.2 : 1,
            }}
        >
            {cursorVariant === "pointer" ? (
                <MdOutlineCleaningServices className="text-white text-xl" />
            ) : isClicking ? (
                <>
                    <BsStars className="text-white text-lg" />
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            initial={{ x: 0, y: 0, opacity: 1 }}
                            animate={{ x: (Math.random() - 0.5) * 30, y: (Math.random() - 0.5) * 30, opacity: 0, scale: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
                        />
                    ))}
                </>
            ) : (
                <FaSprayCan className="text-white text-sm" />
            )}
        </motion.div>
    );
};

export default CustomCursor;