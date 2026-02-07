
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: '您好！我是薪宇的 AI 助手。想多了解他的程式作品、競賽經歷，或是他在棒球隊的事蹟嗎？儘管問我吧！' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await geminiService.chat(userMessage, messages.map(m => ({
        role: m.role,
        content: m.content
      })));
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "抱歉，我的大腦斷線了，請再試一次。" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ask-ai" className="py-32 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded-full mb-4 border border-cyan-500/20">
            AI Powered Intelligence
          </div>
          <h2 className="text-4xl font-bold mb-4">與我的 AI 助手對話</h2>
          <p className="text-slate-500">深入了解薪宇的技術細節與成長故事</p>
        </div>

        <div className="bg-slate-800/80 border border-slate-700 rounded-3xl overflow-hidden flex flex-col h-[600px] shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-slate-700 flex items-center justify-between bg-slate-800">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-yellow-500 flex items-center justify-center text-xl">
                🤖
              </div>
              <div>
                <div className="font-bold text-white text-sm">Hsin-Yu AI</div>
                <div className="flex items-center text-[10px] text-green-400 font-bold uppercase tracking-tighter">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                  Online & Learning
                </div>
              </div>
            </div>
            <button 
              onClick={() => setMessages([{ role: 'assistant', content: '對話已重置。有什麼我可以幫您的嗎？' }])}
              className="text-xs text-slate-500 hover:text-white transition-colors"
            >
              重置對話
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-6 py-4 ${
                  msg.role === 'user' 
                    ? 'bg-cyan-600 text-white rounded-tr-none shadow-lg shadow-cyan-900/20' 
                    : 'bg-slate-700 text-slate-200 rounded-tl-none border border-slate-600'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-700/50 rounded-2xl rounded-tl-none px-6 py-4 flex space-x-2">
                  <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-6 bg-slate-800 border-t border-slate-700">
            <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="例如：薪宇在 TIRT 競賽做了什麼？"
                className="w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-2xl px-6 py-4 pr-16 focus:outline-none focus:border-cyan-500 transition-colors"
                disabled={isLoading}
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-2 w-10 h-10 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white rounded-xl flex items-center justify-center transition-all shadow-lg active:scale-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
              {[
                "他的 Python 能力如何？", 
                "機器人競賽得名", 
                "棒球隊故事"
              ].map((suggestion, idx) => (
                <button 
                  key={idx}
                  type="button"
                  onClick={() => setInput(suggestion)}
                  className="whitespace-nowrap px-3 py-1 bg-slate-700/50 hover:bg-slate-700 text-[10px] text-slate-400 rounded-full transition-colors border border-slate-600"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
