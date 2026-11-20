import { useMemo, useState } from 'react';
import { ArrowLeftRight, Check, X, ShieldCheck } from 'lucide-react';

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export default function Compare() {
  const [cut, setCut] = useState(50);
  // These are intentionally fictional demo credentials. They stay local in this component.
  const [email, setEmail] = useState('testuser@example.com');
  const [password, setPassword] = useState('DemoPass123!');
  const [result, setResult] = useState(null);

  const emailValid = isValidEmail(email);
  const passwordValid = password.trim().length >= 8;
  const formValid = emailValid && passwordValid;
  const passwordMask = password ? '•'.repeat(password.length) : '';
  const issues = useMemo(() => {
    const errors = [];
    if (!email.trim()) errors.push('Email is required.');
    else if (!emailValid) errors.push('Enter a valid email address.');
    if (!password.trim()) errors.push('Password is required.');
    else if (!passwordValid) errors.push('Use at least 8 characters for the password.');
    return errors;
  }, [email, password, emailValid, passwordValid]);

  const updateEmail = (value) => { setEmail(value); setResult(null); };
  const updatePassword = (value) => { setPassword(value); setResult(null); };

  const runValidation = (event) => {
    event.preventDefault();
    setResult(formValid
      ? { ok: true, message: 'Validation passed. The email format and required password length are valid.' }
      : { ok: false, message: issues[0] || 'Check the entered details before continuing.' });
  };

  const fieldValue = (value) => value || '—';

  return (
    <section className="compare-section" aria-labelledby="compare-heading">
      <div className="compare-copy">
        <p className="eyebrow">QUALITY UNDER THE HOOD</p>
        <h2 id="compare-heading">FROM BUG.<br />TO FIX.<br /><span>TO SHIP.</span></h2>
        <p>A good release is built through a disciplined defect lifecycle: reproduce the issue, understand its impact, verify the fix and run the right regression checks.</p>
        <small>QUALITY PROCESS / REQUIREMENT TO RELEASE</small>
      </div>
      <div className="compare-visual-wrap">
        <div className="compare-visual" style={{ '--cut': `${cut}%` }}>
          <div className="screen bug" aria-hidden="true">
            <span className="screen-label"><X size={10} /> BUG REPORTED</span>
            <div className="screen-window bug-window">
              <div className="demo-app-top"><i /><i /><i /><b>ACCOUNT ACCESS</b></div>
              <p className="demo-kicker">FORM SUBMISSION / BEFORE FIX</p>
              <strong className="demo-title">Something isn’t working.</strong>
              <div className="demo-field"><span>Email address</span><div>{fieldValue(email)}</div></div>
              <div className="demo-field"><span>Password</span><div className="demo-password">{fieldValue(passwordMask)}</div></div>
              <div className="demo-submit bug-submit">SUBMIT FORM</div>
              <em className="demo-error"><X size={12} /> {formValid ? 'No validation check · form accepts submission.' : 'Invalid input can still be submitted.'}</em>
              <small className="demo-foot">BUG REPRODUCED · CLIENT VALIDATION MISSING</small>
            </div>
          </div>
          <div className="screen fixed" aria-hidden="true">
            <span className="screen-label"><Check size={10} /> FIX VERIFIED</span>
            <div className="screen-window fixed-window">
              <div className="demo-app-top"><i /><i /><i /><b>ACCOUNT ACCESS</b></div>
              <p className="demo-kicker">FORM SUBMISSION / AFTER FIX</p>
              <strong className="demo-title">{formValid ? 'Everything looks good.' : 'Check your details.'}</strong>
              <div className="demo-field"><span>Email address</span><div>{fieldValue(email)}</div></div>
              <div className="demo-field"><span>Password</span><div className="demo-password">{fieldValue(passwordMask)}</div></div>
              <div className={`demo-submit ${formValid ? 'fixed-submit' : 'blocked-submit'}`}>{formValid ? 'CONTINUE' : 'SUBMISSION BLOCKED'}</div>
              {formValid
                ? <em className="demo-success"><ShieldCheck size={12} /> Valid format · required checks passed.</em>
                : <em className="demo-error"><X size={12} /> {issues[0] || 'Invalid inputs blocked.'}</em>}
              <small className="demo-foot">RETESTED · {formValid ? 'REGRESSION PASSED' : 'VALIDATION BLOCKS INVALID INPUT'}</small>
            </div>
          </div>
          <div className={`compare-divider ${cut === 0 ? "at-start" : ""} ${cut === 100 ? "at-end" : ""}`}><span><ArrowLeftRight size={17} /></span></div>
          <input
            aria-label="Compare bug reported and fix verified screens"
            aria-valuetext={`${cut}% divider position; ${100 - cut}% of the verified screen is visible`}
            type="range" min="0" max="100" step="1" value={cut}
            onChange={(event) => setCut(Number(event.target.value))}
          />
        </div>
        <div className="compare-caption"><span>DRAG TO COMPARE BOTH STATES</span><span>BUG REPORTED <b>→</b> FIX VERIFIED</span></div>

        <form className="compare-demo" onSubmit={runValidation} noValidate>
          <div className="compare-demo-copy">
            <p className="eyebrow">TRY THE VERIFIED VALIDATION</p>
            <strong>Run a small input check.</strong>
            <span>Sample credentials are prefilled. Change either field to update both screens above. This local demo validates input only; it does not sign in or send data.</span>
          </div>
          <div className="compare-demo-fields">
            <label>Email<input type="email" value={email} onChange={(event) => updateEmail(event.target.value)} placeholder="name@example.com" autoComplete="off" /></label>
            <label>Password<input type="password" value={password} onChange={(event) => updatePassword(event.target.value)} placeholder="At least 8 characters" autoComplete="off" /></label>
            <button className="red-button" type="submit">RUN VALIDATION <ArrowLeftRight size={13} /></button>
          </div>
          <p className="compare-demo-hint">DEMO EMAIL: testuser@example.com <span>·</span> DEMO PASSWORD: DemoPass123!</p>
          {result && <p className={`compare-demo-result ${result.ok ? 'success' : 'error'}`} role="status">{result.ok ? <Check size={14} /> : <X size={14} />}{result.message}</p>}
        </form>
      </div>
    </section>
  );
}
