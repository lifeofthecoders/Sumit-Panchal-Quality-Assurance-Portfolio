import { useEffect, useRef } from 'react';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';

export default function ProjectPage({ project, onBack }) {
  const touchStart = useRef(null);
  const wheelGesture = useRef({ x: 0, lastAt: 0, navigatedAt: 0 });

  useEffect(() => {
    const onKey = (event) => {
      const typing = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName) || document.activeElement?.isContentEditable;
      if (event.key === 'Escape' || (event.key === 'Backspace' && !typing)) {
        event.preventDefault();
        onBack();
      }
    };
    const onTrackpadWheel = (event) => {
      const horizontal = Math.abs(event.deltaX) > Math.max(32, Math.abs(event.deltaY) * 1.25);
      const now = performance.now();
      if (!horizontal) {
        if (now - wheelGesture.current.lastAt > 260) wheelGesture.current.x = 0;
        wheelGesture.current.lastAt = now;
        return;
      }
      // Two-finger horizontal trackpad gestures often arrive as several smaller wheel events.
      wheelGesture.current.x += event.deltaX;
      wheelGesture.current.lastAt = now;
      if (Math.abs(wheelGesture.current.x) >= 115 && now - wheelGesture.current.navigatedAt > 900) {
        wheelGesture.current.navigatedAt = now;
        wheelGesture.current.x = 0;
        onBack();
      }
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('wheel', onTrackpadWheel, { passive: true });
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('wheel', onTrackpadWheel);
    };
  }, [onBack]);

  const openImage = (src) => window.open(src, '_blank', 'noopener,noreferrer');


  return (
    <main className="project-page" onTouchStart={(event) => { const t=event.touches[0]; touchStart.current={x:t.clientX,y:t.clientY}; }} onTouchEnd={(event) => { if(!touchStart.current)return; const t=event.changedTouches[0]; const dx=t.clientX-touchStart.current.x; const dy=t.clientY-touchStart.current.y; if(Math.abs(dx)>110 && Math.abs(dx)>Math.abs(dy)*1.5) onBack(); touchStart.current=null; }}>
      <header className="project-page-banner">
        <img src={project.bannerImage} alt={`${project.title} full project banner`} />
        <button className="project-page-back" type="button" onClick={onBack}><ArrowLeft size={15}/> BACK</button>
        <button className="project-image-open project-banner-open" type="button" aria-label="Open full-size project banner in a new tab" onClick={() => openImage(project.bannerImage)}><ArrowUpRight size={20}/></button>
      </header>

      <div className="project-page-content">
        <div className="project-page-heading">
          <p className="eyebrow">{project.type.toUpperCase()} / QA CASE STUDY</p>
          <h1>{project.title}</h1>
          <p className="project-page-genre">{project.genre}</p>
        </div>

        <div className="project-role-domain">
          <div><small>ROLE</small><strong>{project.role}</strong></div>
          <div><small>DOMAIN</small><strong>{project.domain || project.genre.split('·')[0].trim()}</strong></div>
        </div>

        <section className="project-overview-panel">
          <div>
            <p className="eyebrow">PROJECT OVERVIEW</p>
            <p>{project.overview}</p>
          </div>
          <div className="project-platform-list">
            <p className="eyebrow">PLATFORMS / STACK</p>
            <div className="tag-list">{project.platforms.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </section>

        <section className="project-testing-coverage">
          <h3>TESTING COVERAGE</h3>
          <div className="tag-list">{project.testingAreas.map((item) => <span key={item}>{item}</span>)}</div>
        </section>

        {project.externalLinks?.length > 0 && <nav className="project-page-links" aria-label="Project resources">
          {project.externalLinks.map((item) => <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer">{item.label}<ExternalLink size={14}/></a>)}
        </nav>}

        <section className="project-visual-references">
          <div className="project-section-heading"><p className="eyebrow">PROJECT SCREENS & VISUAL REFERENCES</p><span>{project.gallery.length} IMAGES</span></div>
          <div className="project-visual-grid">
            {project.gallery.map((image) => <figure key={image.src}>
              <div className="project-visual-image">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <button type="button" className="project-image-open" aria-label={`Open ${image.caption} in a new tab`} onClick={() => openImage(image.src)}><ArrowUpRight size={19}/></button>
              </div>
              <figcaption>{image.caption}</figcaption>
            </figure>)}
          </div>
        </section>

        <div className="project-contribution-grid">
          <section><h3>MY QA CONTRIBUTIONS</h3><ul>{project.build.map((line) => <li key={line}>{line}</li>)}</ul></section>
          <section><h3>KEY USER WORKFLOWS</h3><ul className="project-check-list">{project.features.map((line) => <li key={line}>{line}</li>)}</ul></section>
        </div>

        {/* <div className="project-page-end"><button type="button" className="project-page-back bottom" onClick={onBack}><ArrowLeft size={15}/> BACK</button></div> */}
      </div>
    </main>
  );
}
