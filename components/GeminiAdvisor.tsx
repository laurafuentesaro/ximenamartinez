import React, { useState } from 'react';
import { Send, Bot, User, Sparkles, AlertTriangle } from 'lucide-react';
import { getChatResponse, isApiConfigured } from '../services/geminiService';
import { ChatMessage } from '../types';

export const GeminiAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const apiConfigured = isApiConfigured();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: apiConfigured
        ? 'He revisado las gráficas de Garmin. Los números son reveladores: 20,921 pasos de media y 85km semanales de carrera confirman un gasto energético masivo. El problema NO es que coma mucho, es que probablemente no come lo suficiente para soportar esa carga, lo que eleva el cortisol y frena la pérdida de grasa. ¿Cómo te ayudo a estructurar su dieta?'
        : 'El asistente IA está deshabilitado. Para activarlo, configura la variable de entorno GEMINI_API_KEY en Vercel.'
    }
  ]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Format history for Gemini SDK
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await getChatResponse(history, input);
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Lo siento, hubo un error conectando con el servicio experto.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 h-[600px] flex flex-col">
      <div className="p-4 border-b border-slate-700 bg-slate-900/50 rounded-t-xl flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-emerald-500/20 p-2 rounded-lg">
            <Sparkles className="text-emerald-400" size={20} />
          </div>
          <div>
            <h3 className="text-white font-medium">Asistente Experto IA</h3>
            <p className="text-xs text-slate-400">Analizando Datos Reales</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-600">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl p-4 ${
              msg.role === 'user' 
                ? 'bg-emerald-600 text-white rounded-br-none' 
                : 'bg-slate-700 text-slate-200 rounded-bl-none'
            }`}>
              <div className="flex items-center gap-2 mb-1 opacity-50 text-xs uppercase font-bold">
                {msg.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                {msg.role === 'user' ? 'Tú' : 'Experto'}
              </div>
              <div className="whitespace-pre-wrap text-sm leading-relaxed">
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-700 rounded-2xl p-4 rounded-bl-none animate-pulse">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-slate-700 bg-slate-900/50 rounded-b-xl">
        {!apiConfigured && (
          <div className="mb-3 flex items-center gap-2 text-amber-400 text-xs bg-amber-900/20 p-2 rounded border border-amber-500/30">
            <AlertTriangle size={14} />
            <span>Chat deshabilitado. Configura GEMINI_API_KEY en las variables de entorno de Vercel.</span>
          </div>
        )}
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !loading && apiConfigured && handleSend()}
            placeholder={apiConfigured ? "Pregunta sobre los 21k pasos, carga calórica, etc..." : "Chat deshabilitado - API key no configurada"}
            disabled={!apiConfigured}
            className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 placeholder-slate-500 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim() || !apiConfigured}
            className="bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};