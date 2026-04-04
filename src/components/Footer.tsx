import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 pt-16 pb-8 overflow-hidden text-slate-300">
      {/* Background Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* Subtle Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">

          {/* Column 1: Branding & Bio */}
          <div className="space-y-6">
            <a href="#home" className="inline-block text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
              VK
            </a>
            <p className="text-sm leading-relaxed text-slate-400">
              AI/ML Engineer, Data Science Enthusiast,Data Analyst & Full Stack Developer passionate about building intelligent systems and scalable web applications that solve real-world problems.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/vishnuvardhan-komakula"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-500/10 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/vishnuvardhan-0862"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-500/10 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:komakulavishnuvardhan@gmail.com"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-500/10 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-slate-400 hover:text-blue-400 inline-block transition-transform hover:translate-x-1 duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-center gap-2 hover:text-slate-300 transition-colors">
                komakulavishnuvardhan@gmail.com
              </p>
              <p className="flex items-center gap-2 hover:text-slate-300 transition-colors">
                Hyderabad, Telangana, India
              </p>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                </span>
                <span className="text-xs font-medium text-blue-400">Open to opportunities</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            Made with <span className="text-red-500 animate-pulse inline-block">❤️</span> by <span className="text-slate-300 font-medium">Vishnuvardhan Komakula</span>
          </p>
          <p>
            © {currentYear} All rights reserved to Vishnuvardhan
          </p>
          <p>
            Built with <span className="text-blue-400 font-medium">React + TailwindCSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
