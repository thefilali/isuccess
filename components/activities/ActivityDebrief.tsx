'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lang, t } from '@/lib/i18n';

interface Props {
  lang: Lang;
  onSubmit: (data: Record<string, unknown>) => void;
}

export function ActivityDebrief({ lang, onSubmit }: Props) {
  const [well, setWell] = useState('');
  const [learned, setLearned] = useState('');
  const [improve, setImprove] = useState('');
  const [rating, setRating] = useState(0);

  const canSubmit = well.trim() || learned.trim() || improve.trim();

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-2xl font-bold text-center mb-2">
          💬 {t('activity.debrief', lang)}
        </h2>
        <p className="text-text-muted text-center mb-8">
          {t('activity.debrief.desc', lang)}
        </p>

        <div className="space-y-6">
          {/* What went well */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="achieve-card">
            <label className="text-success font-bold flex items-center gap-2 mb-3">
              ✅ {t('debrief.well', lang)}
            </label>
            <textarea
              value={well}
              onChange={e => setWell(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-purple-darkest border border-border text-text placeholder-text-dim focus:border-gold focus:outline-none resize-none"
              rows={3}
              placeholder={lang === 'fr' ? 'Partagez ce qui a bien fonctionné...' : 'Share what worked well...'}
            />
          </motion.div>

          {/* What we learned */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="achieve-card">
            <label className="text-gold font-bold flex items-center gap-2 mb-3">
              📐 {t('debrief.learned', lang)}
            </label>
            <textarea
              value={learned}
              onChange={e => setLearned(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-purple-darkest border border-border text-text placeholder-text-dim focus:border-gold focus:outline-none resize-none"
              rows={3}
              placeholder={lang === 'fr' ? 'Qu\'avez-vous découvert ?' : 'What did you discover?'}
            />
          </motion.div>

          {/* What to improve */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="achieve-card">
            <label className="text-purple-light font-bold flex items-center gap-2 mb-3">
              🔧 {t('debrief.improve', lang)}
            </label>
            <textarea
              value={improve}
              onChange={e => setImprove(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-purple-darkest border border-border text-text placeholder-text-dim focus:border-gold focus:outline-none resize-none"
              rows={3}
              placeholder={lang === 'fr' ? 'Des suggestions d\'amélioration ?' : 'Any suggestions for improvement?'}
            />
          </motion.div>

          {/* Star rating */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-center">
            <p className="text-text-muted text-sm mb-3">
              {lang === 'fr' ? 'Note globale' : 'Overall rating'}
            </p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="text-4xl transition-transform hover:scale-110"
                >
                  {star <= rating ? '⭐' : '☆'}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <button
          onClick={() => onSubmit({ well, learned, improve, rating })}
          disabled={!canSubmit}
          className="btn-gold w-full py-4 text-lg mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t('team.submit', lang)}
        </button>
      </motion.div>
    </div>
  );
}
