import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { navLinks } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const renderLinks = (handleClick) => (
    navLinks.map((link) => (
      <NavLink
        key={link.path}
        to={link.path}
        onClick={handleClick}
        className={({ isActive }) =>
          `relative rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'text-accent' : 'text-slate-400 hover:text-slate-100'}`
        }
      >
        {link.name}
      </NavLink>
    ))
  )

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-100">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent">AS</span>
          <span>Aman Singh</span>
        </NavLink>
        <div className="hidden items-center gap-6 lg:flex">
          {renderLinks(() => setOpen(false))}
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/40 text-slate-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Menu</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-slate-800/60 bg-slate-950/90 lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4">
              {renderLinks(() => setOpen(false))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
