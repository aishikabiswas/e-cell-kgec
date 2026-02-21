import { useState } from 'react';
import { Linkedin } from 'lucide-react';
import Marquee from '../components/Marquee';

const members = [
    {
        imgurl: '/speakers/Pauline-Laravoire.jpg',
        name: 'Pauline Laravoire',
        title: 'Sustainability at Techno India Group',
        linkedinUrl: 'https://www.linkedin.com/in/paulinelaravoire',
    },
    {
        imgurl: '/speakers/Vishnu-Mohta.webp',
        name: 'Vishnu Mohta',
        title: 'Co-Founder at Hoichoi TV',
        linkedinUrl: 'https://www.linkedin.com/in/vishnumohta/',
    },
    {
        imgurl: '/speakers/Smriti-Tomar.jpg',
        name: 'Smriti Tomar',
        title: 'Co-Founder & CEO at StackWealth',
        linkedinUrl: 'https://www.linkedin.com/in/smrititomar/',
    },
    {
        imgurl: '/speakers/Pranab-Dan.jpg',
        name: 'Pranab Kumar Dan',
        title: 'Professor at IIT, Kharagpur',
        linkedinUrl: 'https://www.linkedin.com/in/pranab-dan-66a2b6134/',
    },
    {
        imgurl: '/speakers/Vivek-Dahiya.webp',
        name: 'Vivek Dahiya',
        title: 'Associate at Australian Trade Mark Attorney',
        linkedinUrl: 'https://www.linkedin.com/in/vivek-dahiya/',
    },
    {
        imgurl: '/speakers/Rajeev-YSR.jpg',
        name: 'Rajeev YSR',
        title: 'CEO at ThunderPlus',
        linkedinUrl: 'https://www.linkedin.com/in/rajeevysr/',
    },
    {
        imgurl: '/speakers/Saurabh-Jain.jpg',
        name: 'Saurabh Jain',
        title: 'Founder at Fun2Do Labs',
        linkedinUrl: 'https://www.linkedin.com/in/saurabhskj/',
    },
    {
        imgurl: '/speakers/ridhima-arora.webp',
        name: 'Ridhima Arora',
        title: 'Founder at Namhya Foods',
        linkedinUrl: 'https://www.linkedin.com/in/ridhima-arora-65b51423/',
    },
    {
        imgurl: '/speakers/paresh-gupta.jpg',
        name: 'Paresh Gupta',
        title: 'Founder & Chairman at GCEC Global Foundation',
        linkedinUrl: 'https://www.linkedin.com/in/pareshgupta1/',
    },
    {
        imgurl: '/speakers/jaya-jha.webp',
        name: 'Jaya Jha',
        title: 'Head of Product at Give',
        linkedinUrl: 'https://www.linkedin.com/in/jayajha/',
    },
    {
        imgurl: '/speakers/Arijit-Bhattacharyya.webp',
        name: 'Arijit Bhattacharyya',
        title: 'Founder & CEO at Virtualinfocom',
        linkedinUrl: 'https://www.linkedin.com/in/arijitbhattacharyya/',
    },
    {
        imgurl: '/speakers/garima-mehta.jpg',
        name: 'Garima Mehta',
        title: 'UX Lead at SilverFern',
        linkedinUrl: 'https://www.linkedin.com/in/qalamkaari-garima/',
    },
    {
        imgurl: '/speakers/Deepak-Pareek.jpg',
        name: 'Deepak Pareek',
        title: 'Co-Founder & Creative Producer at Iceberg Creations',
        linkedinUrl: 'https://www.linkedin.com/in/dkpareek/',
    },
];

function SpeakerCard({ member }: { member: typeof members[0] }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative w-[220px] shrink-0 rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-300 hover:border-[var(--accent)]/60 hover:shadow-[var(--shadow-glow)] hover:-translate-y-1"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Photo */}
            <div className="relative w-full h-[240px] overflow-hidden">
                <img
                    src={member.imgurl}
                    alt={member.name}
                    className={`w-full h-full object-cover object-top transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* LinkedIn button — only on hovered card */}
                <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-[#0077b5] text-white flex items-center justify-center transition-all duration-200 shadow-lg ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
                >
                    <Linkedin size={16} />
                </a>
            </div>

            {/* Info */}
            <div className="px-4 py-4">
                <h3 className={`text-sm font-bold leading-snug mb-1 transition-colors ${hovered ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'}`}>
                    {member.name}
                </h3>
                <p className="text-[11px] text-[var(--text-secondary)] leading-snug line-clamp-2">
                    {member.title}
                </p>
            </div>
        </div>
    );
}

export default function PastSpeakers() {
    return (
        <section className="relative py-24 bg-[var(--bg-primary)] overflow-hidden" id="past-speakers">
            {/* Ambient glow */}
            <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-[var(--accent)] opacity-[0.06] blur-[130px] pointer-events-none z-0 animate-pulse-glow" />
            <div className="absolute bottom-[-60px] left-[-80px] w-[400px] h-[300px] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[100px] pointer-events-none z-0 animate-pulse-glow [animation-direction:reverse] [animation-duration:9s]" />

            {/* Heading */}
            <div className="relative z-10 text-center mb-14 max-w-4xl mx-auto px-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--accent-dim)] border border-[rgba(247,147,30,0.25)] rounded-full text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-5">
                    Voices That Inspire
                </span>
                <h2 className="text-[clamp(2.2rem,4.5vw,3rem)] font-bold leading-tight tracking-tight text-[var(--text-primary)]">
                    Our{' '}
                    <span className="bg-gradient-to-br from-[var(--accent)] via-[#ffd700] to-[var(--accent)] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-shift">
                        Past Speakers
                    </span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] max-w-xl mx-auto">
                    Industry leaders, founders, and visionaries who've graced the E-Cell KGEC stage.
                </p>
            </div>

            <div className="relative z-10">
                <Marquee className="[--duration:35s] [--gap:1.25rem]" pauseOnHover>
                    {members.map((m, i) => (
                        <SpeakerCard key={i} member={m} />
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
