import { useState, useEffect } from 'react';
import { ChevronDown, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const navItems = [
  {
    label: 'About',
    dropdown: [
      { label: 'Our Story', href: '#about' },
      { label: 'Mission & Vision', href: '#about' },
    ],
  },
  {
    label: 'Events',
    dropdown: [
      { label: 'Upcoming Events', href: '#events' },
      { label: 'Past Events', href: '#events' },
      { label: 'Workshops', href: '#events' },
    ],
  },
  {
    label: 'Team',
    dropdown: [
      { label: 'Core Team', href: '#team' },
      { label: 'Alumni', href: '#team' },
    ],
  },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 h-[72px] z-[1000] flex items-center transition-all duration-250 ease-in-out ${scrolled ? 'bg-[var(--bg-navbar)] backdrop-blur-[20px] border-b border-[var(--glass-border)]' : ''}`}>
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-6">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 font-bold text-lg tracking-tight text-[var(--text-primary)] z-[1001]">
          <div className="w-9 h-9 rounded-full bg-[var(--accent)] flex items-center justify-center font-extrabold text-sm text-black">
            E
          </div>
          <span>E-Cell <span className="text-[var(--accent)]">KGEC</span></span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href || '#'}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[var(--text-secondary)] rounded-lg transition-all duration-150 ease-in-out hover:text-[var(--text-primary)] cursor-pointer"
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-150 group-hover:rotate-180" />
                )}
              </a>

              {item.dropdown && (
                <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 min-w-[220px] bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-2 opacity-0 invisible -translate-y-1.5 transition-all duration-150 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 shadow-[var(--shadow-lg)]">
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="block px-3.5 py-2.5 text-sm font-normal text-[var(--text-secondary)] rounded-lg transition-all duration-150 hover:bg-[var(--accent-dim)] hover:text-[var(--accent)]"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 z-[1001]">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border)] text-[var(--text-secondary)] transition-all duration-150 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)] bg-transparent"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2.5 text-sm font-semibold bg-[var(--accent)] text-black rounded-full transition-all duration-250 hover:bg-[var(--accent-hover)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5"
          >
            Join Us
          </a>

          {/* Hamburger */}
          <button
            className="flex md:hidden flex-col gap-[5px] w-6 cursor-pointer z-[1001]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-full bg-[var(--text-primary)] rounded-sm transition-all duration-250 ${mobileOpen ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''}`} />
            <span className={`block h-0.5 w-full bg-[var(--text-primary)] rounded-sm transition-all duration-250 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-full bg-[var(--text-primary)] rounded-sm transition-all duration-250 ${mobileOpen ? '-rotate-45 translate-x-[5px] -translate-y-[5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-[var(--bg-primary)] z-[1000] pt-[92px] px-6 pb-6 overflow-y-auto animate-fade-in md:hidden">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-[var(--border)]">
              <a
                href={item.href || '#'}
                className="flex items-center justify-between py-4 text-lg font-medium text-[var(--text-primary)] cursor-pointer"
                onClick={() => !item.dropdown && setMobileOpen(false)}
              >
                {item.label}
                {item.dropdown && <ChevronDown size={18} />}
              </a>
              {item.dropdown && (
                <div className="pl-4 pb-3">
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="block py-2.5 text-base text-[var(--text-secondary)] hover:text-[var(--accent)]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
