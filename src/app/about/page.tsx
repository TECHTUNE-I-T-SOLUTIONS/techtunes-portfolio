import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Award, Users, Clock, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | TECHTUNE I. T. SOLUTIONS',
  description: 'Learn more about TECHTUNE I. T. SOLUTIONS - Our mission, values, team, and commitment to delivering exceptional IT solutions and services.',
}

export default function AboutPage() {
  const stats = [
    { label: 'Years of Experience', value: '5+', icon: Clock },
    { label: 'Projects Completed', value: '100+', icon: Target },
    { label: 'Happy Clients', value: '50+', icon: Users },
    { label: 'Awards Received', value: '10+', icon: Award },
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'We stay at the forefront of technology trends and continuously innovate to provide cutting-edge solutions.',
      icon: '🚀'
    },
    {
      title: 'Quality',
      description: 'We are committed to delivering high-quality solutions that exceed client expectations and industry standards.',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We believe in working closely with our clients as partners to achieve their business goals.',
      icon: '🤝'
    },
    {
      title: 'Transparency',
      description: 'We maintain open communication and transparency throughout every project lifecycle.',
      icon: '💎'
    }
  ]

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About TECHTUNE I. T. SOLUTIONS
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We are a dynamic IT solutions company dedicated to transforming businesses through innovative technology solutions. 
              Our passion for excellence drives us to deliver cutting-edge software, web applications, and IT consulting services.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center">
                    <IconComponent className="w-8 h-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="relative">
            <Image
              src="/logo.png"
              alt="TECHTUNE I. T. SOLUTIONS Team"
              width={500}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To empower businesses with innovative IT solutions that drive growth, efficiency, and digital transformation. 
                We strive to be the trusted technology partner that helps organizations achieve their goals through cutting-edge software development and strategic IT consulting.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To be a leading IT solutions provider recognized for excellence in innovation, quality, and client satisfaction. 
                We envision a future where technology seamlessly integrates with business processes to create sustainable competitive advantages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Software Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Full-stack development using modern frameworks and technologies to create scalable applications.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Web Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Responsive websites and web applications that provide exceptional user experiences across all devices.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Cloud & IT Consulting</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Strategic IT guidance and cloud solutions to optimize business operations and reduce costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Work Together?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Let&apos;s discuss how we can help transform your business with innovative IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              href="/projects"
              className="border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}