import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  const contentDir = path.join(process.cwd(), 'cheatsheets');
  const filenames = await fs.readdir(contentDir);

  const cheatsheets = [];

  for (const filename of filenames) {
    if (!filename.endsWith('.mdx')) continue;
    const filePath = path.join(contentDir, filename);
    const raw = await fs.readFile(filePath, 'utf8');
    const { data } = matter(raw);
    cheatsheets.push({
      title: data.title || filename.replace(/\.mdx$/, ''),
      category: data.category || 'Uncategorized',
      slug: filename.replace(/\.mdx$/, ''),
      description: data.description || '',
    });
  }

  return NextResponse.json(cheatsheets);
} 