'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github, ExternalLink, Star, GitFork, Calendar, AlertCircle, Loader2, Lock, Eye } from 'lucide-react'
import { mockRepos, type ProcessedRepo } from '@/lib/github'
import WebsitePreviewModal from './WebsitePreviewModal'

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [projects, setProjects] = useState<ProcessedRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showPrivate, setShowPrivate] = useState(false)
  const [previewModal, setPreviewModal] = useState<{
    isOpen: boolean
    websiteUrl: string
    projectTitle: string
  }>({
    isOpen: false,
    websiteUrl: '',
    projectTitle: ''
  })

  const openPreviewModal = (websiteUrl: string, projectTitle: string) => {
    setPreviewModal({
      isOpen: true,
      websiteUrl,
      projectTitle
    })
  }

  const closePreviewModal = () => {
    setPreviewModal({
      isOpen: false,
      websiteUrl: '',
      projectTitle: ''
    })
  }

  useEffect(() => {
    const loadRepositories = async () => {
      setLoading(true)
      setError(null)
      
      try {
        console.log('Fetching repositories from our API...')
        
        // Use our internal API endpoint instead of direct GitHub API calls
        const response = await fetch('/api/github', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`)
        }
        
        const githubRepos = await response.json()
        
        if (Array.isArray(githubRepos) && githubRepos.length > 0) {
          console.log(`Successfully fetched ${githubRepos.length} repositories`)
          setProjects(githubRepos)
        } else {
          console.log('No repositories found, using mock data')
          setProjects(mockRepos)
          setError('No repositories found from GitHub API. Showing sample projects.')
        }
      } catch (err) {
        console.error('Failed to load repositories:', err)
        setError('Failed to load repositories from GitHub API. Showing sample projects.')
        setProjects(mockRepos)
      } finally {
        setLoading(false)
      }
    }

    loadRepositories()
  }, [])

  // Get unique categories from projects
  const getCategories = () => {
    const categories = new Set(projects.map(project => project.category))
    return [
      { id: 'all', name: 'All Projects' },
      ...Array.from(categories).map(cat => ({
        id: cat,
        name: cat.charAt(0).toUpperCase() + cat.slice(1) + ' Development'
      }))
    ]
  }

  const filters = getCategories()

  // Filter projects based on active filter and private repo visibility
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter
    const matchesPrivacy = showPrivate || !project.isPrivate
    return matchesCategory && matchesPrivacy
  })

  if (loading) {
    return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Loading Projects</h2>
            <p className="text-gray-600 dark:text-gray-300">Fetching our latest repositories from GitHub...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
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
          
          {error && (
            <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2" />
                <p className="text-yellow-800 dark:text-yellow-200 text-sm">{error}</p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
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
          </div>

          {/* Private Repository Toggle */}
          <div className="flex justify-center">
            <button
              onClick={() => setShowPrivate(!showPrivate)}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                showPrivate
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-700'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {showPrivate ? <Lock className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
              {showPrivate ? 'Hide Private Repos' : 'Show Private Repos'}
            </button>
          </div>
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
                {/* Project Header */}
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className="text-white text-xl font-bold text-center px-4">{project.title}</div>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.isPrivate && (
                      <div className="bg-red-500 bg-opacity-80 text-white px-2 py-1 rounded-full text-xs flex items-center">
                        <Lock className="w-3 h-3 mr-1" />
                        Private
                      </div>
                    )}
                    <div className="bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      {project.stars}
                    </div>
                    <div className="bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs flex items-center">
                      <GitFork className="w-3 h-3 mr-1" />
                      {project.forks}
                    </div>
                  </div>
                  {project.language && (
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-xs">
                        {project.language}
                      </div>
                    </div>
                  )}
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
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
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
                    {project.live && (
                      <>
                        <button
                          onClick={() => openPreviewModal(project.live!, project.title)}
                          className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm font-medium flex-1"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </button>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm font-medium flex-1"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <div className="text-gray-500 dark:text-gray-400">
              <Github className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p>Try adjusting your filters or check back later for new projects.</p>
            </div>
          </motion.div>
        )}

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
              Live GitHub Integration
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              This portfolio automatically fetches our latest repositories from GitHub, including private repositories.
            </p>
            <a
              href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'techtune-solutions'}`}
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

      {/* Website Preview Modal */}
      <WebsitePreviewModal
        isOpen={previewModal.isOpen}
        onClose={closePreviewModal}
        websiteUrl={previewModal.websiteUrl}
        projectTitle={previewModal.projectTitle}
      />
    </section>
  )
}
