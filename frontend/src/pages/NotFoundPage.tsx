import React from 'react';
import { Button } from '../components/Button';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-md bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-card">
        <span className="text-5xl font-extrabold text-[#6366F1] font-mono">404</span>
        <h1 className="text-2xl font-bold text-[#0B1020] mt-3">Page Not Found</h1>
        <p className="text-sm text-slate-500 mt-2 mb-6">
          The requested page could not be located. It might have been moved, renamed, or temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button to="/" variant="primary" icon={<Home className="w-4 h-4" />}>
            Return Home
          </Button>
          <Button to="/services" variant="outline" icon={<ArrowLeft className="w-4 h-4" />}>
            Browse Services
          </Button>
        </div>
      </div>
    </div>
  );
};
