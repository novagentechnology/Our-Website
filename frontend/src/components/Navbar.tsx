import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  transparent?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'CONTACTS', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isTransparentState = (transparent || isHome) && !isScrolled;

  const navBackground = isTransparentState
    ? 'bg-transparent py-5 sm:py-6'
    : 'bg-[#090F1E]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3.5';

  return (
    <nav
      className={`w-full transition-all duration-300 z-40 ${
        isTransparentState ? 'relative' : 'sticky top-0'
      } ${navBackground}`}
      aria-label="Main Navigation"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[52px]">
          
          {/* Logo: Brand emblem + two-color wordmark */}
          <Link to="/" className="flex items-center gap-2.5 group focus:outline-none">
            <img 
              src="/emblem-circle.png" 
              alt="Nova@Gen Logo Emblem" 
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-[0_2px_10px_rgba(8,101,245,0.45)] group-hover:scale-105 transition-transform select-none" 
            />
            <div className="flex items-baseline">
              <span className="text-white font-extrabold text-2xl tracking-tight lowercase">nova</span>
              <span className="text-[#0865F5] font-extrabold text-2xl tracking-tight lowercase">@gen</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0865F5] ml-0.5 inline-block"></span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-7">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors duration-200 ${
                    active
                      ? 'text-[#0865F5]'
                      : 'text-white/85 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Button */}
          <div className="hidden sm:flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0865F5] hover:bg-[#0052D6] text-white text-[11px] font-semibold uppercase tracking-wider rounded-[3px] shadow-sm transition-all duration-200 group"
            >
              <span>GET STARTED</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#0865F5]"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 py-4 px-4 bg-[#090F1E] border border-white/10 rounded-lg shadow-2xl space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-xs font-semibold tracking-wider text-white/90 hover:text-[#0865F5] py-2 border-b border-white/5 uppercase"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0865F5] text-white text-xs font-semibold uppercase tracking-wider rounded-[3px]"
              >
                <span>GET STARTED</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
