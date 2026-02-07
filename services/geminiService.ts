
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

export class GeminiService {
  private ai: GoogleGenAI;
  
  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async chat(message: string, history: { role: string; content: string }[]) {
    try {
      // Create a new instance to ensure latest API key context if needed
      const currentAi = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const chat = currentAi.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_PROMPT,
        },
      });

      // Simple implementation: send the message. For true history, we'd map history to 'contents'
      // but chat.sendMessage is the standard for the SDK as per guidelines.
      const response = await chat.sendMessage({ message });
      return response.text || "抱歉，我現在無法回答這個問題。";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "發生了點小錯誤，請稍後再試。";
    }
  }
}

export const geminiService = new GeminiService();
