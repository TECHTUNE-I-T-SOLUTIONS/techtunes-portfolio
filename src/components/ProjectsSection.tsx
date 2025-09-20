'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Github, ExternalLink, Star, GitFork, Calendar } from 'lucide-react'

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  // Mock projects data (in a real implementation, this would come from GitHub API)
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'web',
      github: 'https://github.com/techtunes/ecommerce-platform',
      live: 'https://ecommerce-demo.techtunes.com',
      stars: 45,
      forks: 12,
      updated: '2024-01-15'
    },
    {
      id: 2,
      title: 'Mobile Task Manager',
      description: 'Cross-platform mobile app built with React Native. Includes offline support, push notifications, and cloud synchronization.',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Firebase', 'Redux', 'AsyncStorage'],
      category: 'mobile',
      github: 'https://github.com/techtunes/task-manager-mobile',
      live: 'https://apps.apple.com/app/taskmanager',
      stars: 32,
      forks: 8,
      updated: '2024-01-10'
    },
    {
      id: 3,
      title: 'Cloud Analytics Dashboard',
      description: 'Real-time analytics dashboard with data visualization, built with Next.js and deployed on AWS with auto-scaling capabilities.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'AWS', 'Docker', 'Chart.js'],
      category: 'cloud',
      github: 'https://github.com/techtunes/analytics-dashboard',
      live: 'https://analytics.techtunes.com',
      stars: 67,
      forks: 23,
      updated: '2024-01-20'
    },
    {
      id: 4,
      title: 'Portfolio Website Template',
      description: 'Modern portfolio website template with dark mode, animations, and responsive design. Perfect for developers and designers.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      category: 'web',
      github: 'https://github.com/techtunes/portfolio-template',
      live: 'https://portfolio-template.techtunes.com',
      stars: 89,
      forks: 34,
      updated: '2024-01-18'
    },
    {
      id: 5,
      title: 'Security Audit Tool',
      description: 'Automated security scanning tool for web applications. Detects common vulnerabilities and provides detailed reports.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Flask', 'SQLite', 'Docker'],
      category: 'security',
      github: 'https://github.com/techtunes/security-audit-tool',
      live: 'https://security-audit.techtunes.com',
      stars: 156,
      forks: 45,
      updated: '2024-01-22'
    },
    {
      id: 6,
      title: 'IoT Device Monitor',
      description: 'IoT device monitoring system with real-time data collection, alerts, and remote control capabilities.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'MQTT', 'InfluxDB', 'Grafana'],
      category: 'iot',
      github: 'https://github.com/techtunes/iot-monitor',
      live: 'https://iot-monitor.techtunes.com',
      stars: 78,
      forks: 19,
      updated: '2024-01-12'
    }
  ]

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'security', name: 'Security' },
    { id: 'iot', name: 'IoT' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise across different technologies and industries.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-transparent hover:scale-105">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className="text-white text-2xl font-bold">{project.title}</div>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      {project.stars}
                    </div>
                    <div className="bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs flex items-center">
                      <GitFork className="w-3 h-3 mr-1" />
                      {project.forks}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Updated Date */}
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar className="w-3 h-3 mr-1" />
                    Updated {new Date(project.updated).toLocaleDateString()}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300 text-sm font-medium flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm font-medium flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Integration Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <Github className="w-12 h-12 text-gray-600 dark:text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              More Projects on GitHub
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Check out our complete portfolio of open-source projects and contributions on GitHub.
            </p>
            <a
              href="https://github.com/TECHTUNE-I-T-SOLUTIONS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <Github className="mr-2 w-5 h-5" />
              Visit Our GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}