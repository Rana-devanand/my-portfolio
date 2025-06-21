'use client';
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, Home, User, Phone, Link as LinkIcon } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationItems = [
    { name: 'Home', path: '/', icon: <Home className="h-4 w-4" /> },
    { name: 'About', path: '/about', icon: <User className="h-4 w-4" /> },
    { name: 'Contact', path: '/contact', icon: <Phone className="h-4 w-4" /> },
  ];

  const handleNavClick = (path :string) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="w-[95%] mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 mr-3 border border-white/20">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">PT</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white">
                MY BIO
              </h1>
              <p className="text-xs text-gray-300 hidden md:block">
                Building the future
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-2">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className="group flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-lg font-semibold text-white transition-all duration-300 backdrop-blur-sm hover:scale-[1.02] hover:shadow-lg"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Connect Button */}
          <div className="hidden md:block">
            <Link href="/validation">
              <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl border border-white/20">
                <LinkIcon className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                Connect
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-lg p-2 transition-all duration-300 backdrop-blur-sm"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-4 mt-2">
            <ul className="space-y-3">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className="group w-full flex items-center gap-3 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-lg font-semibold text-white transition-all duration-300 text-left"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    {item.name}
                  </button>
                </li>
              ))}
              
              {/* Mobile Connect Button */}
              <li className="pt-2 border-t border-white/20">
                <Link href="/validation" onClick={() => setIsMenuOpen(false)}>
                  <button className="group w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg">
                    <LinkIcon className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    Connect
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;