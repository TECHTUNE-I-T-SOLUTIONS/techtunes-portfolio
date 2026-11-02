const repoPattern = /^[a-zA-Z0-9._-]{1,100}$/

export async function getPublicProjectReadme(repoName: string) {
  if (!repoPattern.test(repoName)) {
    return { ok: false as const, status: 400, error: 'Invalid repository name.' }
  }

  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME
  if (!username) {
    return { ok: false as const, status: 503, error: 'Project details are temporarily unavailable.' }
  }

  const headers = new Headers({
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'TECHTUNE-Portfolio',
  })
  if (process.env.GITHUB_TOKEN) headers.set('Authorization', `Bearer ${process.env.GITHUB_TOKEN}`)

  const repoResponse = await fetch(`https://api.github.com/repos/${encodeURIComponent(username)}/${encodeURIComponent(repoName)}`, {
    headers,
    cache: 'no-store',
  })
  if (!repoResponse.ok) return { ok: false as const, status: repoResponse.status === 404 ? 404 : 502, error: 'Project details are not available.' }

  const repo = await repoResponse.json() as { private?: boolean; default_branch?: string; html_url?: string }
  if (repo.private) return { ok: false as const, status: 403, error: 'README details are available for public projects only.' }

  const readmeHeaders = new Headers(headers)
  readmeHeaders.set('Accept', 'application/vnd.github+json')
  const readmeResponse = await fetch(`https://api.github.com/repos/${encodeURIComponent(username)}/${encodeURIComponent(repoName)}/readme`, {
    headers: readmeHeaders,
    cache: 'no-store',
  })
  if (readmeResponse.status === 404) return { ok: true as const, readme: 'This project does not have a README yet.', repositoryUrl: repo.html_url ?? `https://github.com/${username}/${repoName}`, branch: repo.default_branch ?? 'HEAD', readmePath: 'README.md' }
  if (!readmeResponse.ok) return { ok: false as const, status: 502, error: 'README details are temporarily unavailable.' }

  const readmeFile = await readmeResponse.json() as { content?: string; encoding?: string; path?: string }
  const content = readmeFile.content ?? ''
  const readme = (readmeFile.encoding === 'base64' ? Buffer.from(content, 'base64').toString('utf8') : content).slice(0, 20_000)
  return {
    ok: true as const,
    readme: readme || 'This project does not have a README yet.',
    repositoryUrl: repo.html_url ?? `https://github.com/${username}/${repoName}`,
    branch: repo.default_branch ?? 'HEAD',
    readmePath: readmeFile.path ?? 'README.md',
  }
}
