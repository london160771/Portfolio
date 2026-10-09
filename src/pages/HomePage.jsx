import { Link } from 'react-router-dom';
import ProjectList from '../components/ProjectList';
import SelectedWork from '../components/SelectedWork';
import { getProjectsByCategory } from '../data/projects';
import { profile } from '../data/profile';
import usePageTitle from '../hooks/usePageTitle';

export default function HomePage() {
  usePageTitle('Selected Work', 'Full-stack developer building web products, interfaces and onchain tools.');
  return (
    <>
      <section className="homepage-hero" aria-labelledby="hero-title">
        <div className="hero-context"><p>{profile.name} / {profile.brand}</p><p>{profile.location}</p></div>
        <div className="hero-composition">
          <div className="hero-copy">
            <h1 id="hero-title">
              <span className="hero-line">Full-stack developer</span>{' '}
              <span className="hero-line">building web products,</span>{' '}
              <span className="hero-line">interfaces and <span className="hero-phrase">onchain tools.</span></span>
            </h1>
            <div className="hero-bottom">
              <Link className="hero-work-link" to="/#work">Selected work <span aria-hidden="true">↓</span></Link>
              <Link className="hero-contact-link" to="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </section>
      <SelectedWork />
      {[['web2', 'Web2'], ['web3', 'Web3']].map(([category, title]) => (
        <section className="section homepage-section" id={category} aria-labelledby={`${category}-title`} key={category}>
          <div className="section-heading"><h2 id={`${category}-title`} tabIndex={-1}>{title}</h2><Link to={`/${category}`}>View {title}</Link></div>
          <ProjectList projects={getProjectsByCategory(category)} showCategory={category !== 'web3'} />
        </section>
      ))}
      <section className="section homepage-section capabilities-preview" id="capabilities" aria-labelledby="capabilities-title">
        <div className="section-heading"><h2 id="capabilities-title" tabIndex={-1}>Capabilities</h2></div>
          <div className="capabilities-group">
            <ul role="list">{profile.capabilities.map((capability, index) => <li key={capability}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{capability}</li>)}</ul>
          </div>
      </section>
      <section className="section homepage-section contact-preview" id="contact" aria-labelledby="contact-title">
        <div className="section-heading"><h2 id="contact-title" tabIndex={-1}>Contact</h2><Link to="/contact">Get in touch <span aria-hidden="true">↗</span></Link></div>
        <div className="contact-preview-body"><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a><div className="cluster"><a href={profile.github}>GitHub <span aria-hidden="true">↗</span></a><a href={profile.twitter}>X / Twitter <span aria-hidden="true">↗</span></a></div></div>
      </section>
    </>
  );
}
