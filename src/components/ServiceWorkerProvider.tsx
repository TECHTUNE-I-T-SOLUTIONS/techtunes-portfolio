'use client'

import { useEffect } from 'react'

export function ServiceWorkerProvider() {
  useEffect(() => {
    // Check if service workers are supported
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('[SW] Service Worker registered successfully:', registration.scope)

            // Check for updates periodically
            setInterval(() => {
              registration.update()
            }, 60000) // Check every minute

            // Listen for updates
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // New service worker is ready
                    console.log('[SW] New Service Worker available')
                    // Optional: Show update notification to user
                  }
                })
              }
            })
          })
          .catch((error) => {
            console.error('[SW] Service Worker registration failed:', error)
          })
      })

      // Handle messages from service worker
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'SW_ACTIVATED') {
          console.log('[SW] Service Worker activated')
        }
      })
    } else {
      console.warn('[SW] Service Workers are not supported in this browser')
    }
  }, [])

  return null
}
