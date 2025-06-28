'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import SearchModal from './SearchModal';

interface CheatsheetMeta {
  title: string;
  category: string;
  slug: string;
  description?: string;
}

interface SearchContextType {
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  cheatsheets: CheatsheetMeta[];
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}

export default function SearchProvider({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cheatsheets, setCheatsheets] = useState<CheatsheetMeta[]>([]);

  useEffect(() => {
    // Fetch cheatsheets data
    fetch('/api/cheatsheets')
      .then(res => res.json())
      .then(data => setCheatsheets(data))
      .catch(err => console.error('Failed to fetch cheatsheets:', err));
  }, []);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  return (
    <SearchContext.Provider value={{ isSearchOpen, openSearch, closeSearch, cheatsheets }}>
      {children}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={closeSearch} 
        cheatsheets={cheatsheets} 
      />
    </SearchContext.Provider>
  );
} 