import { NextResponse } from 'next/server'

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  created_at: string;
  private: boolean;
  archived: boolean;
  disabled: boolean;
  fork: boolean;
}

interface ProcessedRepo {
  id: number;
  title: string;
  description: string;
  github: string;
  live: string | null;
  stars: number;
  forks: number;
  updated: string;
  technologies: string[];
  category: string;
  language: string | null;
  isPrivate: boolean;
}

// Maps my programming languages to categories
const languageToCategory: Record<string, string> = {
  'TypeScript': 'web',
  'JavaScript': 'web',
  'HTML': 'web',
  'CSS': 'web',
  'Python': 'backend',
  'Java': 'backend',
  'C#': 'backend',
  'C++': 'system',
  'Go': 'backend',
  'Rust': 'system',
  'PHP': 'web',
  'Ruby': 'backend',
  'Swift': 'mobile',
  'Kotlin': 'mobile',
  'Dart': 'mobile',
  'Shell': 'devops',
};

function getCategory(language: string | null, topics: string[]): string {
  const topicCategories: Record<string, string> = {
    'web': 'web',
    'mobile': 'mobile',
    'backend': 'backend',
    'frontend': 'web',
    'api': 'backend',
    'database': 'backend',
    'machine-learning': 'ai',
    'security': 'security',
    'iot': 'iot',
    'blockchain': 'blockchain',
    'game': 'game',
    'cli': 'tool',
    'library': 'library',
    'framework': 'web',
    'cloud': 'cloud',
    'devops': 'devops',
  };

  for (const topic of topics) {
    if (topicCategories[topic.toLowerCase()]) {
      return topicCategories[topic.toLowerCase()];
    }
  }

  if (language && languageToCategory[language]) {
    return languageToCategory[language];
  }

  return 'other';
}

function getTechnologies(language: string | null, topics: string[]): string[] {
  const technologies = new Set<string>();

  if (language) {
    technologies.add(language);
  }

  const techTopics = topics.filter(topic =>
    !['portfolio', 'personal', 'project', 'demo', 'example', 'test', 'learning'].includes(topic.toLowerCase())
  );

  techTopics.forEach(topic => technologies.add(topic));

  return Array.from(technologies).slice(0, 6);
}

export async function GET() {
  try {
    // Safely access environment variables - no secrets hardcoded
    const username = process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_TOKEN;

    if (!username) {
      return NextResponse.json(
        { error: 'GITHUB_USERNAME environment variable is not set.' },
        { status: 500 }
      );
    }

    const headers: HeadersInit = {
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'TECHTUNE-Portfolio',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    // Secure API endpoint configuration using environment variables only
    const apiUrl = token
      ? `https://api.github.com/user/repos?sort=updated&per_page=100&affiliation=owner`
      : `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=all`;

    const response = await fetch(apiUrl, {
      headers,
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `GitHub API error: ${response.status} ${response.statusText}`, details: errorText },
        { status: response.status }
      );
    }

    const repos: GitHubRepo[] = await response.json();

    const processedRepos: ProcessedRepo[] = repos
      .filter((repo: GitHubRepo) => {
        const safeUsername = username ? username.toLowerCase() : '';
        const excludeNames = [safeUsername, 'readme', '.github'];
        const shouldInclude = !repo.fork &&
          !repo.archived &&
          !repo.disabled &&
          !excludeNames.some(name => repo.name.toLowerCase().includes(name));
        return shouldInclude;
      })
      .map((repo: GitHubRepo): ProcessedRepo => ({
        id: repo.id,
        title: repo.name
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
        description: repo.description || `${repo.name} - A ${repo.language || 'code'} project`,
        github: repo.html_url,
        live: repo.homepage || null,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updated: repo.updated_at,
        technologies: getTechnologies(repo.language, repo.topics),
        category: getCategory(repo.language, repo.topics),
        language: repo.language,
        isPrivate: repo.private,
      }))
      .sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime());

    return NextResponse.json(processedRepos);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch repositories', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
