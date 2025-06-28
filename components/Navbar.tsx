'use client';
// import { Link, useLocation } from 'react-router-dom';
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardCommandKey } from "react-icons/md";
import { useEffect } from 'react';
import { useSearch } from './SearchProvider';

const Navbar = () => {
  const { openSearch } = useSearch();

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

  return (
    <div className={"bg-[#fefae0] border-b-2 border-[#E5E8EB]"}>
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
            href="https://twitter.com/yourTwitterHandle"
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