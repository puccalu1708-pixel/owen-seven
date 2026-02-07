
export interface Award {
  title: string;
  description: string;
  year: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

// Added ChatMessage interface for AI chat components
export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}