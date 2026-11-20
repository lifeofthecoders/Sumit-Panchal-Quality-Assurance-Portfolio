import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Asterisk } from 'lucide-react';
import { skillCategories, education, achievements, profile } from '../data/portfolio';
import { useMotionEnabled } from '../motion';

const steps = [
  ['Requirement Analysis', 'Understand business needs, identify ambiguity and surface product risks.'],
  ['Test Planning & Design', 'Create structured test plans, scenarios, cases and useful test data.'],
  ['Execution', 'Run manual, functional and exploratory checks across platforms.'],
  ['Defect Lifecycle & Retesting', 'Document reproducible defects, track fixes and retest outcomes.'],
  ['Regression & Release Sign-off', 'Verify impacted areas and support confident, stable releases.'],
];

export default function About() {
  const motionOn = useMotionEnabled();
  const prefersReduced = useReducedMotion();
  const animateSection = motionOn && !prefersReduced;
  const timelineRef = useRef(null);
  // Framer Motion's scroll progress naturally reverses while the visitor scrolls upward.
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 78%', 'end 22%'],
  });
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section about-section" id="about">
      <div className="about-lead">
        <div><p className="eyebrow">02 / BEHIND THE CRAFT</p><h2>MORE THAN BUG HUNTING.<br /><span>BUILDING CONFIDENCE.</span></h2></div>
        <p>{profile.aboutIntro}</p>
      </div>
      <div className="about-grid">
        <div className="expertise-col">
          <h3 className="eyebrow">EXPERTISE & SKILLS</h3>
          <div className="education-list">
            {education.map((item) => (
              <div className="education-row" key={item.school}>
                <div><b>{item.school}</b><p>{item.degree} · {item.score}</p></div>
                <time>{item.period}</time>
              </div>
            ))}
          </div>
          <div className="skill-groups">
            {skillCategories.map((group) => (
              <div className="skill-group" key={group.id}>
                <h4>{group.title}</h4>
                <div className="chips">{group.skills.map((skill) => <span key={skill.name} title={skill.note || group.subtitle}>{skill.name}</span>)}</div>
              </div>
            ))}
          </div>
          <div className="tool-icons"><span>JIRA</span><span>EXCEL</span><span>DEVTOOLS</span><span>POSTMAN</span><span>ISTQB</span><span>AGILE</span></div>
        </div>

        <div className="timeline-col">
          <h3 className="eyebrow">FROM REQUIREMENT TO RELEASE</h3>
          <div className="process-timeline" ref={timelineRef}>
            <div className="process-timeline-progress" aria-hidden="true">
              <motion.span style={{ scaleY: animateSection ? lineProgress : 0 }} />
            </div>
            {steps.map(([title, detail], index) => (
              <motion.div
                className="process-step" key={title}
                initial={animateSection ? { opacity: 0, x: 14 } : false}
                whileInView={animateSection ? { opacity: 1, x: 0 } : undefined}
                viewport={{ once: true }}
                transition={animateSection ? { delay: index * .08, duration: .55 } : { duration: 0 }}
              >
                <b>{String(index + 1).padStart(2, '0')}</b><i /><div><strong>{title}</strong><p>{detail}</p></div>
              </motion.div>
            ))}
          </div>
        </div>

        <aside className="quote-panel">
          <span className="quote-mark">“</span>
          <p>From requirements and <em>risk-based testing</em> to stable, user-friendly releases.</p>
          <span className="signature">Sumit</span>
          <small>QUALITY YOU CAN SHIP WITH</small>
          <CheckCircle2 className="quote-icon" size={18} />
        </aside>
      </div>

      <div className="impact-section">
        <div className="impact-heading"><div><p className="eyebrow">QUALITY IMPACT</p><h3>DETAILS THAT <span>MAKE A DIFFERENCE.</span></h3></div><span className="impact-star" aria-hidden="true"><Asterisk size={24} /></span></div>
        <div className="impact-grid">
          {achievements.map((achievement, index) => (
            <motion.article
              className="impact-card" key={achievement.id}
              initial={motionOn ? { opacity: 0, y: 18 } : false}
              whileInView={motionOn ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true }}
              transition={motionOn ? { duration: .5, delay: Math.min(index, 5) * .045 } : { duration: 0 }}
            >
              <span>{achievement.laurel}</span><h4>{achievement.title}</h4><p>{achievement.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
