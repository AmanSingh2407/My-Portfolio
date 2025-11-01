import SectionWrapper from '../components/SectionWrapper'
import profile from '../../AmanSinghImg.jpg'

export default function About() {
  return (
    <SectionWrapper title="About Aman" subtitle="Story">
      <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:items-center">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/40">
          <div className="absolute -inset-1 bg-gradient-to-br from-accent/40 via-transparent to-slate-950 opacity-40" />
          <img
            src={profile}
            alt="Aman Singh"
            className="relative aspect-[3/4] w-full object-cover"
            style={{ objectPosition: 'center 40%' }}
            loading="lazy"
          />
        </div>
        <div className="space-y-6 text-base leading-relaxed text-slate-300">
          <p>
             I'm a passionate Computer Science Engineer skilled in Java, cross-platform app development, and AI integration. With experience as an SDE intern at BluOryn Technologies, he focuses on building innovative and scalable solutions that combine technology, creativity, and real-world impact.
             </p>
          <p>
            From building scalable apps to designing intelligent systems, I approach every project with curiosity, creativity, and precision. I thrive in collaborative environments where innovation meets purpose and ideas turn into real-world impact.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">Current Focus</p>
              <p className="mt-2 text-lg font-semibold text-slate-100">Java, Flutter, and AI-driven development</p>
            </div>
            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">Availability</p>
              <p className="mt-2 text-lg font-semibold text-slate-100">Open for freelance</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
