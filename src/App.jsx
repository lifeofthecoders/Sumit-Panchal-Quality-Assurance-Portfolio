import { useEffect, useState } from 'react';
import { MotionContext } from './motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import Compare from './components/Compare';
import About from './components/About';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';
import { projects } from './data/portfolio';

function getInitialMotionPreference() {
  try {
    const saved = window.localStorage.getItem('sumit-portfolio-motion');
    if (saved === 'on') return true;
    if (saved === 'off') return false;
  } catch { /* Storage may be unavailable in private browsing. */ }
  return !window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
}

export default function App() {
  const [motionOn, setMotionOn] = useState(getInitialMotionPreference);
  const [projectId, setProjectId] = useState(() => new URLSearchParams(window.location.search).get('project'));
  const selectedProject = projects.find((item) => item.id === projectId) || null;

  useEffect(() => {
    const syncRoute = () => setProjectId(new URLSearchParams(window.location.search).get('project'));
    window.addEventListener('popstate', syncRoute);
    return () => window.removeEventListener('popstate', syncRoute);
  }, []);

  const openProject = (id) => {
    const url = new URL(window.location.href);
    url.searchParams.set('project', id);
    window.history.pushState({ portfolioProject: true, projectId: id }, '', url);
    setProjectId(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  const closeProject = () => {
    if (window.history.state?.portfolioProject) {
      window.history.back();
    } else {
      const url = new URL(window.location.href);
      url.searchParams.delete('project');
      window.history.replaceState({}, '', url);
      setProjectId(null);
    }
  };

  useEffect(() => {
    document.documentElement.dataset.motion = motionOn ? 'on' : 'off';
    try { window.localStorage.setItem('sumit-portfolio-motion', motionOn ? 'on' : 'off'); } catch { /* Ignore storage failures. */ }
  }, [motionOn]);

  useEffect(() => {
    const updateProgress = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      root.style.setProperty('--scroll-progress', String(progress));
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <MotionContext.Provider value={motionOn}>
      <div className="reading-progress" aria-hidden="true" />
      {selectedProject ? (
        <>
          <ProjectPage project={selectedProject} onBack={closeProject} />
        </>
      ) : (
        <>
          <Header motionOn={motionOn} setMotionOn={setMotionOn} />
          <main id="main">
            <Hero onFeaturedProject={() => openProject('playwright-e2e')} />
            <Work onOpenProject={openProject} />
            <Compare />
            <About />
            <Journey />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </MotionContext.Provider>
  );
}
