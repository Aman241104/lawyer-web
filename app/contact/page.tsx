"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Contact() {
  const container = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useGSAP(() => {
    gsap.from(".contact-reveal", {
      y: 40,
      opacity: 0,
      duration: 1.4,
      stagger: 0.1,
      ease: "power4.out",
    });
  }, { scope: container });

  return (
    <div ref={container} className="stone-texture bg-white min-h-screen pt-48 pb-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-start">
          <div className="lg:col-span-5">
            <div className="contact-reveal flex items-center gap-4 mb-8">
              <span className="w-10 h-[1px] bg-accent" />
              <span className="text-[11px] md:text-xs font-bold text-accent tracking-[0.5em] uppercase">Connect with Authority</span>
            </div>
            <h1 className="contact-reveal font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-primary mb-12 italic leading-none tracking-tighter">
              Secure <br /> <span className="text-accent underline underline-offset-[16px] decoration-accent/10">Counsel.</span>
            </h1>
            
            <div className="contact-reveal space-y-16 mt-24">
              <div className="group">
                <p className="text-accent font-bold uppercase tracking-widest text-[10px] mb-6">Principal Chambers</p>
                <p className="text-primary text-xl md:text-2xl font-serif leading-tight italic max-w-sm">
                  FF-13, Omkar Lotus, Opp. SMVS Swaminarayan Temple,<br />
                  Chandkheda To Motera Road,<br />
                  Ahmedabad, Gujarat 382424
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-12 pt-10 border-t border-primary/5">
                <div className="group">
                  <p className="text-accent font-bold uppercase tracking-widest text-[10px] mb-6">Direct Line</p>
                  <p className="text-primary text-xl font-serif italic">+91 99987 14891</p>
                  <p className="text-primary text-xl font-serif italic">+91 99132 61013</p>
                </div>
                <div className="group">
                  <p className="text-accent font-bold uppercase tracking-widest text-[10px] mb-6">Official Registry</p>
                  <p className="text-primary text-xl font-serif italic break-all">jay1802@gmail.com</p>
                </div>
              </div>

              <div className="pt-10">
                <a 
                  href="https://maps.google.com/?q=FF-13+Omkar+Lotus+Chandkheda+Ahmedabad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-6 text-primary uppercase tracking-[0.4em] font-bold text-[11px] border border-primary/10 py-6 px-10 rounded-full hover:bg-primary hover:text-white transition-all duration-700 shadow-sm"
                >
                  <span>Get Directions</span>
                  <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-45 text-accent">
                    <path d="M1 1H14M14 1V14M14 1L1 14" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 contact-reveal">
            <div className="bg-primary p-8 md:p-20 shadow-[0_60px_100px_-30px_rgba(0,0,0,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-bl-full -mr-24 -mt-24" />
              
              {!submitted ? (
                <form className="space-y-12 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-12">
                    <div className="border-b border-white/10 py-4 focus-within:border-accent transition-all duration-700">
                      <label htmlFor="name" className="block text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] mb-4">Your Professional Name</label>
                      <input id="name" type="text" required className="w-full bg-transparent focus:outline-none text-white font-serif text-2xl italic" placeholder="Enter Full Name" />
                    </div>
                    <div className="border-b border-white/10 py-4 focus-within:border-accent transition-all duration-700">
                      <label htmlFor="email" className="block text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] mb-4">Electronic Mail</label>
                      <input id="email" type="email" required className="w-full bg-transparent focus:outline-none text-white font-serif text-2xl italic" placeholder="email@address.com" />
                    </div>
                  </div>
                  <div className="border-b border-white/10 py-4 focus-within:border-accent transition-all duration-700">
                    <label htmlFor="subject" className="block text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] mb-4">Nature of Inquiry</label>
                    <input id="subject" type="text" required className="w-full bg-transparent focus:outline-none text-white font-serif text-2xl italic" placeholder="Purpose of Consultation" />
                  </div>
                  
                  <div className="pt-8">
                    <button type="submit" className="w-full py-8 bg-accent text-white font-serif font-bold uppercase tracking-[0.5em] hover:bg-white hover:text-primary transition-all duration-700 shadow-2xl rounded-full relative group overflow-hidden">
                      <span className="relative z-10 text-xs">Transmit Legal Inquiry</span>
                    </button>
                  </div>
                  
                  <p className="text-[10px] text-white/20 text-center uppercase tracking-[0.4em] leading-loose font-bold italic">
                    CONFIDENTIALITY AGREEMENT PENDING PRELIMINARY REVIEW.
                  </p>
                </form>
              ) : (
                <div className="relative z-10 text-center space-y-8 py-20">
                  <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-accent/20">
                    <span className="text-accent text-5xl font-light">✓</span>
                  </div>
                  <h3 className="font-serif text-4xl md:text-5xl text-white italic">Inquiry Received.</h3>
                  <p className="text-white/50 font-serif text-xl italic max-w-md mx-auto leading-relaxed">
                    Your communication has been prioritized for review. Our office will initiate contact within 24 business hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-accent uppercase tracking-widest text-[11px] font-bold border-b border-accent/30 pb-2 hover:border-accent transition-all mt-12"
                  >
                    Send Additional Communication
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
