import { Link } from 'react-router-dom';
import { profile } from '../data/profile';

// Closing band on content pages so every page ends with a way to get in touch.
export default function ContactCta() {
  return (
    <aside className="contact-cta" aria-labelledby="contact-cta-title">
      <h2 id="contact-cta-title" className="contact-cta-title">Have a build or a video in mind?</h2>
      <div className="cluster">
        <a className="button button--primary" href={`mailto:${profile.email}`}>Email me <span aria-hidden="true">→</span></a>
        <Link className="button" to="/contact">Contact <span aria-hidden="true">→</span></Link>
      </div>
    </aside>
  );
}
