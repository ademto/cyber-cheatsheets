'use client';

import { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { MdKeyboardCommandKey } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';

interface CheatsheetMeta {
  title: string;
  category: string;
  slug: string;
  description?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  cheatsheets: CheatsheetMeta[];
}

export default function SearchModal({ isOpen, onClose, cheatsheets }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCheatsheets, setFilteredCheatsheets] = useState<CheatsheetMeta[]>([]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredCheatsheets(cheatsheets);
    } else {
      const filtered = cheatsheets.filter(sheet =>
        sheet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sheet.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (sheet.description && sheet.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredCheatsheets(filtered);
    }
  }, [searchTerm, cheatsheets]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.metaKey && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <CiSearch className="text-xl text-gray-400" />
            <input
              type="text"
              placeholder="Search cheatsheets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 outline-none text-lg"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <IoClose className="text-xl" />
            </button>
          </div>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
            <span>Press</span>
            <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">⌘</kbd>
            <span>+</span>
            <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">K</kbd>
            <span>to close</span>
          </div>
        </div>
        
        <div className="overflow-y-auto max-h-[60vh]">
          {filteredCheatsheets.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No cheatsheets found for "{searchTerm}"
            </div>
          ) : (
            <div className="p-4">
              {filteredCheatsheets.map((sheet) => (
                <Link
                  key={sheet.slug}
                  href={`/cheatsheets/${sheet.slug}`}
                  onClick={onClose}
                  className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{sheet.title}</h3>
                      <p className="text-sm text-gray-500 capitalize">
                        {sheet.category.replace('-', ' ')}
                      </p>
                      {sheet.description && (
                        <p className="text-sm text-gray-600 mt-1">{sheet.description}</p>
                      )}
                    </div>
                    <div className="text-gray-400">
                      <CiSearch />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 