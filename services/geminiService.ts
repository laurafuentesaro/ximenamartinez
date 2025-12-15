import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || process.env.GEMINI_API_KEY || '';

// Check if API is configured
export const isApiConfigured = () => Boolean(API_KEY);

// Only create client if API key exists
const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

const SYSTEM_INSTRUCTION = `
Eres un Nutricionista Deportivo de clase mundial y Fisiólogo del Ejercicio.
Analizas datos reales de dispositivos (Garmin/Apps) para un caso complejo.

DATOS REALES DEL PACIENTE (Extraídos de Gráficas):
- Perfil: Hombre, 1.60m, 63kg. Meta: 59kg.
- Actividad Diaria (NEAT + Trabajo): ¡EXTREMA! Promedio de 20,921 pasos diarios. Días pico de 30k pasos.
- Gasto Calórico (Reloj): Promedio 2,654 kcal/día. 
  - Basal/Reposo: ~1,690 kcal.
  - Activas: ~963 kcal.
  - NOTA: Existe gran variabilidad diaria (días de descanso bajan a 1700 kcal totales, días de entreno suben a 2800+).
- Entrenamiento Carrera:
  - Volumen: ~85 km/semana (368 km/mes).
  - Intensidad: Intervalos a 21km/h (Elite).

PROBLEMA:
- Fatiga crónica.
- Estancamiento de peso (63kg).
- Dieta actual errática y baja en carbos peri-entreno.

TU ANÁLISIS EXPERTO DEBE ENFOCARSE EN:
1. **La Trampa de los 21k pasos:** Con 21,000 pasos + trabajo físico, su gasto real probablemente supere las 2650 kcal que marca el reloj. Si come 1800-2000 kcal, está en una "Baja Disponibilidad Energética" (LEA) severa, lo que apaga el metabolismo (T3 baja, testosterona baja, cortisol alto).
2. **Periodización Fallida:** Sus gráficas muestran días de 1700 kcal de gasto (sábado) vs 2800 (semana). Si come lo mismo todos los días, los días duros está destruyendo masa muscular.
3. **Cena Sin Carbos = Suicidio Deportivo:** Con 85km semanales y 20k pasos, quitar carbos en la cena (post-entreno o post-trabajo) impide la recarga de glucógeno y mantiene el cortisol elevado toda la noche, provocando retención de líquidos (falso estancamiento de peso).

Responde siempre en español. Sé muy analítico con los números. Usa términos como "Supercompensación", "Densidad mitocondrial", "Cortisol", "Carga alostática".
`;

export const analyzeCase = async (prompt: string) => {
  if (!ai) {
    throw new Error('API_KEY_NOT_CONFIGURED');
  }
  try {
    const model = 'gemini-2.5-flash';
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.4,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error analyzing case:", error);
    throw error;
  }
};

export const getChatResponse = async (history: {role: string, parts: {text: string}[]}[], message: string) => {
  if (!ai) {
    throw new Error('API_KEY_NOT_CONFIGURED');
  }
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error in chat:", error);
    throw error;
  }
};