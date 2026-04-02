'use client';

export function AchieveLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { icon: 28, text: 'text-lg' },
    md: { icon: 36, text: 'text-2xl' },
    lg: { icon: 48, text: 'text-4xl' },
  };
  const s = sizes[size];

  return (
    <div className="flex items-center gap-2">
      {/* Gold A icon */}
      <svg width={s.icon} height={s.icon} viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5A623" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
        </defs>
        <path
          d="M24 4L6 40h10l2.5-5h11L32 40h10L24 4zm0 14l4.5 10h-9L24 18z"
          fill="url(#goldGrad)"
        />
        <path
          d="M34 12l8 8-8 8"
          stroke="url(#goldGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className={`${s.text} font-bold text-text tracking-tight`}>
        achieve
      </span>
    </div>
  );
}

export function AchieveIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="goldGradIcon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5A623" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
      </defs>
      <path
        d="M24 4L6 40h10l2.5-5h11L32 40h10L24 4zm0 14l4.5 10h-9L24 18z"
        fill="url(#goldGradIcon)"
      />
      <path
        d="M34 12l8 8-8 8"
        stroke="url(#goldGradIcon)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
