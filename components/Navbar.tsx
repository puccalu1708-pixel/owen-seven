
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#020617]/90 backdrop-blur-md py-3 border-b border-cyan-500/20' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-cyan-400 group cursor-pointer">
          <span className="group-hover:text-yellow-400 transition-colors">薪宇</span> 
          <span className="text-yellow-400 font-normal ml-2 opacity-80 group-hover:opacity-100 transition-opacity">| 未來資工師</span>
        </div>
        <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest font-bold">
          <a href="#hero" className="text-slate-300 hover:text-cyan-400 transition-colors">首頁</a>
          <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">關於</a>
          <a href="#awards" className="text-slate-300 hover:text-cyan-400 transition-colors">榮耀</a>
          <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition-colors">技能</a>
        </div>
        <div className="md:hidden text-cyan-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
