import React from 'react';
import Navbar from './Navbar';
import ScrollProgress from './ScrollProgress';
import Hero from './Hero';
import Profile from './Profile';
import Experience from './Experience';
import Education from './Education';
import Keynotes from './Keynotes';
import Passions from './Passions';
import AIInnovation from './AIInnovation';
import Skills from './Skills';
import Footer from './Footer';
import ChatWidget from './ChatWidget';
import Testimonials from './Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-white overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <Profile />
        <Experience />
        <Skills />
        <Education />
        <Keynotes />
        <Passions />
        <AIInnovation />
        <Testimonials />
      </main>
      
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;