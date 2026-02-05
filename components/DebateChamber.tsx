
import React, { useState, useRef, useEffect } from 'react';
import { Philosopher, Message } from '../types';
import { chatWithPhilosopher } from '../services/geminiService';

interface DebateChamberProps {
  philosopher: Philosopher;
  onBack: () => void;
}

const DebateChamber: React.FC<DebateChamberProps> = ({ philosopher, onBack }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'philosopher',
      content: `Greetings, seeker of wisdom. We speak of ${philosopher.disciplines[0].toLowerCase()}—that productive state truly joined with reason. How shall we examine its application in your current inquiry?`,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const response = await chatWithPhilosopher(philosopher, messages, input);
    
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'philosopher',
      content: response,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsTyping(false);
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-950">
      {/* Debate Header */}
      <div className="px-8 py-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h2 className="text-slate-900 dark:text-white text-xl font-bold font-display uppercase tracking-tight">Dialogue with {philosopher.name}</h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-widest">Focusing on {philosopher.disciplines.join(", ")}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Historical Persona Active
          </span>
          <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg text-slate-400">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </div>

      {/* Temporal Disclaimer */}
      {philosopher.temporalConstraint && (
        <div className="bg-primary/10 border-b border-primary/20 px-8 py-2">
          <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">history_edu</span>
            Temporal Constraint Active: {philosopher.temporalConstraint}
          </p>
        </div>
      )}

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''} max-w-4xl mx-auto w-full`}>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${
              msg.role === 'user' 
                ? 'bg-slate-700 border-slate-600 text-white' 
                : 'bg-primary/20 border-primary/30 text-primary'
            }`}>
              <span className="material-symbols-outlined">
                {msg.role === 'user' ? 'person' : 'history_edu'}
              </span>
            </div>
            <div className={`flex flex-col gap-2 ${msg.role === 'user' ? 'items-end' : ''}`}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                {msg.role === 'user' ? 'Interlocutor' : philosopher.name}
              </p>
              <div className={`p-6 rounded-2xl ${
                msg.role === 'user' 
                  ? 'bg-primary text-white rounded-tr-none shadow-lg' 
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-none font-serif text-lg leading-relaxed shadow-sm'
              }`}>
                {msg.content}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-4 max-w-4xl mx-auto w-full opacity-50">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border bg-primary/20 border-primary/30 text-primary">
              <span className="material-symbols-outlined">history_edu</span>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{philosopher.name}</p>
              <div className="flex gap-1 py-3 px-4 bg-slate-200 dark:bg-slate-800 rounded-full w-20 justify-center">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse"></span>
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse delay-75"></span>
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse delay-150"></span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-6 bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto flex gap-4">
          <div className="relative flex-1 group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/20 rounded-xl blur opacity-20 group-focus-within:opacity-40 transition duration-500"></div>
            <div className="relative bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center pr-3 shadow-inner">
              <textarea 
                className="w-full bg-transparent border-none rounded-xl py-4 pl-5 pr-12 focus:ring-0 text-slate-900 dark:text-white resize-none text-base font-serif italic h-14 custom-scrollbar" 
                placeholder={`Ask ${philosopher.name} about the nature of things...`}
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              ></textarea>
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-all active:scale-90"
              >
                <span className="material-symbols-outlined text-3xl">send</span>
              </button>
            </div>
          </div>
          <button className="p-4 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors shrink-0">
            <span className="material-symbols-outlined">mic</span>
          </button>
        </div>
        <div className="max-w-4xl mx-auto mt-3 flex justify-center gap-6">
          <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Era Locked
          </div>
          <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-xs font-bold">auto_awesome</span>
            Dialectic Synthesis Active
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebateChamber;
