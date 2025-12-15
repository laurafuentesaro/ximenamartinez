import React from 'react';
import { PatientDashboard } from './components/PatientDashboard';
import { PatientData } from './types';
import { Activity } from 'lucide-react';

// Updated with real data from screenshots
const patientData: PatientData = {
  name: "Paciente Corredor (Datos Reales)",
  gender: 'male',
  age: 32,
  height: 160,
  weight: 63,
  targetWeight: 59,
  activityLevel: 'athlete',
  telemetry: {
    avgDailySteps: 20921, // From "Media diaria" screenshot
    avgDailyCalories: 2654, // From "Media total" screenshot
    avgRestingCalories: 1690, // From "Promedio en reposo"
    avgActiveCalories: 963, // From "Media activ"
    weeklyRunDistance: 85, // From "Media semanal"
    monthlyRunVolume: 368 // From "Media mensual" approx
  }
};

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
              <h1 className="text-xl font-bold text-white tracking-tight">SportsNutriPro</h1>
              <p className="text-xs text-slate-400">Análisis con Datos Reales (Garmin/Connect)</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="flex flex-col items-end">
              <span className="text-slate-300 font-medium">{patientData.name}</span>
              <span className="text-slate-500 text-xs">Obj: {patientData.targetWeight}kg | Actual: {patientData.weight}kg</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PatientDashboard patient={patientData} />
      </main>
    </div>
  );
};

export default App;