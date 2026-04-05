"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
      title: "Criminal Law", 
      icon: "🛡️",
      image: "/images/justice-scales.webp",
      description: "Legal representation in criminal matters including bail applications, quashing of FIRs, criminal revisions, and trials."
    },
    { 
      title: "Land Revenue", 
      icon: "📜",
      image: "/images/professional-briefcase.webp",
      description: "Expertise in land revenue matters, title verification, property disputes, and related litigation."
    },
    { 
      title: "Family Law", 
      icon: "👨‍👩‍👧‍👦",
      image: "/images/lawyer-portrait-3.webp",
      description: "Matrimonial disputes, divorce, maintenance, child custody, and succession matters."
    },
    { 
      title: "Corporate Law", 
      icon: "🏢",
      image: "/images/contract-signing.webp",
      description: "Advisory on corporate compliance, contract drafting, mergers and acquisitions, and dispute resolution."
    },
    { 
      title: "Real Estate Law", 
      icon: "🏠",
      image: "/images/contract-signing.webp",
      description: "Title verification, drafting of sale deeds, and RERA compliance. Representation in property-related litigation."
    },
    { 
      title: "Taxation Law", 
      icon: "📄",
      image: "/images/legal-team.webp",
      description: "Counseling on direct and indirect tax matters, including GST compliance and Income Tax appeals."
    },
    { 
      title: "Family Law", 
      icon: "👨‍👩‍👧‍👦",
      image: "/images/lawyer-portrait-3.webp",
      description: "Matrimonial disputes, divorce, maintenance, child custody, and succession matters."
    },
    { 
      title: "Arbitration", 
      icon: "🤝",
      image: "/images/legal-team.webp",
      description: "Representation in domestic and international commercial arbitrations and enforcement of awards."
    },
  ];

  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "500+", label: "Successful Consultations" },
    { value: "12+", label: "Courts of Representation" },
    { value: "Ahmedabad", label: "Primary Jurisdiction" },
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
      <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative overflow-hidden bg-primary">
        {/* Background Visuals */}
        <div className="hero-bg-accent absolute inset-0 -z-10 bg-[#020617]">
          <div className="absolute inset-0 bg-[url('/images/lawyer-working.webp')] bg-cover bg-center opacity-5 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(148,163,184,0.1),transparent_70%)]" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto w-full py-20 md:py-0">
          <div className="lg:col-span-8">
            <div className="hero-text-reveal">
              <span className="section-title !text-accent tracking-[0.4em] md:tracking-[0.8em] font-bold !mb-6 md:!mb-10">THE INDEPENDENT PRACTICE OF</span>
              <h1 className="font-serif text-5xl md:text-8xl lg:text-[11rem] font-bold text-white leading-tight md:leading-[0.85] tracking-tighter mb-8 md:mb-10">
                Advocate <br /> 
                <span className="text-accent italic md:translate-x-4 inline-block text-6xl md:text-8xl lg:text-[10rem]">Jay G Patel</span>
              </h1>
            </div>
            
            <div className="hero-platinum-line w-full max-w-md h-[1px] bg-accent/30 mb-10 md:mb-12 origin-left" />
            
            <div className="hero-text-reveal">
              <p className="text-white/70 text-[10px] md:text-base font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] max-w-xl leading-relaxed md:leading-loose italic">
                Personalized Legal Advocacy & Strategic Counsel in accordance with the Bar Council of India Rules.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="hero-image-reveal relative aspect-[4/5] platinum-border p-4 bg-white/5 backdrop-blur-3xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
              <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
                 <Image 
                   src="/images/logo-jay-g-patel.png" 
                   alt="Jay G Patel Advocate Logo" 
                   fill
                   className="object-contain transition-all duration-1000 p-8"
                   priority
                   sizes="(max-width: 1024px) 0px, 400px"
                 />
                 <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-1000" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white flex items-center justify-center text-primary font-serif p-4 text-center border border-accent shadow-2xl">
                 <span className="text-[10px] uppercase font-bold tracking-widest leading-tight">CHANDKHEDA <br/> AHMEDABAD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Explore Hint */}
        <div className="absolute bottom-10 left-10 md:bottom-16 md:left-20 flex items-center gap-4 md:gap-8 text-white/60">
          <span className="text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold">Scroll Down</span>
          <div className="w-16 md:w-32 h-[1px] bg-white/40" />
        </div>
      </section>

      {/* SECTION: ABOUT & BIO */}
      <section id="about" className="reveal-section py-section px-6 md:px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-40 mb-20 lg:mb-0">
            <div className="relative group max-w-xs md:max-w-md mx-auto lg:max-w-none">
              <div className="aspect-[4/5] bg-primary/[0.02] border border-primary/5 overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]">
                <Image 
                  src="/images/jay-g-patel.png" 
                  alt="Jay G Patel - Advocate" 
                  fill
                  className="object-cover transition-all duration-1000 scale-110 group-hover:scale-100"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-32 h-32 md:w-48 md:h-48 bg-primary flex flex-col items-center justify-center text-white font-serif text-center p-4 md:p-8 shadow-2xl">
                <span className="text-accent text-3xl md:text-4xl italic mb-1 md:mb-2">15+</span>
                <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold leading-tight">Years of Academic <br/> & Legal Precision</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 legal-line relative">
            <span className="section-title">Professional Biography</span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight italic mb-8 md:mb-12">
              Jay G Patel, <span className="text-accent text-3xl md:text-5xl">Advocate</span>
            </h2>
            <div className="space-y-8 md:space-y-12 text-primary/70 text-base md:text-xl leading-relaxed font-serif">
              <p className="first-letter:text-5xl md:first-letter:text-6xl first-letter:font-serif first-letter:text-accent first-letter:float-left first-letter:mr-3 md:first-letter:mr-4 first-letter:mt-1 md:first-letter:mt-2">
                As an independent advocate enrolled with the Bar Council of Gujarat (Enrolment No: G/1876/2008), I am dedicated to maintaining the highest standards of professional conduct and academic rigour before the Hon&apos;ble Gujarat High Court and District Courts. My practice is built on a foundation of integrity and specialized legal knowledge.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-12 md:gap-16 mt-16 md:mt-24 p-8 md:p-16 bg-[#fafafa] border border-primary/5 relative">
                <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-accent/5 rounded-bl-full" />
                <div>
                  <h3 className="text-primary font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-6 md:mb-8 text-accent pb-2 border-b-2 border-accent/20 inline-block italic">Credentials & Background</h3>
                  <ul className="space-y-6 md:space-y-8 text-sm md:text-base">
                    <li><p className="font-bold text-primary">B.Com, LL.B.</p><p className="text-[9px] md:text-[10px] italic font-sans text-primary/70 uppercase tracking-widest mt-1">Educational Background</p></li>
                    <li><p className="font-bold text-primary">Ahmedabad District Bar Association</p><p className="text-[9px] md:text-[10px] italic font-sans text-primary/70 uppercase tracking-widest mt-1">Member</p></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-primary font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-6 md:mb-8 text-accent pb-2 border-b-2 border-accent/20 inline-block italic">Practice Focus</h3>
                  <ul className="space-y-3 md:space-y-4 text-sm md:text-base italic text-primary/80">
                    <li className="flex items-center gap-3 md:gap-4"><div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-accent" />Criminal Law</li>
                    <li className="flex items-center gap-3 md:gap-4"><div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-accent" />Land Revenue</li>
                    <li className="flex items-center gap-3 md:gap-4"><div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-accent" />Family Law</li>
                    <li className="flex items-center gap-3 md:gap-4"><div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-accent" />Corporate Law</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: STATS (PLATINUM STRIP) */}
      <section className="reveal-section py-16 md:py-24 bg-primary relative overflow-hidden platinum-border border-x-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-sharp-edges.png')] opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group border-r last:border-0 border-white/5">
                <p className="text-4xl md:text-7xl font-serif text-white italic mb-2 md:mb-4 group-hover:text-accent transition-colors duration-700">{stat.value}</p>
                <p className="text-[8px] md:text-[10px] text-accent uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: PRACTICE AREAS */}
      <section id="practice" className="reveal-section py-section px-6 md:px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-40 gap-8 md:gap-10">
            <div className="max-w-3xl">
              <span className="section-title">Legal Specializations</span>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter italic text-primary leading-none">
                My Areas of Expertise
              </h2>
            </div>
            <div className="max-w-sm border-l-4 border-accent pl-6 md:pl-10">
               <p className="text-primary/60 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[8px] md:text-[9px] font-bold leading-loose italic">
                Furnishing factual details of the legal services I provide in compliance with the rules of the Bar Council of India.
               </p>
            </div>
          </div>

          <div className="practice-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/5 platinum-border shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)]">
            {practiceAreas.map((area, index) => (
              <div key={index} className="practice-card group relative p-10 md:p-16 bg-primary md:bg-white hover:bg-primary transition-colors duration-700 overflow-hidden">
                {/* Background Image on Hover */}
                <div className="absolute inset-0 opacity-10 md:opacity-0 md:group-hover:opacity-10 transition-opacity duration-1000 scale-100 md:scale-125 md:group-hover:scale-100 transform duration-1000">
                  <Image 
                    src={area.image} 
                    alt={area.title} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                
                <div className="relative z-10">
                  <span className="text-3xl md:text-4xl mb-8 md:mb-12 block group-hover:rotate-12 transition-all duration-700 opacity-100 md:opacity-20 md:group-hover:opacity-100">{area.icon}</span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white md:text-primary group-hover:text-white transition-colors duration-700 uppercase tracking-widest mb-6 md:mb-8">
                    {area.title}
                  </h3>
                  <p className="text-xs md:text-sm text-accent md:text-primary/70 group-hover:text-accent leading-relaxed transition-all duration-700 font-serif italic">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: WORKING HOURS & FAQ */}
      <section className="reveal-section py-section px-6 md:px-4 bg-[#f1f5f9]/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 md:gap-32">
          <div className="lg:col-span-5">
            <span className="section-title">Availability Profile</span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary italic mb-10 md:mb-20">Office <br className="hidden md:block"/>Schedule</h2>
            <div className="platinum-border overflow-hidden bg-white shadow-2xl rounded-sm">
              <table className="w-full text-left">
                <tbody>
                  {workingHours.map((row, i) => (
                    <tr key={i} className="border-b border-primary/5 last:border-0 hover:bg-primary hover:text-white transition-all duration-500 group">
                      <td className="p-4 md:p-8 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary/70 group-hover:text-accent transition-colors">{row.day}</td>
                      <td className="p-4 md:p-8 text-sm md:text-base font-serif italic">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="lg:col-span-7 mt-12 md:mt-20 lg:mt-0">
            <span className="section-title">Informational Support</span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary italic mb-10 md:mb-20">Legal FAQ</h2>
            <div className="space-y-12 md:space-y-16">
              {faqs.map((faq, i) => (
                <div key={i} className="group border-b border-primary/5 pb-12 md:pb-16">
                  <p className="text-xl md:text-2xl font-serif italic text-primary mb-6 md:mb-8 group-hover:text-accent transition-colors decoration-accent/10 underline underline-offset-[12px] md:underline-offset-[16px] decoration-1">Q: {faq.q}</p>
                  <p className="text-sm md:text-base text-primary/70 leading-relaxed font-serif italic pl-6 md:pl-10 border-l-2 border-accent/20">A: {faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CONTACT */}
      <section id="contact" className="reveal-section py-section px-6 md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 md:gap-40 items-center">
            <div>
              <span className="section-title">Direct Communication</span>
              <h2 className="font-serif text-6xl md:text-9xl font-bold text-primary mb-12 md:mb-20 italic leading-none tracking-tighter">
                Professional <br /> <span className="text-accent">Registry</span>
              </h2>
              
              <div className="space-y-12 md:space-y-20">
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
              </div>
            </div>

            <div className="mt-20 lg:mt-0 p-8 md:p-20 platinum-border shadow-[0_60px_100px_-30px_rgba(0,0,0,0.1)] relative bg-white overflow-hidden rounded-none min-h-[500px] flex flex-col justify-center">
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
      </section>
    </div>
  );
}
