
import React from 'react';
import { SearchIcon } from './icons/SearchIcon';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">
    {children}
  </a>
);

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="bg-slate-800/50 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-cyan-400">
              PRMovies
            </a>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-4">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">Bollywood</NavLink>
            <NavLink href="#">Hollywood</NavLink>
            <NavLink href="#">Web Series</NavLink>
            <NavLink href="#">Dual Audio</NavLink>
          </nav>
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-700 text-white rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-40 sm:w-64 transition-all duration-300"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
