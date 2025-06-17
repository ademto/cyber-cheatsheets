// app/blog/page.tsx
import BlogPost, { metadata } from '@/markdown/post.mdx';

export default function BlogPage() {
  return (
    <article>
      <h1>{metadata.title}</h1>
      <p>By {metadata.author}</p>
      <BlogPost />
    </article>
  );
}
