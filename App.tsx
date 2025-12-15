import React from 'react';
import { PlanComparisons } from './components/PlanComparisons';
import { Activity } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Activity className="text-white h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Samuel</h1>
              <p className="text-xs text-slate-400">Plan Nutricional Personalizado</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-2">Estrategia Nutricional</h2>
            <PlanComparisons />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
