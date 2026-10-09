import { Route, Routes } from 'react-router-dom';
import SiteLayout from '../components/SiteLayout';
import HomePage from '../pages/HomePage';
import WorkPage from '../pages/WorkPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="web2" element={<WorkPage category="web2" />} />
        <Route path="web3" element={<WorkPage category="web3" />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
