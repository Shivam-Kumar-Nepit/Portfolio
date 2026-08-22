import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'
import { profile } from '../data/portfolioData'
import { SectionEyebrow } from './About'

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 px-5 sm:px-8 bg-surface/40 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow index="06" label="Contact" />

        <div className="grid lg:grid-cols-2 gap-12 mt-8 items-center">
          <div>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink">
              Let's talk about your next feature.
            </h2>
            <p className="mt-4 text-muted leading-relaxed max-w-md">
              Open to ReactJS development opportunities and product-focused frontend work.
              Reach out directly — every channel below goes straight to me.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-lg border border-border bg-surface p-5 hover:border-signal/40 transition-colors"
            >
              <span className="h-10 w-10 rounded-full bg-signal/10 border border-signal/30 flex items-center justify-center text-signal shrink-0">
                <FiMail aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Email</p>
                <p className="text-ink text-sm mt-0.5">{profile.email}</p>
              </div>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-4 rounded-lg border border-border bg-surface p-5 hover:border-signal/40 transition-colors"
            >
              <span className="h-10 w-10 rounded-full bg-signal/10 border border-signal/30 flex items-center justify-center text-signal shrink-0">
                <FiPhone aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Phone</p>
                <p className="text-ink text-sm mt-0.5">{profile.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-lg border border-border bg-surface p-5">
              <span className="h-10 w-10 rounded-full bg-signal/10 border border-signal/30 flex items-center justify-center text-signal shrink-0">
                <FiMapPin aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Location</p>
                <p className="text-ink text-sm mt-0.5">{profile.location}</p>
              </div>
            </div>

            {(profile.github || profile.linkedin) && (
              <div className="flex gap-3 pt-2">
                {profile.github && (
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-border text-ink text-sm hover:border-signal hover:text-signal transition-colors"
                  >
                    <FiGithub aria-hidden="true" /> GitHub
                  </a>
                )}
                {profile.linkedin && (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-border text-ink text-sm hover:border-signal hover:text-signal transition-colors"
                  >
                    <FiLinkedin aria-hidden="true" /> LinkedIn
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
