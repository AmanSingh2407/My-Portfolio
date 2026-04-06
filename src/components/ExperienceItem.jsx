import { motion } from 'framer-motion'

export default function ExperienceItem({ role, company, period, description, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative flex gap-6 border-l border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 dark:border-slate-800/60 dark:bg-slate-900/30 dark:shadow-slate-950/30"
    >
      <span className="absolute -left-[9px] top-8 h-4 w-4 rounded-full border border-slate-300 bg-accent dark:border-slate-700" />
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{period}</p>
        <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-slate-100">{role}</h3>
        <p className="text-sm text-accent">{company}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
      </div>
    </motion.li>
  )
}
