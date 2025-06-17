import Link from "next/link";
import Navigation from "@/components/Navigation";
import { Typewriter, ScrollToTop } from "@/components/InteractiveComponents";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 section-padding">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary-dark mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                GG
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Guilherme Grancho
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8">
              <Typewriter texts={["Software Developer", "Technology Enthusiast", "Problem Solver", "Full-Stack Engineer"]} />
            </p>
            <p className="text-lg text-muted max-w-3xl mx-auto mb-12 leading-relaxed">
              Passionate about creating innovative solutions and building exceptional digital experiences. 
              I specialize in modern web technologies and love turning complex problems into elegant, simple designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#projects" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View My Work
              </Link>
              <Link 
                href="#contact" 
                className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Hello, I&apos;m Guilherme</h3>
                <p className="text-lg text-muted mb-6 leading-relaxed">
                  I&apos;m a passionate software developer with a strong foundation in modern web technologies. 
                  I enjoy creating clean, efficient code and building applications that make a difference.
                </p>
                <p className="text-lg text-muted mb-6 leading-relaxed">
                  My journey in technology has led me to work with various programming languages and frameworks, 
                  always focusing on delivering high-quality solutions that exceed expectations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Frontend</h4>
                    <p className="text-muted">React, Next.js, TypeScript</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Backend</h4>
                    <p className="text-muted">Node.js, Python, APIs</p>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold mb-4">Quick Facts</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span>Full-stack Developer</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span>Problem Solver</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span>Continuous Learner</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span>Team Collaborator</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
                <p className="text-muted mb-4">Creating responsive and interactive user interfaces</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-accent rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-accent rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-accent rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-accent rounded-full text-sm">Tailwind CSS</span>
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
                <p className="text-muted mb-4">Building robust and scalable server-side applications</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-accent rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-accent rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-accent rounded-full text-sm">APIs</span>
                  <span className="px-3 py-1 bg-accent rounded-full text-sm">Databases</span>
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">DevOps & Tools</h3>
                <p className="text-muted mb-4">Streamlining development and deployment processes</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-accent rounded-full text-sm">Git</span>
                  <span className="px-3 py-1 bg-accent rounded-full text-sm">Docker</span>
                  <span className="px-3 py-1 bg-accent rounded-full text-sm">CI/CD</span>
                  <span className="px-3 py-1 bg-accent rounded-full text-sm">Cloud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  Project 1
                </div>
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-muted mb-4">
                  Exciting projects are in development. Stay tuned for updates on my latest work.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-accent rounded text-sm">React</span>
                  <span className="px-2 py-1 bg-accent rounded text-sm">Next.js</span>
                </div>
                <div className="flex gap-3">
                  <button className="text-primary hover:text-primary-dark transition-colors">
                    View Project
                  </button>
                  <button className="text-primary hover:text-primary-dark transition-colors">
                    GitHub
                  </button>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-full h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  Project 2
                </div>
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-muted mb-4">
                  More innovative solutions are being crafted. Check back soon for new additions.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-accent rounded text-sm">TypeScript</span>
                  <span className="px-2 py-1 bg-accent rounded text-sm">Node.js</span>
                </div>
                <div className="flex gap-3">
                  <button className="text-primary hover:text-primary-dark transition-colors">
                    View Project
                  </button>
                  <button className="text-primary hover:text-primary-dark transition-colors">
                    GitHub
                  </button>
                </div>
              </div>
              
              {/* Project 3 */}
              <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  Project 3
                </div>
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-muted mb-4">
                  Creative projects are in the pipeline. Watch this space for upcoming releases.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-accent rounded text-sm">Python</span>
                  <span className="px-2 py-1 bg-accent rounded text-sm">API</span>
                </div>
                <div className="flex gap-3">
                  <button className="text-primary hover:text-primary-dark transition-colors">
                    View Project
                  </button>
                  <button className="text-primary hover:text-primary-dark transition-colors">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Let&apos;s Connect</h2>
            <p className="text-xl text-muted mb-12">
              I&apos;m always interested in new opportunities and exciting projects. Let&apos;s discuss how we can work together.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-muted">your.email@example.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                <Link href="https://linkedin.com/in/guilhermegrancho" className="text-primary hover:text-primary-dark transition-colors">
                  Connect with me
                </Link>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🐙</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                <p className="text-muted">@guilhermegrancho</p>
              </div>
            </div>
            <Link 
              href="mailto:your.email@example.com" 
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              Send Message
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted">
            © 2025 Guilherme Grancho. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
