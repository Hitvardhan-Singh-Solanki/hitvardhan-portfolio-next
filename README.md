# Hitvardhan Portfolio

A modern, performant portfolio website built with Next.js, featuring smooth animations, dark mode, and comprehensive sections showcasing professional experience, projects, certifications, and blog posts.

**🌐 Live Demo:** [https://hitvardhan-portfolio-next.vercel.app](https://hitvardhan-portfolio-next.vercel.app)

## ✨ Features

- **Responsive Design** - Fully responsive across all devices
- **Dark/Light Theme** - Seamless theme switching with system preference detection
- **Smooth Animations** - GSAP-powered animations with centralized animation system
- **LeetCode Integration** - Real-time LeetCode stats display with progress tracking
- **Performance Optimized** - Built with Next.js 14+ App Router for optimal performance
- **Type-Safe** - Full TypeScript implementation with runtime validation (Zod)
- **Comprehensive Testing** - Unit, integration, and E2E tests
- **Accessibility** - WCAG compliant with proper ARIA labels
- **SEO Optimized** - Meta tags, structured data, and sitemap generation

## 🎯 Sections

- **Home** - Hero section with animated introduction
- **About** - Professional background and skills
- **Work Experience** - Career timeline with detailed descriptions
- **Projects** - Portfolio of featured projects with tech stacks
- **Certifications** - Professional certifications and achievements
- **Blog** - Technical articles and insights
- **Contact** - Get in touch section

## 🛠️ Tech Stack

### Core
- **[Next.js 14+](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[React 18](https://react.dev/)** - UI library

### Styling
- **[SCSS/Sass](https://sass-lang.com/)** - CSS preprocessor
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### Animations
- **[GSAP](https://greensock.com/gsap/)** - Professional-grade animations
- Custom animation hooks and utilities

### Data & Backend
- **[Supabase](https://supabase.com/)** - Backend and database for blog content
- Static data files for projects, certifications, and experience

### Testing
- **[Jest](https://jestjs.io/)** - Unit and integration testing
- **[Cypress](https://www.cypress.io/)** - End-to-end testing
- **[React Testing Library](https://testing-library.com/react)** - Component testing

### Code Quality
- **[ESLint](https://eslint.org/)** - Linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[Zod](https://zod.dev/)** - Runtime type validation

## 📂 Project Structure

```
hitvardhan-portfolio/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blogs/             # Blog listing and detail pages
│   ├── certificates/      # Certifications page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects showcase
│   └── work/              # Work experience page
├── components/            # React components
│   ├── blog/              # Blog-specific components
│   ├── experience-card/   # Work experience cards
│   ├── footer/            # Footer component
│   ├── heading/           # Reusable heading component
│   ├── hero/              # Hero section
│   ├── leetcode-stats/    # LeetCode statistics component
│   ├── navbar/            # Navigation bar
│   ├── project-card/      # Project cards
│   ├── technology/        # Technology badges
│   └── ui/                # UI primitives
├── context/               # React context providers
├── data/                  # Static data files
│   ├── blogs.ts
│   ├── certifications.ts
│   ├── experience.ts
│   ├── projects.ts
│   └── technologies.ts
├── lib/                   # Utility libraries
│   ├── animations.ts      # GSAP animation utilities
│   ├── hooks/             # Custom React hooks
│   └── utils.ts           # Helper functions
├── public/                # Static assets
│   ├── docs/              # Documents (resume, etc.)
│   ├── fonts/             # Custom fonts
│   └── img/               # Images
└── styles/                # Global styles and mixins
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hitvardhan/hitvardhan-portfolio.git
   cd hitvardhan-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧪 Testing

The project includes comprehensive testing coverage:

```bash
# Run all unit and integration tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run end-to-end tests (headless)
npm run test:e2e

# Open Cypress test runner (interactive)
npm run cypress:open
```

## 🎨 Animation System

This project features a centralized animation system built with GSAP. For detailed information about the animation architecture, custom hooks, and usage guidelines, see [ANIMATIONS_GUIDE.md](./ANIMATIONS_GUIDE.md).

Key animation features:
- Stagger animations for lists and grids
- Hero section entrance animations
- Button hover effects
- Page transition animations
- Reusable animation hooks

## 📋 Quality Checks

Automated quality checks ensure code consistency and reliability:

```bash
# TypeScript type checking
npm run type-check

# ESLint for code linting
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Format code with Prettier
npm run format
```

### Pre-commit Hooks

The project uses Husky to run quality checks before commits:
- TypeScript type checking
- ESLint linting
- Test suite execution
- Prevents commits with errors

## 📦 Build & Deployment

```bash
# Create production build
npm run build

# Start production server
npm start

# Analyze bundle size
npm run analyze
```

### Deployment

The project is configured for seamless deployment on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hitvardhan/hitvardhan-portfolio)

**Environment Variables Required:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 🎯 Performance

- **Lighthouse Score:** 95+ across all metrics
- **Core Web Vitals:** Optimized for LCP, FID, and CLS
- **Image Optimization:** Next.js Image component with lazy loading
- **Code Splitting:** Automatic route-based code splitting
- **Font Optimization:** Local font hosting with font-display swap

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/hitvardhan/hitvardhan-portfolio/issues).

## 📝 License

This project is [MIT](LICENSE) licensed.

## 👨‍💻 Author

**Hitvardhan**

- Portfolio: [https://hitvardhan-portfolio-next.vercel.app](https://hitvardhan-portfolio-next.vercel.app)
- GitHub: [@hitvardhan](https://github.com/hitvardhan)

---

Built with ❤️ using Next.js
