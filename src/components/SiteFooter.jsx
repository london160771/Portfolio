import { profile } from '../data/profile';

export default function SiteFooter() {
  return (
    <footer className="site-footer container">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <div className="cluster">
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.github}>GitHub</a>
        <a href={profile.twitter}>X</a>
      </div>
    </footer>
  );
}
