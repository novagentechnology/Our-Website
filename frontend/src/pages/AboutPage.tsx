import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { teamData, collaborationBreakdown } from '../data/teamData';
import { Button } from '../components/Button';
import { 
  Target, 
  Compass, 
  Sparkles, 
  Code2, 
  ShieldCheck, 
  HeartHandshake, 
  Layers, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-20 sm:space-y-24 pb-20 bg-white">
      
      {/* 1. ELEGANT PAGE HEADER BANNER WITH REAL IT BACKGROUND */}
      <section className="relative text-white py-16 sm:py-24 overflow-hidden bg-[#090F1E] min-h-[380px] flex items-center justify-center">
        
        {/* Real IT Background Image (Explicit <img> for 100% guaranteed rendering) */}
        <img
          src="/it-team-meeting.jpg"
          alt="IT Software Team Meeting and Collaboration"
          className="absolute inset-0 w-full h-full object-cover object-center select-none"
        />

        {/* Balanced Dark Navy & Vivid Blue Tech Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(9, 15, 30, 0.75) 0%, rgba(9, 15, 30, 0.58) 55%, rgba(8, 101, 245, 0.30) 100%)'
          }}
        />

        {/* Subtle Tech Circuit Pattern */}
        <div className="absolute inset-0 bg-tech-circuit opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-[1160px] w-full mx-auto px-4 sm:px-6 text-center">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#0865F5] bg-white/10 backdrop-blur-sm border border-white/15 px-3.5 py-1.5 rounded-[3px] inline-block mb-4 select-none">
            ABOUT NOVA@GEN TECHNOLOGIES
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-3xl mx-auto mb-4">
            Building Digital Solutions for Tomorrow
          </h1>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto mb-10">
            We are a dedicated software engineering and IT services firm delivering modern web applications, robust backend architectures, and dependable digital platforms tailored for business growth.
          </p>

          {/* Key Metrics / Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-white/20">
            <div className="p-3 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">100+</div>
              <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mt-1">Projects Delivered</div>
            </div>
            <div className="p-3 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0865F5]">99.9%</div>
              <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mt-1">Uptime Architecture</div>
            </div>
            <div className="p-3 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">24/7</div>
              <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mt-1">Client Support</div>
            </div>
            <div className="p-3 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0865F5]">100%</div>
              <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mt-1">Disciplined Craft</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRAND IDENTITY SHOWCASE */}
      <section className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#090F1E] to-[#111A33] rounded-[8px] p-7 sm:p-9 border border-white/10 shadow-[0_12px_35px_rgba(20,35,65,0.08)] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0865F5]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 sm:gap-6 z-10">
            <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-white/5 border border-white/10 p-2 flex items-center justify-center flex-shrink-0 shadow-xl">
              <img
                src="/emblem-circle.png"
                alt="Nova@Gen Technologies Emblem"
                className="w-full h-full object-contain drop-shadow-[0_4px_14px_rgba(8,101,245,0.5)] select-none"
              />
            </div>
            <div>
              <div className="flex items-baseline justify-center sm:justify-start">
                <span className="text-white font-extrabold text-2xl sm:text-3xl tracking-tight lowercase">nova</span>
                <span className="text-[#0865F5] font-extrabold text-2xl sm:text-3xl tracking-tight lowercase">@gen</span>
                <span className="w-2 h-2 rounded-full bg-[#0865F5] ml-1 inline-block"></span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-300 font-semibold tracking-wide uppercase mt-1">
                Nova@Gen Technologies &bull; Software Engineering Firm
              </p>
              <p className="text-xs text-slate-400 mt-2 max-w-lg leading-relaxed">
                Dedicated software development agency delivering robust backend systems, intuitive user interfaces, and dependable cloud architectures.
              </p>
            </div>
          </div>

          <div className="z-10 flex-shrink-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] bg-[#0865F5]/20 border border-[#0865F5]/30 text-white text-xs font-bold tracking-wider uppercase select-none">
              <ShieldCheck className="w-4 h-4 text-[#0865F5]" /> Authentic Software Agency
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="bg-white rounded-[6px] p-8 border border-[#EBEEF4] shadow-[0_8px_30px_rgba(20,35,65,0.055)] hover:shadow-[0_14px_35px_rgba(20,35,65,0.08)] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#F3F6FD] text-[#0865F5] flex items-center justify-center mb-5 group-hover:bg-[#0865F5] group-hover:text-white transition-colors duration-300">
                <Compass className="w-6 h-6 stroke-[1.75]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0865F5] block mb-1">
                OUR VISION
              </span>
              <h2 className="text-2xl font-bold text-[#171B26] mb-3">
                Empowering Businesses Through Engineering
              </h2>
              <p className="text-sm text-[#777B86] leading-relaxed">
                To become a premier software engineering partner by consistently delivering resilient, accessible, and high-performance digital products that scale smoothly with enterprise growth.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#EBEEF4] text-xs text-[#777B86] flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#0865F5]" /> Focused on long-term client value and software longevity.
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-[6px] p-8 border border-[#EBEEF4] shadow-[0_8px_30px_rgba(20,35,65,0.055)] hover:shadow-[0_14px_35px_rgba(20,35,65,0.08)] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#F3F6FD] text-[#0865F5] flex items-center justify-center mb-5 group-hover:bg-[#0865F5] group-hover:text-white transition-colors duration-300">
                <Target className="w-6 h-6 stroke-[1.75]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0865F5] block mb-1">
                OUR MISSION
              </span>
              <h2 className="text-2xl font-bold text-[#171B26] mb-3">
                Practical, Reliable &amp; Scalable Execution
              </h2>
              <p className="text-sm text-[#777B86] leading-relaxed">
                To transform ambitious business ideas into practical, reliable, and scalable digital solutions through disciplined software craftsmanship, modern engineering practices, and transparent communication.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#EBEEF4] text-xs text-[#777B86] flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0865F5]" /> Grounded in pragmatic development and clear project scopes.
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="bg-[#f8f9fc] py-16 sm:py-20 border-y border-[#EBEEF4]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="What Drives Us"
            title="Our Core Engineering"
            highlight="Values"
            description="The guiding principles that shape every line of code we write and every client relationship we build."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-[6px] border border-[#EBEEF4] shadow-[0_8px_30px_rgba(20,35,65,0.04)] hover:shadow-[0_12px_30px_rgba(20,35,65,0.08)] hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#F3F6FD] text-[#0865F5] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="text-base font-bold text-[#171B26] mb-2">Integrity &amp; Clarity</h3>
              <p className="text-xs leading-relaxed text-[#777B86]">
                Honest scopes, transparent timelines, and realistic commitments. We never make promises we cannot technically validate.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[6px] border border-[#EBEEF4] shadow-[0_8px_30px_rgba(20,35,65,0.04)] hover:shadow-[0_12px_30px_rgba(20,35,65,0.08)] hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#F3F6FD] text-[#0865F5] flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="text-base font-bold text-[#171B26] mb-2">Code Craftsmanship</h3>
              <p className="text-xs leading-relaxed text-[#777B86]">
                We write clean, modular, and self-documenting code with comprehensive error handling, strong types, and unit tests.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[6px] border border-[#EBEEF4] shadow-[0_8px_30px_rgba(20,35,65,0.04)] hover:shadow-[0_12px_30px_rgba(20,35,65,0.08)] hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#F3F6FD] text-[#0865F5] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="text-base font-bold text-[#171B26] mb-2">User-Centric Focus</h3>
              <p className="text-xs leading-relaxed text-[#777B86]">
                We design intuitive, responsive, and accessible user journeys that make complex workflows feel effortless for end users.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[6px] border border-[#EBEEF4] shadow-[0_8px_30px_rgba(20,35,65,0.04)] hover:shadow-[0_12px_30px_rgba(20,35,65,0.08)] hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#F3F6FD] text-[#0865F5] flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="text-base font-bold text-[#171B26] mb-2">Collaborative Spirit</h3>
              <p className="text-xs leading-relaxed text-[#777B86]">
                We work closely with our clients, treating their goals with equal passion and sharing proactive updates throughout development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEET THE CO-FOUNDERS & CEOS */}
      <section id="team" className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Executive Leadership"
          title="Co-Founders & CEOs Behind"
          highlight="Nova@Gen"
          description="Meet the Co-Founders & CEOs driving software engineering, technical architecture, and strategic digital direction."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-[6px] p-7 sm:p-8 border border-[#EBEEF4] shadow-[0_8px_30px_rgba(20,35,65,0.055)] hover:shadow-[0_14px_35px_rgba(20,35,65,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-[72px] h-[72px] min-w-[72px] min-h-[72px] aspect-square rounded-full bg-[#F3F6FD] text-[#0865F5] border-2 border-blue-100 overflow-hidden flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-md">
                    {member.avatarUrl ? (
                      <img
                        src={member.avatarUrl}
                        alt={member.name}
                        width={72}
                        height={72}
                        className="w-full h-full aspect-square object-cover object-center select-none block"
                      />
                    ) : (
                      <span>{member.avatarPlaceholder}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#171B26] leading-snug">{member.name}</h3>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[3px] bg-[#0865F5]/10 text-[#0865F5] border border-[#0865F5]/20 text-[10px] font-bold uppercase tracking-wider my-1">
                      <span>Co-Founder &amp; CEO</span>
                    </div>
                    <p className="text-xs text-[#777B86] font-medium leading-tight">{member.role}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#777B86] leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Focus Areas */}
                <div className="mb-5">
                  <div className="text-[11px] font-bold text-[#171B26] uppercase tracking-wider mb-2">
                    Key Focus Areas
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.focusAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-[3px] bg-[#F3F6FD] text-[#0865F5] border border-blue-100"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="space-y-1.5 pt-4 border-t border-[#EBEEF4]">
                  <div className="text-[11px] font-bold text-[#171B26] uppercase tracking-wider mb-1">
                    Core Project Responsibilities
                  </div>
                  {member.keyResponsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#777B86]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0865F5] mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 mt-6 border-t border-[#EBEEF4] flex items-center gap-3">
                <a
                  href={member.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-[3px] bg-[#F3F6FD] hover:bg-[#0865F5] hover:text-white text-[#171B26] flex items-center justify-center transition-colors"
                  aria-label={`${member.name} GitHub`}
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-[3px] bg-[#F3F6FD] hover:bg-[#0865F5] hover:text-white text-[#171B26] flex items-center justify-center transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                </a>
                <span className="text-xs text-[#777B86] ml-auto font-medium">
                  Available for new projects
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. COLLABORATION MATRIX */}
      <section className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Balanced Collaboration"
          title="How Sathurjan & Januka"
          highlight="Collaborate"
          description="Both Co-Founders & CEOs lead software architecture, frontend design craft, Spring Boot security, MongoDB persistence, and quality testing."
        />

        <div className="bg-white rounded-[6px] border border-[#EBEEF4] overflow-hidden shadow-[0_8px_30px_rgba(20,35,65,0.055)] max-w-4xl mx-auto">
          <div className="divide-y divide-[#EBEEF4]">
            {collaborationBreakdown.map((item, idx) => (
              <div key={idx} className="p-5 sm:p-6 space-y-3">
                <div className="text-xs font-bold text-[#0865F5] uppercase tracking-wider bg-[#F3F6FD] border border-blue-100 inline-block px-3 py-1 rounded-[3px]">
                  {item.phase}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-[4px] bg-[#F8FAFC] border border-[#EBEEF4]">
                    <span className="font-bold text-[#171B26] block mb-1">Sathurjan's Contributions:</span>
                    <span className="text-[#777B86]">{item.sathurjanTasks}</span>
                  </div>
                  <div className="p-3.5 rounded-[4px] bg-[#F8FAFC] border border-[#EBEEF4]">
                    <span className="font-bold text-[#0865F5] block mb-1">Januka's Contributions:</span>
                    <span className="text-[#777B86]">{item.janukaTasks}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ENGINEERING PROCESS */}
      <section className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Development Lifecycle"
          title="Our Structured"
          highlight="Workflow"
          description="Every project follows our systematic 4-stage lifecycle to guarantee consistency and code quality."
        />

        <ProcessTimeline />
      </section>

      {/* 7. ABOUT CTA BANNER WITH IT SERVERS BACKGROUND */}
      <section className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="relative bg-[#090F1E] text-white rounded-[6px] p-8 sm:p-12 text-center overflow-hidden shadow-2xl">
          <img
            src="/it-server-cloud.jpg"
            alt="Cloud Infrastructure & Servers"
            className="absolute inset-0 w-full h-full object-cover object-center select-none"
          />
          <div 
            className="absolute inset-0" 
            style={{ 
              background: 'linear-gradient(135deg, rgba(9, 15, 30, 0.85) 0%, rgba(9, 15, 30, 0.70) 50%, rgba(8, 101, 245, 0.35) 100%)' 
            }} 
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0865F5]">
              LET'S WORK TOGETHER
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Ready to Collaborate With Nova@Gen Technologies?
            </h2>
            <p className="text-sm text-slate-300">
              Get in touch directly with our engineering team to explore how we can architect and develop your digital product.
            </p>
            <div className="pt-2">
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
        </div>
      </section>

    </div>
  );
};
