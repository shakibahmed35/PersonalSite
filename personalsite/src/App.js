// App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './static/css/main.scss'

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const About = lazy(() => import('./pages/About'));

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
