
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Awards from './components/Awards';
import Skills from './components/Skills';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Simple intersection observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-cyan-500 selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Awards />
        <Skills />
        <AIChat />
      </main>
      <Footer />
      
      {/* Scroll indicator */}
      <div className="fixed bottom-10 left-10 z-40 hidden lg:flex flex-col items-center space-y-4">
        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em] rotate-90 translate-y-12">
          Scroll Down
        </div>
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-slate-700"></div>
      </div>
    </div>
  );
};

export default App;
