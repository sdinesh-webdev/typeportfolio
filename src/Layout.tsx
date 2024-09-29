import React from 'react';
import { Intro } from './Intro';
import Experience from './Experience';
import Certificates from './Certificates';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';

const Layout: React.FC = () => {
  return (
    <div id="root" className="w-full">
      <header className="header-section w-full">
        <Intro />
      </header>
      <main className="main-section w-full">
        <Experience />
        <Certificates />
        <Projects />
      </main>
      <footer className="footer-section w-full">
        <Contact />
      </footer>
    </div>
  );
};

export default Layout;