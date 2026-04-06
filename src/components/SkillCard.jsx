export default function SkillCard({ title, items }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 transition hover:border-accent/60 hover:shadow-glow dark:border-slate-800/60 dark:bg-slate-900/40 dark:shadow-slate-950/40">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700 dark:border-slate-800/80 dark:bg-slate-900 dark:text-slate-300">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
