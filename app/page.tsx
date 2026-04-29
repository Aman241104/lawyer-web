"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  useGSAP(() => {
    const startAnimations = () => {
      // Hero Master Timeline
      const tl = gsap.timeline();
      tl.from(".hero-bg-accent", { scale: 1.1, opacity: 0, duration: 2.5, ease: "power2.out" })
        .from(".hero-reveal", { 
          y: 60, 
          opacity: 0, 
          duration: 1.4, 
          stagger: 0.15, 
          ease: "power4.out" 
        }, "-=1.8");

      // Section Fade-ins
      const sections = gsap.utils.toArray<HTMLElement>(".reveal-section");
      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 40,
          duration: 1.2,
          ease: "power3.out",
        });
      });

      // Practice Area Cards Stagger
      gsap.from(".practice-card", {
        scrollTrigger: {
          trigger: ".practice-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 60,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Refresh ScrollTrigger
      ScrollTrigger.refresh();
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
      title: "Criminal Law", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      image: "/images/justice-scales.webp",
      description: "Rigorous defense and strategic advocacy for complex criminal matters at the High Court.",
      highlights: ["Bail & Anticipatory Bail", "Quashing of FIRs", "Criminal Revisions"]
    },
    { 
      title: "Land Revenue", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
        </svg>
      ),
      image: "/images/professional-briefcase.webp",
      description: "Protecting property interests through meticulous title verification and revenue litigation.",
      highlights: ["Title Verification", "7/12 Documentation", "Property Disputes"]
    },
    { 
      title: "Family Law", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      ),
      image: "/images/lawyer-portrait-3.webp",
      description: "Empathetic and strategic representation for sensitive matrimonial and succession matters.",
      highlights: ["Matrimonial Disputes", "Succession & Wills", "Child Custody"]
    },
    { 
      title: "Corporate Law", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      ),
      image: "/images/contract-signing.webp",
      description: "Comprehensive advisory on commercial compliance and dispute resolution for businesses.",
      highlights: ["Contract Drafting", "Commercial Litigation", "Arbitration"]
    },
  ];

  const stats = [
    { value: "G/1876/2008", label: "Enrolment Number" },
    { value: "Gujarat", label: "State Bar Council" },
    { value: "Ahmedabad", label: "District Bar Association" },
    { value: "B.Com, LL.B.", label: "Educational Background" },
  ];

  const workingHours = [
    { day: "Monday", hours: "09:00 AM - 08:00 PM" },
    { day: "Tuesday", hours: "09:00 AM - 08:00 PM" },
    { day: "Wednesday", hours: "09:00 AM - 08:00 PM" },
    { day: "Thursday", hours: "09:00 AM - 08:00 PM" },
    { day: "Friday", hours: "09:00 AM - 08:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 04:00 PM" },
    { day: "Sunday", hours: "By Appointment" },
  ];

  const faqs = [
    { q: "What is the procedure for filing a suit in the High Court?", a: "The procedure involves drafting a petition, paying court fees, filing in the registry, and subsequent listing before the judge for admission." },
    { q: "What documents are required for property title verification?", a: "Essential documents include the mother deed, encumbrance certificate, property tax receipts, and sanctioned building plans." },
    { q: "Does the office handle pro bono matters?", a: "In compliance with BCI guidelines, the practitioner handles legal aid and pro bono cases for eligible individuals as per the legal services authority mandates." },
    { q: "What is the role of an Advocate in Arbitration?", a: "An advocate represents the party's interests, drafts the statement of claim or defense, and presents oral arguments before the arbitrator." }
  ];

  return (
    <div ref={container} className="relative stone-texture bg-white">
      {/* SECTION: HERO (ENHANCED MODERN REDESIGN) */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-primary pt-32 pb-20">
        {/* Sophisticated Background Depth */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-accent/[0.03] blur-[100px] rounded-full" />
          {/* Subtle noise/texture overlay could go here */}
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid lg:grid-cols-12 gap-16 items-center z-10">
          <div className="lg:col-span-7">
            <div className="hero-reveal mb-10 flex items-center gap-5">
              <span className="w-12 h-[1px] bg-accent" />
              <span className="text-[11px] md:text-xs font-bold text-accent tracking-[0.6em] uppercase">
                High Court Practitioner · Ahmedabad
              </span>
            </div>
            
            <h1 className="hero-reveal font-serif text-6xl md:text-8xl lg:text-[100px] font-bold text-white leading-[0.95] mb-12 tracking-tight">
              Strategic <span className="italic font-medium text-accent">Advocacy.</span> <br /> 
              Expert Counsel.
            </h1>
            
            <div className="hero-reveal grid sm:grid-cols-2 gap-10 mb-16 max-w-2xl">
              <p className="text-white/70 text-lg font-serif italic leading-relaxed border-l border-white/10 pl-6">
                Sophisticated representation for complex Criminal, Land Revenue, and Matrimonial litigation.
              </p>
              <p className="text-white/40 text-sm font-sans uppercase tracking-[0.2em] leading-loose pt-2">
                Enrolled with the Bar Council of Gujarat since 2008. Dedicated to professional excellence.
              </p>
            </div>

            <div className="hero-reveal flex flex-wrap gap-8 items-center">
              <a 
                href="#contact" 
                className="inline-block py-6 px-14 bg-accent text-white font-bold text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-primary transition-all duration-700 rounded-full shadow-2xl shadow-accent/20"
              >
                Secure Consultation
              </a>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors duration-500">
                  <span className="text-accent text-xs">→</span>
                </div>
                <a href="#practice" className="text-white/60 group-hover:text-white text-[11px] font-bold uppercase tracking-[0.3em] transition-colors">
                  Our Specializations
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="relative aspect-[4/5] hero-reveal group">
              {/* Refined Frame Design */}
              <div className="absolute -inset-8 border border-white/5 -z-10 transition-transform duration-1000 group-hover:scale-[1.05]" />
              <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm -z-5" />
              
              <div className="absolute inset-0 overflow-hidden">
                <Image 
                  src="/images/jay-g-patel-v2.png" 
                  alt="Advocate Jay G Patel" 
                  fill
                  className="object-cover transition-all duration-1000 scale-[1.07] group-hover:scale-[1.15]"
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
              
              {/* Professional Credential Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-8 md:p-10 shadow-2xl hero-reveal delay-700">
                <div className="flex items-center gap-4 mb-3">
                   <div className="w-2 h-2 rounded-full bg-accent" />
                   <p className="text-primary text-[10px] font-bold uppercase tracking-widest">Gujarat High Court</p>
                </div>
                <p className="text-primary font-serif italic text-2xl font-bold">G/1876/2008</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: ABOUT (ENHANCED STRUCTURED AUTHORITY) */}
      <section id="about" className="reveal-section py-section px-6 md:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            {/* Left Column: Visual Authority */}
            <div className="relative">
              <div className="relative aspect-[4/5] platinum-border group overflow-hidden">
                <Image 
                  src="/images/legal-gavel.webp" 
                  alt="Legal Authority" 
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-1000" />
              </div>
              {/* Trust Badge Overlay */}
              <div className="absolute -bottom-10 -right-10 bg-primary p-12 shadow-2xl hidden md:block border-l-4 border-accent">
                <p className="text-accent text-5xl font-serif mb-2">15+</p>
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em]">Years of Practice</p>
              </div>
            </div>

            {/* Right Column: Structured Narrative */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-[1px] bg-accent" />
                <span className="text-[11px] md:text-xs font-bold text-accent tracking-[0.5em] uppercase">Professional Profile</span>
              </div>
              
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary leading-[1.1] mb-12">
                Independent Advocacy. <br />
                <span className="italic text-accent">Rooted in results.</span>
              </h2>

              <div className="space-y-12">
                <div className="space-y-6">
                  {[
                    { title: "Strategic Precision", desc: "Meticulous preparation and deep research for every High Court petition." },
                    { title: "Transparent Counsel", desc: "Honest assessment of legal positions and procedural requirements." },
                    { title: "Direct Advocacy", desc: "Personalized attention and direct representation in all district and high court matters." }
                  ].map((pillar, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="w-6 h-6 rounded-full border border-accent/30 flex-shrink-0 flex items-center justify-center group-hover:bg-accent transition-all duration-500">
                        <span className="text-[10px] text-accent group-hover:text-white transition-colors">{i+1}</span>
                      </div>
                      <div>
                        <h4 className="font-serif text-xl font-bold text-primary mb-2 italic group-hover:text-accent transition-colors">{pillar.title}</h4>
                        <p className="text-primary/60 text-base font-serif italic leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-10 border-t border-primary/5 flex flex-wrap gap-8 items-center">
                  <a 
                    href="#practice" 
                    className="inline-block py-5 px-10 bg-primary text-white font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-accent transition-all duration-500 rounded-full"
                  >
                    Our Expertise
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-primary/5 flex items-center justify-center">
                       <span className="text-2xl">🏛️</span>
                    </div>
                    <div>
                       <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest leading-none mb-1">Court Admission</p>
                       <p className="text-sm font-serif italic text-primary font-bold">Gujarat High Court</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: VALUES & PRINCIPLES (ETHICAL FOUNDATION) */}
      <section className="reveal-section py-section px-6 md:px-8 bg-white relative overflow-hidden border-b border-primary/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-10">
                <span className="w-10 h-[1px] bg-accent" />
                <span className="text-[11px] md:text-xs font-bold text-accent tracking-[0.5em] uppercase">Ethical Foundation</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl font-bold italic leading-tight mb-8 text-primary">
                Principles that <br /> <span className="text-accent underline underline-offset-[12px] decoration-accent/20">Define our Practice.</span>
              </h2>
              <p className="text-primary/60 text-lg font-serif italic leading-relaxed max-w-sm">
                Beyond legal expertise, our practice is anchored in a set of core values that ensure transparency, reliability, and excellence in every matter we handle.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
              {[
                { 
                  title: "Absolute Integrity", 
                  icon: "⚖️", 
                  desc: "We maintain the highest ethical standards, ensuring that every legal strategy is built on a foundation of honesty and professional honor." 
                },
                { 
                  title: "Strategic Transparency", 
                  icon: "🔍", 
                  desc: "Clear communication regarding case prospects, legal complexities, and procedural timelines. No hidden surprises." 
                },
                { 
                  title: "Radical Collaboration", 
                  icon: "🤝", 
                  desc: "We work closely with clients to understand the nuances of their situation, ensuring a unified approach to complex legal challenges." 
                },
                { 
                  title: "Relentless Diligence", 
                  icon: "📋", 
                  desc: "Meticulous attention to detail in drafting, research, and courtroom representation to ensure no stone is left unturned." 
                }
              ].map((value, i) => (
                <div key={i} className="bg-[#fcfcfc] border border-primary/5 p-10 hover:border-accent/50 transition-all duration-500 group">
                  <div className="text-4xl mb-8 group-hover:scale-110 transition-transform inline-block">{value.icon}</div>
                  <h4 className="font-serif text-2xl font-bold text-primary mb-4 italic">{value.title}</h4>
                  <p className="text-primary/50 text-base font-serif italic leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: STATS & TRUST (HIGH-IMPACT REDESIGN) */}
      <section className="reveal-section py-section px-6 md:px-8 bg-primary text-white relative overflow-hidden">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-[1px] bg-accent" />
                <span className="text-[11px] md:text-xs font-bold text-accent tracking-[0.5em] uppercase">Measurable Excellence</span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl font-bold italic leading-tight">
                A track record of <br /> <span className="text-accent">verified authority.</span>
              </h2>
            </div>
            <p className="text-white/50 text-xl font-serif italic leading-relaxed max-w-md border-l border-white/10 pl-8">
              Documented legal precision across district and high court jurisdictions in Gujarat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { value: "15+", label: "Years of Practice", sub: "Since 2008" },
              { value: "500+", label: "Successful Matters", sub: "Strategic Counsel" },
              { value: "High Court", label: "Primary Jurisdiction", sub: "Gujarat State" },
              { value: "BCI", label: "Professional Member", sub: "Bar Council India" }
            ].map((stat, i) => (
              <div key={i} className="bg-primary p-12 md:p-16 hover:bg-white/[0.02] transition-colors group">
                <p className="text-6xl md:text-7xl font-serif text-accent mb-6 leading-none group-hover:translate-y-[-5px] transition-transform duration-500">{stat.value}</p>
                <div>
                  <p className="text-[11px] md:text-xs text-white font-bold uppercase tracking-[0.3em] mb-2">{stat.label}</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-between items-center gap-12">
            <div className="flex items-center gap-6">
              <span className="text-white/20 text-[10px] font-bold uppercase tracking-[0.4em]">Official Credentials</span>
              <div className="h-px w-20 bg-white/10" />
            </div>
            <div className="flex flex-wrap gap-12 opacity-30 transition-all duration-700">
              {/* These would ideally be professional logos/badges */}
              <span className="text-white font-serif text-xl italic font-bold tracking-tighter">Bar Council of Gujarat</span>
              <span className="text-white font-serif text-xl italic font-bold tracking-tighter">Ahmedabad Bar Association</span>
              <span className="text-white font-serif text-xl italic font-bold tracking-tighter">High Court Practitioner</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: SERVICES (ENHANCED GRID REDESIGN) */}
      <section id="practice" className="reveal-section py-section px-6 md:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-[1px] bg-accent" />
                <span className="text-[11px] md:text-xs font-bold text-accent tracking-[0.5em] uppercase">Our Expertise</span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-primary leading-tight">
                Specialized Legal <br /> <span className="italic text-accent">Advocacy.</span>
              </h2>
            </div>
            <p className="text-primary/60 text-xl font-serif italic leading-relaxed max-w-md border-l border-accent/20 pl-8">
              Focused legal solutions designed to navigate complex litigation and regulatory environments in Gujarat.
            </p>
          </div>

          <div className="practice-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {practiceAreas.slice(0, 3).map((area, index) => (
              <div key={index} className="group relative bg-[#fcfcfc] border border-primary/5 p-12 flex flex-col justify-between hover:bg-primary transition-all duration-700 min-h-[550px] overflow-hidden shadow-sm hover:shadow-2xl">
                {/* Subtle background image on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 -z-10">
                   <Image src={area.image} alt="" fill className="object-cover" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-14">
                    <span className="text-accent/40 font-serif text-5xl italic group-hover:text-accent transition-colors">0{index + 1}</span>
                    <div className="text-accent group-hover:text-white transition-colors duration-500 bg-accent/5 group-hover:bg-white/10 p-4 rounded-sm">
                      {area.icon}
                    </div>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight group-hover:text-white transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-primary/60 text-lg font-serif italic mb-10 leading-relaxed group-hover:text-white/80 transition-colors">
                    {area.description}
                  </p>
                </div>

                <div className="relative z-10 pt-8 border-t border-primary/5 group-hover:border-white/10">
                  <ul className="space-y-4 mb-12">
                    {area.highlights.map((item, idx) => (
                      <li key={idx} className="text-[10px] font-bold text-primary/40 group-hover:text-accent uppercase tracking-[0.2em] flex items-center gap-4 transition-all duration-500 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" style={{ transitionDelay: `${idx * 100}ms` }}>
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-6 py-4 px-8 bg-primary group-hover:bg-accent text-white font-bold text-[11px] uppercase tracking-[0.3em] rounded-full transition-all duration-500 shadow-lg group-hover:shadow-accent/20"
                  >
                    Start Consultation
                    <span className="w-6 h-[1px] bg-white/30 group-hover:w-10 transition-all duration-500" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: AVAILABILITY & FAQ (INTERACTIVE REDESIGN) */}
      <section className="reveal-section py-section px-6 md:px-8 bg-[#fcfcfc] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 lg:gap-32">
            
            {/* Office Schedule - Left Column */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-[1px] bg-accent" />
                <span className="text-[11px] md:text-xs font-bold text-accent tracking-[0.5em] uppercase">Availability</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary italic mb-12 leading-tight">
                Office <br /> <span className="text-accent">Schedule.</span>
              </h2>

              <div className="bg-white border border-primary/5 shadow-2xl rounded-sm overflow-hidden mb-12">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {workingHours.map((row, i) => {
                      const isToday = typeof window !== 'undefined' && new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date()) === row.day;
                      return (
                        <tr key={i} className={`border-b border-primary/5 last:border-0 transition-all duration-500 group ${isToday ? 'bg-primary text-white' : 'hover:bg-primary/[0.02]'}`}>
                          <td className="p-6 md:p-8">
                            <div className="flex items-center gap-3">
                              {isToday && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
                              <span className={`text-[11px] font-bold uppercase tracking-widest ${isToday ? 'text-accent' : 'text-primary/70'}`}>
                                {row.day}
                              </span>
                            </div>
                          </td>
                          <td className="p-6 md:p-8 text-right">
                            <span className={`text-sm md:text-base font-serif italic ${isToday ? 'text-white/90' : 'text-primary'}`}>
                              {row.hours}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <a 
                href="#contact" 
                className="inline-flex items-center justify-center w-full py-6 bg-accent text-white font-bold text-xs uppercase tracking-[0.4em] hover:bg-primary transition-all duration-700 rounded-full shadow-xl shadow-accent/10"
              >
                Secure Consultation
              </a>
            </div>

            {/* Legal FAQ - Right Column */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-[1px] bg-accent" />
                <span className="text-[11px] md:text-xs font-bold text-accent tracking-[0.5em] uppercase">Legal Intelligence</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary italic mb-12 leading-tight">
                Procedural <br /> <span className="text-accent">Insights.</span>
              </h2>

              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <details key={i} className="group border-b border-primary/5 pb-6">
                    <summary className="flex items-center justify-between cursor-pointer list-none py-4">
                      <h4 className="text-xl md:text-2xl font-serif italic text-primary group-hover:text-accent transition-colors pr-8">
                        {faq.q}
                      </h4>
                      <span className="relative flex-shrink-0 w-6 h-6 border border-accent/30 rounded-full flex items-center justify-center group-open:rotate-45 transition-transform duration-500">
                        <span className="absolute w-3 h-[1px] bg-accent" />
                        <span className="absolute h-3 w-[1px] bg-accent" />
                      </span>
                    </summary>
                    <div className="pt-4 pb-8 pl-6 border-l-2 border-accent/20">
                      <p className="text-primary/60 text-lg font-serif italic leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>

              <div className="mt-16 p-10 bg-primary rounded-sm relative overflow-hidden group cursor-pointer">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110" />
                <h4 className="text-white font-serif text-2xl italic mb-4 relative z-10">Have a specific legal inquiry?</h4>
                <p className="text-white/50 text-sm mb-8 relative z-10">Our office provides detailed preliminary reviews for complex litigation matters.</p>
                <a href="#contact" className="text-accent text-[11px] font-bold uppercase tracking-[0.4em] border-b border-accent/30 pb-1 hover:border-accent transition-all relative z-10">
                  Transmit Inquiry
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: PRACTITIONER (AUTHORITY & TRUST REDESIGN) */}
      <section id="team" className="reveal-section py-section px-6 md:px-8 bg-primary text-white overflow-hidden relative">
        {/* Subtle decorative identifier */}
        <div className="absolute top-20 right-0 font-serif text-[15vw] font-bold text-white/[0.02] leading-none pointer-events-none -translate-y-1/2 select-none">
          PRINCIPAL
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Sharp Portrait */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="aspect-[3/4] relative overflow-hidden border border-white/10 shadow-2xl">
                  <Image 
                    src="/images/jay-g-patel-v2.png" 
                    alt="Advocate Jay G Patel" 
                    fill
                    className="object-cover transition-all duration-1000 scale-[1.07] group-hover:scale-[1.15]"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60" />
                </div>
                
                {/* Floating Credential Box */}
                <div className="absolute -bottom-8 -right-8 bg-accent p-8 md:p-12 shadow-2xl hidden md:block">
                  <h3 className="font-serif text-3xl font-bold text-white mb-1 italic leading-none">Jay G Patel</h3>
                  <p className="text-white/80 text-[10px] font-bold uppercase tracking-[0.4em]">Principal Advocate</p>
                </div>
              </div>
            </div>

            {/* Right Column: Structured Expertise */}
            <div className="lg:col-span-7 mt-12 lg:mt-0">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-[1px] bg-accent" />
                <span className="text-[11px] md:text-xs font-bold text-accent tracking-[0.5em] uppercase">The Practitioner</span>
              </div>
              
              <h2 className="font-serif text-5xl md:text-7xl font-bold italic text-white leading-tight mb-12">
                Expertise forged in <br /> <span className="text-accent underline underline-offset-[12px] decoration-accent/20">High Court Chambers.</span>
              </h2>

              <div className="space-y-12">
                <p className="text-white/70 text-xl font-serif italic leading-relaxed max-w-2xl border-l-2 border-accent/30 pl-8">
                  A distinguished member of the Bar Council of Gujarat, Advocate Jay G Patel specializes in navigating the most complex litigation landscapes of Ahmedabad.
                </p>

                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <div>
                      <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-4">Core Jurisdictions</p>
                      <ul className="space-y-3 font-serif italic text-white/80 text-lg">
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent/40" /> Gujarat High Court</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent/40" /> Ahmedabad District Court</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent/40" /> Revenue Tribunals</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-4">Professional Standing</p>
                      <div className="space-y-6">
                        <div>
                           <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Education</p>
                           <p className="text-white font-serif italic text-lg font-bold">B.Com, LL.B.</p>
                        </div>
                        <div>
                           <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Enrolment</p>
                           <p className="text-white font-serif italic text-lg font-bold">G/1876/2008</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-10 flex flex-wrap gap-8 items-center border-t border-white/5">
                   <a 
                    href="#contact" 
                    className="inline-block py-6 px-14 bg-white text-primary font-bold text-xs uppercase tracking-[0.4em] hover:bg-accent hover:text-white transition-all duration-700 rounded-full"
                  >
                    Consult with Advocate
                  </a>
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors duration-500">
                      <span className="text-accent text-xs">🏛️</span>
                    </div>
                    <span className="text-white/60 group-hover:text-white text-[11px] font-bold uppercase tracking-[0.3em] transition-colors">
                      BCI Member
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: CONTACT & CONSULTATION (HIGH-CONVERSION REDESIGN) */}
      <section id="contact" className="reveal-section py-section px-6 md:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-start">
            
            {/* Left: Office & Context */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-[1px] bg-accent" />
                <span className="text-[11px] md:text-xs font-bold text-accent tracking-[0.5em] uppercase">Gateway to Counsel</span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-12 italic leading-[1.1] tracking-tighter">
                Initiate your <br /> <span className="text-accent underline underline-offset-[16px] decoration-accent/20">Legal Defense.</span>
              </h2>
              
              <div className="space-y-16 mt-20">
                {/* Office Group */}
                <div className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-full border border-primary/5 flex items-center justify-center flex-shrink-0 group-hover:border-accent transition-colors duration-500">
                    <span className="text-accent text-lg">📍</span>
                  </div>
                  <div>
                    <p className="text-accent font-bold uppercase tracking-widest text-[10px] mb-3">Principal Chambers</p>
                    <p className="text-primary text-xl font-serif italic leading-relaxed">
                      FF – 13, Omkar Lotus, Opp. SMVS Swaminarayan Temple,<br />
                      Chandkheda To Motera Road,<br />
                      Ahmedabad, Gujarat 382424
                    </p>
                  </div>
                </div>

                {/* Direct Contact Group */}
                <div className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-full border border-primary/5 flex items-center justify-center flex-shrink-0 group-hover:border-accent transition-colors duration-500">
                    <span className="text-accent text-lg">📞</span>
                  </div>
                  <div>
                    <p className="text-accent font-bold uppercase tracking-widest text-[10px] mb-3">Direct Communication</p>
                    <div className="space-y-2">
                       <p className="text-primary text-2xl font-serif italic">+91 99987 14891</p>
                       <p className="text-primary text-xl font-serif italic opacity-60">+91 99132 61013</p>
                    </div>
                  </div>
                </div>

                {/* Email Group */}
                <div className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-full border border-primary/5 flex items-center justify-center flex-shrink-0 group-hover:border-accent transition-colors duration-500">
                    <span className="text-accent text-lg">✉️</span>
                  </div>
                  <div>
                    <p className="text-accent font-bold uppercase tracking-widest text-[10px] mb-3">Official Registry</p>
                    <p className="text-primary text-xl font-serif italic break-all border-b border-primary/10 group-hover:border-accent transition-all">jay1802@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: High-Conversion Form */}
            <div className="lg:col-span-7 mt-16 lg:mt-0">
              <div className="bg-primary p-8 md:p-20 relative overflow-hidden shadow-[0_60px_100px_-30px_rgba(0,0,0,0.2)]">
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-bl-full -mr-24 -mt-24" />
                
                <div className="mb-12 relative z-10">
                   <h3 className="text-white font-serif text-3xl italic mb-4">Request a Case Review</h3>
                   <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                         <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Confidential</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                         <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">24h Response</span>
                      </div>
                   </div>
                </div>

                {!submitted ? (
                  <form className="space-y-10 relative z-10" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-10">
                      <div className="group space-y-3">
                        <label htmlFor="name" className="block text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] group-focus-within:text-accent transition-colors">Professional Name</label>
                        <input id="name" type="text" required className="w-full bg-white/5 border-b border-white/10 py-4 px-2 focus:outline-none focus:border-accent transition-all text-white font-serif text-xl italic" placeholder="Enter full name" />
                      </div>
                      <div className="group space-y-3">
                        <label htmlFor="email" className="block text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] group-focus-within:text-accent transition-colors">Electronic Mail</label>
                        <input id="email" type="email" required className="w-full bg-white/5 border-b border-white/10 py-4 px-2 focus:outline-none focus:border-accent transition-all text-white font-serif text-xl italic" placeholder="email@address.com" />
                      </div>
                    </div>
                    
                    <div className="group space-y-3">
                      <label htmlFor="subject" className="block text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] group-focus-within:text-accent transition-colors">Subject of Legal Matter</label>
                      <input id="subject" type="text" required className="w-full bg-white/5 border-b border-white/10 py-4 px-2 focus:outline-none focus:border-accent transition-all text-white font-serif text-xl italic" placeholder="e.g. High Court Petition / Land Dispute" />
                    </div>
                    
                    <div className="pt-6">
                      <button type="submit" className="w-full py-8 bg-accent text-white font-serif font-bold uppercase tracking-[0.5em] hover:bg-white hover:text-primary transition-all duration-700 group overflow-hidden relative rounded-full shadow-2xl shadow-accent/20">
                        <span className="relative z-10 text-xs">Book My Consultation</span>
                        <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                      </button>
                    </div>
                    
                    <p className="text-[10px] text-white/20 text-center uppercase tracking-[0.4em] leading-loose font-bold italic">
                      CONSULTATION INITIATION DOES NOT CONSTITUTE PRIVILEGE.
                    </p>
                  </form>
                ) : (
                  <div className="relative z-10 text-center space-y-8 py-16">
                    <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-accent/20">
                      <span className="text-accent text-5xl">✓</span>
                    </div>
                    <h3 className="font-serif text-4xl text-white italic">Inquiry Successfully Transmitted.</h3>
                    <p className="text-white/50 font-serif text-xl italic max-w-sm mx-auto leading-relaxed">
                      Your legal matter has been queued for review. Our principal advocate will contact you within the next 24 business hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-accent uppercase tracking-widest text-[11px] font-bold border-b border-accent/30 pb-2 hover:border-accent transition-all mt-10"
                    >
                      New Case Consultation
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
