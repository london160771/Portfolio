export default function ProjectActions({ project }) {
  return (
    <div className="project-actions">
      {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
        aria-label={`Live: ${project.title} (opens in a new tab)`}>Live <span aria-hidden="true">↗</span></a>}
      {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer"
        aria-label={`GitHub: ${project.title} (opens in a new tab)`}>GitHub <span aria-hidden="true">↗</span></a>}
    </div>
  );
}
