export interface ActivityDef {
  key: string;
  icon: string;
  phase: 'opening' | 'closing';
}

export const ACTIVITIES: ActivityDef[] = [
  // Opening
  { key: '2truths', icon: '🎭', phase: 'opening' },
  { key: 'energy-meter', icon: '⚡', phase: 'opening' },
  { key: 'team-compass', icon: '🧭', phase: 'opening' },
  { key: 'desert-island', icon: '🏝️', phase: 'opening' },
  { key: 'superpower', icon: '🦸', phase: 'opening' },
  // Closing
  { key: 'debrief', icon: '💬', phase: 'closing' },
  { key: 'full-eval', icon: '⭐', phase: 'closing' },
  { key: 'wordcloud', icon: '☁️', phase: 'closing' },
  { key: 'energy-meter-post', icon: '📊', phase: 'closing' },
];

export const OPENING_ACTIVITIES = ACTIVITIES.filter(a => a.phase === 'opening');
export const CLOSING_ACTIVITIES = ACTIVITIES.filter(a => a.phase === 'closing');

export const ANIMALS = [
  { emoji: '🦁', name: { fr: 'Lion', en: 'Lion' } },
  { emoji: '🐺', name: { fr: 'Loup', en: 'Wolf' } },
  { emoji: '🦅', name: { fr: 'Aigle', en: 'Eagle' } },
  { emoji: '🐬', name: { fr: 'Dauphin', en: 'Dolphin' } },
  { emoji: '🦊', name: { fr: 'Renard', en: 'Fox' } },
  { emoji: '🐻', name: { fr: 'Ours', en: 'Bear' } },
  { emoji: '🦉', name: { fr: 'Hibou', en: 'Owl' } },
  { emoji: '🐯', name: { fr: 'Tigre', en: 'Tiger' } },
  { emoji: '🦈', name: { fr: 'Requin', en: 'Shark' } },
  { emoji: '🐎', name: { fr: 'Cheval', en: 'Horse' } },
  { emoji: '🦋', name: { fr: 'Papillon', en: 'Butterfly' } },
  { emoji: '🐉', name: { fr: 'Dragon', en: 'Dragon' } },
];
