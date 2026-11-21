import { motion } from 'motion/react';
import ProjectActions from './ProjectActions';

const ease = [0.22, 1, 0.36, 1];
const categoryLabel = (project) => project.category.map((c) => (c === 'web2' ? 'Web2' : 'Web3')).join(' / ');

function BuildFrame({ project }) {
  const media = project.media[0];
  if (media) {
    return (
      <div className="build-frame">
        <img src={media.src} srcSet={media.srcSet} sizes="(max-width: 48rem) calc(100vw - 40px), 45vw"
          width={media.width} height={media.height} alt={media.alt} loading="lazy" decoding="async" />
      </div>
    );
  }
  // No real screenshot yet: show a typographic panel rather than fabricated UI.
  return (
    <div className={`build-frame build-frame--type${project.award ? ' build-frame--award' : ''}`} aria-hidden="true">
      <span className="build-frame-word">{project.title}</span>
      <span className="build-frame-label">{categoryLabel(project)}</span>
    </div>
  );
}

export default function BuildCard({ project, index }) {
  return (
    <motion.li
      layout
      className="build-item"
      id={project.slug}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease, delay: (index % 2) * 0.08 }}
    >
      <article className="build-card" aria-labelledby={`build-${project.slug}`}>
        <BuildFrame project={project} />
        <div className="build-body">
          <div className="build-head">
            <span className="build-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <h2 id={`build-${project.slug}`} className="build-title">{project.title}</h2>
            <span className="metadata">{categoryLabel(project)}{project.year && ` · ${project.year}`}</span>
          </div>
          {project.award && <p className="award-badge"><span aria-hidden="true">★</span> {project.award}</p>}
          <p className="build-description">{project.shortDescription}</p>
          {project.role && <p className="metadata">{project.role}</p>}
          {!!project.stack.length && (
            <ul className="build-tags" aria-label="Stack">
              {project.stack.map((item) => <li key={item}>{item}</li>)}
            </ul>
          )}
          <ProjectActions project={project} />
        </div>
      </article>
    </motion.li>
  );
}
