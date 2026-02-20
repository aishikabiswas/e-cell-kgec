import { useRef, useState } from "react";
import { ArrowRight, Trophy, Lightbulb } from "lucide-react";
import { Highlighter } from "../components/magicui/highlighter";

export default function PastEvents() {
    const sectionRef = useRef<HTMLElement>(null);

    const pastEvents = [
        {
            id: 1,
            title: "Pitchathon",
            category: "Pitch Competition",
            date: "Past Event",
            icon: <Trophy size={48} className="text-[var(--accent)] mb-4" />,
            image: "https://images.unsplash.com/photo-1556761175-5973b0f32e7e?w=800&h=600&fit=crop&q=80",
            description: "Pitchathon challenges participants to develop and present a comprehensive business plan that highlights their vision, market potential, and strategy for success. Whether you're an entrepreneur at heart or a business enthusiast, this is your stage to impress investors, mentors, and judges!",
        },
        {
            id: 2,
            title: "Lumora",
            category: "Idea-Pitching",
            date: "Past Event",
            icon: <Lightbulb size={48} className="text-[var(--accent)] mb-4" />,
            image: "https://images.unsplash.com/photo-1558442086-8b6c936c1cc8?w=800&h=600&fit=crop&q=80",
            description: "LUMORA is the prestigious idea-pitching competition hosted by us where visionary students present innovative ideas that blend creativity, technology, and impact. It offers a dynamic platform to showcase solutions, gain recognition, and connect with mentors, helping young entrepreneurs turn their concepts into real-world opportunities.",
        },
    ];

    const PastEventCard = ({ event }: { event: typeof pastEvents[0] }) => {
        const [isFlipped, setIsFlipped] = useState(false);

        return (
            <div className="group relative w-full h-[450px]" style={{ perspective: "1000px" }}>
                <div
                    className="w-full h-full transition-transform duration-700 relative"
                    style={{
                        transformStyle: "preserve-3d",
                        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                >
                    {/* Front Face */}
                    <div
                        className={`absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)]/50 flex flex-col justify-end shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] ${isFlipped ? 'pointer-events-none' : ''}`}
                        style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                    >
                        <img
                            src={event.image}
                            alt={event.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        <div className="absolute top-5 left-5">
                            <span className="inline-block px-4 py-1.5 text-xs font-bold rounded-full uppercase tracking-wider bg-black/60 text-white backdrop-blur-md border border-white/10">
                                {event.category}
                            </span>
                        </div>

                        <div className="relative z-10 w-full p-8 flex flex-col items-center text-center mt-auto">
                            <h3 className="text-4xl font-bold text-white mb-6 group-hover:text-[var(--accent)] transition-colors">
                                {event.title}
                            </h3>
                            <button
                                onClick={() => setIsFlipped(true)}
                                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-[var(--accent)] text-white hover:text-white border border-white/20 hover:border-transparent px-6 py-2.5 rounded-full font-semibold transition-all duration-300 group/link backdrop-blur-sm"
                            >
                                <span>Learn More</span>
                                <ArrowRight size={18} className="transform group-hover/link:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Back Face */}
                    <div
                        className="absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] p-8 flex flex-col items-center justify-center text-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)]"
                        style={{
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            transform: "rotateY(180deg)"
                        }}
                    >
                        <div className="mb-4">{event.icon}</div>
                        <h3 className="text-3xl font-bold text-[var(--accent)] mb-4">{event.title}</h3>
                        <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed flex-grow overflow-y-auto w-full">
                            {event.description}
                        </p>
                        <button
                            onClick={() => setIsFlipped(false)}
                            className="relative z-10 inline-flex items-center gap-2 text-[var(--text-secondary)] mt-6 font-medium hover:text-[var(--accent)] transition-colors group/back py-2 cursor-pointer"
                        >
                            <ArrowRight size={18} className="rotate-180 transform group-hover/back:-translate-x-1 transition-transform" />
                            <span>Go Back</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section ref={sectionRef} className="relative py-24 bg-[var(--bg-primary)]" id="past-events">
            <div className="w-full max-w-[1400px] mx-auto px-6">
                {/* Section Heading */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="flex justify-center items-center gap-2 mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--accent-dim)] border border-[rgba(247,147,30,0.25)] rounded-full text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-2">
                            Our Legacy
                        </span>
                    </div>

                    <h2 className="text-[clamp(2.5rem,5vw,3.2rem)] font-bold leading-tight tracking-tight text-[var(--text-primary)] mb-6">
                        Our <Highlighter action="underline" color="#000000ff " className="bg-gradient-to-br from-[var(--accent)] via-[#ffd700] to-[var(--accent)] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-shift font-extrabold inline-block">Past Events</Highlighter>
                    </h2>

                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10 max-w-5xl mx-auto">
                    {pastEvents.map((event) => (
                        <PastEventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </section>
    );
}
