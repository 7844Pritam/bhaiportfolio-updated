import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Download,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  ExternalLink,
  ChevronDown,
  Award,
  Cpu,
  Moon,
  Sun
} from 'lucide-react';
import {
  PERSONAL_DETAILS,
  EDUCATION,
  PROJECTS,
  SKILLS,
  CERTIFICATIONS,
  SECTIONS
} from './constants';
import CustomCursor from './components/CustomCursor';
import Section from './components/Section';
import Experience from './components/Experience';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-dark text-primary' : 'bg-gray-50 text-gray-900'} selection:bg-accent selection:text-white cursor-none`}>
      <CustomCursor />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="font-display font-bold text-2xl tracking-tighter">
          DKS<span className="text-accent">.</span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {SECTIONS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm uppercase tracking-widest hover:text-accent transition-colors ${activeSection === item.id ? 'text-accent' : 'text-gray-400'}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        <a
          href={`mailto:${PERSONAL_DETAILS.email}`}
          className="border border-white/20 px-4 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
        >
          Let's Talk
        </a>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <motion.div
          style={{ y: heroY, opacity }}
          className="relative z-10 text-center px-4"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 text-xs tracking-[0.2em] uppercase text-secondary mb-6 backdrop-blur-md">
              Portfolio 2024
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-8xl font-bold mb-6 tracking-tight leading-none"
          >
            {PERSONAL_DETAILS.name.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-3 md:mr-6">{word}</span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto font-light"
          >
            {PERSONAL_DETAILS.role} with expertise in <span className="text-accent font-medium">Design & Fabrication</span>.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="group relative px-8 py-3 bg-white text-black rounded-full overflow-hidden font-medium"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Work <ChevronDown size={16} />
              </span>
              <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
            <div className="flex gap-4">
              <a href={PERSONAL_DETAILS.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${PERSONAL_DETAILS.email}`} className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* About Section */}
      <Section id="about">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-4xl mb-8">About Me</h2>
            <div className="space-y-6 text-secondary text-lg leading-relaxed">
              <p>{PERSONAL_DETAILS.objective}</p>
              <p>{PERSONAL_DETAILS.summary}</p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-card border border-white/5 hover:border-accent/30 transition-colors">
                <div className="text-3xl font-display font-bold text-white mb-2">3+</div>
                <div className="text-sm text-secondary uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-white/5 hover:border-accent/30 transition-colors">
                <div className="text-3xl font-display font-bold text-white mb-2">10+</div>
                <div className="text-sm text-secondary uppercase tracking-wider">Projects Done</div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Decorative element resembling a technical drawing or blueprint since he is a mechanical engineer */}
            <div className="aspect-square rounded-full border border-dashed border-white/20 relative animate-spin-slow">
              <div className="absolute inset-0 border border-white/5 rounded-full scale-75" />
              <div className="absolute inset-0 border border-white/5 rounded-full scale-50" />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-sm text-secondary uppercase tracking-widest mb-2">Location</p>
              <div className="flex items-center justify-center gap-2 text-white">
                <MapPin size={16} className="text-accent" />
                {PERSONAL_DETAILS.location}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Experience />

      {/* Skills & Certifications Grid */}
      <Section id="skills">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Skills */}
          <div>
            <h2 className="font-display text-3xl mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-accent" /> Technical Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 dark:bg-card border border-gray-200 dark:border-white/10 rounded-lg text-gray-700 dark:text-secondary hover:text-black dark:hover:text-white hover:border-accent/50 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="font-display text-3xl mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-accent" /> Certifications
            </h2>
            <div className="space-y-6">
              {CERTIFICATIONS.map((cert, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-accent/10 rounded-lg text-accent">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium">{cert.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-secondary">{cert.org} • {cert.year}</p>
                    <p className="text-xs text-gray-500 mt-1">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects">
        <h2 className="font-display text-4xl md:text-5xl mb-16">Academic Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white/5 dark:bg-card border border-gray-200 dark:border-white/5 hover:border-accent/50 dark:hover:border-white/20 transition-all hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl group-hover:bg-accent/20 transition-colors">
                  <Cpu size={32} className="text-gray-900 dark:text-white group-hover:text-accent transition-colors" />
                </div>
                <ExternalLink size={20} className="text-gray-400 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-600 dark:text-secondary leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education">
        <h2 className="font-display text-3xl mb-12 text-center">Education</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {EDUCATION.map((edu, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-center p-6 bg-white/5 rounded-2xl border border-gray-200 dark:border-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <div className="text-accent">{edu.specialization || edu.institute}</div>
                  <div className="text-sm text-gray-500 mt-1">{edu.board}</div>
                </div>
                <div className="flex flex-col items-center md:items-end gap-2">
                  <span className="text-3xl font-display font-bold text-gray-200 dark:text-white/20">{edu.year}</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 text-xs font-bold rounded-full">
                    {edu.percentage} Score
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Footer / Contact */}
      <footer className="py-20 border-t border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">

            <div className="text-center md:text-left">
              <h2 className="font-display text-4xl font-bold mb-2 text-gray-900 dark:text-white">Let's work together</h2>
              <p className="text-gray-600 dark:text-secondary mb-8">Open to new opportunities in Mechanical Engineering.</p>

              <div className="flex flex-col gap-4">
                <a href={`mailto:${PERSONAL_DETAILS.email}`} className="flex items-center gap-3 text-xl hover:text-accent transition-colors text-gray-900 dark:text-white">
                  <Mail size={24} /> {PERSONAL_DETAILS.email}
                </a>
                <a href={`tel:${PERSONAL_DETAILS.phone}`} className="flex items-center gap-3 text-xl hover:text-accent transition-colors text-gray-900 dark:text-white">
                  <Phone size={24} /> {PERSONAL_DETAILS.phone}
                </a>
                <a href={PERSONAL_DETAILS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xl hover:text-accent transition-colors text-gray-900 dark:text-white">
                  <Linkedin size={24} /> LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <button className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:bg-accent hover:text-white transition-all">
                <Download size={18} /> Download CV
              </button>
              <p className="mt-8 text-xs text-gray-600">
                © 2024 Deepu Kumar Sharma. All rights reserved.
              </p>
            </div>

          </div>
        </div>

        {/* Large Text Background */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none">
          <div className="text-[20vw] font-display font-bold leading-none text-black dark:text-white whitespace-nowrap">
            ENGINEER
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;