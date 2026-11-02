'use client'

import { useEffect, useState } from 'react'
import { Bot, BookOpen, Loader2, Send, X } from 'lucide-react'
import ReactMarkdown, { type Components } from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

type ProjectDetailsModalProps = {
  isOpen: boolean
  onClose: () => void
  repo: string
  projectTitle: string
}

type ReadmeLinks = { repositoryUrl: string; branch: string; readmePath: string }

function resolveReadmeUrl(value: string | undefined, links: ReadmeLinks | null, kind: 'blob' | 'raw') {
  const localAnchor = value?.match(/^https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?\/?(#[^\s]*)?$/i)
  if (localAnchor) return localAnchor[1] || '#'
  if (!value || !links || /^(?:https?:|mailto:|tel:|#|data:image\/)/i.test(value) || value.startsWith('//')) return value
  try {
    const directory = links.readmePath.includes('/') ? links.readmePath.slice(0, links.readmePath.lastIndexOf('/') + 1) : ''
    const resolved = new URL(value, `https://readme.local/${directory}`)
    if (resolved.origin !== 'https://readme.local') return value
    const filePath = resolved.pathname.slice(1).split('/').map((part) => {
      try { return encodeURIComponent(decodeURIComponent(part)) } catch { return encodeURIComponent(part) }
    }).join('/')
    const branch = links.branch.split('/').map(encodeURIComponent).join('/')
    return `${links.repositoryUrl}/${kind}/${branch}/${filePath}${resolved.search}${resolved.hash}`
  } catch {
    return value
  }
}

function splitCenteredReadme(markdown: string) {
  const blocks: { markdown: string; centered: boolean }[] = []
  const segments = markdown.split(/(```[\s\S]*?```|~~~[\s\S]*?~~~)/g)
  const centeredDiv = /\\?<div\b(?=[^>]*\balign\s*=\s*(?:"center"|'center'|center\b))[^>]*>([\s\S]*?)\\?<\/div\s*>/gi

  for (const segment of segments) {
    if (/^(?:```|~~~)/.test(segment)) {
      blocks.push({ markdown: segment, centered: false })
      continue
    }

    let cursor = 0
    for (const match of segment.matchAll(centeredDiv)) {
      const index = match.index ?? 0
      const before = segment.slice(cursor, index).trim()
      const centered = match[1]?.trim()
      if (before) blocks.push({ markdown: before, centered: false })
      if (centered) blocks.push({ markdown: centered, centered: true })
      cursor = index + match[0].length
    }
    const after = segment.slice(cursor).trim()
    if (after) blocks.push({ markdown: after, centered: false })
  }

  return blocks.length ? blocks : [{ markdown, centered: false }]
}

const readmeComponents: Components = {
  h1: ({ children }) => <h1 className="mb-4 mt-7 border-b border-slate-700 pb-2 text-2xl font-bold text-white first:mt-0">{children}</h1>,
  h2: ({ children }) => <h2 className="mb-3 mt-6 border-b border-slate-800 pb-2 text-xl font-bold text-white">{children}</h2>,
  h3: ({ children }) => <h3 className="mb-2 mt-5 text-lg font-semibold text-white">{children}</h3>,
  h4: ({ children }) => <h4 className="mb-2 mt-4 text-base font-semibold text-white">{children}</h4>,
  p: ({ children }) => <p className="mb-4 leading-7 text-slate-300">{children}</p>,
  ul: ({ children }) => <ul className="mb-4 ml-5 list-disc space-y-1.5 text-slate-300 marker:text-cyan-400">{children}</ul>,
  ol: ({ children }) => <ol className="mb-4 ml-5 list-decimal space-y-1.5 text-slate-300 marker:text-cyan-400">{children}</ol>,
  li: ({ children }) => <li className="pl-1 leading-6">{children}</li>,
  a: ({ href, children }) => {
    const target = resolveReadmeUrl(href, null, 'blob') ?? href
    const external = Boolean(target && /^https?:\/\//i.test(target))
    return <a href={target} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="font-medium text-cyan-300 underline decoration-cyan-800 underline-offset-4 hover:text-cyan-200">{children}</a>
  },
  blockquote: ({ children }) => <blockquote className="mb-4 border-l-4 border-cyan-600 pl-4 italic text-slate-400">{children}</blockquote>,
  hr: () => <hr className="my-6 border-slate-700" />,
  strong: ({ children }) => <strong className="font-semibold text-slate-100">{children}</strong>,
  code: ({ children, className }) => <code className={`${className ?? ''} rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[0.9em] text-cyan-100`}>{children}</code>,
  pre: ({ children }) => <pre className="mb-4 max-w-full overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-4 font-mono text-xs leading-6 text-slate-200 sm:text-sm">{children}</pre>,
  table: ({ children }) => <div className="mb-4 max-w-full overflow-x-auto rounded-lg border border-slate-700"><table className="w-full border-collapse text-left text-sm">{children}</table></div>,
  thead: ({ children }) => <thead className="bg-slate-800 text-slate-100">{children}</thead>,
  th: ({ children }) => <th className="border-b border-slate-700 px-3 py-2 font-semibold">{children}</th>,
  td: ({ children }) => <td className="border-b border-slate-800 px-3 py-2 align-top text-slate-300">{children}</td>,
}

function getReadmeComponents(links: ReadmeLinks | null): Components {
  return {
    ...readmeComponents,
    a: ({ href, children }) => {
      const target = resolveReadmeUrl(href, links, 'blob')
      const external = Boolean(target && /^https?:\/\//i.test(target) && !target.startsWith(links?.repositoryUrl ?? ''))
      return <a href={target} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="font-medium text-cyan-300 underline decoration-cyan-800 underline-offset-4 hover:text-cyan-200">{children}</a>
    },
    img: ({ src, alt }) => {
      const imageSource = typeof src === 'string' ? resolveReadmeUrl(src, links, 'raw') : undefined
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={imageSource} alt={alt ?? ''} loading="lazy" className="my-4 h-auto max-w-full rounded-lg border border-slate-800" />
    },
  }
}

export function ProjectDetailsModal({ isOpen, onClose, repo, projectTitle }: ProjectDetailsModalProps) {
  const [readme, setReadme] = useState('')
  const [readmeLinks, setReadmeLinks] = useState<ReadmeLinks | null>(null)
  const [readmeError, setReadmeError] = useState('')
  const [loadingReadme, setLoadingReadme] = useState(false)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [assistantError, setAssistantError] = useState('')
  const [asking, setAsking] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKeyDown)
    setReadme('')
    setReadmeLinks(null)
    setReadmeError('')
    setQuestion('')
    setAnswer('')
    setAssistantError('')
    setLoadingReadme(true)
    fetch(`/api/github/readme?repo=${encodeURIComponent(repo)}`)
      .then(async (response) => {
        const payload = await response.json() as { readme?: string; error?: string; repositoryUrl?: string; branch?: string; readmePath?: string }
        if (!response.ok) throw new Error(payload.error || 'Could not load project README.')
        setReadme(payload.readme || 'This project does not have a README yet.')
        if (payload.repositoryUrl) setReadmeLinks({ repositoryUrl: payload.repositoryUrl, branch: payload.branch || 'HEAD', readmePath: payload.readmePath || 'README.md' })
      })
      .catch((error: unknown) => setReadmeError(error instanceof Error ? error.message : 'Could not load project README.'))
      .finally(() => setLoadingReadme(false))
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, repo, onClose])

  const askQuestion = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedQuestion = question.trim()
    if (!trimmedQuestion || asking) return
    setAsking(true)
    setAnswer('')
    setAssistantError('')
    try {
      const response = await fetch('/api/project-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repo, question: trimmedQuestion }),
      })
      const payload = await response.json() as { answer?: string; error?: string }
      if (!response.ok) throw new Error(payload.error || 'The project assistant is temporarily unavailable.')
      setAnswer(payload.answer || '')
      setQuestion('')
    } catch (error) {
      setAssistantError(error instanceof Error ? error.message : 'The project assistant is temporarily unavailable.')
    } finally {
      setAsking(false)
    }
  }

  if (!isOpen) return null

  return <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/75 p-0 sm:items-center sm:p-5" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <section role="dialog" aria-modal="true" aria-labelledby="project-details-title" className="flex max-h-[94dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-slate-700 bg-slate-950 text-white shadow-2xl sm:max-h-[88vh] sm:rounded-2xl">
      <header className="flex items-start justify-between gap-3 border-b border-slate-800 px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3"><BookOpen className="h-5 w-5 shrink-0 text-cyan-300" /><div><p className="text-xs uppercase tracking-wider text-cyan-300">Project details</p><h2 id="project-details-title" className="mt-1 text-xl font-bold">{projectTitle}</h2></div></div>
        <button type="button" onClick={onClose} aria-label="Close project details" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-slate-300 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"><X size={20} /></button>
      </header>
      <div className="grid min-h-0 flex-1 grid-rows-[minmax(0,1fr)_auto] md:grid-rows-1 md:grid-cols-2">
        <section className="min-h-0 overflow-y-auto border-b border-slate-800 p-5 md:border-b-0 md:border-r sm:p-6" aria-labelledby="project-readme-heading">
          <h3 id="project-readme-heading" className="mb-3 font-semibold">README</h3>
          {loadingReadme ? <p className="flex items-center gap-2 text-sm text-slate-400"><Loader2 className="h-4 w-4 animate-spin" /> Loading project details…</p> : readmeError ? <p role="alert" className="text-sm leading-6 text-amber-200">{readmeError}</p> : <article className="min-w-0 break-words text-sm">{splitCenteredReadme(readme).map((block, index) => <div key={`${index}-${block.centered ? 'center' : 'content'}`} className={block.centered ? 'text-center' : undefined}><ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]} components={getReadmeComponents(readmeLinks)}>{block.markdown}</ReactMarkdown></div>)}</article>}
        </section>
        <section className="flex min-h-0 flex-col p-5 sm:p-6" aria-labelledby="project-assistant-heading">
          <h3 id="project-assistant-heading" className="flex items-center gap-2 font-semibold"><Bot className="h-5 w-5 text-cyan-300" /> Ask about this project</h3>
          <p className="mt-2 text-sm leading-5 text-slate-400">Answers are based on this project&apos;s README. The assistant will say when the README doesn&apos;t provide enough detail.</p>
          <div className="my-4 min-h-20 max-h-80 flex-1 overflow-y-auto overscroll-contain rounded-xl border border-slate-800 bg-slate-900/70 p-3 text-sm leading-6" aria-live="polite">
            {answer ? <p className="whitespace-pre-wrap break-words text-slate-200">{answer}</p> : assistantError ? <p role="alert" className="text-amber-200">{assistantError}</p> : <p className="text-slate-500">Ask about the project&apos;s purpose, features, or documented technologies.</p>}
          </div>
          <form onSubmit={askQuestion} className="space-y-2">
            <label htmlFor="project-question" className="sr-only">Ask a question about this project</label>
            <textarea id="project-question" value={question} onChange={(event) => setQuestion(event.target.value)} maxLength={1200} rows={3} placeholder="What does this project do?" className="w-full resize-y rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-base text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30" />
            <button type="submit" disabled={asking || question.trim().length < 3} className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-4 font-semibold text-white hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">{asking ? <><Loader2 className="h-4 w-4 animate-spin" /> Thinking…</> : <><Send className="h-4 w-4" /> Ask about project</>}</button>
          </form>
        </section>
      </div>
    </section>
  </div>
}
