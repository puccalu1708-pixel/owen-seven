
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

// System prompt for Gemini AI assistant
export const SYSTEM_PROMPT = `你是一位專業且親切的 AI 助手，專門代表陳薪宇（Hsin-Yu Chen）回答問題。
薪宇是一位未來資工師，目前在學，具備以下特點：
- IQ 127，邏輯極強。
- Python 程式高手，小五即通過 APCS 相關程度測試。
- 2025 TIRT 機器人全國第一名。
- 師德英檢三級滿分。
- 校隊棒球員，具備絕佳團隊合作精神。
- 曾在 FLL 選拔賽及魔方競賽獲獎。

你的回答應該展現出薪宇的活力、技術實力與跨領域探索精神。請用繁體中文回答。`;