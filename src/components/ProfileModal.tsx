import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO, SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  X, 
  GraduationCap, 
  Mail, 
  Github, 
  MapPin, 
  Download, 
  Terminal, 
  Check, 
  Copy, 
  ExternalLink,
  ShieldCheck, 
  Smartphone, 
  Database, 
  Layers, 
  Code2,
  Sparkles,
  Maximize2
} from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume?: () => void;
  onOpenTerminal?: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenTerminal,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isZoomed, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="profile-spotlight-modal" className="no-print fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md -z-10"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl shadow-indigo-950/50 overflow-hidden flex flex-col my-auto max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
            id="profile-spotlight-modal"
          >
            {/* Ambient Background Lights */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/15 blur-[100px] pointer-events-none rounded-full" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/15 blur-[100px] pointer-events-none rounded-full" />

            {/* Header / Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-sm z-10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
                  Developer Profile &amp; Bio
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors border border-slate-800"
                aria-label="Close profile modal"
                id="close-profile-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 z-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Big Frame Portrait Photo */}
                <div className="md:col-span-5 flex flex-col items-center">
                  <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-indigo-500/40 shadow-2xl shadow-indigo-950/60 group bg-slate-950">
                    <img
                      src={PERSONAL_INFO.avatarUrl}
                      alt={PERSONAL_INFO.name}
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        isZoomed ? 'scale-125' : 'group-hover:scale-105'
                      }`}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 pointer-events-none" />

                    {/* Expand / Zoom Toggle Button */}
                    <button
                      onClick={() => setIsZoomed(!isZoomed)}
                      className="absolute top-3 right-3 p-2 rounded-xl bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700/80 backdrop-blur-md transition-all shadow-md"
                      title={isZoomed ? 'Reset zoom' : 'Zoom in photo'}
                      aria-label="Toggle photo zoom"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>

                    {/* Verified Status Tag on Photo */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-white leading-tight">Matiyos Bizuneh</p>
                          <p className="text-[10px] text-indigo-300 font-mono">Haramaya University</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        Verified
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 font-mono mt-3 text-center">
                    Tap photo zoom icon to toggle portrait frame scale
                  </p>
                </div>

                {/* Right Column: Detailed Story & Specializations */}
                <div className="md:col-span-7 space-y-6">
                  
                  {/* Name & Academic Credentials */}
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Haramaya University Graduate</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {PERSONAL_INFO.name}
                    </h2>

                    <p className="text-sm font-bold text-indigo-300 font-mono">
                      {PERSONAL_INFO.degree}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{PERSONAL_INFO.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-emerald-400 font-medium">{PERSONAL_INFO.availabilityStatus}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio Narrative */}
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
                      About Me &amp; Philosophy
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {PERSONAL_INFO.bio}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      With formal education in Information Systems, I bridge the gap between business processes and technical architecture—delivering robust, high-performance mobile apps with <strong className="text-white">Flutter &amp; Dart</strong>, normalized database architectures in <strong className="text-white">SQL/PostgreSQL</strong>, and responsive web platforms in <strong className="text-white">React &amp; TypeScript</strong>.
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800 flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white truncate">Flutter / Dart</p>
                        <p className="text-[10px] text-slate-400">Mobile Engineering</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800 flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                        <Database className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white truncate">Database Design</p>
                        <p className="text-[10px] text-slate-400">SQL / Normalization</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800 flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white truncate">Systems Analysis</p>
                        <p className="text-[10px] text-slate-400">SDLC &amp; Architecture</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800 flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white truncate">Full-Stack Web</p>
                        <p className="text-[10px] text-slate-400">React &amp; Node.js</p>
                      </div>
                    </div>
                  </div>

                  {/* Actions & Contact */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {onOpenResume && (
                      <button
                        onClick={() => {
                          onClose();
                          onOpenResume();
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs shadow-lg shadow-indigo-950/50 transition-all hover:scale-105"
                        id="profile-modal-view-cv-btn"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>View Resume / CV</span>
                      </button>
                    )}

                    {onOpenTerminal && (
                      <button
                        onClick={() => {
                          onClose();
                          onOpenTerminal();
                        }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono transition-colors"
                        title="Interactive CLI Terminal"
                        id="profile-modal-open-terminal-btn"
                      >
                        <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Open CLI</span>
                      </button>
                    )}

                    <a
                      href={PERSONAL_INFO.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono transition-colors"
                      id="profile-modal-github-link"
                    >
                      <Github className="w-3.5 h-3.5 text-slate-400" />
                      <span>@{PERSONAL_INFO.githubUsername}</span>
                    </a>

                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono transition-colors"
                      title="Copy Email"
                      id="profile-modal-copy-email-btn"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-sans font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{PERSONAL_INFO.email}</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
