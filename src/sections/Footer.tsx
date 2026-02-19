import { Github, Linkedin, Instagram, Twitter, ArrowUpRight } from 'lucide-react';

const footerLinks = {
    'Quick Links': [
        { label: 'Home', href: '#hero' },
        { label: 'About', href: '#about' },
        { label: 'Events', href: '#events' },
        { label: 'Team', href: '#team' },
        { label: 'Contact', href: '#contact' },
    ],
    'Resources': [
        { label: 'Startup Guide', href: '#' },
        { label: 'Mentorship Program', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Newsletter', href: '#' },
    ],
    'Connect': [
        { label: 'KGEC Official', href: 'https://kgec.edu.in', external: true },
        { label: 'LinkedIn', href: '#', external: true },
        { label: 'Instagram', href: '#', external: true },
        { label: 'GitHub', href: '#', external: true },
    ],
};

const socialLinks = [
    { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
    { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
    { icon: <Github size={18} />, href: '#', label: 'GitHub' },
];

export default function Footer() {
    return (
        <footer className="pt-20 pb-8 border-t border-[var(--border)] bg-[var(--bg-primary)]">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center font-extrabold text-lg text-black">
                                E
                            </div>
                            <span className="text-lg font-bold text-[var(--text-primary)]">
                                E-Cell <span className="text-[var(--accent)]">KGEC</span>
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-6 max-w-xs">
                            Empowering innovation, leadership, and startup culture at
                            Kalyani Government Engineering College.
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] transition-all duration-150 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)]"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-5">{title}</h4>
                            <ul className="flex flex-col gap-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="inline-flex items-center gap-1 text-sm text-[var(--text-secondary)] transition-colors duration-150 hover:text-[var(--accent)]"
                                            target={(link as any).external ? '_blank' : undefined}
                                        >
                                            {link.label}
                                            {(link as any).external && <ArrowUpRight size={12} />}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--border)]">
                    <p className="text-xs text-[var(--text-muted)]">© {new Date().getFullYear()} E-Cell KGEC. All rights reserved.</p>
                    <p className="text-xs text-[var(--text-muted)]">Built with ❤️ by the E-Cell Tech Team</p>
                </div>
            </div>
        </footer>
    );
}
