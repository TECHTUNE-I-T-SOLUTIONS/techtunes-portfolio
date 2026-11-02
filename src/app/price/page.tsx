import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PricingPage } from '@/components/PricingPage'

export const metadata: Metadata = {
  title: 'Software Development Pricing | TechTune I. T. Solutions',
  description: 'Explore starting prices for web, mobile, desktop, backend, cloud, AI, design, and support services.',
}

export default function PriceRoute() {
  return <Suspense fallback={<div className="min-h-screen px-4 py-16 text-center text-slate-300">Loading service catalogue…</div>}><PricingPage /></Suspense>
}
