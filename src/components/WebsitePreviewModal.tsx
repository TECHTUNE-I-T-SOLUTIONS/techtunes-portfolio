'use client'

import { useState, useEffect } from 'react'
import { X, ExternalLink, AlertCircle } from 'lucide-react'

interface WebsitePreviewModalProps {
  isOpen: boolean
  onClose: () => void
  websiteUrl: string
  projectTitle: string
}

export default function WebsitePreviewModal({ 
  isOpen, 
  onClose, 
  websiteUrl, 
  projectTitle 
}: WebsitePreviewModalProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
      setHasError(false)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      // Restore body scroll when modal is closed
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  const openInNewTab = () => {
    window.open(websiteUrl, '_blank', 'noopener,noreferrer')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-6xl mx-4 h-[90vh] bg-white dark:bg-black rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center space-x-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">
              {projectTitle} - Live Preview
            </h3>
            <button
              onClick={openInNewTab}
              className="flex items-center space-x-1 px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open</span>
            </button>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
            title="Close preview"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="relative h-full">
          {/* Loading State */}
          {isLoading && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400">Loading website preview...</p>
              </div>
            </div>
          )}

          {/* Error State */}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
              <div className="text-center max-w-md mx-auto p-6">
                <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Preview Not Available
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  This website cannot be displayed in a preview frame. This might be due to security restrictions or the site&apos;s configuration.
                </p>
                <button
                  onClick={openInNewTab}
                  className="flex items-center space-x-2 mx-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit Website</span>
                </button>
              </div>
            </div>
          )}

          {/* Iframe */}
          <iframe
            src={websiteUrl}
            className="w-full h-full border-0"
            title={`${projectTitle} Live Preview`}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}