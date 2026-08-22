import { useEffect, useState } from 'react'
import { FiMenu, FiX, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'
import { profile, navSections } from '../data/portfolioData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position to add a subtle elevation once the page moves.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav item for whichever section is currently in view.
  useEffect(() => {
    const sections = navSections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id) => {
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'bg-base/90 backdrop-blur border-border' : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between" aria-label="Primary">
        <button
          onClick={() => handleNavClick('home')}
          className="font-mono text-sm text-signal tracking-tight"
          aria-label="Go to home section"
        >
          <span className="text-muted">~/</span>shivam<span className="text-ink">.dev</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1 font-mono text-[13px]">
          {navSections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleNavClick(section.id)}
                className={`px-3 py-2 rounded transition-colors ${
                  activeSection === section.id
                    ? 'text-signal'
                    : 'text-muted hover:text-ink'
                }`}
                aria-current={activeSection === section.id ? 'true' : undefined}
              >
                {activeSection === section.id && <span aria-hidden="true">● </span>}
                {section.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-muted hover:text-signal transition-colors"
            >
              <FiGithub size={18} />
            </a>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted hover:text-signal transition-colors"
            >
              <FiLinkedin size={18} />
            </a>
          )}
          <a
            href={profile.resumeFile}
            download
            className="inline-flex items-center gap-2 font-mono text-xs px-3 py-2 rounded border border-border text-ink hover:border-signal hover:text-signal transition-colors"
          >
            <FiDownload size={14} aria-hidden="true" /> Download CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-ink"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-border ${
          isOpen ? 'max-h-96' : 'max-h-0'
        } bg-base/95 backdrop-blur`}
      >
        <ul className="px-5 py-3 flex flex-col gap-1 font-mono text-sm">
          {navSections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleNavClick(section.id)}
                className={`w-full text-left px-2 py-2.5 rounded ${
                  activeSection === section.id ? 'text-signal' : 'text-muted'
                }`}
              >
                {section.label}
              </button>
            </li>
          ))}
          <li className="pt-2 flex items-center gap-4">
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-muted">
                <FiGithub size={18} />
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-muted">
                <FiLinkedin size={18} />
              </a>
            )}
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 font-mono text-xs px-3 py-2 rounded border border-border text-signal"
            >
              <FiDownload size={14} aria-hidden="true" /> Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
