
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

export class GeminiService {
  /**
   * Sends a message to the Gemini API and returns the response text.
   * Creates a new instance on each call to ensure the latest API key context.
   */
  async chat(message: string, history: { role: string; content: string }[]) {
    try {
      // Use process.env.API_KEY directly as per guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_PROMPT,
        },
      });

      // sendMessage only accepts the message parameter
      const response = await chat.sendMessage({ message });
      
      // response.text is a property, not a method
      return response.text || "抱歉，我現在無法回答這個問題。";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "發生了點小錯誤，請稍後再試。";
    }
  }
}

export const geminiService = new GeminiService();