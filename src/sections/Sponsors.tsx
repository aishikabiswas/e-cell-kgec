import { useRef } from "react";
import { Highlighter } from "../components/magicui/highlighter";
import LogoLoop from "../components/magicui/LogoLoop";

export default function Sponsors() {
    const sectionRef = useRef<HTMLElement>(null);

    const sponsorLogos = [
        "/sponsors/Aviotron.jpeg",
        "/sponsors/BARC.png",
        "/sponsors/BTLEPC.png",
        "/sponsors/CESC.png",
        "/sponsors/Dastur.png",
        "/sponsors/DxCorr.png",
        "/sponsors/HaldiaEnergyLimited.png",
        "/sponsors/HaldiaPetrochemicals.png",
        "/sponsors/ICPL.png",
        "/sponsors/StockEdge.webp",
        "/sponsors/TDK.png",
        "/sponsors/TECHNOELECTRIC.png",
        "/sponsors/TRIOPHASE.png",
        "/sponsors/Tega.png",
        "/sponsors/elearnMarkets.png",
        "/sponsors/salasar.png",
        "/sponsors/tatasteel.png",
        "/sponsors/unstop.svg",
        "/sponsors/wood.png",
    ];

    return (
        <section ref={sectionRef} className="relative py-24 bg-[var(--bg-secondary)] overflow-hidden" id="sponsors">
            {/* Ambient glow */}
            <div className="absolute -top-32 right-[-60px] w-[500px] h-[400px] rounded-full bg-[var(--accent)] opacity-[0.07] blur-[120px] pointer-events-none z-0 animate-pulse-glow" />
            <div className="absolute bottom-[-80px] left-[-40px] w-[350px] h-[280px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[100px] pointer-events-none z-0 animate-pulse-glow [animation-direction:reverse] [animation-duration:8s]" />

            <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">
                {/* Section Heading */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="flex justify-center items-center gap-2 mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--accent-dim)] border border-[rgba(247,147,30,0.25)] rounded-full text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-2">
                            Backed By The Best
                        </span>
                    </div>

                    <h2 className="text-[clamp(2.5rem,5vw,3.2rem)] font-bold leading-tight tracking-tight text-[var(--text-primary)] mb-6">
                        Our <Highlighter action="highlight" color="#e4bf46ff">Sponsors</Highlighter>
                    </h2>
                </div>
            </div>

            {/* Infinite Marquee via React-Bits LogoLoop */}
            <div className="relative w-full overflow-hidden border-y border-[var(--border)] bg-[var(--bg-primary)]/50 py-10 backdrop-blur-sm">
                <LogoLoop
                    logos={sponsorLogos.map((src, index) => ({
                        src,
                        alt: `Sponsor ${index + 1}`
                    }))}
                    speed={120}
                    direction="left"
                    logoHeight={80}
                    gap={64}
                    hoverSpeed={0}
                    scaleOnHover={true}
                    fadeOut={true}
                    fadeOutColor="var(--bg-primary)"
                    ariaLabel="Our Sponsors"
                />
            </div>
        </section>
    );
}
