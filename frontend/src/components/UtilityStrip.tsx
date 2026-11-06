import React from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './SocialIcons';

export const UtilityStrip: React.FC = () => {
  return (
    <div className="bg-[#f8f9fc] border-b border-[#EBEEF4] text-[#777B86] text-[11px] h-[34px] flex items-center select-none relative z-50">
      <div className="max-w-[1160px] w-full mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Left Side: Language & Slogan */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#171B26] transition-colors font-medium">
            <span>EN</span>
            <ChevronDown className="w-3 h-3 text-[#777B86]" />
          </div>

          <span className="text-[#d1d5db]">|</span>

          <div className="hidden sm:flex items-center gap-1.5 text-[11px]">
            <span>We only have we give.</span>
            <a
              href="#donate"
              className="text-[#0865F5] font-semibold hover:underline"
              onClick={(e) => { e.preventDefault(); }}
            >
              Donate Now
            </a>
          </div>
        </div>

        {/* Right Side: Contact, Divider, Socials */}
        <div className="flex items-center gap-4">
          {/* Email */}
          <a
            href="mailto:support@novagen.tech"
            className="flex items-center gap-1.5 hover:text-[#171B26] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#0865F5]" />
            <span className="font-medium">support@novagen.tech</span>
          </a>

          <span className="hidden sm:inline text-[#d1d5db]">|</span>

          {/* Social Icons with "in" for LinkedIn */}
          <div className="hidden sm:flex items-center gap-2.5 text-[#777B86]">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-[#0865F5] transition-colors"
            >
              <TwitterIcon className="w-3 h-3" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#0865F5] transition-colors"
            >
              <FacebookIcon className="w-3 h-3" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#0865F5] transition-colors"
            >
              <InstagramIcon className="w-3 h-3" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#0865F5] transition-colors font-bold text-[10px] leading-none flex items-center justify-center w-3.5 h-3.5 border border-current rounded-sm"
            >
              <span>in</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
