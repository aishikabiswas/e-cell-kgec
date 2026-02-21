import { Mail, Send, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <section className="relative py-30 max-md:py-20 bg-[var(--bg-secondary)] overflow-hidden" id="contact">
            {/* Ambient glow */}
            <div className="absolute -top-32 left-[-60px] w-[500px] h-[400px] rounded-full bg-[var(--accent)] opacity-[0.07] blur-[120px] pointer-events-none z-0 animate-pulse-glow" />
            <div className="absolute bottom-[-80px] right-[-40px] w-[350px] h-[280px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[100px] pointer-events-none z-0 animate-pulse-glow [animation-direction:reverse] [animation-duration:8s]" />
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Info */}
                    <div>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--accent-dim)] border border-[rgba(247,147,30,0.25)] rounded-full text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-5">
                            Get In Touch
                        </span>
                        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight mb-5">
                            Let's Build Something <span className="text-[var(--accent)]">Together</span>
                        </h2>
                        <p className="text-base leading-relaxed text-[var(--text-secondary)] mb-8">
                            Have a startup idea? Want to collaborate on an event? Or just want to be
                            part of the E-Cell community? We'd love to hear from you.
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                                <Mail size={18} className="text-[var(--accent)]" />
                                <span>ecell@kgec.edu.in</span>
                            </div>
                            <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                                <MapPin size={18} className="text-[var(--accent)]" />
                                <span>Kalyani Government Engineering College, Kalyani, West Bengal</span>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-5 py-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-all duration-150 focus:outline-none focus:border-[var(--accent)] focus:shadow-[var(--shadow-glow)] text-sm"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-5 py-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-all duration-150 focus:outline-none focus:border-[var(--accent)] focus:shadow-[var(--shadow-glow)] text-sm"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="w-full px-5 py-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-all duration-150 focus:outline-none focus:border-[var(--accent)] focus:shadow-[var(--shadow-glow)] text-sm resize-none font-[inherit]"
                        />
                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold text-[0.95rem] rounded-full bg-[var(--accent)] text-black transition-all duration-250 hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
                        >
                            Send Message <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
