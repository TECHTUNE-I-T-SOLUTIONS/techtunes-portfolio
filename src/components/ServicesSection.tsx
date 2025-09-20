'use client'

import { motion } from 'framer-motion'
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Shield, 
  Database, 
  Users,
  Headphones,
  ArrowRight
} from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like React, Next.js, and Vue.js for optimal performance and user experience.',
      features: ['Responsive Design', 'SEO Optimization', 'Progressive Web Apps', 'E-commerce Solutions'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and native technologies.',
      features: ['Cross-Platform Apps', 'Native Performance', 'App Store Deployment', 'Push Notifications'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud Platform.',
      features: ['Cloud Migration', 'Auto Scaling', 'Load Balancing', 'Disaster Recovery'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.',
      features: ['Security Audits', 'Penetration Testing', 'GDPR Compliance', 'Data Encryption'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Database design, optimization, and management for SQL and NoSQL databases with focus on performance and reliability.',
      features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup Solutions'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help businesses leverage technology for growth and competitive advantage.',
      features: ['Digital Strategy', 'Technology Assessment', 'Process Optimization', 'Team Training'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full border border-gray-200 dark:border-gray-700 hover:border-transparent hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <Headphones className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Let&apos;s discuss how our services can help you achieve your goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <span>Schedule Consultation</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                <span>View Portfolio</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}