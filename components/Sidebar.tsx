
import React from 'react';
import { Era } from '../types';

interface SidebarProps {
  currentView: string;
  onEraChange: (era: Era) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onEraChange }) => {
  return (
    <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark hidden lg:flex flex-col p-6 gap-8 overflow-y-auto shrink-0">
      <section className="flex flex-col gap-4">
        <div>
          <h3 className="text-slate-900 dark:text-white text-[10px] font-bold uppercase tracking-widest opacity-60">Chronological Eras</h3>
        </div>
        <nav className="flex flex-col gap-1">
          {[
            { era: Era.Antiquity, icon: 'history_edu' },
            { era: Era.MiddleAges, icon: 'castle' },
            { era: Era.Renaissance, icon: 'palette' },
            { era: Era.Enlightenment, icon: 'lightbulb' },
            { era: Era.IndustrialEra, icon: 'factory' },
            { era: Era.Modernity, icon: 'devices' }
          ].map(({ era, icon }) => (
            <button
              key={era}
              onClick={() => onEraChange(era)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-all group"
            >
              <span className="material-symbols-outlined text-lg group-hover:text-primary">{icon}</span>
              <span className="text-xs font-semibold">{era}</span>
            </button>
          ))}
        </nav>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-slate-900 dark:text-white text-[10px] font-bold uppercase tracking-widest opacity-60">Disciplines</h3>
        <nav className="flex flex-col gap-1">
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
            <span className="material-symbols-outlined text-lg">gavel</span>
            <span className="text-xs font-semibold">Philosophy</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
            <span className="material-symbols-outlined text-lg">science</span>
            <span className="text-xs font-semibold">Science</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
            <span className="material-symbols-outlined text-lg">menu_book</span>
            <span className="text-xs font-semibold">Literature</span>
          </a>
        </nav>
      </section>

      <div className="mt-auto">
        <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Archive Stats</p>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="flex size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            1,240 Scholars Live
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
