import { HashRouter, Routes, Route } from 'react-router-dom'; //поменять HashRouter на BrowserRouter при деплое на свой домен?

import HomePage from '@/pages/HomePage/HomePage.tsx';
import ProgramsPage from '@/pages/ProgramsPage/ProgramsPage.tsx';
import ParticipatePage from '@/pages/ParticipatePage/ParticipatePage.tsx';
import LegalNoticePage from './pages/LegalNoticePage/LegalNoticePage.tsx';
import DataProtectionPage from './pages/DataProtectionPage/DataProtectionPage.tsx';
import CookiePolicyPage from './pages/CookiePolicyPage/CookiePolicyPage.tsx';
import ErrorPage from '@/pages/ErrorPage/ErrorPage.tsx';

import './App.css'

function App() {

  return (
    	<HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/participate" element={<ParticipatePage />} />
          <Route path="/legal-notice" element={<LegalNoticePage />} />
          <Route path="/data-protection" element={<DataProtectionPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </HashRouter>
  )
}

export default App
