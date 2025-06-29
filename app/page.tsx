import Hero from "@/components/Hero";
import Image from "next/image";

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

interface CheatsheetMeta {
  title: string;
  slug: string;
  description: string;
  categories: string[];
  bgColor: string;
  textColor: string;
  top: boolean;
}

async function getAllCheatsheets(): Promise<CheatsheetMeta[]> {
  const contentDir = path.join(process.cwd(), 'cheatsheets');
  const filenames = await fs.readdir(contentDir);

  const cheatsheets: CheatsheetMeta[] = [];

  for (const filename of filenames) {
    if (!filename.endsWith('.mdx')) continue;
    const filePath = path.join(contentDir, filename);
    const raw = await fs.readFile(filePath, 'utf8');
    const { data } = matter(raw);
    
    // Handle both old and new frontmatter formats
    const categories = data.categories || [data.category || 'Uncategorized'];
    
    cheatsheets.push({
      title: data.title || filename.replace(/\.mdx$/, ''),
      slug: data.slug || filename.replace(/\.mdx$/, ''),
      description: data.description || '',
      categories: Array.isArray(categories) ? categories : [categories],
      bgColor: data.bgColor || 'bg-gray-100',
      textColor: data.textColor || 'text-gray-800',
      top: data.top === true || data.top === 'true',
    });
  }

  return cheatsheets;
}

// Define category order and descriptions
const categoryOrder = [
  'Essential Tools',
  'Reconnaissance', 
  'Enumeration',
  'Exploitation',
  'Web Application Security',
  'Network Security',
  'Password Cracking',
  'Social Engineering',
  'System Administration',
  'Vulnerability Assessment',
  'Threat Intelligence',
  'Information Gathering',
  'Penetration Testing',
  'Security Scanning',
  'Text Editing',
  'SOC'
];

const categoryDescriptions: Record<string, string> = {
  'Essential Tools': 'Core utilities used across all security activities',
  'Reconnaissance': 'Information gathering and discovery tools',
  'Enumeration': 'Service and system enumeration tools',
  'Exploitation': 'Attack and exploitation frameworks',
  'Web Application Security': 'Web app testing and security tools',
  'Network Security': 'Network analysis and security tools',
  'Password Cracking': 'Password recovery and hash cracking tools',
  'Social Engineering': 'Social engineering and phishing tools',
  'System Administration': 'System management and administration tools',
  'Vulnerability Assessment': 'Vulnerability scanning and assessment tools',
  'Threat Intelligence': 'Threat intelligence and monitoring tools',
  'Information Gathering': 'Data collection and intelligence gathering',
  'Penetration Testing': 'Comprehensive penetration testing frameworks',
  'Security Scanning': 'Security scanning and analysis tools',
  'Text Editing': 'Text editing and file manipulation tools',
  'SOC': 'Security Operations Center tools'
};

export default async function Home() {
  const cheatsheets = await getAllCheatsheets();

  // Group by primary category (first category in the array)
  const grouped = cheatsheets.reduce<Record<string, CheatsheetMeta[]>>((acc, sheet) => {
    const primaryCategory = sheet.categories[0] || 'Uncategorized';
    if (!acc[primaryCategory]) acc[primaryCategory] = [];
    acc[primaryCategory].push(sheet);
    return acc;
  }, {});

  // Sort categories by defined order, then alphabetically for any remaining
  const sortedCategories = [
    ...categoryOrder.filter(cat => grouped[cat]),
    ...Object.keys(grouped).filter(cat => !categoryOrder.includes(cat)).sort()
  ];

  return (
    <>
      <section className='bg-[#fefae0] py-20'>
        <Hero />
      </section>
      <div className="lg:w-2/3 p-4 mx-auto mt-10">
        {sortedCategories.map((category) => (
          <section className="mb-20" key={category}>
            <h2 className="font-bold text-2xl mb-2">{category}</h2>
            <p className="text-gray-600 mb-4">{categoryDescriptions[category] || `${category} tools and utilities`}</p>
            <div className="h-1 bg-slate-100">
              <div className="w-24 h-full bg-black"></div>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mx-auto mt-10">
              {grouped[category].map(({ title, slug, bgColor, textColor, description }) => (
                <li key={slug}>
                  <a 
                    className={`block px-6 py-4 rounded-lg transition-all duration-300 ease-in-out text-center font-medium hover:shadow-sm hover:scale-101 ${bgColor} ${textColor} border border-transparent hover:border-gray-300`}
                    href={`/cheatsheets/${slug}`}
                    title={description}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
