import { NavLink, Outlet } from 'react-router-dom';
import BigTitle from '../components/BigTitle';
import usePageTitle from '../hooks/usePageTitle';

const tabs = [['/builds', 'All'], ['/builds/web2', 'Web2'], ['/builds/web3', 'Web3']];

export default function BuildsPage() {
  usePageTitle('Builds', 'Web2 and Web3 products built by ayyoweb3, with live links and source.');
  return (
    <section className="page container">
      <BigTitle>Builds</BigTitle>
      <p className="page-lede">Web apps and onchain tools, shipped end to end.</p>
      <nav className="tabs" aria-label="Filter builds">
        {tabs.map(([to, label]) => <NavLink key={to} to={to} end>{label}</NavLink>)}
      </nav>
      <Outlet />
    </section>
  );
}
