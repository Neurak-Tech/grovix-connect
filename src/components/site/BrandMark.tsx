export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="40" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="16"
        fontWeight="600"
        letterSpacing="0.08em"
      >
        GV
      </text>
    </svg>
  );
}

export function BrandPlaque({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 92" className={className} role="img" aria-label="Grovix Ventures Pvt Ltd">
      <rect width="320" height="92" rx="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.45" />
      <text
        x="160"
        y="40"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="22"
        fontWeight="600"
        letterSpacing="0.22em"
      >
        GROVIX VENTURES
      </text>
      <text
        x="160"
        y="64"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Manrope, sans-serif"
        fontSize="9"
        letterSpacing="0.28em"
        opacity="0.75"
      >
        AI AND AUTOMATION SOLUTIONS
      </text>
    </svg>
  );
}
