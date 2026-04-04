import { Code, Database, Wrench, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming Languages',
    skills: ['🐍 Python', '🗄️ SQL'],
  },
  {
    icon: Database,
    title: 'Core Concepts',
    skills: ['🧱 Object-Oriented Programming', '📊 Data Science', '🤖 Artificial Intelligence', '📈 Machine Learning', '🧬 Deep Learning', '🗣️ NLP', '🪜 Basic DSA'],
  },
  {
    icon: Wrench,
    title: 'Tools & Technologies',
    skills: ['🧪 Jupyter Notebook', '🐍 Anaconda', '💻 VS Code', '🐍 Python IDLE', '🛢️ MySQL', '📊 PowerBI', '📈 Excel', '🚀 Streamlit', '🔧 Git', '🐼 Pandas', '🔢 NumPy', '🤖 Scikit-learn', '📈 Matplotlib'],
  },
  {
    icon: MessageSquare,
    title: 'Soft Skills',
    skills: ['⚡ Quick Learner', '🤝 Teamwork', '🧩 Problem Solving', '🧠 Critical Thinking', '💬 Communication', '🔄 Adaptability', '⏰ Time Management', '🎤 Teaching & Presentation'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 lg:py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">Technical Expertise</p>
            <h2 className="section-heading">My <span className="gradient-text">Skills</span></h2>
            <p className="section-subheading mx-auto">
              A comprehensive toolkit for building intelligent systems and data-driven solutions.
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 0.1} className="h-full">
              <div
                className="glass-card p-8 hover:border-primary/50 transition-all duration-300 h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Visual - Skill Progress */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-center mb-6">Proficiency Overview</h3>
            <div className="grid gap-6">
              {[
                { name: 'Python', level: 90 },
                { name: 'PowerBI & Excel', level: 90 },
                { name: 'Artificial Intelligence', level: 85 },
                { name: 'Machine Learning', level: 85 },
                { name: 'Data Science', level: 85 },
                { name: 'SQL', level: 80 },
                { name: 'Deep Learning', level: 75 },
                { name: 'NLP', level: 70 },
              ].map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;
