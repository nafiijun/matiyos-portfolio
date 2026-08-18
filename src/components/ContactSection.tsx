import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Github, 
  MapPin, 
  GraduationCap, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subjectType: 'Project Collaboration',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Create pre-filled mailto
    const mailtoSubject = encodeURIComponent(`[${formData.subjectType}] Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.subjectType}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-400">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Let&apos;s Build Something Impactful
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project in mind, hiring for a software engineering role, or need an Information Systems consultation? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact & Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl shadow-indigo-950/20">
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest font-bold">
                  Direct Channels
                </span>
                <h3 className="text-xl font-extrabold text-white mt-1">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  I typically respond within 24 hours for project inquiries, technical roles, or software consultations.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Email Card */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-mono">Email Address</span>
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}`} 
                        className="font-bold text-white hover:text-indigo-400 transition-colors font-mono"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-indigo-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* GitHub Card */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-white shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-mono">GitHub Profile</span>
                      <a 
                        href={PERSONAL_INFO.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="font-bold text-white hover:text-indigo-400 transition-colors font-mono"
                      >
                        github.com/{PERSONAL_INFO.githubUsername}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location & University Card */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-300 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-mono">Alma Mater & Location</span>
                    <span className="font-bold text-white">Haramaya University • Ethiopia</span>
                    <span className="text-slate-400 block text-[11px]">Available for Remote Worldwide</span>
                  </div>
                </div>

              </div>

              {/* Status Badge */}
              <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse mt-1 shrink-0" />
                <div className="space-y-0.5">
                  <p className="font-bold text-white">Current Availability Status</p>
                  <p className="text-slate-300 leading-relaxed">
                    Open for Full-time Software Engineering roles, Flutter mobile contracts, and Information Systems architecture consulting.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 no-print">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-950/20">
              <h3 className="text-xl font-extrabold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in your project or role details below to connect with Matiyos.
              </p>

              {submitted ? (
                <div className="p-8 text-center space-y-4 bg-slate-950 rounded-2xl border border-indigo-500/30">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Inquiry Initialized!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Your email client has been prepared with the message. You can also reach Matiyos directly at{' '}
                    <strong className="text-indigo-400 font-mono">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subjectType: 'Project Collaboration', message: '' });
                    }}
                    className="mt-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-bold block">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors shadow-inner"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-bold block">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-bold block">Inquiry Type</label>
                    <select
                      value={formData.subjectType}
                      onChange={(e) => setFormData({ ...formData, subjectType: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-2.5 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors shadow-inner"
                    >
                      <option value="Project Collaboration">Project Collaboration & Web Dev</option>
                      <option value="Flutter Mobile App">Flutter & Mobile App Development</option>
                      <option value="Information Systems">Information Systems & Database Architecture</option>
                      <option value="Full-Time Position">Full-Time / Contract Software Developer Role</option>
                      <option value="General Question">General Inquiry / Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-bold block">Message & Project Overview</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your goals, requirements, timeline, or position details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none leading-relaxed shadow-inner"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-2xl shadow-lg shadow-indigo-900/30 transition-all hover:scale-[1.01] active:scale-[0.99] border border-indigo-400/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Matiyos</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
