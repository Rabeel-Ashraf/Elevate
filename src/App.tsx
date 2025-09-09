import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import WhatsAppAndBlog from './components/WhatsAppAndBlog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Courses />
        <WhatsAppAndBlog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
