import React from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Keynotes from './components/Keynotes';
import Passions from './components/Passions';
import AIInnovation from './components/AIInnovation';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

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
      </main>
      
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;