import { NextRequest, NextResponse } from 'next/server'
import { getPublicProjectReadme } from '@/lib/projectReadme'

export async function GET(request: NextRequest) {
  try {
    const repo = request.nextUrl.searchParams.get('repo') ?? ''
    const result = await getPublicProjectReadme(repo)
    if (!result.ok) return NextResponse.json({ error: result.error }, { status: result.status })
    return NextResponse.json({
      readme: result.readme,
      repositoryUrl: result.repositoryUrl,
      branch: result.branch,
      readmePath: result.readmePath,
    }, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch {
    return NextResponse.json({ error: 'README details are temporarily unavailable.' }, { status: 502 })
  }
}
