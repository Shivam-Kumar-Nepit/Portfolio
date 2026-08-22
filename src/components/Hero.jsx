import { useEffect, useState } from 'react'
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'
import { profile, primaryStack } from '../data/portfolioData'

const TYPED_LINE = `const developer = "${profile.name}";`

export default function Hero() {
  const [typed, setTyped] = useState('')

  // Signature moment: the headline "types" itself out, like code being written live.
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setTyped(TYPED_LINE.slice(0, i))
      if (i >= TYPED_LINE.length) clearInterval(interval)
    }, 35)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative pt-32 pb-10 sm:pt-40 sm:pb-14 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: intro copy */}
        <div className="animate-fadeUp">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-signal border border-signal/30 bg-signal/5 rounded-full px-3 py-1 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-signal animate-pulseDot" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
            </span>
            Currently building at Delhi Academy of Medical Sciences
          </div>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-ink">
            {profile.name}
          </h1>
          <p className="mt-3 font-display text-xl sm:text-2xl text-link">
            {profile.title} <span className="text-muted font-body text-base">· {profile.tagline}</span>
          </p>

          <p className="mt-6 text-muted text-base sm:text-lg max-w-xl leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {primaryStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 rounded border border-border text-muted bg-surface"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="px-5 py-3 rounded bg-signal text-base font-semibold text-sm hover:brightness-110 transition"
            >
              View Projects
            </button>
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded border border-border text-ink text-sm font-semibold hover:border-signal hover:text-signal transition"
            >
              <FiDownload aria-hidden="true" /> Download CV
            </a>

            <div className="flex items-center gap-4 ml-1">
              {profile.github && (
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-muted hover:text-signal transition-colors">
                  <FiGithub size={20} />
                </a>
              )}
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-muted hover:text-signal transition-colors">
                  <FiLinkedin size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right: headshot with the signature terminal snippet layered on top */}
        <div className="animate-fadeUp relative mx-auto max-w-sm lg:max-w-none mb-8 sm:mb-16" style={{ animationDelay: '120ms' }}>
          <div className="relative rounded-2xl border border-border overflow-hidden shadow-2xl shadow-black/40">
            <div
              className="absolute -inset-8 bg-signal/20 blur-3xl rounded-full -z-10"
              aria-hidden="true"
            />
            <img
              src={profile.photoHero}
              alt={`${profile.name}, ${profile.title}`}
              className="w-full aspect-[4/5] object-cover object-top bg-surface"
            />
          </div>

          {/* Floating terminal card — signature element, anchored to the photo */}
          <div className="hidden sm:block absolute -bottom-8 -left-8 w-[280px] rounded-xl border border-border bg-surface shadow-2xl shadow-black/50 overflow-hidden">
            <div className="flex items-center gap-2 px-3 py-2.5 border-b border-border bg-surface2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
              <span className="ml-2 font-mono text-[11px] text-muted">profile.js</span>
            </div>
            <pre className="p-4 font-mono text-[11px] leading-6 overflow-x-auto">
              <code>
                <span className="text-muted">// {profile.location}</span>
                {'\n'}
                <span className="text-link">{typed}</span>
                <span className="text-signal animate-blink">|</span>
                {'\n\n'}
                <span className="text-muted">const</span> <span className="text-ink">role</span> <span className="text-muted">=</span>{' '}
                <span className="text-signal">"{profile.title}"</span>;
              </code>
            </pre>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
        className="hidden sm:flex mx-auto mt-10 items-center justify-center h-10 w-10 rounded-full border border-border text-muted hover:text-signal hover:border-signal transition-colors animate-bounce"
      >
        <FiArrowDown />
      </button>
    </section>
  )
}
