import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const events = [
    { title: 'Startup Weekend 2025', date: 'March 15-17, 2025', location: 'KGEC Auditorium', type: 'Hackathon', color: '#F7931E' },
    { title: 'Innovation Summit', date: 'April 5, 2025', location: 'Main Seminar Hall', type: 'Conference', color: '#ffd700' },
    { title: 'Pitch Perfect', date: 'April 20, 2025', location: 'Virtual', type: 'Competition', color: '#F7931E' },
    { title: 'E-Talk: Founders', date: 'May 10, 2025', location: 'KGEC Campus', type: 'Talk Series', color: '#ffd700' },
    { title: 'Ideathon 2025', date: 'June 1-2, 2025', location: 'Innovation Lab', type: 'Ideation', color: '#F7931E' },
    { title: 'AI & Business Workshop', date: 'June 15, 2025', location: 'CS Department', type: 'Workshop', color: '#ffd700' },
];

export default function Events() {
    return (
        <section className="py-30 max-md:py-20 bg-[var(--bg-secondary)]" id="events">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--accent-dim)] border border-[rgba(247,147,30,0.25)] rounded-full text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-5">
                        What's Happening
                    </span>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
                        Upcoming <span className="text-[var(--accent)]">Events</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((e, i) => (
                        <div
                            key={i}
                            className="p-7 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-250 hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] group"
                        >
                            <span
                                className="inline-block px-3 py-1 rounded-full text-[0.7rem] font-semibold uppercase tracking-wider mb-4"
                                style={{ background: `${e.color}20`, color: e.color }}
                            >
                                {e.type}
                            </span>
                            <h3 className="text-lg font-bold mb-4 text-[var(--text-primary)]">{e.title}</h3>
                            <div className="flex flex-col gap-2 mb-5">
                                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                                    <Calendar size={14} className="text-[var(--accent)]" />
                                    {e.date}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                                    <MapPin size={14} className="text-[var(--accent)]" />
                                    {e.location}
                                </div>
                            </div>
                            <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent)] transition-all duration-150 hover:gap-2">
                                Learn more <ArrowRight size={14} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
