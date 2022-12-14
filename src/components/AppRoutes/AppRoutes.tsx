import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { FC } from 'react';
import Home from '@/components/Home/Home';
import Layout from '../Layout/Layout';
import ScrollToTop from '@/shared/ScrollToTop/ScrollToTop';
import { RemixesPage } from '../RemixesPage';

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="remixes" element={<RemixesPage />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};
export default AppRoutes;
