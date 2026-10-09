import { profile } from '../data/profile';
import usePageTitle from '../hooks/usePageTitle';

export default function ContactPage() {
  usePageTitle('Contact', 'Contact Ayyoweb3 for full-stack roles and collaborations.');
  return (
    <section className="section stack prose">
      <h1>Contact</h1><p>Open to full-stack roles, freelance projects, and collaborations. Based in Nigeria, available remotely.</p>
      <ul className="contact-links stack"><li><a href={`mailto:${profile.email}`}>{profile.email}</a></li><li><a href={profile.github}>GitHub</a></li><li><a href={profile.twitter}>X / Twitter</a></li></ul>
    </section>
  );
}
