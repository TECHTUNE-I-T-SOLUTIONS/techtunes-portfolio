export interface GitHubRepo {
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

export interface ProcessedRepo {
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

// Map programming languages to categories
const languageToCategory: Record<string, string> = {
  'TypeScript': 'web',
  'JavaScript': 'web',
  'React': 'web',
  'Next.js': 'web',
  'Vue': 'web',
  'Angular': 'web',
  'HTML': 'web',
  'CSS': 'web',
  'SCSS': 'web',
  'Python': 'backend',
  'Java': 'backend',
  'C#': 'backend',
  'C++': 'system',
  'C': 'system',
  'Go': 'backend',
  'Rust': 'system',
  'PHP': 'web',
  'Ruby': 'backend',
  'Swift': 'mobile',
  'Kotlin': 'mobile',
  'Dart': 'mobile',
  'Flutter': 'mobile',
  'React Native': 'mobile',
  'Docker': 'devops',
  'Kubernetes': 'devops',
  'Shell': 'devops',
  'PowerShell': 'devops',
  'Terraform': 'cloud',
  'AWS': 'cloud',
  'Azure': 'cloud',
  'GCP': 'cloud',
};

// Get category from language and topics
function getCategory(language: string | null, topics: string[]): string {
  // Check topics first for more specific categorization
  const topicCategories: Record<string, string> = {
    'web': 'web',
    'mobile': 'mobile',
    'backend': 'backend',
    'frontend': 'web',
    'api': 'backend',
    'database': 'backend',
    'machine-learning': 'ai',
    'artificial-intelligence': 'ai',
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

  // Fallback to language-based categorization
  if (language && languageToCategory[language]) {
    return languageToCategory[language];
  }

  return 'other';
}

// Get technologies from language and topics
function getTechnologies(language: string | null, topics: string[]): string[] {
  const technologies = new Set<string>();

  if (language) {
    technologies.add(language);
  }

  // Add relevant topics as technologies
  const techTopics = topics.filter(topic => 
    !['portfolio', 'personal', 'project', 'demo', 'example', 'test', 'learning'].includes(topic.toLowerCase())
  );
  
  techTopics.forEach(topic => technologies.add(topic));

  return Array.from(technologies).slice(0, 6); // Limit to 6 technologies
}

export async function fetchGitHubRepos(username: string, token?: string): Promise<ProcessedRepo[]> {
  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'TECHTUNE-Portfolio',
    };

    // Add authorization header if token is provided (for private repos)
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    // Fetch repositories (both public and private if token is provided)
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=all`, {
      headers,
      // Remove cache in development to always get fresh data
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GitHub API response:', response.status, response.statusText, errorText);
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const repos: GitHubRepo[] = await response.json();
    console.log(`Fetched ${repos.length} repositories from GitHub API`);

    // Filter and process repositories
    const processedRepos = repos
      .filter((repo: GitHubRepo) => {
        // More lenient filtering - include repos without descriptions but exclude obvious non-project repos
        const excludeNames = [username.toLowerCase(), 'readme', '.github'];
        return !repo.fork && // Exclude forks
               !repo.archived && // Exclude archived repos
               !repo.disabled && // Exclude disabled repos
               !excludeNames.some(name => repo.name.toLowerCase().includes(name));
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
      .sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime()); // Sort by most recently updated

    return processedRepos;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
}

// Mock data fallback for when GitHub API is not available
export const mockRepos: ProcessedRepo[] = [
  {
    id: 1,
    title: 'TechTunes Portfolio',
    description: 'Modern portfolio website showcasing our IT solutions and services with Next.js and TypeScript',
    github: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'techtune-solutions'}/techtunes-portfolio`,
    live: 'https://techtunes-portfolio.vercel.app',
    stars: 0,
    forks: 0,
    updated: '2024-12-20T10:00:00Z',
    technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'React'],
    category: 'web',
    language: 'TypeScript',
    isPrivate: false,
  },
  {
    id: 2,
    title: 'Backend APIs',
    description: 'Collection of RESTful APIs and microservices for various client projects',
    github: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'techtune-solutions'}/backend-apis`,
    live: null,
    stars: 0,
    forks: 0,
    updated: '2024-12-19T15:30:00Z',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Docker'],
    category: 'backend',
    language: 'JavaScript',
    isPrivate: true,
  },
  {
    id: 3,
    title: 'Mobile App Solutions',
    description: 'Cross-platform mobile applications for client businesses using React Native',
    github: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'techtune-solutions'}/mobile-solutions`,
    live: null,
    stars: 0,
    forks: 0,
    updated: '2024-12-18T09:45:00Z',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Expo'],
    category: 'mobile',
    language: 'TypeScript',
    isPrivate: true,
  },
];