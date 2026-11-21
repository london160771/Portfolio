import ProjectList from '../../components/ProjectList';
import { getBuilds } from '../../data/projects';

export default function BuildsList({ category }) {
  return <ProjectList projects={getBuilds(category)} />;
}
