'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lang, t } from '@/lib/i18n';
import { supabase } from '@/lib/supabase';

interface Props {
  lang: Lang;
  sessionId: string;
  onSubmit: (data: Record<string, unknown>) => void;
}

export function WordCloud({ lang, sessionId, onSubmit }: Props) {
  const [words, setWords] = useState(['', '', '']);
  const [allWords, setAllWords] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    supabase
      .from('session_activities')
      .select('id')
      .eq('session_id', sessionId)
      .eq('activity_key', 'wordcloud')
      .single()
      .then(({ data: activity }) => {
        if (!activity) return;
        supabase.from('responses').select('data').eq('session_activity_id', activity.id).then(({ data: responses }) => {
          if (responses) { setAllWords(responses.flatMap(r => (r.data).words || [])); }
        });
        const channel = supabase.channel('wordcloud').on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'responses', filter: `session_activity_id=eq.${activity.id}` }, (payload) => { setAllWords(prev => [...prev, ...(payload.new.data).words || []]); }).subscribe();
        return () => { supabase.removeChannel(channel); };
      });
  }, [sessionId]);
  const handleSubmit = () => { const v = words.filter(w => w.trim()); if (v.length === 0) return; onSubmit({ words: v }); setAllWords(p => [...p, ...v]); setSubmitted(true); };
  const wordCounts = {}; allWords.forEach(w => { const n = w.toLowerCase().trim(); if (n) wordCounts[n] = (wordCounts[n] || 0) + 1; });
  const sorted = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);
  const maxC = sorted.length > 0 ? sorted[0][1] : 1;
  const COLORS = ['text-gold', 'text-purple-light', 'text-gold-light', 'text-text', 'text-text-muted'];
  return null;
}
