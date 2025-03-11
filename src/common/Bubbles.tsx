import React, { useEffect, useState, useRef, useCallback, memo } from "react";
import { AnimatePresence } from "framer-motion";
import styled, { keyframes, createGlobalStyle } from "styled-components";

interface BubbleProps {
    id: (string | number);
    left: number;
    top: number;
    size: number;
    duration: number;
}

interface GlobalCursorStyleProps {
    isActive: boolean;
    cleaningProgress: number;
}

const float = keyframes`
  0% {
    transform: translateY(0) scale(0.6);
    opacity: 0.7;
  }
  20% {
    transform: translateY(-20vh) scale(0.8);
    opacity: 0.8;
  }
  80% {
    transform: translateY(-80vh) scale(1);
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100vh) scale(1);
    opacity: 0;
  }
`;

const BubbleContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 999;
    overflow: hidden;
`;

const GlobalCursorStyle = createGlobalStyle<GlobalCursorStyleProps>`
  :root {
    --bubble-cursor: ${(props) => (props.isActive ? "url('/soap.png'), pointer" : "auto")};
    --gradient-color: ${(props) =>
        props.cleaningProgress > 0.95
            ? "#7083c8"
            : props.cleaningProgress > 0
            ? `linear-gradient(to right, 
                #7083c8 ${props.cleaningProgress * 100}%, 
                #e2bfcb ${props.cleaningProgress * 100 + 33}%, 
                #d098b3 ${props.cleaningProgress * 100 + 86}%, 
                #7083c8 ${props.cleaningProgress * 100 + 110}%)`
            : "linear-gradient(to right, #7083c8 -50%, #e2bfcb 33%, #d098b3 86%, #7083c8 110%)"};
  }
  .bubbling {
    cursor: var(--bubble-cursor) !important;
    background: var(--gradient-color) !important;
    transition: background 0.3s ease-out !important;
  }
`;

const Bubble = memo(styled.div<BubbleProps>`
    position: absolute;
    background: radial-gradient(
        circle at 30% 30%,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(121, 133, 199, 0.6) 50%,
        rgba(121, 133, 199, 0.4) 100%
    );
    box-shadow: inset -2px -2px 8px rgba(255, 255, 255, 0.4),
        inset 2px 2px 8px rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    pointer-events: none;
    animation: ${float} ${(props) => props.duration}s ease-out forwards;
    left: ${(props) => props.left}px;
    top: ${(props) => props.top}px;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    backdrop-filter: blur(1px);
    transform-origin: center;
    will-change: transform, opacity;
`);

const MemoizedBubble: React.FC<BubbleProps> = memo(({ id, left, top, size, duration }) => (
    <Bubble id={`bubble-${id}`} left={left} top={top} size={size} duration={duration} />
));

const MAX_BUBBLES = 20;

const Bubbles: React.FC = () => {
    const [bubbles, setBubbles] = useState<BubbleProps[]>([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isOverBubblingElement, setIsOverBubblingElement] = useState(false);
    const [cleaningProgress, setCleaningProgress] = useState(0);

    const mousePositionRef = useRef({ x: 0, y: 0 });

    const createBubble = useCallback((): BubbleProps => {
        const size = Math.random() * 40 + 20;
        return {
            id: Math.random(),
            left: mousePositionRef.current.x,
            top: mousePositionRef.current.y - 50,
            size,
            duration: Math.random() * 3 + 4,
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const currentPosition = { x: e.clientX, y: e.clientY };
            mousePositionRef.current = currentPosition;
            setMousePosition(currentPosition);
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        if (!isOverBubblingElement) return;
        const interval = setInterval(() => {
            setBubbles((prev) => [...prev.slice(-MAX_BUBBLES + 1), createBubble()]);
        }, 700);
        return () => clearInterval(interval);
    }, [isOverBubblingElement, createBubble]);

    return (
        <>
            <GlobalCursorStyle isActive={isOverBubblingElement} cleaningProgress={cleaningProgress} />
            <BubbleContainer>
                <AnimatePresence>
                    {bubbles.map((bubble) => (
                        <MemoizedBubble key={bubble.id} {...bubble} />
                    ))}
                </AnimatePresence>
            </BubbleContainer>
        </>
    );
};

export default memo(Bubbles);
