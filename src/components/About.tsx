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

      <div className="grid lg:grid-cols-2 gap-12 items-stretch">
        <ScrollReveal direction="left">
          {/* About Text */}
          <div className="space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              I am currently pursuing an <span className="text-foreground font-medium">MSc in Applied AI &amp; Data Science</span> at <span className="text-primary font-medium">Middlesex University London</span>, having completed my <span className="text-foreground font-medium">Bachelor of Technology (B.Tech)</span> in Computer Science and Engineering, specialising in <span className="text-primary font-medium">Artificial Intelligence and Machine Learning</span>, at <span className="text-primary font-medium">Malla Reddy Institute of Engineering and Technology, Hyderabad</span>, with a <span className="text-primary font-medium">CGPA of 8.90</span>.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I have a strong foundation in <span className="text-foreground font-medium">Python, Object-Oriented Programming (OOP), Data Science, SQL, Power BI, Excel, basic Data Structures and Algorithms (DSA), Deep Learning (DL), Natural Language Processing (NLP)</span>, and core AI/ML concepts. I am passionate about transforming complex data into meaningful insights and developing intelligent, data-driven solutions.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Through my internships at <span className="text-foreground font-medium">CodSoft</span> and <span className="text-foreground font-medium">InternPE</span>, I gained practical exposure to data science and machine learning projects, including <span className="text-foreground font-medium">predictive modelling</span> and <span className="text-foreground font-medium">data preprocessing</span>. These experiences strengthened my analytical thinking, problem-solving abilities, and understanding of real-world AI applications.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I believe in <span className="text-foreground font-medium">disciplined execution</span>, <span className="text-foreground font-medium">continuous learning</span>, <span className="text-foreground font-medium">collaboration</span>, and <span className="text-foreground font-medium">teamwork</span>. I am eager to apply my technical knowledge, enhance my practical skills, and contribute to innovative projects in <span className="text-primary font-medium">Artificial Intelligence, Machine Learning, and Data Science</span> while growing as a professional.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.2} className="h-full">
          {/* Highlights Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full">
            {highlights.map((item, index) => <div key={item.title} className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group flex flex-col" style={{
              animationDelay: `${index * 0.1}s`
            }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors flex-shrink-0">
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