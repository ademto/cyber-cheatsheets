'use client';
// import { Link, useLocation } from 'react-router-dom';
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardCommandKey } from "react-icons/md";
import { useEffect, useState } from 'react';
import { useSearch } from './SearchProvider';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const { openSearch } = useSearch();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openSearch]);

  // Check if we're on the homepage
  const isHomepage = pathname === '/';
  
  // Use warm cream background for homepage, white for other pages
  const navbarBgClass = isHomepage ? 'bg-gray-50' : 'bg-white';
  const borderClass = isHomepage ? 'border-gray-200' : 'border-gray-200';

  if (!mounted) {
    // Return a placeholder during SSR to avoid hydration mismatch
    return (
      <div className="bg-white border-b-2 border-gray-200">
        <div className="container mx-auto flex items-center justify-between h-20 px-4">
          <div className="logo">
            <Link className="text-2xl font-bold" href="/">Ademto</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${navbarBgClass} border-b-2 ${borderClass}`}>
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <div className="logo">
          <Link className="text-2xl font-bold" href="/">Ademto</Link>
        </div>

        <div className="icons flex items-center gap-4">
          <button
            onClick={openSearch}
            aria-label="Open search modal"
            className="border cursor-pointer text-[#6B7882] p-1 rounded-full md:py-2 md:px-4 flex items-center gap-2 text-sm"
          >
            <CiSearch className="text-xl" />
            <span className="hidden md:flex pr-2">Search for cheatsheet</span>
            <span className="hidden md:flex items-center gap-1 border rounded-sm px-1 text-sm">
              <MdKeyboardCommandKey /> K
            </span>
          </button>

          <a
            href="https://github.com/ademto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-xl hover:text-zinc-600"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/emmanuel-adetoro/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-xl hover:text-zinc-600"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://twitter.com/RealPentester"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-xl hover:text-zinc-600"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;