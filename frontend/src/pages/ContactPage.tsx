import React, { useState, useEffect } from 'react';
import { ContactForm } from '../components/ContactForm';
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Activity,
  Server
} from 'lucide-react';
import { LinkedInIcon } from '../components/SocialIcons';
import { checkApiHealth } from '../services/contactService';

export const ContactPage: React.FC = () => {
  const [isBackendOnline, setIsBackendOnline] = useState<boolean | null>(null);

  useEffect(() => {
    checkApiHealth().then((status) => {
      setIsBackendOnline(status);
    });
  }, []);

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#0B1020] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-[#22D3EE] border border-indigo-400/30 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" /> Direct Communication
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Start a Project Discussion
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Have an upcoming software initiative, web platform requirement, or custom tool to build? Reach out to Nova@Gen Technologies for an upfront, technical consultation.
          </p>
        </div>
      </section>

      {/* Main Form and Contact Details Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Response Commitments (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-subtle space-y-6">
              <h2 className="text-xl font-bold text-[#0B1020]">
                Contact Information
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect with our engineering team directly via email or our messaging channels for direct inquiries and technical scoping.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#6366F1] flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Business Email</div>
                    <a
                      href="mailto:contact@novagentechnologies.com"
                      className="text-sm font-semibold text-[#0B1020] hover:text-[#6366F1] transition-colors"
                    >
                      contact@novagentechnologies.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">WhatsApp Business</div>
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#0B1020] hover:text-emerald-600 transition-colors"
                    >
                      Connect on WhatsApp
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-cyan-200 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#0891B2] flex-shrink-0">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Professional Profile</div>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#0B1020] hover:text-[#0891B2] transition-colors"
                    >
                      Nova@Gen on LinkedIn
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-9 h-9 rounded-lg bg-slate-200 flex items-center justify-center text-slate-700 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Office & Location</div>
                    <div className="text-sm font-semibold text-[#0B1020]">
                      Remote First · Serving Global Clients
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Turnaround & Security Commitment */}
            <div className="bg-[#0B1020] text-white rounded-2xl p-6 border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#22D3EE] flex items-center gap-2">
                <Clock className="w-4 h-4" /> Response Turnaround
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We review every inquiry diligently and respond within <strong>24 to 48 business hours</strong> with initial technical feedback and scheduling options.
              </p>

              <div className="pt-2 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Non-Disclosure (NDA) friendly
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Transparent scope estimation
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> No aggressive sales pitches
                </div>
              </div>

              {/* Live Backend Connection Indicator */}
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5" /> Spring Boot API:
                </span>
                {isBackendOnline === true ? (
                  <span className="text-emerald-400 flex items-center gap-1 font-mono font-medium">
                    <Activity className="w-3 h-3 animate-pulse" /> Online (Port 8080)
                  </span>
                ) : (
                  <span className="text-amber-400 flex items-center gap-1 font-mono">
                    <ShieldCheck className="w-3 h-3" /> Ready (Local Fallback Active)
                  </span>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
};
