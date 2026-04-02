import { Lang } from './i18n';

export async function callClaude(systemPrompt: string, userMessage: string): Promise<string> {
  const res = await fetch('/api/claude', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ system: systemPrompt, message: userMessage }),
  });

  if (!res.ok) {
    throw new Error('Claude API call failed');
  }

  const data = await res.json();
  return data.response;
}

export function getSystemPrompt(lang: Lang): string {
  return lang === 'fr'
    ? "Tu es ISuccess AI par Achieve. Tu analyses les données d'équipes lors d'activités de teambuilding. Sois fun, engageant et concis. Réponds en français."
    : "You are ISuccess AI by Achieve. You analyze team data during teambuilding activities. Be fun, engaging, and concise. Respond in English.";
}
