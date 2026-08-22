import { FiGithub, FiLinkedin, FiArrowUp, FiMail } from 'react-icons/fi'
import { profile } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="px-5 sm:px-8 py-10 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="font-mono text-xs text-muted text-center sm:text-left">
          <span className="text-ink">{profile.name}</span>
          {' — © '}
          {year}
          {'. All rights reserved.'}
        </div>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="text-muted hover:text-signal transition-colors"
          >
            <FiMail size={18} />
          </a>
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-muted hover:text-signal transition-colors">
              <FiGithub size={18} />
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-muted hover:text-signal transition-colors">
              <FiLinkedin size={18} />
            </a>
          )}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center justify-center h-9 w-9 rounded-full border border-border text-muted hover:text-signal hover:border-signal transition-colors"
          >
            <FiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
