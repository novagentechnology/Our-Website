import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1020] text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3.5 group mb-3">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden p-[2px] bg-gradient-to-tr from-[#6366F1] via-[#22D3EE] to-[#6366F1] shadow-[0_0_15px_rgba(34,211,238,0.25)] flex-shrink-0">
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
                  <span className="text-[#22D3EE] font-black drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">@</span>
                  <span>Gen</span>
                </div>
                <span className="text-[11px] sm:text-xs font-extrabold text-slate-300 tracking-[0.25em] uppercase mt-1">
                  Technologies
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Building Digital Solutions for Tomorrow. We design and develop modern websites, intelligent applications, and scalable software solutions that help businesses grow.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="mailto:contact@novagentechnologies.com"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#22D3EE] hover:border-slate-700 transition-colors"
                title="Email Us"
                aria-label="Email Nova@Gen Technologies"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#22D3EE] hover:border-slate-700 transition-colors"
                title="LinkedIn"
                aria-label="Nova@Gen LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#22D3EE] hover:border-slate-700 transition-colors"
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
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">Our Work</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services#website-development" className="hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services#web-application-development" className="hover:text-white transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link to="/services#custom-software-development" className="hover:text-white transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link to="/services#ui-ux-design" className="hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services#api-development-integration" className="hover:text-white transition-colors">
                  API Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Enquiries */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Project Enquiries
            </h3>
            <div className="space-y-3 text-sm">
              <p className="text-xs text-slate-400">
                Ready to discuss your next software initiative?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#22D3EE] hover:underline"
              >
                Submit Project Brief <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <div className="pt-2 text-xs space-y-1 text-slate-500">
                <div>Hours: Mon - Fri, 9:00 - 18:00</div>
                <div>Response time: 24-48 hours</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Nova@Gen Technologies. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" /> Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1">
              Engineered with <Heart className="w-3 h-3 text-[#6366F1]" /> for modern businesses
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
