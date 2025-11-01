import SectionWrapper from '../components/SectionWrapper'

const profileUrl = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80'

export default function About() {
  return (
    <SectionWrapper title="About Aman" subtitle="Story">
      <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:items-center">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/40">
          <div className="absolute -inset-1 bg-gradient-to-br from-accent/40 via-transparent to-slate-950 opacity-40" />
          <img src={profile} alt="Aman Singh" className="relative aspect-[3/4] w-full object-cover" loading="lazy" />
        </div>
        <div className="space-y-6 text-base leading-relaxed text-slate-300">
          <p>
            I’m a product-minded engineer translating complex ideas into beautiful, performant interfaces. I value purposeful design, accessible experiences, and the small interactions that make users feel in control.
          </p>
          <p>
            From shipping dashboards for startups to crafting design systems for global teams, I lead with empathy, curiosity, and an iterative mindset. I thrive in collaborative environments that pair rapid experimentation with thoughtful craft.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">Current Focus</p>
              <p className="mt-2 text-lg font-semibold text-slate-100">Design Systems & Frontend Architecture</p>
            </div>
            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">Availability</p>
              <p className="mt-2 text-lg font-semibold text-slate-100">Open for freelance & full-time</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
