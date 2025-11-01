import { motion } from 'framer-motion'

export default function ExperienceItem({ role, company, period, description, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative flex gap-6 border-l border-slate-800/60 bg-slate-900/30 p-6 shadow-lg shadow-slate-950/30"
    >
      <span className="absolute -left-[9px] top-8 h-4 w-4 rounded-full border border-slate-700 bg-accent" />
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{period}</p>
        <h3 className="mt-3 text-xl font-semibold text-slate-100">{role}</h3>
        <p className="text-sm text-accent">{company}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>
      </div>
    </motion.li>
  )
}
