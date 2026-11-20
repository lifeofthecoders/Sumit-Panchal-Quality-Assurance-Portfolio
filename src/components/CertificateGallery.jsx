import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Search, X } from 'lucide-react';
import { certifications } from '../data/portfolio';
import { useMotionEnabled } from '../motion';

const categories = ['ALL', 'QUALITY ASSURANCE', 'TECHNICAL SKILLS', 'ACHIEVEMENTS'];

export default function CertificateGallery() {
  const motionOn = useMotionEnabled();
  const [category, setCategory] = useState('ALL');
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const filtered = useMemo(() => certifications.filter((item) => {
    const categoryMatches = category === 'ALL' || item.category === category;
    const text = `${item.name} ${item.issuer} ${item.date} ${item.category}`.toLowerCase();
    return categoryMatches && text.includes(query.trim().toLowerCase());
  }), [category, query]);

  const selected = selectedIndex >= 0 ? filtered[selectedIndex] : null;
  const showPrevious = () => setSelectedIndex((index) => (index - 1 + filtered.length) % filtered.length);
  const showNext = () => setSelectedIndex((index) => (index + 1) % filtered.length);

  useEffect(() => {
    if (!selected) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKey = (event) => {
      if (event.key === 'Escape') setSelectedIndex(-1);
      if (event.key === 'ArrowLeft' && filtered.length > 1) showPrevious();
      if (event.key === 'ArrowRight' && filtered.length > 1) showNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedIndex, filtered.length]);

  return (
    <section className="credentials-section" id="credentials" aria-labelledby="credentials-heading">
      <div className="credentials-heading">
        <div><p className="eyebrow">05 / LEARNING & CREDENTIALS</p><h3 id="credentials-heading">A RECORD OF <span>CONTINUOUS LEARNING.</span></h3><p>{certifications.length} certificates and learning records supplied for this portfolio.</p></div>
        <span className="credentials-count">{String(certifications.length).padStart(2, '0')} <small>CREDENTIALS</small></span>
      </div>
      <div className="credentials-toolbar">
        <div className="credential-filters" role="group" aria-label="Filter certificates">
          {categories.map((item) => <button type="button" key={item} className={category === item ? 'active' : ''} onClick={() => { setCategory(item); setSelectedIndex(-1); }}>{item === 'ALL' ? 'ALL' : item.replace('QUALITY ASSURANCE', 'QA')}</button>)}
        </div>
        <label className="credential-search"><Search size={14} /><input value={query} onChange={(event) => { setQuery(event.target.value); setSelectedIndex(-1); }} placeholder="Search credentials" aria-label="Search certificates" /></label>
      </div>
      <div className="credential-grid">
        {filtered.map((item, index) => (
          <motion.button
            type="button" className="credential-card" key={`${item.issuer}-${item.name}-${item.date}`}
            onClick={() => setSelectedIndex(index)}
            initial={motionOn ? { opacity: 0, y: 16 } : false}
            whileInView={motionOn ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, margin: '0px 0px -5% 0px' }}
            transition={motionOn ? { duration: .45, delay: Math.min(index % 8, 7) * .035 } : { duration: 0 }}
            aria-label={`View ${item.name} certificate`}
          >
            <span className="credential-image"><img src={item.link} alt={`${item.name} certificate`} loading="lazy" decoding="async" /></span>
            <span className="credential-caption">
              <b className="credential-number">{String(index + 1).padStart(2, '0')}</b>
              <span className="credential-meta"><small>{item.issuer} · {item.category}</small><strong>{item.name}</strong><time>{item.date}</time></span>
              <ArrowUpRight className="credential-arrow" size={16} />
            </span>
          </motion.button>
        ))}
      </div>
      {filtered.length === 0 && <p className="empty-state">No credentials match that search.</p>}
      <AnimatePresence>
        {selected && (
          <motion.div className="certificate-lightbox" initial={motionOn ? { opacity: 0 } : false} animate={{ opacity: 1 }} exit={{ opacity: motionOn ? 0 : 1 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedIndex(-1); }}>
            <div className="certificate-lightbox-panel" role="dialog" aria-modal="true" aria-label={`${selected.name} certificate`}>
              <button type="button" className="certificate-close" onClick={() => setSelectedIndex(-1)} aria-label="Close certificate"><X /></button>
              {filtered.length > 1 && <>
                <button type="button" className="certificate-nav prev" onClick={showPrevious} aria-label="Previous certificate"><ArrowLeft /></button>
                <button type="button" className="certificate-nav next" onClick={showNext} aria-label="Next certificate"><ArrowRight /></button>
              </>}
              <div className={`certificate-full-image ${selected.alternateLink ? 'has-alternate' : ''}`}><img src={selected.link} alt={`${selected.name} certificate issued by ${selected.issuer}`} />{selected.alternateLink && <img src={selected.alternateLink} alt={`${selected.name} alternate certificate layout issued by ${selected.issuer}`} />}</div>
              <div className="certificate-lightbox-caption"><div><small>{selected.issuer} · {selected.category}</small><strong>{selected.name}</strong><time>{selected.date}{selected.alternateLink ? ' · 2 image versions' : ''}</time></div><a href={selected.link} target="_blank" rel="noopener noreferrer">OPEN IMAGE <ArrowUpRight size={13} /></a></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
