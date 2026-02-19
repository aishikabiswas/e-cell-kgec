import { Linkedin, Github, Twitter } from 'lucide-react';

const teamMembers = [
    { name: 'Arjun Mehta', role: 'President', initials: 'AM' },
    { name: 'Sneha Roy', role: 'Vice President', initials: 'SR' },
    { name: 'Rahul Das', role: 'Tech Lead', initials: 'RD' },
    { name: 'Priya Sharma', role: 'Events Head', initials: 'PS' },
    { name: 'Ankit Gupta', role: 'Marketing Lead', initials: 'AG' },
    { name: 'Isha Banerjee', role: 'Content Head', initials: 'IB' },
];

export default function Team() {
    return (
        <section className="py-30 max-md:py-20" id="team">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--accent-dim)] border border-[rgba(247,147,30,0.25)] rounded-full text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-5">
                        The Crew
                    </span>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
                        Meet Our <span className="text-[var(--accent)]">Team</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((m, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center text-center p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-250 hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] group"
                        >
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--accent)] to-[#ffd700] text-black text-xl font-extrabold flex items-center justify-center mb-5 transition-transform duration-250 group-hover:scale-110">
                                {m.initials}
                            </div>
                            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{m.name}</h3>
                            <span className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-4">{m.role}</span>
                            <div className="flex items-center gap-3">
                                {[Linkedin, Github, Twitter].map((Icon, j) => (
                                    <a
                                        key={j}
                                        href="#"
                                        className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] transition-all duration-150 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)]"
                                    >
                                        <Icon size={14} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
