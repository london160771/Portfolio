import ProjectActions from './ProjectActions';

export default function ProjectList({ projects, headingLevel = 3, showCategory = true }) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  if (!projects.length) return <p>No projects to show in this collection yet.</p>;
  return (
    <ul className="project-list">
      {projects.map((project) => (
        <li key={project.slug}>
          <article className="project-summary">
            <div className="project-summary-heading">
              <Heading className="project-title">{project.title}</Heading>
              {(showCategory || project.hackathon?.label) && <p className="metadata">
                {showCategory && <>{project.category.map((category) => category === 'web2' ? 'Web2' : 'Web3').join(' / ')}{project.year && ` · ${project.year}`}</>}
                {project.hackathon?.label && <span className="hackathon-label">{showCategory && ' · '}{project.hackathon.label}</span>}
              </p>}
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
