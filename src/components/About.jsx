import { FiMapPin, FiBriefcase, FiBookOpen, FiCode } from 'react-icons/fi'
import { profile, experience, education, competencies } from '../data/portfolioData'

const currentRole = experience.find((e) => e.current) || experience[0]
const currentEducation = education.find((e) => e.duration === 'Pursuing') || education[0]

const infoCards = [
  {
    icon: FiBriefcase,
    label: 'Currently',
    value: `${currentRole.role} at ${currentRole.company}`,
  },
  {
    icon: FiBookOpen,
    label: 'Studying',
    value: `${currentEducation.degree} — ${currentEducation.institution}`,
  },
  {
    icon: FiMapPin,
    label: 'Based in',
    value: profile.location,
  },
  {
    icon: FiCode,
    label: 'Core focus',
    value: 'Real-time, production-grade React interfaces',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow index="01" label="About" />

        <div className="grid lg:grid-cols-5 gap-12 mt-8">
          <div className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              <img
                src={profile.photoAbout}
                alt={`${profile.name} smiling, arms crossed`}
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-xl object-cover object-top border border-border shrink-0"
              />
              <div>
                <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink">
                  Frontend engineering, shipped in production.
                </h2>
              </div>
            </div>

            <p className="mt-6 text-muted leading-relaxed">
              {profile.summary}
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Across a product-based EdTech platform and an IT services internship, the throughline has
              been the same: turning React components into dependable, real-time features that hold up
              once real users and real traffic show up — not just in a demo.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {competencies.map((c) => (
                <span
                  key={c}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-signal/30 text-signal bg-signal/5"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {infoCards.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-lg border border-border bg-surface p-5 hover:border-signal/40 transition-colors"
              >
                <Icon className="text-signal" size={18} aria-hidden="true" />
                <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted">{label}</p>
                <p className="mt-1 text-ink text-sm leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionEyebrow({ index, label }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-signal text-sm">{index}</span>
      <span className="h-px flex-1 max-w-10 bg-border" aria-hidden="true" />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{label}</span>
    </div>
  )
}
