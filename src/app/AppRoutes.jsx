import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from '../components/SiteLayout';
import LandingPage from '../pages/LandingPage';
import MotionPage from '../pages/MotionPage';
import VideoOverlay from '../components/VideoOverlay';
import BuildsPage from '../pages/BuildsPage';
import BuildsList from '../pages/builds/BuildsList';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="motion" element={<MotionPage />}>
          <Route path=":slug" element={<VideoOverlay />} />
        </Route>
        <Route path="builds" element={<BuildsPage />}>
          <Route index element={<BuildsList />} />
          <Route path="web2" element={<BuildsList category="web2" />} />
          <Route path="web3" element={<BuildsList category="web3" />} />
        </Route>
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="web2" element={<Navigate to="/builds/web2" replace />} />
        <Route path="web3" element={<Navigate to="/builds/web3" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
