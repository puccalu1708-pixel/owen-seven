
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-slate-900 bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="space-y-4">
          <div className="text-2xl font-bold tracking-tighter text-cyan-400">
            薪宇 <span className="text-yellow-400">| 未來資工師</span>
          </div>
          <p className="text-slate-500 text-sm max-w-sm">
            致力於透過程式碼解決現實難題，融合邏輯思維與團隊合作，開創科技的無限可能。
          </p>
        </div>
        
        <div className="flex space-x-12">
          <div>
            <h5 className="text-xs uppercase font-bold text-slate-300 tracking-widest mb-6">Navigation</h5>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors">首頁</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">關於</a></li>
              <li><a href="#awards" className="hover:text-cyan-400 transition-colors">榮耀</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">技能</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs uppercase font-bold text-slate-300 tracking-widest mb-6">Socials</h5>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 uppercase tracking-widest font-bold">
        <p>© 2026 CHEN HSIN-YU. ALL RIGHTS RESERVED.</p>
        <p className="mt-4 md:mt-0">MADE WITH CURIOSITY & CODE</p>
      </div>
    </footer>
  );
};

export default Footer;
