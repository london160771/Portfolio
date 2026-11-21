import { motion } from 'motion/react';

const ease = [0.22, 1, 0.36, 1];
const groups = [
  ['Development', ['Full stack web apps with React, TypeScript and Node.js', 'APIs, databases and auth', 'Onchain tools on Solana, BNB Chain and EVM']],
  ['Motion', ['AI-driven motion graphics', 'Short-form video for launches and social', 'Contest entries and brand concepts']],
];

export default function About() {
  return (
    <section className="about container" id="about" aria-labelledby="about-title">
      <motion.div className="about-grid" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, ease }}>
        <h2 id="about-title" className="eyebrow">About</h2>
        <p className="about-text">
          I’m Sauban, known online as ayyoweb3, based in Lagos. I build web products end to end, from booking tools to
          Web3 payments and AI agent marketplaces. Separately, I make AI-driven motion graphics and short videos.
        </p>
        <div className="about-groups">
          {groups.map(([title, items]) => (
            <div key={title} className="about-group">
              <h3 className="about-group-title">{title}</h3>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
