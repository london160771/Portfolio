import BuildGrid from '../../components/BuildGrid';
import { getBuilds } from '../../data/projects';

export default function BuildsList({ category }) {
  return <BuildGrid projects={getBuilds(category)} />;
}
