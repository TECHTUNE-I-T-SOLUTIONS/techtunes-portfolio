# TechTunes Portfolio

TechTunes Portfolio is a Next.js-based portfolio website using TypeScript, Tailwind CSS, and modern React practices. The project is configured for development, building, and deployment.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

- Bootstrap, build, and test the repository:
  - Node.js v20.19.5 and npm v10.8.2 are already available in the environment
  - `npm install` -- installs dependencies, takes 12-13 seconds
  - `npm run build` -- production build, takes 15-16 seconds. NEVER CANCEL. Set timeout to 60+ minutes for safety.
  - `npm run lint` -- runs ESLint, takes 1-2 seconds
- Run the development server:
  - ALWAYS run `npm install` first if node_modules doesn't exist
  - `npm run dev` -- starts development server on http://localhost:3000, ready in ~1 second
- Production mode:
  - `npm run build` followed by `npm start` -- NOTE: Production server may have issues with current Next.js version (15.5.3), use development mode for testing

## Validation

- ALWAYS manually validate any new code by running the development server and checking http://localhost:3000
- ALWAYS run through at least one complete end-to-end scenario after making changes:
  - Start the dev server with `npm run dev`
  - Visit http://localhost:3000 in the browser or test with `curl http://localhost:3000`
  - Verify the page loads correctly with expected content
  - Check that navigation and interactive elements work properly
- Always run `npm run lint` before you are done or the CI will likely fail
- The application uses Tailwind CSS for styling and TypeScript for type safety

## Build Process Details

- **Build Time**: 15-16 seconds (includes TypeScript compilation, Tailwind processing, and Next.js optimization)
- **Install Time**: 12-13 seconds for full dependency installation  
- **Lint Time**: 1-2 seconds
- **Dev Server Startup**: ~1 second
- **NEVER CANCEL**: While build times are fast, always set timeout to 60+ minutes to prevent accidental cancellation

## Common Tasks

The following are outputs from frequently run commands. Reference them instead of viewing, searching, or running bash commands to save time.

### Repository Structure
```
/home/runner/work/techtunes-portfolio/techtunes-portfolio/
├── .github/
├── .next/                    # Build output (generated)
├── node_modules/            # Dependencies (generated)
├── public/                  # Static assets
├── src/
│   └── app/
│       ├── favicon.ico
│       ├── globals.css      # Global styles
│       ├── layout.tsx       # Root layout component
│       └── page.tsx         # Home page component
├── .gitignore
├── README.md
├── eslint.config.mjs        # ESLint configuration
├── next-env.d.ts           # Next.js TypeScript definitions
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration
└── tsconfig.json           # TypeScript configuration
```

### package.json scripts
```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack", 
    "start": "next start",
    "lint": "eslint"
  }
}
```

### Key Files to Modify

- `src/app/page.tsx` - Main homepage component
- `src/app/layout.tsx` - Root layout with metadata and global structure
- `src/app/globals.css` - Global styles and Tailwind imports
- `public/` - Static assets like images, icons, etc.

## Important Notes

- The project uses Turbopack for faster builds (enabled with `--turbopack` flag)
- Google Fonts are NOT used due to network restrictions - use system fonts or local font files
- TypeScript is configured and enforced - all components must be properly typed
- Tailwind CSS is the primary styling solution
- The project uses the Next.js App Router (not Pages Router)
- ESLint is configured with Next.js recommended rules

## Troubleshooting

- If build fails with font errors: Check that no Google Fonts imports are being used in layout.tsx or other components
- If development server won't start: Ensure port 3000 is available or use `npm run dev -- -p 3001` for alternative port
- If TypeScript errors occur: Run `npm run build` to see full type checking output
- If styles aren't applying: Verify Tailwind classes are correctly written and globals.css includes Tailwind directives