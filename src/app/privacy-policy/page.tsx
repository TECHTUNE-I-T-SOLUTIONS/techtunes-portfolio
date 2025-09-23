import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | TECHTUNE I. T. SOLUTIONS',
  description: 'Learn how TECHTUNE I. T. SOLUTIONS collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyPage() {
  const lastUpdated = '2025-01-15'

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

      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Last updated: {new Date(lastUpdated).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
              Information We Collect
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personal Information</h3>
              <p>
                When you contact us or use our services, we may collect personal information such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information (email, phone number, mailing address)</li>
                <li>Company information and job title</li>
                <li>Project requirements and technical specifications</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">Technical Information</h3>
              <p>
                We automatically collect certain technical information when you visit our website:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website and search terms used</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Database className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and improve our IT services and solutions</li>
                <li>To communicate with you about projects and services</li>
                <li>To send newsletters and updates (with your consent)</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To comply with legal obligations and protect our rights</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
              Data Protection & Security
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and regular security updates</li>
                <li>Access controls and employee training</li>
                <li>Regular security assessments and monitoring</li>
                <li>Data backup and recovery procedures</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Information Sharing
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With your explicit consent</li>
                <li>With trusted service providers who assist in our operations</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights, property, or safety</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Your Rights & Choices
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at <a href="mailto:techtune.it.solutions@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">techtune.it.solutions@gmail.com</a>.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Cookies & Tracking
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Our website uses cookies and similar technologies to enhance your experience:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="mt-4">
                You can control cookie settings through your browser preferences. For more details, see our <Link href="/cookie-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Cookie Policy</Link>.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Third-Party Services
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Our website may integrate with third-party services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Vercel Analytics:</strong> Website performance monitoring</li>
                <li><strong>GitHub API:</strong> Portfolio project information</li>
                <li><strong>Email Services:</strong> Communication and newsletter delivery</li>
              </ul>
              <p className="mt-4">
                These services have their own privacy policies and we encourage you to review them.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Children&apos;s Privacy
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Changes to This Policy
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                If you have any questions or concerns about this privacy policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <p><strong>TECHTUNE I. T. SOLUTIONS</strong></p>
                <p>Email: <a href="mailto:techtune.it.solutions@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">techtune.it.solutions@gmail.com</a></p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Response Time: Within 48 hours</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}