import { ExternalLink, Github, Shield, Heart, Film, CreditCard, Car, Activity } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { Button } from '@/components/ui/button';
import hrvProjectImg from '@/assets/hrv-project.png';
import cyberProjectImg from '@/assets/cyber-project.png';

const projects = [
  {
    icon: Shield,
    title: 'Modeling and Predicting Cyber Hacking Breaches',
    description:
      'Comprehensive predictive analysis on cyber-attack datasets spanning 2005–2017. Utilized advanced statistical techniques for breach prediction and risk assessment.',
    tech: ['Python', 'Django', 'MySQL', 'HTML/CSS/JS', 'ARMA-GARCH', 'Copula Analysis'],
    highlights: ['Time-series analysis', 'Statistical modeling', 'Full-stack development'],
    github: 'https://github.com/vishnuvardhan-0862/Modeling-and-Predicting-Cyber-Hacking-Breaches',
    image: cyberProjectImg,
    featured: true,
  },
  {
    icon: Heart,
    title: 'Multi-Class Stress Detection through HRV',
    description:
      'Deep learning-based stress classification system using Heart Rate Variability data. Achieved exceptional accuracy through optimized 1D CNN architecture.',
    tech: ['Python', 'TensorFlow', '1D CNN', 'SWELL-KW Dataset'],
    highlights: ['99.9% accuracy', 'Deep learning', 'Healthcare AI'],
    github: 'https://github.com/vishnuvardhan-0862/Multi-Class-Stress-Detection-Through-HRV',
    image: hrvProjectImg,
    featured: true,
  },
  {
    icon: Film,
    title: 'Movie Rating Prediction',
    description:
      'Machine learning model to predict movie ratings using regression and ensemble methods. Analyzed various features affecting audience ratings.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Random Forest'],
    highlights: ['Regression modeling', 'Feature engineering'],
    github: 'https://github.com/vishnuvardhan-0862/CODESOFT/blob/main/Movie%20Rating%20Prediction.ipynb',
    featured: false,
  },
  {
    icon: CreditCard,
    title: 'Credit Card Approval Prediction',
    description:
      'Classification model to predict credit card approval outcomes based on applicant data. Implemented robust data preprocessing pipeline.',
    tech: ['Python', 'Scikit-learn', 'Classification'],
    highlights: ['Binary classification', 'Data preprocessing'],
    github: 'https://github.com/vishnuvardhan-0862/CODESOFT/blob/main/Creditcard%20prediction.ipynb',
    featured: false,
  },
  {
    icon: Car,
    title: 'Car Price Prediction',
    description:
      'Regression-based price estimation model deployed as an interactive web application. Users can input car features to get instant price predictions.',
    tech: ['Python', 'Streamlit', 'Regression', 'ML Deployment'],
    highlights: ['Interactive UI', 'Model deployment'],
    github: 'https://github.com/vishnuvardhan-0862/InternPE',
    featured: false,
  },
  {
    icon: Heart,
    title: 'Diabetes Prediction with ML',
    description:
      'Machine learning model to predict diabetes using patient health metrics. Implemented classification algorithms to identify individuals at risk of diabetes.',
    tech: ['Python', 'Scikit-learn', 'Classification', 'Healthcare ML'],
    highlights: ['Healthcare AI', 'Predictive modeling'],
    github: 'https://github.com/vishnuvardhan-0862/InternPE/blob/main/Make%20a%20Diabetes%20prediction%20with%20ML.ipynb',
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 lg:py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">Featured Work</p>
            <h2 className="section-heading">My <span className="gradient-text">Projects</span></h2>
            <p className="section-subheading mx-auto">
              A showcase of AI/ML projects demonstrating practical problem-solving skills.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <ScrollReveal key={project.title} delay={0.1}>
              <div
                className="glass-card p-8 hover:border-primary/50 transition-all duration-300 group overflow-hidden"
              >
                {project.image && (
                  <div className="mb-6" style={{ perspective: '1200px' }}>
                    <div
                      className="relative rounded-xl overflow-hidden transition-all duration-700 ease-out"
                      style={{
                        transform: 'rotateY(-3deg) rotateX(2deg)',
                        boxShadow: '0 25px 50px -12px hsl(var(--primary) / 0.25), 0 0 30px hsl(var(--primary) / 0.1)',
                        transformStyle: 'preserve-3d',
                      }}
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = (e.clientX - rect.left) / rect.width - 0.5;
                        const y = (e.clientY - rect.top) / rect.height - 0.5;
                        e.currentTarget.style.transform = `rotateY(${x * 15}deg) rotateX(${-y * 15}deg) scale(1.03)`;
                        e.currentTarget.style.boxShadow = `${-x * 30}px ${y * 30}px 60px -12px hsl(var(--primary) / 0.35), 0 0 40px hsl(var(--primary) / 0.15)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'rotateY(-3deg) rotateX(2deg)';
                        e.currentTarget.style.boxShadow = '0 25px 50px -12px hsl(var(--primary) / 0.25), 0 0 30px hsl(var(--primary) / 0.1)';
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-56 object-cover object-top"
                        style={{ imageRendering: 'auto', filter: 'contrast(1.05) saturate(1.1) sharpen(1)' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                      <div className="absolute inset-0 border border-primary/10 rounded-xl" />
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                        Featured Project
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((h) => (
                        <span key={h} className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:bg-muted">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
              </ScrollReveal>
            ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <ScrollReveal key={project.title} delay={0.05}>
              <div
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
              </ScrollReveal>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
