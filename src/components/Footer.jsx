import { ArrowUpRight, Github, Linkedin, Instagram, Facebook, Mail, Phone, MessageCircle } from 'lucide-react';
import { profile } from '../data/portfolio';

const morseName = '📡 ... ..- -- .. - / .--. .- -. -.-. .... .- .-.. 🛰️';

export default function Footer() {
  const phoneDigits = profile.phone.replace(/\D/g, '');
  return (
    <footer className="site-footer site-footer-rich">
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-grid">
        <div className="footer-brand-block">
          <a className="footer-logo" href="#top" aria-label="Sumit Panchal, back to top">SUMIT PANCHAL<span className="footer-logo-registered">®</span></a>
          <p className="footer-role">QUALITY ASSURANCE ANALYST <i>·</i> MANUAL QA ENGINEER <i>·</i> SOFTWARE TESTING</p>
          <p className="footer-quote">“Quality is a team effort.”</p>
          <p className="footer-tagline">Building confidence through testing.</p>
          <div className="footer-copyright">
            <span>© {new Date().getFullYear()} {profile.displayName.toUpperCase()}</span>
            <small>ALL RIGHTS RESERVED.</small>
          </div>
          <small className="footer-credit">DESIGNED & DEVELOPED BY <b>SUMIT PANCHAL</b></small>
        </div>

        <div className="footer-connect">
          <p className="footer-kicker">CONNECT WITH ME</p>
          <a className="footer-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="footer-phone" href={`tel:${phoneDigits}`}><Phone size={13} /> {profile.phone}</a>
          <div className="footer-socials">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin /></a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><Github /></a>
            <a href="https://www.instagram.com/workhard2livelarge" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><Instagram /></a>
            <a href="https://www.facebook.com/share/1BxMxaQsV8/" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook"><Facebook /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email" title="Email"><Mail /></a>
            <a href={`https://wa.me/${phoneDigits}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp"><MessageCircle /></a>
          </div>
          <a className="footer-morse" href="#top" aria-label="Return to top of portfolio" title="Back to portfolio home">{morseName}</a>
        </div>

        <div className="footer-commitment">
          <p className="footer-kicker">QUALITY COMMITMENT</p>
          <p>Quality is built through attention to detail, thoughtful testing, and continuous improvement.</p>
          <div className="footer-pills"><span>RELIABLE SOFTWARE</span><span>DEFECT PREVENTION</span><span>REGRESSION TESTING</span></div>
          <a className="footer-github-link" href={profile.links.github} target="_blank" rel="noreferrer">EXPLORE MY GITHUB <ArrowUpRight size={14} /></a>
          <a className="footer-back-top" href="#top">BACK TO TOP <ArrowUpRight size={14} /></a>
        </div>
      </div>
    </footer>
  );
}
