import { useEffect, useState } from 'react'
import { FiX, FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../data/portfolioData'
import { SectionEyebrow } from './About'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  // Close modal on Escape, lock body scroll while open.
  useEffect(() => {
    if (!activeProject) return
    const onKey = (e) => e.key === 'Escape' && setActiveProject(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeProject])

  return (
    <section id="projects" className="py-20 sm:py-28 px-5 sm:px-8 bg-surface/40 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow index="04" label="Projects" />
        <h2 className="mt-6 font-display font-semibold text-3xl sm:text-4xl text-ink">
          Real-time modules, shipped
        </h2>
        <p className="mt-3 text-muted max-w-2xl">
          Select a project to see the full breakdown — features, role, and stack.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="text-left rounded-lg border border-border bg-surface p-6 hover:border-signal/40 hover:-translate-y-1 transition-all duration-300 group"
              aria-haspopup="dialog"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-muted">{project.year}</span>
                <FiArrowUpRight className="text-muted group-hover:text-signal transition-colors" aria-hidden="true" />
              </div>
              <h3 className="mt-3 font-display font-semibold text-ink text-lg leading-snug">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded border border-border text-muted bg-surface2">
                    {t}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-lg rounded-xl border border-border bg-surface shadow-2xl max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border sticky top-0 bg-surface">
          <span className="font-mono text-xs text-muted">{project.year}</span>
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="text-muted hover:text-signal transition-colors"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="p-6">
          <h3 id="project-modal-title" className="font-display font-semibold text-xl text-ink">
            {project.name}
          </h3>
          <p className="mt-3 text-sm text-muted leading-relaxed">{project.description}</p>

          <h4 className="mt-6 font-mono text-[11px] uppercase tracking-wider text-signal">Key features</h4>
          <ul className="mt-2 space-y-2">
            {project.features.map((f, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-ink/90">
                <span className="text-signal font-mono mt-0.5">›</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 font-mono text-[11px] uppercase tracking-wider text-signal">My role</h4>
          <p className="mt-2 text-sm text-muted leading-relaxed">{project.role}</p>

          <h4 className="mt-6 font-mono text-[11px] uppercase tracking-wider text-signal">Tech stack</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded border border-border text-muted bg-surface2">
                {t}
              </span>
            ))}
          </div>

          {(project.github || project.demo) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded border border-border text-ink text-sm hover:border-signal hover:text-signal transition-colors"
                >
                  <FiGithub size={16} aria-hidden="true" /> Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-signal text-base text-sm font-semibold hover:brightness-110 transition"
                >
                  <FiExternalLink size={16} aria-hidden="true" /> Live demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
