import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { 
  Mail, 
  MessageSquare, 
  Clock, 
  CheckCircle2
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-20 pb-20 bg-white">
      
      {/* Header Banner with Real IT Developer Workspace Image */}
      <section className="relative text-white py-16 sm:py-24 overflow-hidden bg-[#090F1E] min-h-[340px] flex items-center justify-center">
        
        {/* Real IT Background Image (Explicit <img> for 100% reliable rendering) */}
        <img
          src="/it-contact-banner.jpg"
          alt="Modern IT Workstations and Displays"
          className="absolute inset-0 w-full h-full object-cover object-center select-none"
        />

        {/* Balanced Tech Overlay: IT office and workstations stay clearly visible */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(9, 15, 30, 0.75) 0%, rgba(9, 15, 30, 0.58) 55%, rgba(8, 101, 245, 0.30) 100%)'
          }}
        />

        {/* Subtle Tech Circuit Pattern */}
        <div className="absolute inset-0 bg-tech-circuit opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-[1160px] w-full mx-auto px-4 sm:px-6 text-center">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#0865F5] bg-white/10 px-3.5 py-1.5 rounded-[3px] inline-block mb-4 select-none">
            DIRECT COMMUNICATION
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-4">
            Start a Project Discussion
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Have an upcoming software initiative, web platform requirement, or custom tool to build? Reach out to Nova@Gen Technologies for an upfront, technical consultation.
          </p>
        </div>
      </section>

      {/* Main Form and Contact Details Grid */}
      <section className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Response Commitments (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-[6px] border border-[#EBEEF4] p-6 sm:p-8 shadow-[0_8px_30px_rgba(20,35,65,0.055)] space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-[#EBEEF4]">
                <img 
                  src="/emblem-circle.png" 
                  alt="Nova@Gen Logo" 
                  className="w-10 h-10 object-contain drop-shadow-[0_2px_8px_rgba(8,101,245,0.35)] select-none" 
                />
                <div>
                  <h2 className="text-lg font-bold text-[#171B26] leading-tight">
                    Nova@Gen Technologies
                  </h2>
                  <span className="text-[11px] font-semibold text-[#0865F5] uppercase tracking-wider">
                    Direct Engineering Office
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#777B86] leading-relaxed">
                Connect with our engineering team directly via email or our messaging channels for direct inquiries and technical scoping.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#F3F6FD] border border-blue-100 flex items-center justify-center text-[#0865F5] flex-shrink-0">
                    <Mail className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#171B26] uppercase tracking-wider">
                      Official Inquiries
                    </div>
                    <a
                      href="mailto:support@novagen.tech"
                      className="text-xs sm:text-sm font-semibold text-[#0865F5] hover:underline"
                    >
                      support@novagen.tech
                    </a>
                  </div>
                </div>

                {/* Direct Discussion */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#F3F6FD] border border-blue-100 flex items-center justify-center text-[#0865F5] flex-shrink-0">
                    <MessageSquare className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#171B26] uppercase tracking-wider">
                      Technical Consultation
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-700">
                      Direct Engineering Scoping &amp; Discovery
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#F3F6FD] border border-blue-100 flex items-center justify-center text-[#0865F5] flex-shrink-0">
                    <Clock className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#171B26] uppercase tracking-wider">
                      Working Hours
                    </div>
                    <div className="text-xs sm:text-sm text-[#777B86]">
                      Monday – Friday: 9:00 AM – 6:00 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Commitments */}
              <div className="pt-6 border-t border-[#EBEEF4] space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#171B26] mb-2">
                  Our Service Level
                </div>
                <div className="flex items-center gap-2 text-xs text-[#777B86]">
                  <CheckCircle2 className="w-4 h-4 text-[#0865F5] flex-shrink-0" />
                  <span>Responses within 24 to 48 business hours</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#777B86]">
                  <CheckCircle2 className="w-4 h-4 text-[#0865F5] flex-shrink-0" />
                  <span>Direct developer scoping — no aggressive sales tactics</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[6px] border border-[#EBEEF4] p-6 sm:p-8 shadow-[0_8px_30px_rgba(20,35,65,0.055)]">
              <h2 className="text-xl font-bold text-[#171B26] mb-2">
                Send Us a Project Brief
              </h2>
              <p className="text-xs sm:text-sm text-[#777B86] leading-relaxed mb-6">
                Tell us about your requirements, timeline, and goals. We will review your brief and schedule an exploratory technical review.
              </p>

              <ContactForm />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
