import { useState, useEffect, useCallback } from 'react';

interface StackProps {
    cards: React.ReactNode[];
    randomRotation?: boolean;
    sensitivity?: number;
    sendToBackOnClick?: boolean;
    autoplay?: boolean;
    autoplayDelay?: number;
    pauseOnHover?: boolean;
}

export default function Stack({
    cards,
    randomRotation = false,
    sendToBackOnClick = true,
    autoplay = false,
    autoplayDelay = 2500,
    pauseOnHover = true,
}: StackProps) {
    const [order, setOrder] = useState<number[]>(() => cards.map((_, i) => i));
    const [hovered, setHovered] = useState(false);

    const sendToBack = useCallback(() => {
        setOrder((prev) => {
            const newOrder = [...prev];
            const first = newOrder.shift()!;
            newOrder.push(first);
            return newOrder;
        });
    }, []);

    useEffect(() => {
        if (!autoplay) return;
        if (pauseOnHover && hovered) return;
        const interval = setInterval(sendToBack, autoplayDelay);
        return () => clearInterval(interval);
    }, [autoplay, autoplayDelay, pauseOnHover, hovered, sendToBack]);

    const getRotation = (index: number) => {
        if (randomRotation) {
            const seed = index * 137.508;
            return (seed % 12) - 6;
        }
        const rotations = [0, -3, 2.5, -1.5, 4];
        return rotations[index % rotations.length];
    };

    return (
        <div
            className="relative w-full h-full flex items-center justify-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {order.map((cardIndex, stackPos) => {
                const total = cards.length;
                const isTop = stackPos === 0;
                const scale = 1 - stackPos * 0.04;
                const yOffset = stackPos * -6;
                const rotation = stackPos === 0 ? 0 : getRotation(cardIndex);
                const zIndex = total - stackPos;
                const opacity = stackPos < 4 ? 1 - stackPos * 0.15 : 0;

                return (
                    <div
                        key={cardIndex}
                        className={`absolute w-[90%] h-[85%] rounded-2xl overflow-hidden transition-all duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)] border-2 border-white/15 ${isTop ? 'shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:!translate-y-[-8px] hover:!scale-[1.02] hover:!rotate-0 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]' : 'shadow-[0_4px_20px_rgba(0,0,0,0.15)]'}`}
                        style={{
                            zIndex,
                            transform: `translateY(${yOffset}px) scale(${scale}) rotate(${rotation}deg)`,
                            opacity,
                            cursor: isTop && sendToBackOnClick ? 'pointer' : 'default',
                        }}
                        onClick={isTop && sendToBackOnClick ? sendToBack : undefined}
                    >
                        {cards[cardIndex]}
                    </div>
                );
            })}
        </div>
    );
}
