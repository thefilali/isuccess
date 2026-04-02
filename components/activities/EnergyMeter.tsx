'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lang, t } from '@/lib/i18n';

const SLIDERS = [
  { key: 'communication', leftEmoji: '😶', rightEmoji: '🗣️' },
  { key: 'trust', leftEmoji: '😰', rightEmoji: '🤝' },
  { key: 'motivation', leftEmoji: '😴', rightEmoji: '🔥' },
  { key: 'clarity', leftEmoji: '😵', rightEmoji: '🎯' },
  { key: 'fun', leftEmoji: '😐', rightEmoji: '🎉' },
  { key: 'stress', leftEmoji: '😫', rightEmoji: '😌' },
] as const;

const QUESTIONS = {
  communication: { fr: 'Comment communique votre équipe ?', en: 'How well does your team communicate?' },
  trust: { fr: 'À quel point faites-vous confiance à vos coéquipiers ?', en: 'How much do you trust your teammates?' },
  motivation: { fr: 'Êtes-vous motivé(e) en ce moment ?', en: 'How motivated are you right now?' },
  clarity: { fr: 'Vos objectifs d\'équipe sont-ils clairs ?', en: 'How clear are your goals as a team?' },
  fun: { fr: 'Vous amusez-vous ?', en: 'How much fun are you having?' },
  stress: { fr: 'Quel est votre niveau de stress ?', en: 'How stressed do you feel?' },
};

interface Props {
  lang: Lang;
  isPost?: boolean;
  onSubmit: (data: Record<string, unknown>) => void;
}

export function EnergyMeter({ lang, isPost, onSubmit }: Props) {
  const [values, setValues] = useState<Record<string, number>>({
    communication: 5,
    trust: 5,
    motivation: 5,
    clarity: 5,
    fun: 5,
    stress: 5,
  });

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-2xl font-bold text-center mb-2">
          {isPost ? '📊' : '⚡'} {t(isPost ? 'activity.energy-meter-post' : 'activity.energy-meter', lang)}
        </h2>
        <p className="text-text-muted text-center mb-8">
          {t('energy.question', lang)}
        </p>

        <div className="space-y-8">
          {SLIDERS.map((slider, idx) => {
            const questionKey = slider.key as keyof typeof QUESTIONS;
            return (
              <motion.div
                key={slider.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="achieve-card"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-text-muted font-medium">
                    {t(`energy.${slider.key}` as Parameters<typeof t>[0], lang)}
                  </span>
                  <span className="text-gold font-bold text-lg">
                    {values[slider.key]}
                  </span>
                </div>
                <p className="text-text-dim text-xs mb-3">
                  {QUESTIONS[questionKey][lang]}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{slider.leftEmoji}</span>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={values[slider.key]}
                    onChange={e =>
                      setValues(prev => ({ ...prev, [slider.key]: Number(e.target.value) }))
                    }
                    className="flex-1"
                  />
                  <span className="text-2xl">{slider.rightEmoji}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={() => onSubmit(values)}
          className="btn-gold w-full py-4 text-lg mt-8"
        >
          {t('team.submit', lang)}
        </button>
      </motion.div>
    </div>
  );
}
