import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

export default function NotFoundPage() {
  usePageTitle('Page not found', 'This page could not be found.');
  return (
    <section className="page container">
      <p className="eyebrow">404</p>
      <h1 className="page-title">This page wandered off.</h1>
      <p className="page-lede">The link may be old or mistyped. Try one of these instead.</p>
      <div className="not-found-links">
        <Link className="button button--primary" to="/">Home <span aria-hidden="true">→</span></Link>
        <Link className="button" to="/motion">Motion</Link>
        <Link className="button" to="/builds">Builds</Link>
      </div>
    </section>
  );
}
