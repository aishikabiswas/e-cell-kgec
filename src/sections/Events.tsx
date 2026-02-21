import { useRef } from "react";
import { ArrowRight, Calendar, MapPin, } from "lucide-react";
import { Highlighter } from "../components/magicui/highlighter";
export default function Events() {
    const sectionRef = useRef<HTMLElement>(null);

    const events = [
        {
            id: 1,
            title: "E-Summit 2025",
            category: "Flagship Event",
            date: "March 15-17",
            location: "KGEC Campus",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&q=80",
            color: "#F7931E",
            description: "Experience an unforgettable 3-day entrepreneurial summit featuring keynote speakers, pitching sessions, and networking.",
            stats: [
                { label: "Attendees", value: "800+" },
                { label: "Speakers", value: "15+" },
                { label: "Prizes", value: "₹2L+" },
            ]
        },
        {
            id: 2,
            title: "Ignition 2025",
            category: "Hackathon",
            date: "April 5-6",
            location: "Innovation Lab",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&q=80",
            color: "#ffd700",
            description: "A 36-hour intense hackathon where developers and designers collaborate to build innovative technological solutions.",
            stats: [
                { label: "Teams", value: "50+" },
                { label: "Hours", value: "36" },
                { label: "Mentors", value: "10" },
            ]
        },
        {
            id: 3,
            title: "Lumora",
            category: "Cultural Night",
            date: "May 20",
            location: "Main Ground",
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&q=80",
            color: "#F7931E",
            description: "The grand finale cultural night featuring live bands, electrifying performances, and an unforgettable celebration.",
            stats: [
                { label: "Performers", value: "20+" },
                { label: "Capacity", value: "2000" },
                { label: "Rating", value: "5/5" },
            ]
        },
    ];

    return (
        <section ref={sectionRef} className="relative py-24 bg-[var(--bg-secondary)] overflow-hidden" id="events">
            {/* Ambient glow */}
            <div className="absolute -top-32 left-[-60px] w-[500px] h-[400px] rounded-full bg-[var(--accent)] opacity-[0.07] blur-[120px] pointer-events-none z-0 animate-pulse-glow" />
            <div className="absolute bottom-[-80px] right-[-40px] w-[350px] h-[280px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[100px] pointer-events-none z-0 animate-pulse-glow [animation-direction:reverse] [animation-duration:8s]" />
            <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center gap-2 mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--accent-dim)] border border-[rgba(247,147,30,0.25)] rounded-full text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-2">
                            What's Happening?
                        </span>
                    </div>

                    <h2 className="text-[clamp(2.5rem,5vw,3.2rem)] font-bold leading-tight tracking-tight text-[var(--text-primary)] mb-4">
                        Our Flagship  <Highlighter action="highlight" color="#e4bf46ff">Events</Highlighter>
                    </h2>

                    {/* <div className="flex items-center justify-center gap-3">
                        <button className="px-5 py-2 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-semibold border border-[var(--accent)]/20 hover:bg-[var(--accent)] hover:text-white transition-colors">
                            Flagship
                        </button>
                        <button className="px-5 py-2 rounded-full bg-[var(--bg-card)] text-[var(--text-secondary)] text-sm font-semibold border border-[var(--border)] hover:border-[var(--accent)]/50 transition-colors">
                            Technical
                        </button>
                        <button className="px-5 py-2 rounded-full bg-[var(--bg-card)] text-[var(--text-secondary)] text-sm font-semibold border border-[var(--border)] hover:border-[var(--accent)]/50 transition-colors">
                            Cultural
                        </button>
                    </div> */}
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="group relative flex flex-col bg-[var(--bg-card)] rounded-[2rem] overflow-hidden border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)]"
                        >
                            {/* Card Image */}
                            <div className="relative h-[240px] w-full overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                {/* Overlay Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider bg-black/50 text-white backdrop-blur-md border border-white/10">
                                        {event.category}
                                    </span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="flex flex-col flex-grow p-8">
                                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                                    {event.title}
                                </h3>

                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                                    {event.description}
                                </p>

                                {/* Location & Date tight info */}
                                <div className="flex items-center gap-4 text-xs font-medium text-[var(--text-secondary)] mb-6 pb-6 border-b border-[var(--border)]">
                                    <div className="flex items-center gap-1.5 justify-center">
                                        <Calendar size={14} className="text-[var(--text-muted)]" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 justify-center">
                                        <MapPin size={14} className="text-[var(--text-muted)]" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>

                                {/* Stats Section (Replacing Timer) */}
                                <div className="grid grid-cols-3 gap-2 mt-auto pb-4 relative">
                                    {event.stats.map((stat, i) => (
                                        <div key={i} className="flex flex-col items-center text-center">
                                            <span className="text-lg font-bold text-[var(--text-primary)] leading-none mb-1">
                                                {stat.value}
                                            </span>
                                            <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] tracking-wider">
                                                {stat.label}
                                            </span>
                                        </div>
                                    ))}

                                    {/* Hover Overlay "Read More" Block */}
                                    <div className="absolute inset-[-1.5rem] bottom-0 bg-[var(--bg-card)] flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 border-t border-[var(--border)]">
                                        <a
                                            href="#"
                                            className="inline-flex items-center space-x-2 text-[var(--accent)] font-semibold hover:gap-3 transition-all duration-300"
                                        >
                                            <span>Read More</span>
                                            <ArrowRight size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
