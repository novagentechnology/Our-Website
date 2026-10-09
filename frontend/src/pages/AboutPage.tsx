import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { teamData, collaborationBreakdown } from '../data/teamData';
import { Button } from '../components/Button';
import { 
  Users, 
  Target, 
  Compass, 
  Sparkles, 
  Code2, 
  ShieldCheck, 
  HeartHandshake, 
  Layers, 
  ArrowRight,
  Terminal,
  CheckCircle2
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#0B1020] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-[#22D3EE] border border-indigo-400/30 text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" /> About Nova@Gen Technologies
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Building Digital Solutions for Tomorrow
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            We are an ambitious, focused software development firm dedicated to engineering modern web applications, scalable backend systems, and thoughtful digital experiences.
          </p>

          {/* Official Brand Logo Showcase */}
          <div className="mt-10 max-w-lg mx-auto rounded-2xl p-2 bg-gradient-to-r from-[#6366F1]/30 via-[#22D3EE]/30 to-[#6366F1]/30 border border-slate-700/80 shadow-2xl backdrop-blur-md">
            <div className="rounded-xl overflow-hidden bg-black/60 p-4 border border-slate-800">
              <img
                src="/logo.png"
                alt="Nova@Gen Technologies Official Brand Logo"
                className="w-full h-auto max-h-40 object-contain mx-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#6366F1] mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#0B1020] mb-3">Our Vision</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To become a trusted software engineering partner for startups and growing enterprises worldwide by consistently delivering robust, accessible, and high-performance digital products that stand the test of time.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" /> Focused on long-term client value and software longevity.
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#06B6D4] mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#0B1020] mb-3">Our Mission</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To transform ambitious business ideas into practical, reliable, and scalable digital solutions through disciplined software craftsmanship, modern engineering practices, and transparent communication.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Grounded in pragmatic development and clear project scopes.
            </div>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What Drives Us"
            title="Our Core Engineering"
            highlight="Values"
            description="The guiding principles that shape every line of code we write and every client relationship we build."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-[#6366F1] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B1020] mb-2">Integrity & Clarity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Honest scopes, transparent timelines, and realistic commitments. We never make promises we cannot technically validate.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 text-[#06B6D4] flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B1020] mb-2">Code Craftsmanship</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We write clean, modular, and self-documenting code with comprehensive error handling, strong types, and unit tests.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-[#6366F1] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B1020] mb-2">User-Centric Focus</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We design intuitive, responsive, and accessible user journeys that make complex workflows feel effortless for end users.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 text-[#06B6D4] flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B1020] mb-2">Collaborative Spirit</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We work closely with our clients, treating their goals with equal passion and sharing proactive updates throughout development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team (Sathu & Janu) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Core Team"
          title="The Engineers Behind"
          highlight="Nova@Gen"
          description="A dedicated two-member development team combining frontend design craft with robust backend systems engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#6366F1] to-[#22D3EE] p-0.5 shadow-md flex-shrink-0">
                    <div className="w-full h-full bg-[#0B1020] rounded-[14px] flex items-center justify-center text-xl font-bold text-white">
                      {member.avatarPlaceholder}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1020]">{member.name}</h3>
                    <p className="text-xs sm:text-sm font-medium text-[#6366F1]">{member.role}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Focus Areas */}
                <div className="mb-5">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Key Focus Areas
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.focusAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="space-y-1.5 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Core Project Responsibilities
                  </div>
                  {member.keyResponsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <Terminal className="w-3.5 h-3.5 text-[#22D3EE] mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <a
                  href={member.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  aria-label={`${member.name} GitHub`}
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <span className="text-xs text-slate-400 ml-auto">
                  Available for new initiatives
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration Matrix Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Balanced Collaboration"
          title="How Sathu & Janu"
          highlight="Collaborate"
          description="Both engineers contribute across frontend, backend, database persistence, API design, testing, and documentation to deliver cohesive software."
        />

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-subtle max-w-4xl mx-auto">
          <div className="divide-y divide-slate-100">
            {collaborationBreakdown.map((item, idx) => (
              <div key={idx} className="p-5 sm:p-6 space-y-3">
                <div className="text-xs font-bold text-[#0B1020] uppercase tracking-wider bg-slate-100 inline-block px-2.5 py-1 rounded">
                  {item.phase}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-3 rounded-lg bg-indigo-50/60 border border-indigo-100">
                    <span className="font-bold text-[#6366F1] block mb-1">Sathu's Contributions:</span>
                    <span className="text-slate-700">{item.sathuTasks}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-cyan-50/60 border border-cyan-100">
                    <span className="font-bold text-[#0891B2] block mb-1">Janu's Contributions:</span>
                    <span className="text-slate-700">{item.januTasks}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Development Lifecycle"
          title="Our Structured"
          highlight="Workflow"
          description="Every project follows our systematic 4-stage lifecycle to guarantee consistency and code quality."
        />

        <ProcessTimeline />
      </section>

      {/* About CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1020] text-white rounded-3xl p-8 sm:p-12 text-center border border-slate-800 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Ready to Collaborate With Nova@Gen Technologies?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Get in touch directly with Sathu and Janu to explore how we can architect and develop your digital product.
          </p>
          <div>
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start a Project Conversation
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};
