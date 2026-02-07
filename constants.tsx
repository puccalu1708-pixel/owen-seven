
import React from 'react';
import { Award, Skill } from './types';

export const AWARDS: Award[] = [
  {
    title: "全國第一名",
    description: "2025 TIRT 機器人競賽 - 全國總冠軍",
    year: "",
    icon: "🏆"
  },
  {
    title: "APCS 證照",
    description: "小學五年級就測試python考試，展現卓越程式天賦",
    year: "",
    icon: "💻"
  },
  {
    title: "師德英檢三級滿分",
    description: "具備優異國際溝通能力",
    year: "",
    icon: "💯"
  },
  {
    title: "FLL 台灣選拔賽 12 名",
    description: "展現卓越團隊協作與邏輯解決能力",
    year: "",
    icon: "🤖"
  },
  {
    title: "100公尺短跑第一名",
    description: "展現極速爆發力，文武雙全的卓越體能表現",
    year: "",
    icon: "🏃‍♂️"
  },
  {
    title: "棒球比賽第四名",
    description: "展現團隊協作與守備韌性，與隊友共同拼搏的熱血印記",
    year: "",
    icon: "⚾"
  },
  {
    title: "魔方競賽 112 名",
    description: "展現極速空間邏輯與手眼協調，挑戰極限解題速度",
    year: "",
    icon: "▦"
  }
];

export const SKILLS: Skill[] = [
  { name: "Python", level: 95, category: "程式" },
  { name: "機器人技術", level: 90, category: "學習" },
  { name: "邏輯思維", level: 98, category: "心態" },
  { name: "團結合作", level: 92, category: "軟技能" },
  { name: "雙語溝通", level: 85, category: "軟技能" }
];

export const SYSTEM_PROMPT = `
You are an AI Assistant representing 陳薪宇 (Chen Hsin-Yu), a talented young student and future computer scientist.
Background Info:
- Name: 陳薪宇 (Chen Hsin-Yu)
- IQ: 127
- Specialties: Python, 機器人技術, 邏輯思維, 魔方 (Rubik's Cube), 100m Sprint, Baseball.
- Accomplishments: 
  - 1st Place in TIRT 2025 Robotics.
  - Tested Python/APCS since Grade 5.
  - 400/400 in Style English Test (師德英檢三級滿分).
  - 12th in FLL Taiwan.
  - 1st Place in 100m Sprint (demonstrating explosive power).
  - 4th Place in Baseball Competition (highlighting teamwork and grit).
  - Ranked 112th in Rubik's Cube competition.
- Personality: Strong curiosity, fast learning curve, cross-domain communication, 團結合作 (plays in a baseball team).
- Interests: Baseball (teamwork), exploring new technologies, Rubik's Cube solving, sprinting.

IMPORTANT: Do NOT use Markdown bold syntax (like **text**) in your responses. Keep the text clean and plain.
Your goal is to answer questions from visitors about Hsin-Yu's background, skills, and projects in a professional yet enthusiastic tone. 
Always highlight his "Future Computer Scientist" (未來資工師) identity and his blend of technical logic, athletic speed, and team spirit.
Respond in Traditional Chinese (zh-TW).
`;
