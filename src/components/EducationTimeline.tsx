import React from 'react';
import { EDUCATION_DATA, EXPERIENCE_TIMELINE } from '../data/portfolioData';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Calendar, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  Layers, 
  Sparkles 
} from 'lucide-react';

export const EducationTimeline: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications & Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Education & Career Milestones
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Formal training in Information Systems at Haramaya University combined with practical software and mobile application engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Education Deep Dive at Haramaya University */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-950/20 relative overflow-hidden">
              
              {/* Top Banner with University Emblem & Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-2xl shadow-lg shadow-indigo-900/30 shrink-0">
                    🎓
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                      {EDUCATION_DATA.degree}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white mt-1.5">
                      {EDUCATION_DATA.field}
                    </h3>
                    <p className="text-sm font-bold text-indigo-400">
                      {EDUCATION_DATA.institution}
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right space-y-1 text-xs text-slate-400 font-mono">
                  <div className="flex sm:justify-end items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{EDUCATION_DATA.location}</span>
                  </div>
                  <div className="flex sm:justify-end items-center gap-1.5 text-indigo-400 font-bold">
                    <Award className="w-3.5 h-3.5" />
                    <span>{EDUCATION_DATA.status}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed pt-6">
                {EDUCATION_DATA.description}
              </p>

              {/* Coursework Grid */}
              <div className="pt-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span>Key Coursework & Domains Mastered</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {EDUCATION_DATA.keyCourses.map((course, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 hover:border-indigo-500/30 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span className="font-semibold">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capstone Project Card */}
              <div className="pt-6 mt-6 border-t border-slate-800">
                <div className="p-5 rounded-2xl bg-slate-950 border border-indigo-500/20 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-indigo-400 block">
                    Degree Capstone Project
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    {EDUCATION_DATA.capstoneProject.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {EDUCATION_DATA.capstoneProject.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {EDUCATION_DATA.capstoneProject.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-900 text-indigo-300 border border-indigo-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Experience & Project Journey */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-4 h-4 text-indigo-400" />
              <h3 className="text-lg font-bold text-white">Experience & Milestones</h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
              {EXPERIENCE_TIMELINE.map((item, idx) => (
                <div key={idx} className="relative pl-9 group">
                  {/* Timeline bullet dot */}
                  <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-400 group-hover:scale-125 transition-transform" />

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2.5 shadow-lg group-hover:border-indigo-500/40 transition-colors">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-indigo-400">
                        {item.period}
                      </span>
                      <span className="text-[11px] text-slate-400">{item.location}</span>
                    </div>

                    <h4 className="text-base font-bold text-white">
                      {item.role}
                    </h4>
                    <p className="text-xs font-semibold text-slate-400">
                      {item.company}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-800">
                      {item.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="text-indigo-400 font-bold">›</span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* University Citation Note */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-1">
              <p className="font-bold text-white">About Haramaya University:</p>
              <p className="leading-relaxed">
                One of the oldest and most esteemed public research universities in Ethiopia, known for rigorous standards in science, technology, computing, and information sciences.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
