import { ArrowDown, FileText, Mail, Briefcase, Github, Linkedin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import profilePhoto from '@/assets/profile-photo.png';

const FloatingShape = ({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.4, 0.7, 0.4],
      scale: [1, 1.08, 1],
      rotate: [0, 180, 360],
    }}
    transition={{ duration: 9, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

const TypeWriter = ({
  texts,
  className,
}: {
  texts: string[];
  className?: string;
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < text.length) {
          setCurrentText(text.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(text.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};

const Hero = () => {
  const roles = ['AI & Machine Learning Engineer', 'Data Science Enthusiast', 'Python Developer', 'Problem Solver'];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-start md:justify-center items-center overflow-hidden pt-28 pb-16 md:py-0">
      {/* Dot-grid background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Soft hero gradient from top */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />

      {/* Ambient blue orbs */}
      <motion.div
        className="absolute top-1/4 left-1/5 w-[480px] h-[480px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/5 w-[360px] h-[360px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.10, 0.18, 0.10] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Floating geometric shapes */}
      <FloatingShape className="absolute top-24 right-24 w-16 h-16 border-2 border-primary/20 rounded-xl" delay={0} />
      <FloatingShape className="absolute bottom-36 left-20 w-12 h-12 border-2 border-primary/15 rounded-full" delay={2} />
      <FloatingShape className="absolute top-1/3 right-1/4 w-10 h-10 bg-primary/8 rounded-lg" delay={4} />
      <FloatingShape className="absolute bottom-1/4 right-20 w-7 h-7 bg-accent/15 rounded-full" delay={1} />
      <FloatingShape className="absolute top-1/2 left-12 w-5 h-5 border border-primary/30 rotate-45" delay={3} />

      <div className="container mx-auto px-6 py-0 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* ── Profile Image ── */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Outer glow pulse */}
            <div className="absolute -inset-5 bg-gradient-to-r from-primary/25 via-accent/15 to-primary/25 rounded-full blur-lg opacity-60 animate-pulse-slow" />

            {/* Photo */}
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src={profilePhoto}
                alt="Vishnuvardhan Komakula"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Animated rings */}
            <motion.div
              className="absolute -inset-4 border-2 border-primary/25 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute -inset-8 border border-primary/15 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute -inset-12 border border-primary/8 rounded-full border-dashed"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />

            {/* Available badge */}
            <motion.div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-background/90 backdrop-blur-md border border-border rounded-full shadow-lg whitespace-nowrap min-w-[180px] justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
              </span>
              <span className="text-xs font-semibold text-foreground">
                <TypeWriter texts={['AI & ML Engineer', 'Data Scientist']} className="text-xs font-semibold text-foreground" />
              </span>
            </motion.div>
          </motion.div>

          {/* ── Content ── */}
          <div className="text-center lg:text-left max-w-2xl">
            {/* Introduction Badges */}
            <div className="space-y-4 mb-6">
              {/* Availability badge */}
              <motion.div
                className="flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full w-fit mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full  bg-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
                </span>
                <span className="text-foreground/90 font-medium text-xs">Open to Internships & Full-time Roles</span>
              </motion.div>

              {/* Hello badge */}
              <motion.div
                className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full w-fit mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Hello, I'm</span>
              </motion.div>
            </div>

            {/* Name */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              VISHNUVARDHAN{' '}
              <span className="gradient-text">KOMAKULA</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              className="text-xl md:text-2xl text-muted-foreground mb-2 h-8 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <TypeWriter texts={roles} />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-sm font-semibold text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              MSc Applied AI & Data Science • Pursuing • Graduated: 2028
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-muted-foreground mb-8 leading-relaxed text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Passionate about solving real-world problems using intelligent systems. Strong foundation in Python,
              Data Science, AI, SQL, PowerBI & Excel, DL, NLP and Machine Learning with hands-on project experience in building predictive
              models and AI applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="glow-button text-white font-semibold px-6 rounded-xl group border-0"
              >
                <a href="#projects">
                  <Briefcase className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Projects
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary/40 text-primary hover:bg-primary/8 hover:border-primary font-semibold px-6 rounded-xl group"
              >
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Contact Me
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="hover:bg-secondary text-foreground font-medium px-6 rounded-xl group"
              >
                <a href="/VISHNU_Resume.pdf" download="VISHNU_RESUME.pdf">
                  <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <span className="text-sm text-muted-foreground font-medium">Find me on</span>
              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/vishnuvardhan-komakula"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-secondary border border-border hover:bg-primary/10 hover:text-primary hover:border-primary/40 transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://github.com/vishnuvardhan-0862"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-secondary border border-border hover:bg-primary/10 hover:text-primary hover:border-primary/40 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs font-medium tracking-wide">Scroll to explore my profile</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={18} className="group-hover:scale-110 transition-transform" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;