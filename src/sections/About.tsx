import { Lightbulb, Rocket, Users, Target } from 'lucide-react';

const features = [
    { icon: <Lightbulb size={28} />, title: 'Ideation', desc: 'Transform raw ideas into viable business concepts through structured brainstorming and mentorship.' },
    { icon: <Rocket size={28} />, title: 'Incubation', desc: 'Get hands-on support to develop your startup with resources, workspace, and expert guidance.' },
    { icon: <Users size={28} />, title: 'Community', desc: 'Join a thriving network of student entrepreneurs, alumni founders, and industry mentors.' },
    { icon: <Target size={28} />, title: 'Events', desc: 'Participate in hackathons, pitch competitions, workshops, and speaker sessions year-round.' },
];

export default function About() {
    return (
        <section className="py-30 max-md:py-20" id="about">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--accent-dim)] border border-[rgba(247,147,30,0.25)] rounded-full text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-5">
                        Who We Are
                    </span>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
                        Fueling the Next Generation of{' '}
                        <span className="text-[var(--accent)]">Entrepreneurs</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-250 hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[var(--accent-dim)] text-[var(--accent)] flex items-center justify-center mb-5 transition-all duration-250 group-hover:bg-[var(--accent)] group-hover:text-black">
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">{f.title}</h3>
                            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
