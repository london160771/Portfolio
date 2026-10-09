import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

export default function NotFoundPage() {
  usePageTitle('Not Found', 'This page could not be found. Return to Ayyoweb3’s selected work.');
  return <section className="section stack prose"><h1>Not Found</h1><p>The page you’re looking for could not be found.</p><Link to="/">Return to Selected Work</Link></section>;
}
