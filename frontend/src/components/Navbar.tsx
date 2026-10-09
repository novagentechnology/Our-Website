import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1020]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/10 py-3.5'
          : 'bg-[#0B1020] border-b border-slate-800/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-3.5 group focus:outline-none py-1">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden p-[2px] bg-gradient-to-tr from-[#6366F1] via-[#22D3EE] to-[#6366F1] shadow-[0_0_20px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] group-hover:scale-105 transition-all duration-300 flex-shrink-0">
              <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#070A14] flex items-center justify-center">
                <img
                  src="/emblem-hd.png"
                  alt="Nova@Gen 3D Emblem"
                  className="w-full h-full object-cover object-center transform scale-110 select-none"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center leading-none">
                <span>Nova</span>
                <span className="text-[#22D3EE] font-black drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]">@</span>
                <span>Gen</span>
              </div>
              <span className="text-[11px] sm:text-xs font-extrabold text-slate-300 tracking-[0.25em] uppercase mt-1">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'text-[#22D3EE] bg-slate-800/60 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/contact"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#6366F1] text-white hover:bg-[#4F46E5] transition-colors"
            >
              Start Project
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0B1020]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  active
                    ? 'bg-[#6366F1]/20 text-[#22D3EE] font-semibold border-l-4 border-[#22D3EE]'
                    : 'text-slate-200 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-slate-800/80">
            <Button
              to="/contact"
              variant="primary"
              size="md"
              className="w-full justify-center"
              icon={<Sparkles className="w-4 h-4" />}
            >
              Discuss Your Project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
