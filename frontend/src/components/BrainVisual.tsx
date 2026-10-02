export function BrainVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-mind-cyan/10 blur-3xl animate-pulse-glow" />
      <svg
        viewBox="0 0 400 500"
        className="h-full max-h-[500px] w-full animate-float"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#007BFF" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Head silhouette */}
        <path
          d="M280 80 C320 80 350 120 350 180 C350 240 330 300 300 360 C280 400 250 420 220 420 C190 420 160 400 140 360 C110 300 90 240 90 180 C90 120 120 80 160 80 C180 80 200 90 220 100 C240 90 260 80 280 80Z"
          stroke="url(#brainGrad)"
          strokeWidth="2"
          fill="url(#brainGrad)"
          fillOpacity="0.08"
          filter="url(#glow)"
        />

        {/* Circuit lines */}
        {[
          'M200 140 L240 160 L200 180 L160 160 Z',
          'M180 200 L220 220 L180 240 L140 220 Z',
          'M220 260 L260 280 L220 300 L180 280 Z',
          'M160 280 L200 300 L160 320 L120 300 Z',
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="#00D2FF"
            strokeWidth="1.5"
            fill="none"
            opacity={0.6 + i * 0.1}
          />
        ))}

        {/* Brain nodes */}
        {[
          [200, 160],
          [220, 220],
          [180, 240],
          [240, 280],
          [160, 300],
          [200, 320],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="4"
            fill="#00D2FF"
            opacity={0.8}
          />
        ))}

        {/* Connecting lines */}
        <path
          d="M200 160 L220 220 L180 240 L240 280 L160 300 L200 320"
          stroke="#007BFF"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.5"
        />
      </svg>
    </div>
  )
}
