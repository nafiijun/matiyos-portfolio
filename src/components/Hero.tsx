import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  GraduationCap, 
  ArrowRight, 
  Download, 
  Github, 
  Mail, 
  Check, 
  Copy, 
  Smartphone, 
  Database, 
  Layers, 
  Terminal, 
  ExternalLink,
  Code
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
  onOpenProfile?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal, onOpenProfile }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedCodeFile, setSelectedCodeFile] = useState<'ts' | 'dart' | 'sql'>('ts');
  const [showOutput, setShowOutput] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glow effects matching Professional Polish */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-indigo-500/10 blur-[130px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[350px] bg-purple-600/10 blur-[120px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & Headings */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Profile Avatar & Degree & Institution Badge - Clickable to open Profile Frame */}
            <button
              type="button"
              onClick={onOpenProfile}
              className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800/90 border border-indigo-500/30 hover:border-indigo-400/60 text-xs font-semibold text-slate-300 shadow-inner transition-all text-left cursor-pointer group"
              title="Click to view full photo and profile"
              id="hero-profile-badge-btn"
            >
              <div className="relative w-6 h-6 rounded-full overflow-hidden border border-indigo-400/50 group-hover:scale-110 transition-transform shrink-0">
                <img 
                  src={PERSONAL_INFO.avatarUrl} 
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span className="font-bold text-indigo-300 group-hover:text-indigo-200 transition-colors">Haramaya University</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-200 font-mono text-[11px]">B.Sc. in Information Systems</span>
              <span className="text-[10px] text-indigo-400 font-mono hidden sm:inline ml-1 font-normal underline decoration-indigo-500/40">View Bio</span>
            </button>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-xs font-mono text-indigo-400 tracking-widest uppercase font-bold">
                Professional Portfolio • System Architect
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                System Architecture & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-300">
                  Digital Innovation.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed pt-1">
                Information Systems Specialist bridging technical infrastructure and strategic enterprise needs. Specialized in architecting data-driven solutions, <strong className="text-white font-semibold">Flutter mobile apps</strong>, and scalable systems.
              </p>
            </div>

            {/* Highlights pill grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2.5 p-3 bg-slate-900/90 border border-slate-800 rounded-2xl">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white">Flutter & Dart</p>
                  <p className="text-slate-400 text-[11px]">Cross-Platform</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 bg-slate-900/90 border border-slate-800 rounded-2xl">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                  <Database className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white">Relational DB</p>
                  <p className="text-slate-400 text-[11px]">SQL Schema Design</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 bg-slate-900/90 border border-slate-800 rounded-2xl col-span-2 sm:col-span-1">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white">Systems Analysis</p>
                  <p className="text-slate-400 text-[11px]">UML & SDLC</p>
                </div>
              </div>
            </div>

            {/* CTAs and Links */}
            <div className="flex flex-wrap items-center gap-3 pt-3 no-print">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-950/50 transition-all hover:scale-[1.02] active:scale-[0.98] border border-indigo-400/20"
                id="hero-explore-projects-btn"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-semibold text-sm transition-all hover:border-indigo-500/40"
                id="hero-view-cv-btn"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Resume / CV</span>
              </button>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-medium text-sm transition-all"
                id="hero-github-link"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span className="font-mono text-xs">@{PERSONAL_INFO.githubUsername}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 text-xs font-mono transition-all"
                title="Copy Email to Clipboard"
                id="hero-copy-email-btn"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="text-indigo-400 font-sans font-semibold">Copied!</span>
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

          {/* Right Column: Interactive Code & Profile Card */}
          <div className="lg:col-span-5 no-print">
            <div className="relative">
              {/* Outer decorative card frame */}
              <div className="bg-slate-900 p-1.5 rounded-3xl border border-slate-800 shadow-2xl shadow-indigo-950/40 backdrop-blur-xl">
                
                {/* Terminal Header & File Tabs */}
                <div className="px-4 py-2.5 bg-slate-950 rounded-t-2xl flex items-center justify-between border-b border-slate-800 gap-2">
                  <div className="flex items-center gap-1.5 overflow-x-auto">
                    <div className="flex items-center gap-1.5 mr-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <button
                      onClick={() => setSelectedCodeFile('ts')}
                      className={`text-xs font-mono px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap ${
                        selectedCodeFile === 'ts' ? 'bg-slate-800 text-indigo-300 font-bold border border-slate-700' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      architect.ts
                    </button>
                    <button
                      onClick={() => setSelectedCodeFile('dart')}
                      className={`text-xs font-mono px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap ${
                        selectedCodeFile === 'dart' ? 'bg-slate-800 text-indigo-300 font-bold border border-slate-700' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      flutter_bloc.dart
                    </button>
                    <button
                      onClick={() => setSelectedCodeFile('sql')}
                      className={`text-xs font-mono px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap ${
                        selectedCodeFile === 'sql' ? 'bg-slate-800 text-indigo-300 font-bold border border-slate-700' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      schema.sql
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setShowOutput(!showOutput)}
                      className={`flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-lg transition-all font-bold ${
                        showOutput 
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                          : 'bg-indigo-950/60 text-indigo-300 border border-indigo-800/60 hover:bg-indigo-900/60'
                      }`}
                      title="Run code to view output"
                    >
                      <span>{showOutput ? 'Hide Output' : '▶ Run Code'}</span>
                    </button>
                    <button
                      onClick={onOpenTerminal}
                      className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white bg-slate-900 border border-slate-800 px-2 py-1 rounded-lg transition-colors"
                      title="Open Terminal CLI"
                    >
                      <Terminal className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Code Body Content or Execution Output */}
                {showOutput ? (
                  <div className="p-5 font-mono text-xs text-slate-300 space-y-3 bg-slate-950 rounded-b-2xl min-h-[300px]">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px]">
                      <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Execution Result: OK (0 errors, 0 warnings)
                      </span>
                      <span className="text-slate-500">12ms</span>
                    </div>

                    {selectedCodeFile === 'ts' && (
                      <div className="space-y-2 text-indigo-300">
                        <p className="text-white font-bold">{'{'}</p>
                        <p className="pl-4 text-emerald-300">&quot;systemArchitect&quot;: &quot;Matiyos Bizuneh&quot;,</p>
                        <p className="pl-4 text-purple-300">&quot;institution&quot;: &quot;Haramaya University&quot;,</p>
                        <p className="pl-4 text-cyan-300">&quot;degree&quot;: &quot;B.Sc. in Information Systems&quot;,</p>
                        <p className="pl-4 text-slate-300">&quot;coreDisciplines&quot;: [&quot;Flutter&quot;, &quot;PostgreSQL&quot;, &quot;UML&quot;, &quot;TypeScript&quot;],</p>
                        <p className="pl-4 text-amber-300">&quot;status&quot;: &quot;AVAILABLE_FOR_GLOBAL_OPPORTUNITIES&quot;</p>
                        <p className="text-white font-bold">{'}'}</p>
                      </div>
                    )}

                    {selectedCodeFile === 'dart' && (
                      <div className="space-y-2 text-indigo-300">
                        <p className="text-slate-400">// Flutter Widget Tree Built Successfully</p>
                        <p className="text-purple-300">MaterialApp &gt; ProviderScope &gt; HomeScreen</p>
                        <p className="text-emerald-300">✓ State: StreamSubscription active (60 FPS)</p>
                        <p className="text-slate-300">✓ Local SQLite &amp; Firebase Sync: READY</p>
                        <p className="text-indigo-400">✓ Final Project repository: nafiijun/final-project</p>
                      </div>
                    )}

                    {selectedCodeFile === 'sql' && (
                      <div className="space-y-2 text-indigo-300">
                        <p className="text-slate-400">// PostgreSQL Schema Migration Complete</p>
                        <p className="text-emerald-300">CREATE TABLE haramaya_students (id UUID, gpa NUMERIC(3,2));</p>
                        <p className="text-purple-300">CREATE INDEX idx_academic_records ON courses(department_id);</p>
                        <p className="text-cyan-300">✓ 18 Tables Normalized (3NF) with RBAC triggers.</p>
                      </div>
                    )}

                    <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between">
                      <span>Node.js / Flutter Engine</span>
                      <button 
                        onClick={() => setShowOutput(false)}
                        className="text-indigo-400 hover:underline font-bold"
                      >
                        Back to Source Code
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 space-y-3 bg-slate-950 rounded-b-2xl overflow-x-auto leading-relaxed min-h-[300px]">
                    {selectedCodeFile === 'ts' && (
                      <>
                        <div>
                          <span className="text-purple-400">const</span>{' '}
                          <span className="text-indigo-300">architect</span> = &#123;
                        </div>
                        
                        <div className="pl-4 space-y-1.5">
                          <div>
                            <span className="text-slate-500">name:</span>{' '}
                            <span className="text-indigo-300">&apos;{PERSONAL_INFO.name}&apos;</span>,
                          </div>
                          <div>
                            <span className="text-slate-500">education:</span> &#123;
                          </div>
                          <div className="pl-4">
                            <div>
                              <span className="text-slate-500">degree:</span>{' '}
                              <span className="text-purple-300">&apos;B.Sc. in Information Systems&apos;</span>,
                            </div>
                            <div>
                              <span className="text-slate-500">institution:</span>{' '}
                              <span className="text-purple-300">&apos;Haramaya University&apos;</span>,
                            </div>
                            <div>
                              <span className="text-slate-500">specialization:</span>{' '}
                              <span className="text-purple-300">&apos;Enterprise IS &amp; Systems Dev&apos;</span>
                            </div>
                          </div>
                          <div>
                            <span className="text-slate-500">&#125;,</span>
                          </div>

                          <div>
                            <span className="text-slate-500">coreStack:</span> [
                            <span className="text-indigo-300">&apos;Flutter&apos;</span>,{' '}
                            <span className="text-indigo-300">&apos;Dart&apos;</span>,{' '}
                            <span className="text-indigo-300">&apos;React&apos;</span>,{' '}
                            <span className="text-indigo-300">&apos;TypeScript&apos;</span>,{' '}
                            <span className="text-indigo-300">&apos;SQL&apos;</span>
                            ],
                          </div>

                          <div>
                            <span className="text-slate-500">domains:</span> [
                            <span className="text-purple-300">&apos;Systems Analysis&apos;</span>,{' '}
                            <span className="text-purple-300">&apos;Mobile Architecture&apos;</span>,{' '}
                            <span className="text-purple-300">&apos;Database Modeling&apos;</span>
                            ],
                          </div>

                          <div>
                            <span className="text-slate-500">status:</span>{' '}
                            <span className="text-emerald-400 font-semibold">&apos;Available For Hire&apos;</span>,
                          </div>

                          <div>
                            <span className="text-slate-500">gitProfile:</span>{' '}
                            <a 
                              href={PERSONAL_INFO.githubUrl} 
                              target="_blank" 
                              rel="noreferrer"
                              className="text-indigo-400 hover:underline inline-flex items-center gap-1"
                            >
                              <span>&apos;github.com/nafiijun&apos;</span>
                              <ExternalLink className="w-3 h-3 inline" />
                            </a>
                          </div>
                        </div>

                        <div>
                          &#125;;
                        </div>
                      </>
                    )}

                    {selectedCodeFile === 'dart' && (
                      <div className="space-y-1.5 text-xs">
                        <p><span className="text-purple-400">import</span> <span className="text-emerald-300">&apos;package:flutter/material.dart&apos;</span>;</p>
                        <p><span className="text-purple-400">import</span> <span className="text-emerald-300">&apos;package:flutter_bloc/flutter_bloc.dart&apos;</span>;</p>
                        <br />
                        <p><span className="text-purple-400">class</span> <span className="text-indigo-300">FinalProjectApp</span> <span className="text-purple-400">extends</span> <span className="text-purple-300">StatelessWidget</span> &#123;</p>
                        <p className="pl-4"><span className="text-purple-400">@override</span></p>
                        <p className="pl-4"><span className="text-purple-300">Widget</span> build(<span className="text-purple-300">BuildContext</span> context) &#123;</p>
                        <p className="pl-8"><span className="text-purple-400">return</span> <span className="text-indigo-300">BlocProvider</span>(</p>
                        <p className="pl-12">create: (_) =&gt; <span className="text-indigo-300">HubBloc</span>()..add(<span className="text-indigo-300">InitializeSync</span>()),</p>
                        <p className="pl-12">child: <span className="text-indigo-300">MaterialApp</span>(home: <span className="text-indigo-300">DashboardScreen</span>()),</p>
                        <p className="pl-8">);</p>
                        <p className="pl-4">&#125;</p>
                        <p>&#125;</p>
                      </div>
                    )}

                    {selectedCodeFile === 'sql' && (
                      <div className="space-y-1.5 text-xs">
                        <p className="text-slate-500">-- Haramaya University IS Database Schema</p>
                        <p><span className="text-purple-400">CREATE TABLE</span> <span className="text-indigo-300">academic_records</span> (</p>
                        <p className="pl-4"><span className="text-slate-300">student_id</span> <span className="text-purple-400">UUID PRIMARY KEY</span>,</p>
                        <p className="pl-4"><span className="text-slate-300">full_name</span> <span className="text-purple-400">VARCHAR(100) NOT NULL</span>,</p>
                        <p className="pl-4"><span className="text-slate-300">department</span> <span className="text-purple-400">VARCHAR(50) DEFAULT</span> <span className="text-emerald-300">&apos;Information Systems&apos;</span>,</p>
                        <p className="pl-4"><span className="text-slate-300">gpa</span> <span className="text-purple-400">NUMERIC(3, 2) CHECK</span> (gpa &gt;= 0.0),</p>
                        <p className="pl-4"><span className="text-slate-300">created_at</span> <span className="text-purple-400">TIMESTAMPTZ DEFAULT NOW()</span></p>
                        <p>);</p>
                      </div>
                    )}

                    <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
                      <span className="text-indigo-400 flex items-center gap-1 font-semibold">
                        <Code className="w-3.5 h-3.5" /> Certified IS Graduate
                      </span>
                      <span className="text-slate-500 font-mono">UTF-8</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Floating Quick Feature Card */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-slate-900 border border-slate-700/80 px-4 py-3 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
                  🎓
                </div>
                <div>
                  <p className="text-[11px] font-black text-indigo-400 uppercase tracking-widest">Haramaya IS Graduate</p>
                  <p className="text-xs text-white font-medium">B.Sc. Information Systems</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
