import { useLayoutEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  ['/', 'Selected Work'], ['/web2', 'Web2'], ['/web3', 'Web3'],
  ['/contact', 'Contact'],
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = useRef(null);
  const header = useRef(null);

  useLayoutEffect(() => {
    const measure = () => document.documentElement.style.setProperty(
      '--site-header-height', `${Math.ceil(header.current.getBoundingClientRect().height)}px`,
    );
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(header.current);
    return () => observer.disconnect();
  }, [menuOpen]);

  function handleEscape(event) {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false);
      toggle.current?.focus();
    }
  }

  return (
    <header ref={header} className="site-header-shell" onKeyDown={handleEscape}>
      <div className="site-header visual-header container">
      <Link className="brand" to="/" aria-label="Ayyoweb3 home">ayyo<span>web3</span></Link>
      <button ref={toggle} className="menu-toggle" type="button" aria-expanded={menuOpen}
        aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? 'Close menu' : 'Menu'}
      </button>
      <nav id="primary-navigation" className={`site-nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
        {links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}
          onClick={() => setMenuOpen(false)}>{label}</NavLink>)}
      </nav>
      </div>
    </header>
  );
}
