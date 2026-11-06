import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { servicesData } from '../data/servicesData';
import { Button } from '../components/Button';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="space-y-20 sm:space-y-24 pb-20 bg-white">
      
      {/* Page Header Banner with Bright, Real IT Software Development Background */}
      <section className="relative text-white py-16 sm:py-24 overflow-hidden bg-[#090F1E] min-h-[360px] flex items-center justify-center">
        <img
          src="/it-services-banner.jpg"
          alt="Live Code Editor and Software Engineering Development"
          className="absolute inset-0 w-full h-full object-cover object-center select-none"
        />
        {/* Balanced Tech Overlay: Code and developer workspace remain clearly visible */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(9, 15, 30, 0.75) 0%, rgba(9, 15, 30, 0.58) 55%, rgba(8, 101, 245, 0.30) 100%)'
          }}
        />
        <div className="absolute inset-0 bg-tech-circuit opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-[1160px] w-full mx-auto px-4 sm:px-6 text-center">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#0865F5] bg-white/10 backdrop-blur-sm border border-white/15 px-3.5 py-1.5 rounded-[3px] inline-block mb-4 select-none">
            ENGINEERING CAPABILITIES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-4">
            Software &amp; Digital Solutions Tailored for Growth
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto">
            We engineer dependable web platforms, custom backend services, and user interfaces designed to address operational bottlenecks and drive measurable business results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Our Core Services"
          title="Explore Our Full Range of"
          highlight="Development Services"
          description="Every service is delivered with realistic scopes, industry-standard modern frameworks, clean code architecture, and direct developer communication."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <ServiceCard key={service.id} service={service} featured={idx === 0 || idx === 1} />
          ))}
        </div>
      </section>

      {/* Service Standards Banner */}
      <section className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="bg-[#f8f9fc] rounded-[6px] p-8 sm:p-12 border border-[#EBEEF4]">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-[#F3F6FD] border border-blue-100 flex items-center justify-center mx-auto text-[#0865F5]">
              <ShieldCheck className="w-6 h-6 stroke-[2]" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#171B26]">
              Our Engineering Commitments
            </h2>

            <p className="text-sm text-[#777B86] leading-relaxed">
              We do not deliver black-box code or unmaintainable templates. Every deliverable includes structured git repositories, comprehensive README documentation, explicit environment variables, and full intellectual property handover.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-[4px] bg-white border border-[#EBEEF4]">
                <div className="text-xs font-bold text-[#171B26] mb-1">Clean Modular Code</div>
                <div className="text-[11px] text-[#777B86]">Separation of concerns with zero spaghetti dependencies.</div>
              </div>
              <div className="p-4 rounded-[4px] bg-white border border-[#EBEEF4]">
                <div className="text-xs font-bold text-[#171B26] mb-1">Direct Developer Access</div>
                <div className="text-[11px] text-[#777B86]">Communicate directly with the software engineers building your app.</div>
              </div>
              <div className="p-4 rounded-[4px] bg-white border border-[#EBEEF4]">
                <div className="text-xs font-bold text-[#171B26] mb-1">Transparent Milestones</div>
                <div className="text-[11px] text-[#777B86]">Iterative sprints with working prototypes every two weeks.</div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Discuss Your Requirements
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
