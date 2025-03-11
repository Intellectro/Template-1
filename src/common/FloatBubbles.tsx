import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BubbleProps {
    size: number;
    left: number;
    delay: number;
    duration: number;
}

const Bubble: React.FC<BubbleProps> = ({ size, left, delay, duration }) => {
    return (
        <motion.div
            className="absolute rounded-full bg-blue-500/20 backdrop-blur-sm border border-white/20 z-[99999]"
            style={{
                width: size,
                height: size,
                left: `${left}%`,
                bottom: "-10%",
            }}
            initial={{ y: 0, opacity: 1 }}
            animate={{
                y: [0, -1000],
                opacity: [1, 0.6, 1],
                scale: [1, 1.2, 0.8],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
};

interface BubbleData {
    id: number;
    size: number;
    left: number;
    delay: number;
    duration: number;
}

const FloatingBubbles = () => {
    const [bubbles, setBubbles] = useState<BubbleData[]>([]);

    useEffect(() => {
        const generateBubble = (id: number): BubbleData => ({
            id,
            size: Math.random() * 40 + 20, // 20-60px
            left: Math.random() * 100, // 0-100%
            delay: Math.random() * 2, // 0-2s
            duration: Math.random() * 6 + 8, // 8-14s
        });

        // Generate initial bubbles
        setBubbles(Array.from({ length: 20 }, (_, i) => generateBubble(i)));

        // Regenerate bubbles periodically
        const interval = setInterval(() => {
            setBubbles((prevBubbles) => {
                const newBubble = generateBubble(Date.now());
                return [...prevBubbles.slice(-19), newBubble];
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <AnimatePresence>
                {bubbles.map((bubble) => (
                    <Bubble
                        key={bubble.id}
                        size={bubble.size}
                        left={bubble.left}
                        delay={bubble.delay}
                        duration={bubble.duration}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default FloatingBubbles;
