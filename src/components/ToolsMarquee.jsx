import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Minus, Pause, Play, Plus } from 'lucide-react';
import { useMotionEnabled } from '../motion';

const tools = [
  ['JIRA', 'DEFECT TRACKING'],
  ['EXCEL', 'TEST DOCUMENTATION'],
  ['CHROME DEVTOOLS', 'BROWSER INSPECTION'],
  ['AGILE / SCRUM', 'DELIVERY METHOD'],
  ['ISTQB', 'TESTING STANDARDS'],
  ['LEARNTUBE.AI', 'ASSESSMENT'],
  ['POSTMAN', 'API TESTING'],
  ['PLAYWRIGHT', 'E2E AUTOMATION'],
];

export default function ToolsMarquee() {
  const motionOn = useMotionEnabled();
  const viewport = useRef(null);
  const firstSet = useRef(null);
  const [all, setAll] = useState(false);
  const [paused, setPaused] = useState(false);
  const autoPlaying = motionOn && !paused && !all;

  const getLoopWidth = useCallback(() => {
    const width = firstSet.current?.getBoundingClientRect().width;
    return width || 0;
  }, []);

  // A pixel-based animation keeps the controls reliable and makes the loop seamless.
  // The duplicate group lets the viewport wrap without a visible jump.
  useEffect(() => {
    const element = viewport.current;
    if (!element || all || !autoPlaying) return undefined;
    let frame = 0;
    let previousTime = 0;
    const tick = (time) => {
      if (previousTime) {
        const delta = Math.min(40, time - previousTime);
        const loopWidth = getLoopWidth();
        element.scrollLeft += delta * 0.038; // ~38 px / second
        if (loopWidth > 0 && element.scrollLeft >= loopWidth) {
          element.scrollLeft -= loopWidth;
        }
      }
      previousTime = time;
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [all, autoPlaying, getLoopWidth]);

  useEffect(() => {
    if (all && viewport.current) viewport.current.scrollLeft = 0;
  }, [all]);

  const move = (direction) => {
    const element = viewport.current;
    if (!element) return;
    setPaused(true);
    const loopWidth = getLoopWidth();
    const current = element.scrollLeft;
    const step = 240;
    let next = current + direction * step;
    if (loopWidth > 0) {
      if (next < 0) next += loopWidth;
      if (next >= loopWidth) next -= loopWidth;
    }
    element.scrollTo({ left: Math.max(0, next), behavior: motionOn ? 'smooth' : 'auto' });
  };

  const renderTools = (suffix = '') => tools.map(([name, desc], index) => (
    <div className="tool-word" key={`${suffix}${name}-${index}`}>
      <b>{name}</b>
      <small>{desc}</small>
    </div>
  ));

  return (
    <div className="tools-strip">
      <div className="tools-heading">
        <span className="eyebrow">BUILT WITH / THE TOOLS I TRUST</span>
        <div className="tools-controls">
          <button
            type="button"
            className="tools-expand-toggle"
            onClick={() => setAll((value) => !value)}
            aria-expanded={all}
            aria-controls="qa-tools-list"
            aria-label={all ? 'Show tools carousel' : 'Show all tools'}
            title={all ? 'Collapse tools list' : 'Expand to see all tools'}
          >
            <span>{all ? 'SHOW LESS' : 'SEE ALL'}</span>
            {all ? (
              <Minus size={22} strokeWidth={2.8} aria-hidden="true" />
            ) : (
              <Plus size={22} strokeWidth={2.8} aria-hidden="true" />
            )}
          </button>
          {!all && <>
            <button type="button" onClick={() => move(-1)} aria-label="Previous tools" title="Previous tools"><ChevronLeft /></button>
            <button
              type="button"
              onClick={() => setPaused(autoPlaying)}
              aria-label={autoPlaying ? 'Pause tools carousel' : 'Play tools carousel'}
              aria-pressed={autoPlaying}
              title={autoPlaying ? 'Pause continuous scrolling' : motionOn ? 'Resume continuous scrolling' : 'Turn Motion on to resume autoplay'}
            >{autoPlaying ? <Pause /> : <Play />}</button>
            <button type="button" onClick={() => move(1)} aria-label="Next tools" title="Next tools"><ChevronRight /></button>
          </>}
        </div>
      </div>
      <div id="qa-tools-list">
        {all ? (
          <div className="tool-grid">
            {tools.map(([name, desc]) => <div className="tool-tile" key={name}><b>{name}</b><small>{desc}</small></div>)}
          </div>
        ) : (
          <div
            className={`tool-viewport ${autoPlaying ? 'is-playing' : 'is-paused'}`}
            ref={viewport}
            tabIndex={0}
            role="region"
            aria-label="QA tools carousel. Use previous and next controls or horizontal scrolling."
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
              if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
            }}
          >
            <div className="tool-track">
              <div className="tool-loop-set" ref={firstSet}>{renderTools('first-')}</div>
              <div className="tool-loop-set" aria-hidden="true">{renderTools('second-')}</div>
            </div>
          </div>
        )}
      </div>
      {!all && <p className="tools-motion-note" aria-live="polite">{autoPlaying ? 'CONTINUOUS SCROLLING · PLAYING' : motionOn ? 'SCROLL PAUSED · USE ARROWS OR PRESS PLAY' : 'MOTION OFF · MANUAL SCROLL AVAILABLE'}</p>}
    </div>
  );
}
