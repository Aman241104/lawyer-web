import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-32 pb-16 border-t border-white/5 mt-auto relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 right-0 font-serif text-[15vw] font-bold text-white/[0.01] leading-none pointer-events-none translate-y-1/4 select-none uppercase">
        Advocate
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Top Footer: CTA & Brand */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-24 items-start">
          <div className="lg:col-span-5">
            <Link href="/" className="mb-10 block">
              <Image 
                src="/images/logo-jay-g-patel.png" 
                alt="Jay G Patel" 
                width={200} 
                height={200} 
                className="w-auto h-20"
              />
            </Link>
            <h3 className="font-serif text-3xl md:text-4xl italic text-white mb-8 leading-tight max-w-sm">
              Strategic Advocacy. <br /> <span className="text-accent">Unwavering Integrity.</span>
            </h3>
            <p className="text-white/40 text-base leading-relaxed mb-12 italic font-serif max-w-md">
              Providing expert legal counsel and sophisticated representation at the Gujarat High Court for over 15 years. Dedicated to professional excellence and client success.
            </p>
            <div className="flex gap-8 items-center">
              {["INSTAGRAM", "LINKEDIN", "TWITTER"].map((social) => (
                <span key={social} className="text-[10px] font-bold tracking-[0.5em] text-accent hover:text-white transition-all cursor-pointer">
                  {social}
                </span>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col md:flex-row justify-between gap-12 lg:pl-12">
            <div className="flex-1">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.5em] text-accent mb-10">Expertise</h4>
              <ul className="space-y-5">
                {["Criminal Law", "Land Revenue", "Family Law", "Corporate Law", "Arbitration"].map((link) => (
                  <li key={link}>
                    <span className="text-sm font-serif italic text-white/60 hover:text-white transition-colors cursor-pointer flex items-center gap-3 group">
                      <span className="w-4 h-[1px] bg-accent/30 group-hover:w-6 transition-all" />
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex-1">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.5em] text-accent mb-10">Resources</h4>
              <ul className="space-y-5">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Profile", href: "/#about" },
                  { label: "Legal Services", href: "/#practice" },
                  { label: "High Court Team", href: "/#team" },
                  { label: "Office Schedule", href: "/#contact" }
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm font-serif italic text-white/60 hover:text-white transition-colors flex items-center gap-3 group">
                      <span className="w-4 h-[1px] bg-accent/30 group-hover:w-6 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1">
               <h4 className="text-[11px] font-bold uppercase tracking-[0.5em] text-accent mb-10">Chambers</h4>
               <div className="space-y-8">
                  <p className="text-sm font-serif italic text-white/60 leading-relaxed">
                    FF-13, Omkar Lotus, <br />
                    Chandkheda To Motera Road, <br />
                    Ahmedabad, Gujarat 382424
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-serif italic text-white/60">jay1802@gmail.com</p>
                    <p className="text-lg font-serif italic text-white font-bold">+91 99987 14891</p>
                  </div>
                  <Link 
                    href="/#contact"
                    className="inline-block py-4 px-8 border border-accent/30 text-[10px] font-bold uppercase tracking-[0.4em] text-accent hover:bg-accent hover:text-white transition-all duration-500 rounded-full"
                  >
                    Book Consultation
                  </Link>
               </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer: Legal & Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">
          <p>
            © {new Date().getFullYear()} Advocate Jay G Patel. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
             <Link href="/terms" className="hover:text-accent transition-colors">
              Regulatory Disclaimer
            </Link>
            <span className="cursor-default">Privacy Protocol</span>
            <span className="cursor-default">Accessibility Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
