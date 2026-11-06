import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171B26] text-slate-400 border-t border-[#EBEEF4]/10">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 group mb-3 focus:outline-none">
              <img 
                src="/emblem-circle.png" 
                alt="Nova@Gen Logo Emblem" 
                className="w-8 h-8 object-contain drop-shadow-[0_2px_10px_rgba(8,101,245,0.45)] group-hover:scale-105 transition-transform select-none" 
              />
              <div className="flex items-baseline">
                <span className="text-white font-extrabold text-2xl tracking-tight lowercase">nova</span>
                <span className="text-[#0865F5] font-extrabold text-2xl tracking-tight lowercase">@gen</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0865F5] ml-0.5 inline-block"></span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-400 max-w-sm">
              Delivering high-impact IT solutions, custom software engineering, and strategic technology consulting to help forward-thinking enterprises thrive.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="mailto:support@novagen.tech"
                className="w-9 h-9 rounded-[3px] bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0865F5] transition-colors"
                title="Email Us"
                aria-label="Email Nova@Gen Technologies"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[3px] bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0865F5] transition-colors"
                title="LinkedIn"
                aria-label="Nova@Gen LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[3px] bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0865F5] transition-colors"
                title="WhatsApp"
                aria-label="WhatsApp Nova@Gen"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  IT Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Cloud Migration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Enquiries */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Project Enquiries
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <p className="text-xs text-slate-400">
                Ready to discuss your next software initiative?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0865F5] hover:underline"
              >
                Submit Project Brief <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <div className="pt-2 text-xs space-y-1 text-slate-500">
                <div>Hours: Mon - Fri, 9:00 - 18:00</div>
                <div>Response time: 24 hours</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>© 2026 Nova@Gen Technologies. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" /> Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1">
              Engineered with <Heart className="w-3 h-3 text-[#0865F5]" /> for modern businesses
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
