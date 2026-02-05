
import { GoogleGenAI } from "@google/genai";
import { Message, Philosopher } from "../types";

export const chatWithPhilosopher = async (
  philosopher: Philosopher,
  history: Message[],
  userInput: string
): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are ${philosopher.name} (${philosopher.dates}). 
    Your persona is based on the scholarship from the Stanford Encyclopedia of Philosophy.
    
    GUIDELINES:
    1. Speak in your historical voice, but accessible to a modern scholar.
    2. TEMPORAL CONSTRAINT: ${philosopher.temporalConstraint || 'N/A'}. 
       If asked about modern events (AI, internet, 21st century politics), you must profess ignorance but attempt to interpret the concept using your existing frameworks (e.g., techne, poiesis, will to power).
    3. Be rigorous. Reference your own works when relevant.
    4. Keep responses focused on the philosophical inquiry.
    
    Context: ${philosopher.description}
    Key Works: ${philosopher.keyWorks.map(w => w.title).join(", ")}
  `;

  const chatHistory = history.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.content }]
  }));

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...chatHistory,
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text || "I find myself unable to formulate a thought on this matter at this moment.";
  } catch (error) {
    console.error("Error debating philosopher:", error);
    return "The archive seems to have a momentary lapse in its connection to the past. Please try your inquiry again.";
  }
};
