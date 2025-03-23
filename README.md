URL: https://hitvardhan-portfolio-next.vercel.app

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Testing

The project includes comprehensive testing setup:

```bash
# Run unit and integration tests
npm test

# Run tests in watch mode
npm run test:watch

# Run end-to-end tests
npm run test:e2e

# Open Cypress test runner
npm run cypress:open
```

## Quality Checks

The project includes several quality checks that run automatically:

- TypeScript type checking: `npm run type-check`
- ESLint for code style: `npm run lint`
- Pre-commit hooks via Husky that run type checking, linting, and tests
- Error boundaries for graceful error handling
- Zod for runtime type validation
