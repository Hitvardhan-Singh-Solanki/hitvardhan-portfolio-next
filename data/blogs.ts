export interface Blog {
  id: number;
  title: string;
  author: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Understanding React 18 Features",
    author: "Hitvardhan Singh Solanki",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["React", "JavaScript", "Web Development"],
    slug: "understanding-react-18-features",
    content: "In this comprehensive guide, we'll explore the groundbreaking features introduced in React 18. From automatic batching to concurrent rendering, these updates are revolutionizing how we build React applications.\n\nAutomatic Batching:\nOne of the most significant improvements in React 18 is the introduction of automatic batching. Previously, React would only batch state updates during browser events (like clicks). Now, all state updates are automatically batched, regardless of their origin. This means better performance with less manual optimization.\n\nConcurrent Features:\nReact 18's concurrent rendering is a game-changer. It allows React to prepare multiple versions of the UI simultaneously, enabling new features like Suspense and streaming server rendering. This makes applications more responsive and provides a better user experience."
  },
  {
    id: 2,
    title: "Next.js 14: What's New?",
    author: "Hitvardhan Singh Solanki",
    date: "2024-01-20",
    readTime: "4 min read",
    tags: ["Next.js", "React", "Web Development"],
    slug: "nextjs-14-whats-new",
    content: "Next.js 14 brings exciting improvements and new features that enhance the developer experience and application performance. Let's dive into the key updates.\n\nTurbopack Improvements:\nThe Rust-based bundler has received significant updates, offering faster compilation times and improved stability. It's now the default in development mode, providing instant hot module replacement.\n\nServer Actions:\nServer Actions are now stable, allowing you to write server-side logic directly in your React components. This eliminates the need for separate API routes in many cases and provides a more intuitive way to handle form submissions and data mutations."
  },
  {
    id: 3,
    title: "Building a Full-Stack App with Next.js",
    author: "Hitvardhan Singh Solanki",
    date: "2024-01-25",
    readTime: "8 min read",
    tags: ["Next.js", "MongoDB", "Full Stack", "Web Development"],
    slug: "building-fullstack-app-nextjs",
    content: "In this detailed tutorial, we'll walk through building a modern full-stack application using Next.js and MongoDB. We'll cover everything from setup to deployment.\n\nProject Setup:\nWe'll start by creating a new Next.js project with TypeScript and setting up our development environment. We'll also configure MongoDB Atlas for our database needs.\n\nAPI Routes:\nNext.js API routes provide a seamless way to build your backend. We'll create RESTful endpoints that interact with our MongoDB database, handling CRUD operations efficiently.\n\nAuthentication:\nWe'll implement authentication using NextAuth.js, supporting multiple providers and securing our application. This includes protecting API routes and client-side pages."
  }
];
