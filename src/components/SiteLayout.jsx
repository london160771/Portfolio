import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

export default function SiteLayout() {
  const location = useLocation();
  const main = useRef(null);
  const previousLocationKey = useRef(location.key);

  useEffect(() => {
    const anchor = location.hash ? document.getElementById(location.hash.slice(1)) : null;
    if (previousLocationKey.current !== location.key || location.hash) {
      const focusTarget = anchor && anchor !== main.current
        ? anchor.querySelector('h1, h2') || anchor
        : main.current;
      focusTarget?.focus({ preventScroll: true });
    }
    previousLocationKey.current = location.key;
    if (anchor) anchor.scrollIntoView({ behavior: 'instant' });
    else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.key, location.hash]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader key={location.key} />
      <main id="main-content" className="container main-content" tabIndex={-1} ref={main}><Outlet /></main>
      <SiteFooter />
    </>
  );
}
