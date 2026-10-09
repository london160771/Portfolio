import { selectedWork } from '../data/projects';
import ProjectMedia from './ProjectMedia';
import ProjectActions from './ProjectActions';

const compositions = ['split', 'reverse', 'compact', 'compact', 'split', 'reverse'];

export default function SelectedWork() {
  return (
    <section className="selected-work" id="work" aria-labelledby="work-title">
      <div className="selected-work-heading">
        <h2 id="work-title" tabIndex={-1}>Selected Work</h2>
        <span className="selected-work-count" aria-hidden="true">01 — 06</span>
      </div>
      <ol className="selected-work-list">
        {selectedWork.map((project, index) => (
          <li key={project.slug} className={`work-composition work-composition--${compositions[index]}`}>
            <article className="selected-project" aria-labelledby={`selected-${project.slug}`}>
              <div className={`selected-project-media${project.media.length ? ' selected-project-media--image' : ' selected-project-media--placeholder'}${project.media[0]?.mobile?.height / project.media[0]?.mobile?.width > 1.95 ? ' selected-project-media--tall' : ''}`}>
                {project.media.length ? <ProjectMedia media={project.media[0]} wide={compositions[index] !== 'compact'} /> : <>
                  <span className="media-placeholder-label">Temporary media placeholder</span>
                </>}
              </div>
              <div className="selected-project-caption">
                <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div className="selected-project-heading">
                  <h3 id={`selected-${project.slug}`}>{project.title}</h3>
                  <p className="selected-project-category">
                    <span>{project.category.map((category) => category === 'web2' ? 'Web2' : 'Web3').join(' / ')}{project.year && ` / ${project.year}`}</span>
                    {project.hackathon?.label && <span className="hackathon-label">{project.hackathon.label}</span>}
                  </p>
                </div>
                <p className="selected-project-description">{project.shortDescription}</p>
                <div className="selected-project-details">
                  <div className="selected-project-facts">
                    {project.role && <p>{project.role}</p>}
                    {!!project.stack.length && <p>{project.stack.join(' · ')}</p>}
                  </div>
                  <ProjectActions project={project} />
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
