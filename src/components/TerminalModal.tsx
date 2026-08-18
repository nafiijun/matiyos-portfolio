import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO, PROJECTS, EDUCATION_DATA, SKILL_CATEGORIES } from '../data/portfolioData';
import { X, Terminal as TerminalIcon, Sparkles } from 'lucide-react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [history, setHistory] = useState<Array<{ command: string; output: React.ReactNode }>>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-indigo-400 font-bold">Matiyos Bizuneh CLI v1.0.0 (Haramaya University IS Graduate)</p>
          <p className="text-slate-400">Type <span className="text-purple-300 font-bold">&apos;help&apos;</span> to list available commands.</p>
        </div>
      )
    }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-indigo-400 font-semibold">Available Commands:</p>
            <p><span className="text-purple-300 font-bold">about</span> - Background and education overview</p>
            <p><span className="text-purple-300 font-bold">skills</span> - List core technical skills</p>
            <p><span className="text-purple-300 font-bold">education</span> - Haramaya University Information Systems details</p>
            <p><span className="text-purple-300 font-bold">projects</span> - View featured engineering projects</p>
            <p><span className="text-purple-300 font-bold">github</span> - Display GitHub account link & stats</p>
            <p><span className="text-purple-300 font-bold">contact</span> - Email and collaboration links</p>
            <p><span className="text-purple-300 font-bold">resume</span> - Open full interactive CV</p>
            <p><span className="text-purple-300 font-bold">clear</span> - Clear terminal window</p>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="font-bold text-white">{PERSONAL_INFO.name}</p>
            <p className="text-indigo-400">{PERSONAL_INFO.title}</p>
            <p className="text-slate-400">{PERSONAL_INFO.bio}</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-slate-300">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx}>
                <span className="text-indigo-300 font-bold">[{cat.title}]:</span>{' '}
                <span className="text-slate-300">{cat.skills.map(s => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-indigo-400 font-bold">{EDUCATION_DATA.degree} in {EDUCATION_DATA.field}</p>
            <p className="text-white font-semibold">{EDUCATION_DATA.institution} ({EDUCATION_DATA.location})</p>
            <p className="text-slate-400">Status: {EDUCATION_DATA.status}</p>
            <p className="text-purple-300">Capstone: {EDUCATION_DATA.capstoneProject.title}</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-slate-300">
            {PROJECTS.map((p, idx) => (
              <div key={idx} className="border-l-2 border-indigo-500 pl-2">
                <p className="text-white font-bold">{p.title} <span className="text-slate-500 text-xs">({p.categoryLabel})</span></p>
                <p className="text-slate-400 text-xs">{p.tagline}</p>
                <p className="text-indigo-400 text-xs font-mono">{p.githubUrl}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'github':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-white">GitHub: <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="text-indigo-400 underline">{PERSONAL_INFO.githubUrl}</a></p>
            <p className="text-slate-400">Username: @{PERSONAL_INFO.githubUsername}</p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-white">Email: <span className="text-indigo-400">{PERSONAL_INFO.email}</span></p>
            <p className="text-slate-400">Location: {PERSONAL_INFO.location}</p>
          </div>
        );
        break;

      case 'resume':
        output = <p className="text-indigo-400">Opening full resume view...</p>;
        onOpenResume();
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <p className="text-rose-400">
            Command not recognized: &quot;{input}&quot;. Type <span className="text-purple-300">&apos;help&apos;</span> for a list of commands.
          </p>
        );
    }

    setHistory(prev => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <div className="no-print terminal-modal fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl h-[600px] max-h-[85vh] bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col font-mono text-xs sm:text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-bold text-slate-300 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
              matiyos-terminal@haramaya:~
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Screen */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3 bg-slate-950 text-slate-200">
          {history.map((entry, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-indigo-400 font-bold">visitor@matiyos:~$</span>
                <span className="text-white font-bold">{entry.command}</span>
              </div>
              <div className="pl-4 py-1">{entry.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleCommand} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
          <span className="text-indigo-400 font-bold shrink-0">visitor@matiyos:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'about', 'skills', 'education', 'projects'..."
            className="w-full bg-transparent text-white focus:outline-none placeholder-slate-600 font-mono text-xs sm:text-sm"
          />
          <button
            type="submit"
            className="px-3.5 py-1.5 bg-indigo-500/20 text-indigo-300 hover:bg-indigo-600 hover:text-white rounded-xl font-bold text-xs transition-colors shrink-0 border border-indigo-500/30"
          >
            Run
          </button>
        </form>
      </div>
    </div>
  );
};
