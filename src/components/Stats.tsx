import { Folder, Award, Users, Trophy } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const stats = [
  {
    label: 'Projects Built',
    value: '8+',
    icon: Folder,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    delay: 0.1,
  },
  {
    label: 'Certifications',
    value: '9+',
    icon: Award,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    delay: 0.2,
  },
  {
    label: 'Students Mentored',
    value: '20+',
    icon: Users,
    color: 'text-sky-600',
    bgColor: 'bg-sky-100',
    delay: 0.3,
  },
  {
    label: 'CGPA',
    value: '8.83',
    icon: Trophy,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    delay: 0.4,
  },
];

const Stats = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {stats.map((stat) => (
            <ScrollReveal key={stat.label} delay={stat.delay} className="h-full flex">
              <div
                className="glass-card p-6 flex flex-col items-start gap-4 hover:border-primary/50 transition-all duration-300 group h-full w-full relative"
                style={{ borderRadius: '24px' }}
              >
                {/* Icon Container */}
                <div className={`w-12 h-12 rounded-2xl ${stat.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                
                {/* Content */}
                <div className="flex flex-col flex-1">
                  <span className="text-4xl font-bold tracking-tight text-foreground group-hover:gradient-text transition-all duration-300">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground mt-1 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
