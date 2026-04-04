"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const startAnimations = () => {
      // Hero Master Timeline
      const tl = gsap.timeline();
      tl.from(".hero-bg-accent", { scale: 1.2, opacity: 0, duration: 2, ease: "power2.out" })
        .from(".hero-text-reveal", { 
          y: 100, 
          opacity: 0, 
          duration: 1.2, 
          stagger: 0.1, 
          ease: "power4.out" 
        }, "-=1.5")
        .from(".hero-platinum-line", { scaleX: 0, duration: 1.5, ease: "power4.inOut" }, "-=1")
        .from(".hero-image-reveal", { x: 50, opacity: 0, duration: 1.5, ease: "power3.out" }, "-=1.2");

      // Section Fade-ins
      const sections = gsap.utils.toArray<HTMLElement>(".reveal-section");
      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power3.out",
        });
      });

      // Practice Area Cards Stagger
      gsap.from(".practice-card", {
        scrollTrigger: {
          trigger: ".practice-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: {
          amount: 0.8,
          ease: "power2.out"
        },
        ease: "power3.out",
      });

      // Refresh ScrollTrigger to ensure all trigger points are correct
      ScrollTrigger.refresh();
      // Second refresh after a short delay to account for any layout shifts
      setTimeout(() => ScrollTrigger.refresh(), 500);
    };

    // Check if preloader and disclaimer are already done
    const isDisclaimerAccepted = typeof window !== 'undefined' && localStorage.getItem("bci_disclaimer_accepted") === "true";
    const isPreloaderDone = typeof window !== 'undefined' && sessionStorage.getItem("preloader_done") === "true";

    if (isDisclaimerAccepted && isPreloaderDone) {
      // Delay slightly to ensure layout is ready
      const timer = setTimeout(startAnimations, 100);
      return () => clearTimeout(timer);
    } else {
      window.addEventListener("site_ready", startAnimations, { once: true });
      return () => window.removeEventListener("site_ready", startAnimations);
    }
  }, { scope: container });

  const practiceAreas = [
    { 
      title: "Civil Litigation", 
      icon: "⚖️",
      description: "Comprehensive range of civil matters including property disputes, recovery suits, injunctions, and specific performance of contracts."
    },
    { 
      title: "Criminal Defense", 
      icon: "🛡️",
      description: "Legal representation in criminal matters including bail applications, quashing of FIRs, criminal revisions, and trials."
    },
    { 
      title: "Corporate Law", 
      icon: "🏢",
      description: "Advisory on corporate compliance, contract drafting, mergers and acquisitions, and dispute resolution."
    },
    { 
      title: "Intellectual Property", 
      icon: "💡",
      description: "Registration and litigation involving Trademarks, Copyrights, and Patents to protect intellectual assets."
    },
    { 
      title: "Real Estate Law", 
      icon: "🏠",
      description: "Title verification, drafting of sale deeds, and RERA compliance. Representation in property-related litigation."
    },
    { 
      title: "Taxation Law", 
      icon: "📄",
      description: "Counseling on direct and indirect tax matters, including GST compliance and Income Tax appeals."
    },
    { 
      title: "Family Law", 
      icon: "👨‍👩‍👧‍👦",
      description: "Matrimonial disputes, divorce, maintenance, child custody, and succession matters."
    },
    { 
      title: "Arbitration", 
      icon: "🤝",
      description: "Representation in domestic and international commercial arbitrations and enforcement of awards."
    },
  ];

  const stats = [
    { value: "15+", label: "Years of Practice" },
    { value: "500+", label: "Legal Consultations" },
    { value: "12+", label: "Courts of Representation" },
    { value: "4", label: "Office Locations" },
  ];

  const workingHours = [
    { day: "Monday", hours: "09:00 AM - 06:00 PM" },
    { day: "Tuesday", hours: "09:00 AM - 06:00 PM" },
    { day: "Wednesday", hours: "09:00 AM - 06:00 PM" },
    { day: "Thursday", hours: "09:00 AM - 06:00 PM" },
    { day: "Friday", hours: "09:00 AM - 06:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 02:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const faqs = [
    { q: "What is the procedure for filing a suit in the High Court?", a: "The procedure involves drafting a petition, paying court fees, filing in the registry, and subsequent listing before the judge for admission." },
    { q: "What documents are required for property title verification?", a: "Essential documents include the mother deed, encumbrance certificate, property tax receipts, and sanctioned building plans." },
    { q: "Does the office handle pro bono matters?", a: "In compliance with BCI guidelines, the practitioner handles legal aid and pro bono cases for eligible individuals as per the legal services authority mandates." },
    { q: "What is the role of an Advocate in Arbitration?", a: "An advocate represents the party's interests, drafts the statement of claim or defense, and presents oral arguments before the arbitrator." }
  ];

  return (
    <div ref={container} className="relative stone-texture bg-white">
      {/* SECTION: HOME (ULTRA PREMIUM HERO) */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-4 md:px-20 relative overflow-hidden bg-primary">
        {/* Background Visuals */}
        <div className="hero-bg-accent absolute inset-0 -z-10 bg-[#020617]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(148,163,184,0.1),transparent_70%)]" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto w-full">
          <div className="lg:col-span-8">
            <div className="hero-text-reveal">
              <span className="section-title !text-accent tracking-[0.8em] font-bold !mb-10">THE LAW CHAMBERS OF</span>
              <h1 className="font-serif text-7xl md:text-[11rem] font-bold text-white leading-[0.85] tracking-tighter mb-10">
                Advocate <br /> 
                <span className="text-accent italic translate-x-4 inline-block">Name</span>
              </h1>
            </div>
            
            <div className="hero-platinum-line w-full max-w-md h-[1px] bg-accent/30 mb-12 origin-left" />
            
            <div className="hero-text-reveal">
              <p className="text-white/40 text-sm md:text-base font-bold uppercase tracking-[0.4em] max-w-xl leading-loose italic">
                Factual Professional Information & Legal Credentials in accordance with the Bar Council of India Rules.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="hero-image-reveal relative aspect-[4/5] platinum-border p-4 bg-white/5 backdrop-blur-3xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
              <div className="w-full h-full bg-primary/20 relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-zebra-3d.png')] opacity-20" />
                 <span className="font-serif text-8xl text-accent/10 italic select-none">⚖️</span>
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white flex items-center justify-center text-primary font-serif p-4 text-center border border-accent shadow-2xl">
                 <span className="text-[10px] uppercase font-bold tracking-widest leading-tight">ESTABLISHED <br/> MCMXCII</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Explore Hint */}
        <div className="absolute bottom-16 left-20 hidden md:flex items-center gap-8 text-white/20">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Scroll Down</span>
          <div className="w-32 h-[1px] bg-white/10" />
        </div>
      </section>

      {/* SECTION: ABOUT & BIO */}
      <section id="about" className="reveal-section py-40 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-40">
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              <div className="aspect-[4/5] bg-primary/[0.02] border border-primary/5 overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]">
                <div className="absolute inset-0 flex items-center justify-center text-primary/10 font-serif italic text-xl">Legal Professional Headshot</div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary flex flex-col items-center justify-center text-white font-serif text-center p-8 shadow-2xl">
                <span className="text-accent text-4xl italic mb-2">15+</span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold leading-tight">Years of Academic <br/> & Legal Precision</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 legal-line">
            <span className="section-title">Legal Practitioner Profile</span>
            <h2 className="font-serif text-6xl md:text-7xl font-bold text-primary leading-tight italic mb-12">
              Advocate Name, <span className="text-accent text-5xl">LL.M.</span>
            </h2>
            <div className="space-y-12 text-primary/70 text-lg md:text-xl leading-relaxed font-serif">
              <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-accent first-letter:float-left first-letter:mr-4 first-letter:mt-2">
                As an advocate enrolled with the State Bar Council (Enrolment No: MAH/1234/20XX), this practice is governed by the highest standards of professional conduct and academic rigour before the Hon&apos;ble High Court and District Courts.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-16 mt-24 p-16 bg-[#fafafa] border border-primary/5 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full" />
                <div>
                  <h4 className="text-primary font-bold uppercase tracking-widest text-[10px] mb-8 text-accent pb-2 border-b-2 border-accent/20 inline-block italic">Qualifications</h4>
                  <ul className="space-y-8 text-base">
                    <li><p className="font-bold text-primary">Master of Laws (LL.M.)</p><p className="text-[10px] italic font-sans text-primary/40 uppercase tracking-widest mt-1">Constitutional Law</p></li>
                    <li><p className="font-bold text-primary">Bachelor of Laws (LL.B.)</p><p className="text-[10px] italic font-sans text-primary/40 uppercase tracking-widest mt-1">University of Mumbai</p></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-primary font-bold uppercase tracking-widest text-[10px] mb-8 text-accent pb-2 border-b-2 border-accent/20 inline-block italic">Practice Courts</h4>
                  <ul className="space-y-4 text-base italic text-primary/80">
                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-accent" />Supreme Court of India</li>
                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-accent" />Bombay High Court</li>
                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-accent" />NCLT & Appellate Tribunals</li>
                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-accent" />District & Sessions Courts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: STATS (PLATINUM STRIP) */}
      <section className="reveal-section py-24 bg-primary relative overflow-hidden platinum-border border-x-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-sharp-edges.png')] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-20">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group border-r last:border-0 border-white/5">
                <p className="text-7xl font-serif text-white italic mb-4 group-hover:text-accent transition-colors duration-700">{stat.value}</p>
                <p className="text-[10px] text-accent/50 uppercase tracking-[0.5em] font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: PRACTICE AREAS */}
      <section id="practice" className="reveal-section py-40 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-40 gap-10">
            <div className="max-w-3xl">
              <span className="section-title">Practice Verticals</span>
              <h2 className="font-serif text-7xl md:text-9xl font-bold tracking-tighter italic text-primary leading-none">
                Areas of Expertise
              </h2>
            </div>
            <div className="max-w-sm border-l-4 border-accent pl-10">
               <p className="text-primary/30 uppercase tracking-[0.3em] text-[9px] font-bold leading-loose italic">
                Furnishing factual details of legal practice undertaken in compliance with the rules of the Bar Council of India.
               </p>
            </div>
          </div>

          <div className="practice-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/5 platinum-border shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)]">
            {practiceAreas.map((area, index) => (
              <div key={index} className="practice-card group relative p-16 bg-white hover:bg-primary transition-colors duration-700">
                <div className="relative z-10">
                  <span className="text-4xl mb-12 block grayscale group-hover:grayscale-0 group-hover:rotate-12 transition-all duration-700 opacity-20 group-hover:opacity-100">{area.icon}</span>
                  <h3 className="font-serif text-2xl font-bold text-primary group-hover:text-white transition-colors duration-700 uppercase tracking-widest mb-8">
                    {area.title}
                  </h3>
                  <p className="text-sm text-primary/40 group-hover:text-accent leading-relaxed transition-all duration-700 font-serif italic">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: WORKING HOURS & FAQ */}
      <section className="reveal-section py-40 px-4 bg-[#f1f5f9]/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-32">
          <div className="lg:col-span-5">
            <span className="section-title">Appointment Data</span>
            <h2 className="font-serif text-6xl font-bold text-primary italic mb-20">Working <br className="hidden md:block"/>Schedule</h2>
            <div className="platinum-border overflow-hidden bg-white shadow-2xl rounded-sm">
              <table className="w-full text-left">
                <tbody>
                  {workingHours.map((row, i) => (
                    <tr key={i} className="border-b border-primary/5 last:border-0 hover:bg-primary hover:text-white transition-all duration-500 group">
                      <td className="p-8 text-[10px] font-bold uppercase tracking-widest text-primary/30 group-hover:text-accent transition-colors">{row.day}</td>
                      <td className="p-8 text-base font-serif italic">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="lg:col-span-7 mt-20 lg:mt-0">
            <span className="section-title">Informational Support</span>
            <h2 className="font-serif text-6xl font-bold text-primary italic mb-20">Legal FAQ</h2>
            <div className="space-y-16">
              {faqs.map((faq, i) => (
                <div key={i} className="group border-b border-primary/5 pb-16">
                  <p className="text-2xl font-serif italic text-primary mb-8 group-hover:text-accent transition-colors decoration-accent/10 underline underline-offset-[16px] decoration-1">Q: {faq.q}</p>
                  <p className="text-base text-primary/50 leading-relaxed font-serif italic pl-10 border-l-2 border-accent/20">A: {faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CONTACT */}
      <section id="contact" className="reveal-section py-40 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-40 items-center">
            <div>
              <span className="section-title">Contact Infrastructure</span>
              <h2 className="font-serif text-9xl font-bold text-primary mb-20 italic leading-none tracking-tighter">
                Official <br /> <span className="text-accent">Registry</span>
              </h2>
              
              <div className="space-y-20">
                <div className="group">
                  <p className="text-accent font-bold uppercase tracking-widest text-[10px] mb-8">Primary Chambers</p>
                  <p className="text-primary text-3xl font-serif leading-tight italic hover:text-accent transition-colors duration-500 cursor-default">
                    Law Chambers, 123 Legal Avenue,<br />
                    High Court Premises, Mumbai 400001
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-24">
                  <div className="group">
                    <p className="text-accent font-bold uppercase tracking-widest text-[10px] mb-8">Telephone</p>
                    <p className="text-primary text-3xl font-serif italic">+91 9XXXX XXXXX</p>
                  </div>
                  <div className="group">
                    <p className="text-accent font-bold uppercase tracking-widest text-[10px] mb-8">Electronic Mail</p>
                    <p className="text-primary text-3xl font-serif italic underline underline-offset-8 decoration-1 decoration-accent/30 hover:decoration-accent transition-all break-all uppercase text-2xl">info@advocatename.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-20 platinum-border shadow-[0_60px_100px_-30px_rgba(0,0,0,0.1)] relative bg-white overflow-hidden rounded-none">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/[0.03] rounded-bl-full -mr-24 -mt-24" />
              <form className="space-y-12 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-12">
                  <div className="border-b border-primary/10 py-4 focus-within:border-primary transition-all duration-700">
                    <label htmlFor="name" className="block text-[9px] font-bold text-primary/20 uppercase tracking-[0.3em] mb-3">Principal Name</label>
                    <input id="name" type="text" className="w-full bg-transparent focus:outline-none text-primary font-serif text-2xl italic" placeholder="Name" />
                  </div>
                  <div className="border-b border-primary/10 py-4 focus-within:border-primary transition-all duration-700">
                    <label htmlFor="email" className="block text-[9px] font-bold text-primary/20 uppercase tracking-[0.3em] mb-3">Electronic Mail</label>
                    <input id="email" type="email" className="w-full bg-transparent focus:outline-none text-primary font-serif text-2xl italic" placeholder="Email" />
                  </div>
                </div>
                <div className="border-b border-primary/10 py-4 focus-within:border-primary transition-all duration-700">
                  <label htmlFor="subject" className="block text-[9px] font-bold text-primary/20 uppercase tracking-[0.3em] mb-3">Subject of Inquiry</label>
                  <input id="subject" type="text" className="w-full bg-transparent focus:outline-none text-primary font-serif text-2xl italic" placeholder="Subject" />
                </div>
                <button type="submit" className="w-full py-8 bg-primary text-white font-serif font-bold uppercase tracking-[0.5em] hover:bg-accent transition-all duration-700 shadow-2xl rounded-none group overflow-hidden relative">
                  <span className="relative z-10 text-xs">Transmit Inquiry</span>
                  <div className="absolute inset-0 bg-white/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                </button>
                <p className="text-[9px] text-primary/20 text-center uppercase tracking-[0.4em] leading-loose font-bold italic">
                  NO ATTORNEY-CLIENT RELATIONSHIP FORMED VIA SUBMISSION.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
