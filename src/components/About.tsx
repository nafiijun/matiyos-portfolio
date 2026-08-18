import React from 'react';
import { PERSONAL_INFO, EDUCATION_DATA } from '../data/portfolioData';
import { 
  GraduationCap, 
  Layers, 
  Smartphone, 
  Database, 
  Code2, 
  CheckCircle2, 
  Briefcase, 
  ShieldCheck, 
  Cpu, 
  Sparkles 
} from 'lucide-react';

interface AboutProps {
  onOpenProfile?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenProfile }) => {
  const pillars = [
    {
      title: 'Information Systems Architecture',
      description: 'Trained at Haramaya University to analyze complex organizational workflows, design robust data pipelines, and architect information systems that scale efficiently.',
      icon: Layers,
      badge: 'Academic Foundation'
    },
    {
      title: 'Mobile App Engineering (Flutter)',
      description: 'Specialized in building performant, pixel-perfect Android & iOS apps using Flutter and Dart with clean architecture, offline state management, and real-time syncing.',
      icon: Smartphone,
      badge: 'Mobile Core'
    },
    {
      title: 'Relational Database Architecture',
      description: 'Expertise in conceptual, logical, and physical database modeling. Skilled with PostgreSQL, MySQL, normalization rules, and query optimization for high-throughput loads.',
      icon: Database,
      badge: 'Data Core'
    },
    {
      title: 'Modern Full-Stack Development',
      description: 'Building modern web applications with React, TypeScript, Node.js, Express, and Tailwind CSS, focusing on maintainable code and exceptional developer experience.',
      icon: Code2,
      badge: 'Web Stack'
    }
  ];

  const competencies = [
    { label: 'Database Management & Modeling', percent: 95 },
    { label: 'Systems Analysis & Design (UML/SDLC)', percent: 92 },
    { label: 'Full-Stack Software Development', percent: 88 },
    { label: 'Mobile Architecture (Flutter/Dart)', percent: 90 },
    { label: 'Cloud & API Integration', percent: 85 }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background & Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            About Matiyos Bizuneh
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Information Systems graduate from Haramaya University who blends rigorous systems engineering with modern mobile and full-stack software development.
          </p>
        </div>

        {/* Narrative & Profile Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Story Card */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-indigo-950/20">
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <div className="flex items-center gap-4 pb-4 border-b border-slate-800">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-indigo-500/40 shadow-lg shadow-indigo-900/30 shrink-0">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg sm:text-xl">
                    Haramaya University Graduate — B.Sc. in Information Systems
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-400 font-semibold">
                    Faculty of Computing &amp; Informatics • Haramaya, Ethiopia
                  </p>
                </div>
              </div>

              <p>
                My educational journey at <strong className="text-white">Haramaya University</strong> provided a solid grounding in the full spectrum of computing: from 
                <strong className="text-slate-100"> Systems Analysis and Design</strong>, <strong className="text-slate-100">Advanced Database Management</strong>, and <strong className="text-slate-100">Computer Networks</strong> to modern <strong className="text-slate-100">Software Engineering</strong> and <strong className="text-slate-100">Mobile Computing</strong>.
              </p>

              <p>
                Unlike purely theoretical tracks, the Information Systems discipline taught me to view software not merely as lines of code, but as 
                <strong className="text-indigo-300"> mission-critical enterprise assets</strong>. I focus on understanding user requirements deeply, eliminating workflow bottlenecks, and structuring reliable data models before writing code.
              </p>

              <p>
                Over the years, I have honed my skills building cross-platform mobile solutions using <strong className="text-white">Flutter and Dart</strong>, 
                architecting scalable REST APIs with <strong className="text-white">Node.js</strong>, and creating responsive web applications in <strong className="text-white">React and TypeScript</strong>.
              </p>
            </div>

            {/* Checklist of Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-800">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">User-Centric & Accessible UX Architecture</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">Normalized & High-Performance Relational DBs</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">Flutter Mobile Apps with 60 FPS Fluidity</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">Strict Adherence to SDLC & Clean Architecture</span>
              </div>
            </div>
          </div>

          {/* Competency Matrix & Profile Summary Sidecard */}
          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl space-y-6">
            {/* Profile Avatar Card - Clickable to open Profile Frame */}
            <button
              type="button"
              onClick={onOpenProfile}
              className="w-full flex items-center gap-4 p-4 rounded-2xl bg-slate-950 hover:bg-slate-950/80 border border-slate-800 hover:border-indigo-500/40 transition-all text-left group cursor-pointer"
              title="Click to view full photo and profile"
              id="about-profile-card-btn"
            >
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-indigo-500/50 group-hover:border-indigo-400 group-hover:scale-105 transition-all shadow-md shadow-indigo-950/50 shrink-0">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-white text-base truncate group-hover:text-indigo-300 transition-colors">{PERSONAL_INFO.name}</h4>
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" title="Verified Graduate" />
                </div>
                <p className="text-xs text-indigo-400 font-semibold truncate">B.Sc. Information Systems</p>
                <p className="text-[11px] text-slate-400 font-mono mt-0.5 flex items-center justify-between">
                  <span>Haramaya University</span>
                  <span className="text-indigo-400 underline decoration-indigo-500/40">View Bio</span>
                </p>
              </div>
            </button>

            <div>
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest font-bold">
                Core Competency Matrix
              </span>
              <h3 className="text-xl font-extrabold text-white mt-1 mb-4">
                Domain Proficiencies
              </h3>

              {/* Progress bars */}
              <div className="space-y-4">
                {competencies.map((c, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-300">{c.label}</span>
                      <span className="text-indigo-400 font-bold font-mono">{c.percent}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" 
                        style={{ width: `${c.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
              <span className="font-medium">Open to Full-Stack Developer, Flutter Engineer &amp; IS Specialist positions.</span>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900 hover:bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 group-hover:bg-indigo-600/20 flex items-center justify-center text-indigo-400 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                    {pillar.badge}
                  </span>
                </div>
                
                <h3 className="font-bold text-white text-base mb-2 group-hover:text-indigo-300 transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
