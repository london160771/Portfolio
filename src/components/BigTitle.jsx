import { motion } from 'motion/react';

const ease = [0.22, 1, 0.36, 1];

// Giant serif page title; letters rise in one by one. Screen readers get the plain word.
export default function BigTitle({ children }) {
  const letters = [...children];
  return (
    <h1 className="big-title">
      <span className="sr-only">{children}</span>
      <span className="big-title-letters" aria-hidden="true">
        {letters.map((letter, index) => (
          <span className="big-title-mask" key={`${letter}-${index}`}>
            <motion.span
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.08 + index * 0.045 }}
            >{letter}</motion.span>
          </span>
        ))}
      </span>
    </h1>
  );
}
