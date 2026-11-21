import BigTitle from '../components/BigTitle';
import { profile } from '../data/profile';
import usePageTitle from '../hooks/usePageTitle';

export default function ContactPage() {
  usePageTitle('Contact', 'Contact ayyoweb3 for web development and AI motion design work.');
  return (
    <section className="page container">
      <BigTitle>Contact</BigTitle>
      <p className="page-lede">Open to full stack builds, freelance projects and AI motion or video work. Based in Lagos, available remotely.</p>
      <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
      <div className="cluster contact-socials">
        <a href={profile.github}>GitHub <span aria-hidden="true">↗</span></a>
        <a href={profile.twitter}>X <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
