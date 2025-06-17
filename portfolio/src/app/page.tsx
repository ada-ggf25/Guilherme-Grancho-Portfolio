'use client';

import CleanNavigation from "@/components/CleanNavigation";
import { SubtleParticleBackground, FluidOrb, AnimatedGradientText, FloatingElement } from "@/components/EnhancedEffects";

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

            {/* Clean Title */}
            <FloatingElement delay={0.2}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight tracking-tight">
                <span className="block">
                  <AnimatedGradientText>
                    Welcome to
                  </AnimatedGradientText>
                </span>
                <span className="block">
                  <AnimatedGradientText>
                    Guilherme Grancho&apos;s
                  </AnimatedGradientText>
                </span>
                <span className="block text-slate-600 dark:text-slate-400">
                  Software Lab
                </span>
              </h1>
            </FloatingElement>

            {/* Enhanced Subtitle */}
            <FloatingElement delay={0.4}>
              <p className="text-xl md:text-2xl font-light text-slate-600 dark:text-slate-400 mb-12 tracking-wide max-w-3xl mx-auto">
                a full-stack developer with an eye for design
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
                  <span className="relative z-10">View My Work</span>
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

      {/* Work Section */}
      <section id="work" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Project 1 - E-Commerce Platform */}
            <FloatingElement delay={0}>
              <div className="mb-32">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    E-COMMERCE PLATFORM
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
                    Live
                  </span>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                      ShopFlow
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <span>Lead Developer</span>
                    <span>•</span>
                    <span>23-24</span>
                  </div>
                  
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    A streamlined e-commerce platform that simplifies online shopping with 
                    AI-powered recommendations and seamless checkout flows.
                  </p>
                  
                  <div className="pt-6">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wide">Tech Stack</h4>
                    <div className="flex flex-wrap gap-6">
                      {[
                        { name: 'React' },
                        { name: 'TypeScript' },
                        { name: 'Next.js' },
                        { name: 'Tailwind CSS' },
                        { name: 'Stripe' },
                        { name: 'PostgreSQL' }
                      ].map((tech) => (
                        <div key={tech.name} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                          </div>
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FloatingElement>

            {/* Separator */}
            <div className="flex items-center justify-center mb-32">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
              <div className="mx-4 w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full"></div>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
            </div>

            {/* Project 2 - Analytics Dashboard */}
            <FloatingElement delay={0.2}>
              <div className="mb-32">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    DATA ANALYTICS TOOL
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-medium">
                    Open Source
                  </span>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                      DataViz Pro
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <span>Core Contributor</span>
                    <span>•</span>
                    <span>22-24</span>
                  </div>
                  
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    An online tool for quickly fitting theoretical models to experimental data,
                    making data visualization and analysis intuitive and precise.
                  </p>
                  
                  <div className="pt-6">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wide">Tech Stack</h4>
                    <div className="flex flex-wrap gap-6">
                      {[
                        { name: 'React' },
                        { name: 'TypeScript' },
                        { name: 'D3.js' },
                        { name: 'Python' },
                        { name: 'FastAPI' }
                      ].map((tech) => (
                        <div key={tech.name} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center">
                            <div className="w-3 h-3 bg-emerald-500 rounded-sm"></div>
                          </div>
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FloatingElement>

            {/* Separator */}
            <div className="flex items-center justify-center mb-32">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
              <div className="mx-4 w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full"></div>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
            </div>

            {/* Project 3 - Task Management */}
            <FloatingElement delay={0.4}>
              <div className="mb-32">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    COLLABORATION PLATFORM
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-xs font-medium">
                    In Development
                  </span>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                      TeamSync
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <span>Lead UI/UX Developer</span>
                    <span>•</span>
                    <span>24-25</span>
                  </div>
                  
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    A dynamic collaboration platform that empowers teams to work efficiently with 
                    real-time updates, intelligent task management, and seamless communication tools.
                  </p>
                  
                  <div className="pt-6">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wide">Tech Stack</h4>
                    <div className="flex flex-wrap gap-6">
                      {[
                        { name: 'React' },
                        { name: 'TypeScript' },
                        { name: 'Next.js' },
                        { name: 'Socket.io' },
                        { name: 'Prisma' },
                        { name: 'PostgreSQL' }
                      ].map((tech) => (
                        <div key={tech.name} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center">
                            <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
                          </div>
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FloatingElement>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FloatingElement delay={0}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
                <AnimatedGradientText>Let&apos;s Chat</AnimatedGradientText>
              </h2>
            </FloatingElement>
            
            <FloatingElement delay={0.2}>
              <div className="flex flex-col items-center space-y-6">
                <a 
                  href="mailto:guilherme.grancho@example.com"
                  className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 underline underline-offset-4 decoration-2"
                >
                  guilherme.grancho@example.com
                </a>
                
                <div className="flex gap-8 mt-8">
                  <a 
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-medium"
                  >
                    LinkedIn
                  </a>
                  
                  <a 
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-medium"
                  >
                    GitHub
                  </a>
                  
                  <a 
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-medium"
                  >
                    Twitter
                  </a>
                </div>
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
