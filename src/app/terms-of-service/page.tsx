import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | TECHTUNE I. T. SOLUTIONS',
  description: 'Terms and conditions for using TECHTUNE I. T. SOLUTIONS services and website.',
}

export default function TermsOfServicePage() {
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
          <Scale className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Please read these terms carefully before using our services.
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
              <CheckCircle className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
              Acceptance of Terms
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                By accessing and using the services provided by TECHTUNE I. T. SOLUTIONS (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you accept and agree to be bound by the terms and provisions of this agreement.
              </p>
              <p>
                If you do not agree to abide by the above, please do not use this service. These terms apply to all visitors, users, and others who access or use the service.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
              Description of Services
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                TECHTUNE I. T. SOLUTIONS provides comprehensive IT services including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Custom software development</li>
                <li>Web application development</li>
                <li>Mobile application development</li>
                <li>IT consulting and strategy</li>
                <li>Cloud solutions and migration</li>
                <li>System integration and maintenance</li>
                <li>Technical support and training</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Service Agreements
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Project Scope</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All projects require a signed agreement detailing scope, timeline, and deliverables</li>
                <li>Changes to project scope must be agreed upon in writing</li>
                <li>Additional work beyond the agreed scope will be charged separately</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">Payment Terms</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment schedules are outlined in individual project agreements</li>
                <li>Invoices are due within 30 days of receipt unless otherwise specified</li>
                <li>Late payments may incur interest charges</li>
                <li>Work may be suspended for overdue accounts</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">Delivery Timeline</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Project timelines are estimates based on current scope and requirements</li>
                <li>Delays caused by client feedback or scope changes may extend delivery dates</li>
                <li>We strive to meet all agreed deadlines and will communicate any potential delays promptly</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Intellectual Property Rights
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Client Ownership</h3>
              <p>
                Upon full payment, clients retain ownership of:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Custom code developed specifically for their project</li>
                <li>Content, data, and materials provided by the client</li>
                <li>Final deliverables as specified in the project agreement</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">Our Ownership</h3>
              <p>
                TECHTUNE I. T. SOLUTIONS retains ownership of:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proprietary tools, frameworks, and methodologies</li>
                <li>General knowledge and techniques gained during development</li>
                <li>Rights to use project work for portfolio and marketing purposes (with client consent)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">Third-Party Components</h3>
              <p>
                Some projects may incorporate third-party libraries, frameworks, or services subject to their respective licenses.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Client Responsibilities
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Clients agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information necessary for project completion</li>
                <li>Respond to requests for feedback and approvals in a timely manner</li>
                <li>Provide access to necessary systems, accounts, and resources</li>
                <li>Maintain confidentiality of any proprietary information shared</li>
                <li>Make payments according to the agreed schedule</li>
                <li>Ensure all provided content is original or properly licensed</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
              Limitations and Disclaimers
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Service Availability</h3>
              <p>
                While we strive for 100% uptime, we cannot guarantee uninterrupted service availability. Maintenance, updates, and unforeseen technical issues may cause temporary service interruptions.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">Warranties</h3>
              <p>
                We provide services &quot;as is&quot; and make no warranties, express or implied, regarding:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fitness for a particular purpose</li>
                <li>Compatibility with all systems and platforms</li>
                <li>Freedom from errors or interruptions</li>
                <li>Achievement of specific business results</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">Limitation of Liability</h3>
              <p>
                Our liability for any damages arising from our services is limited to the amount paid for the specific service that gave rise to the claim, not to exceed the total contract value.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Confidentiality
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                We understand the importance of confidentiality and agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep all client information and project details confidential</li>
                <li>Use information only for the purpose of providing agreed services</li>
                <li>Implement appropriate security measures to protect sensitive data</li>
                <li>Require all team members to sign confidentiality agreements</li>
                <li>Return or destroy confidential information upon project completion</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Termination
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Either party may terminate services under the following conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>30 days written notice for convenience</li>
                <li>Immediate termination for material breach of agreement</li>
                <li>Non-payment of invoices beyond agreed terms</li>
                <li>Violation of intellectual property rights</li>
              </ul>
              <p>
                Upon termination, payment is due for all work completed up to the termination date.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Dispute Resolution
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                We prefer to resolve disputes through direct communication. If a dispute cannot be resolved informally:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Disputes will be resolved through binding arbitration</li>
                <li>Arbitration will be conducted by a mutually agreed upon arbitrator</li>
                <li>Each party will bear their own costs unless otherwise determined</li>
                <li>The arbitrator&apos;s decision will be final and binding</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Changes to Terms
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                We reserve the right to modify these terms at any time. Material changes will be communicated to active clients via email. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                For questions about these terms or our services, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <p><strong>TECHTUNE I. T. SOLUTIONS</strong></p>
                <p>Email: <a href="mailto:techtune.it.solutions@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">techtune.it.solutions@gmail.com</a></p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Business Hours: Monday - Friday, 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}