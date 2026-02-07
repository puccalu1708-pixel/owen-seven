
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-slate-900/40">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">核心技能與天賦</h2>
          <p className="text-yellow-400 font-bold tracking-widest uppercase text-sm">Tech Stack & Logic Power</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {[
            { name: "Python (核心)", color: "yellow" },
            { name: "機器人技術", color: "cyan" },
            { name: "快速邏輯塊", color: "blue" },
            { name: "團隊合作 (棒球隊)", color: "green" },
            { name: "中英文雙語溝通", color: "slate" }
          ].map((tag, idx) => (
            <span 
              key={idx} 
              className={`px-6 py-2 bg-${tag.color}-500/10 border border-${tag.color}-500/30 text-${tag.color}-400 text-sm font-bold rounded-full hover:bg-${tag.color}-500/20 transition-all cursor-default`}
            >
              {tag.name}
            </span>
          ))}
        </div>
        
        <div className="grid gap-10">
          {SKILLS.map((skill, index) => (
            <div key={index} className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold block mb-1">
                    {skill.category}
                  </span>
                  <h4 className="text-xl font-bold text-white">{skill.name}</h4>
                </div>
                <span className="text-cyan-400 font-mono font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-[2px]">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 p-8 bg-slate-800/50 rounded-2xl border border-slate-700 flex flex-col md:flex-row items-center gap-8">
          <div className="text-6xl">⚾</div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">總結</h4>
            <p className="text-slate-400 leading-relaxed">
              棒球場上的守備位置，讓薪宇學會了如何在團隊中扮演關鍵角色。IQ 127 的邏輯思維與棒球場上的冷靜分析相輔相成，使他在處理複雜程式與除錯時，具備絕佳的預判與反應力。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
