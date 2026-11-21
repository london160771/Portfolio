import ProjectActions from './ProjectActions';

// Interim list for the Builds page; Phase 3 replaces it with animated cards.
export default function ProjectList({ projects }) {
  if (!projects.length) return <p>No builds to show here yet.</p>;
  return (
    <ul className="project-list">
      {projects.map((project) => (
        <li key={project.slug} id={project.slug}>
          <article className="project-summary">
            <div className="project-summary-heading">
              <h2 className="project-title">{project.title}</h2>
              <p className="metadata">{project.category.map((c) => (c === 'web2' ? 'Web2' : 'Web3')).join(' / ')}{project.year && ` · ${project.year}`}</p>
              {project.award && <p className="award-badge">★ {project.award}</p>}
            </div>
            <div className="project-summary-body">
              {project.shortDescription && <p>{project.shortDescription}</p>}
              {project.role && <p className="metadata">{project.role}</p>}
              {!!project.stack.length && <p className="metadata">{project.stack.join(' · ')}</p>}
            </div>
            <ProjectActions project={project} />
          </article>
        </li>
      ))}
    </ul>
  );
}
