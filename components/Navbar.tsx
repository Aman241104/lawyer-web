"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Practice Areas", href: "/#practice" },
    { label: "Terms", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <nav 
        className={`fixed top-0 z-50 w-full transition-all duration-700 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md py-4 border-b border-primary/5 shadow-sm" 
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className={`font-serif text-xl md:text-2xl font-bold tracking-tighter transition-colors duration-500 uppercase ${
                  scrolled ? "text-primary" : "text-white"
                }`}
              >
                ADVOCATE <span className="text-accent italic">JAY G PATEL</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-12">
                {navLinks.map((link) => (
                  <Link 
                    key={link.label}
                    href={link.href} 
                    className={`transition-all font-sans font-bold text-[10px] uppercase tracking-[0.3em] relative group ${
                      scrolled ? "text-primary/80 hover:text-primary" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full`}></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
               <button 
                onClick={toggleMobileMenu}
                className="p-2 focus:outline-none"
                aria-label="Toggle Menu"
               >
                 <div className="space-y-1.5">
                   <div className={`w-6 h-[1.5px] transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-primary' : 'bg-white'} ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></div>
                   <div className={`w-6 h-[1.5px] transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-primary' : 'bg-white'} ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
                   <div className={`w-6 h-[1.5px] transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-primary' : 'bg-white'} ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></div>
                 </div>
               </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 md:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          {navLinks.map((link) => (
            <Link 
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-primary font-serif text-3xl italic font-bold hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-10">
            <p className="text-accent font-sans font-bold text-[10px] uppercase tracking-[0.5em]">Jay G Patel</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
