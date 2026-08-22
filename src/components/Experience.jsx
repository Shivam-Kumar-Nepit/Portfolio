import { useState } from 'react'
import { FiChevronDown, FiMapPin } from 'react-icons/fi'
import { experience } from '../data/portfolioData'
import { SectionEyebrow } from './About'

export default function Experience() {
  const [openId, setOpenId] = useState(experience[0]?.id ?? null)

  return (
    <section id="experience" className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow index="03" label="Experience" />
        <h2 className="mt-6 font-display font-semibold text-3xl sm:text-4xl text-ink">
          Where the work happened
        </h2>

        <div className="mt-10 relative">
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-border hidden sm:block" aria-hidden="true" />

          <ul className="space-y-4">
            {experience.map((job) => {
              const isOpen = openId === job.id
              return (
                <li key={job.id} className="relative sm:pl-10">
                  <span
                    className={`hidden sm:block absolute left-0 top-6 h-[19px] w-[19px] rounded-full border-2 ${
                      job.current ? 'border-signal bg-signal/20' : 'border-border bg-base'
                    }`}
                    aria-hidden="true"
                  />

                  <div className="rounded-lg border border-border bg-surface overflow-hidden">
                    <button
                      onClick={() => setOpenId(isOpen ? null : job.id)}
                      className="w-full flex items-start justify-between gap-4 text-left p-5 sm:p-6"
                      aria-expanded={isOpen}
                      aria-controls={`exp-panel-${job.id}`}
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h3 className="font-display font-semibold text-ink text-lg">{job.role}</h3>
                          {job.current && (
                            <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-signal/10 text-signal border border-signal/30">
                              current
                            </span>
                          )}
                        </div>
                        <p className="text-link text-sm mt-1">{job.company}</p>
                        <p className="text-muted text-xs mt-1">{job.companyType}</p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 font-mono text-xs text-muted">
                          <span>{job.duration}</span>
                          <span className="inline-flex items-center gap-1">
                            <FiMapPin size={12} aria-hidden="true" /> {job.location}
                          </span>
                        </div>
                      </div>
                      <FiChevronDown
                        className={`shrink-0 mt-1 text-muted transition-transform duration-300 ${isOpen ? 'rotate-180 text-signal' : ''}`}
                        aria-hidden="true"
                      />
                    </button>

                    <div
                      id={`exp-panel-${job.id}`}
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 sm:px-6 pb-6 border-t border-border pt-5">
                          <p className="text-muted text-sm leading-relaxed">{job.summary}</p>
                          <ul className="mt-4 space-y-2">
                            {job.responsibilities.map((r, i) => (
                              <li key={i} className="flex gap-2.5 text-sm text-ink/90">
                                <span className="text-signal font-mono mt-0.5">›</span>
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {job.tech.map((t) => (
                              <span
                                key={t}
                                className="font-mono text-[11px] px-2.5 py-1 rounded border border-border text-muted bg-surface2"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
