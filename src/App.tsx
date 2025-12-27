//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { HashRouter, Routes, Route } from 'react-router-dom'; //поменять HashRouter на BrowserRouter при деплое на свой домен?

import HomePage from '@/pages/HomePage/HomePage.tsx';
import ProgramsPage from '@/pages/ProgramsPage/ProgramsPage.tsx';
import ParticipatePage from '@/pages/ParticipatePage/ParticipatePage.tsx';
import ErrorPage from '@/pages/ErrorPage/ErrorPage.tsx';

import './App.css'

function App() {

  return (
    	<HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/participate" element={<ParticipatePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </HashRouter>
  )
}

export default App
