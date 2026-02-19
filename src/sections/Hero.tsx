import { useState } from 'react';
import { ArrowRight, Sparkles, X, Images, Users, ChevronRight, Linkedin } from 'lucide-react';
import Stack from '../components/Stack';
import Marquee from '../components/Marquee';
import Folder from '../components/Folder';

type ExpandedPanel = null | 'gallery' | 'team';

const galleryImages = [
    "/gallery/1.jpg",
    "/gallery/1 (1).jpg",
    "/gallery/2.jpg",
    "/gallery/2 (1).jpg",
    "/gallery/3.jpg",
    "/gallery/3 (1).jpg",
    "/gallery/4.jpg",
    "/gallery/4 (1).jpg",
    "/gallery/5.jpg",
    "/gallery/5 (1).jpg",
    "/gallery/6.jpg",
    "/gallery/6 (1).jpg",
];

const facultyMembers = [
    { name: "Dr. Sourabh Kr. Das", role: "Principal", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sourabh", linkedin: "#" },
    { name: "Prof. Dr. Santanu Das", role: "Chairman", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Santanu", linkedin: "#" },
    { name: "Dr. Sudip Kr. Adhikary", role: "Secretary", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sudip", linkedin: "#" },
    { name: "Asst. Prof. Md Iqbal Quraishi", role: "Treasurer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Iqbal", linkedin: "#" },
    { name: "Dr. Himadri Sekhar Dutta", role: "Member", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Himadri", linkedin: "#" },
    { name: "Dr. Barun Mandal", role: "Member", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Barun", linkedin: "#" },
    { name: "Dr. Biswanath Chakraborty", role: "Member", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Biswanath", linkedin: "#" },
];

const leadingMembers = [
    { name: "Sarit Paira", role: "Addl. Secretary", dept: "ECE, 4th Year", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarit", linkedin: "#" },
    { name: "Soumili Sahu", role: "Jt. Secretary", dept: "EE, 4th Year", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Soumili", linkedin: "#" },
    { name: "Rupam Mandal", role: "Jt. Secretary", dept: "ECE, 4th Year", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rupam", linkedin: "#" },
    { name: "Dyutimoy Bhuniya", role: "Jt. Secretary", dept: "IT, 4th Year", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dyutimoy", linkedin: "#" },
    { name: "Saptarshi Chatterjee", role: "Web/Tech Lead", dept: "EE, 4th Year", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Saptarshi", linkedin: "#" },
    { name: "Indrakshi Chatterjee", role: "Web/Tech Lead", dept: "EE, 4th Year", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Indrakshi", linkedin: "#" },
    { name: "Puspendu Bar", role: "PR & Spons. Head", dept: "IT, 4th Year", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Puspendu", linkedin: "#" },
    { name: "Udipta Maiti", role: "PR & Spons. Head", dept: "ME, 4th Year", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Udipta", linkedin: "#" },
    { name: "Samya Halder", role: "Design Head", dept: "ECE, 4th Year", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Samya", linkedin: "#" },
    { name: "Arghya Bala", role: "Design Head", dept: "CSE, 4th Year", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arghya", linkedin: "#" },
    { name: "Ishika Senapati", role: "Content Head", dept: "IT, 4th Year", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ishika", linkedin: "#" },
    { name: "Saikat Roy", role: "Content Head", dept: "IT, 4th Year", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Saikat", linkedin: "#" },
];

const convenors = [
    { name: "Nadira Sultana", role: "Convenor", dept: "IT, 3rd Year", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nadira", linkedin: "#" },
    { name: "Shatadru Dhar", role: "Convenor", dept: "IT, 3rd Year", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shatadru", linkedin: "#" },
    { name: "Sanjib Roy", role: "Convenor", dept: "ME, 3rd Year", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjib", linkedin: "#" },
];

const allMembers = [...facultyMembers, ...leadingMembers, ...convenors];

interface Member {
    name: string;
    role: string;
    image: string;
    linkedin: string;
    dept?: string;
}

export default function Hero() {
    const [expanded, setExpanded] = useState<ExpandedPanel>(null);
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);

    const handleExpand = (panel: ExpandedPanel) => {
        setExpanded(expanded === panel ? null : panel);
    };

    return (
        <section className="relative min-h-screen flex items-stretch overflow-hidden pt-[var(--navbar-height)]" id="hero">
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Grid overlay */}
                <div className="absolute inset-0 z-[1] hero-grid-overlay" />
                <div className="absolute w-[500px] h-[500px] rounded-full bg-[var(--accent)] top-[-150px] right-[-50px] opacity-10 blur-[120px] animate-pulse-glow" />
                <div className="absolute w-[350px] h-[350px] rounded-full bg-[var(--accent)] bottom-[-80px] left-[-30px] opacity-[0.06] blur-[120px] animate-pulse-glow [animation-direction:reverse] [animation-duration:8s]" />
            </div>

            <div className="relative z-[1] w-full pt-4 pb-4 flex flex-col max-w-[1200px] mx-auto px-6">
                {/* Bento Grid */}
                <div className="grid grid-cols-[1.4fr_1fr] grid-rows-[1fr_1fr] gap-4 flex-1 min-h-0 relative">

                    {/* === LEFT BOX — Main Content === */}
                    <div className={`row-span-2 col-span-1 rounded-3xl border border-[var(--border)] overflow-hidden relative bg-[var(--bg-card)] flex items-center p-12 transition-all duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${expanded ? 'absolute w-0 h-0 opacity-0 pointer-events-none' : ''}`}>
                        <div className="flex flex-col">
                            <div className="inline-flex items-center gap-2 px-[18px] py-2 bg-[var(--accent-dim)] border border-[rgba(247,147,30,0.25)] rounded-full text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-6 w-fit animate-fade-in-up">
                                <Sparkles size={14} />
                                Entrepreneurship Cell — KGEC
                            </div>

                            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.12] mb-[18px] animate-fade-in-up [animation-delay:0.1s]">
                                Igniting the Spirit of{' '}
                                <span className="bg-gradient-to-br from-[var(--accent)] via-[#ffd700] to-[var(--accent)] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-shift">Innovation</span>
                            </h1>

                            <p className="text-base max-w-[480px] mb-7 leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
                                Empowering students to explore startups, leadership, creativity,
                                and business innovation. We turn ideas into impactful ventures.
                            </p>

                            <div className="flex items-center gap-3.5 mb-9 animate-fade-in-up [animation-delay:0.3s] max-md:flex-col max-md:items-start">
                                <a href="#events" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-[0.95rem] rounded-full bg-[var(--accent)] text-black transition-all duration-250 hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]">
                                    Explore Events <ArrowRight size={18} />
                                </a>
                                <a href="#about" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-[0.95rem] rounded-full border-[1.5px] border-[var(--border-hover)] text-[var(--text-primary)] bg-transparent transition-all duration-250 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)]">
                                    Learn More
                                </a>
                            </div>

                            <div className="flex items-center gap-8 animate-fade-in-up [animation-delay:0.4s] max-sm:gap-5">
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[1.6rem] max-sm:text-xl font-extrabold text-[var(--accent)] tracking-tight">5+</span>
                                    <span className="text-[0.72rem] font-medium text-[var(--text-muted)] uppercase tracking-wider">Years Active</span>
                                </div>
                                <div className="w-px h-9 bg-[var(--border)]" />
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[1.6rem] max-sm:text-xl font-extrabold text-[var(--accent)] tracking-tight">300+</span>
                                    <span className="text-[0.72rem] font-medium text-[var(--text-muted)] uppercase tracking-wider">Events Hosted</span>
                                </div>
                                <div className="w-px h-9 bg-[var(--border)]" />
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[1.6rem] max-sm:text-xl font-extrabold text-[var(--accent)] tracking-tight">1000+</span>
                                    <span className="text-[0.72rem] font-medium text-[var(--text-muted)] uppercase tracking-wider">Members</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* === RIGHT TOP — Gallery Box === */}
                    <div
                        className={`rounded-3xl border overflow-hidden relative bg-[var(--accent)] border-[rgba(247,147,30,0.3)] cursor-pointer p-7 flex flex-col justify-center transition-all duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${expanded === 'gallery' ? 'col-[1/-1] row-[1/-1] z-[5] !cursor-default !p-11' : 'col-start-2 row-start-1'} ${expanded === 'team' ? 'absolute w-0 h-0 opacity-0 pointer-events-none' : ''}`}
                        onClick={() => handleExpand('gallery')}
                    >
                        {expanded === 'gallery' && (
                            <button
                                className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center bg-black/30 text-white z-10 transition-all duration-150 hover:bg-black/50 hover:scale-110 cursor-pointer"
                                onClick={(e) => { e.stopPropagation(); setExpanded(null); }}
                            >
                                <X size={20} />
                            </button>
                        )}

                        {expanded !== 'gallery' ? (
                            <div className="flex items-center gap-5 h-full animate-fade-in relative z-[1]">
                                <div className="flex-1 flex flex-col gap-2.5">
                                    <div className="w-11 h-11 rounded-xl bg-black/15 text-black flex items-center justify-center">
                                        <Images size={22} />
                                    </div>
                                    <h3 className="text-lg font-bold text-black">Event Gallery</h3>
                                    <p className="text-sm text-black/60">Relive our best moments</p>
                                    <div className="flex items-center gap-1 text-xs font-semibold text-black/70 mt-1 transition-all duration-150 group-hover:gap-2">
                                        <span>View all</span>
                                        <ChevronRight size={14} />
                                    </div>
                                </div>
                                <div className="w-[180px] h-[180px] shrink-0 relative" onClick={(e) => e.stopPropagation()}>
                                    <Stack
                                        randomRotation={false}
                                        sensitivity={200}
                                        sendToBackOnClick={true}
                                        cards={galleryImages.map((src, i) => (
                                            <img key={i} src={src} alt={`Event ${i + 1}`} className="w-full h-full object-cover" />
                                        ))}
                                        autoplay
                                        autoplayDelay={1000}
                                        pauseOnHover={false}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="animate-fade-in-up h-full flex flex-col relative z-[1] overflow-hidden">
                                <div className="flex items-center gap-3.5 mb-6">
                                    <div className="w-11 h-11 rounded-xl bg-black/15 text-black flex items-center justify-center">
                                        <Images size={22} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-black mb-0.5">Event Gallery</h3>
                                        <p className="text-base text-black/60">Highlights from our flagship events</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 flex-1 justify-center">
                                    <Marquee className="[--duration:25s] [--gap:1rem]" pauseOnHover>
                                        {galleryImages.map((src, i) => (
                                            <div key={i} className="w-[280px] h-[200px] rounded-xl overflow-hidden border-2 border-black/10 shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer">
                                                <img src={src} alt={`Event ${i + 1}`} className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </Marquee>
                                    <Marquee className="[--duration:30s] [--gap:1rem]" reverse pauseOnHover>
                                        {[...galleryImages].reverse().map((src, i) => (
                                            <div key={i} className="w-[280px] h-[200px] rounded-xl overflow-hidden border-2 border-black/10 shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer">
                                                <img src={src} alt={`Event ${i + 1}`} className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </Marquee>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* === RIGHT BOTTOM — Team Box === */}
                    <div
                        className={`rounded-3xl border border-[var(--border)] relative bg-[var(--bg-secondary)] cursor-pointer p-7 flex flex-col justify-center transition-all duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${expanded === 'team' ? 'col-[1/-1] row-[1/-1] z-[5] !cursor-default !p-11' : 'col-start-2 row-start-2'} ${expanded === 'gallery' ? 'absolute w-0 h-0 opacity-0 pointer-events-none' : ''}`}
                        onClick={() => handleExpand('team')}
                    >
                        {expanded === 'team' && (
                            <button
                                className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center bg-[var(--border)] text-[var(--text-primary)] z-10 transition-all duration-150 hover:bg-[var(--border-hover)] hover:scale-110 cursor-pointer"
                                onClick={(e) => { e.stopPropagation(); setExpanded(null); }}
                            >
                                <X size={20} />
                            </button>
                        )}

                        {expanded !== 'team' ? (
                            <div className="flex items-center justify-between h-full w-full relative z-[1]">
                                {/* Left Content */}
                                <div className="flex flex-col gap-3.5 flex-1 min-w-0">
                                    <div className="w-11 h-11 rounded-xl bg-[var(--accent-dim)] text-[var(--accent)] flex items-center justify-center">
                                        <Users size={22} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-0.5">Our Team</h3>
                                        <p className="text-sm text-[var(--text-secondary)]">Meet the changemakers</p>
                                    </div>
                                    <div className="flex items-center">
                                        {allMembers.slice(0, 4).map((m, i) => (
                                            <div key={i} className="w-9 h-9 rounded-full bg-cover bg-center border-2 border-[var(--bg-secondary)] -ml-2 first:ml-0" style={{ backgroundImage: `url(${m.image})`, zIndex: 10 - i }}>
                                            </div>
                                        ))}
                                        <span className="text-xs font-semibold text-[var(--text-muted)] ml-2.5">+{allMembers.length - 4} more</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs font-semibold text-[var(--text-muted)] mt-1">
                                        <span>Meet all</span>
                                        <ChevronRight size={14} />
                                    </div>
                                </div>

                                {/* Right Content: Folder */}
                                <div className="mr-8 shrink-0 relative mt-[-10px]" onClick={(e) => e.stopPropagation()}>
                                    <Folder
                                        color="#F7931E"
                                        size={1.1}
                                        items={[
                                            <div className="w-full h-full flex items-center justify-center bg-white rounded-lg border border-gray-200">
                                                <span className="text-[10px] font-bold text-black uppercase tracking-wider text-center px-1">Faculty<br />Body</span>
                                            </div>,
                                            <div className="w-full h-full flex items-center justify-center bg-white rounded-lg border border-gray-200">
                                                <span className="text-[10px] font-bold text-black uppercase tracking-wider text-center px-1">Convenors</span>
                                            </div>,
                                            <div className="w-full h-full flex items-center justify-center bg-white rounded-lg border border-gray-200">
                                                <span className="text-[10px] font-bold text-black uppercase tracking-wider text-center px-1">Leading<br />Members</span>
                                            </div>,
                                        ]}
                                    />
                                    <div className="absolute top-[110%] left-0 right-0 text-center pointer-events-none whitespace-nowrap">
                                        <span className="text-[10px] font-medium text-[var(--text-muted)] opacity-60">View Cards</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="animate-fade-in-up h-full flex flex-col relative z-[1]">
                                <div className="flex items-center gap-3.5 mb-7">
                                    <div className="w-11 h-11 rounded-xl bg-[var(--accent-dim)] text-[var(--accent)] flex items-center justify-center">
                                        <Users size={22} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-0.5">Our Team</h3>
                                        <p className="text-base text-[var(--text-secondary)]">The people behind E-Cell KGEC</p>
                                    </div>
                                </div>
                                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-8 pb-4">
                                    {/* Faculty Section */}
                                    <div>
                                        <h4 className="text-xl font-bold text-[var(--accent)] mb-4 sticky top-0 bg-[var(--bg-card)] py-2 z-10 border-b border-[var(--border)] shadow-sm">Faculty Body</h4>
                                        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                                            {facultyMembers.map((m, i) => (
                                                <div
                                                    key={i}
                                                    onClick={(e) => { e.stopPropagation(); setSelectedMember(m); }}
                                                    className="flex gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] transition-all hover:border-[var(--accent)] hover:shadow-[var(--shadow-glow)] items-center cursor-pointer group"
                                                >
                                                    <div className="w-12 h-12 rounded-full bg-cover bg-center shrink-0 border border-[var(--border)] group-hover:scale-105 transition-transform" style={{ backgroundImage: `url(${m.image})` }}></div>
                                                    <div className="min-w-0">
                                                        <h5 className="text-sm font-bold text-[var(--text-primary)] truncate" title={m.name}>{m.name}</h5>
                                                        <p className="text-xs font-medium text-[var(--accent)] truncate">{m.role}</p>
                                                        <div className="text-[var(--text-muted)] mt-1 group-hover:text-[#0077b5] transition-colors">
                                                            <Linkedin size={14} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Leading Members Section */}
                                    <div>
                                        <h4 className="text-xl font-bold text-[var(--accent)] mb-4 sticky top-0 bg-[var(--bg-card)] py-2 z-10 border-b border-[var(--border)] shadow-sm">Leading Members</h4>
                                        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                                            {leadingMembers.map((m, i) => (
                                                <div
                                                    key={i}
                                                    onClick={(e) => { e.stopPropagation(); setSelectedMember(m); }}
                                                    className="flex gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] transition-all hover:border-[var(--accent)] hover:shadow-[var(--shadow-glow)] items-center cursor-pointer group"
                                                >
                                                    <div className="w-12 h-12 rounded-full bg-cover bg-center shrink-0 border border-[var(--border)] group-hover:scale-105 transition-transform" style={{ backgroundImage: `url(${m.image})` }}></div>
                                                    <div className="min-w-0">
                                                        <h5 className="text-sm font-bold text-[var(--text-primary)] truncate" title={m.name}>{m.name}</h5>
                                                        <p className="text-xs font-medium text-[var(--accent)] truncate">{m.role}</p>
                                                        <p className="text-[10px] text-[var(--text-secondary)] truncate">{m.dept}</p>
                                                        <div className="text-[var(--text-muted)] mt-1 group-hover:text-[#0077b5] transition-colors">
                                                            <Linkedin size={14} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Convenors Section */}
                                    <div>
                                        <h4 className="text-xl font-bold text-[var(--accent)] mb-4 sticky top-0 bg-[var(--bg-card)] py-2 z-10 border-b border-[var(--border)] shadow-sm">Convenors</h4>
                                        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                                            {convenors.map((m, i) => (
                                                <div
                                                    key={i}
                                                    onClick={(e) => { e.stopPropagation(); setSelectedMember(m); }}
                                                    className="flex gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] transition-all hover:border-[var(--accent)] hover:shadow-[var(--shadow-glow)] items-center cursor-pointer group"
                                                >
                                                    <div className="w-12 h-12 rounded-full bg-cover bg-center shrink-0 border border-[var(--border)] group-hover:scale-105 transition-transform" style={{ backgroundImage: `url(${m.image})` }}></div>
                                                    <div className="min-w-0">
                                                        <h5 className="text-sm font-bold text-[var(--text-primary)] truncate" title={m.name}>{m.name}</h5>
                                                        <p className="text-xs font-medium text-[var(--accent)] truncate">{m.role}</p>
                                                        <p className="text-[10px] text-[var(--text-secondary)] truncate">{m.dept}</p>
                                                        <div className="text-[var(--text-muted)] mt-1 group-hover:text-[#0077b5] transition-colors">
                                                            <Linkedin size={14} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Profile Modal */}
            {selectedMember && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
                    onClick={() => setSelectedMember(null)}
                >
                    <div
                        className="relative w-full max-w-sm bg-[var(--bg-card)] border border-[var(--accent)] rounded-3xl p-8 shadow-2xl animate-scale-up"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-2"
                            onClick={() => setSelectedMember(null)}
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            <div
                                className="w-32 h-32 rounded-full bg-cover bg-center border-4 border-[var(--bg-secondary)] shadow-xl mb-6"
                                style={{ backgroundImage: `url(${selectedMember.image})` }}
                            />

                            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{selectedMember.name}</h3>
                            <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-dim)] border border-[rgba(247,147,30,0.3)] mb-4">
                                <span className="text-sm font-bold text-[var(--accent)] uppercase tracking-wide">{selectedMember.role}</span>
                            </div>

                            {(selectedMember as any).dept && (
                                <p className="text-[var(--text-secondary)] font-medium mb-6">{(selectedMember as any).dept}</p>
                            )}

                            <a
                                href={selectedMember.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0077b5] text-white font-semibold transition-all hover:bg-[#006396] hover:scale-105 hover:shadow-lg"
                            >
                                <Linkedin size={20} />
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section >
    );
}
