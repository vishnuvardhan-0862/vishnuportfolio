import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
const Education = () => {
  return <section id="education" className="py-12 lg:py-20 relative bg-background/60 backdrop-blur-sm">
    <div className="container mx-auto px-6">
      {/* Section Header */}
      <ScrollReveal>
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Academic Background</p>
          <h2 className="section-heading">My <span className="gradient-text">Education</span></h2>
          <p className="section-subheading mx-auto">
            Building a strong foundation in computer science with specialization in AI & ML.
          </p>
        </div>
      </ScrollReveal>

      {/* Education Card */}
      <ScrollReveal delay={0.15}>
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-5 md:p-10 relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

            <div className="flex flex-col md:flex-row gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    B.Tech – Computer Science Engineering
                  </h3>
                  <p className="text-xl gradient-text font-semibold">
                    Specialization: Artificial Intelligence & Machine Learning
                  </p>
                </div>

                <p className="text-lg text-muted-foreground">
                  Malla Reddy Institute of Engineering and Technology, Hyderabad
                </p>

                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>2022 – 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Hyderabad, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-foreground">CGPA: 8.83</span>
                  </div>
                </div>

                {/* Coursework */}
                <div className="pt-4 border-t border-border/50">
                  <h4 className="font-medium mb-3">Key Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Machine Learning', 'Deep Learning', 'Data Structures & Algorithms', 'AI', 'Database Systems', 'Computer Networks', 'Python Programming', 'Statistics'].map(course => <span key={course} className="skill-tag text-xs">
                      {course}
                    </span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Intermediate Card */}
      <ScrollReveal delay={0.2}>
        <div className="max-w-4xl mx-auto mt-8">
          <div className="glass-card p-5 md:p-8 relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800/50 flex flex-col items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-slate-600 dark:text-slate-400" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Intermediate (12th) – MPC
                    </h3>
                    <p className="text-[#3b82f6] font-medium text-lg mt-1">
                      Narayana Junior College
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="flex gap-3">
                    <span className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 rounded-full h-fit flex items-center">
                      Completed
                    </span>
                    <span className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-sm font-bold rounded-full flex items-center gap-2 h-fit">
                      <Award className="w-4 h-4" /> CGPA: 8.95
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mt-4 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Hanumakonda, Telangana, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>2020 – 2022</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-slate-50 dark:bg-slate-800/60 text-sm rounded-full text-foreground/80 font-medium">
                    Telangana State Board of Intermediate Education
                  </span>
                  <span className="px-4 py-2 bg-slate-50 dark:bg-slate-800/60 text-sm rounded-full text-foreground/80 font-medium">
                    Mathematics-Physics-Chemistry, Strong Analytical Foundation, Discipline & Consistency
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 10th Card */}
      <ScrollReveal delay={0.25}>
        <div className="max-w-4xl mx-auto mt-8">
          <div className="glass-card p-5 md:p-8 relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800/50 flex flex-col items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-slate-600 dark:text-slate-400" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Secondary School (10th)
                    </h3>
                    <p className="text-[#3b82f6] font-medium text-lg mt-1">
                      ZPHS Velair
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="flex gap-3">
                    <span className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 rounded-full h-fit flex items-center">
                      Completed
                    </span>
                    <span className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-sm font-bold rounded-full flex items-center gap-2 h-fit">
                      <Award className="w-4 h-4" /> CGPA: 10
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mt-4 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Velair, Telangana, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>2019 – 2020</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 items-start">
                  <span className="px-4 py-2 bg-slate-50 dark:bg-slate-800/60 text-sm rounded-full text-foreground/80 font-medium">
                    Board of Secondary Education
                  </span>
                  <span className="px-4 py-2 bg-slate-50 dark:bg-slate-800/60 text-sm rounded-full text-foreground/80 font-medium">
                    Sports, Basics + Curiosity + Discipline + Consistency = 100%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </div>
  </section>;
};
export default Education;