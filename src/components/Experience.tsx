import { Briefcase, Calendar, Building } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    title: 'AI & ML Intern',
    company: 'InternPE',
    duration: 'Jun 2025 – Jul 2025',
    logoUrl: '/ai_intern_logo.png',
    description:
      'Developed machine learning models for real-world prediction tasks including Car Price Prediction and IPL Winner Prediction. Built interactive applications using Streamlit for model deployment and user interaction.',
    highlights: [
      'Car Price Prediction using regression models',
      'IPL Winner Prediction with historical data analysis',
      'ML model development and optimization',
      'Interactive app development using Streamlit',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'Machine Learning'],
  },
  {
    title: 'Data Science Intern',
    company: 'CodSoft',
    duration: 'Feb 2025',
    description:
      'Worked on predictive analytics projects involving movie ratings, sales forecasting, and credit card approval predictions. Gained hands-on experience in data preprocessing, visualization, and model building.',
    highlights: [
      'Movie Rating Prediction using ML algorithms',
      'Sales Prediction with Linear Regression',
      'Credit Card Approval Prediction classifier',
      'Data preprocessing and visualization',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Random Forest', 'Linear Regression', 'Data Visualization'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 lg:py-20 relative bg-background/60 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">Professional Journey</p>
            <h2 className="section-heading">Work <span className="gradient-text">Experience</span></h2>
            <p className="section-subheading mx-auto">
              Hands-on internship experience in Data Science and Machine Learning.
            </p>
          </div>
        </ScrollReveal>

        {/* Vertical Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.title + exp.company} delay={index * 0.15}>
            <div
              className="relative pl-16 mb-8 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 top-8 w-5 h-5 -translate-x-1/2 bg-primary rounded-full ring-4 ring-background" />

              {/* Content */}
              <div className="glass-card p-8 hover:border-primary/50 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {exp.logoUrl ? (
                      <img src={exp.logoUrl} alt={`${exp.company} logo`} className="w-full h-full object-cover" />
                    ) : (
                      <Briefcase className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary mt-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4">{exp.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
