'use client';

import Link from "next/link";
import AdvancedNavigation from "@/components/AdvancedNavigation";
import { ParticleSystem, MagneticButton, TiltCard, AnimatedText, FloatingActionButton, CursorFollower } from "@/components/AdvancedEffects";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 relative overflow-hidden">
      {/* Advanced Cursor Follower */}
      <CursorFollower />
      
      {/* Navigation */}
      <AdvancedNavigation />

      {/* Hero Section with Particle System */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleSystem />
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 transform rotate-45 animate-float-delayed"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-red-500/20 transform rotate-12 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Dynamic Avatar with Glassmorphism */}
            <div className="mb-12 relative">
              <div className="relative mx-auto w-40 h-40 group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-slate-800/90 dark:to-slate-700/90 rounded-full backdrop-blur-xl flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    GG
                  </span>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
            </div>

            {/* Animated Title with Advanced Typography */}
            <div className="mb-8">
              <AnimatedText
                text="GUILHERME GRANCHO"
                className="text-5xl md:text-8xl font-black mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent tracking-tight"
              />
            </div>

            {/* Dynamic Subtitle with Rotating Text */}
            <div className="mb-12 h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-light text-gray-600 dark:text-gray-300">
                <span className="inline-block">I craft&nbsp;</span>
                <span className="relative inline-block">
                  <span className="absolute inset-0 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text animate-pulse">
                    Digital Experiences
                  </span>
                  <span className="text-blue-600">Digital Experiences</span>
                </span>
              </h2>
            </div>

            {/* Enhanced Description */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed">
              Transforming ideas into&nbsp;
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                extraordinary digital realities
              </span>
              &nbsp;through code, creativity, and cutting-edge technology.
            </p>

            {/* Magnetic Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <MagneticButton 
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                <span className="relative z-10">Explore My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </MagneticButton>
              
              <MagneticButton 
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative px-12 py-4 border-2 border-blue-600 text-blue-600 rounded-2xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <span className="relative z-10">Let&apos;s Connect</span>
              </MagneticButton>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Interactive Left Side */}
              <div className="relative">
                <TiltCard className="relative p-12 bg-white/70 dark:bg-slate-800/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl rotate-12 opacity-80"></div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Innovation Meets Precision
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      I&apos;m a passionate developer who believes in the power of technology to transform lives. 
                      With expertise spanning full-stack development, I create solutions that don&apos;t just work—they inspire.
                    </p>
                    
                    {/* Stats with Animated Counters */}
                    <div className="grid grid-cols-2 gap-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wide">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wide">Projects Completed</div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* Right Side Content */}
              <div>
                <AnimatedText
                  text="ABOUT ME"
                  className="text-4xl md:text-6xl font-black mb-8 text-gray-900 dark:text-white"
                  delay={300}
                />
                
                <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                  <p className="leading-relaxed">
                    My journey in technology began with a simple fascination: how can we use code to create 
                    experiences that genuinely matter? This question drives every project I undertake.
                  </p>
                  
                  <p className="leading-relaxed">
                    From crafting pixel-perfect interfaces to architecting robust backend systems, 
                    I bring a holistic approach to development that prioritizes both user experience and technical excellence.
                  </p>
                </div>

                {/* Skill Pills with Hover Effects */}
                <div className="mt-12">
                  <h4 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Core Technologies</h4>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Docker', 'AWS', 'GraphQL'].map((skill) => (
                      <span
                        key={skill}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl text-blue-600 font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next-Level Skills Section */}
      <section id="skills" className="py-32 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-slate-800/50 dark:to-indigo-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <AnimatedText
                text="EXPERTISE"
                className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              />
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Mastering the art of digital creation through cutting-edge technologies and innovative methodologies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Frontend Mastery */}
              <TiltCard className="group">
                <div className="relative p-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 hover:border-blue-500/30 transition-all duration-500">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🎨</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Frontend Artistry</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      Creating immersive user experiences with modern frameworks and cutting-edge design principles.
                    </p>
                    
                    <div className="space-y-3">
                      {['React Ecosystem', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                        <div key={tech} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* Backend Excellence */}
              <TiltCard className="group">
                <div className="relative p-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 hover:border-purple-500/30 transition-all duration-500">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">⚡</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Backend Mastery</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      Building scalable, high-performance systems that power exceptional digital experiences.
                    </p>
                    
                    <div className="space-y-3">
                      {['Node.js & Express', 'Python & FastAPI', 'PostgreSQL', 'Redis', 'Microservices'].map((tech) => (
                        <div key={tech} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* DevOps Innovation */}
              <TiltCard className="group">
                <div className="relative p-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 hover:border-green-500/30 transition-all duration-500">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🚀</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">DevOps Excellence</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      Streamlining deployment pipelines and infrastructure for seamless, reliable delivery.
                    </p>
                    
                    <div className="space-y-3">
                      {['Docker & K8s', 'AWS Cloud', 'CI/CD Pipelines', 'Terraform', 'Monitoring'].map((tech) => (
                        <div key={tech} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Projects Section */}
      <section id="projects" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <AnimatedText
                text="FEATURED WORK"
                className="text-4xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white"
              />
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A showcase of innovation, creativity, and technical excellence. Each project tells a story of problem-solving and digital craftsmanship.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Project 1 - Featured */}
              <TiltCard className="group lg:col-span-2">
                <div className="relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
                  
                  <div className="relative z-10 p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center space-x-4 mb-6">
                          <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 rounded-full text-sm font-semibold">
                            Featured Project
                          </span>
                          <span className="px-4 py-2 bg-green-500/20 text-green-600 rounded-full text-sm font-semibold">
                            In Development
                          </span>
                        </div>
                        
                        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          Next-Gen Portfolio Platform
                        </h3>
                        
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          A revolutionary portfolio platform that redefines how developers showcase their work. 
                          Built with cutting-edge technologies and innovative design patterns.
                        </p>
                        
                        <div className="flex flex-wrap gap-3 mb-8">
                          {['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                            <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-slate-700 rounded-xl text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex space-x-4">
                          <MagneticButton 
                            onClick={() => {
                              if (typeof window !== 'undefined') {
                                window.open('http://localhost:3030', '_blank');
                              }
                            }}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                          >
                            View Live Demo
                          </MagneticButton>
                          <MagneticButton 
                            onClick={() => {
                              if (typeof window !== 'undefined') {
                                window.open('https://github.com/guilhermegrancho', '_blank');
                              }
                            }}
                            className="px-8 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                          >
                            Source Code
                          </MagneticButton>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl flex items-center justify-center shadow-2xl">
                          <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                              <span className="text-3xl">🚀</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 font-medium">Project Preview</p>
                          </div>
                        </div>
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* More Projects Grid */}
              {[
                { 
                  title: 'AI-Powered Analytics Dashboard', 
                  tech: ['React', 'D3.js', 'Python', 'TensorFlow'],
                  color: 'from-emerald-500 to-teal-500'
                },
                { 
                  title: 'Real-Time Collaboration Tool', 
                  tech: ['Next.js', 'Socket.io', 'Redis', 'PostgreSQL'],
                  color: 'from-purple-500 to-pink-500'
                }
              ].map((project, index) => (
                <TiltCard key={index} className="group">
                  <div className="relative p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 hover:border-blue-500/30 transition-all duration-500">
                    <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl rotate-12 group-hover:rotate-45 transition-transform duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600 rounded-2xl mb-6 flex items-center justify-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center`}>
                          <span className="text-2xl">💡</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                        Coming soon - Another innovative solution in development.
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-slate-700 rounded-lg text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-3">
                        <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors">
                          View Project →
                        </button>
                        <button className="text-gray-500 hover:text-gray-600 font-semibold text-sm transition-colors">
                          GitHub →
                        </button>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ultimate Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <AnimatedText
              text="LET'S CREATE SOMETHING AMAZING"
              className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            />
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-16 leading-relaxed">
              Ready to bring your next big idea to life? Let&apos;s collaborate and create something extraordinary together.
            </p>

            <div className="grid md:grid-cols-3 gap-12 mb-16">
              {[
                { icon: '📧', title: 'Email', content: 'hello@guilhermegrancho.dev', href: 'mailto:hello@guilhermegrancho.dev' },
                { icon: '💼', title: 'LinkedIn', content: 'Connect with me', href: 'https://linkedin.com/in/guilhermegrancho' },
                { icon: '🐙', title: 'GitHub', content: '@guilhermegrancho', href: 'https://github.com/guilhermegrancho' }
              ].map((contact, index) => (
                <TiltCard key={index} className="group">
                  <div className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-blue-400/50 transition-all duration-500">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{contact.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{contact.title}</h3>
                    <Link href={contact.href} className="text-blue-200 hover:text-white transition-colors">
                      {contact.content}
                    </Link>
                  </div>
                </TiltCard>
              ))}
            </div>

            <MagneticButton 
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.open('mailto:hello@guilhermegrancho.dev', '_blank');
                }
              }}
              className="group relative px-16 py-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-3xl font-bold text-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              <span className="relative z-10">Start a Conversation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2025 Guilherme Grancho. Crafted with passion using Next.js, React, and cutting-edge technologies.
          </p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <FloatingActionButton
        onClick={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 z-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </FloatingActionButton>
    </div>
  );
}
