type LogoProps = {
  className?: string;
  size?: "sm" | "md";
};

const sizeClasses = {
  sm: "h-8",
  md: "h-10",
};

export function Logo({ className = "", size = "md" }: LogoProps) {
  return (
    <a
      href="#inicio"
      className={`focus-ring-dark inline-flex shrink-0 items-center rounded-sm ${className}`}
    >
      <svg
        viewBox="0 0 280 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-auto ${sizeClasses[size]}`}
        role="img"
        aria-label="MindCore — Soluções Inteligentes em Tecnologia"
        shapeRendering="geometricPrecision"
      >
        <g transform="translate(2 6)">
          <path
            fill="#fff"
            d="M3 44V3h12.4L29.2 29.2 43 3h12.4v41H45.2V18.6L32.6 41.2h-6.8L13.2 18.6V44H3Z"
          />
          <g
            stroke="#fff"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 47.5h9.5v7.5h8" />
            <path d="M11.5 47.5v12" />
            <path d="M16.5 51h7v10" />
          </g>
          <circle cx="24.5" cy="55" r="1.55" fill="#fff" />
          <circle cx="11.5" cy="59.5" r="1.55" fill="#fff" />
          <circle cx="23.5" cy="61" r="1.55" fill="#fff" />

          <g
            transform="translate(32.5 44.5)"
            stroke="#00BFFF"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3.8 14.8C-1.2 12.2-1.6 5.2 3 1.4 6.2-1.4 11.6-1 14.4 2.4 16.8-.6 22.6-.8 25.6 2.2c3.8 4 2.6 10.6-1.4 13.6-2.4 4.2-10.8 5.4-16 .4-1.4.8-2.7.6-4.4-1.4Z" />
            <path d="M14.2 1.8v13.4" />
            <path d="M6.6 6.6c2 1.2 4 1.9 7.4 1.9 3.2 0 5.4-.8 8-2.1" />
            <path d="M6.2 11.2c2.4 1.2 4.8 1.8 8 1.8 3 0 5.6-.8 8.2-2.1" />
          </g>
        </g>

        <text
          x="74"
          y="36"
          fill="#fff"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="30"
          fontWeight="800"
          letterSpacing="0.6"
          textRendering="geometricPrecision"
        >
          MIND
        </text>
        <text
          x="162"
          y="36"
          fill="#00BFFF"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="30"
          fontWeight="800"
          letterSpacing="0.6"
          textRendering="geometricPrecision"
        >
          CORE
        </text>
        <text
          x="75"
          y="54"
          fill="#fff"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="7.6"
          fontWeight="500"
          letterSpacing="1.35"
          textRendering="geometricPrecision"
        >
          SOLUÇÕES INTELIGENTES EM TECNOLOGIA
        </text>
      </svg>
    </a>
  );
}
