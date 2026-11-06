import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { UtilityStrip } from '../components/UtilityStrip';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const RootLayout: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#777B86] selection:bg-[#0865F5] selection:text-white">
      <UtilityStrip />
      {!isHome && <Navbar />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
