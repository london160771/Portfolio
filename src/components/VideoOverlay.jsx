import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { motionPieces, formatDuration } from '../data/motion';

const ease = [0.22, 1, 0.36, 1];

// Full piece with sound and controls, above the grid. Shareable URL; Escape, backdrop or Close returns to /motion.
export default function VideoOverlay() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const close = useRef(null);
  const piece = motionPieces.find((p) => p.slug === slug);

  useEffect(() => {
    if (!piece) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    close.current?.focus({ preventScroll: true });
    const onKey = (e) => { if (e.key === 'Escape') dismiss(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
      document.getElementById(`motion-${slug}`)?.focus({ preventScroll: true });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  function dismiss() {
    navigate('/motion', { preventScrollReset: true });
  }

  // Portal to <body>: the page-transition wrapper is transformed, which would trap position: fixed.
  if (!piece) {
    return createPortal(
      <div className="video-overlay" role="dialog" aria-modal="true" aria-label="Video not found">
        <div className="video-overlay-inner">
          <p>That video isn’t here.</p>
          <button ref={close} type="button" className="button video-close" onClick={dismiss}>Back to motion</button>
        </div>
      </div>,
      document.body,
    );
  }

  const [w, h] = piece.aspect.split(':');
  return createPortal(
    <motion.div
      className="video-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
    >
      <motion.div
        className="video-overlay-inner"
        style={{ width: `min(100%, 72rem, calc((100svh - 140px) * ${w} / ${h}))` }}
        initial={{ opacity: 0, y: 32, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="video-overlay-bar">
          <h2 id="video-title" className="video-title">{piece.title}</h2>
          <span className="metadata">{piece.aspect} · {formatDuration(piece.duration)}{piece.year && ` · ${piece.year}`}</span>
          <button ref={close} type="button" className="video-close" onClick={dismiss}>Close <span aria-hidden="true">✕</span></button>
        </div>
        <video
          key={piece.slug}
          className="video-player"
          style={{ aspectRatio: `${w} / ${h}` }}
          src={piece.src}
          poster={piece.poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
        />
      </motion.div>
    </motion.div>,
    document.body,
  );
}
