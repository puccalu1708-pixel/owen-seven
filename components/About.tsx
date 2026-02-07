
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-slate-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 text-cyan-400 mb-2">
              <span className="h-[1px] w-8 bg-cyan-400"></span>
              <span className="text-sm font-bold uppercase tracking-widest">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              不只是寫程式的，<br />
              更是<span className="text-yellow-400">跨領域</span>的探索者。
            </h2>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                我是一位對世界充滿強烈好奇心的學習者。憑藉著對語言的天賦，我不僅能流利地在人際間溝通，更能精準地與機器對話。
              </p>
              <p>
                雖然我沈浸於資工技術的純粹邏輯，但我並非典型的「書呆子」。我熱衷於多元學習，享受在棒球隊中與隊友並肩作戰的默契，並將這種團隊協作精神應用於程式開發。
              </p>
              <div className="p-4 border-l-2 border-cyan-500 bg-cyan-500/5 text-cyan-400 italic font-medium">
                「對我而言，程式碼不僅是指令，是改變未來的語言。」
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-yellow-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-slate-800 border border-slate-700 p-10 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <span className="text-yellow-400 mr-3">#</span> 人格特質
              </h3>
              <div className="space-y-6">
                {[
                  { label: "快速邏輯反應", desc: "能在極短時間內拆解複雜問題" },
                  { label: "極速學習曲線 (IQ 127)", desc: "對新技術有極佳的吸收與轉化能力" },
                  { label: "跨領域溝通天才", desc: "擅長將技術語言轉化為白話溝通" },
                  { label: "團隊合作核心", desc: "棒球隊磨練出的絕佳運動員精神與默契" }
                ].map((trait, idx) => (
                  <div key={idx} className="group/item">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                      <div>
                        <h4 className="font-bold text-slate-200 group-hover/item:text-cyan-400 transition-colors">{trait.label}</h4>
                        <p className="text-sm text-slate-500">{trait.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
