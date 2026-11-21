import { AnimatePresence } from 'motion/react';
import BuildCard from './BuildCard';

export default function BuildGrid({ projects }) {
  if (!projects.length) return <p>No builds to show here yet.</p>;
  return (
    <ul className="build-grid">
      <AnimatePresence mode="popLayout" initial={false}>
        {projects.map((project, index) => <BuildCard key={project.slug} project={project} index={index} />)}
      </AnimatePresence>
    </ul>
  );
}
