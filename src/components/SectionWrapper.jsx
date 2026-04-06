import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
}

export default function SectionWrapper({ title, subtitle, children }) {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-16">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} variants={variants} className="space-y-8">
        <header>
          <p className="text-sm uppercase tracking-[0.4em] text-accent">{subtitle}</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100 md:text-4xl">{title}</h2>
        </header>
        {children}
      </motion.div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/5 via-transparent" />
    </section>
  )
}
