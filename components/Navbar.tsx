// import { Link, useLocation } from 'react-router-dom';
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardCommandKey } from "react-icons/md";

const Navbar = ({ handleSearch }) => {
//   const { pathname } = "useLocation()";

  return (
    <div className={"bg-white border-b-2 border-[#E5E8EB]"}>
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <div className="logo">
          <Link className="text-2xl font-bold" href="/">Ademto</Link>
        </div>

        <div className="icons flex items-center gap-4">
          <button
            onClick={handleSearch}
            aria-label="Open search modal"
            className="cursor-pointer bg-[#F2F2F5] text-[#6B7882] p-1 rounded-full md:py-3 md:px-4 flex items-center gap-2 text-sm"
          >
            <CiSearch className="text-2xl" />
            <span className="hidden md:flex pr-2">Search for cheatsheet</span>
            <span className="hidden md:flex items-center gap-1 border rounded-sm px-1">
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