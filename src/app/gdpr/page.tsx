import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Shield, Users, FileText, Download, Eye, Trash2, Edit, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'GDPR Compliance | TECHTUNE I. T. SOLUTIONS',
  description: 'Learn about GDPR compliance and your data protection rights when using TECHTUNE I. T. SOLUTIONS services.',
}

export default function GDPRPage() {
  const lastUpdated = '2025-01-15'

  const userRights = [
    {
      title: 'Right to Access',
      icon: Eye,
      description: 'Request access to your personal data and information about how we process it.',
      action: 'Request a copy of your data'
    },
    {
      title: 'Right to Rectification',
      icon: Edit,
      description: 'Correct any inaccurate or incomplete personal data we hold about you.',
      action: 'Update your information'
    },
    {
      title: 'Right to Erasure',
      icon: Trash2,
      description: 'Request deletion of your personal data under certain circumstances.',
      action: 'Request data deletion'
    },
    {
      title: 'Right to Data Portability',
      icon: Download,
      description: 'Receive your personal data in a structured, machine-readable format.',
      action: 'Download your data'
    },
    {
      title: 'Right to Object',
      icon: Shield,
      description: 'Object to processing of your personal data for direct marketing or other purposes.',
      action: 'Opt-out of processing'
    },
    {
      title: 'Right to Restrict Processing',
      icon: AlertCircle,
      description: 'Request limitation of processing of your personal data in certain situations.',
      action: 'Restrict processing'
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

      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            GDPR Compliance
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Your data protection rights under the General Data Protection Regulation (GDPR)
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
              <FileText className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
              What is GDPR?
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law that came into effect on May 25, 2018. It governs how organizations collect, process, and store personal data of individuals within the European Union.
              </p>
              <p>
                At TECHTUNE I. T. SOLUTIONS, we are committed to protecting your privacy and ensuring compliance with GDPR requirements, regardless of your location. This page outlines your rights and how we handle your personal data.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Legal Basis for Processing
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                We process your personal data based on the following legal grounds:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Contractual Necessity</h3>
                  <p className="text-sm">Processing necessary to perform our services and fulfill contractual obligations.</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Legitimate Interest</h3>
                  <p className="text-sm">Processing for our legitimate business interests, such as improving our services.</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Consent</h3>
                  <p className="text-sm">Processing based on your explicit consent, which you can withdraw at any time.</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Legal Obligation</h3>
                  <p className="text-sm">Processing required to comply with legal or regulatory requirements.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Users className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
              Your Rights Under GDPR
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="mb-6">
                Under GDPR, you have several important rights regarding your personal data:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userRights.map((right, index) => {
                  const IconComponent = right.icon
                  return (
                    <div key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-3 flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {right.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-3">
                            {right.description}
                          </p>
                          <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
                            {right.action} →
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              How to Exercise Your Rights
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                To exercise any of your GDPR rights, please contact us using the information below. We will respond to your request within 30 days.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Data Protection Contact</h3>
                <div className="space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:privacy@techtune.it.solutions" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@techtune.it.solutions</a></p>
                  <p><strong>Subject Line:</strong> GDPR Data Request</p>
                  <p><strong>Response Time:</strong> Within 30 days</p>
                  <p><strong>Verification:</strong> We may require identity verification for security purposes</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">Information to Include in Your Request</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your full name and contact information</li>
                <li>Specific right you wish to exercise</li>
                <li>Clear description of your request</li>
                <li>Any relevant account information or project details</li>
                <li>Proof of identity (if requested)</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Data Processing Activities
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                We process personal data for the following purposes:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Purpose</th>
                      <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Data Types</th>
                      <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Legal Basis</th>
                      <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Retention</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Service Delivery</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Contact info, project requirements</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Contract</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Project duration + 7 years</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Communication</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Email, phone, correspondence</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Legitimate interest</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">3 years</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Marketing</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Email, preferences</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Consent</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Until withdrawal</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Analytics</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Usage data, IP address</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Legitimate interest</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">24 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Data Transfers
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                We may transfer your personal data outside the European Economic Area (EEA) for service delivery purposes. When we do, we ensure adequate protection through:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>European Commission adequacy decisions</li>
                <li>Standard Contractual Clauses (SCCs)</li>
                <li>Binding Corporate Rules</li>
                <li>Explicit consent for specific transfers</li>
              </ul>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-4">
                <p className="text-sm">
                  <strong>Current Transfers:</strong> We use cloud services provided by Vercel (US) with appropriate safeguards in place.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Data Breach Notification
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                In the unlikely event of a data breach that poses a risk to your rights and freedoms, we will:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Notify the relevant supervisory authority within 72 hours</li>
                <li>Inform affected individuals without undue delay</li>
                <li>Provide clear information about the breach and our response</li>
                <li>Take immediate steps to mitigate any risks</li>
                <li>Implement measures to prevent future breaches</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Complaints and Supervisory Authority
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                If you believe we have not handled your personal data in accordance with GDPR, you have the right to lodge a complaint with a supervisory authority. You can contact:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your local data protection authority</li>
                <li>The Irish Data Protection Commission (our lead supervisory authority)</li>
                <li>Any EU supervisory authority</li>
              </ul>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mt-4">
                <p className="text-sm">
                  <strong>Irish Data Protection Commission:</strong><br />
                  Website: <a href="https://www.dataprotection.ie" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">www.dataprotection.ie</a><br />
                  Email: info@dataprotection.ie<br />
                  Phone: +353 57 868 4757
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Our Data Protection Officer
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                For any GDPR-related questions or to exercise your rights, please contact our Data Protection Officer:
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <p><strong>Data Protection Officer</strong></p>
                <p><strong>TECHTUNE I. T. SOLUTIONS</strong></p>
                <p>Email: <a href="mailto:dpo@techtune.it.solutions" className="text-blue-600 dark:text-blue-400 hover:underline">dpo@techtune.it.solutions</a></p>
                <p>Subject: GDPR Inquiry</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Response Time: Within 30 days</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Related Policies
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                For more information about our data practices, please review:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link> - Complete privacy practices</li>
                <li><Link href="/cookie-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Cookie Policy</Link> - How we use cookies and tracking</li>
                <li><Link href="/terms-of-service" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</Link> - Service terms and conditions</li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}