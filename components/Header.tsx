
import React from 'react';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: any) => void;
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onViewChange, onSearch }) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-3 shrink-0">
      <div className="flex items-center gap-8">
        <div 
          className="flex items-center gap-3 text-primary cursor-pointer"
          onClick={() => onViewChange('explorer')}
        >
          <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
            <span className="material-symbols-outlined">auto_stories</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight font-display">Archive</h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => onViewChange('explorer')}
            className={`text-sm font-medium transition-colors ${currentView === 'explorer' ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary'}`}
          >
            Collection
          </button>
          <button 
            onClick={() => onViewChange('notebook')}
            className={`text-sm font-medium transition-colors ${currentView === 'notebook' ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary'}`}
          >
            Reading Room
          </button>
          <button 
            onClick={() => onViewChange('debate')}
            className={`text-sm font-medium transition-colors ${currentView === 'debate' ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary'}`}
          >
            Debates
          </button>
        </nav>
      </div>

      <div className="flex flex-1 max-w-md mx-8">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-bold">search</span>
          <input 
            className="w-full h-10 pl-10 pr-4 rounded-lg border-none bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary/50 text-sm" 
            placeholder="Search figures, works, or eras..." 
            type="text"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 overflow-hidden">
          <img 
            className="w-full h-full object-cover" 
            src="https://picsum.photos/seed/scholar/64/64" 
            alt="User" 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
