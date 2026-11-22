import { BrowserRouter } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import AppRoutes from './app/AppRoutes';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter><AppRoutes /></BrowserRouter>
      <Analytics />
    </MotionConfig>
  );
}
