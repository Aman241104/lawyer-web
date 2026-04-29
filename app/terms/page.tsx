"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Terms() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".terms-reveal", {
      y: 40,
      opacity: 0,
      duration: 1.4,
      stagger: 0.1,
      ease: "power4.out",
    });
  }, { scope: container });

  return (
    <div ref={container} className="stone-texture bg-white min-h-screen pt-48 pb-32 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8 terms-reveal">
          <span className="w-10 h-[1px] bg-accent" />
          <span className="text-[11px] md:text-xs font-bold text-accent tracking-[0.5em] uppercase">Legal Governance</span>
        </div>
        <h1 className="terms-reveal font-serif text-6xl md:text-8xl font-bold text-primary mb-24 italic leading-tight tracking-tighter">
          Terms of <br /> <span className="text-accent underline underline-offset-[16px] decoration-accent/10">Engagement.</span>
        </h1>
        
        <div className="terms-reveal grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-40 p-10 bg-[#fcfcfc] border border-primary/5 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/40 mb-6">Jurisdictional Notice</p>
              <p className="font-serif italic text-primary/70 text-lg leading-relaxed">
                "By interacting with this professional registry, the user acknowledges the regulatory mandates of the Bar Council of India."
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-8 space-y-20 text-primary/70 font-serif text-xl leading-relaxed italic">
            <section className="group">
              <div className="flex items-center gap-6 mb-8">
                <span className="text-accent/30 text-4xl font-serif">01</span>
                <h2 className="text-2xl font-bold text-primary italic border-b border-accent/20 pb-2">Regulatory Compliance</h2>
              </div>
              <p className="pl-12 border-l border-primary/5">
                This website is maintained in strict adherence to the rules prescribed by the Bar Council of India (BCI). All information is provided solely for general intelligence and does not constitute formal legal advice or the initiation of an attorney-client relationship.
              </p>
            </section>

            <section className="group">
              <div className="flex items-center gap-6 mb-8">
                <span className="text-accent/30 text-4xl font-serif">02</span>
                <h2 className="text-2xl font-bold text-primary italic border-b border-accent/20 pb-2">Anti-Solicitation Mandate</h2>
              </div>
              <p className="pl-12 border-l border-primary/5">
                The user acknowledges that their access to this registry is voluntary and has not been influenced by any form of advertisement, personal communication, or inducement from Jay G Patel or his associates.
              </p>
            </section>

            <section className="group">
              <div className="flex items-center gap-6 mb-8">
                <span className="text-accent/30 text-4xl font-serif">03</span>
                <h2 className="text-2xl font-bold text-primary italic border-b border-accent/20 pb-2">Liability Disclaimer</h2>
              </div>
              <p className="pl-12 border-l border-primary/5">
                While utmost care is taken to ensure the precision of published content, no liability is assumed for incidental errors or omissions. Users are encouraged to obtain independent legal counsel for specific jurisdictional matters.
              </p>
            </section>

            <section className="group">
              <div className="flex items-center gap-6 mb-8">
                <span className="text-accent/30 text-4xl font-serif">04</span>
                <h2 className="text-2xl font-bold text-primary italic border-b border-accent/20 pb-2">Intellectual Propriety</h2>
              </div>
              <p className="pl-12 border-l border-primary/5">
                All visual assets, identifiers, and literary content within this domain are the exclusive intellectual property of Advocate Jay G Patel. Unauthorized reproduction is prohibited under prevailing copyright statutes.
              </p>
            </section>

            <div className="pt-12 mt-20 border-t border-primary/5 flex justify-between items-center">
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">Last Revised · April 2026</p>
              <a href="#contact" className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary/40 hover:text-accent transition-colors">Return to Registry</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
