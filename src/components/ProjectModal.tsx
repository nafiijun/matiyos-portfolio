import React, { useState } from 'react';
import { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  Terminal,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Upload,
  Check,
  KeyRound,
  User,
  GraduationCap,
  Star,
  GitFork,
  GitCommit,
  Code2,
  Calendar,
  Link2,
  Copy,
  BarChart2,
  FileCode2
} from 'lucide-react';
import { getTechIcon } from './ProjectsSection';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'insights' | 'architecture' | 'demo'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);

  // Flutter final-project Simulator State (Matching nafiijun/final-project code)
  const [studentName, setStudentName] = useState('Matiyos Bizuneh');
  const [studentDepartment, setStudentDepartment] = useState('Information Systems');
  const [studentId, setStudentId] = useState('HU/IS/2026/08');
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success'>('idle');
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [flutterSubScreen, setFlutterSubScreen] = useState<'profile' | 'password'>('profile');
  const [newPassword, setNewPassword] = useState('');
  const [passwordSaved, setPasswordSaved] = useState(false);

  // Campus IS Simulator State (Haramaya University Capstone)
  const [selectedRole, setSelectedRole] = useState<'student' | 'registrar'>('student');
  const [registeredCourses, setRegisteredCourses] = useState<string[]>(['IS301', 'IS402']);
  const availableCourses = [
    { code: 'IS301', title: 'Advanced Database Management', credits: 3, grade: 'A' },
    { code: 'IS402', title: 'Systems Analysis & Design', credits: 3, grade: 'A+' },
    { code: 'IS403', title: 'Mobile Application Development (Flutter)', credits: 4, grade: 'A' },
    { code: 'IS404', title: 'Enterprise Information Architecture', credits: 3, grade: 'A' },
    { code: 'IS405', title: 'Information Security & Governance', credits: 3, grade: 'A-' }
  ];

  if (!project) return null;

  const handleCopyLink = () => {
    const url = project.liveUrl || project.githubUrl || window.location.href;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleSimulateCloudinaryUpload = () => {
    setUploadStatus('uploading');
    setTimeout(() => {
      setUploadStatus('success');
      setUploadedImageUrl('https://res.cloudinary.com/duo6aedbk/image/upload/v1723982100/student_ids/hu_matiyos_verified.jpg');
    }, 1200);
  };

  const handleToggleCourse = (code: string) => {
    if (registeredCourses.includes(code)) {
      setRegisteredCourses(registeredCourses.filter(c => c !== code));
    } else {
      setRegisteredCourses([...registeredCourses, code]);
    }
  };

  return (
    <div className="no-print project-modal fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-900/90 backdrop-blur-md">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold">
                {project.categoryLabel}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Verified Repository
              </span>
              {project.primaryLanguage && (
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
                  <Code2 className="w-3 h-3 text-indigo-400" />
                  {project.primaryLanguage}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {project.title}
            </h3>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className={`p-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 border ${
                copiedLink 
                  ? 'bg-emerald-950 text-emerald-300 border-emerald-500/50' 
                  : 'bg-slate-800 text-slate-300 hover:text-white border-slate-700'
              }`}
              title="Copy Share Link"
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-emerald-300">Copied!</span>
                </>
              ) : (
                <>
                  <Link2 className="w-4 h-4" />
                  <span className="hidden sm:inline text-xs">Share</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Nav Tabs */}
        <div className="flex border-b border-slate-800 px-6 bg-slate-950/50 gap-4 sm:gap-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'overview'
                ? 'border-indigo-400 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview &amp; Features
          </button>
          <button
            onClick={() => setActiveTab('insights')}
            className={`py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'insights'
                ? 'border-indigo-400 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Repository Insights</span>
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'architecture'
                ? 'border-indigo-400 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Architecture &amp; Design
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className={`py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'demo'
                ? 'border-indigo-400 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-300">
          
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Visual OpenGraph preview */}
              {project.imageUrl && (
                <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 relative">
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-white bg-slate-900/90 px-3 py-1 rounded-xl border border-slate-700/80 backdrop-blur-md">
                      {project.title}
                    </span>
                    <span className="text-xs font-mono text-slate-300 bg-slate-900/90 px-2.5 py-1 rounded-xl border border-slate-700/80 backdrop-blur-md">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                  System Description
                </h4>
                <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Technical Achievements
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Repository Quick Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-400 font-mono mb-1 flex items-center justify-center gap-1">
                    <Star className="w-3 h-3 text-amber-400" />
                    <span>Stars</span>
                  </div>
                  <div className="text-base font-bold text-amber-300">{project.stars ?? 0}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-400 font-mono mb-1 flex items-center justify-center gap-1">
                    <GitFork className="w-3 h-3 text-indigo-400" />
                    <span>Forks</span>
                  </div>
                  <div className="text-base font-bold text-indigo-300">{project.forks ?? 0}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-400 font-mono mb-1 flex items-center justify-center gap-1">
                    <GitCommit className="w-3 h-3 text-emerald-400" />
                    <span>Commits</span>
                  </div>
                  <div className="text-base font-bold text-emerald-300">{project.commitsCount ?? 0}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-400 font-mono mb-1 flex items-center justify-center gap-1">
                    <Code2 className="w-3 h-3 text-cyan-400" />
                    <span>Primary</span>
                  </div>
                  <div className="text-base font-bold text-cyan-300 truncate">{project.primaryLanguage || 'Dart'}</div>
                </div>
              </div>

              {/* Tags with tech icons */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Core Technologies &amp; Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-mono font-medium border border-slate-700/50"
                    >
                      {getTechIcon(tag)}
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* New Tab: Repository Insights & Commit History */}
          {activeTab === 'insights' && (
            <div className="space-y-6">
              {/* Repository Stats Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">GitHub Stars</span>
                    <span className="text-lg font-black text-white">{project.stars ?? 0} Stars</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <GitCommit className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Total Commits</span>
                    <span className="text-lg font-black text-white">{project.commitsCount ?? 0} Commits</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <GitFork className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Community Forks</span>
                    <span className="text-lg font-black text-white">{project.forks ?? 0} Forks</span>
                  </div>
                </div>
              </div>

              {/* Language Usage Breakdown */}
              {project.languageBreakdown && project.languageBreakdown.length > 0 && (
                <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-indigo-400" />
                      <span>Language Usage Breakdown</span>
                    </h4>
                    <span className="text-xs font-mono text-slate-400">GitHub Linguistic Analysis</span>
                  </div>

                  {/* Multi-segment progress bar */}
                  <div className="w-full h-3 rounded-full bg-slate-900 overflow-hidden flex">
                    {project.languageBreakdown.map((lang, idx) => (
                      <div
                        key={idx}
                        style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                        title={`${lang.language}: ${lang.percentage}%`}
                        className="h-full first:rounded-l-full last:rounded-r-full"
                      />
                    ))}
                  </div>

                  {/* Language Legend grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    {project.languageBreakdown.map((lang, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                          <span className="text-xs font-bold text-white">{lang.language}</span>
                        </div>
                        <span className="text-xs font-mono text-slate-400">{lang.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recent Commit History */}
              {project.recentCommits && project.recentCommits.length > 0 && (
                <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <GitCommit className="w-4 h-4 text-emerald-400" />
                      <span>Recent Commit History</span>
                    </h4>
                    <span className="text-xs font-mono text-slate-400">{project.recentCommits.length} Verified Commits</span>
                  </div>

                  <div className="space-y-3">
                    {project.recentCommits.map((commit, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-start gap-2.5">
                          <span className="px-2 py-0.5 rounded-md bg-slate-950 font-mono text-[11px] text-indigo-400 font-bold border border-slate-800 shrink-0 mt-0.5">
                            {commit.hash}
                          </span>
                          <div>
                            <p className="text-xs sm:text-sm font-bold text-white leading-snug">{commit.message}</p>
                            <p className="text-[10px] text-slate-400 font-mono mt-0.5">Author: {commit.author}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 shrink-0 self-end sm:self-center">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          <span>{commit.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Technical Architecture
                </h4>
                <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 font-mono text-xs sm:text-sm text-slate-300 space-y-3">
                  <div className="flex items-center gap-2 text-indigo-400 pb-2 border-b border-slate-800 font-bold">
                    <Layers className="w-4 h-4" />
                    <span>Layered System Model</span>
                  </div>
                  {project.architecture ? (
                    <div className="space-y-2">
                      {project.architecture.map((layer, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
                          <span className="text-slate-400">Level 0{idx + 1}</span>
                          <span className="text-white font-bold">{layer}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-3 text-slate-400">Clean MVC architecture separating presentation, business logic, and cloud API endpoints.</div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <h5 className="font-bold text-white flex items-center gap-1.5 text-sm">
                    <Terminal className="w-4 h-4 text-indigo-400" />
                    <span>Code Quality &amp; Structure</span>
                  </h5>
                  <p className="text-slate-400 leading-relaxed">
                    Modular code structure following Dart / TypeScript best practices with zero boilerplate redundancy and clean class abstractions.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <h5 className="font-bold text-white flex items-center gap-1.5 text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Security &amp; Permissions</span>
                  </h5>
                  <p className="text-slate-400 leading-relaxed">
                    Granular role-based privileges and secure credential handling preserving academic data integrity.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'demo' && (
            <div className="space-y-6">
              
              {/* Simulator 0: Portfolio Architecture (for matiyos-portfolio) */}
              {project.id === 'matiyos-portfolio' && (
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider block">
                        Live Production Deployment
                      </span>
                      <h4 className="text-lg font-black text-white">Vercel Edge Global Network</h4>
                    </div>
                    <a
                      href="https://matiyos-portfolio.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-indigo-900/30 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Visit Live Site</span>
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                    <div className="p-3.5 bg-slate-900 rounded-2xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 font-mono block">Domain</span>
                      <span className="text-xs font-bold text-indigo-300">matiyos-portfolio.vercel.app</span>
                    </div>
                    <div className="p-3.5 bg-slate-900 rounded-2xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 font-mono block">SSL / TLS</span>
                      <span className="text-xs font-bold text-emerald-400">● 256-Bit Encrypted</span>
                    </div>
                    <div className="p-3.5 bg-slate-900 rounded-2xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 font-mono block">Edge Routing</span>
                      <span className="text-xs font-bold text-white">Global Anycast CDN</span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-xs space-y-2 text-slate-300">
                    <p className="font-bold text-white">Active Verified Capabilities:</p>
                    <ul className="space-y-1.5 list-disc pl-4 text-slate-400">
                      <li>Live GitHub REST API Profile &amp; Repository Synchronizer</li>
                      <li>Interactive Executable CLI Terminal with custom developer commands</li>
                      <li>Full CV / Curriculum Vitae Modal with Print &amp; PDF support</li>
                      <li>Single-Page App routing with zero 404 rewrite handling on Vercel</li>
                    </ul>
                  </div>
                </div>
              )}
              
              {/* Simulator 1: Flutter Mobile App (for final-project - matching nafiijun/final-project screens) */}
              {project.id === 'final-project' && (
                <div className="max-w-md mx-auto bg-slate-950 border-4 border-slate-800 rounded-[36px] p-4 shadow-2xl shadow-indigo-950/60 overflow-hidden relative">
                  {/* Phone Notch */}
                  <div className="w-28 h-4 bg-slate-800 rounded-b-xl mx-auto mb-3 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-slate-900" />
                  </div>

                  {/* Flutter Top App Bar */}
                  <div className="bg-slate-900 p-3.5 rounded-2xl border border-slate-800 mb-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase block">
                        Flutter • lib/screens/student/
                      </span>
                      <h4 className="text-sm font-black text-white">
                        {flutterSubScreen === 'profile' ? 'StudentEditProfileScreen' : 'SetPasswordScreen'}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-[10px]">
                      <button
                        onClick={() => setFlutterSubScreen('profile')}
                        className={`px-2 py-1 rounded-lg font-bold ${flutterSubScreen === 'profile' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
                      >
                        Profile
                      </button>
                      <button
                        onClick={() => setFlutterSubScreen('password')}
                        className={`px-2 py-1 rounded-lg font-bold ${flutterSubScreen === 'password' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
                      >
                        Password
                      </button>
                    </div>
                  </div>

                  {flutterSubScreen === 'profile' ? (
                    <div className="space-y-3">
                      {/* Cloudinary Upload Box */}
                      <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800 text-center space-y-2">
                        <div className="w-16 h-16 rounded-full bg-slate-950 border border-slate-800 mx-auto flex items-center justify-center overflow-hidden">
                          {uploadedImageUrl ? (
                            <img src={project.accentColor ? "https://avatars.githubusercontent.com/u/214370727?v=4" : ""} alt="Uploaded ID" className="w-full h-full object-cover" />
                          ) : (
                            <User className="w-8 h-8 text-slate-500" />
                          )}
                        </div>
                        
                        <div>
                          <span className="text-[10px] font-mono text-slate-400 block">CloudinaryService.uploadIDPhoto()</span>
                          <span className="text-xs font-bold text-white">Preset: &apos;student_ids&apos; • Cloud: &apos;duo6aedbk&apos;</span>
                        </div>

                        <button
                          onClick={handleSimulateCloudinaryUpload}
                          disabled={uploadStatus === 'uploading'}
                          className="w-full py-2 px-3 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          <span>
                            {uploadStatus === 'uploading' ? 'Uploading to Cloudinary...' : uploadStatus === 'success' ? '✓ ID Photo Uploaded' : 'Pick & Upload ID Photo'}
                          </span>
                        </button>
                      </div>

                      {/* Form Fields from repository */}
                      <div className="space-y-2 text-xs">
                        <div>
                          <label className="text-[10px] font-mono text-slate-400 block mb-0.5">Student Full Name</label>
                          <input
                            type="text"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-white font-medium focus:outline-none focus:border-cyan-500"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] font-mono text-slate-400 block mb-0.5">Department</label>
                          <input
                            type="text"
                            value={studentDepartment}
                            onChange={(e) => setStudentDepartment(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-white font-medium focus:outline-none focus:border-cyan-500"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] font-mono text-slate-400 block mb-0.5">Student ID (HU/IS)</label>
                          <input
                            type="text"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-white font-mono font-medium focus:outline-none focus:border-cyan-500"
                          />
                        </div>
                      </div>

                      <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-300 text-[11px] flex items-center justify-between">
                        <span>Source: nafiijun/final-project</span>
                        <span className="font-bold">Dart / Flutter 3</span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3 text-xs">
                      <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-3">
                        <div className="flex items-center gap-2 text-indigo-400 font-bold">
                          <KeyRound className="w-4 h-4" />
                          <span>SetPasswordScreen Simulator</span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Encrypted credentials handler with strength validation and regex check.
                        </p>

                        <div>
                          <label className="text-[10px] font-mono text-slate-400 block mb-1">New Secure Password</label>
                          <input
                            type="password"
                            placeholder="Enter password..."
                            value={newPassword}
                            onChange={(e) => {
                              setNewPassword(e.target.value);
                              setPasswordSaved(false);
                            }}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-indigo-500 font-mono"
                          />
                        </div>

                        <button
                          onClick={() => setPasswordSaved(true)}
                          disabled={!newPassword || passwordSaved}
                          className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold rounded-xl text-xs transition-colors"
                        >
                          {passwordSaved ? '✓ Password Configured' : 'Save & Validate Password'}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Phone Bottom Pill */}
                  <div className="w-20 h-1 bg-slate-700 rounded-full mx-auto mt-4" />
                </div>
              )}

              {/* Simulator 2: Campus IS Portal (for campus-is) */}
              {project.id === 'campus-is' && (
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider block">
                        Haramaya University Academic Systems Analysis
                      </span>
                      <h4 className="text-lg font-black text-white">Course Registration &amp; Academic Records Engine</h4>
                    </div>

                    {/* Role Switcher */}
                    <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
                      <button
                        onClick={() => setSelectedRole('student')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                          selectedRole === 'student' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Student View
                      </button>
                      <button
                        onClick={() => setSelectedRole('registrar')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                          selectedRole === 'registrar' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Registrar View
                      </button>
                    </div>
                  </div>

                  {selectedRole === 'student' ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800">
                          <span className="text-[10px] text-slate-400 font-mono block">Registered Courses</span>
                          <span className="text-lg font-bold text-indigo-400">{registeredCourses.length}</span>
                        </div>
                        <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800">
                          <span className="text-[10px] text-slate-400 font-mono block">Credit Hours</span>
                          <span className="text-lg font-bold text-white">
                            {registeredCourses.reduce((acc, c) => acc + (availableCourses.find(x => x.code === c)?.credits || 0), 0)} Cr
                          </span>
                        </div>
                        <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800">
                          <span className="text-[10px] text-slate-400 font-mono block">Status</span>
                          <span className="text-lg font-bold text-emerald-400">Enrolled</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-300 block">Department Semester Courses (Click to Register):</span>
                        {availableCourses.map(course => {
                          const isReg = registeredCourses.includes(course.code);
                          return (
                            <div
                              key={course.code}
                              onClick={() => handleToggleCourse(course.code)}
                              className={`p-3 rounded-2xl border flex items-center justify-between cursor-pointer transition-colors ${
                                isReg 
                                  ? 'bg-indigo-950/30 border-indigo-500/50 text-white'
                                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span className="font-mono text-xs font-bold text-indigo-400 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800">
                                  {course.code}
                                </span>
                                <div>
                                  <p className="text-xs font-bold">{course.title}</p>
                                  <p className="text-[10px] text-slate-400">{course.credits} Credit Hours • Dept. of Information Systems</p>
                                </div>
                              </div>
                              <span className={`text-xs font-bold px-2.5 py-1 rounded-xl ${
                                isReg ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                              }`}>
                                {isReg ? 'Enrolled' : '+ Add'}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold text-white">Department Enrollment Verification</span>
                          <span className="font-mono text-indigo-400 font-bold">184 Verified Students</span>
                        </div>
                        <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                          <div className="bg-indigo-500 h-full w-[92%]" />
                        </div>
                      </div>

                      <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-xs space-y-2">
                        <span className="font-bold text-white block">Academic Audit Integrity:</span>
                        <p className="text-slate-400 leading-relaxed">
                          Relational 3NF schemas prevent double-enrollment conflicts and ensure prerequisite validation across semesters.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

            </div>
          )}

        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
            <span>Author: <strong className="text-white">Matiyos Bizuneh</strong></span>
            <span>•</span>
            <span className="text-indigo-400 font-bold">{project.commitsCount ?? 0} Commits</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition-all border border-slate-700 cursor-pointer"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedLink ? 'Copied Link' : 'Copy Direct Link'}</span>
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition-all border border-slate-700"
            >
              <Github className="w-4 h-4" />
              <span>View Repository</span>
            </a>
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold rounded-xl transition-colors shadow-lg shadow-indigo-900/30 border border-indigo-400/20 cursor-pointer"
            >
              Close Details
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
