'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className={`text-2xl font-bold font-serif tracking-tighter ${scrolled ? 'text-slate-800' : 'text-white'} transition-colors duration-300 group`}>
              Incredible<span className="text-orange-500 group-hover:text-pink-500 transition-colors">India</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="/" scrolled={scrolled}>Home</NavLink>
              <NavLink href="#shegaon" scrolled={scrolled}>Shegaon</NavLink>
              <NavLink href="#manali" scrolled={scrolled}>Manali</NavLink>
              <NavLink href="#jaipur" scrolled={scrolled}>Jaipur</NavLink>
              <NavLink href="#laddakh" scrolled={scrolled}>Laddakh</NavLink>
              <NavLink href="#kailash-mansarovar" scrolled={scrolled}>Kailash</NavLink>
              <NavLink href="#contact" scrolled={scrolled} isButton>Contact</NavLink>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled ? 'text-slate-800' : 'text-white'} hover:text-orange-500 focus:outline-none transition-colors duration-200`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100/50 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="#shegaon" onClick={() => setIsOpen(false)}>Shegaon</MobileNavLink>
              <MobileNavLink href="#manali" onClick={() => setIsOpen(false)}>Manali</MobileNavLink>
              <MobileNavLink href="#jaipur" onClick={() => setIsOpen(false)}>Jaipur</MobileNavLink>
              <MobileNavLink href="#laddakh" onClick={() => setIsOpen(false)}>Laddakh</MobileNavLink>
              <MobileNavLink href="#kailash-mansarovar" onClick={() => setIsOpen(false)}>Kailash</MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsOpen(false)} isButton>Contact</MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLink({ href, children, scrolled, isButton }: { href: string; children: React.ReactNode; scrolled: boolean; isButton?: boolean }) {
  if (isButton) {
    return (
      <Link href={href} className={`px-5 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${scrolled ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-white text-orange-600 hover:bg-gray-100 shadow-lg'}`}>
        {children}
      </Link>
    );
  }
  return (
    <Link href={href} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group ${scrolled ? 'text-slate-600 hover:text-orange-600' : 'text-slate-100 hover:text-white'}`}>
      {children}
      <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${scrolled ? 'bg-orange-500' : 'bg-white'} transition-all duration-300 group-hover:w-full`}></span>
    </Link>
  );
}

function MobileNavLink({ href, onClick, children, isButton }: { href: string; onClick: () => void; children: React.ReactNode; isButton?: boolean }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block px-3 py-3 rounded-xl text-base font-medium transition-all duration-200 ${isButton ? 'bg-orange-500 text-white text-center mt-4' : 'text-slate-700 hover:bg-orange-50 hover:text-orange-600'}`}
    >
      {children}
    </Link>
  );
}
