
import React from 'react';
import { AWARDS } from '../constants';

const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">榮耀里程碑</h2>
          <p className="text-slate-500 uppercase tracking-[0.3em] text-sm">Hall of Fame</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {AWARDS.map((award, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-slate-800/30 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 rounded-xl overflow-hidden hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-[100px] -z-10 group-hover:bg-cyan-500/10 transition-all"></div>
              
              <div className="text-5xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {award.icon}
              </div>
              
              <div className="text-[10px] text-cyan-400 font-bold tracking-widest mb-2 uppercase">
                {award.year}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {award.title}
              </h3>
              
              <p className="text-sm text-slate-500 leading-relaxed">
                {award.description}
              </p>
              
              <div className="mt-8 flex items-center text-xs text-slate-600 font-bold group-hover:text-yellow-400 transition-colors">
                <span>VERIFIED RECORD</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
