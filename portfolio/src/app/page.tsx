'use client';

import CleanNavigation from "@/components/CleanNavigation";
import { SubtleParticleBackground, FluidOrb, GlowingCard, AnimatedGradientText, FloatingElement } from "@/components/EnhancedEffects";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Subtle Particle Background */}
      <SubtleParticleBackground />
      
      {/* Background Orbs */}
      <FluidOrb className="absolute top-20 right-20 w-96 h-96 opacity-30" />
      <FluidOrb className="absolute bottom-40 left-10 w-80 h-80 opacity-20" />
      
      {/* Clean Navigation */}
      <CleanNavigation />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16" style={{ zIndex: 10 }}>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Enhanced Avatar */}
            <FloatingElement delay={0}>
              <div className="mb-12">
                <div className="relative w-40 h-40 mx-auto group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-glow"></div>
                  <div className="absolute inset-1 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      GG
                    </span>
                  </div>
                </div>
              </div>
            </FloatingElement>

            {/* Enhanced Title */}
            <FloatingElement delay={0.2}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <AnimatedGradientText>
                  Guilherme Grancho
                </AnimatedGradientText>
              </h1>
            </FloatingElement>

            {/* Enhanced Subtitle */}
            <FloatingElement delay={0.4}>
              <h2 className="text-2xl md:text-3xl font-light text-slate-600 dark:text-slate-400 mb-8 tracking-wide">
                Full-Stack Developer & Digital Architect
              </h2>
            </FloatingElement>

            {/* Enhanced Description */}
            <FloatingElement delay={0.6}>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
                I craft exceptional digital experiences through innovative code and cutting-edge technology, 
                transforming complex ideas into elegant, functional solutions.
              </p>
            </FloatingElement>

            {/* Enhanced Action Buttons */}
            <FloatingElement delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover-lift overflow-hidden"
                >
                  <span className="relative z-10">Explore My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button 
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-10 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-2xl font-semibold text-lg hover-lift hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                >
                  Let&apos;s Connect
                </button>
              </div>
            </FloatingElement>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
              <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50/50 dark:bg-slate-800/30 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <FloatingElement delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                <AnimatedGradientText>About Me</AnimatedGradientText>
              </h2>
            </FloatingElement>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FloatingElement delay={0.2}>
                <GlowingCard className="p-8 hover-lift">
                  <div className="space-y-6">
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                      I&apos;m a passionate full-stack developer with over 5 years of experience 
                      creating digital solutions that make a difference. I specialize in modern 
                      web technologies and love bringing ideas to life through clean, efficient code.
                    </p>
                    
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                      When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                      contributing to open source projects, or sharing knowledge with the developer community.
                    </p>
                  </div>
                </GlowingCard>
              </FloatingElement>
              
              <FloatingElement delay={0.4}>
                <div className="space-y-8">
                  <GlowingCard className="p-6 hover-lift">
                    <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
                      Technologies I Master
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'].map((tech) => (
                        <span 
                          key={tech} 
                          className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover-lift cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </GlowingCard>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <GlowingCard className="p-6 text-center hover-lift">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Years Experience</div>
                    </GlowingCard>
                    <GlowingCard className="p-6 text-center hover-lift">
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Projects Completed</div>
                    </GlowingCard>
                  </div>
                </div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <FloatingElement delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                <AnimatedGradientText>Featured Work</AnimatedGradientText>
              </h2>
            </FloatingElement>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-Commerce Platform",
                  description: "A modern e-commerce platform built with Next.js and Stripe integration, featuring real-time inventory management.",
                  tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Task Management App",
                  description: "A collaborative task management application with real-time updates and team synchronization features.",
                  tech: ["React", "Node.js", "Socket.io", "MongoDB"],
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Analytics Dashboard",
                  description: "A comprehensive analytics dashboard with interactive data visualization and machine learning insights.",
                  tech: ["React", "D3.js", "Python", "PostgreSQL"],
                  gradient: "from-emerald-500 to-teal-500"
                }
              ].map((project, index) => (
                <FloatingElement key={index} delay={index * 0.2}>
                  <GlowingCard className="h-full hover-lift group cursor-pointer">
                    <div className="p-8">
                      {/* Project Icon/Visual */}
                      <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                        <div className="text-4xl text-white">
                          {index === 0 ? '🛍️' : index === 1 ? '📋' : '📊'}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlowingCard>
                </FloatingElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50/50 dark:bg-slate-800/30 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <FloatingElement delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <AnimatedGradientText>Let&apos;s Work Together</AnimatedGradientText>
              </h2>
            </FloatingElement>
            
            <FloatingElement delay={0.2}>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-16 leading-relaxed max-w-3xl mx-auto">
                I&apos;m always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out.
              </p>
            </FloatingElement>
            
            <FloatingElement delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="mailto:your.email@example.com"
                  className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover-lift overflow-hidden"
                >
                  <span className="relative z-10">Send Email</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                <a 
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-2xl font-semibold text-lg hover-lift hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                >
                  LinkedIn
                </a>
                
                <a 
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-2xl font-semibold text-lg hover-lift hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </FloatingElement>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center text-slate-600 dark:text-slate-400">
            <p>&copy; 2024 Guilherme Grancho. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
