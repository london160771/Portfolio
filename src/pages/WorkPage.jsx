import ProjectList from '../components/ProjectList';
import { getProjectsByCategory } from '../data/projects';
import usePageTitle from '../hooks/usePageTitle';

const titles = { web2: 'Web2', web3: 'Web3' };

export default function WorkPage({ category }) {
  const title = titles[category];
  usePageTitle(title, `${title} projects by Ayyoweb3.`);
  return <section className="section stack"><h1>{title}</h1><ProjectList projects={getProjectsByCategory(category)} headingLevel={2} showCategory={category !== 'web3'} /></section>;
}
