'use client'

import { useState } from 'react'
import { Download, FileText, CheckCircle, AlertCircle } from 'lucide-react'

interface ResumeDownloadProps {
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export function ResumeDownload({ 
  className = '', 
  variant = 'primary',
  size = 'md'
}: ResumeDownloadProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleDownload = async () => {
    setIsDownloading(true)
    setDownloadStatus('idle')
    
    try {
      // Fetch resume data from API
      const response = await fetch('/api/resume')
      
      if (!response.ok) {
        throw new Error('Failed to generate resume')
      }
      
      const data = await response.json()
      
      // Simulate PDF generation delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Create a mock PDF blob (in production, this would be actual PDF data)
      const pdfContent = generateMockPDF(data.data)
      const blob = new Blob([pdfContent], { type: 'application/pdf' })
      
      // Create download link
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'TECHTUNE_IT_Solutions_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      
      // Cleanup
      window.URL.revokeObjectURL(url)
      document.body.removeChild(link)
      
      setDownloadStatus('success')
      
      // Reset success state after 3 seconds
      setTimeout(() => setDownloadStatus('idle'), 3000)
      
    } catch (error) {
      console.error('Download failed:', error)
      setDownloadStatus('error')
      
      // Reset error state after 5 seconds
      setTimeout(() => setDownloadStatus('idle'), 5000)
    } finally {
      setIsDownloading(false)
    }
  }

  const generateMockPDF = (resumeData: {
    personalInfo: {
      name: string
      title: string
      email: string
      phone: string
    }
    summary: string
  }) => {
    // This is a mock PDF content. In production, you would use a proper PDF library
    return `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 200
>>
stream
BT
/F1 12 Tf
50 750 Td
(${resumeData.personalInfo.name}) Tj
0 -20 Td
(${resumeData.personalInfo.title}) Tj
0 -20 Td
(${resumeData.personalInfo.email}) Tj
0 -20 Td
(${resumeData.personalInfo.phone}) Tj
0 -40 Td
(${resumeData.summary}) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000053 00000 n 
0000000110 00000 n 
0000000271 00000 n 
0000000522 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
588
%%EOF`
  }

  const getButtonStyles = () => {
    const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
    
    const sizeStyles = {
      sm: "px-3 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    }
    
    const variantStyles = {
      primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
      secondary: "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500", 
      outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
    }
    
    return `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`
  }

  const getIcon = () => {
    if (downloadStatus === 'success') {
      return <CheckCircle className="w-5 h-5" />
    }
    if (downloadStatus === 'error') {
      return <AlertCircle className="w-5 h-5" />
    }
    if (isDownloading) {
      return <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
    }
    return <Download className="w-5 h-5" />
  }

  const getButtonText = () => {
    if (downloadStatus === 'success') {
      return 'Downloaded!'
    }
    if (downloadStatus === 'error') {
      return 'Download Failed'
    }
    if (isDownloading) {
      return 'Generating PDF...'
    }
    return 'Download Resume'
  }

  const getButtonColor = () => {
    if (downloadStatus === 'success') {
      return 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
    }
    if (downloadStatus === 'error') {
      return 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
    }
    return ''
  }

  return (
    <div className="relative">
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className={`${getButtonStyles()} ${getButtonColor()}`}
        title="Download professional resume as PDF"
        aria-label="Download resume"
      >
        {getIcon()}
        {getButtonText()}
      </button>
      
      {downloadStatus === 'error' && (
        <div className="absolute top-full left-0 mt-2 p-2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-sm rounded-lg border border-red-200 dark:border-red-800 whitespace-nowrap">
          <div className="flex items-center gap-1">
            <FileText className="w-4 h-4" />
            Failed to download. Please try again.
          </div>
        </div>
      )}
      
      {downloadStatus === 'success' && (
        <div className="absolute top-full left-0 mt-2 p-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-lg border border-green-200 dark:border-green-800 whitespace-nowrap">
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4" />
            Resume downloaded successfully!
          </div>
        </div>
      )}
    </div>
  )
}