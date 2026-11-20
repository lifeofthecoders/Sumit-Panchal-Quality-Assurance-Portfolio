import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, MapPin, Play, Asterisk } from 'lucide-react';
import { profile, projects, certifications } from '../data/portfolio';
import { useMotionEnabled } from '../motion';
import { useEffect, useState } from 'react';

const ease = [.22, 1, .36, 1];
const stagger = {
  hidden: {},
  show: {transition: {delayChildren: .6, staggerChildren: .2,},},
};

const item = {
  hidden: { opacity: 0, y: 26, filter: 'blur(7px)' },
  show: {opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.3, ease },},
};

export default function Hero({ onFeaturedProject }) {
  const motionOn = useMotionEnabled();
  const prefersReduced = useReducedMotion();
  const animateHero = motionOn && !prefersReduced;
  const portfolioLetters = 'PORTFOLIO'.split('');
  const [replayKey, setReplayKey] = useState(0);
  useEffect(() => {
    const handleReplay = () => { setReplayKey((value) => value + 1); };
    window.addEventListener('portfolio:replay-hero', handleReplay);
    return () => window.removeEventListener('portfolio:replay-hero', handleReplay);
  }, []);
  return (
    <section className="hero" id="top" key={replayKey}>
      <motion.div
        className="hero-micro"
        initial={animateHero ? { opacity: 0, y: -12 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={animateHero ? { duration: .65, delay: .12, ease } : { duration: 0 }}
      >
        <div><b>SENIOR QUALITY ANALYST</b><span>MANUAL & FUNCTIONAL TESTING</span></div>
        <div className="availability"><i /> AVAILABLE FOR NEW OPPORTUNITIES</div>
      </motion.div>

      <div className="hero-word-wrap" aria-hidden="true">
        <motion.div
          className="hero-word"
          initial={animateHero ? { opacity: 0, y: 34, scale: .975, filter: 'blur(12px)' } : false}
          animate={{ opacity: .82, y: 0, scale: 1, filter: 'blur(0px)' }}
          transition={animateHero ? { duration: 2, delay: .3, ease } : { duration: 0 }}
        >
          {portfolioLetters.map((letter, index) => (
            <motion.span
              className="hero-word-letter"
              key={`${letter}-${index}`}
              initial={animateHero ? { opacity: 0, y: 52, rotateX: -22 } : false}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={animateHero ? { duration: 1.5, delay: .35 + index * .12, ease } : { duration: 0 }}
            >{letter}</motion.span>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="hero-portrait"
        initial={animateHero ? { opacity: 0, y: 86, scale: .94, filter: 'blur(12px)' } : false}
        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        transition={animateHero ? { duration: 2, delay: .8, ease } : { duration: 0 }}
      >
        <img src={profile.portrait.src} srcSet={profile.portrait.srcSet} sizes="(max-width: 600px) 90vw, 40vw" fetchPriority="high" alt={profile.portrait.alt} />
      </motion.div>

      <motion.div
        className="hero-copy"
        variants={stagger}
        initial={animateHero ? 'hidden' : false}
        animate={animateHero ? 'show' : undefined}
      >
        <motion.div className="script-intro" variants={item}>Hello, I’m</motion.div>
        <motion.h1 variants={item}>SUMIT<br />PANCHAL<span>.</span></motion.h1>
        <motion.p className="hero-role" variants={item}>SENIOR QUALITY ANALYST</motion.p>
        <motion.p className="hero-desc" variants={item}>Senior Quality Analyst with 5+ years of experience in manual and functional testing of web and mobile applications. Focused on finding product risks early and helping teams ship stable, user-friendly releases.</motion.p>
        <motion.a className="red-button" href="#work" variants={item}>See my work <ArrowDown size={15} /></motion.a>
        <motion.div className="location" variants={item}><MapPin size={13} /> AHMEDABAD, INDIA</motion.div>
      </motion.div>

      <motion.aside
        className="hero-aside"
        initial={animateHero ? { opacity: 0, x: 24 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={animateHero ? { duration: 1.5, delay: 1.2, ease } : { duration: 0 }}
      >
        <div className="asterisk"><Asterisk size={25} /></div>
        <p>Every release.<br /><strong>Quality checked.</strong></p>
        <div className="stat"><b>5+</b><span>YEARS IN QA</span></div>
        <div className="stat"><b>6</b><span>PRODUCTS TESTED</span></div>
        <div className="stat"><b>{certifications.length}</b><span>CREDENTIALS</span></div>
      </motion.aside>

      <motion.div
        className="hero-bottom"
        initial={animateHero ? { opacity: 0, y: 18 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={animateHero ? { duration: 1.2, delay: 1.8, ease } : { duration: 0 }}
      >
        <button type="button" className="hero-featured-button" onClick={onFeaturedProject}><span className="play-icon"><Play size={13} /></span> VIEW FEATURED PROJECT</button>
        <a className="scroll-discover" href="#work">SCROLL TO DISCOVER <ArrowDown size={13} /></a>
        <span>SELECTED WORK / 2021—2026 · {projects.length} CASE STUDIES</span>
      </motion.div>
    </section>
  );
}
