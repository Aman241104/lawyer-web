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
      icon: "🛡️",
      image: "/images/justice-scales.webp",
      description: "Comprehensive legal representation in criminal matters including bail applications, quashing of FIRs, criminal revisions, and trials."
    },
    { 
      title: "Land Revenue", 
      icon: "📜",
      image: "/images/professional-briefcase.webp",
      description: "Expertise in land revenue matters, title verification, property disputes, and related litigation across Gujarat."
    },
    { 
      title: "Family Law", 
      icon: "👨‍👩‍👧‍👦",
      image: "/images/lawyer-portrait-3.webp",
      description: "Handling matrimonial disputes, divorce, maintenance, child custody, and succession matters with sensitivity."
    },
    { 
      title: "Corporate Law", 
      icon: "🏢",
      image: "/images/contract-signing.webp",
      description: "Strategic advisory on corporate compliance, contract drafting, and commercial dispute resolution."
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
      {/* SECTION: HERO (REFINED ADVOCACY THEME) */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-primary pt-20">
        {/* Decorative Background Shape */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[#1a2e2a]/30 -z-10 clip-path-hero" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid lg:grid-cols-2 gap-12 items-center z-10">
          <div className="text-left">
            <div className="hero-reveal mb-6 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-accent" />
              <span className="text-[10px] md:text-xs font-bold text-accent tracking-[0.4em] uppercase">
                Championing your cause: shaping the future
              </span>
            </div>
            
            <h1 className="hero-reveal font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] mb-10">
              We advocate <br /> <span className="italic text-accent">for change</span>
            </h1>
            
            <p className="hero-reveal text-white/60 text-sm md:text-lg font-serif italic max-w-md mb-12 leading-relaxed">
              Advocacy is a dynamic legal practice dedicated to driving meaningful change and providing strategic counsel.
            </p>

            <div className="hero-reveal">
              <a 
                href="#contact" 
                className="inline-block py-5 px-10 bg-white text-primary font-bold text-[10px] uppercase tracking-[0.4em] hover:bg-accent hover:text-white transition-all duration-500 rounded-full"
              >
                Schedule an Appointment
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] hero-reveal">
            <div className="absolute inset-0 border border-white/10 m-4 -z-10" />
            <Image 
              src="/images/canvas.png" 
              alt="Advocate Jay G Patel" 
              fill
              className="object-cover transition-all duration-1000"
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
            />
            {/* Floating Values Overlay */}
            <div className="absolute bottom-12 -left-8 hidden lg:block space-y-4">
              {['Integrity', 'Transparency', 'Collaboration'].map((value) => (
                <div key={value} className="flex items-center gap-4 bg-primary/40 backdrop-blur-md py-3 px-6 border border-white/10 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: ABOUT (REFINED ADVOCACY THEME) */}
      <section id="about" className="reveal-section py-section px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-6 h-[1px] bg-accent" />
              <span className="text-[10px] md:text-xs font-bold text-accent tracking-[0.4em] uppercase">About us</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-8">
              At Advocacy, we don’t just represent our clients—we champion their cause and <span className="italic text-accent">amplify their voices</span> to create lasting change
            </h2>
          </div>
          
          <div className="lg:col-span-5 lg:pt-20">
            <p className="text-primary/70 text-sm md:text-lg font-serif italic mb-10 leading-relaxed">
              We are passionate advocates for positive change. Our practice is built on the belief that strategic advocacy can transform industries, influence policy, and create opportunities for growth.
            </p>
            <a 
              href="#team" 
              className="inline-block py-4 px-8 border border-primary/10 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-primary hover:text-white transition-all duration-500 rounded-full"
            >
              About Us
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: VALUES & STATS (REFINED ADVOCACY THEME) */}
      <section className="reveal-section py-section px-6 md:px-8 bg-[#fcfcfc] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <span className="w-6 h-[1px] bg-accent" />
                <span className="text-[10px] md:text-xs font-bold text-accent tracking-[0.4em] uppercase">Our values</span>
              </div>
              <div className="space-y-6">
                <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-primary opacity-20 hover:opacity-100 transition-opacity duration-700 cursor-default">Integrity</h2>
                <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-primary opacity-20 hover:opacity-100 transition-opacity duration-700 cursor-default">Transparency</h2>
                <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-primary opacity-20 hover:opacity-100 transition-opacity duration-700 cursor-default">Collaboration</h2>
              </div>
            </div>
            
            <div className="relative aspect-square">
               <div className="absolute inset-10 border border-primary/5 -z-10" />
               <div className="absolute inset-0 flex items-center justify-center p-8 md:p-20">
                  <div className="bg-white p-12 shadow-2xl platinum-border max-w-sm">
                     <h4 className="font-serif text-2xl font-bold text-primary mb-4 italic">Integrity</h4>
                     <p className="text-primary/70 text-sm font-serif italic leading-relaxed">
                       We believe in acting with honesty, transparency, and accountability. Our commitment to ethical practices ensures that our advocacy is always rooted in trust and credibility.
                     </p>
                  </div>
               </div>
               <div className="absolute top-0 right-0 w-full h-full -z-20">
                  <Image 
                    src="/images/legal-team.webp" 
                    alt="Values background" 
                    fill 
                    className="object-cover opacity-10"
                  />
               </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-20 border-t border-primary/5">
            {[
              { value: "15+", label: "Years of experience" },
              { value: "500+", label: "Successful consultations" },
              { value: "95%", label: "Client satisfaction rate" },
              { value: "5K+", label: "Clients across the region" },
            ].map((stat, i) => (
              <div key={i} className="group">
                <p className="text-5xl md:text-7xl font-serif text-primary mb-4 group-hover:text-accent transition-colors duration-700">{stat.value}</p>
                <p className="text-[10px] md:text-xs text-primary/40 uppercase tracking-[0.3em] font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: SERVICES (REFINED ADVOCACY THEME) */}
      <section id="practice" className="reveal-section py-section px-6 md:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1px] bg-accent" />
              <span className="text-[10px] md:text-xs font-bold text-accent tracking-[0.4em] uppercase">Our services</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary leading-tight">
              We offer a range of <br /> <span className="italic text-accent">strategic services</span>
            </h2>
          </div>

          <div className="practice-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.slice(0, 3).map((area, index) => (
              <div key={index} className="group relative aspect-[4/5] overflow-hidden bg-primary p-10 flex flex-col justify-between">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 transition-all duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60">
                  <Image 
                    src={area.image} 
                    alt={area.title} 
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-1" />

                <div className="relative z-10">
                  <span className="text-white/60 font-serif text-xl italic mb-4 block">0{index + 1}</span>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {area.title}
                  </h3>
                </div>

                <div className="relative z-10">
                   <p className="text-white/70 text-sm md:text-base font-serif italic mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {area.description}
                  </p>
                  <a 
                    href="#contact" 
                    className="inline-block py-3 px-6 bg-white text-primary font-bold text-[9px] uppercase tracking-[0.4em] rounded-full hover:bg-accent hover:text-white transition-all duration-500"
                  >
                    Learn More
                  </a>
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

      {/* SECTION: TEAM (ADVOCACY THEME) */}
      <section id="team" className="reveal-section py-section px-6 md:px-4 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24 md:mb-40">
            <span className="section-title">Legal Practitioner</span>
            <h2 className="font-serif text-5xl md:text-8xl font-bold italic text-white leading-tight mb-8">
              The mind behind <span className="text-accent">Advocacy</span>
            </h2>
            <p className="max-w-2xl text-white/60 text-sm md:text-lg font-serif italic">
              Dedicated to creating positive change through strategic legal counsel and personalized advocacy.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="group relative overflow-hidden platinum-border border-white/10 aspect-[3/4] w-full max-w-md">
              <Image 
                src="/images/canvas.png" 
                alt="Jay G Patel" 
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 z-10">
                <h3 className="font-serif text-3xl font-bold text-white mb-2 italic">Jay G Patel</h3>
                <p className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Principal Advocate</p>
              </div>
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
                    FF – 13, Omkar Lotus, Opp. SMVS Swaminarayan Temple,<br />
                    Chandkheda To Motera Road,<br />
                    Chandkheda, Ahmedabad – 382424
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
