import { Award, BookOpen, Cpu, Globe, Shield, Users, Bot, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const certifications = [
  {
    icon: BookOpen,
    title: 'Data Science Training',
    issuer: 'SETWIN',
    type: 'Training',
    link: 'https://drive.google.com/file/d/1YRIwU2VoAGOUAGMObBrC34urX8UYZfrY/view?usp=drive_link',
  },
  {
    icon: Shield,
    title: 'Introduction to Cybersecurity',
    issuer: 'Simplilearn',
    type: 'Course',
    link: 'https://drive.google.com/file/d/1mHuykqI0woYKWQjgA7IpTU9Uq8iwCGZ8/view?usp=drive_link',
  },
  {
    icon: Cpu,
    title: 'AI for Beginners',
    issuer: 'HP LIFE',
    type: 'Course',
    link: 'https://drive.google.com/file/d/12P_P2zltRjzRnSxb21ccxfWYHKKQ94h-/view?usp=drive_link',
  },
  {
    icon: Globe,
    title: 'Cambridge English Empower B2 Level',
    issuer: 'Cambridge',
    type: 'Certification',
    link: 'https://drive.google.com/file/d/1gTIFT7tzc7GDuTeomAyidaCuCd3n_oNk/view?usp=drive_link',
  },
  {
    icon: Users,
    title: 'AWS Hackathon Participant',
    issuer: 'AWS',
    type: 'Event',
    link: 'https://drive.google.com/file/d/1n3ZaYe3s15jckO0Wuf4cKEofQYDgjV07/view?usp=drive_link',
  },
  {
    icon: Bot,
    title: 'Generative AI & AI Agents Workshop',
    issuer: '10000 Coders',
    type: 'Workshop',
    link: 'https://drive.google.com/file/d/1oehKX_s3BzCdeENzkWb-4ovggfLN08dg/view?usp=drive_link',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-12 lg:py-20 relative bg-background/60 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">Continuous Learning</p>
            <h2 className="section-heading">Certifications & <span className="gradient-text">Workshops</span></h2>
            <p className="section-subheading mx-auto">
              Credentials and learning experiences that demonstrate commitment to growth.
            </p>
          </div>
        </ScrollReveal>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.title} delay={index * 0.08}>
            <div
              className="glass-card p-8 min-h-[220px] flex flex-col justify-center hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <cert.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {cert.type}
                </span>
                <h3 className="font-semibold mt-2 mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </a>
               </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 border border-primary/20">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              Always learning, always growing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
