import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import GithubHighlights from '@/components/GithubHighlights';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import ParticleNetwork from '@/components/ParticleNetwork';
import LoadingScreen from '@/components/LoadingScreen';
import { AnimatePresence } from 'framer-motion';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for 2.5 seconds for cinematic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <ParticleNetwork />
      
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <GithubHighlights />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
        <ChatBot />
      </div>
    </div>
  );
};

export default Index;
