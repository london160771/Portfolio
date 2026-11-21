import { motion } from 'motion/react';
import BigTitle from '../components/BigTitle';
import usePageTitle from '../hooks/usePageTitle';

const ease = [0.22, 1, 0.36, 1];
const groups = [
  ['Development', ['Full stack web apps with React, TypeScript and Node.js', 'APIs, databases and auth', 'Onchain tools on Solana, BNB Chain and EVM']],
  ['Motion', ['AI-driven motion graphics', 'Short-form video for launches and social', 'Contest entries and brand concepts']],
];

export default function AboutPage() {
  usePageTitle('About', 'About ayyoweb3: a full stack web developer and AI motion designer based in Lagos, Nigeria.');
  return (
    <section className="page container">
      <BigTitle>About</BigTitle>
      <motion.div className="about-body" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.35 }}>
        <p className="about-text">
          I’m Sauban, known online as ayyoweb3, based in Lagos. I build web products end to end, from booking tools to
          Web3 payments and AI agent marketplaces. Separately, I make AI-driven motion graphics and short videos.
        </p>
        <div className="about-groups">
          {groups.map(([title, items]) => (
            <div key={title} className="about-group">
              <h2 className="about-group-title">{title}</h2>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
