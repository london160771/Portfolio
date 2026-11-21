import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { formatDuration, typeLabel } from '../data/motion';

const ease = [0.22, 1, 0.36, 1];
const canHover = () => window.matchMedia('(hover: hover)').matches;
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Poster first; the muted video only loads when hovered (desktop) or scrolled into view (touch).
export default function MotionCard({ piece, index }) {
  const video = useRef(null);
  const link = useRef(null);

  const play = () => {
    const el = video.current;
    if (!el || reducedMotion()) return;
    el.play().catch(() => {});
  };
  const stop = () => {
    const el = video.current;
    if (!el) return;
    el.pause();
    el.classList.remove('is-playing');
    el.currentTime = 0;
  };

  useEffect(() => {
    if (canHover() || reducedMotion() || !link.current) return undefined;
    const observer = new IntersectionObserver(([entry]) => (entry.intersectionRatio >= 0.6 ? play() : stop()), { threshold: [0, 0.6] });
    observer.observe(link.current);
    return () => observer.disconnect();
  }, []);

  const [w, h] = piece.aspect.split(':');
  return (
    <motion.li
      className="motion-item"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease, delay: (index % 3) * 0.06 }}
    >
      <Link
        ref={link}
        id={`motion-${piece.slug}`}
        className="motion-card"
        to={`/motion/${piece.slug}`}
        preventScrollReset
        onMouseEnter={() => canHover() && play()}
        onMouseLeave={() => canHover() && stop()}
        onFocus={() => canHover() && play()}
        onBlur={() => canHover() && stop()}
      >
        <div className="motion-frame" style={{ aspectRatio: `${w} / ${h}` }}>
          <img src={piece.poster} alt="" loading={index < 3 ? 'eager' : 'lazy'} decoding="async" />
          <video ref={video} src={piece.src} onPlaying={(e) => e.currentTarget.classList.add('is-playing')} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} />
          <span className="motion-duration">{formatDuration(piece.duration)}</span>
        </div>
        <div className="motion-meta">
          <h2 className="motion-title">{piece.title}</h2>
          <span className="metadata">{piece.type ? typeLabel[piece.type] : piece.aspect}</span>
        </div>
      </Link>
    </motion.li>
  );
}
