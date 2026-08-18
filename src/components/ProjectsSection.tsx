import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { 
  Briefcase, 
  ExternalLink, 
  Github, 
  Smartphone, 
  Database, 
  Layers, 
  Code2, 
  FileCode2,
  Palette,
  Cloud,
  Network,
  Server,
  Check, 
  ArrowRight,
  Sparkles,
  BarChart3,
  Flame,
  Search,
  Clock,
  Calendar,
  Milestone,
  Filter,
  Copy,
  Link2,
  Star,
  GitCommit,
  GitFork,
  Image as ImageIcon
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Cell, 
  CartesianGrid 
} from 'recharts';
import { ProjectModal } from './ProjectModal';

// Helper to get matching icon and color styling for technologies and languages
export const getTechIcon = (tag: string) => {
  const normalized = tag.toLowerCase();
  if (normalized.includes('flutter') || normalized.includes('mobile') || normalized.includes('dart')) {
    return <Smartphone className="w-3 h-3 text-cyan-400" />;
  }
  if (normalized.includes('typescript') || normalized.includes('javascript') || normalized.includes('code')) {
    return <Code2 className="w-3 h-3 text-indigo-400" />;
  }
  if (normalized.includes('react')) {
    return <Layers className="w-3 h-3 text-sky-400" />;
  }
  if (normalized.includes('sql') || normalized.includes('database') || normalized.includes('postgres')) {
    return <Database className="w-3 h-3 text-emerald-400" />;
  }
  if (normalized.includes('cloudinary') || normalized.includes('cloud')) {
    return <Cloud className="w-3 h-3 text-sky-400" />;
  }
  if (normalized.includes('tailwind') || normalized.includes('css') || normalized.includes('ui')) {
    return <Palette className="w-3 h-3 text-rose-400" />;
  }
  if (normalized.includes('uml') || normalized.includes('systems') || normalized.includes('analysis') || normalized.includes('sdlc') || normalized.includes('rbac')) {
    return <Network className="w-3 h-3 text-purple-400" />;
  }
  if (normalized.includes('api') || normalized.includes('github') || normalized.includes('vite') || normalized.includes('vercel')) {
    return <Server className="w-3 h-3 text-amber-400" />;
  }
  return <FileCode2 className="w-3 h-3 text-slate-400" />;
};

interface LanguageMetric {
  language: string;
  share: number;
  lines: string;
  repo: string;
  color: string;
  category: string;
}

interface ProjectTimelineMetric {
  name: string;
  shortName: string;
  durationMonths: number;
  sprints: number;
  timeframe: string;
  complexity: 'High' | 'Medium' | 'Enterprise';
  color: string;
  tech: string;
  architecture: string;
}

const GITHUB_LANGUAGE_DATA: LanguageMetric[] = [
  { language: 'Dart (Flutter)', share: 48, lines: '54.2 KB', repo: 'nafiijun/final-project', color: '#06b6d4', category: 'Cross-Platform Mobile' },
  { language: 'TypeScript', share: 38, lines: '42.8 KB', repo: 'nafiijun/matiyos-portfolio', color: '#6366f1', category: 'Full-Stack SPA & CLI' },
  { language: 'SQL / Relational DB', share: 10, lines: '11.5 KB', repo: 'Haramaya IS Capstone', color: '#10b981', category: 'Enterprise Database' },
  { language: 'HTML5 & CSS3', share: 4, lines: '4.9 KB', repo: 'Production Web Assets', color: '#f43f5e', category: 'Semantic Layout' }
];

const PROJECT_TIMELINE_DATA: ProjectTimelineMetric[] = [
  {
    name: 'Haramaya IS Capstone Project',
    shortName: 'Campus IS Capstone',
    durationMonths: 9,
    sprints: 18,
    timeframe: 'Oct 2024 – Jun 2025',
    complexity: 'Enterprise',
    color: '#10b981',
    tech: 'Systems Analysis, UML, 3NF SQL, SDLC',
    architecture: 'Full Academic Lifecycle Analysis & Normalized Relational Database'
  },
  {
    name: 'Flutter Student Mobile Portal',
    shortName: 'Flutter Mobile App',
    durationMonths: 5,
    sprints: 10,
    timeframe: 'Jan 2025 – May 2025',
    complexity: 'High',
    color: '#06b6d4',
    tech: 'Flutter, Dart, Cloudinary API, State Mgmt',
    architecture: 'Clean Architecture (Presentation, State, Remote Service Layer)'
  },
  {
    name: 'Web Engineering & CLI Portfolio',
    shortName: 'Portfolio & CLI',
    durationMonths: 2,
    sprints: 6,
    timeframe: 'Jul 2025 – Present',
    complexity: 'High',
    color: '#6366f1',
    tech: 'React 19, TypeScript, Recharts, Tailwind',
    architecture: 'Modular Component Architecture & GitHub REST API Sync'
  }
];

const CustomLanguageTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data: LanguageMetric = payload[0].payload;
    return (
      <div className="p-3.5 bg-slate-950 border border-slate-700/90 rounded-2xl shadow-2xl text-xs space-y-1.5 backdrop-blur-md">
        <div className="flex items-center gap-2 font-bold text-white">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: data.color }} />
          <span className="text-sm">{data.language}</span>
        </div>
        <div className="text-slate-300 font-mono text-[11px] space-y-0.5">
          <p>Language Share: <strong className="text-indigo-400">{data.share}%</strong> ({data.lines})</p>
          <p className="text-slate-400">Primary Source: <span className="text-slate-200">{data.repo}</span></p>
          <p className="text-slate-400">Ecosystem: <span className="text-emerald-400">{data.category}</span></p>
        </div>
      </div>
    );
  }
  return null;
};

const CustomTimelineTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data: ProjectTimelineMetric = payload[0].payload;
    return (
      <div className="p-4 bg-slate-950 border border-slate-700 rounded-2xl shadow-2xl text-xs space-y-2 backdrop-blur-md max-w-xs">
        <div className="flex items-center justify-between gap-2 font-bold text-white border-b border-slate-800 pb-1.5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: data.color }} />
            <span className="text-sm">{data.name}</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-800 text-indigo-300">
            {data.complexity}
          </span>
        </div>
        <div className="text-slate-300 font-mono text-[11px] space-y-1">
          <p>Duration: <strong className="text-emerald-400">{data.durationMonths} Months</strong> ({data.sprints} Sprints)</p>
          <p className="text-slate-400">Timeframe: <span className="text-slate-200">{data.timeframe}</span></p>
          <p className="text-slate-400">Tech Stack: <span className="text-indigo-300">{data.tech}</span></p>
          <p className="text-slate-400">Architecture: <span className="text-slate-200">{data.architecture}</span></p>
        </div>
      </div>
    );
  }
  return null;
};

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedProjectId, setCopiedProjectId] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'All Projects', count: PROJECTS.length },
    { id: 'mobile', label: 'Flutter Mobile App', count: PROJECTS.filter(p => p.category === 'mobile').length },
    { id: 'web', label: 'Full-Stack Web', count: PROJECTS.filter(p => p.category === 'web').length },
    { id: 'is', label: 'Information Systems', count: PROJECTS.filter(p => p.category === 'is').length }
  ];

  // Filter projects by category and real-time search query
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inTitle = p.title.toLowerCase().includes(q);
      const inTagline = p.tagline.toLowerCase().includes(q);
      const inTags = p.tags.some(tag => tag.toLowerCase().includes(q));
      const inHighlights = p.highlights.some(h => h.toLowerCase().includes(q));
      const inCategory = p.categoryLabel.toLowerCase().includes(q);

      return inTitle || inTagline || inTags || inHighlights || inCategory;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyProjectLink = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    const urlToCopy = project.liveUrl || project.githubUrl || window.location.href;
    navigator.clipboard.writeText(urlToCopy);
    setCopiedProjectId(project.id);
    setTimeout(() => {
      setCopiedProjectId(null);
    }, 2000);
  };

  const handleImageError = (projectId: string) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  return (
    <section id="projects" className="py-24 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Featured Engineering Work &amp; Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Projects &amp; System Implementations
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real-world systems, Flutter mobile applications, and enterprise database architectures engineered by Matiyos Bizuneh.
          </p>
        </div>

        {/* Real-Time Search Bar & Category Filters */}
        <div className="space-y-4 mb-12 no-print">          
          {/* Real-time Search Input */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects by keyword, technology, or description (e.g., Flutter, SQL, Dart, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl pl-11 pr-20 py-3 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-xl transition-all"
            />
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-indigo-400 hover:text-white"
              >
                Clear
              </button>
            ) : (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-500">
                {filteredProjects.length} found
              </span>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-900/30 scale-105'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.2 rounded-md text-[10px] font-mono font-black ${
                  selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* Analytics Grid: Language Distribution & Development Duration Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14 no-print">
          
          {/* 1. Language Breakdown Chart */}
          <div className="p-6 sm:p-8 bg-slate-900/80 border border-slate-800 rounded-3xl shadow-2xl backdrop-blur-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-1 pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white">
                  Language Distribution
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Primary languages across active repositories via live GitHub statistics.
              </p>
            </div>

            {/* Language BarChart */}
            <div className="h-56 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={GITHUB_LANGUAGE_DATA}
                  margin={{ top: 10, right: 10, left: -20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis 
                    dataKey="language" 
                    stroke="#94a3b8" 
                    tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                    tickLine={{ stroke: '#334155' }}
                    axisLine={{ stroke: '#334155' }}
                    interval={0}
                  />
                  <YAxis 
                    stroke="#94a3b8" 
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                    tickFormatter={(val) => `${val}%`}
                    tickLine={{ stroke: '#334155' }}
                    axisLine={{ stroke: '#334155' }}
                    domain={[0, 60]}
                  />
                  <Tooltip content={<CustomLanguageTooltip />} cursor={{ fill: 'rgba(99, 102, 241, 0.08)' }} />
                  <Bar 
                    dataKey="share" 
                    radius={[6, 6, 0, 0]}
                    animationDuration={1000}
                  >
                    {GITHUB_LANGUAGE_DATA.map((entry, index) => (
                      <Cell key={`cell-lang-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-800/80">
              {GITHUB_LANGUAGE_DATA.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center justify-between text-[11px] font-bold text-white">
                    <span className="truncate">{item.language.split(' ')[0]}</span>
                    <span className="text-indigo-400 font-mono">{item.share}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Project Development Duration & Complexity Timeline */}
          <div className="p-6 sm:p-8 bg-slate-900/80 border border-slate-800 rounded-3xl shadow-2xl backdrop-blur-sm space-y-4 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg font-bold text-white">
                    Project Timeline &amp; Duration
                  </h3>
                </div>
                <p className="text-xs text-slate-400">
                  Development duration in months reflecting engineering complexity and agile sprints.
                </p>
              </div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-950 text-emerald-300 border border-slate-800 shrink-0">
                Total: 16 Months
              </span>
            </div>

            {/* Horizontal Timeline BarChart */}
            <div className="h-56 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={PROJECT_TIMELINE_DATA}
                  layout="vertical"
                  margin={{ top: 10, right: 30, left: 15, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                  <XAxis 
                    type="number"
                    stroke="#94a3b8" 
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                    tickFormatter={(val) => `${val} mo`}
                    domain={[0, 10]}
                    tickLine={{ stroke: '#334155' }}
                    axisLine={{ stroke: '#334155' }}
                  />
                  <YAxis 
                    dataKey="shortName" 
                    type="category"
                    stroke="#94a3b8" 
                    tick={{ fill: '#cbd5e1', fontSize: 11, fontWeight: 600 }}
                    width={130}
                    tickLine={{ stroke: '#334155' }}
                    axisLine={{ stroke: '#334155' }}
                  />
                  <Tooltip content={<CustomTimelineTooltip />} cursor={{ fill: 'rgba(16, 185, 129, 0.08)' }} />
                  <Bar 
                    dataKey="durationMonths" 
                    radius={[0, 6, 6, 0]}
                    animationDuration={1200}
                  >
                    {PROJECT_TIMELINE_DATA.map((entry, index) => (
                      <Cell key={`cell-timeline-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Timeline Legend Metrics */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-center">
              <div className="p-2 bg-slate-950/70 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 block font-mono">Academic Capstone</span>
                <span className="text-xs font-bold text-emerald-400">9 Months (18 Sprints)</span>
              </div>
              <div className="p-2 bg-slate-950/70 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 block font-mono">Flutter Mobile</span>
                <span className="text-xs font-bold text-cyan-400">5 Months (10 Sprints)</span>
              </div>
              <div className="p-2 bg-slate-950/70 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 block font-mono">SPA / Portfolio</span>
                <span className="text-xs font-bold text-indigo-400">2 Months (6 Sprints)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project) => {
            const hasImageError = imageErrors[project.id];
            const isCopied = copiedProjectId === project.id;

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="print-project-card print-section bg-slate-900 border border-slate-800 hover:border-indigo-500/60 rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-xl shadow-indigo-950/20 group relative overflow-hidden cursor-pointer"
              >
                {/* Top color accent border */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 transition-all group-hover:h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"
                />

                <div className="space-y-4">
                  {/* Visual OpenGraph / Generated Visual Banner */}
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 group/img">
                    {!hasImageError && project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} OpenGraph preview`}
                        onError={() => handleImageError(project.id)}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      /* Fallback High-Tech Generated Banner Placeholder */
                      <div className="w-full h-full flex flex-col justify-between p-4 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 relative overflow-hidden">
                        <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-indigo-300 font-bold">
                            {project.category === 'mobile' ? (
                              <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                            ) : project.category === 'is' ? (
                              <Database className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                            )}
                            <span>{project.primaryLanguage || project.categoryLabel}</span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-500">Repository Live</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white truncate">{project.title}</p>
                          <p className="text-[10px] text-slate-400 font-mono">Architecture: {project.architecture?.[0] || 'Modular'}</p>
                        </div>
                      </div>
                    )}

                    {/* Category & Status Overlay Pills */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-950/85 text-slate-200 border border-slate-700/80 backdrop-blur-md">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-indigo-600/90 text-white border border-indigo-400/40 backdrop-blur-md flex items-center gap-1 shadow-md">
                          <Sparkles className="w-2.5 h-2.5" />
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Quick repository telemetry badge */}
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-slate-300 backdrop-blur-md flex items-center gap-2">
                      {project.stars !== undefined && (
                        <span className="flex items-center gap-0.5 text-amber-300">
                          <Star className="w-3 h-3 fill-amber-300" />
                          {project.stars}
                        </span>
                      )}
                      {project.commitsCount !== undefined && (
                        <span className="flex items-center gap-0.5 text-indigo-300">
                          <GitCommit className="w-3 h-3" />
                          {project.commitsCount} commits
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title and Tagline */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Key Highlights (Bullet previews) */}
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-indigo-400 font-bold shrink-0">›</span>
                        <span className="line-clamp-1">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags Enhanced with Language & Framework Icons */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 5).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-lg bg-slate-950 text-slate-300 border border-slate-800/90 group-hover:border-slate-700 transition-colors"
                      >
                        {getTechIcon(tag)}
                        <span>{tag}</span>
                      </span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-400 self-center">
                        +{project.tags.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Print-only clean metadata line */}
                <div className="print-meta hidden text-[8.5pt] font-mono text-slate-700 pt-2 border-t border-slate-200 mt-2">
                  <p><strong>GitHub:</strong> {project.githubUrl}</p>
                  {project.liveUrl && project.liveUrl !== project.githubUrl && (
                    <p><strong>Live:</strong> {project.liveUrl}</p>
                  )}
                  <p><strong>Stack:</strong> {project.tags.join(', ')}</p>
                </div>

                {/* Bottom Actions */}
                <div className="no-print pt-5 mt-5 border-t border-slate-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 group-hover:underline cursor-pointer"
                  >
                    <span>Architecture &amp; Insights</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                    {/* Copy Share Link Button with Immediate Visual Feedback */}
                    <button
                      onClick={(e) => handleCopyProjectLink(e, project)}
                      className={`p-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1 border ${
                        isCopied
                          ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50 scale-105'
                          : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800 border-slate-800'
                      }`}
                      title="Copy Direct Project URL"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-[10px] text-emerald-300">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Link2 className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline text-[10px]">Share</span>
                        </>
                      )}
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-white bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors"
                      title="View Source on GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty state for search */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center bg-slate-900 border border-slate-800 rounded-3xl space-y-3">
            <p className="text-slate-300 font-bold">No projects found matching &quot;{searchQuery}&quot;.</p>
            <p className="text-slate-500 text-xs">Try searching for keywords like &quot;Flutter&quot;, &quot;SQL&quot;, &quot;Dart&quot;, or &quot;React&quot;.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-2 text-xs font-bold text-indigo-400 hover:underline cursor-pointer"
            >
              Reset Filters &amp; Search
            </button>
          </div>
        )}

        {/* Capstone / Academic Project Highlight Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-indigo-950/30 to-purple-950/30 border border-slate-800 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-left">
            <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">
              Haramaya University Degree Project
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              B.Sc. Final Year Project: Flutter Mobile Application &amp; Enterprise Information System
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Designed adhering to complete Systems Analysis and Design methodologies, relational database normalization, and robust cross-platform mobile interfaces.
            </p>
          </div>

          <a
            href="https://github.com/nafiijun/final-project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-indigo-900/30 whitespace-nowrap shrink-0 border border-indigo-400/20"
          >
            <Github className="w-4 h-4" />
            <span>Explore nafiijun/final-project</span>
          </a>
        </div>

      </div>

      {/* Project Modal Deep Dive */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

