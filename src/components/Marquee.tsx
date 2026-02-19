import { cn } from '../lib/utils';

interface MarqueeProps {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    vertical?: boolean;
    repeat?: number;
    children: React.ReactNode;
}

export default function Marquee({
    className,
    reverse = false,
    pauseOnHover = false,
    vertical = false,
    repeat = 4,
    children,
}: MarqueeProps) {
    return (
        <div
            className={cn(
                'group flex overflow-hidden [--duration:40s] [--gap:1rem] gap-[var(--gap)]',
                vertical ? 'flex-col' : 'flex-row',
                className,
            )}
        >
            {Array.from({ length: repeat }).map((_, i) => (
                <div
                    key={i}
                    className={cn(
                        'flex shrink-0 justify-around gap-[var(--gap)] [--gap:1rem]',
                        vertical ? 'flex-col animate-[marquee-vertical_var(--duration)_linear_infinite]' : 'flex-row animate-[marquee_var(--duration)_linear_infinite]',
                        pauseOnHover && 'group-hover:[animation-play-state:paused]',
                        reverse && '[animation-direction:reverse]',
                    )}
                >
                    {children}
                </div>
            ))}
        </div>
    );
}
