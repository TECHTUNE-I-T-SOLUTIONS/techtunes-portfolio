import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Cookie, Settings, BarChart, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie Policy | TECHTUNE I. T. SOLUTIONS',
  description: 'Learn about how TECHTUNE I. T. SOLUTIONS uses cookies and similar technologies on our website.',
}

export default function CookiePolicyPage() {
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
          <Cookie className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Learn about how we use cookies and similar technologies to enhance your experience on our website.
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What Are Cookies?
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners about user behavior and preferences.
              </p>
              <p>
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and provide personalized content. This policy explains what cookies we use, why we use them, and how you can control them.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
              Types of Cookies We Use
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Essential Cookies</h3>
                <p className="mb-2"><strong>Purpose:</strong> Required for basic website functionality</p>
                <p className="mb-2"><strong>Duration:</strong> Session and persistent</p>
                <p className="mb-2"><strong>Can be disabled:</strong> No - these are necessary for the website to function</p>
                <p><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Authentication and security tokens</li>
                  <li>Shopping cart contents</li>
                  <li>Language and accessibility preferences</li>
                  <li>CSRF protection tokens</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <BarChart className="w-5 h-5 mr-2" />
                  Analytics Cookies
                </h3>
                <p className="mb-2"><strong>Purpose:</strong> Help us understand how visitors interact with our website</p>
                <p className="mb-2"><strong>Duration:</strong> Up to 2 years</p>
                <p className="mb-2"><strong>Can be disabled:</strong> Yes</p>
                <p><strong>Information collected:</strong></p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Pages visited and time spent on each page</li>
                  <li>Traffic sources and referral websites</li>
                  <li>Device and browser information</li>
                  <li>Geographic location (country/region level)</li>
                </ul>
                <p className="mt-3"><strong>Service:</strong> Vercel Analytics - privacy-focused analytics without personal data collection</p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Preference Cookies
                </h3>
                <p className="mb-2"><strong>Purpose:</strong> Remember your preferences and settings</p>
                <p className="mb-2"><strong>Duration:</strong> Up to 1 year</p>
                <p className="mb-2"><strong>Can be disabled:</strong> Yes</p>
                <p><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Theme preference (light/dark mode)</li>
                  <li>Language settings</li>
                  <li>Font size and accessibility options</li>
                  <li>Cookie consent preferences</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Third-Party Cookies
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                We may use third-party services that set their own cookies. These services include:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Vercel Analytics</h4>
                  <p className="text-sm">Privacy-focused web analytics service</p>
                  <p className="text-sm">Privacy Policy: <a href="https://vercel.com/legal/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a></p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">GitHub Integration</h4>
                  <p className="text-sm">For displaying repository information</p>
                  <p className="text-sm">Privacy Policy: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Privacy Statement</a></p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              How to Control Cookies
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                You have several options to control or limit how we and our partners use cookies:
              </p>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">Browser Settings</h3>
              <p>
                Most web browsers allow you to control cookies through their settings preferences. You can:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Block all cookies</li>
                <li>Block third-party cookies only</li>
                <li>Delete cookies when you close your browser</li>
                <li>Get notified when a website tries to set a cookie</li>
              </ul>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
                <p className="text-sm">
                  <strong>Note:</strong> Blocking or deleting cookies may affect your experience on our website and prevent some features from working properly.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">Browser-Specific Instructions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Chrome</h4>
                  <p className="text-sm">Settings → Privacy and security → Cookies and other site data</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Firefox</h4>
                  <p className="text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Safari</h4>
                  <p className="text-sm">Preferences → Privacy → Manage Website Data</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Edge</h4>
                  <p className="text-sm">Settings → Cookies and site permissions → Cookies and site data</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Cookie Consent
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                When you first visit our website, we may display a cookie consent banner. This allows you to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your cookie preferences</li>
                <li>Learn more about our cookie usage</li>
              </ul>
              <p>
                You can change your consent preferences at any time by visiting our cookie settings page or clearing your browser cookies.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Data Retention
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                We retain cookie data for different periods depending on the type of cookie:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Essential cookies:</strong> Kept for the duration of your session</li>
                <li><strong>Preference cookies:</strong> Stored for up to 12 months</li>
                <li><strong>Analytics cookies:</strong> Stored for up to 24 months</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Updates to This Policy
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                We may update this cookie policy from time to time to reflect changes in our practices or applicable laws. When we make changes, we will update the &quot;Last updated&quot; date at the top of this policy.
              </p>
              <p>
                For significant changes, we may provide additional notice through our website or email notifications.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                If you have any questions about our use of cookies or this cookie policy, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <p><strong>TECHTUNE I. T. SOLUTIONS</strong></p>
                <p>Email: <a href="mailto:techtune.it.solutions@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">techtune.it.solutions@gmail.com</a></p>
                <p>Subject: Cookie Policy Inquiry</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
              <p>
                For more information about our privacy practices, please see our <Link href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}