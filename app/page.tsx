import Hero from "@/components/Hero";
import Image from "next/image";

import fs from 'fs/promises';
import path from 'path';

type CheatsheetMeta = {
  title: string;
  category: string;
  slug: string;
};

async function getAllCheatsheets(): Promise<CheatsheetMeta[]> {
  const contentDir = path.join(process.cwd(), 'cheatsheets');
  const filenames = await fs.readdir(contentDir);

  const cheatsheets: CheatsheetMeta[] = [];

  for (const filename of filenames) {
    if (!filename.endsWith('.mdx')) continue;

    // Import metadata from each mdx file dynamically
    const { metadata } = await import(`../cheatsheets/${filename}`);

    cheatsheets.push({
      title: metadata.title,
      category: metadata.category,
      slug: filename.replace(/\.mdx$/, ''),
    });
  }

  return cheatsheets;
}

export default async function Home() {
  const cheatsheets = await getAllCheatsheets();

  // Group by category
  const grouped = cheatsheets.reduce<Record<string, CheatsheetMeta[]>>((acc, sheet) => {
    if (!acc[sheet.category]) acc[sheet.category] = [];
    acc[sheet.category].push(sheet);
    return acc;
  }, {});
  return (
   <div>
    <section  className='bg-[#fefae0] md:h-80'>
      <Hero />
      <div className="lg:w-2/3 p-4 mx-auto mt-10">
        {Object.entries(grouped).map(([category, sheets]) => (
          <section className="mb-20" key={category}>
            <h2 className="font-bold text-2xl mb-2">{category}</h2>
            <div className="h-1 bg-slate-100">
              <div className="w-24 h-full bg-black"></div>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mx-auto mt-10">
              {sheets.map(({ title, slug }) => (
                <li key={slug}>
                  <a className="border px-6 py-4 rounded-lg transition duration-300 ease-in-out" href={`/${slug}`}>{title}</a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
   </div>
  );
}
