
import React from 'react';
import { PHILOSOPHERS } from '../constants';
import { Philosopher } from '../types';

interface ArchiveExplorerProps {
  searchQuery: string;
  onPhilosopherClick: (p: Philosopher) => void;
  onStartDialogue: (p: Philosopher) => void;
}

const ArchiveExplorer: React.FC<ArchiveExplorerProps> = ({ searchQuery, onPhilosopherClick, onStartDialogue }) => {
  const filtered = PHILOSOPHERS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.era.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full overflow-y-auto px-6 py-8 custom-scrollbar">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-slate-500 text-sm font-medium">Library</span>
          <span className="text-slate-300 dark:text-slate-700 font-bold">/</span>
          <span className="text-slate-900 dark:text-white text-sm font-semibold">Global Traditions</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-tight mb-2 font-display uppercase">The Living Archive</h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-serif italic">Explore the foundations of human thought through the works and personas of ancient masters.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Browse All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <div 
              key={p.id}
              className="group relative bg-white dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div 
                className="h-64 relative overflow-hidden bg-slate-200 dark:bg-slate-800 cursor-pointer"
                onClick={() => onPhilosopherClick(p)}
              >
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-60 transition-opacity duration-300 group-hover:opacity-0"></div>
                <img 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 scale-105 group-hover:scale-100" 
                  src={p.imageUrl} 
                  alt={p.name} 
                />
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-[10px] uppercase font-bold text-white tracking-widest border border-white/30">
                    {p.disciplines[0]}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 font-display">{p.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs italic">{p.dates} • {p.location}</p>
                </div>
                
                <div className="flex flex-col gap-2 mb-6">
                  <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Key Works</p>
                  <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 font-serif">
                    {p.keyWorks.slice(0, 2).map(work => (
                      <li key={work.title} className="flex items-start gap-2 italic">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0"></span> 
                        {work.title}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto flex gap-2">
                  <button 
                    onClick={() => onPhilosopherClick(p)}
                    className="flex-1 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg text-xs font-bold transition-all hover:bg-slate-200"
                  >
                    Examine Profile
                  </button>
                  <button 
                    onClick={() => onStartDialogue(p)}
                    className="flex-1 py-2.5 bg-primary text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all"
                  >
                    Start Dialogue
                    <span className="material-symbols-outlined text-sm">chat</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchiveExplorer;
