// Environment configuration for production deployment
export const config = {
  github: {
    username: process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'techtune-solutions',
    token: process.env.GITHUB_TOKEN,
    apiUrl: 'https://api.github.com'
  },
  app: {
    name: 'TECHTUNE I. T. SOLUTIONS',
    environment: process.env.NODE_ENV || 'development',
    isProduction: process.env.NODE_ENV === 'production'
  }
}

// Validate required environment variables
export function validateEnvironment() {
  const warnings: string[] = []
  
  if (!config.github.username) {
    warnings.push('NEXT_PUBLIC_GITHUB_USERNAME not set - using fallback')
  }
  
  if (!config.github.token && !config.app.isProduction) {
    warnings.push('GITHUB_TOKEN not set - private repositories will not be accessible')
  }
  
  return {
    isValid: warnings.length === 0,
    warnings
  }
}

export default config