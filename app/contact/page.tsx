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
      y: 30,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out",
    });
  }, { scope: container });

  return (
    <div ref={container} className="stone-texture bg-white min-h-screen pt-40 pb-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 md:gap-40 items-start">
          <div>
            <span className="contact-reveal section-title">Professional Registry</span>
            <h1 className="contact-reveal font-serif text-6xl md:text-9xl font-bold text-primary mb-12 italic leading-none tracking-tighter">
              Direct <br /> <span className="text-accent">Contact</span>
            </h1>
            
            <div className="contact-reveal space-y-12 md:space-y-20 mt-20">
              <div className="group">
                <p className="text-accent font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-4 md:mb-8">Office Address</p>
                <p className="text-primary text-xl md:text-3xl font-serif leading-tight italic hover:text-accent transition-colors duration-500 cursor-default">
                  FF-13, Omkar Lotus, Opp. SMVS Swaminarayan Temple,<br />
                  Chandkheda To Motera Road,<br />
                  Ahmedabad, Gujarat 382424
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-12 md:gap-24">
                <div className="group">
                  <p className="text-accent font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-4 md:mb-8">Contact Number</p>
                  <p className="text-primary text-xl md:text-3xl font-serif italic">+91 99987 14891<br/>+91 99132 61013</p>
                </div>
                <div className="group">
                  <p className="text-accent font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-4 md:mb-8">Email Address</p>
                  <p className="text-primary text-xl md:text-3xl font-serif italic underline underline-offset-8 decoration-1 decoration-accent/30 hover:decoration-accent transition-all break-all uppercase md:text-2xl">jay1802@gmail.com</p>
                </div>
              </div>

              {/* Added Google Maps Link hint (Travel link) */}
              <div className="pt-10">
                <a 
                  href="https://maps.google.com/?q=FF-13+Omkar+Lotus+Chandkheda+Ahmedabad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-accent uppercase tracking-[0.3em] font-bold text-[10px] border border-accent/30 p-6 hover:bg-accent hover:text-white transition-all duration-500"
                >
                  <span>Get Directions / Travel Link</span>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-45">
                    <path d="M1 1H14M14 1V14M14 1L1 14" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-reveal mt-20 lg:mt-0 p-8 md:p-20 platinum-border shadow-[0_60px_100px_-30px_rgba(0,0,0,0.1)] relative bg-white overflow-hidden rounded-none min-h-[500px] flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-accent/[0.03] rounded-bl-full -mr-16 -mt-16 md:-mr-24 md:-mt-24" />
            
            {!submitted ? (
              <form className="space-y-8 md:space-y-12 relative z-10" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                  <div className="border-b border-primary/10 py-3 md:py-4 focus-within:border-primary transition-all duration-700">
                    <label htmlFor="name" className="block text-[8px] md:text-[9px] font-bold text-primary/60 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2 md:mb-3">Full Name</label>
                    <input id="name" type="text" required className="w-full bg-transparent focus:outline-none text-primary font-serif text-xl md:text-2xl italic" placeholder="Your Name" />
                  </div>
                  <div className="border-b border-primary/10 py-3 md:py-4 focus-within:border-primary transition-all duration-700">
                    <label htmlFor="email" className="block text-[8px] md:text-[9px] font-bold text-primary/60 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2 md:mb-3">Email Address</label>
                    <input id="email" type="email" required className="w-full bg-transparent focus:outline-none text-primary font-serif text-xl md:text-2xl italic" placeholder="Your Email" />
                  </div>
                </div>
                <div className="border-b border-primary/10 py-3 md:py-4 focus-within:border-primary transition-all duration-700">
                  <label htmlFor="subject" className="block text-[8px] md:text-[9px] font-bold text-primary/60 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2 md:mb-3">Subject</label>
                  <input id="subject" type="text" required className="w-full bg-transparent focus:outline-none text-primary font-serif text-xl md:text-2xl italic" placeholder="Purpose of Inquiry" />
                </div>
                <button type="submit" className="w-full py-6 md:py-8 bg-primary text-white font-serif font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] hover:bg-accent transition-all duration-700 shadow-2xl rounded-none group overflow-hidden relative">
                  <span className="relative z-10 text-[10px] md:text-xs">Send Inquiry</span>
                  <div className="absolute inset-0 bg-white/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                </button>
                <p className="text-[8px] md:text-[9px] text-primary/60 text-center uppercase tracking-[0.3em] md:tracking-[0.4em] leading-loose font-bold italic">
                  NO ATTORNEY-CLIENT RELATIONSHIP FORMED VIA SUBMISSION.
                </p>
              </form>
            ) : (
              <div className="relative z-10 text-center space-y-6 py-10">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-4xl">✓</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-primary italic">Inquiry Transmitted</h3>
                <p className="text-primary/60 font-serif text-base md:text-lg italic max-w-sm mx-auto">
                  Your communication has been received. I will review the details and respond via the provided email address.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-accent uppercase tracking-widest text-[10px] font-bold border-b border-accent/30 pb-1 hover:border-accent transition-all mt-8"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
