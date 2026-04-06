import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, details, image, github, demo, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1 + 0.1, duration: 0.5 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 transition hover:border-accent/60 hover:shadow-glow dark:border-slate-800/60 dark:bg-slate-900/40 dark:shadow-slate-950/40"
    >
      {image && (
        <div className="relative aspect-video overflow-hidden">
          <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100 dark:from-slate-950/70 dark:via-slate-950/10" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-4 p-6 pt-8">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
          {details && <p className="mt-4 text-xs whitespace-pre-wrap leading-relaxed text-slate-500 dark:text-slate-400">{details}</p>}
        </div>
        <div className="mt-auto flex items-center gap-3">
          <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:border-accent hover:text-accent dark:border-slate-800/80 dark:text-slate-200">
            GitHub
          </a>
          <a href={demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-accent-dark">
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  )
}
