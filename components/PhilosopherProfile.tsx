
import React from 'react';
import { Philosopher } from '../types';

interface PhilosopherProfileProps {
  philosopher: Philosopher;
  onStartDialogue: () => void;
  onBack: () => void;
}

const PhilosopherProfile: React.FC<PhilosopherProfileProps> = ({ philosopher, onStartDialogue, onBack }) => {
  return (
    <div className="h-full overflow-y-auto px-6 py-8 custom-scrollbar">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-sm font-medium mb-8"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Explorer
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="relative group">
              <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 -z-10 rounded-xl"></div>
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-900">
                <img 
                  src={philosopher.imageUrl} 
                  alt={philosopher.name} 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary px-4 py-2 text-white font-display font-bold text-sm shadow-xl rounded-lg">
                {philosopher.era}
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-100 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
              <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">Historical Reach</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-slate-500 text-xs italic font-serif">Key Works</span>
                  <span className="text-slate-900 dark:text-white font-bold">{philosopher.keyWorks.length}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-slate-500 text-xs italic font-serif">Location</span>
                  <span className="text-slate-900 dark:text-white font-bold">{philosopher.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-xs italic font-serif">Active Debates</span>
                  <span className="text-slate-900 dark:text-white font-bold">14,203</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-8">
            <div>
              <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] tracking-[0.2em] uppercase font-bold mb-4 rounded">Master Polymath</div>
              <h1 className="text-6xl font-display font-black text-slate-900 dark:text-white mb-2 leading-tight uppercase">{philosopher.name}</h1>
              <p className="text-primary text-2xl font-serif italic">{philosopher.dates}</p>
            </div>

            <div className="bg-primary/5 p-6 border-l-4 border-primary rounded-r-xl">
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-lg font-bold">gavel</span>
                Knowledge Boundary
              </h3>
              <p className="text-slate-600 dark:text-slate-300 font-serif leading-relaxed italic text-lg">
                {philosopher.description}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center justify-between">
                <span>Primary Bibliography</span>
                <span className="text-[10px] text-primary cursor-pointer hover:underline">View All Works</span>
              </h3>
              <div className="space-y-4">
                {philosopher.keyWorks.map(work => (
                  <div key={work.title} className="p-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 rounded-lg group hover:border-primary/50 transition-all">
                    <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary">{work.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-serif">{work.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={onStartDialogue}
              className="w-full py-4 bg-primary text-white font-display tracking-widest text-lg font-black hover:bg-blue-700 transition-all rounded-xl shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
            >
              START NEW DIALOGUE
              <span className="material-symbols-outlined">bolt</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilosopherProfile;
