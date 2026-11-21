import { Outlet } from 'react-router-dom';
import BigTitle from '../components/BigTitle';
import MotionCard from '../components/MotionCard';
import ContactCta from '../components/ContactCta';
import { motionPieces } from '../data/motion';
import usePageTitle from '../hooks/usePageTitle';

export default function MotionPage() {
  usePageTitle('Motion', 'AI motion graphics and video work by ayyoweb3.');
  return (
    <section className="page container">
      <BigTitle>Motion</BigTitle>
      <p className="page-lede">AI-driven motion graphics and video: contest entries, practice and personal pieces. Brand pieces are unofficial concepts. Previews play muted; open one for sound.</p>
      <ul className="motion-grid">
        {motionPieces.map((piece, index) => <MotionCard key={piece.slug} piece={piece} index={index} />)}
      </ul>
      <ContactCta />
      <Outlet />
    </section>
  );
}
