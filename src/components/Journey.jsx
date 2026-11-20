import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { experience, education, certifications } from '../data/portfolio';
import { useMotionEnabled } from '../motion';
import CertificateGallery from './CertificateGallery';

export default function Journey() {
  const motionOn = useMotionEnabled();
  const [open, setOpen] = useState(0);
  const role = experience[0];
  const entries = [
    { id: 'experience', date: '2021 — NOW', title: `${role.role} · ${role.company}`, subtitle: role.place, detail: role.points, isList: true },
    { id: 'education-1', date: '2014 — 2018', title: education[0].school, subtitle: `${education[0].degree} · ${education[0].score}`, detail: ['Bachelor of Engineering, Electronics & Communication Engineering.'], isList: false },
    { id: 'education-2', date: '2011 — 2014', title: education[1].school, subtitle: `${education[1].degree} · ${education[1].score}`, detail: ['Diploma of Engineering, Electronics & Communication Engineering.'], isList: false },
  ];

  return (
    <section className="section journey-section" id="journey">
      <div className="section-head">
        <div><p className="eyebrow">03 / THE JOURNEY</p><h2>KEEP TESTING. KEEP <span>IMPROVING.</span></h2></div>
        <span className="eyebrow">EXPERIENCE & CERTIFICATIONS</span>
      </div>
      <div className="journey-grid">
        <div className="experience-list">
          {entries.map((entry, index) => (
            <div className="experience-item" key={entry.id}>
              <button type="button" className="experience-trigger" onClick={() => setOpen((current) => current === index ? -1 : index)} aria-expanded={open === index}>
                <time>{entry.date}</time>
                <span><strong>{entry.title}</strong><small>{entry.subtitle}</small></span>
                {open === index ? <Minus /> : <Plus />}
              </button>
              {motionOn ? (
                <AnimatePresence initial={false}>
                  {open === index && <motion.div className={`experience-detail ${entry.isList ? '' : 'plain'}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .3 }}>
                    {entry.isList ? <ul>{entry.detail.map((point) => <li key={point}>{point}</li>)}</ul> : entry.detail[0]}
                  </motion.div>}
                </AnimatePresence>
              ) : open === index ? (
                <div className={`experience-detail ${entry.isList ? '' : 'plain'}`}>
                  {entry.isList ? <ul>{entry.detail.map((point) => <li key={point}>{point}</li>)}</ul> : entry.detail[0]}
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <aside className="cert-panel">
          <p className="eyebrow">CERTIFIED</p>
          <h3>TESTED.<br /><span>CERTIFIED.</span></h3>
          <div className="cert-list">
            {certifications.slice(0, 7).map((item, index) => (
              <a className="cert-row" key={`${item.name}-${item.issuer}`} href="#credentials" title="View certificate image in the credential archive">
                <b>{String(index + 1).padStart(2, '0')}</b>
                <div><strong>{item.name}</strong><small>{item.issuer} · {item.date}</small></div>
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
          <a href="#credentials" className="text-link cert-more-link">VIEW ALL {certifications.length} CREDENTIALS <ArrowUpRight size={14} /></a>
        </aside>
      </div>
      <CertificateGallery />
    </section>
  );
}
