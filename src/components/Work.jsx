import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search, X } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useMotionEnabled } from '../motion';
import ToolsMarquee from './ToolsMarquee';

const filters = ['All', 'Mobility', 'Social', 'E-commerce', 'Gaming', 'Health', 'Automation'];

export default function Work({ onOpenProject }) {
  const motionOn = useMotionEnabled();
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');

  const visible = useMemo(() => projects.filter((project) => {
    const matchesFilter = filter === 'All' || project.type === filter;
    const haystack = `${project.title} ${project.genre} ${project.type} ${project.logline} ${project.testingAreas.join(' ')}`.toLowerCase();
    return matchesFilter && haystack.includes(query.trim().toLowerCase());
  }), [filter, query]);


  return (
    <section className="section work-section" id="work">
      <div className="section-head">
        <div><p className="eyebrow">01 / SELECTED WORK</p><h2>TESTING THAT <span>PROTECTS.</span></h2></div>
        <a className="text-link" href="#contact">LET’S TALK <ArrowUpRight size={16} /></a>
      </div>

      <div className="work-toolbar">
        <div className="filter-tabs" role="tablist" aria-label="Filter QA case studies">
          {filters.map((item) => (
            <button type="button" role="tab" aria-selected={filter === item} className={filter === item ? 'active' : ''} key={item} onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>
        <label className="search-box">
          <Search size={14} aria-hidden="true" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Title or category" aria-label="Search QA case studies" />
          <button type="button" onClick={() => setQuery('')} aria-label="Clear search">{query && <X size={13} />}</button>
        </label>
      </div>

      <motion.div layout={motionOn} className="project-grid">
        {visible.map((project, index) => {
          const shortTitle = project.title.split(' - ')[0].split(' – ')[0];
          return (
            <motion.button
              type="button"
              layout={motionOn}
              key={project.id}
              className="project-card"
              onClick={() => onOpenProject?.(project.id)}
              whileHover={motionOn ? { y: -5 } : undefined}
              initial={motionOn ? { opacity: 0, y: 24 } : false}
              whileInView={motionOn ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, margin: '0px 0px -8% 0px' }}
              transition={motionOn ? { duration: .65, delay: Math.min(index, 5) * .045, ease: [.22, 1, .36, 1] } : { duration: 0 }}
              aria-label={`Open ${project.title} QA case study`}
            >
              <div className={`project-art project-art-image art-${String(index + 1).padStart(2, '0')}`}>
                <img className="project-card-image" src={project.image} alt={`${project.title} project screens`} loading="lazy" decoding="async" />
                <span className="art-chip">{project.type.toUpperCase()} / QA CASE STUDY</span>
                <span className="art-lines" aria-hidden="true" />
                <span className="art-open"><ArrowUpRight size={20} /></span>
                <div className="project-art-copy"><span className="art-title">{shortTitle}</span><span className="art-sub">{project.genre}</span></div>
              </div>
              <div className="project-caption">
                <b>{String(index + 1).padStart(2, '0')}</b>
                <div><strong>{shortTitle}</strong><span>{project.genre}</span></div>
                <ArrowUpRight className="caption-arrow" size={16} />
              </div>
            </motion.button>
          );
        })}
      </motion.div>
      {visible.length === 0 && <p className="empty-state">No case studies match that search. Try another title or category.</p>}
      <div className="work-result-note"><span>{visible.length} OF {projects.length} CASE STUDIES</span><span>SELECT A CARD TO EXPLORE TEST COVERAGE</span></div>
      <ToolsMarquee />

    </section>
  );
}
