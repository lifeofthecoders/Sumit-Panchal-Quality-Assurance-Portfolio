import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowUpRight, ExternalLink } from 'lucide-react';
import { useMotionEnabled } from '../motion';

export default function ProjectModal({ project, onClose }) {
  const motionOn = useMotionEnabled();
  const closeButton = useRef(null);
  const dialog = useRef(null);

  useEffect(() => {
    if (!project) return undefined;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus({ preventScroll: true });

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
      if (event.key === 'Tab' && dialog.current) {
        const focusable = [...dialog.current.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])')]
          .filter((node) => node.getAttribute('aria-hidden') !== 'true');
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousFocus && previousFocus.isConnected && typeof previousFocus.focus === 'function') {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop"
          initial={motionOn ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          exit={{ opacity: motionOn ? 0 : 1, transition: { duration: motionOn ? .2 : 0 } }}
          onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}
        >
          <motion.div
            ref={dialog}
            className="project-modal project-modal-rich"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={motionOn ? { y: 28, opacity: 0, scale: .985 } : false}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: motionOn ? 18 : 0, opacity: motionOn ? 0 : 1, transition: { duration: motionOn ? .2 : 0 } }}
          >
            <button ref={closeButton} type="button" className="modal-close" onClick={onClose} aria-label="Close project details"><X /></button>

            {/* Full-width banner follows the reference case-study layout. */}
            <header className="modal-visual modal-visual-image">
              <img src={project.bannerImage} alt={`${project.title} project banner`} />
              <div className="modal-visual-overlay" />
              <div className="modal-visual-copy">
                <span>{project.type.toUpperCase()} / MANUAL QA CASE STUDY</span>
                <b>{project.title.split(' - ')[0].split(' – ')[0]}</b>
                <small>{project.genre}</small>
              </div>
            </header>

            <div className="modal-body">
              <p className="eyebrow">PROJECT DETAILS / {project.platforms.join(' · ')}</p>
              <h2 id="modal-title">{project.title}</h2>
              <p className="modal-logline">{project.logline}</p>
              <div className="modal-fact"><small>ROLE</small><strong>{project.role}</strong></div>

              <section className="modal-overview" aria-labelledby="project-overview-heading">
                <h3 id="project-overview-heading">PROJECT OVERVIEW</h3>
                <p>{project.overview}</p>
                <div className="modal-platforms">
                  <small>PLATFORMS</small>
                  <div className="tag-list">{project.platforms.map((platform) => <span key={platform}>{platform}</span>)}</div>
                </div>
              </section>

              {/* Testing coverage and relevant repository/demo actions sit directly under Project Overview. */}
              <section className="modal-coverage" aria-labelledby="testing-coverage-heading">
                <h3 id="testing-coverage-heading">TESTING COVERAGE</h3>
                <div className="tag-list">{project.testingAreas.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </section>

              {project.externalLinks?.length > 0 && (
                <div className="modal-external-links" aria-label="Project links">
                  {project.externalLinks.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label} <ExternalLink size={13} />
                    </a>
                  ))}
                </div>
              )}

              {/* The three visual references stay after overview and before QA contributions. */}
              <section className="modal-gallery" aria-label={`${project.title} visual references`}>
                <div className="modal-gallery-heading"><p className="eyebrow">VISUAL REFERENCES</p><span>{project.gallery.length} PROJECT SCREENS</span></div>
                <div className="modal-gallery-grid">
                  {project.gallery.map((image) => (
                    <a href={image.src} target="_blank" rel="noopener noreferrer" key={image.src} className="modal-gallery-item">
                      <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                      <span>{image.caption} <ArrowUpRight size={13} /></span>
                    </a>
                  ))}
                </div>
              </section>

              <section className="modal-contributions">
                <h3>MY QA CONTRIBUTIONS</h3>
                <ul>{project.build.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>

              <section className="modal-workflows">
                <h3>KEY USER WORKFLOWS</h3>
                <ul className="modal-check-list">{project.features.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>

              <a className="text-link" href="mailto:sumitpanchal5225@gmail.com?subject=QA%20Case%20Study%20Enquiry">Discuss a similar project <ArrowUpRight size={16} /></a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
