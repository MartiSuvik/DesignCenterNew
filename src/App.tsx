import React from 'react';
import { Play, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import VideoHero from './components/VideoHero';
import Projects from './components/Projects';
import Examples from './components/Examples';
import News from './components/News';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <VideoHero />
        <Projects />
        <Examples />
        <News />
        <ContactForm />
        <footer className="py-6 text-center text-sm text-gray-500 border-t">
          <p>© 2024 D&D Design Center. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;