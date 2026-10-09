import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Clock, 
  ShieldAlert
} from 'lucide-react';
import type { ContactFormData, ContactApiResponse } from '../types/contact';
import { submitContactForm } from '../services/contactService';

export const ContactForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    companyName: '',
    projectType: 'Website Development',
    estimatedBudget: '$3,000 - $7,500',
    projectDescription: '',
    preferredContactMethod: 'Email',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<ContactApiResponse | null>(null);

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const projectParam = searchParams.get('project');

    if (serviceParam) {
      setFormData((prev) => ({
        ...prev,
        projectType: serviceParam,
        projectDescription: `Hi Nova@Gen team, I am interested in discussing your ${serviceParam} services for our upcoming initiative.`,
      }));
    } else if (projectParam) {
      setFormData((prev) => ({
        ...prev,
        projectDescription: `Hi Nova@Gen team, I was inspired by your "${projectParam}" concept and would like to explore building a similar solution.`,
      }));
    }
  }, [searchParams]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@company.com).';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please describe your project goals or requirements.';
    } else if (formData.projectDescription.trim().length < 10) {
      newErrors.projectDescription = 'Please provide at least 10 characters detailing your requirements.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await submitContactForm(formData);
      setSubmitResult(response);

      if (response.success) {
        setFormData({
          fullName: '',
          email: '',
          companyName: '',
          projectType: 'Website Development',
          estimatedBudget: '$3,000 - $7,500',
          projectDescription: '',
          preferredContactMethod: 'Email',
          honeypot: '',
        });
      } else if (response.errors) {
        setErrors(response.errors);
      }
    } catch {
      setSubmitResult({
        success: false,
        message: 'An unexpected connection issue occurred. Please check your connection or contact us directly via email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-6 sm:p-8 lg:p-10 relative">
      <div className="mb-8">
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-[#6366F1] border border-indigo-100 uppercase tracking-wider">
          Direct Project Inquiry
        </span>
        <h3 className="text-2xl font-bold text-[#0B1020] mt-3">
          Tell Us About Your Vision
        </h3>
        <p className="text-sm text-slate-500 mt-1.5">
          Fill in the details below and we will analyze your requirements and get back to you with a tailored consultation.
        </p>
      </div>

      {/* Success Notification */}
      {submitResult && submitResult.success && (
        <div className="mb-8 p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 animate-fadeIn">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-emerald-900">
                Enquiry Successfully Submitted!
              </h4>
              <p className="text-xs sm:text-sm text-emerald-700 mt-1 leading-relaxed">
                {submitResult.message}
              </p>
              {submitResult.data?.referenceId && (
                <div className="mt-3 p-2.5 rounded bg-emerald-100/70 border border-emerald-300 text-xs font-mono text-emerald-900 flex items-center justify-between">
                  <span>Reference ID: <strong>{submitResult.data.referenceId}</strong></span>
                  <span className="text-[11px] text-emerald-700 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Status: Logged
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {submitResult && !submitResult.success && (
        <div className="mb-8 p-5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 animate-fadeIn">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-rose-900">Submission Error</h4>
              <p className="text-xs sm:text-sm text-rose-700 mt-1">
                {submitResult.message}
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Spam Honeypot Field (Hidden from normal users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website_url_honeypot">Leave blank</label>
          <input
            type="text"
            id="website_url_honeypot"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className={`w-full px-4 py-3 text-sm rounded-lg border bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.fullName
                  ? 'border-rose-400 focus:ring-rose-400 focus:border-rose-400'
                  : 'border-slate-300 focus:ring-[#6366F1] focus:border-[#6366F1]'
              }`}
            />
            {errors.fullName && (
              <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john@company.com"
              className={`w-full px-4 py-3 text-sm rounded-lg border bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.email
                  ? 'border-rose-400 focus:ring-rose-400 focus:border-rose-400'
                  : 'border-slate-300 focus:ring-[#6366F1] focus:border-[#6366F1]'
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Company Name and Project Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="companyName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Company Name <span className="text-slate-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Acme Innovations"
              className="w-full px-4 py-3 text-sm rounded-lg border border-slate-300 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] transition-all"
            />
          </div>

          <div>
            <label htmlFor="projectType" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Project Type <span className="text-rose-500">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm rounded-lg border border-slate-300 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] transition-all"
            >
              <option value="Website Development">Website Development</option>
              <option value="Web Application Development">Web Application Development</option>
              <option value="Custom Software Development">Custom Software Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="API Development and Integration">API Development and Integration</option>
              <option value="Database Design and Development">Database Design and Development</option>
              <option value="Business Process Automation">Business Process Automation</option>
              <option value="General Technical Consultation">General Technical Consultation</option>
            </select>
          </div>
        </div>

        {/* Row 3: Estimated Budget and Preferred Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="estimatedBudget" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Estimated Budget Range <span className="text-slate-400 font-normal lowercase">(optional)</span>
            </label>
            <select
              id="estimatedBudget"
              name="estimatedBudget"
              value={formData.estimatedBudget}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm rounded-lg border border-slate-300 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] transition-all"
            >
              <option value="Flexible / Under Discussion">Flexible / Under Discussion</option>
              <option value="<$3,000">&lt; $3,000</option>
              <option value="$3,000 - $7,500">$3,000 - $7,500</option>
              <option value="$7,500 - $15,000">$7,500 - $15,000</option>
              <option value="$15,000+">$15,000+</option>
            </select>
          </div>

          <div>
            <label htmlFor="preferredContactMethod" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Preferred Contact Method
            </label>
            <select
              id="preferredContactMethod"
              name="preferredContactMethod"
              value={formData.preferredContactMethod}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm rounded-lg border border-slate-300 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] transition-all"
            >
              <option value="Email">Email Communication</option>
              <option value="WhatsApp">WhatsApp Message</option>
              <option value="Video Call (Google Meet / Zoom)">Video Call (Google Meet / Zoom)</option>
              <option value="Phone Call">Phone Call</option>
            </select>
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor="projectDescription" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Project Description & Requirements <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            rows={5}
            value={formData.projectDescription}
            onChange={handleChange}
            placeholder="Tell us about the project goals, target audience, preferred timelines, or any key features you envision..."
            className={`w-full px-4 py-3 text-sm rounded-lg border bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.projectDescription
                ? 'border-rose-400 focus:ring-rose-400 focus:border-rose-400'
                : 'border-slate-300 focus:ring-[#6366F1] focus:border-[#6366F1]'
            }`}
          ></textarea>
          {errors.projectDescription && (
            <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.projectDescription}
            </p>
          )}
        </div>

        {/* Data Protection note */}
        <p className="text-xs text-slate-500 leading-normal flex items-start gap-1.5">
          <ShieldAlert className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
          <span>
            We respect your privacy. Your contact information is kept strictly confidential and used solely to respond to this project enquiry.
          </span>
        </p>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-[#6366F1] text-white font-semibold text-sm hover:bg-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 disabled:opacity-60 transition-all shadow-md shadow-indigo-500/25"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Transmitting Enquiry...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" /> Send Project Enquiry
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
