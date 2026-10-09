import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { servicesData } from '../data/servicesData';
import { Button } from '../components/Button';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

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
    <div className="space-y-20 pb-20">
      
      {/* Page Header Banner */}
      <section className="bg-[#0B1020] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-[#22D3EE] border border-indigo-400/30 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Engineering Capabilities
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Software & Digital Solutions Tailored for Growth
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            We engineer dependable web platforms, custom backend services, and user interfaces designed to address specific operational bottlenecks and drive measurable business results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center mx-auto text-[#22D3EE]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Our Engineering Standards
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We only undertake projects where we have genuine technical capability to deliver high-quality code, accessible interfaces, and maintainable systems. No exaggerated claims, just solid software craftsmanship.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22D3EE]" /> Clean Code
                </div>
                <p className="text-xs text-slate-400 mt-1">Modular architecture adhering to SOLID principles and clean separation.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22D3EE]" /> Scalability
                </div>
                <p className="text-xs text-slate-400 mt-1">Cloud-ready APIs and indexed databases built to handle increasing demand.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22D3EE]" /> Full Ownership
                </div>
                <p className="text-xs text-slate-400 mt-1">You receive 100% complete source code, documentation, and asset rights.</p>
              </div>
            </div>

            <div className="pt-4">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request a Custom Service Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
