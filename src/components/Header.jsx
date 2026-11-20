import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, Moon, Sun } from 'lucide-react';

const links = [['Home', '#top'], ['Work', '#work'], ['About', '#about'], ['Journey', '#journey'], ['Certificates', '#credentials'], ['Contact', '#contact']];

export default function Header({ motionOn, setMotionOn }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('work');

  useEffect(() => {
    const ids = links.map(([, href]) => href.slice(1));
    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!('IntersectionObserver' in window) || !nodes.length) return undefined;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.15, 0.35, 0.6] });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Sumit Panchal home">SUMIT PANCHAL<span className="wordmark-registered">®</span></a>
      <nav id="primary-navigation" className={open ? 'main-nav open' : 'main-nav'} aria-label="Primary navigation">
        {links.map(([label, href], i) => (
          <a key={href} href={href} className={active === href.slice(1) ? 'active' : ''} onClick={() => setOpen(false)}>
            <small>0{i + 1}</small>{label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button
          type="button"
          className="motion-toggle"
          onClick={() => setMotionOn((value) => !value)}
          aria-pressed={motionOn}
          title={motionOn ? 'Turn animations off' : 'Turn animations on'}
        >
          {motionOn ? <Sun size={13} /> : <Moon size={13} />} Motion {motionOn ? 'on' : 'off'}
        </button>
        <a className="talk-link" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
