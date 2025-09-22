'use client'

import { motion } from 'framer-motion'
import { Download, Code, Palette, Globe, Database, Shield, Zap } from 'lucide-react'

export function AboutSection() {
  const skills = [
    { name: 'Frontend Development', icon: Code, level: 95 },
    { name: 'UI/UX Design', icon: Palette, level: 90 },
    { name: 'Backend Development', icon: Database, level: 85 },
    { name: 'DevOps & Cloud', icon: Globe, level: 80 },
    { name: 'Cybersecurity', icon: Shield, level: 75 },
    { name: 'Performance Optimization', icon: Zap, level: 90 },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">TechTune I. T. Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are a passionate team of technology enthusiasts dedicated to creating innovative solutions that transform businesses and enhance user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Founded with a vision to bridge the gap between cutting-edge technology and practical business solutions, 
                TechTune I. T. Solutions has grown from a small startup to a trusted partner for businesses of all sizes.
              </p>
              <p>
                Our expertise spans across web development, mobile applications, cloud solutions, and IT consulting. 
                We believe in the power of technology to solve real-world problems and create meaningful impact.
              </p>
              <p>
                With over 5 years of combined experience and 50+ successful projects, we continue to push the boundaries 
                of what&apos;s possible in the digital realm.
              </p>
            </div>

            <div className="mt-8">
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </button>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <skill.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h4>
              <p className="text-gray-600 dark:text-gray-300">
                We stay ahead of technology trends to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quality</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Every project undergoes rigorous testing to ensure the highest standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Efficiency</h4>
              <p className="text-gray-600 dark:text-gray-300">
                We optimize performance and deliver solutions that scale with your business.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}