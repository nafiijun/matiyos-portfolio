import React, { useState } from 'react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILL_CATEGORIES, PROJECTS, EXPERIENCE_TIMELINE } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  Mail, 
  Github, 
  MapPin, 
  GraduationCap, 
  Award,
  ExternalLink 
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textCV = `
${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | GitHub: ${PERSONAL_INFO.githubUrl}
Location: ${PERSONAL_INFO.location}

EDUCATION:
${EDUCATION_DATA.institution} - ${EDUCATION_DATA.degree} in ${EDUCATION_DATA.field}
Status: ${EDUCATION_DATA.status} | Location: ${EDUCATION_DATA.location}
Key Courses: ${EDUCATION_DATA.keyCourses.join(', ')}

CORE SKILLS:
- Mobile: Flutter, Dart, Android & iOS architecture, State Management (Bloc/Provider)
- Web & Frontend: React, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5/CSS3
- Backend & DB: Node.js, Express, PostgreSQL, MySQL, SQLite, Firebase Firestore, REST APIs
- Information Systems: Systems Analysis & Design, UML Modeling, Relational ERD, SDLC (Agile/Scrum)

FEATURED PROJECTS:
${PROJECTS.map(p => `- ${p.title}: ${p.tagline} (Tech: ${p.tags.join(', ')})`).join('\n')}

EXPERIENCE:
${EXPERIENCE_TIMELINE.map(e => `${e.role} at ${e.company} (${e.period})\n${e.bullets.map(b => `  * ${b}`).join('\n')}`).join('\n\n')}
    `.trim();

    navigator.clipboard.writeText(textCV);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="resume-modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="resume-modal-container relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col print:overflow-visible print:max-h-none print:border-none print:shadow-none print:rounded-none print:bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="no-print p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between gap-4 bg-slate-950">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-indigo-400" />
            <h3 className="text-base sm:text-lg font-black text-white">
              Curriculum Vitae / Resume — Matiyos Bizuneh
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700"
              title="Copy plain text CV"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-indigo-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl transition-colors shadow-lg shadow-indigo-900/30 border border-indigo-400/20"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors ml-1 border border-slate-800"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div id="resume-printable-area" className="p-6 sm:p-10 overflow-y-auto print:overflow-visible space-y-7 bg-slate-950 print:bg-white text-slate-200 print:text-slate-900">
          
          {/* Header */}
          <div className="print-section border-b border-slate-800 pb-5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-indigo-500/40 shadow-lg shadow-indigo-900/30 shrink-0">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h1 className="print-title text-2xl sm:text-3xl font-black text-white">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="print-subtitle text-sm sm:text-base font-bold text-indigo-400 mt-0.5">
                    {PERSONAL_INFO.title}
                  </p>
                </div>
              </div>

              <div className="print-muted text-xs space-y-1 text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-indigo-400" />
                  <span>github.com/{PERSONAL_INFO.githubUsername}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education Section */}
          <div className="print-section space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold border-b border-slate-800 pb-1">
              Education &amp; Degree
            </h2>
            <div className="print-card bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="print-title font-bold text-white text-sm sm:text-base">
                    {EDUCATION_DATA.institution}
                  </h3>
                  <p className="print-subtitle text-xs sm:text-sm text-indigo-300 font-medium">
                    {EDUCATION_DATA.degree} in {EDUCATION_DATA.field}
                  </p>
                </div>
                <span className="print-muted text-xs font-mono text-slate-400">
                  {EDUCATION_DATA.location} • {EDUCATION_DATA.status}
                </span>
              </div>
              <p className="text-xs text-slate-300">
                <strong>Key Coursework:</strong> {EDUCATION_DATA.keyCourses.join(', ')}.
              </p>
              <p className="print-muted text-xs text-slate-400">
                <strong>Capstone Project:</strong> {EDUCATION_DATA.capstoneProject.title} — {EDUCATION_DATA.capstoneProject.description}
              </p>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="print-section space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold border-b border-slate-800 pb-1">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="print-card p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="print-title font-bold text-white block mb-1">Mobile &amp; Web Engineering:</span>
                <span className="text-slate-300">Flutter, Dart, React, TypeScript, JavaScript (ES6+), Tailwind CSS, State Management (Bloc/Provider).</span>
              </div>

              <div className="print-card p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="print-title font-bold text-white block mb-1">Databases &amp; Backend:</span>
                <span className="text-slate-300">Node.js, Express, PostgreSQL, MySQL, SQLite, Firebase Firestore, RESTful APIs, Query Optimization.</span>
              </div>

              <div className="print-card p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="print-title font-bold text-white block mb-1">Information Systems Architecture:</span>
                <span className="text-slate-300">Systems Analysis &amp; Design, UML Modeling, Relational ERD, SDLC (Agile/Scrum), RBAC Security.</span>
              </div>

              <div className="print-card p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="print-title font-bold text-white block mb-1">Developer Tools &amp; Version Control:</span>
                <span className="text-slate-300">Git, GitHub CLI, Postman, Android Studio, VS Code, Linux/Bash, Figma.</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="print-section space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold border-b border-slate-800 pb-1">
              Key Projects &amp; Implementations
            </h2>
            <div className="space-y-2.5">
              {PROJECTS.map((p) => (
                <div key={p.id} className="print-card text-xs space-y-1 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <span className="print-title font-bold text-white">{p.title}</span>
                    <span className="print-subtitle font-mono text-indigo-300 text-[11px] font-semibold">{p.categoryLabel}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{p.tagline}</p>
                  <p className="print-muted text-slate-400">
                    <strong>Tech:</strong> {p.tags.join(', ')} | <strong>Repository:</strong> {p.githubUrl}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="print-section space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold border-b border-slate-800 pb-1">
              Experience &amp; Leadership
            </h2>
            <div className="space-y-3 text-xs">
              {EXPERIENCE_TIMELINE.map((item, idx) => (
                <div key={idx} className="print-card space-y-1.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex justify-between">
                    <span className="print-title font-bold text-white">{item.role} — {item.company}</span>
                    <span className="print-subtitle font-mono text-indigo-300 font-semibold">{item.period}</span>
                  </div>
                  <p className="text-slate-300">{item.description}</p>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-400 pl-1">
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Controls */}
        <div className="no-print p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
          <span>Haramaya University • Information Systems Graduate</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors font-bold border border-slate-700"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
