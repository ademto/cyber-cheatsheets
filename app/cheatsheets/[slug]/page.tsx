import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';
import { renderMarkdown } from '@/lib/markdown';
import { wrapHeaders } from '@/lib/wrapHeaders';
import { getToolTheme } from '@/lib/toolThemes';
import Link from 'next/link';

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'cheatsheets');
  const files = await fs.readdir(dir);

  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ''),
    }));
}

export const dynamicParams = false;

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'cheatsheets', `${slug}.mdx`);

  try {
    const raw = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(raw);
    const html = wrapHeaders(renderMarkdown(content));
    const theme = getToolTheme(slug, data);

    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link 
            href="/" 
            className="text-sm text-gray-600 hover:text-gray-900 mb-4 inline-block transition-colors"
          >
            ← Back to all tools
          </Link>
          
          <div className={`${theme.bgColor} rounded-xl shadow-lg p-8 mb-8 border border-gray-200`}>
            <div className="flex items-center gap-4 mb-4">
              {theme.icon && (
                <span className="text-4xl">{theme.icon}</span>
              )}
              <div>
                <h1 className={`text-4xl font-bold mb-2 ${theme.textColorClass}`}>
                  {data.title || slug}
                </h1>
                {data.category && (
                  <span 
                    className="inline-block text-xs px-3 py-1 rounded-full mb-2 mr-2"
                    style={{ 
                      backgroundColor: `${theme.accentColor}20`,
                      color: theme.accentColor,
                      border: `1px solid ${theme.accentColor}40`
                    }}
                  >
                    {data.category}
                  </span>
                )}
              </div>
            </div>
            {data.description && (
              <p className={`${theme.textColorClass} opacity-80 mt-2 mb-0 text-lg`}>{data.description}</p>
            )}
          </div>
          
          <article className="prose max-w-none bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div 
              dangerouslySetInnerHTML={{ __html: html }} 
              className="[&_*]:text-gray-800 [&_code]:bg-gray-100 [&_pre]:bg-gray-100 [&_table]:bg-gray-50"
            />
          </article>
        </div>
      </main>
    );
  } catch {
    return notFound();
  }
}
