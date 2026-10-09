import { Link } from 'react-router-dom';
import { profile } from '../data/profile';

export default function SiteFooter() {
  return (
    <footer className="site-footer container">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <div className="cluster"><Link to="/contact">Contact</Link><a href={profile.github}>GitHub</a><a href={profile.twitter}>X / Twitter</a></div>
    </footer>
  );
}
