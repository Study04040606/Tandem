//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '@/pages/HomePage/HomePage.tsx';
import ProgramsPage from '@/pages/ProgramsPage/ProgramsPage.tsx';
import ParticipatePage from '@/pages/ParticipatePage/ParticipatePage.tsx';
import ErrorPage from '@/pages/ErrorPage/ErrorPage.tsx';

import './App.css'

function App() {

  return (
    	<BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/participate" element={<ParticipatePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
