import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useMotionEnabled } from '../motion';
import { ArrowUpRight, Mail, Phone, Linkedin, MapPin, Plus, Send, Github, MessageCircle } from 'lucide-react';
import { profile } from '../data/portfolio';
import { GOOGLE_APPS_SCRIPT_URL } from '../config/contact';

const projectTypes = ['Website / Web application', 'Mobile application', 'Manual QA testing', 'Regression / Release testing', 'Test documentation', 'Other enquiry'];

export default function Contact() {
  const motionOn = useMotionEnabled();
  const [expanded, setExpanded] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' });
  const [status, setStatus] = useState('');
  const phoneDigits = profile.phone.replace(/\D/g, '');
  const mailto = useMemo(() => `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio enquiry: ${form.projectType || 'QA services'}`)}&body=${encodeURIComponent(`${form.message}\n\nProject type: ${form.projectType}\nFrom: ${form.name} (${form.email})`)}`, [form]);

  const submitEnquiry = async (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.projectType || !form.message.trim()) {
      setStatus('Complete each field before preparing the enquiry.');
      return;
    }
    if (GOOGLE_APPS_SCRIPT_URL) {
      setStatus('Sending your enquiry…');
      try {
        await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
          body: new URLSearchParams({
            name: form.name.trim(),
            email: form.email.trim(),
            projectType: form.projectType,
            message: form.message.trim(),
          }).toString(),
        });
        setStatus('Your enquiry has been sent. Thank you — I’ll get back to you soon.');
        setForm({ name: '', email: '', projectType: '', message: '' });
      } catch (error) {
        console.error('Contact form submission failed:', error);
        setStatus('Could not send the enquiry. Please use the email link to contact me directly.');
      }
    } else {
      setStatus('Google Script is not configured yet. Your email app will open with the enquiry ready to send.');
      window.location.href = mailto;
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">04 / YOUR NEXT PROJECT</p>
          <h2>LET’S TEST<br /><span>TOGETHER.</span></h2>
          <p>Have a product that needs thoughtful testing? Let’s make quality part of the process.</p>
          <a className="conversation-link" href={`mailto:${profile.email}`}>START A CONVERSATION <span><ArrowUpRight /></span></a>
        </div>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}><i><Mail /></i><span><small>EMAIL</small><b>{profile.email}</b></span><ArrowUpRight /></a>
          <a href={`tel:${phoneDigits}`}><i><Phone /></i><span><small>PHONE</small><b>{profile.phone}</b></span><ArrowUpRight /></a>
          <a href={`https://wa.me/${phoneDigits}`} target="_blank" rel="noreferrer"><i><MessageCircle /></i><span><small>WHATSAPP</small><b>Message Sumit</b></span><ArrowUpRight /></a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer"><i><Linkedin /></i><span><small>LINKEDIN</small><b>/in/sumit-panchal-b790a8236</b></span><ArrowUpRight /></a>
          <a href={profile.links.github} target="_blank" rel="noreferrer"><i><Github /></i><span><small>GITHUB</small><b>github.com/lifeofthecoders</b></span><ArrowUpRight /></a>
          <div><i><MapPin /></i><span><small>BASED IN</small><b>{profile.location}</b></span></div>
        </div>
        <motion.a
          className="contact-reel contact-reel-motion"
          href="#work"
          aria-label="Explore QA project case studies"
          data-motion={motionOn ? 'on' : 'off'}
          initial={false}
          animate={motionOn ? { y: [0, -6, 0], rotate: [3, 4.2, 3] } : { y: 0, rotate: 3 }}
          transition={motionOn ? { duration: 5.2, repeat: Infinity, ease: 'easeInOut' } : { duration: 0 }}
        >
          <div className="reel-screen"><span>QUALITY / ASSURANCE</span><b>TEST<br /><em>SMARTER.</em></b><small>SUMIT PANCHAL · QA ANALYST</small><div className="reel-play"><ArrowUpRight /></div></div>
          <p>RELIABLE RELEASES START WITH GOOD TESTING.</p>
        </motion.a>
      </div>

      <div className={`project-form-wrap ${expanded ? 'expanded' : ''}`}>
        <button type="button" className="form-toggle" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}>
          <span>Tell me about your project</span><Plus className={expanded ? 'rotated' : ''} />
        </button>
        {expanded && (
          <form className="project-form" onSubmit={submitEnquiry}>
            <label>Your name<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Name" autoComplete="name" /></label>
            <label>Your email<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" autoComplete="email" /></label>
            <label>Project type<select required value={form.projectType} onChange={(event) => setForm({ ...form, projectType: event.target.value })}><option value="">Select a project type</option>{projectTypes.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label className="full-field">A little about the project<textarea required rows="4" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="What are you building or testing?" /></label>
            <button className="red-button" type="submit">CONTINUE TO EMAIL <Send size={14} /></button>
            {status && <p className="form-status" role="status">{status}</p>}
          </form>
        )}
      </div>
      <div className="resume-download-row"><span>WANT MORE DETAIL?</span><a href={profile.resumePdf} target="_blank" rel="noreferrer">VIEW / DOWNLOAD RESUME <ArrowUpRight size={14} /></a></div>
    </section>
  );
}
