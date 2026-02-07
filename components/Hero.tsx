
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 blur-[120px] rounded-full"></div>
      
      <div className="relative z-10 text-center max-w-4xl">
        <div className="inline-block px-4 py-1 mb-8 border border-cyan-500/30 text-cyan-400 text-[10px] tracking-[0.4em] uppercase rounded-full bg-cyan-500/5 animate-pulse">
          Future Computer Scientist Portfolio
        </div>
        
        <h1 className="text-6xl md:text-9xl font-bold mb-8 tracking-tight leading-none">
          我是 <span className="text-gradient">陳薪宇</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light mb-12">
          「IQ 127 的好奇心，驅動 <span className="text-yellow-400 font-bold underline decoration-yellow-500/30 underline-offset-8">Python</span> 的無限可能。」
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#awards" className="w-full sm:w-auto px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-cyan-900/20">
            查看成就里程碑
          </a>
          <a href="#ask-ai" className="w-full sm:w-auto px-10 py-4 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-bold rounded-sm transition-all">
            與我的 AI 助手對話
          </a>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto opacity-40 hover:opacity-100 transition-opacity">
          <div className="text-center p-4 border-r border-slate-800 last:border-0">
            <div className="text-2xl font-bold text-white">IQ 127</div>
            <div className="text-[10px] uppercase text-slate-500 tracking-widest mt-1">Logic Score</div>
          </div>
          <div className="text-center p-4 border-r border-slate-800 last:border-0">
            <div className="text-2xl font-bold text-white">Grade 5</div>
            <div className="text-[10px] uppercase text-slate-500 tracking-widest mt-1">APCS Entry</div>
          </div>
          <div className="text-center p-4 border-r border-slate-800 last:border-0">
            <div className="text-2xl font-bold text-white">400/400</div>
            <div className="text-[10px] uppercase text-slate-500 tracking-widest mt-1">English Exam</div>
          </div>
          <div className="text-center p-4 border-r border-slate-800 last:border-0">
            <div className="text-2xl font-bold text-white">1st Place</div>
            <div className="text-[10px] uppercase text-slate-500 tracking-widest mt-1">TIRT Award</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
