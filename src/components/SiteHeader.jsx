import { Link, NavLink } from 'react-router-dom';

const links = [['/motion', 'Motion'], ['/builds', 'Builds'], ['/contact', 'Contact']];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner container">
        <Link className="wordmark" to="/" aria-label="ayyoweb3 home">ayyoweb3</Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {links.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
        </nav>
      </div>
    </header>
  );
}
