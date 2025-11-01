import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import SectionWrapper from '../components/SectionWrapper'
import { socialLinks } from '../data/content'

const formDefaults = { name: '', email: '', message: '' }

export default function Contact() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState(formDefaults)
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setStatus('sending')
    try {
      await emailjs.send('your_service_id', 'your_template_id', formData, 'your_public_key')
      setStatus('success')
      setFormData(formDefaults)
      if (formRef.current) formRef.current.reset()
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <SectionWrapper title="Say Hello" subtitle="Contact">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-200">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={formData.name}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-accent focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-200">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="you@email.com"
                className="w-full rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-accent focus:outline-none"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-200">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              onChange={handleChange}
              value={formData.message}
              placeholder="Tell me about your project"
              className="w-full rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-accent focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'success' && <p className="text-sm text-emerald-400">Message sent! I’ll be in touch.</p>}
          {status === 'error' && <p className="text-sm text-rose-400">Something went wrong. Please try again.</p>}
        </form>
        <div className="space-y-6 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-100">Let’s build something</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              I’m available for collaborations, contract work, and full-time opportunities. Reach out with details and I’ll respond within two business days.
            </p>
          </div>
          <div className="space-y-3 text-sm text-slate-300">
            <p className="font-medium text-slate-100">Prefer other channels?</p>
            <ul className="flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 px-4 py-2 text-sm text-slate-200 transition hover:border-accent hover:text-accent">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
