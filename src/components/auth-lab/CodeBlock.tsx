export function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="code-block max-h-64 overflow-auto rounded-[1.25rem] border border-white/8 bg-slate-950/80 p-3 text-[13px] leading-5 text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <code>{children}</code>
    </pre>
  )
}
