import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ProjectsSection } from '@/components/ProjectsSection'

export const metadata: Metadata = {
  title: 'Projects | TECHTUNE I. T. SOLUTIONS',
  description: 'Explore our portfolio of successful projects including web applications, mobile apps, and IT solutions.',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our portfolio of innovative solutions that have helped businesses achieve their goals. 
            From web applications to mobile apps and IT consulting projects, explore the diverse range of 
            successful implementations we&apos;ve delivered.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <ProjectsSection />

      {/* CTA Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Let&apos;s collaborate to bring your ideas to life with our expertise and innovative approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/about"
              className="border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}