import { Link } from 'react-router-dom';
import BigTitle from '../components/BigTitle';
import usePageTitle from '../hooks/usePageTitle';

export default function MotionPage() {
  usePageTitle('Motion', 'AI motion graphics and video work by ayyoweb3.');
  return (
    <section className="page container">
      <BigTitle>Motion</BigTitle>
      <p className="page-lede">AI-driven motion graphics and video.</p>
      <div className="empty-state">
        <p>The first pieces are being prepared for the web.</p>
        <Link className="button" to="/builds">See my builds meanwhile <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
