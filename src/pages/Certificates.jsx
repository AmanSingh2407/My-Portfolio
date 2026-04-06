import SectionWrapper from '../components/SectionWrapper'
import { certificates } from '../data/content'

export default function Certificates() {
  return (
    <SectionWrapper title="Certificates" subtitle="Achievements">
      {certificates.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div key={index} className="flex flex-col gap-4 rounded-2xl border border-slate-200/60 bg-white/50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-800/60 dark:bg-slate-900/50">
              {cert.image && (
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover object-center transition-transform hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{cert.title}</h3>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-medium text-accent">{cert.issuer}</p>
                  {cert.date && <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">{cert.date}</p>}
                </div>
                {cert.description && (
                  <ul className="mt-2 flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
                    {cert.description.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-accent mt-0.5">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center text-sm font-medium text-accent hover:underline">
                    View Certificate <span className="ml-1">&rarr;</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-600 dark:text-slate-400">
          Certificates will be added soon.
        </p>
      )}
    </SectionWrapper>
  )
}
