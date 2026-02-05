
import React from 'react';

const Notebook: React.FC = () => {
  return (
    <div className="flex h-full bg-background-dark/40 overflow-hidden">
      {/* Left List */}
      <div className="w-64 border-r border-slate-200 dark:border-slate-800 flex flex-col p-6 gap-6 bg-white dark:bg-background-dark shrink-0">
        <div>
          <h2 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-widest opacity-60 mb-1">Notebook</h2>
          <p className="text-primary text-[10px] font-bold uppercase tracking-widest">Active Drafts</p>
        </div>
        
        <div className="space-y-1">
          {['On Eudaimonia', 'The Will to Power', 'Metaphysical Mapping', 'Categorical Imperative'].map(draft => (
            <button key={draft} className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-all font-medium">
              {draft}
            </button>
          ))}
        </div>
        
        <button className="mt-auto w-full py-3 bg-primary/10 border border-primary/20 text-primary rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all">
          NEW RESEARCH DRAFT
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col p-10 overflow-y-auto custom-scrollbar bg-[radial-gradient(circle_at_50%_0%,rgba(17,82,212,0.03)_0%,transparent_100%)]">
        <div className="max-w-3xl mx-auto w-full space-y-12">
          <header>
            <h1 className="text-5xl font-display font-black text-slate-900 dark:text-white mb-4 italic leading-tight uppercase tracking-tight">On Eudaimonia & Modern Synthesis</h1>
            <p className="text-slate-500 font-serif italic text-lg border-l-2 border-primary/20 pl-6">Drafting an essay on the intersection of Aristotelian ethics and contemporary virtue theory.</p>
          </header>

          <div className="space-y-8">
            <div className="group relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <textarea 
                className="w-full bg-transparent border-none focus:ring-0 p-0 text-xl font-serif leading-relaxed text-slate-800 dark:text-slate-200 h-64 resize-none"
                placeholder="Start typing your synthesis..."
                defaultValue={`To understand Aristotle's view on eudaimonia is to recognize it not as a static state of "happiness" but as a dynamic activity of the soul in accordance with reason.

In my recent dialogue with the Stagirite, we discussed the application of techne to artificial intelligence. He argued that if a system lacks phronesis (practical wisdom), it remains a tool of poiesis rather than a moral agent. This raises a fundamental question for our digital era: can virtue be coded, or is it inextricably linked to the biological final cause?`}
              ></textarea>
            </div>
            
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
              <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">Linked Citations</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 group">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">link</span>
                  <p className="text-sm font-serif text-slate-500 italic group-hover:text-primary transition-colors cursor-pointer underline decoration-primary/20 underline-offset-4">
                    Aristotle, "Nicomachean Ethics", Book VI, 1140a: Definition of Techne
                  </p>
                </div>
                <div className="flex items-start gap-3 group">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">link</span>
                  <p className="text-sm font-serif text-slate-500 italic group-hover:text-primary transition-colors cursor-pointer underline decoration-primary/20 underline-offset-4">
                    SEP Entry: "Virtue Ethics", Section 2.1: The Eudaimonist Framework
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Tools Drawer */}
      <div className="w-[320px] border-l border-slate-200 dark:border-slate-800 flex flex-col p-6 gap-8 bg-white dark:bg-background-dark shrink-0">
        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Synthesis Tools</h3>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-tighter">AI Reasoning Chain</p>
            <div className="flex flex-col gap-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-3">
                  <div className="size-5 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary shrink-0">{i}</div>
                  <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded mt-1.5 opacity-40"></div>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full py-4 bg-primary text-white text-xs font-black uppercase tracking-[0.2em] rounded-xl shadow-xl shadow-primary/30 hover:brightness-110 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm font-bold">ios_share</span>
            Export synthesis
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notebook;
