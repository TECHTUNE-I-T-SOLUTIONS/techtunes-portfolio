'use client'

import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check, ChevronDown, Cloud, Code2, Globe, Monitor, Palette, Search, Smartphone, Sparkles, Wrench, X } from 'lucide-react'
import Link from 'next/link'
import { pricingCategories, pricingServices, type PricingOption, type PricingService } from '@/data/pricing'
import { BUSINESS_WHATSAPP_NUMBER } from '@/lib/contact'

const iconMap = { globe: Globe, smartphone: Smartphone, monitor: Monitor, code: Code2, cloud: Cloud, sparkles: Sparkles, palette: Palette, wrench: Wrench } as const
const money = (amount: number) => `$${amount.toLocaleString('en-US')} USD`

export function PricingPage() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category')
  const [category, setCategory] = useState<string>(pricingCategories.includes(initialCategory as typeof pricingCategories[number]) ? initialCategory! : 'All Services')
  const [query, setQuery] = useState('')
  const [activeService, setActiveService] = useState<PricingService | null>(null)
  const [selectedOption, setSelectedOption] = useState<PricingOption | null>(null)
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const [projectDescription, setProjectDescription] = useState('')
  const [termsOpen, setTermsOpen] = useState(false)

  useEffect(() => {
    const url = new URL(window.location.href)
    if (category === 'All Services') url.searchParams.delete('category')
    else url.searchParams.set('category', category)
    window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`)
  }, [category])

  useEffect(() => {
    if (!activeService) return
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') closePanel() }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = '' }
  }, [activeService])

  const filteredServices = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase()
    return pricingServices.filter((service) => {
      if (category !== 'All Services' && service.category !== category) return false
      if (!needle) return true
      const searchable = [service.name, service.category, service.description, ...service.keywords,
        ...service.options.flatMap((item) => [item.name, item.description, ...item.features]),
        ...service.addOns.flatMap((item) => [item.name, item.description])].join(' ').toLocaleLowerCase()
      return searchable.includes(needle)
    })
  }, [category, query])

  const openService = (service: PricingService) => {
    setActiveService(service)
    setSelectedOption(service.options[0])
    setSelectedAddOns([])
    setProjectDescription('')
  }
  function closePanel() { setActiveService(null); setSelectedOption(null); setSelectedAddOns([]) }

  const chosenAddOns = activeService?.addOns.filter((item) => selectedAddOns.includes(item.id)) ?? []
  const estimate = selectedOption ? selectedOption.price + chosenAddOns.reduce((sum, item) => sum + item.price, 0) : 0
  const requiresAssessment = Boolean(selectedOption?.customQuote || chosenAddOns.some((item) => item.price === 0))
  const quoteHref = activeService && selectedOption
    ? `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent([
      'Hi TechTune I. T. Solutions, I would like a quotation.',
      `Service: ${activeService.name}`,
      `Package: ${selectedOption.name}`,
      `Selected features: ${chosenAddOns.length ? chosenAddOns.map((item) => item.name).join(', ') : 'None'}`,
      `Estimated starting price: ${money(estimate)}${selectedOption.recurring ? ' per month' : ''}${requiresAssessment ? ' (subject to project assessment)' : ''}`,
      projectDescription.trim() ? `Project details: ${projectDescription.trim()}` : '',
    ].filter(Boolean).join('\n'))}`
    : '#'

  const toggleAddOn = (id: string) => setSelectedAddOns((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])

  return (
    <div className="min-h-screen text-white">
      <header className="mx-auto w-full max-w-7xl px-4 pb-5 pt-[max(1.5rem,env(safe-area-inset-top))] sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"><ArrowLeft size={17} /> Back to portfolio</Link>
      </header>
      <main className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <section className="pb-9 pt-5 sm:pb-12 sm:pt-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">TechTune I. T. Solutions</p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">Clear starting prices.<br className="hidden sm:block" /> Software built around your needs.</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">Explore services, compare options, and shape an estimate. Every project is scoped with you before a final quotation.</p>
          <a href="#catalogue" className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-5 font-semibold text-white shadow-lg shadow-blue-950/30 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">Explore services <ArrowRight size={18} /></a>
        </section>

        <section id="catalogue" aria-label="Service catalogue" className="scroll-mt-5">
          <div className="mb-5 flex flex-col gap-4">
            <label className="relative block w-full sm:max-w-xl">
              <Search aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={19} />
              <span className="sr-only">Search services, features, or keywords</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search services, features, or keywords" className="min-h-12 w-full rounded-xl border border-slate-700 bg-slate-900/90 pl-12 pr-4 text-base text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30" />
            </label>
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0" aria-label="Filter by service category">
              {pricingCategories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${category === item ? 'border-cyan-400 bg-cyan-400/15 text-cyan-100' : 'border-slate-700 bg-slate-900/70 text-slate-300 hover:border-slate-500 hover:text-white'}`}>{item}</button>)}
            </div>
          </div>
          <div className="mb-4 flex items-center justify-between gap-3 text-sm text-slate-400" aria-live="polite">
            <span>{filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'} found</span>
            {(query || category !== 'All Services') && <button type="button" onClick={() => { setQuery(''); setCategory('All Services') }} className="min-h-10 rounded-lg px-3 font-semibold text-cyan-300 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">Clear filters</button>}
          </div>

          {filteredServices.length ? <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap]
              const lowest = Math.min(...service.options.map((item) => item.price))
              const monthly = service.options.every((item) => item.recurring)
              return <article key={service.id} className="flex min-h-64 flex-col rounded-2xl border border-slate-700/80 bg-slate-900/80 p-5 shadow-lg shadow-black/10 sm:p-6">
                <div className="mb-4 flex items-start justify-between gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-cyan-300"><Icon size={22} aria-hidden="true" /></div><span className="max-w-[65%] text-right text-xs font-medium leading-5 text-slate-400">{service.category}</span></div>
                <h2 className="text-xl font-semibold leading-snug">{service.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-300">{service.description}</p>
                <div className="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-slate-800 pt-4"><p className="text-xs text-slate-400">Starting from <span className="mt-0.5 block text-xl font-bold text-white">{money(lowest)}{monthly && <span className="text-xs font-medium text-slate-300"> / month</span>}</span></p><button type="button" onClick={() => openService(service)} className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-semibold hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">Explore options <ArrowRight size={16} /></button></div>
              </article>
            })}
          </div> : <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/50 px-5 py-12 text-center"><Search className="mx-auto mb-3 text-slate-500" size={28} /><h2 className="text-lg font-semibold">No matching services</h2><p className="mt-2 text-sm text-slate-400">Try a different search or clear your filters.</p><button type="button" onClick={() => { setQuery(''); setCategory('All Services') }} className="mt-4 min-h-11 rounded-lg px-4 font-semibold text-cyan-300 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">Clear filters</button></div>}
        </section>

        <section className="mt-10 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/70">
          <button type="button" aria-expanded={termsOpen} onClick={() => setTermsOpen((open) => !open)} className="flex min-h-14 w-full items-center justify-between gap-3 px-5 py-4 text-left font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-cyan-300 sm:px-6">Pricing terms <ChevronDown size={19} className={`shrink-0 transition-transform ${termsOpen ? 'rotate-180' : ''}`} /></button>
          {termsOpen && <div className="border-t border-slate-700 px-5 py-5 text-sm leading-6 text-slate-300 sm:px-6"><p>All prices are in USD and are starting estimates, not guaranteed final quotations. Final pricing depends on project scope and complexity. Hosting, domains, third-party services, AI usage, and external subscriptions are excluded unless specified.</p><p className="mt-3">Payment milestones are agreed before work begins. Fixed-price projects include two reasonable revision rounds unless otherwise agreed; new features and substantial changes are quoted separately. A 14-day correction period applies where agreed and covers qualifying defects, not new features. Ongoing maintenance is separate unless explicitly included. Quotations are generally valid for 14 calendar days unless otherwise stated.</p><p className="mt-3 text-slate-400">These notes are a pricing guide, not a signed contract. Project terms are confirmed in the individual quotation.</p></div>}
        </section>
        <p className="mt-6 text-center text-sm text-slate-400">Have a project in mind? <Link href="/contact" className="font-semibold text-cyan-300 underline decoration-cyan-700 underline-offset-4 hover:text-cyan-200">Talk to us</Link></p>
      </main>

      {activeService && selectedOption && <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-5" onMouseDown={(event) => { if (event.target === event.currentTarget) closePanel() }}>
        <section role="dialog" aria-modal="true" aria-labelledby="pricing-dialog-title" className="flex max-h-[94dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-slate-700 bg-slate-950 shadow-2xl sm:max-h-[88vh] sm:rounded-2xl">
          <div className="flex items-start justify-between gap-4 border-b border-slate-800 px-5 py-4 sm:px-6"><div><p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">{activeService.category}</p><h2 id="pricing-dialog-title" className="mt-1 text-xl font-bold sm:text-2xl">{activeService.name}</h2></div><button type="button" onClick={closePanel} aria-label="Close service options" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"><X size={21} /></button></div>
          <div className="overflow-y-auto overscroll-contain px-5 py-5 sm:px-6">
            <p className="mb-4 text-sm leading-6 text-slate-300">{activeService.description}</p>
            <fieldset><legend className="mb-2 text-sm font-semibold text-white">Choose an option</legend><div className="space-y-2">{activeService.options.map((item) => <label key={item.id} className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition-colors ${selectedOption.id === item.id ? 'border-cyan-400 bg-cyan-400/10' : 'border-slate-700 bg-slate-900 hover:border-slate-500'}`}><input type="radio" name="pricing-option" value={item.id} checked={selectedOption.id === item.id} onChange={() => { setSelectedOption(item); setSelectedAddOns([]) }} className="mt-1 h-4 w-4 accent-cyan-400" /><span className="min-w-0 flex-1"><span className="flex flex-wrap items-center justify-between gap-1"><span className="font-semibold text-white">{item.name}</span><span className="font-bold text-cyan-200">{money(item.price)}{item.recurring ? ' / month' : ' starting'}</span></span><span className="mt-1 block text-sm leading-5 text-slate-300">{item.description}</span></span></label>)}</div></fieldset>
            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/70 p-4"><h3 className="text-sm font-semibold">Included in this option</h3><ul className="mt-2 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">{selectedOption.features.map((feature) => <li key={feature} className="flex gap-2"><Check className="mt-0.5 shrink-0 text-emerald-400" size={16} />{feature}</li>)}</ul><p className="mt-3 text-xs leading-5 text-slate-400"><span className="font-semibold text-slate-300">Estimated delivery:</span> {selectedOption.duration}. <span className="font-semibold text-slate-300">Excludes:</span> {selectedOption.exclusions}</p></div>
            {activeService.addOns.length > 0 && <fieldset className="mt-5"><legend className="mb-2 text-sm font-semibold">Optional additions</legend><div className="space-y-2">{activeService.addOns.map((item) => <label key={item.id} className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-3.5 py-2.5 hover:border-slate-600"><input type="checkbox" checked={selectedAddOns.includes(item.id)} onChange={() => toggleAddOn(item.id)} className="h-4 w-4 accent-cyan-400" /><span className="min-w-0 flex-1"><span className="flex flex-wrap justify-between gap-x-2 text-sm font-medium"><span>{item.name}</span><span className="text-cyan-200">{item.price ? `+ ${money(item.price)}` : 'Custom quote'}</span></span><span className="mt-0.5 block text-xs leading-5 text-slate-400">{item.description}</span></span></label>)}</div></fieldset>}
            {selectedAddOns.length > 0 && <div className="mt-4 rounded-xl bg-slate-900 p-4"><div className="flex items-center justify-between gap-3"><h3 className="text-sm font-semibold">Selected additions</h3><button type="button" onClick={() => setSelectedAddOns([])} className="min-h-10 px-2 text-sm text-cyan-300 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">Remove all</button></div><ul className="mt-1 space-y-1 text-sm text-slate-300">{chosenAddOns.map((item) => <li key={item.id} className="flex justify-between gap-2"><span>{item.name}</span><button type="button" onClick={() => toggleAddOn(item.id)} aria-label={`Remove ${item.name}`} className="min-h-8 px-2 text-xs text-slate-400 underline hover:text-white">Remove</button></li>)}</ul></div>}
            <label className="mt-5 block text-sm font-semibold" htmlFor="pricing-project-details">Project details <span className="font-normal text-slate-400">(optional)</span></label><textarea id="pricing-project-details" rows={3} value={projectDescription} onChange={(event) => setProjectDescription(event.target.value)} placeholder="What are you hoping to build?" className="mt-2 w-full resize-y rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-3 text-base text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30" />
          </div>
          <div className="border-t border-slate-800 bg-slate-950 px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 sm:px-6"><div className="flex flex-wrap items-end justify-between gap-2"><p className="text-xs leading-5 text-slate-400">Estimated starting price{selectedOption.recurring ? ' / month' : ''}<span className="mt-0.5 block text-xl font-bold text-white">{money(estimate)}{selectedOption.recurring ? ' / month' : ''}</span></p><button type="button" onClick={() => { setSelectedOption(activeService.options[0]); setSelectedAddOns([]); setProjectDescription('') }} className="min-h-10 rounded-lg px-3 text-sm text-slate-300 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">Reset</button></div>{requiresAssessment && <p className="mt-2 text-xs leading-5 text-amber-200">Your selection needs a project assessment. The estimate is a starting point, not a final quotation.</p>}<a href={quoteHref} target="_blank" rel="noreferrer" className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-4 text-center font-semibold text-white hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">Request a quotation on WhatsApp <ArrowRight size={17} /></a><p className="mt-2 text-center text-[11px] leading-4 text-slate-500">This opens WhatsApp with a draft message. Review and send it there.</p></div>
        </section>
      </div>}
    </div>
  )
}
