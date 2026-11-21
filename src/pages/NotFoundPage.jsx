import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

export default function NotFoundPage() {
  usePageTitle('Not Found', 'This page could not be found.');
  return (
    <section className="page container">
      <h1 className="page-title">Not found</h1>
      <p className="page-lede">The page you’re looking for doesn’t exist.</p>
      <Link className="button" to="/">Back home <span aria-hidden="true">→</span></Link>
    </section>
  );
}
