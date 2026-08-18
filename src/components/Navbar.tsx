import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Menu, 
  X, 
  Terminal, 
  FileText, 
  Github, 
  Mail, 
  GraduationCap, 
  Code2, 
  Briefcase, 
  Sparkles 
} from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
  onOpenProfile?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenTerminal, onOpenProfile }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: GraduationCap },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'GitHub', href: '#github', icon: Github },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Identity - Click to Open Profile Modal */}
          <button 
            type="button"
            onClick={onOpenProfile}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl p-1.5 hover:bg-slate-900/60 transition-all text-left cursor-pointer"
            id="brand-logo-btn"
            title="Click to view full photo and profile"
          >
            <div className="relative w-10 h-10 rounded-2xl overflow-hidden border border-indigo-500/40 bg-slate-900 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-900/30 group-hover:scale-105 group-hover:border-indigo-400 transition-all">
              <img 
                src={PERSONAL_INFO.avatarUrl} 
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="font-mono text-base font-extrabold tracking-tighter bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 w-full h-full flex items-center justify-center -z-10 absolute inset-0">
                MB
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-base tracking-tight group-hover:text-indigo-400 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 text-slate-300 border border-slate-700/80 group-hover:border-emerald-500/40 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mr-1.5" />
                  Available
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium group-hover:text-slate-300 transition-colors">
                B.Sc. Information Systems • <span className="text-indigo-400 font-semibold">View Bio</span>
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 border border-slate-800 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-slate-400 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-slate-800 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Tools */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenTerminal}
              title="Open Interactive Terminal"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all hover:text-indigo-400 hover:border-indigo-500/40"
              id="open-terminal-btn"
            >
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              <span>CLI</span>
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-md shadow-indigo-900/30 transition-all hover:scale-105 active:scale-95 border border-indigo-400/20"
              id="view-resume-btn"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-100" />
              <span>Resume</span>
            </button>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all"
              aria-label="GitHub Profile"
              id="github-profile-nav-link"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenTerminal}
              className="p-2 text-slate-300 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono"
              aria-label="Interactive Terminal"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

          {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-slate-900/98 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5 mb-4">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 text-sm font-medium transition-colors"
                  >
                    <IconComponent className="w-4 h-4 text-indigo-400" />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              {onOpenProfile && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenProfile();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-medium transition-colors border border-indigo-500/30 text-indigo-200"
                >
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span>About Developer &amp; Photo</span>
                </button>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl text-sm transition-colors shadow-lg shadow-indigo-900/30"
              >
                <FileText className="w-4 h-4" />
                <span>View Full CV & Resume</span>
              </button>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-medium transition-colors border border-slate-700"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub (@{PERSONAL_INFO.githubUsername})</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
