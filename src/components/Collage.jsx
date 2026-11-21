import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import { profile } from '../data/profile';
import { builds } from '../data/projects';

const ease = [0.22, 1, 0.36, 1];
const shot = (slug) => builds.find((project) => project.slug === slug)?.media[0];

// Positions are % of the collage box. `depth` scales parallax; `mobile` keeps the card on small screens.
// Motion stills and loops join this set in the Motion phase.
const cards = [
  { id: 'opna', media: shot('opna'), x: 2, y: 6, w: 44, r: -6, depth: 0.6, mobile: true },
  { id: 'velora-cove', media: shot('velora-cove'), x: 52, y: 0, w: 42, r: 5, depth: 1, mobile: true },
  { id: 'pfp', pfp: true, x: 33, y: 30, w: 30, r: -3, depth: 1.4, mobile: true },
  { id: 'stocksplit', media: shot('stocksplit'), x: 0, y: 52, w: 38, r: 4, depth: 0.8, mobile: true },
  { id: 'the-bv-brand', media: shot('the-bv-brand'), x: 60, y: 42, w: 36, r: -5, depth: 0.5, mobile: false },
  { id: 'agenthub', media: shot('agenthub'), x: 44, y: 70, w: 40, r: 3, depth: 1.1, mobile: true },
  { id: 'portpay', media: shot('portpay'), x: 6, y: 80, w: 30, r: -4, depth: 0.7, mobile: false },
];

function CollageCard({ card, index, pointerX, pointerY, scrollY, reduce }) {
  const x = useTransform(pointerX, (value) => (reduce ? 0 : value * card.depth * 36));
  const yPointer = useTransform(pointerY, (value) => value * card.depth * 28);
  const y = useTransform([yPointer, scrollY], ([p, s]) => (reduce ? 0 : p - s * card.depth * 0.12));

  return (
    <motion.div
      className={`collage-card${card.pfp ? ' collage-card--pfp' : ''}${card.mobile ? '' : ' collage-card--desktop'}`}
      style={{ left: `${card.x}%`, top: `${card.y}%`, width: `${card.w}%`, zIndex: card.pfp ? 5 : index + 1 }}
      initial={{ opacity: 0, y: 90, scale: 0.85, rotate: 0 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate: card.r }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
      transition={{ duration: 0.9, ease, delay: 0.35 + index * 0.08 }}
    >
      <motion.div className="collage-card-inner" style={{ x, y }}>
        {card.pfp
          ? <img src="/assets/profile/pfp-400.webp" width="400" height="400" alt={`${profile.brand}’s X avatar: an illustrated grey wolf in a maroon suit.`} />
          : <img src={card.media.srcSet.split(', ')[1].split(' ')[0]} width={card.media.width} height={card.media.height} alt="" loading="eager" decoding="async" />}
      </motion.div>
    </motion.div>
  );
}

export default function Collage() {
  const reduce = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const pointerX = useSpring(rawX, { stiffness: 60, damping: 18 });
  const pointerY = useSpring(rawY, { stiffness: 60, damping: 18 });
  const { scrollY } = useScroll();

  function handlePointerMove(event) {
    if (reduce || event.pointerType !== 'mouse') return;
    rawX.set(event.clientX / window.innerWidth - 0.5);
    rawY.set(event.clientY / window.innerHeight - 0.5);
  }

  return (
    <div className="collage" onPointerMove={handlePointerMove}>
      {cards.map((card, index) => (
        <CollageCard key={card.id} card={card} index={index}
          pointerX={pointerX} pointerY={pointerY} scrollY={scrollY} reduce={reduce} />
      ))}
    </div>
  );
}
