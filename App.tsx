
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ArchiveExplorer from './components/ArchiveExplorer';
import DebateChamber from './components/DebateChamber';
import Notebook from './components/Notebook';
import PhilosopherProfile from './components/PhilosopherProfile';
import { Philosopher } from './types';
import { PHILOSOPHERS } from './constants';

type View = 'explorer' | 'debate' | 'notebook' | 'profile';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('explorer');
  const [selectedPhilosopher, setSelectedPhilosopher] = useState<Philosopher | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const navigateToProfile = (p: Philosopher) => {
    setSelectedPhilosopher(p);
    setCurrentView('profile');
  };

  const startDebate = (p: Philosopher) => {
    setSelectedPhilosopher(p);
    setCurrentView('debate');
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header 
        currentView={currentView} 
        onViewChange={setCurrentView} 
        onSearch={setSearchQuery}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar currentView={currentView} onEraChange={() => {}} />
        
        <main className="flex-1 overflow-hidden relative">
          {currentView === 'explorer' && (
            <ArchiveExplorer 
              searchQuery={searchQuery}
              onPhilosopherClick={navigateToProfile} 
              onStartDialogue={startDebate} 
            />
          )}
          
          {currentView === 'profile' && selectedPhilosopher && (
            <PhilosopherProfile 
              philosopher={selectedPhilosopher} 
              onStartDialogue={() => startDebate(selectedPhilosopher)}
              onBack={() => setCurrentView('explorer')}
            />
          )}
          
          {currentView === 'debate' && selectedPhilosopher && (
            <DebateChamber 
              philosopher={selectedPhilosopher} 
              onBack={() => setCurrentView('explorer')}
            />
          )}
          
          {currentView === 'notebook' && (
            <Notebook />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
