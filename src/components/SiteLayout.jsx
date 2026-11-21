import { useRef } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

const ease = [0.22, 1, 0.36, 1];
const page = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.22, ease } },
};

export default function SiteLayout() {
  const location = useLocation();
  const outlet = useOutlet();
  const main = useRef(null);
  // Animate between top-level sections only; nested tabs (e.g. /builds/web3) swap in place.
  const section = location.pathname.split('/')[1] || 'home';

  function handleExitComplete() {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    main.current?.focus({ preventScroll: true });
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content" className="main-content" tabIndex={-1} ref={main}>
        <AnimatePresence mode="wait" initial={false} onExitComplete={handleExitComplete}>
          <motion.div key={section} variants={page} initial="initial" animate="animate" exit="exit">
            {outlet}
          </motion.div>
        </AnimatePresence>
      </main>
      <SiteFooter />
    </>
  );
}
