import { useState } from 'react';
import emailjs from '@emailjs/browser';
import ScrollReveal from './ScrollReveal';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_b2swgfz';
const EMAILJS_TEMPLATE_ID = 'template_uxpi0em';
const EMAILJS_PUBLIC_KEY = 'zMYHyTmu6TPdQ0Lqa';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'komakulavishnuvardhan0862@gmail.com',
    href: 'mailto:komakulavishnuvardhan0862@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 6304462346',
    href: 'tel:+916304462346',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Hyderabad, India',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vishnuvardhan-komakula',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/vishnuvardhan-0862',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:komakulavishnuvardhan0862@gmail.com',
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const sentTime = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'short',
      });

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          form_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Vishnuvardhan',
          Sent_time: sentTime,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: 'Message sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: 'Failed to send message',
        description: 'Please try again or contact me directly via email.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 lg:py-20 relative z-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">Get In Touch</p>
            <h2 className="section-heading">Contact <span className="gradient-text">Me</span></h2>
            <p className="section-subheading mx-auto">
              Have a project in mind or want to connect? Feel free to reach out!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">

          <ScrollReveal direction="left" delay={0.1}>
            {/* Left Column: Contact Form */}
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-[2rem] p-5 md:p-10 shadow-xl shadow-black/5 border border-white/20 h-full">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Send a Message</h3>
                <p className="text-muted-foreground">Fill out the form and I'll get back to you soon.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50 border-border/50 focus:border-blue-500 rounded-xl py-6"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50 border-border/50 focus:border-blue-500 rounded-xl py-6"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-blue-500 resize-none rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 rounded-xl font-medium text-base glow-button bg-blue-500 hover:bg-blue-600 text-white transition-all shadow-lg shadow-blue-500/30 mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            {/* Right Column: Information & Social Cards */}
            <div className="flex flex-col gap-6 h-full justify-between">

              {/* Top Card: Contact Information */}
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-[2rem] p-5 md:p-10 shadow-xl shadow-black/5 border border-white/20 flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Contact Information
                </h3>

                <div className="flex flex-col gap-8">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-base md:text-lg font-semibold text-foreground hover:text-blue-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-base md:text-lg font-semibold text-foreground">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card: Let's Connect */}
              <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 rounded-[2rem] p-5 md:p-10 text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden flex-shrink-0">
                {/* Subtle Abstract Particles / Mesh background effect */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-400 opacity-20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col items-start gap-4">
                  <h3 className="text-3xl font-bold tracking-tight">
                    Let's Connect
                  </h3>
                  <p className="text-blue-50 text-base leading-relaxed opacity-90 max-w-sm">
                    Follow me on social media for updates on my latest projects and insights.
                  </p>

                  <div className="flex items-center gap-4 mt-2">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 group"
                        aria-label={link.label}
                      >
                        <link.icon className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-white transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>

        {/* Opportunities Banner */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-blue-500/20">
            {/* Grid Background Pattern */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none" 
              style={{
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white space-y-3 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-blue-100 font-semibold tracking-wider text-sm uppercase">
                  <Sparkles className="w-5 h-5" />
                  Available for Opportunities
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  Let's Build Something Great Together
                </h3>
                <p className="text-blue-100 text-lg">
                  Open to internships, full-time roles, and exciting collaborations
                </p>
              </div>
              
              <a 
                href="mailto:komakulavishnuvardhan0862@gmail.com"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex-shrink-0"
              >
                <Mail className="w-5 h-5" />
                Email Me
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Contact;
