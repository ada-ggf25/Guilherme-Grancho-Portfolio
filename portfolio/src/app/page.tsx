'use client';

import CleanNavigation from "@/components/CleanNavigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Clean Navigation */}
      <CleanNavigation />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Simple Avatar */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-slate-700 dark:text-slate-200">
                  GG
                </span>
              </div>
            </div>

            {/* Clean Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
              Guilherme Grancho
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl font-light text-slate-600 dark:text-slate-400 mb-8">
              Full-Stack Developer
            </h2>

            {/* Description */}
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              I create digital experiences through clean code and modern technology, 
              turning ideas into functional and beautiful applications.
            </p>

            {/* Simple Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-200"
              >
                View My Work
              </button>
              
              <button 
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:border-slate-400 dark:hover:border-slate-500 transition-colors duration-200"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900 dark:text-white">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  I'm a passionate full-stack developer with over 5 years of experience 
                  creating digital solutions that make a difference. I specialize in modern 
                  web technologies and love bringing ideas to life through clean, efficient code.
                </p>
                
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source projects, or sharing knowledge with the developer community.
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                    Technologies I Use
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'].map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">5+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">50+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">
              Featured Work
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-Commerce Platform",
                  description: "A modern e-commerce platform built with Next.js and Stripe integration.",
                  tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
                },
                {
                  title: "Task Management App",
                  description: "A collaborative task management application with real-time updates.",
                  tech: ["React", "Node.js", "Socket.io", "MongoDB"],
                },
                {
                  title: "Analytics Dashboard",
                  description: "A comprehensive analytics dashboard with data visualization.",
                  tech: ["React", "D3.js", "Python", "PostgreSQL"],
                }
              ].map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-slate-200 dark:border-slate-700"
                >
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">
              Let's Work Together
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:your.email@example.com"
                className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-200"
              >
                Send Email
              </a>
              
              <a 
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:border-slate-400 dark:hover:border-slate-500 transition-colors duration-200"
              >
                LinkedIn
              </a>
              
              <a 
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:border-slate-400 dark:hover:border-slate-500 transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-6">
          <div className="text-center text-slate-600 dark:text-slate-400">
            <p>&copy; 2024 Guilherme Grancho. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
