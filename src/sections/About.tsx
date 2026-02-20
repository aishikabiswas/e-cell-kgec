import { Lightbulb, Rocket, Users, Target } from 'lucide-react';
import { TypingAnimation } from '../components/ui/typing-animation';

const features = [
    { icon: <Lightbulb size={20} />, title: 'Ideation', desc: 'Transform raw ideas into viable business concepts through structured brainstorming.' },
    { icon: <Rocket size={20} />, title: 'Incubation', desc: 'Get hands-on support to develop your startup with resources and expert guidance.' },
    { icon: <Users size={20} />, title: 'Community', desc: 'Join a thriving network of student entrepreneurs, alumni founders, and mentors.' },
    { icon: <Target size={20} />, title: 'Events', desc: 'Participate in hackathons, pitch competitions, and speaker sessions year-round.' },
];

export default function About() {
    return (
        <section className="py-16 max-md:py-20" id="about">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Section header */}
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--accent-dim)] border border-[rgba(247,147,30,0.25)] rounded-full text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-5">
                        Who We Are
                    </span>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
                        Fueling the Next Generation of{' '}
                        <span className="text-[var(--accent)]">Entrepreneurs</span>
                    </h2>
                </div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                    {/* LEFT — feature cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {features.map((f, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-250 hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[var(--accent-dim)] text-[var(--accent)] flex items-center justify-center mb-4 transition-all duration-250 group-hover:bg-[var(--accent)] group-hover:text-black">
                                    {f.icon}
                                </div>
                                <h3 className="text-base font-bold mb-1.5 text-[var(--text-primary)]">{f.title}</h3>
                                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{f.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT — motto */}
                    <div className="relative rounded-3xl overflow-hidden border border-[var(--border)] flex flex-col justify-center">
                        {/* Grid overlay */}
                        <div className="absolute inset-0 hero-grid-overlay opacity-40 pointer-events-none" />

                        {/* Ambient glow */}
                        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[250px] rounded-full bg-[var(--accent)] opacity-10 blur-[70px] pointer-events-none" />
                        <div className="absolute -bottom-12 left-1/4 w-[250px] h-[150px] rounded-full bg-[var(--accent)] opacity-[0.07] blur-[50px] pointer-events-none" />

                        {/* Content */}
                        <div className="relative z-10 px-10 py-12 max-md:px-6 max-md:py-10 text-center bg-[var(--bg-card)]/60 backdrop-blur-sm h-full flex flex-col justify-center">
                            {/* Label */}
                            <span className="inline-flex self-center items-center gap-2 px-4 py-1.5 bg-[var(--accent-dim)] border border-[rgba(247,147,30,0.25)] rounded-full text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-7">
                                Our Motto
                            </span>

                            {/* Motto words */}
                            <div className="flex flex-col gap-1 mb-7">
                                {['Illuminate.', 'Inculcate.', 'Invigorate.'].map((word, i) => (
                                    <TypingAnimation
                                        key={i}
                                        delay={i * 1000}
                                        showCursor={false}
                                        className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-tight text-[var(--accent)] leading-tight block text-left w-max mx-auto"
                                    >
                                        {word}
                                    </TypingAnimation>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="w-12 h-[2px] bg-[var(--accent)] mx-auto mb-7 rounded-full opacity-60" />

                            {/* Description */}
                            <p className="text-sm leading-relaxed text-[var(--text-secondary)] max-w-sm mx-auto">
                                At <span className="text-[var(--accent)] font-semibold">EGNITION'24</span>, we believe in inspiring young minds to think beyond
                                boundaries, innovate with purpose, and ignite their entrepreneurial journey — cultivating
                                creativity, resilience, and leadership for the next generation of trailblazers.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
