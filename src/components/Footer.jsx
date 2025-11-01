import { socialLinks } from '../data/content'

const icons = {
  linkedin: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2 2 0 110 4 2 2 0 010-4zM3 8.75h3.96V21H3zM9.24 8.75H13v1.67h.05c.52-.98 1.8-2 3.71-2 3.97 0 4.7 2.43 4.7 5.6V21h-3.96v-5.42c0-1.29-.02-2.96-1.81-2.96-1.81 0-2.09 1.42-2.09 2.86V21H9.24z" />
    </svg>
  ),
  github: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M12 .297a12 12 0 00-3.79 23.4c.6.113.82-.26.82-.58l-.016-2.045c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.73.084-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.302-5.466-1.332-5.466-5.93 0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016.003 0c2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.806 5.624-5.479 5.92.43.372.823 1.102.823 2.222l-.015 3.293c0 .322.218.699.824.58A12 12 0 0012 .297z" clipRule="evenodd" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row">
        <p>© {new Date().getFullYear()} Aman Singh. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.href} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-accent">
              <span className="sr-only">{link.name}</span>
              {icons[link.icon]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
