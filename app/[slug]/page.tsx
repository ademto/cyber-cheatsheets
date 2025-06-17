import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'cheatsheets');
  const filenames = await fs.readdir(contentDir);

  return filenames
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => ({
      slug: name.replace(/\.mdx$/, ''),
    }));
}

export const dynamicParams = false;

export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const { slug } = params;
    const { default: Post } = await import(`@/cheatsheets/${slug}.mdx`);
    return <Post />;
  } catch (e) {
    return notFound();
  }
}
