type SectionLabelProps = {
  children: string;
  tone?: "light" | "dark";
};

export function SectionLabel({ children, tone = "light" }: SectionLabelProps) {
  return (
    <p
      className={`inline-flex max-w-full flex-wrap items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] ${tone === "dark" ? "text-mind-cyan" : "text-mind-dark"}`}
    >
      <span
        aria-hidden="true"
        className={`text-xs leading-none ${tone === "dark" ? "text-mind-cyan" : "text-mind-blue"}`}
      >
        ▶
      </span>
      {children}
    </p>
  );
}
