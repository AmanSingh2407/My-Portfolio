import { useEffect, useState } from 'react'

const themes = {
  light: 'light',
  dark: 'dark'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || themes.light)

  useEffect(() => {
    const root = document.documentElement
    if (theme === themes.dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', themes.dark)
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', themes.light)
    }
  }, [theme])

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === themes.dark ? themes.light : themes.dark)}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-600 dark:border-slate-700/40 dark:bg-slate-900/30 dark:text-slate-200 backdrop-blur transition hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle dark mode</span>
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {theme === themes.dark ? (
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        ) : (
          <path d="M12 3v2m6.36.64l-1.42 1.42M21 12h-2m-.64 6.36l-1.42-1.42M12 19v2m-4.95-3.05l-1.42 1.42M5 12H3m3.05-4.95L4.63 5.63" />
        )}
      </svg>
    </button>
  )
}
