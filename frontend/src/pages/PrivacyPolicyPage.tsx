import React from 'react';
import { ShieldCheck, Lock, Eye, Server, RefreshCw } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Header */}
      <section className="bg-[#0B1020] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-[#22D3EE] border border-indigo-400/30 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" /> Legal & Transparency
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Last updated: October 2026 · Nova@Gen Technologies
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-subtle space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1020] flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#6366F1]" /> 1. Information We Collect
            </h2>
            <p>
              When you submit a project enquiry through the <strong>Nova@Gen Technologies</strong> website, we collect information you voluntarily provide in the contact form, including:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Company Name (optional)</li>
              <li>Project Category & Estimated Budget (optional)</li>
              <li>Project Description and technical specifications</li>
              <li>Preferred contact method</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1020] flex items-center gap-2">
              <Server className="w-5 h-5 text-[#6366F1]" /> 2. How We Use Your Information
            </h2>
            <p>
              The information submitted is used solely for legitimate business communication purposes:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
              <li>To review project feasibility and provide technical proposals or quotes.</li>
              <li>To reply directly to your queries and schedule discovery consultations.</li>
              <li>To fulfill administrative and record-keeping requirements related to our services.</li>
            </ul>
            <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <strong>Notice:</strong> We do NOT sell, rent, lease, or distribute your personal data to third-party advertisers or commercial entities under any circumstances.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1020] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#6366F1]" /> 3. Data Storage & Security Measures
            </h2>
            <p>
              We implement industry-standard security protocols to protect submitted data against unauthorized access, loss, or misuse:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
              <li>Encrypted transmission via HTTPS/TLS protocols.</li>
              <li>Server-side input sanitization and Bean Validation to prevent code injection.</li>
              <li>Encrypted database storage when configured on secure MongoDB Atlas cloud clusters.</li>
              <li>Automated bot spam prevention via honeypot input filters.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1020] flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-[#6366F1]" /> 4. Data Retention & Your Rights
            </h2>
            <p>
              We retain contact enquiries only for as long as necessary to fulfill project communication or maintain client records. You have the right to request a copy of your submitted information or ask for immediate deletion by writing to our team.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-200 space-y-2">
            <h3 className="text-base font-bold text-[#0B1020]">5. Contact Us Regarding Privacy</h3>
            <p className="text-sm text-slate-600">
              If you have any questions about this Privacy Policy or wish to modify your submitted details, please email us at:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs sm:text-sm text-slate-800">
              Email: <strong>contact@novagentechnologies.com</strong><br />
              Entity: <strong>Nova@Gen Technologies</strong>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
