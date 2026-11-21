import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Dial from '../components/Dial';
import About from '../components/About';
import { profile } from '../data/profile';
import usePageTitle from '../hooks/usePageTitle';

const ease = [0.22, 1, 0.36, 1];
const intro = { animate: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } };
const rise = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export default function LandingPage() {
  usePageTitle(null, 'ayyoweb3 is a full stack web developer and an AI motion designer based in Lagos, Nigeria.');
  return (
    <>
    <section className="landing container" aria-labelledby="landing-title">
      <motion.div className="landing-copy" variants={intro} initial="initial" animate="animate">
        <motion.div className="landing-id" variants={rise}>
          <img className="landing-avatar" src="/assets/profile/pfp-400.webp" width="400" height="400"
            alt="ayyoweb3's X avatar: an illustrated grey wolf in a maroon suit." fetchPriority="high" />
          <p className="eyebrow">{profile.brand} — {profile.location}</p>
        </motion.div>
        <motion.h1 id="landing-title" className="landing-title" variants={rise}>
          <span className="landing-line">Full stack web developer.</span>{' '}
          <em className="landing-line">AI motion designer.</em>
        </motion.h1>
        <motion.p className="landing-intro" variants={rise}>
          I build web apps end to end, from first commit to launch. I also create AI-driven motion graphics and videos made to stop the scroll.
        </motion.p>
        <motion.p className="proof" variants={rise}>
          <span className="proof-mark" aria-hidden="true">★</span>
          1× hackathon winner — <Link to="/builds/web3">Q2FA, Arc Microgrant</Link>
        </motion.p>
        <motion.div className="landing-actions" variants={rise}>
          <Link className="button button--primary" to="/motion">Watch my motion work <span aria-hidden="true">→</span></Link>
          <Link className="button" to="/builds">See my builds <span aria-hidden="true">→</span></Link>
          <Dial />
        </motion.div>
      </motion.div>
    </section>
    <About />
    </>
  );
}
