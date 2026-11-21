import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Collage from '../components/Collage';
import Dial from '../components/Dial';
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
    <section className="landing container" aria-labelledby="landing-title">
      <motion.div className="landing-copy" variants={intro} initial="initial" animate="animate">
        <motion.p className="eyebrow" variants={rise}>{profile.brand} — {profile.location}</motion.p>
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
      <Collage />
    </section>
  );
}
