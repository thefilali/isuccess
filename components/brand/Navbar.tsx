'use client';

import { AchieveLogo } from './AchieveLogo';
import { Lang } from '@/lib/i18n';

interface NavbarProps {
  lang?: Lang;
  onToggleLang?: () => void;
  rightContent?: React.ReactNode;
}

export function Navbar({ lang = 'fr', onToggleLang, rightContent }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-border bg-purple-darkest/80 backdrop-blur-sm sticky top-0 z-50">
      <AchieveLogo size="sm" />
      <div className="flex items-center gap-3">
        {rightContent}
        {onToggleLang && (
          <button
            onClick={onToggleLang}
            className="px-3 py-1.5 rounded-lg text-sm font-medium border border-border text-text-muted hover:text-text hover:border-gold transition-colors"
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        )}
      </div>
    </nav>
  );
}
