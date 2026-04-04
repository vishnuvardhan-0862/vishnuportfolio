import { Brain, Target, Users, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const highlights = [{
  icon: Brain,
  title: 'AI & ML Specialist',
  description: 'Deep expertise in machine learning algorithms, neural networks, and intelligent system design.'
}, {
  icon: Target,
  title: 'Problem Solver',
  description: 'Passionate about tackling complex challenges and delivering data-driven solutions.'
}, {
  icon: Users,
  title: 'Team Player',
  description: 'Strong collaboration skills with experience in cross-functional project teams.'
}, {
  icon: Zap,
  title: 'Quick Learner',
  description: 'Rapidly adapts to new technologies and continuously expands skill set.'
}];

const About = () => {
  return <section id="about" className="py-12 lg:py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">Get to Know</p>
            <h2 className="section-heading">About <span className="gradient-text">Me</span></h2>
            <p className="section-subheading mx-auto text-muted-foreground">
              A dedicated AI & ML enthusiast with a passion for innovation and continuous learning.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
          {/* About Text */}
          <div className="space-y-5">
            <p className="text-muted-foreground leading-relaxed">I am a final-year <span className="text-foreground font-medium">B.Tech Computer Science</span> student specializing in <span className="text-primary font-medium">Artificial Intelligence and Machine Learning</span> at Malla Reddy Institute of Engineering and Technology, Hyderabad.</p>
            
            <p className="text-muted-foreground leading-relaxed">With a <span className="text-primary font-medium">CGPA of 8.83</span>, I have built a strong foundation in <span className="text-foreground font-medium">Python, Object-Oriented Programming, Data Science, SQL, Basic DSA</span> and core AI/ML concepts — enabling me to transform complex data into actionable insights.</p>
            
            <p className="text-muted-foreground leading-relaxed">
              My internship experiences at <span className="text-foreground font-medium">CodSoft</span> and <span className="text-foreground font-medium">InternPE</span> have given me practical exposure to real-world data science and machine learning projects including <span className="text-foreground font-medium">predictive modeling</span> and <span className="text-foreground font-medium">data preprocessing</span>.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">I believe in <span className="text-foreground font-medium">disciplined execution</span>, <span className="text-foreground font-medium">continuous learning</span>, and the power of <span className="text-foreground font-medium">teamwork</span>. I'm actively seeking opportunities to contribute to innovative AI solutions and grow as a professional.</p>
          </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => <div key={item.title} className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>)}
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>;
};

export default About;