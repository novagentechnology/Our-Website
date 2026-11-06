import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  X,
  Network, 
  Users, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';
import { Navbar } from '../components/Navbar';

export const HomePage: React.FC = () => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  return (
    <div className="bg-white">
      
      {/* ========================================================= */}
      {/* B. HERO WITH OVERLAY NAVIGATION                           */}
      {/* ========================================================= */}
      <section className="relative w-full bg-[#090F1E] text-white min-h-[660px] lg:min-h-[710px] flex flex-col justify-between overflow-hidden">
        
        {/* Full-width photograph of IT/business team around conference table */}
        <img
          src="/it-hero-banner.jpg"
          alt="Diverse business and IT team collaborating around a conference table in a modern office"
          className="absolute inset-0 w-full h-full object-cover object-center select-none"
        />

        {/* Balanced Dark Navy & Blue Overlay allowing the conference room and map to remain clearly visible */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(9, 15, 30, 0.78) 0%, rgba(9, 15, 30, 0.60) 55%, rgba(8, 101, 245, 0.30) 100%)'
          }}
        />

        {/* Top: Overlay Navigation inside the hero image */}
        <div className="relative z-20 w-full">
          <Navbar transparent={true} />
        </div>

        {/* Center: Hero Content */}
        <div className="relative z-10 max-w-[1160px] w-full mx-auto px-4 sm:px-6 pt-10 pb-16 my-auto text-center">
          {/* Eyebrow */}
          <div className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-white/90 mb-4 select-none">
            SUCCESS YOUR BUSINESS
          </div>

          {/* Main Heading (constrained to 2 lines on desktop) */}
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.18] tracking-tight max-w-3xl mx-auto mb-8">
            Excellent IT services for<br className="hidden sm:inline" /> your success
          </h1>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0865F5] hover:bg-[#0052D6] text-white text-xs sm:text-[13px] font-semibold uppercase tracking-wider rounded-[3px] shadow-lg shadow-blue-600/30 transition-all duration-200 group active:translate-y-0.5"
            >
              <span>GET STARTED</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white hover:bg-slate-100 text-[#171B26] text-xs sm:text-[13px] font-semibold uppercase tracking-wider rounded-[3px] shadow-lg transition-all duration-200 group active:translate-y-0.5"
            >
              <span>CONTACT US</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0865F5]" />
            </Link>
          </div>
        </div>

        {/* Lower Left: Play Control & Story Link */}
        <div className="relative z-10 max-w-[1160px] w-full mx-auto px-4 sm:px-6 pb-6">
          <div className="flex items-center gap-3.5">
            <button
              type="button"
              onClick={() => setIsStoryModalOpen(true)}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0865F5] shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#090F1E] group"
              aria-label="Play our story"
            >
              <Play className="w-4 h-4 fill-[#0865F5] text-[#0865F5] translate-x-0.5" />
            </button>
            <div className="text-left select-none">
              <button
                type="button"
                onClick={() => setIsStoryModalOpen(true)}
                className="text-sm font-bold text-white hover:text-white/90 block leading-tight text-left"
              >
                Watch Our Story
              </button>
              <span className="text-[11px] text-white/70 block mt-0.5 font-medium">
                Subscribe Now
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Transition: Asymmetric White SVG Wave Cutting into Hero */}
        <div className="relative w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 sm:h-16 lg:h-20 block"
            preserveAspectRatio="none"
          >
            {/* Wave rises at far left, dips through middle, rises slightly near right */}
            <path
              d="M0 40 C 320 90, 720 95, 1040 45 C 1220 15, 1360 35, 1440 25 L 1440 100 L 0 100 Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>

      </section>

      {/* ========================================================= */}
      {/* C. WHY PEOPLE CHOOSE OUR SERVICES                         */}
      {/* ========================================================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            
            {/* Left Intro Column (approx 38-40%) */}
            <div className="lg:col-span-5 pr-0 lg:pr-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0865F5] block mb-2.5">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171B26] leading-[1.2] mb-4">
                Why people choose<br />our services
              </h2>
              <p className="text-sm leading-relaxed text-[#777B86] max-w-sm">
                We deliver high-impact software engineering, resilient cloud architectures, and dedicated enterprise support designed to fuel sustainable growth.
              </p>
            </div>

            {/* Right Cards (approx 60-62%): Exactly 3 elevated cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
              
              {/* Card 1: IT Solutions */}
              <div className="bg-white rounded-[6px] p-6 text-center border border-[#EBEEF4] shadow-[0_8px_30px_rgba(20,35,65,0.055)] hover:shadow-[0_14px_35px_rgba(20,35,65,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between min-h-[250px] group">
                <div className="w-14 h-14 rounded-full bg-[#F3F6FD] text-[#0865F5] flex items-center justify-center mb-4 group-hover:bg-[#0865F5] transition-colors duration-300 overflow-hidden p-2">
                  <img 
                    src="/service-icon-1.png" 
                    alt="IT Solutions Icon" 
                    className="w-10 h-10 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                    onError={(e) => {
                      // Fallback to vector icon if image fails
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <Network className="w-6 h-6 stroke-[1.75] hidden" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#171B26] mb-2">
                    IT Solutions
                  </h3>
                  <p className="text-xs text-[#777B86] leading-relaxed mb-4">
                    Architected web and enterprise software built with modern performance standards.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="text-[11px] font-bold text-[#0865F5] uppercase tracking-wider inline-flex items-center gap-1 hover:text-[#0052D6] transition-colors mt-auto"
                >
                  <span>READ DETAILS</span>
                </Link>
              </div>

              {/* Card 2: IT Consultant */}
              <div className="bg-white rounded-[6px] p-6 text-center border border-[#EBEEF4] shadow-[0_8px_30px_rgba(20,35,65,0.055)] hover:shadow-[0_14px_35px_rgba(20,35,65,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between min-h-[250px] group">
                <div className="w-14 h-14 rounded-full bg-[#F3F6FD] text-[#0865F5] flex items-center justify-center mb-4 group-hover:bg-[#0865F5] transition-colors duration-300 overflow-hidden p-2">
                  <img 
                    src="/service-icon-2.png" 
                    alt="IT Consultant Icon" 
                    className="w-10 h-10 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <Users className="w-6 h-6 stroke-[1.75] hidden" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#171B26] mb-2">
                    IT Consultant
                  </h3>
                  <p className="text-xs text-[#777B86] leading-relaxed mb-4">
                    Strategic infrastructure advisory, tech stack modernization, and scale consulting.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="text-[11px] font-bold text-[#0865F5] uppercase tracking-wider inline-flex items-center gap-1 hover:text-[#0052D6] transition-colors mt-auto"
                >
                  <span>READ DETAILS</span>
                </Link>
              </div>

              {/* Card 3: Cyber Security */}
              <div className="bg-white rounded-[6px] p-6 text-center border border-[#EBEEF4] shadow-[0_8px_30px_rgba(20,35,65,0.055)] hover:shadow-[0_14px_35px_rgba(20,35,65,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between min-h-[250px] group">
                <div className="w-14 h-14 rounded-full bg-[#F3F6FD] text-[#0865F5] flex items-center justify-center mb-4 group-hover:bg-[#0865F5] transition-colors duration-300 overflow-hidden p-2">
                  <img 
                    src="/service-icon-3.png" 
                    alt="Cyber Security Icon" 
                    className="w-10 h-10 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <ShieldCheck className="w-6 h-6 stroke-[1.75] hidden" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#171B26] mb-2">
                    Cyber Security
                  </h3>
                  <p className="text-xs text-[#777B86] leading-relaxed mb-4">
                    Proactive threat detection, cloud infrastructure hardening, and data protection.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="text-[11px] font-bold text-[#0865F5] uppercase tracking-wider inline-flex items-center gap-1 hover:text-[#0052D6] transition-colors mt-auto"
                >
                  <span>READ DETAILS</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* D. CONNECTING PEOPLE & TECHNOLOGY                         */}
      {/* ========================================================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-28 relative overflow-hidden">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Visual Collage (approx 50%) */}
            <div className="lg:col-span-6 relative pb-6 sm:pb-8">
              
              {/* Subtle tech circuit line pattern behind imagery */}
              <div className="absolute -top-10 -left-10 w-72 h-72 opacity-25 pointer-events-none text-[#0865F5] select-none">
                <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="20" cy="20" r="4" fill="currentColor"/>
                  <circle cx="90" cy="40" r="3" fill="currentColor"/>
                  <circle cx="150" cy="110" r="4" fill="currentColor"/>
                  <circle cx="50" cy="160" r="4" fill="currentColor"/>
                  <path d="M20 20 H70 V40 H90 V90 H150 V110" strokeDasharray="3 3"/>
                  <path d="M70 40 V160 H50"/>
                  <circle cx="70" cy="40" r="3" fill="currentColor"/>
                </svg>
              </div>

              {/* Main larger photo (upper/right): Real IT developer workstation with dual screens and code */}
              <div className="w-[86%] ml-auto rounded-[8px] overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100 relative z-0 border border-slate-200/80 group">
                <img
                  src="/it-workspace-screens.jpg"
                  alt="Real software engineering workstation with dual screens and code"
                  className="w-full h-full object-cover object-center select-none group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Secondary smaller photo (lower/left, partially overlapping): Real code in IDE and developer coding */}
              <div className="w-[54%] -mt-20 sm:-mt-24 ml-0 rounded-[8px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-slate-100 relative z-10 group">
                <img
                  src="/it-developer-code.jpg"
                  alt="Live code editor in IDE on developer screen"
                  className="w-full h-full object-cover object-center select-none group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Floating Nova@Gen Brand Authority Stamp */}
              <div className="absolute top-[40%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-2xl border border-slate-100 flex items-center gap-3 select-none hover:scale-105 transition-transform duration-300">
                <img 
                  src="/emblem-circle.png" 
                  alt="Nova@Gen Emblem" 
                  className="w-10 h-10 object-contain drop-shadow-[0_2px_8px_rgba(8,101,245,0.4)]"
                />
                <div className="text-left">
                  <div className="text-xs font-black text-[#171B26] tracking-tight flex items-baseline">
                    <span>nova</span><span className="text-[#0865F5]">@gen</span>
                  </div>
                  <div className="text-[9px] font-bold text-[#0865F5] uppercase tracking-wider">
                    Technologies
                  </div>
                </div>
              </div>

            </div>

            {/* Right Text Column (approx 50%) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0865F5] block mb-2.5">
                  WHY CHOOSE US
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171B26] leading-[1.2]">
                  Connecting people &amp; technology
                </h2>
              </div>

              <p className="text-sm sm:text-[15px] leading-relaxed text-[#777B86]">
                We combine deep technical capabilities with user-centric strategies to solve complex challenges. Our dedicated engineering specialists help enterprises innovate faster, modernize workflows, and deliver transformative customer value.
              </p>

              {/* Row of two icon-and-label perks in blue outline style using extracted transparent icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 pb-2">
                
                {/* Perk 1 */}
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 bg-[#F3F6FD] p-1.5 border border-blue-100">
                    <img 
                      src="/perk-icon-1.png" 
                      alt="Provide Skills Services" 
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div className="text-sm font-bold text-[#171B26] leading-snug">
                    Provide Skills<br />Services
                  </div>
                </div>

                {/* Perk 2 */}
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 bg-[#F3F6FD] p-1.5 border border-blue-100">
                    <img 
                      src="/perk-icon-2.png" 
                      alt="Urgent Support for Clients" 
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div className="text-sm font-bold text-[#171B26] leading-snug">
                    Urgent Support<br />for Clients
                  </div>
                </div>

              </div>

              {/* Primary Blue Button */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#0865F5] hover:bg-[#0052D6] text-white text-xs font-semibold uppercase tracking-wider rounded-[3px] shadow-md shadow-blue-600/20 transition-all duration-200 group active:translate-y-0.5"
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* E. DIGITAL MARKETING FULL-WIDTH CTA BANNER                */}
      {/* ========================================================= */}
      <section className="relative w-full bg-[#090E17] text-white py-20 sm:py-24 overflow-hidden">
        <img
          src="/it-server-cloud.jpg"
          alt="Cloud Server Infrastructure and Data Center"
          className="absolute inset-0 w-full h-full object-cover object-center select-none"
        />
        {/* Balanced overlay allowing the IT cloud infrastructure and server lights to shine through */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(9, 14, 23, 0.85) 0%, rgba(9, 14, 23, 0.70) 55%, rgba(8, 101, 245, 0.35) 100%)'
          }}
        />

        <div className="relative z-10 max-w-[1160px] mx-auto px-4 sm:px-6 text-center">
          
          {/* Centered Large White Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-[1.25] max-w-2xl mx-auto mb-8">
            It's Your Time To Grow Through<br className="hidden sm:inline" /> Digital Marketing.
          </h2>

          {/* Dual Horizontally Aligned Blue Filled Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-14">
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#0865F5] hover:bg-[#0052D6] text-white text-xs font-semibold uppercase tracking-wider rounded-[3px] shadow-lg shadow-blue-600/25 transition-all duration-200 group active:translate-y-0.5"
            >
              <span>LEARN MORE</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#0865F5] hover:bg-[#0052D6] text-white text-xs font-semibold uppercase tracking-wider rounded-[3px] shadow-lg shadow-blue-600/25 transition-all duration-200 group active:translate-y-0.5"
            >
              <span>GET STARTED</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Along the bottom: Horizontal list of 4 small white outlined-check icon benefits */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4 border-t border-white/10 max-w-4xl mx-auto">
            
            <div className="inline-flex items-center gap-2 text-white/90 text-xs sm:text-[13px] font-medium tracking-wide">
              <CheckCircle2 className="w-4 h-4 text-white stroke-[2]" />
              <span>Lead Generation</span>
            </div>

            <div className="inline-flex items-center gap-2 text-white/90 text-xs sm:text-[13px] font-medium tracking-wide">
              <CheckCircle2 className="w-4 h-4 text-white stroke-[2]" />
              <span>Recommender Systems</span>
            </div>

            <div className="inline-flex items-center gap-2 text-white/90 text-xs sm:text-[13px] font-medium tracking-wide">
              <CheckCircle2 className="w-4 h-4 text-white stroke-[2]" />
              <span>Sales Prediction</span>
            </div>

            <div className="inline-flex items-center gap-2 text-white/90 text-xs sm:text-[13px] font-medium tracking-wide">
              <CheckCircle2 className="w-4 h-4 text-white stroke-[2]" />
              <span>Try it Free</span>
            </div>

          </div>

        </div>
      </section>

      {/* Accessible Story Modal */}
      {isStoryModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="story-modal-title"
        >
          <div className="relative w-full max-w-2xl bg-[#090F1E] border border-white/10 rounded-lg p-6 shadow-2xl text-white">
            <button
              type="button"
              onClick={() => setIsStoryModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 p-1.5 flex items-center justify-center flex-shrink-0 border border-white/15">
                <img src="/emblem-circle.png" alt="Nova@Gen Logo" className="w-full h-full object-contain drop-shadow" />
              </div>
              <div>
                <h3 id="story-modal-title" className="text-lg font-bold text-white">
                  Our Engineering Journey
                </h3>
                <p className="text-xs text-slate-400">Nova@Gen Technologies</p>
              </div>
            </div>

            <div className="aspect-video w-full rounded-md overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center relative">
              <img
                src="/it-team-meeting.jpg"
                alt="Nova@Gen story preview"
                className="w-full h-full object-cover opacity-60 select-none"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-[#0865F5] text-white flex items-center justify-center shadow-lg mb-3">
                  <Play className="w-6 h-6 fill-white translate-x-0.5" />
                </div>
                <p className="text-sm font-semibold text-white max-w-md">
                  Delivering cutting-edge IT systems and engineering excellence for enterprises worldwide.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsStoryModalOpen(false)}
                className="px-5 py-2 bg-[#0865F5] text-white text-xs font-semibold uppercase tracking-wider rounded-[3px] hover:bg-[#0052D6] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
