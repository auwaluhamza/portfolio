'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Palette, 
  Database, 
  Zap,
  Brain,
  Server,
  Download,
  Cpu
} from 'lucide-react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills = [
    { 
      name: 'Backend Development', 
      icon: <Server className="w-6 h-6" />, 
      items: ['PHP (Laravel)', 'Python (FastAPI)', 'RESTful APIs', 'Database Design'] 
    },
    { 
      name: 'Frontend & Tools', 
      icon: <Palette className="w-6 h-6" />, 
      items: ['Laravel Blade', 'Vite', 'Tailwind CSS', 'Modern JavaScript'] 
    },
    { 
      name: 'Databases & Search', 
      icon: <Database className="w-6 h-6" />, 
      items: ['MySQL', 'PostgreSQL', 'Typesense', 'Query Optimization'] 
    },
    { 
      name: 'DevOps & Automation', 
      icon: <Zap className="w-6 h-6" />, 
      items: ['Docker', 'CI/CD', 'GitHub Actions', 'Nginx'] 
    },
  ];

  const projects = [
    {
      title: 'Logistics & Shipment Management SaaS',
      description: 'Designed and built a comprehensive SaaS platform for logistics companies with shipment tracking, order management, accounting, and documentation systems',
      tech: ['Laravel', 'MySQL', 'Docker', 'Typesense', 'Real-time Updates'],
      link: '#',
      github: '#',
      role: 'Fullstack Developer & System Architect',
      slug: 'logistics-shipment-management-saas'
    },
    {
      title: 'E-commerce Multi-Merchant Platform',
      description: 'Comprehensive e-commerce platform with multi-merchant support, shipping integration, and advanced order management system',
      tech: ['Laravel 10', 'MySQL', 'Multi-tenant Architecture', 'Shipping APIs', 'WhatsApp Integration'],
      link: '#',
      github: '#',
      role: 'Full Stack Developer',
      slug: 'e-commerce-multi-merchant-platform'
    },
    {
      title: 'Hospital Management System',
      description: 'Built comprehensive role-based dashboards for hospital directorates with custom reporting, access control, and streamlined operations',
      tech: ['Laravel', 'MySQL', 'Role-based Access', 'Custom Dashboards'],
      link: '#',
      github: '#',
      role: 'Full Stack Developer',
      slug: 'hospital-management-system'
    },
    {
      title: 'Hotel Booking Platform',
      description: 'Maintained and optimized commercial hotel booking application with improved performance, database optimization, and enhanced API endpoints',
      tech: ['Laravel', 'MySQL', 'API Development', 'Performance Optimization'],
      link: '#',
      github: '#',
      role: 'PHP Developer',
      slug: 'hotel-booking-platform'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
              className="text-xl font-bold text-slate-900 dark:text-white"
            >
              Auwalu Hamza
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 20 }}
              className="flex space-x-4"
            >
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 dark:text-white mb-8">
              Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Auwalu Hamza</span>
            </h1>
          
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-3 rounded-lg font-semibold"
              >
                View Projects
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Who I Am</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I am a software engineer with strong expertise in backend development, specializing in PHP (Laravel) and Python (FastAPI). 
                My development approach is problem-solving driven — I focus on identifying real-world issues, designing robust systems, 
                and delivering solutions that are scalable, secure, and user-friendly.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">What I Do</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Server className="w-5 h-5" />
                    Backend Development
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap className="w-5 h-5" />
                    Automation & DevOps
                  </li>
                  <li className="flex items-center gap-3">
                    <Database className="w-5 h-5" />
                    API Development
                  </li>
                  <li className="flex items-center gap-3">
                    <Brain className="w-5 h-5" />
                    Problem Solving
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills & Technologies</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              I work with a variety of technologies to create robust, scalable, and efficient solutions
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{skill.name}</h3>
                <div className="space-y-2">
                  {skill.items.map((item) => (
                    <div key={item} className="text-slate-600 dark:text-slate-300 text-sm">{item}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Additional Expertise</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">System Architecture</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">SaaS Platforms, Role-based Access Control, API Design & Migration</p>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Performance & Optimization</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Database Optimization, Query Performance, Legacy Code Refactoring</p>
              </div>
              <div className="text-center">
                <Brain className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Problem Solving</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Complex System Design, Backward Compatibility, Real-time Solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my backend expertise and problem-solving approach
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
                  <Server className="w-16 h-16 text-white" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-xs font-medium">{project.role}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={`/projects/${project.slug}`}
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new opportunities and exciting projects. 
              Let&apos;s work together to build robust, scalable solutions that make a real impact!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:auwalu.hamza@example.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/auwaluhamza"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/auwaluhamza"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Auwalu Hamza. Built with Next.js and deployed on GitHub Pages.
          </p>
        </div>
      </footer>
    </div>
  );
}
