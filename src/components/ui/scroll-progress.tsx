import { motion, useScroll } from "motion/react"
import type { MotionProps } from "motion/react"

import { cn } from "../../lib/utils"

interface ScrollProgressProps extends Omit<
    React.HTMLAttributes<HTMLElement>,
    keyof MotionProps
> {
    ref?: React.Ref<HTMLDivElement>
}

export function ScrollProgress({
    className,
    ref,
    ...props
}: ScrollProgressProps) {
    const { scrollYProgress } = useScroll()

    return (
        <motion.div
            ref={ref}
            className={cn(
                "fixed inset-x-0 top-[72px] z-[9999] h-[2px] origin-left bg-[var(--accent)]",
                className
            )}
            style={{
                scaleX: scrollYProgress,
            }}
            {...props}
        />
    )
}
