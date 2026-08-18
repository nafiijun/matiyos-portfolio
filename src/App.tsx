import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { GitHubExplorer } from './components/GitHubExplorer';
import { EducationTimeline } from './components/EducationTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { TerminalModal } from './components/TerminalModal';
import { ProfileModal } from './components/ProfileModal';
import { ArrowUp } from 'lucide-react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.21, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll depth tracking for top animated progress indicator
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  // Track scroll position to show Back to Top button once past Hero
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setShowBackToTop(latest > 450);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-emerald-500 selection:text-white relative">
      
      {/* Thin Animated Top Scroll Progress Bar */}
      <motion.div
        id="scroll-progress-indicator"
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 z-50 origin-left shadow-sm shadow-indigo-500/50"
        style={{ scaleX }}
      />

      {/* Top Fixed Header Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Main Content Sections with Motion Entrance Animations */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenProfile={() => setIsProfileOpen(true)}
        />
        
        <AnimatedSection>
          <About onOpenProfile={() => setIsProfileOpen(true)} />
        </AnimatedSection>

        <AnimatedSection>
          <SkillsSection />
        </AnimatedSection>

        <AnimatedSection>
          <ProjectsSection />
        </AnimatedSection>

        <AnimatedSection>
          <EducationTimeline />
        </AnimatedSection>

        <AnimatedSection>
          <GitHubExplorer onOpenProfile={() => setIsProfileOpen(true)} />
        </AnimatedSection>

        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </main>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            id="back-to-top-button"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-indigo-500/40 hover:border-indigo-400 shadow-xl shadow-indigo-950/60 backdrop-blur-md group flex items-center justify-center cursor-pointer"
          >
            <ArrowUp className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />

      {/* Interactive CV / Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Interactive CLI Terminal Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => {
          setIsTerminalOpen(false);
          setIsResumeOpen(true);
        }}
      />
      {/* Interactive Developer Profile & Photo Frame Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onOpenResume={() => {
          setIsProfileOpen(false);
          setIsResumeOpen(true);
        }}
        onOpenTerminal={() => {
          setIsProfileOpen(false);
          setIsTerminalOpen(true);
        }}
      />
    </div>
  );
}
