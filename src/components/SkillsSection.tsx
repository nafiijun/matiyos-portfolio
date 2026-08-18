import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Code2, 
  Smartphone, 
  Database, 
  Layers, 
  Wrench, 
  Search, 
  Star, 
  Check, 
  Sparkles 
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const iconsMap: Record<string, React.ReactNode> = {
    Smartphone: <Smartphone className="w-4 h-4" />,
    Database: <Database className="w-4 h-4" />,
    Layers: <Layers className="w-4 h-4" />,
    Wrench: <Wrench className="w-4 h-4" />,
    Code2: <Code2 className="w-4 h-4" />
  };

  // Filter skills based on tab and search
  const filteredCategories = SKILL_CATEGORIES.map(category => {
    if (activeTab !== 'all' && category.id !== activeTab) {
      return null;
    }

    const matchingSkills = category.skills.filter(skill => 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.details && skill.details.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (matchingSkills.length === 0 && searchQuery) {
      return null;
    }

    return {
      ...category,
      skills: matchingSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-400">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities &amp; Stacks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Skills &amp; Core Technologies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive stack encompassing mobile development, full-stack web engineering, database architecture, and enterprise systems analysis.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 no-print">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900 border border-slate-800 rounded-2xl w-full md:w-auto overflow-x-auto shadow-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-900/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              All Skills ({SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0)})
            </button>

            {SKILL_CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-900/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {iconsMap[category.icon]}
                <span>{category.title}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g., Flutter, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-indigo-400 hover:text-white absolute right-3.5 top-1/2 -translate-y-1/2 font-semibold"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Skill Groups Grid */}
        <div className="space-y-10">
          {filteredCategories.map((category) => {
            if (!category) return null;
            return (
              <div key={category.id} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400">
                    {iconsMap[category.icon]}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{category.title}</h3>
                    <p className="text-xs text-slate-400">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, sIdx) => {
                    const isExpert = skill.level === 'Expert';
                    const isAdvanced = skill.level === 'Advanced';

                    return (
                      <motion.div
                        key={sIdx}
                        whileHover={{ 
                          y: -5, 
                          scale: 1.025,
                          transition: { type: 'spring', stiffness: 350, damping: 20 }
                        }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-5 rounded-2xl border transition-colors duration-200 relative group cursor-default ${
                          skill.isPrimary
                            ? 'bg-slate-900 border-slate-800 hover:border-indigo-500/60 shadow-lg shadow-indigo-950/20 hover:shadow-indigo-900/30'
                            : 'bg-slate-900/60 border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900/90'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            {skill.isPrimary && (
                              <motion.div
                                whileHover={{ rotate: 72, scale: 1.2 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                              >
                                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                              </motion.div>
                            )}
                            <h4 className="font-bold text-white text-sm group-hover:text-indigo-300 transition-colors">
                              {skill.name}
                            </h4>
                          </div>

                          <motion.span 
                            whileHover={{ scale: 1.1 }}
                            className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase shrink-0 transition-shadow ${
                              isExpert
                                ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 group-hover:shadow-sm group-hover:shadow-indigo-500/20'
                                : isAdvanced
                                ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30 group-hover:shadow-sm group-hover:shadow-purple-500/20'
                                : 'bg-slate-800 text-slate-300 border border-slate-700'
                            }`}
                          >
                            {skill.level}
                          </motion.span>
                        </div>

                        {skill.details && (
                          <p className="text-xs text-slate-400 leading-relaxed mb-3 group-hover:text-slate-300 transition-colors">
                            {skill.details}
                          </p>
                        )}

                        <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                          <span className="font-mono text-slate-500">Practical Exp:</span>
                          <span className="font-bold text-slate-200 group-hover:text-indigo-200 transition-colors">{skill.experience}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {filteredCategories.length === 0 && (
            <div className="p-12 text-center bg-slate-900 border border-slate-800 rounded-3xl">
              <p className="text-slate-400 text-sm">No skills found matching &quot;{searchQuery}&quot;.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                className="mt-3 text-xs font-bold text-indigo-400 hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
