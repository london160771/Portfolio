import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

// Decorative dashed dial: turns with scroll and slowly on its own (CSS), like a scroll cue.
export default function Dial({ label = 'motion · builds · ayyoweb3 · ' }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1200], [0, 240]);
  return (
    <div className="dial" aria-hidden="true">
      <motion.div className="dial-turn" style={reduce ? undefined : { rotate }}>
        <svg viewBox="0 0 160 160" className="dial-spin">
          <defs><path id="dial-path" d="M80,80 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0" /></defs>
          <circle cx="80" cy="80" r="74" className="dial-ring" />
          <text className="dial-text"><textPath href="#dial-path">{label.repeat(2)}</textPath></text>
        </svg>
      </motion.div>
      <span className="dial-center">↘</span>
    </div>
  );
}
