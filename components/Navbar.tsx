"use client";

import Link from "next/link";
import Image from "next/image";
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
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/#about" },
    { label: "SERVICES", href: "/#practice" },
    { label: "TEAM", href: "/#team" },
    { label: "TERMS", href: "/terms" },
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
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="block"
              >
                <Image 
                  src="/images/logo-jay-g-patel.png" 
                  alt="Jay G Patel" 
                  width={150} 
                  height={150} 
                  className={`w-auto h-12 md:h-20 transition-all duration-500 ${
                    scrolled ? "brightness-100" : "brightness-0 invert"
                  }`}
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-12">
                {navLinks.map((link) => (
                  <Link 
                    key={link.label}
                    href={link.href} 
                    className={`transition-all font-bold text-[10px] uppercase tracking-[0.4em] relative group ${
                      scrolled ? "text-primary/70 hover:text-primary" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-2 left-0 w-0 h-[1.5px] bg-accent transition-all duration-500 group-hover:w-full`}></span>
                  </Link>
                ))}
                
                <Link 
                  href="/#contact"
                  className={`py-3 px-8 text-[10px] font-bold uppercase tracking-[0.4em] transition-all duration-500 border ${
                    scrolled 
                      ? "border-primary/10 bg-primary text-white hover:bg-accent hover:border-accent" 
                      : "border-white/20 bg-white/10 text-white hover:bg-white hover:text-primary"
                  }`}
                >
                  LET&apos;S TALK
                </Link>
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
        className={`fixed inset-0 z-40 bg-primary transition-all duration-500 md:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navLinks.map((link) => (
            <Link 
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-serif text-4xl italic font-bold hover:text-accent transition-colors tracking-tighter"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-12 w-full">
            <Link 
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-6 text-center bg-accent text-white font-bold text-xs uppercase tracking-[0.5em]"
            >
              LET&apos;S TALK
            </Link>
          </div>
          <div className="pt-10">
            <p className="text-accent font-sans font-bold text-[10px] uppercase tracking-[0.5em]">ADVOCATE JAY G PATEL</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
