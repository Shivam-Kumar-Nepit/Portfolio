import { FiAward } from 'react-icons/fi'
import { education, languagesSpoken } from '../data/portfolioData'
import { SectionEyebrow } from './About'

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow index="05" label="Education" />
        <h2 className="mt-6 font-display font-semibold text-3xl sm:text-4xl text-ink">
          Education &amp; certifications
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {education.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-border bg-surface p-5 hover:border-signal/40 transition-colors"
            >
              <div className="flex items-start gap-3">
                <FiAward className="text-signal mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-display font-semibold text-ink text-base leading-snug">
                    {item.degree}
                  </h3>
                  <p className="text-muted text-sm mt-1">{item.institution}</p>
                  <p className="font-mono text-xs text-signal mt-2">{item.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 font-mono text-xs text-muted">
          <span className="uppercase tracking-wider text-signal">Languages</span>
          <span>{languagesSpoken.join(' · ')}</span>
        </div>
      </div>
    </section>
  )
}
