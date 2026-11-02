export type PricingCategory =
  | 'Website Development'
  | 'Mobile Applications'
  | 'Desktop Software'
  | 'Advanced Programming & Backend Engineering'
  | 'Cloud Engineering & DevOps'
  | 'AI Integration & Automation'
  | 'UI/UX Design & Branding'
  | 'Maintenance & Support'

export type PricingOption = {
  id: string
  name: string
  price: number
  recurring?: boolean
  description: string
  features: string[]
  duration: string
  exclusions: string
  customQuote?: boolean
}

export type PricingService = {
  id: string
  category: PricingCategory
  name: string
  description: string
  keywords: string[]
  icon: string
  options: PricingOption[]
  addOns: { id: string; name: string; price: number; description: string }[]
}

export const pricingCategories = [
  'All Services',
  'Website Development',
  'Mobile Applications',
  'Desktop Software',
  'Advanced Programming & Backend Engineering',
  'Cloud Engineering & DevOps',
  'AI Integration & Automation',
  'UI/UX Design & Branding',
  'Maintenance & Support',
] as const

const option = (id: string, name: string, price: number, description: string, features: string[], duration: string, exclusions: string, customQuote = false): PricingOption => ({ id, name, price, description, features, duration, exclusions, customQuote })

export const pricingServices: PricingService[] = [
  {
    id: 'websites', category: 'Website Development', name: 'Website Development', icon: 'globe',
    description: 'Fast, responsive websites shaped around your brand and business goals.',
    keywords: ['landing page', 'portfolio', 'business', 'enterprise', 'ecommerce', 'SEO', 'forms', 'booking', 'CMS'],
    options: [
      option('landing', 'Professional Landing Page', 150, 'A focused page for a product, campaign, or service.', ['Responsive layout', 'Contact call to action', 'Basic on-page SEO'], '1–2 weeks', 'Copywriting, paid assets, hosting, and domain.'),
      option('personal', 'Personal Brand Website', 200, 'A polished multi-section home for your personal brand.', ['Up to 4 pages', 'Custom responsive design', 'Contact form', 'Basic SEO'], '2–3 weeks', 'Content writing, hosting, and domain.'),
      option('business', 'Business Website', 600, 'A professional website for a growing business.', ['Up to 6 pages', 'Responsive design', 'Enquiry form', 'Analytics setup'], '3–5 weeks', 'E-commerce, third-party subscriptions, and extensive content entry.'),
      option('advanced', 'Advanced Business Website', 1000, 'A richer business site with connected workflows.', ['Up to 10 pages', 'Database-backed enquiries', 'Email notifications', 'Content management'], '5–8 weeks', 'Third-party service fees and complex integrations.'),
      option('enterprise', 'Enterprise Web Platform', 2000, 'A tailored platform with complex roles and workflows.', ['Discovery and architecture', 'Custom business workflows', 'Secure access design', 'Deployment planning'], 'Scoped after discovery', 'Final scope and cost require project assessment.', true),
      option('essential', 'Personal Brand — Essential', 350, 'A clean, custom foundation for your online presence.', ['Up to 3 pages', 'Responsive custom design', 'Contact form'], '2–3 weeks', 'Copywriting, hosting, and domain.'),
      option('professional', 'Personal Brand — Professional', 550, 'A complete personal brand site with useful integrations.', ['Up to 5 pages', 'Image gallery', 'Contact form', 'Analytics'], '3–4 weeks', 'Booking or custom dashboard features.'),
      option('intelligent', 'Personal Brand — Intelligent', 850, 'A connected site for enquiries and lightweight operations.', ['Up to 6 pages', 'Database-backed enquiries', 'Email notifications', 'Content management'], '4–6 weeks', 'AI usage and third-party subscriptions.'),
    ],
    addOns: [
      { id: 'gallery', name: 'Image gallery', price: 75, description: 'Organised, responsive project or image gallery.' },
      { id: 'booking', name: 'Appointment booking', price: 200, description: 'Booking workflow, subject to provider requirements.' },
      { id: 'whatsapp', name: 'WhatsApp enquiry integration', price: 75, description: 'Direct enquiry links with prefilled context.' },
      { id: 'ai-support', name: 'AI customer support assistant', price: 400, description: 'Basic assistant integration; usage fees excluded.' },
      { id: 'dashboard', name: 'Administrative dashboard', price: 350, description: 'Secure dashboard for agreed content and records.' },
      { id: 'custom-feature', name: 'Other custom feature', price: 0, description: 'Complex or unspecified requirements need assessment.' },
    ],
  },
  {
    id: 'mobile', category: 'Mobile Applications', name: 'Mobile Application Development', icon: 'smartphone',
    description: 'Purpose-built mobile apps for iOS, Android, or cross-platform delivery.', keywords: ['iOS', 'Android', 'cross-platform', 'push notifications', 'app store'],
    options: [
      option('mobile-basic', 'Basic Mobile Application', 700, 'A focused app for a clearly defined workflow.', ['Core screens and navigation', 'Responsive app UI', 'One primary user flow'], '4–6 weeks', 'Store fees, backend services, and advanced integrations.'),
      option('mobile-standard', 'Standard Mobile Application', 1200, 'A multi-screen app with connected data and core features.', ['Multiple user flows', 'API integration', 'Error and loading states'], '6–10 weeks', 'Cloud usage, store fees, and extensive backend work.'),
      option('mobile-advanced', 'Advanced Mobile Application', 2500, 'A feature-rich app with custom workflows.', ['Custom backend integration', 'Authentication', 'Push notification setup'], 'Scoped after discovery', 'Complex features and platform costs assessed separately.', true),
      option('mobile-enterprise', 'Enterprise Mobile Platform', 5000, 'A multi-role mobile product designed for scale.', ['Architecture and discovery', 'Role-based workflows', 'Release planning'], 'Scoped after discovery', 'Final requirements require project assessment.', true),
    ], addOns: [
      { id: 'mobile-auth', name: 'Secure authentication', price: 250, description: 'Authentication integration for an agreed provider.' },
      { id: 'mobile-push', name: 'Push notification setup', price: 200, description: 'Notification setup; provider fees excluded.' },
      { id: 'mobile-backend', name: 'Custom API connection', price: 300, description: 'Connect one agreed API or service.' },
      { id: 'mobile-custom', name: 'Other custom feature', price: 0, description: 'Requires technical assessment.' },
    ],
  },
  {
    id: 'desktop', category: 'Desktop Software', name: 'Desktop Software', icon: 'monitor',
    description: 'Reliable desktop tools and business applications for defined workflows.', keywords: ['utility', 'management system', 'Windows', 'macOS', 'data processing'],
    options: [
      option('desktop-basic', 'Basic Desktop Utility', 500, 'A small desktop tool for a focused task.', ['Defined single-purpose workflow', 'Input validation', 'Setup guidance'], '3–5 weeks', 'Licensing and advanced integrations.'),
      option('desktop-standard', 'Standard Business Application', 900, 'A desktop application for everyday team operations.', ['Multiple screens', 'Local or connected data', 'Error handling'], '5–8 weeks', 'Cloud hosting and third-party licensing.'),
      option('desktop-advanced', 'Advanced Management System', 1800, 'A custom system with connected business workflows.', ['Database-driven workflows', 'Access controls', 'Operational reporting'], 'Scoped after discovery', 'Complex migration and integrations assessed separately.', true),
      option('desktop-enterprise', 'Enterprise Desktop Software', 3500, 'A larger desktop system designed around enterprise needs.', ['Architecture planning', 'Role-aware workflows', 'Deployment planning'], 'Scoped after discovery', 'Final requirements require project assessment.', true),
    ], addOns: [
      { id: 'desktop-reporting', name: 'Custom reporting', price: 250, description: 'Agreed reports and export formats.' },
      { id: 'desktop-import', name: 'Data import tool', price: 300, description: 'Import from one documented source format.' },
      { id: 'desktop-custom', name: 'Other custom feature', price: 0, description: 'Requires technical assessment.' },
    ],
  },
  {
    id: 'backend', category: 'Advanced Programming & Backend Engineering', name: 'Advanced Programming & Backend Engineering', icon: 'code',
    description: 'Sophisticated software engineered with technologies suited to your project, from APIs and integrations to distributed systems and complex business logic.',
    keywords: ['backend', 'API', 'integrations', 'enterprise', 'scheduling', 'automation', 'database', 'distributed', 'performance', 'authentication', 'authorisation', 'Python', 'C++', 'C#', '.NET', 'Spring Boot', 'PostgreSQL', 'data processing', 'architecture'],
    options: [
      option('api', 'Custom Backend API', 500, 'A secure API for a defined product or business workflow.', ['REST API endpoints', 'Input validation', 'API documentation'], '2–4 weeks', 'Hosting, external services, and complex integrations.'),
      option('backend-advanced', 'Advanced Backend System', 1200, 'A data-driven backend with multiple connected processes.', ['Database-backed workflows', 'Authentication design', 'Background processing'], '4–8 weeks', 'Infrastructure and third-party usage.'),
      option('business-software', 'Custom Business Software', 1000, 'Software for a specific operational process or team.', ['Complex business logic', 'Database-driven workflows', 'Role and access planning'], 'Scoped after discovery', 'Final requirements require project assessment.', true),
      option('enterprise-architecture', 'Enterprise Software Architecture', 3000, 'Architecture and engineering for complex software systems.', ['System architecture', 'Integration planning', 'Scalability and security review'], 'Scoped after discovery', 'Implementation scope is assessed separately.', true),
      option('scheduling', 'Scheduling & Automation System', 1500, 'Automated jobs and scheduling around operational rules.', ['Background jobs', 'Scheduling workflows', 'Failure and retry handling'], 'Scoped after discovery', 'Infrastructure and external service fees.', true),
      option('data-processing', 'Complex Data Processing System', 1000, 'Purpose-built processing for structured business data.', ['Data validation', 'Processing pipeline', 'Performance considerations'], 'Scoped after discovery', 'Final data volume and infrastructure need assessment.', true),
    ], addOns: [
      { id: 'backend-integration', name: 'Additional API integration', price: 250, description: 'One documented third-party integration.' },
      { id: 'backend-optimisation', name: 'Performance optimisation', price: 350, description: 'Targeted profiling and optimisation.' },
      { id: 'backend-custom', name: 'Distributed or custom system component', price: 0, description: 'Requires architecture and scope assessment.' },
    ],
  },
  {
    id: 'cloud', category: 'Cloud Engineering & DevOps', name: 'Cloud Engineering & DevOps', icon: 'cloud',
    description: 'Production deployment, cloud configuration, and infrastructure designed for your workload.', keywords: ['deployment', 'AWS', 'Azure', 'Google Cloud', 'CI/CD', 'infrastructure', 'monitoring'],
    options: [
      option('cloud-basic', 'Basic Production Deployment', 200, 'Deploy an existing application to a suitable host.', ['Production deployment', 'Environment configuration', 'Handover notes'], '1–2 weeks', 'Hosting and domain fees.'),
      option('cloud-standard', 'Standard Cloud Configuration', 350, 'Configure a cloud environment for a small application.', ['Environment setup', 'Access configuration', 'Deployment workflow'], '1–3 weeks', 'Cloud usage and paid third-party services.'),
      option('cloud-advanced', 'Advanced Cloud Infrastructure', 750, 'Infrastructure for applications with higher reliability needs.', ['Infrastructure configuration', 'Monitoring approach', 'Backup planning'], '2–4 weeks', 'Cloud usage and complex migrations.'),
      option('cloud-enterprise', 'Enterprise Cloud Architecture', 1500, 'Architecture planning for enterprise workloads.', ['Architecture assessment', 'Resilience planning', 'Security considerations'], 'Scoped after discovery', 'Implementation and cloud usage quoted separately.', true),
    ], addOns: [
      { id: 'cloud-monitoring', name: 'Monitoring setup', price: 200, description: 'Basic health and error monitoring configuration.' },
      { id: 'cloud-pipeline', name: 'CI/CD pipeline', price: 250, description: 'Automated build and deployment for one application.' },
      { id: 'cloud-custom', name: 'Migration or custom infrastructure', price: 0, description: 'Requires environment assessment.' },
    ],
  },
  {
    id: 'ai', category: 'AI Integration & Automation', name: 'AI Integration & Automation', icon: 'sparkles',
    description: 'Practical AI integrations and automation designed around real workflows and data.', keywords: ['assistant', 'knowledge base', 'customer support', 'automation', 'AI', 'LLM'],
    options: [
      option('ai-basic', 'Basic AI Integration', 200, 'Connect an existing product to a suitable AI service.', ['One defined AI workflow', 'Prompt and response handling', 'Usage-aware handover'], '1–2 weeks', 'Model usage, external subscriptions, and private data preparation.'),
      option('ai-support', 'AI Customer Support Assistant', 400, 'A basic assistant for common customer questions.', ['Configured support flow', 'Basic handoff guidance', 'Website integration'], '2–4 weeks', 'AI usage, extensive content preparation, and subscriptions.'),
      option('ai-knowledge', 'Knowledge-Based AI Assistant', 800, 'An assistant grounded in an agreed set of business content.', ['Knowledge source setup', 'Response testing', 'Escalation guidance'], '3–6 weeks', 'Usage charges and large-scale content processing.'),
      option('ai-automation', 'Advanced AI Automation System', 1500, 'AI-assisted automation across a defined business process.', ['Workflow design', 'Integration planning', 'Review and failure handling'], 'Scoped after discovery', 'Requires project assessment; AI usage excluded.', true),
    ], addOns: [
      { id: 'ai-channel', name: 'Additional channel integration', price: 200, description: 'Add one agreed communication channel.' },
      { id: 'ai-custom', name: 'Custom automation workflow', price: 0, description: 'Requires process and technical assessment.' },
    ],
  },
  {
    id: 'design', category: 'UI/UX Design & Branding', name: 'UI/UX Design & Branding', icon: 'palette',
    description: 'Clear, consistent digital experiences and visual identity assets for your product or business.', keywords: ['logo', 'brand identity', 'visual identity', 'wireframes', 'design system', 'website design', 'mobile UI'],
    options: [
      option('design-landing', 'Professional Landing Page Design', 200, 'A polished visual direction for a single landing page.', ['Responsive page layouts', 'Visual hierarchy', 'Design handoff'], '1–2 weeks', 'Development and paid assets.'),
      option('design-website', 'Multi-page Website UI Design', 250, 'A consistent visual system across key website pages.', ['Core page designs', 'Responsive considerations', 'Design handoff'], '2–4 weeks', 'Development, copywriting, and paid assets.'),
      option('design-mobile', 'Mobile Application UI Design', 300, 'User flows and visual designs for a mobile app.', ['Key user flows', 'Core screen designs', 'Design handoff'], '2–4 weeks', 'Development and usability research beyond agreed scope.'),
      option('design-desktop', 'Desktop Application UI Design', 300, 'A usable interface direction for desktop software.', ['Key screens', 'Navigation structure', 'Design handoff'], '2–4 weeks', 'Development and extensive research.'),
      option('design-system', 'Design System Setup', 200, 'Foundations and reusable UI patterns for consistent design.', ['Colour and type tokens', 'Core components', 'Usage notes'], '1–3 weeks', 'Large component libraries and implementation.'),
      option('logo', 'Logo Design', 100, 'A custom logo foundation for everyday digital use.', ['One initial concept direction', 'Digital logo files', 'Basic light and dark variations', 'Two reasonable revision rounds'], '1–2 weeks', 'Additional concepts, revision rounds, print production, and extra assets quoted separately.'),
      option('brand', 'Complete Visual Brand Identity', 300, 'A coherent visual identity to support your brand.', ['Logo design', 'Colour palette', 'Typography recommendations', 'Supporting visual elements', 'Basic usage guidelines', 'Two reasonable revision rounds'], '2–4 weeks', 'Social assets beyond an agreed basic set and extra brand assets quoted separately.'),
    ], addOns: [
      { id: 'design-social', name: 'Social media branding assets', price: 100, description: 'A basic agreed set of social profile assets.' },
      { id: 'design-extra', name: 'Additional brand assets', price: 0, description: 'Scope and quote based on requested deliverables.' },
    ],
  },
  {
    id: 'maintenance', category: 'Maintenance & Support', name: 'Maintenance & Support', icon: 'wrench',
    description: 'Ongoing care and support plans for websites and software.', keywords: ['monthly', 'support', 'updates', 'maintenance', 'monitoring', 'enterprise'],
    options: [
      { ...option('maint-basic', 'Basic Maintenance', 75, 'Routine care for a small site.', ['Dependency and security updates', 'Basic availability check'], 'Monthly', 'New features, hosting, and third-party services.'), recurring: true },
      { ...option('maint-standard', 'Standard Maintenance', 150, 'Regular maintenance with a small support allowance.', ['Routine updates', 'Monthly health review', 'Up to 2 support hours'], 'Monthly', 'New features and unused hours do not roll over.'), recurring: true },
      { ...option('maint-advanced', 'Advanced Maintenance', 300, 'More frequent attention for active business systems.', ['Updates and monitoring', 'Monthly review', 'Up to 5 support hours'], 'Monthly', 'New features and infrastructure charges.'), recurring: true },
      { ...option('maint-enterprise', 'Enterprise Support', 500, 'Ongoing support for more demanding operations.', ['Priority response window by agreement', 'System health review', 'Up to 10 support hours'], 'Monthly', 'SLA terms, new features, and infrastructure separately agreed.'), recurring: true },
    ], addOns: [],
  },
]
