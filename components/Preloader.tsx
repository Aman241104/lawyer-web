"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsAccepted] = useState(false);

  useEffect(() => {
    // Check if user already accepted disclaimer (preloader only once per session)
    const accepted = sessionStorage.getItem("preloader_done");
    if (accepted === "true") {
      setTimeout(() => {
        setIsAccepted(true);
        if (localStorage.getItem("bci_disclaimer_accepted") === "true") {
          window.dispatchEvent(new Event("site_ready"));
        }
      }, 0);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAccepted(true);
        sessionStorage.setItem("preloader_done", "true");
        // If disclaimer was already accepted, preloader is the last gate
        if (localStorage.getItem("bci_disclaimer_accepted") === "true") {
          window.dispatchEvent(new Event("site_ready"));
        }
      }
    });

    tl.set(preloaderRef.current, { visibility: "visible" })
      .fromTo(textRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
      .fromTo(lineRef.current, 
        { scaleX: 0 }, 
        { scaleX: 1, duration: 1.5, ease: "power4.inOut" },
        "-=0.5"
      )
      .to(preloaderRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
        delay: 0.5
      });
  }, []);

  if (isLoaded) return null;

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center invisible"
    >
      <div ref={textRef} className="text-center">
        <span className="text-[10px] text-accent tracking-[0.8em] font-bold block mb-4 uppercase">Independent Legal Practice</span>
        <h2 className="font-serif text-4xl md:text-6xl text-white italic font-bold">Advocate Name</h2>
      </div>
      <div 
        ref={lineRef}
        className="w-48 h-[1px] bg-accent/30 mt-8 origin-center"
      />
    </div>
  );
}
