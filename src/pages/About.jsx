import SectionWrapper from '../components/SectionWrapper'
import profile from '../../AmanSinghImg.jpg'

export default function About() {
  return (
    <SectionWrapper title="About Aman" subtitle="Story">
      <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:items-center">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/50 dark:border-slate-800/60 dark:bg-slate-900/40">
          <div className="absolute -inset-1 bg-gradient-to-br from-accent/40 via-transparent to-white opacity-40 dark:to-slate-950" />
          <img
            src={profile}
            alt="Aman Singh"
            className="relative aspect-[3/4] w-full object-cover"
            style={{ objectPosition: 'center 40%' }}
            loading="lazy"
          />
        </div>
        <div className="space-y-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          <p>
            I am a driven software developer with a strong foundation in full-stack development and mobile application development, currently pursuing my B.Tech in Computer Science. I have hands-on experience building AI-powered platforms, real-time applications, and scalable systems using modern technologies like React, Flutter, Java, and Node.js.
          </p>
          <p>
            My core interest lies in developing impactful products that solve real-world problems, especially at the intersection of AI and user-centric design. I continuously strive to improve my problem-solving skills through Data Structures & Algorithms and aim to build high-performance systems aligned with industry standards.
          </p>
          <p>
            I am actively working towards becoming a top-tier software engineer and contributing to innovative, large-scale tech solutions.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800/60 dark:bg-slate-900/40">
              <p className="text-xs uppercase tracking-widest text-slate-500">Current Focus</p>
              <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">Java, Flutter, and AI-driven development</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800/60 dark:bg-slate-900/40">
              <p className="text-xs uppercase tracking-widest text-slate-500">Availability</p>
              <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">Open for freelance</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
