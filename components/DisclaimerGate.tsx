"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const DisclaimerGate = () => {
  const [status, setStatus] = useState<"checking" | "accepted" | "pending">("checking");
  const gateRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkStatus = () => {
      const accepted = localStorage.getItem("bci_disclaimer_accepted");
      if (accepted === "true") {
        setStatus("accepted");
      } else {
        setStatus("pending");
        // Animate entry after setting pending
        if (contentRef.current) {
          gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.1 }
          );
        }
      }
    };

    // Use a small timeout to move setState out of the synchronous effect body
    const timer = setTimeout(checkStatus, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    gsap.to(gateRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        setStatus("accepted");
        localStorage.setItem("bci_disclaimer_accepted", "true");
        window.dispatchEvent(new Event("site_ready"));
      },
    });
  };

  if (status === "checking" || status === "accepted") return null;

  return (
    <div
      ref={gateRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary p-4 md:p-8"
    >
      <div
        ref={contentRef}
        className="max-w-2xl bg-white p-8 md:p-12 shadow-2xl border-t-4 border-accent"
      >
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6 text-center uppercase tracking-wider">
          Disclaimer
        </h2>
        <div className="space-y-4 text-primary/80 text-sm md:text-base leading-relaxed text-justify">
          <p>
            The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, you acknowledge and confirm that you are seeking information of your own accord and that there has been no solicitation, advertisement, or inducement by this website or its owner.
          </p>
          <p>
            The content provided on this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material or information provided on this website should be construed as legal advice.
          </p>
          <p>
            The owner of this website shall not be liable for any consequences of any action taken by the user relying on material / information provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleAccept}
            className="px-8 py-3 bg-primary text-white hover:bg-accent transition-colors duration-300 font-serif font-semibold tracking-wide"
          >
            I AGREE & ENTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerGate;
