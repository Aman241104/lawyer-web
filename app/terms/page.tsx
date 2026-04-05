"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Terms() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".terms-reveal", {
      y: 30,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out",
    });
  }, { scope: container });

  return (
    <div ref={container} className="stone-texture bg-white min-h-screen pt-40 pb-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <span className="terms-reveal section-title">Legal Governance</span>
        <h1 className="terms-reveal font-serif text-5xl md:text-7xl font-bold text-primary mb-12 italic">Terms & <br className="hidden md:block" /> Conditions</h1>
        
        <div className="terms-reveal space-y-12 text-primary/70 font-serif text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 italic">1. Compliance with Bar Council Rules</h2>
            <p>
              This website is designed and maintained in strict compliance with the rules and regulations of the Bar Council of India (BCI). The information provided herein is for informational purposes only and does not constitute legal advice, solicitation, or an attorney-client relationship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 italic">2. No Solicitation</h2>
            <p>
              By accessing this website, you acknowledge that there has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from Jay G Patel or any associates to solicit any work through this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 italic">3. Disclaimer of Liability</h2>
            <p>
              While every effort is made to ensure the accuracy of the information presented, Jay G Patel shall not be liable for any loss or damage caused by inaccuracies, errors, or omissions. Users are advised to seek independent legal counsel for specific legal issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 italic">4. Intellectual Property</h2>
            <p>
              The content, design, and logo of this website are the intellectual property of Jay G Patel. Unauthorized reproduction or distribution of any part of this site is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 italic">5. Jurisdiction</h2>
            <p>
              Any disputes arising out of or in connection with the use of this website shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat, India.
            </p>
          </section>

          <div className="pt-12 border-t border-primary/10">
            <p className="text-sm uppercase tracking-[0.2em] font-bold text-accent">Last Updated: April 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
