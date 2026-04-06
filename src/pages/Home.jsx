import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const heroVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
}

export default function Home() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl flex-col justify-center gap-12 px-6 py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent/10 via-transparent to-slate-100/50 dark:to-slate-900/50" />
      <motion.div initial="hidden" animate="visible" transition={{ duration: 0.8 }} variants={heroVariants} className="space-y-8">
        <p className="text-sm uppercase tracking-[0.4em] text-accent">Portfolio</p>
        <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl md:text-6xl">
          Aman Singh
        </h1>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Focused on creating smart, seamless, and impactful applications - merging technology, design, and AI innovation
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accent-dark">
            View Work
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm text-slate-700 transition hover:border-accent hover:text-accent dark:border-slate-800/80 dark:text-slate-200">
            Let’s Collaborate
          </Link>
        </div>
      </motion.div>
      <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="grid gap-6 text-sm text-slate-600 dark:text-slate-400 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Experience', value: '1 Year' },
          { label: 'Projects Delivered', value: '0' },
          { label: 'Focus', value: 'Development' },
          { label: 'Location', value: 'Jhansi' }
        ].map((item) => (
          <li key={item.label} className="rounded-2xl border border-slate-200 bg-white/50 p-6 dark:border-slate-800/60 dark:bg-slate-900/30">
            <p className="text-xs uppercase tracking-widest text-slate-500">{item.label}</p>
            <p className="mt-2 text-lg font-medium text-slate-900 dark:text-slate-100">{item.value}</p>
          </li>
        ))}
      </motion.ul>
    </section>
  )
}
