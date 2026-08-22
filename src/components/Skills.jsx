import { FiLayout, FiServer, FiTool } from 'react-icons/fi'
import { skills } from '../data/portfolioData'
import { SectionEyebrow } from './About'

const ICONS = {
  frontend: FiLayout,
  backend: FiServer,
  tools: FiTool,
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 px-5 sm:px-8 bg-surface/40 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow index="02" label="Skills" />
        <h2 className="mt-6 font-display font-semibold text-3xl sm:text-4xl text-ink">
          Working stack
        </h2>
        <p className="mt-3 text-muted max-w-2xl">
          Grouped by where each tool sits in the stack — from interface to API to workflow.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {skills.map(({ category, icon, items }) => {
            const Icon = ICONS[icon] || FiTool
            return (
              <div
                key={category}
                className="rounded-lg border border-border bg-surface p-6 hover:border-signal/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <Icon className="text-signal" size={18} aria-hidden="true" />
                  <h3 className="font-display font-semibold text-ink text-base">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-3 py-1.5 rounded border border-border text-muted bg-surface2 hover:text-signal hover:border-signal/40 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
