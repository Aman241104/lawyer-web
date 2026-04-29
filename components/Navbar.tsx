"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#practice" },
    { label: "Practitioner", href: "/#team" },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <nav 
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? "bg-white py-4 shadow-xl border-b border-primary/5" 
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex justify-between items-center">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="group flex items-center gap-4">
                <div className={`relative transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}>
                  <Image 
                    src="/images/logo-jay-g-patel.png" 
                    alt="Jay G Patel" 
                    width={200} 
                    height={200} 
                    className={`w-auto h-12 md:h-14 transition-all duration-500`}
                  />
                </div>
              </Link>
            </div>
            
            {/* Center: Desktop Navigation */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
              <div className="flex items-center space-x-12">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link 
                      key={link.label}
                      href={link.href} 
                      className={`transition-all font-bold text-[12px] uppercase tracking-[0.25em] relative group py-2 ${
                        scrolled || mobileMenuOpen
                          ? "text-primary hover:text-accent" 
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <span className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-500 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right: CTA Button */}
            <div className="hidden md:block">
              <Link 
                href="/#contact"
                className={`py-4 px-10 text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 rounded-full border-2 ${
                  scrolled || mobileMenuOpen
                    ? "border-primary bg-primary text-white hover:bg-accent hover:border-accent shadow-lg shadow-primary/10" 
                    : "border-white/40 bg-white/5 text-white hover:bg-white hover:text-primary backdrop-blur-md"
                }`}
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-6">
               {/* Mobile CTA (shown on small screens too) */}
               <Link 
                  href="/#contact"
                  className={`md:hidden py-3 px-6 text-[9px] font-bold uppercase tracking-[0.2em] rounded-full border ${
                    scrolled || mobileMenuOpen
                      ? "border-primary bg-primary text-white"
                      : "border-white/30 text-white"
                  }`}
                >
                  Consult
                </Link>

               <button 
                onClick={toggleMobileMenu}
                className="p-2 focus:outline-none z-50"
                aria-label="Toggle Menu"
               >
                 <div className="space-y-1.5">
                   <div className={`w-7 h-[2px] transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-primary' : 'bg-white'} ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></div>
                   <div className={`w-7 h-[2px] transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-primary' : 'bg-white'} ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
                   <div className={`w-7 h-[2px] transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-primary' : 'bg-white'} ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></div>
                 </div>
               </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-white transition-all duration-700 lg:hidden transform ${
          mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10 px-6">
          <div className="mb-10">
            <Image 
              src="/images/logo-jay-g-patel.png" 
              alt="Jay G Patel" 
              width={180} 
              height={180} 
              className="w-auto h-16"
            />
          </div>
          {navLinks.map((link) => (
            <Link 
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-primary font-serif text-5xl italic font-bold hover:text-accent transition-colors tracking-tighter"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-10 w-full max-w-xs">
            <Link 
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-6 text-center bg-primary text-white font-bold text-xs uppercase tracking-[0.4em] rounded-full shadow-2xl"
            >
              Secure Consultation
            </Link>
          </div>
          <div className="absolute bottom-10 text-center">
            <p className="text-primary/40 font-sans font-bold text-[9px] uppercase tracking-[0.5em] mb-4">Established Excellence</p>
            <p className="text-accent font-sans font-bold text-[10px] uppercase tracking-[0.5em]">ADVOCATE JAY G PATEL</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
