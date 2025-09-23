import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | TECHTUNE I. T. SOLUTIONS',
  description: 'Stay updated with the latest insights, tutorials, and industry trends from our technology experts.',
}

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Explore the emerging technologies and methodologies that are shaping the future of web development, from AI integration to advanced frameworks.',
    content: 'As we move into 2025, the web development landscape continues to evolve at an unprecedented pace...',
    author: 'TECHTUNE Team',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Web Development',
    image: '/blog/web-development-trends.jpg',
    featured: true
  }

  const blogPosts = [
    {
      id: 2,
      title: 'Building Scalable Applications with Next.js 15',
      excerpt: 'Learn how to leverage the latest features in Next.js 15 to build high-performance, scalable web applications.',
      author: 'TECHTUNE Team',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'React',
      image: '/blog/nextjs-guide.jpg'
    },
    {
      id: 3,
      title: 'Cloud Migration Strategy: A Complete Guide',
      excerpt: 'Discover best practices for migrating your applications to the cloud while ensuring security and minimal downtime.',
      author: 'TECHTUNE Team',
      date: '2025-01-05',
      readTime: '10 min read',
      category: 'Cloud Computing',
      image: '/blog/cloud-migration.jpg'
    },
    {
      id: 4,
      title: 'TypeScript Best Practices for Large Teams',
      excerpt: 'Effective strategies for implementing TypeScript in large development teams and maintaining code quality.',
      author: 'TECHTUNE Team',
      date: '2024-12-28',
      readTime: '7 min read',
      category: 'TypeScript',
      image: '/blog/typescript-teams.jpg'
    },
    {
      id: 5,
      title: 'Mobile App Development: Native vs Cross-Platform',
      excerpt: 'Compare the pros and cons of native and cross-platform mobile development approaches for your next project.',
      author: 'TECHTUNE Team',
      date: '2024-12-20',
      readTime: '9 min read',
      category: 'Mobile Development',
      image: '/blog/mobile-development.jpg'
    },
    {
      id: 6,
      title: 'Cybersecurity Essentials for Small Businesses',
      excerpt: 'Essential cybersecurity measures every small business should implement to protect their digital assets.',
      author: 'TECHTUNE Team',
      date: '2024-12-15',
      readTime: '5 min read',
      category: 'Security',
      image: '/blog/cybersecurity.jpg'
    },
    {
      id: 7,
      title: 'Database Design Patterns for Modern Applications',
      excerpt: 'Explore database design patterns that can improve performance and maintainability of your applications.',
      author: 'TECHTUNE Team',
      date: '2024-12-10',
      readTime: '8 min read',
      category: 'Database',
      image: '/blog/database-design.jpg'
    }
  ]

  const categories = [
    'All Posts',
    'Web Development',
    'Mobile Development',
    'Cloud Computing',
    'Security',
    'Database',
    'React',
    'TypeScript'
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

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
            Tech Insights & Updates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest insights, tutorials, and industry analysis. 
            Discover emerging trends and best practices in technology and software development.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-16">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Article</h2>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-square bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Featured Image</span>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(featuredPost.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Article Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </div>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm flex items-center gap-1 transition-colors">
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest articles, tutorials, and industry insights directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Want to Collaborate?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Have an idea for a guest post or want to discuss a project? We&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              href="/about"
              className="border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}