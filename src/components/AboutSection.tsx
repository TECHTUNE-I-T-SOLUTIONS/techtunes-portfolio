'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Globe, Database, Shield, Zap } from 'lucide-react'
import { ResumeDownload } from './ResumeDownload'

export function AboutSection() {
  const skills = [
    { name: 'Programming languages', icon: Code, items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C# / .NET', 'C++', 'PHP', 'Go', 'Rust'] },
    { name: 'Frameworks & platforms', icon: Palette, items: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Django', 'FastAPI', 'Spring Boot', 'Flutter'] },
    { name: 'Data & integrations', icon: Database, items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase', 'REST APIs', 'GraphQL'] },
    { name: 'Cloud & infrastructure', icon: Globe, items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'VPS hosting', 'DigitalOcean', 'Docker', 'Kubernetes', 'CI/CD'] },
    { name: 'Security & operations', icon: Shield, items: ['Secure application design', 'Authentication', 'Linux server administration', 'Monitoring', 'Backups'] },
    { name: 'Design & performance', icon: Zap, items: ['UI/UX design', 'Figma', 'Design systems', 'Accessibility', 'Performance optimisation'] },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/35">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">TechTune I. T. Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a passionate team of technology enthusiasts dedicated to creating innovative solutions that transform businesses and enhance user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded with a vision to bridge the gap between cutting-edge technology and practical business solutions, 
                  TechTune I. T. Solutions has grown from a small startup to a trusted partner for businesses of all sizes.
                </p>
                <p>
                  Our expertise spans across web development, mobile applications, cloud solutions, and IT consulting. 
                  Based in Ilorin, Nigeria, we believe in the power of technology to solve real-world problems and create meaningful impact.
                </p>
                <p>
                  With over 5 years of combined experience and 50+ successful projects, we continue to push the boundaries 
                  of what&apos;s possible in the digital realm.
                </p>
              </div>
            </motion.div>

            {/* Resume Download Button */}
            <div className="mt-8">
              <ResumeDownload 
                variant="primary"
                size="md"
              />
            </div>
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Our Expertise</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.name} className="rounded-xl border border-slate-700/70 bg-slate-950/45 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <skill.icon className="h-5 w-5 text-cyan-300" />
                    <span className="font-medium text-white">{skill.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => <span key={item} className="rounded-full border border-slate-700 bg-slate-900/65 px-2.5 py-1 text-xs text-slate-200">{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Innovation</h4>
              <p className="text-gray-300">
                We stay ahead of technology trends to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Quality</h4>
              <p className="text-gray-300">
                Every project undergoes rigorous testing to ensure the highest standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Efficiency</h4>
              <p className="text-gray-300">
                We optimize performance and deliver solutions that scale with your business.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
