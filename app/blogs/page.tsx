import { Heading } from "@/components/heading/heading";
import { blogs } from "@/data/blogs";
import Link from "next/link";
import "./blogs.scss";

export default function Blogs() {
  return (
    <div className="container mx-auto h-screen flex flex-col items-start justify-start pt-20">
      <Heading>Blogs (work in progress)</Heading>
      {blogs.map((blog, i) => (
        <div
          key={blog.id}
          className="mb-10 p-4 border border-[var(--secondary)] rounded-lg max-w-5xl"
        >
          <h2>
            <Link href={`/blogs/${blog.id}`} className="title">
              {blog.title}
            </Link>
            <span> by {blog.author}</span>
          </h2>
          <p>{blog.content.slice(0, 150)}...</p>
        </div>
      ))}
    </div>
  );
}
