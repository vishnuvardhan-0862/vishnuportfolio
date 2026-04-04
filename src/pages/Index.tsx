import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20">
      <ParticleNetwork />
      
      <Navigation />
      <main className="relative z-10">
        <Hero />
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
